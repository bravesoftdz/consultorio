import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getBanners, deleteBanner } from '../redux/actions/banner'
import '../styles/banners.css'

const BannerDashboard = () => {


    const banners = useSelector((state) => state.banners.banners)
    const history =  useHistory();
    const dispatch = useDispatch()

    const [deletingBanner, setDeletingBanner] = useState(false)

    useEffect(() => {
        dispatch(getBanners());
    }, [])

    const deleteBanners = (id) => {

        if (deletingBanner) {
            return
        }

        try {
            setDeletingBanner(true)
            let result = window.confirm("Estas seguro de eliminar este banner?, recuerda que tambien se borrará de tu pagina de inicio")
            if(result === true) {
                dispatch(deleteBanner(id))
                setTimeout(() => {
                    dispatch(getBanners());
                    history.push('/dashboard/banners');
                }, 2000);
            }
            setDeletingBanner(false)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div className="BannerDashboard">
            <div className="header-banner">
            {banners && banners.length > 0 ? <p>Su galería de banners</p>
            : <p>Actualmente no se tienes banners en su pagina de inicio</p>    
        }
                <Link to="/dashboard/banners/nuevo">Agregar banner</Link>
            </div>
            <div className="container-gallery_banner">
                {
                    banners && banners.length > 0 ? 
                    banners.map(banner => (
                        <div className="banner-item" key={banner.id}>
                            <img src={banner.image} alt=""/>
                            <p>{banner.title}</p>
                            <button className="delete-banner" onClick={()=>deleteBanners(banner.id)}><i className="fas fa-trash"></i></button>
                        </div>
                    )) : 
                    <img src={require('../images/deslizador.png')} alt="imagen del banner" />
                }
            </div>
        </div>
     );
}
 
export default BannerDashboard;