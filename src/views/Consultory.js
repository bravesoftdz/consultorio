import React, { Fragment, useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Summary from '../components/Summary';
import pdf2 from '../pdf/servicespdf2.pdf'

const Consultory = ({history}) => {

    const [presentation, setPresentation] = useState(true)
    useEffect(() => {
        setPresentation(true)
    }, [])

    return (
        <Fragment>
            <Header />
            <Summary image={require('../images/serviceicon1.png')} cssFz="Fz__Presentation" presentation={presentation} title="asesoría y consultoría para sector salud" />
            <section>
                <div className="Consultory__Steps">
                    <img src={require('../images/ingeniero1.webp')} alt="" />
                </div>
                <div className="Container__Full Gg">
                    <div className="first second fcc">
                        <div className="square op">
                            <div className="square-info">
                                <div className="circle"><span>1</span></div>
                                <h6>INVESTIGACIÓN E INVERSIÓN EN TEMAS RELACIONADOS A LA SALUD</h6>
                                <p>Investigaciones de fuentes primarias y secundarias, y análisis económicos de costos, oferta y demanda, para empresas del sector hospitalario.</p>
                            </div>
                        </div>
                        <div className="square op">
                            <div className="square-info">
                                <div className="circle"><span>2</span></div>
                                <h6>DESARROLLO DE NUEVOS SERVICIOS</h6>
                                <p>Análisis de oferta de mercado y de capacidad de infraestructura, para crear nuevos servicios con el uso de casi los mismos recursos con el fin de generar mayor rentabilidad a corto plazo.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="square">
                            <div className="square-info">
                                <div className="circle"><span>1</span></div>
                                <h6>INVESTIGACIÓN E INVERSIÓN EN TEMAS RELACIONADOS A LA SALUD</h6>
                                <p>Investigaciones de fuentes primarias y secundarias, y análisis económicos de costos, oferta y demanda, para empresas del sector hospitalario.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>2</span></div>
                                <h6>DESARROLLO DE NUEVOS SERVICIOS</h6>
                                <p>Análisis de oferta de mercado y de capacidad de infraestructura, para crear nuevos servicios con el uso de casi los mismos recursos con el fin de generar mayor rentabilidad a corto plazo.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Container__Full">
                    <div className="first second fcc">
                        <div className="square op">
                            <div className="square-info">
                                <div className="circle"><span>1</span></div>
                                <h6>INVESTIGACIÓN E INVERSIÓN EN TEMAS REALACIONADOS A LA SALUD</h6>
                                <p>Investigaciones de fuentes primarias y secundarias, y análisis económicos de costos, oferta y demanda, para empresas del sector hospitalario.</p>
                            </div>
                        </div>
                        <div className="square top-movil op">
                            <div className="square-info">
                                <div className="circle"><span>2</span></div>
                                <h6>DESARROLLO DE NUEVOS SERVICIOS</h6>
                                <p>Análisis de oferta de mercado y de capacidad de infraestructura, para crear nuevos servicios con el uso de casi los mismos recursos con el fin de generar mayor rentabilidad a corto plazo.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>3</span></div>
                                <h6>OPTIMIZACIÓN DE VENTAS</h6>
                                <p>A través de una auditoría interna de procesos de flujo de pacientes, determinamos key points a mejorar para incrementar las ventas.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>4</span></div>
                                <h6>OPTIMIZACIÓN DE NEGOCIOS</h6>
                                <p>Auditoría interna de costos, con el fin de generar un incremento de ahorros, a través de pequeños cambios.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Container__Full" style={{ position: "relative" }}>
                    <div className="Footer-Background">
                        <img src={require('../images/background.webp')} alt="" />
                    </div>
                    <div className="start">
                        <div data-aos="fade-up" className="square">
                            <div className="square-info">
                                <div className="circle"><span>5</span></div>
                                <h6>SISTEMAS DE CALIDAD Y ESTANDARIZACIÓN</h6>
                                <p>Elaboración de procesos internos que garanticen calidad del servicio, a través la estandarización en la forma de trabajo.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>6</span></div>
                                <h6>CAPACITACIONES EN GESTIÓN DE CLÍNICA</h6>
                                <p>Expertos en el rubro médico, con experiencia y éxito en la gestión hospitalaria, comparten sus conocimientos a través de capacitaciones ad hoc.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>7</span></div>
                                <h6>MEJORA DE PROCESOS</h6>
                                <p>Gestión en procesos internos con el fin de disminuir errores, procesos innecesarios y reducir tiempos generando un servicio mejor.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>8</span></div>
                                <h6>ESTUDIOS DE FACTIBILIDAD</h6>
                                <p>Análisis de mercados, flujos de dinero y económicos para determinar la factibilidad de una inversión en la creación, ampliación y adquisición en el rubro hospitalario.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Container__Full">
                    <div data-aos="fade-up" className="start-footer">
                        <div className="Button Grid__Button">
                            <button onClick={()=> history.goBack()}>Volver</button>
                            <img src={require('../images/arrow.png')} alt="" />
                        </div>
                        <div className="Pdf__Download">
                            <a href={pdf2} target="_blank"><img src={require('../images/pdf.png')} alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    );
}

export default withRouter(Consultory);