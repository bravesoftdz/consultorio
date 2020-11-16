import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getBanners } from '../redux/actions/banner'
import { getClients } from '../redux/actions/client'
import { Link } from 'react-router-dom'

const Dashboard = () => {

    const banners = useSelector(state => state.banners.banners)
    const clients = useSelector(state => state.clients.clients)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBanners());
        dispatch(getClients())
    }, [])

    return ( 
        <>
        <div className="BannerDashboard">
            <div className="header-banner">
            {banners && banners.length > 0 ? <p>Su galería de banners</p>
            : <p>No se encontro banners en su pagina de inicio</p>    
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
                        </div>
                    )) : 
                    <img src={require('../images/deslizador.png')} alt="imagen del banner" />
                }
            </div>
        </div>
        <div className="ClientDashboard" style={{marginTop: "40px"}}>
        <div className="header-client">
            {clients && clients.length > 0 ? <p>Su galería de imagenes para sus clientes</p>
            : <p>No se encontro clientes en su pagina de servicios</p>    
        }
            <Link to="/dashboard/clientes/nuevo">Agregar cliente</Link>
        </div>
        <div className="container-gallery_client">
            {
                clients && clients.length > 0 ? 
                clients.map(client => (
                    <div className="client-item" key={client.id} style={{background: "#fff", borderRadius: "4px"} }>
                        <img src={client.image} alt="imagen cliente" style={{width: "100%", objectFit: "contain"}}/>
                        <p>{client.title}</p>
                    </div>
                )) : 
                <img src={require('../images/retratos.png')} alt="imagen del banner" />
            }
        </div>
    </div>
    </>
     );
}
 
export default Dashboard;