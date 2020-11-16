import React, { Fragment, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Summary from '../components/Summary';
import { withRouter } from 'react-router-dom'
import pdf2 from '../pdf/servicespdf2.pdf'


const Health = ({ history }) => {

    const [presentation, setPresentation] = useState(true)
    useEffect(() => {
        setPresentation(true)
    }, [])

    return (
        <Fragment>
            <Header />
            <Summary image={require('../images/serviceicon2.png')} presentation={presentation} cssFz="Fz__Presentation" title="asesoría y consultoría en sistemas de gestión de salud ocupacional" />
            <section>
            <h6 data-aos="fade-up" className="title-healt" style={{
                        textAlign: "center",
                        marginTop: "50px",
                        color:"#17A1B3",
                        fontSize: "25px",
                        fontFamily: "Nexa Bold"
                    }}>GESTIÓN DE EMPRESAS</h6>
                <div className="Container__Full">
                    <div className="first second" style={{marginBottom: "20px"}}>
                        <div data-aos="fade-up" className="square">
                            <div className="square-info">
                                <div className="circle"><span>1</span></div>
                                <h6>REGLAMENTO INTERNO DE TRABAJO</h6>
                                <p>Normas para la empresa en donde se determinan las condiciones que deben sujetarse todos los trabajadores sean estos empleados u obreros.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>2</span></div>
                                <h6>MANUAL DE ORGANIZACIÓN DE FUNCIONES</h6>
                                <p>Documento técnico normativo de gestión institucional donde se describe y establece la funciones del trabajador.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>3</span></div>
                                <h6>MANUAL DE PROCEDIMIENTOS</h6>
                                <p>Documento de gestión que describe en forma pormenorizada y secuencial las operaciones que se sigue en la ejecución de los procedimientos.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 data-aos="fade-up" style={{
                        textAlign: "center",
                        marginTop: "50px",
                        color:"#025C75",
                        fontSize: "25px",
                        fontFamily: "Nexa Bold"
                    }}>SISTEMA DE GESTIÓN DE SEGURIDAD Y SALUD EN EL TRABAJO
                    </h6>
                    <div className="Container__Full">
                    <div className="start" style={{marginBottom: "0px"}}>
                        <div data-aos="zoom-in" className="square">
                            <div className="square-info">
                                <div className="circle"><span>4</span></div>
                                <h6>POLÍTICA EN SEGURIDAD Y SALUD EN EL TRABAJO</h6>
                                <p>Busca eliminar peligros, proteger la seguridad y salud de todos los trabajadores y cumplir con la normatividad nacional.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>5</span></div>
                                <h6>REGLAMENTO INTERNO DE SEGURIDAD Y SALUD EN EL TRABAJO</h6>
                                <p>Documento que da coherencia y ordena todo el sistema de seguridad y salud en el trabajo de la empresa.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>6</span></div>
                                <h6>INVESTIGACIÓN DE PELIGROS, EVALUACIÓN DE RIESGOS Y CONTROLES</h6>
                                <p>Herramienta de gestión, de obligatorio cumplimiento y auditable.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Container__Full">
                    <div className="start" style={{marginBottom: "0px"}}>
                        <div data-aos="zoom-in" className="square">
                            <div className="square-info">
                                <div className="circle"><span>7</span></div>
                                <h6>MAPA DE RIESGO</h6>
                                <p>Herramienta basada en los distintos sistemas de información que pretende identificar las actividades o procesos sujetos a riesgo.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>8</span></div>
                                <h6>MAPA DE EVACUACIÓN</h6>
                                <p>Representación gráfica de un servicio o área del hospital, en el cual se han definido salidas, puntos de encuentro y rutas.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Container__Full">
                <div className="Consultory__Steps" style={{position: "unset"}}>
                        <img src={require('../images/ingeniero2.webp')} style={{right: "0"}} alt="imagen de un ingeniero"/>
                    </div>
                    <div className="start" style={{marginBottom: "0px"}}>
                        <div data-aos="zoom-in" className="square">
                            <div className="square-info">
                                <div className="circle"><span>9</span></div>
                                <h6>REGISTROS VARIOS DE LINEA OCUPACIONAL Y DE IMPORTANCIA MÉDICA</h6>
                                <p>Documentos de registros necesarios para velar por el cumplimiento de SST. .</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Container__Full">
                    <div className="start" style={{marginBottom: "20px"}}>
                        <div data-aos="zoom-in" className="square">
                            <div className="square-info">
                                <div className="circle"><span>10</span></div>
                                <h6>SST Y PROGRAMA DE CAPACITACIONES (PLANES ANUALES)</h6>
                                <p>Planes que tienen como objetivo ejecutar actividades que promuevan la cultura de prevención en materia de SST.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Container__Full">
                    <div className="start" style={{marginBottom: "0px"}}>
                        <div data-aos="zoom-in" className="square">
                            <div className="square-info">
                                <div className="circle"><span>11</span></div>
                                <h6>BRIGADAS DE EMERGENCIAS</h6>
                                <p>Formación de grupos de profesionales para la generación de una fuerza de seguridad y que están organizados ante un acontecimiento riesgoso.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="square top-movil">
                            <div className="square-info">
                                <div className="circle"><span>12</span></div>
                                <h6>EVALUACIÓN MÉDICA</h6>
                                <p>Análisis de trabajadores (Evaluaciones médicas ocupacionales) y de sus condiciones para generar un mejor rendimiento y productividad.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Container__Full" style={{marginTop: "100px"}}>
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

export default withRouter(Health);