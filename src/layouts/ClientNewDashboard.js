import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { createClient } from '../redux/actions/client'
import { setAlert } from '../redux/actions/alert'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'
import $ from 'jquery'

const ClientNewDashboard = () => {

    const root = "http://api.consultorioempresarial.pe"

    const dispatch = useDispatch();
    const isAuth = useSelector((state => state.auth.isAuthenticated))
    console.log(isAuth)
    const history = useHistory();
    const [uploadingImage, setUploadingImage] = useState(false)
    const [submitingPost, setSubmitingPost] = useState(false)
    const [imageUrl, setImageUrl] = useState('')
    const [client, setClient] = useState({
        title: '',
        image: '',
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
        setClient({
            ...client,
            [e.target.name]: e.target.value
        })
    }

    
    const fileSelectedHandler = event => {
        let file = event.target.files[0]
        console.log(file)
        setClient({
            ...client,
            image: file
        })
    }

    const clientSubmit = async (e) => {

        e.preventDefault();

        const { title, image } = client
        if (submitingPost) {
            return
        }

        if (uploadingImage) {
            console.log('La imagen esta cargando')
            return
        }

        if (title === '') {
            dispatch(setAlert('Debes ingresar el titulo de tu cliente', 'danger', 5000))
            return
        }


        if (!image) {
            dispatch(setAlert('Debes agregar una imagen de tu nuevo cliente', 'danger', 5000))
            return
        }

        try {
            setSubmitingPost(true)
            
            let formData = new FormData()
            formData.append('image', image, title)

            await dispatch(createClient(formData))
            setSubmitingPost(false)
            history.push('/dashboard/clientes')
        } catch (error) {
            console.log(error)
        }
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <div className="new-client ">
            <div className="header-client">
            <p>Agrega un nuevo cliente</p>
            <Link to="" className="btn-new" onClick={goBack}>Volver</Link>
            </div>
            <Alert />
            <div className="container-new_client">
                <div className="input">
                    <input type="text" onChange={handleChange} placeholder="Nombre del cliente" name="title" id="" />
                </div>
                <img style={{width:"450px"}} id="imgPerfil" src={imageUrl || require('../images/uploadimage.jpg')} alt="img" />
                <input type="file" name="image" id="profile-image" accept="image/*" onChange={fileSelectedHandler} />
                <div className="btn-save">
                    <button onClick={clientSubmit}>Guardar</button>
                </div>
            </div>
        </div>
    );
}

export default ClientNewDashboard;
