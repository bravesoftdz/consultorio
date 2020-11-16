import React from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import Alert from './Alert';
import { useState } from 'react';
import ModalSend from '../components/ModalSend'

const ContactForm = () => {

    const dispatch = useDispatch()

    const root = "http://api.consultorioempresarial.pe"

    const { register, handleSubmit, errors } = useForm()

    const [send, setSend] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const sendMessage = async (body, e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            setSend(true)
            const { data } = await axios.post(`${root}/api/gmail`, body, config)
            if (data === "Success") {
                setShowModal(true)
                e.target.reset();
                setSend(false)
                return
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="Bg__Services Container" style={{ marginBottom: "60px", paddingTop:"0px" }} id="contact" >
                <h1 data-aos="fade-up" style={{ top: "450px" }}>Contacto</h1>
            </div>
            <div className="Container" style={{ alignItems: "center", marginBottom: "20px" }}>
                <div data-aos="fade-up" className="Img__Form" style={{ position: "relative" }}>
                    <img src={require('../images/contact.webp')} alt="" />
                </div>
                <div className="Form">
                    <div data-aos="fade-up" className="Container__Contact">
                        <h2>Contáctanos</h2>
                        <form onSubmit={handleSubmit(sendMessage)}>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder="Nombre Completo"
                                    name="user"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese sus nombres completos'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="text-danger text-small d-block mb-2">
                                {errors.user && errors.user.message}
                            </span>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder="Teléfono"
                                    name="phone"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su teléfono'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="text-danger text-small d-block mb-2">
                                {errors.phone && errors.phone.message}
                            </span>
                            <div className="input">
                                <input
                                    type="text"
                                    placeholder="Correo"
                                    name="email"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su correo'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="text-danger text-small d-block mb-2">
                                {errors.email && errors.email.message}
                            </span>
                            <div className="input">
                                <textarea
                                    type="text"
                                    placeholder="Consulta"
                                    name="message"
                                    ref={
                                        register({
                                            required: {
                                                value: true,
                                                message: 'Ingrese su mensaje'
                                            }
                                        })
                                    }
                                />
                            </div>
                            <span className="text-danger text-small d-block mb-2">
                                {errors.message && errors.message.message}
                            </span>
                            <div className="" style={{ position: "relative" }}>
                                <Alert />
                            </div>
                            <div className="btn-sendGmail">
                                <button type="submit">{send === true ? `Enviando espere...` : `Enviar`}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            { showModal && <ModalSend closeModal={closeModal} /> }
        </>
    );
}

export default ContactForm;