import React, { Fragment } from 'react'
import Slider from 'react-slick'
import Presentation from './Presentation';

const Services = ({clients}) => {

    const settingsClients = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Fragment>
            <section className="Services Background__Services" id="services">
                <Presentation title="Servicios" top="Top" />
                <div className="Row__Services">
                    <h2 style={{marginTop: "0px", display: "none"}}>Descubre nuestros servicios</h2>
                    <div data-aos="flip-up" className="Service">
                        <a href="/servicios/consultoría">
                            <img src={require('../images/service1.webp')} alt="imagen" />
                            <p>ASESORÍA Y CONSULTORÍA PARA SERVICIOS DE SALUD</p>
                        </a>
                    </div>
                    <div data-aos="flip-up" className="Service">
                        <a href="/servicios/asesoría-consultoría-sistemas-de-salud-ocupacional">
                            <img src={require('../images/service2.webp')} alt="imagen" />
                            <p>ASESORÍA Y CONSULTORÍA EN SISTEMAS DE GESTIÓN DE SALUD OCUPACIONAL</p>
                        </a>
                    </div>
                    <div data-aos="flip-up" className="Service">
                        <a href="/servicios/capacitaciones">
                            <img src={require('../images/service3.webp')} alt="imagen" />
                            <p>CAPACITACIONES</p>
                        </a>
                    </div>
                </div>
            </section>

            <section className="Benef" id="benefeces">
                <div className=""
                    style={{
                        height: "5vh",
                        position: "relative",
                        top: "0px",
                        background: "#E5E5E5",
                        width: "100%"
                    }}
                >
                </div>
                <h2 data-aos="fade-up">Beneficios para tu empresa</h2>
                <div className="Container">
                    <div data-aos="fade-up" className="Img__Container"
                        data-wow-duration="4s"
                        data-wow-delay="0.1s">
                        <img src={require('../images/beneficios.webp')} alt="imagen" />
                    </div>
                    <div data-aos="fade-up" className="Info__Container Benef">
                        <p>
                            Manejar correctamente los sistemas de gestión es de gran importancia para evitar la informalidad, logrando el correcto desarrollo de una empresa y así asegurar el éxito de la misma.<br /> <br /> En la actualidad, debido a los momentos difíciles que se atraviesan en el mundo, es vital hacernos cargo del cuidado de la salud, priorizando los sistemas de seguridad, sobre todo en el ambiente laboral.
                    </p>
                    </div>
                </div>
            </section>

            <section className="Clients">
                <h2>Confian en nosotros</h2>
                <div className="Relative Background" style={{ paddingTop: "40px", paddingBottom: "100px" }}>
                    <Slider {...settingsClients} className="Clients__Slider">
                        {
                            clients.map(client => (
                                <div className="Image__Client" key={client.id}>
                                    <img src={client.image} style={{outline: "none"}} alt="imagen"/>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </section>
        </Fragment>
    );
}

export default Services;