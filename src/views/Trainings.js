import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Summary from '../components/Summary'
import { withRouter } from 'react-router-dom'
import pdf3 from '../pdf/servicespdf3.pdf'

const Trainings = ({ history }) => {

    const [presentation, setPresentation] = useState(true)
    useEffect(() => {
        setPresentation(true)

        let accordion = document.querySelector('.accordion');
        let accordion_tab = document.querySelector('.accordion_tab')

        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active')
            accordion_tab.classList.toggle('active')
        })

        let accordion_ = document.querySelector('.accordion_');
        let accordion_tab_ = document.querySelector('.accordion_tab_')

        accordion_.addEventListener('click', () => {
            accordion_.classList.toggle('active')
            accordion_tab_.classList.toggle('active')
        })

    }, [])

    return (
        <Fragment>
            <Header />
            <Summary cssFz="Fz__Presentation" image={require('../images/serviceicon3.png')} presentation={presentation} title="capacitaciones" />
            <div style={{ fontFamily: "Nexa Light", marginTop: "50px", textAlign: "center", marginBottom: "60px" }}>
                <p className="" style={{padding: "20px", fontFamily: "Montserrat"}}>Ofrecemos capacitaciones presenciales y virtuales según la necesidad de cada empresa, brindando charlas especializadas.</p>
            </div>
            <div class="wrapper">
                <div class="accordion">
                    <div class="accordion_tab active">
                        <div style={{ fontFamily: "Montserrat", color: "#025C75", fontSize: "27px" }}>
                            <h6>Temas de capacitación de seguridad y salud en el trabajo</h6>
                        </div>
                        <div class="accordion_arrow">
                            <img src="https://i.imgur.com/PJRz0Fc.png" alt="arrow" />
                        </div>
                    </div>
                    <div class="accordion_content">
                        <div class="accordion_item">
                            <h5 style={{ color: "#17A1B3", fontFamily: "Montserrat", textTransform: "uppercase" }}>01 .- Relacionados al COVID- 19 para todos los rubros</h5>
                            <div className="" style={{ lineHeight: "20px", color: "#545454", fontFamily: "Nexa light", fontSize: "15px", marginTop: "20px" }}>
                                <p>Limpieza de ambientes de trabajo. Materiales, equipos y EPPs más adecuado.</p>
                                <p>Medidas de cuidado personal en el trabajo y durante el traslado a casa.</p>
                                <p>Pruebas para detección de enfermedad, su utilidad versus síntomas y signos de la enfermedad.</p>
                                <p>Vigilancia de la salud de los trabajadores para evitar contagios dentro de la empresa.</p>
                                <p>Daños en la salud física y mental por confinamiento obligatorio.</p>
                                <p>Medidas preventivas para el dictado de clases presenciales.</p>
                                <p>Medidas preventivas para atención de restaurantes: compras, preparación de alimentos, atención de mesas y delivery.</p>
                                <p>Medidas preventivas para atención en peluquerías y centros de belleza.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion_" style={{ marginBottom: "50px" }}>
                    <div class="accordion_tab_ active">
                        <div style={{ fontFamily: "Montserrat", color: "#025C75", fontSize: "27px" }}>
                            <h6>Temas en seguridad y salud en el trabajo</h6>
                        </div>
                        <div class="accordion_arrow">
                            <img src="https://i.imgur.com/PJRz0Fc.png" alt="arrow" />
                        </div>
                    </div>
                    <div class="accordion_content">
                        <h5 style={{ color: "#17A1B3", fontFamily: "Montserrat", textTransform: "uppercase" }}>01.- Para todos los rubros</h5>
                        <div className="" style={{ lineHeight: "20px", color: "#545454", fontFamily: "Nexa light", fontSize: "15px", marginTop: "20px" }}>
                            <p>Inducción a la Seguridad Laboral.</p>
                            <p>Orden y limpieza en el lugar de trabajo.</p>
                            <p>Identificación de peligros, evaluación de riesgos y controles (IPERC).</p>
                            <p>Importancia de las señales de seguridad en el trabajo.</p>
                            <p>Importancia del examen médico ocupacional.</p>
                            <p>Enfermedades relacionadas al trabajo.</p>
                            <p>Taller sobre uso de extintores.</p>
                            <p>Prevención de accidentes laborales.</p>
                            <p>Levantamiento y transporte de cargas.</p>
                            <p>Trabajo repetitivo.</p>
                            <p>Los mapas de riesgos. Concepto de metodología para su elaboración.</p>
                            <p>Seguro complementario de trabajo de riesgo.</p>
                            <p>Actividades de alto riesgo.</p>
                            <p>Investigación de accidentes e incidentes laborales.</p>
                            <p>Evaluación de riesgos psicosociales.</p>
                            <p>Prevención del estrés laboral.</p>
                            <p>Enfermedades ocupacionales.</p>
                            <p>Enfermedades musculoesqueléticas.</p>
                            <p>Enfermedades auditivas relacionadas al trabajo.</p>
                            <p>Ergonomía en el trabajo.</p>
                            <p>Protocolos de exámenes médicos ocupacionales.</p>
                            <p>Historia medico ocupacional.</p>
                            <p>Primeros Auxilios básico, intermedio y avanzado.</p>
                            <p>Protocolos de exámenes médicos ocupacionales.</p>
                            <p>Enfermedades respiratorias en el trabajo.</p>
                            <p>Evaluación psicológica ocupacional.</p>
                            <p>Bioseguridad en las empresas.</p>
                            <p>Residuos contaminantes.</p>
                            <p>Equipos de protección personal.</p>
                            <p>Enfermedades Visuales en el trabajo.</p>
                            <p>Inmunizaciones en el trabajo.</p>
                            <p>Reanimación cardiopulmonar.</p>
                        </div>
                        <h5 style={{ color: "#17A1B3", marginTop: "20px", fontFamily: "Montserrat", textTransform: "uppercase" }}>02 .- Para rubros especificos</h5>
                        <div className="" style={{ lineHeight: "20px", color: "#545454", fontFamily: "Montserrat", fontSize: "15px", marginTop: "20px" }}>
                            <h4 style={{ marginTop: "20px" }}>CONSTRUCCIÓN, ELECTRICIDAD Y MINERÍA</h4>
                            <p>Riesgos de daños oculares en el trabajo.</p>
                            <p>Protección visual.</p>
                            <p>Medidas de seguridad relacionadas al ruido.</p>
                            <p>Riesgos de manipulación de herramientas.</p>
                            <p>Riesgos eléctricos.</p>
                            <p>Actividades de riesgo en construcción, electricidad y minería.</p>
                            <p>Trabajo de altura mayor a 1.80 mts.</p>
                            <h4 style={{ marginTop: "20px" }}>ACTIVIDADES ADMINISTRATIVAS</h4>
                            <p>Importancia de las pausas activas.</p>
                            <p>Ergonomía laboral.</p>
                            <p>Ojo seco por uso de computadoras.</p>
                            <h4 style={{ marginTop: "20px" }}>ACTIVIDADES AGRÍCOLAS</h4>
                            <p>Seguridad con pesticidas.</p>
                            <p>Protección solar en actividades agrícolas.</p>
                            <p>Almacenamiento de productos agrícolas.</p>
                            <h4 style={{ marginTop: "20px" }}>ACTIVIDADES INDUSTRIALES</h4>
                            <p>Ruido y daño auditivo.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Container__Full" style={{ marginTop: "100px" }}>
                <div data-aos="fade-up" className="start-footer">
                    <div className="Button Grid__Button">
                        <button onClick={() => history.goBack()}>Volver</button>
                        <img src={require('../images/arrow.png')} alt="" />
                    </div>
                    <div className="Pdf__Download">
                        <a href={pdf3} target="_blank"><img src={require('../images/pdf.png')} alt="" /></a>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment >
    );
}

export default withRouter(Trainings);