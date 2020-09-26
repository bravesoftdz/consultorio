import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { createBanner } from '../redux/actions/banner'
import { setAlert } from '../redux/actions/alert'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'
import $ from 'jquery'

const BannerNewDashboard = () => {

    const root = "http://api.consultorioempresarial.pe"

    const dispatch = useDispatch();
    const history = useHistory();
    const [uploadingImage, setUploadingImage] = useState(false)
    const [submitingPost, setSubmitingPost] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [banner, setBanner] = useState({
        title: '',
        image: ''
    })

    useEffect(() => {
        $('#profile-image').change(function (e) {
            addImage(e);
        });
        function addImage(e) {
            try {
                var file = e.target.files[0],
                    imageType = /image.*/;
                if (file) {
                    if (!file.type.match(imageType))
                        return;
                }

                var reader = new FileReader();
                reader.onload = fileOnload;
                reader.readAsDataURL(file);

            } catch (error) {
                console.log("Error recuperar imagen");
            }

            function fileOnload(e) {
                var result = e.target.result;
                $('#imgPerfil').attr("src", result);
            }
        }
    }, [])

    const handleChange = (e) => {
        setBanner({
            ...banner,
            [e.target.name]: e.target.value
        })
    }

    const fileSelectedHandler = event => {
        let file = event.target.files[0]
        console.log(file)
        setBanner({
            ...banner,
            image: file
        })
    }

    const bannerSubmit = async (e) => {

        e.preventDefault();

        const { title, image } = banner

        if (submitingPost) {
            return
        }

        if (title === '') {
            dispatch(setAlert('Debes ingresar el titulo de tu banner', 'danger', 5000))
            return
        }


        if (!image) {
            dispatch(setAlert('Debes agregar una imagen para tu banner', 'danger', 5000))
            return
        }

        try {
            setSubmitingPost(true)

            let formData = new FormData()
            formData.append('image', image, title)

            await dispatch(createBanner(formData))
            setSubmitingPost(false)
            history.push('/dashboard/banners')
        } catch (error) {
            console.log(error)
        }
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="new-banner ">
            <div className="header-banner">
                <p>Agrega un nuevo banner</p>
                <Link to="" className="btn-new" onClick={goBack}>Volver</Link>
            </div>
            <Alert />
            <div className="container-new_banner">
                <div className="input">
                    <input type="text" onChange={handleChange} placeholder="Titulo del banner" name="title" id="" />
                </div>
                <img style={{width:"450px"}} id="imgPerfil" src={imageUrl || require('../images/uploadimage.jpg')} alt="img" />
                <input type="file" name="image" id="profile-image" accept="image/*" onChange={fileSelectedHandler} />
                <div className="btn-save">
                    <button onClick={bannerSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
}

export default BannerNewDashboard;