import React from 'react'

const About = () => {

    return (
        <div className="About" id="about">
            <div className="Container Background">
                <div className="Container-S About__Space">
                    <div data-aos="fade-up" className="Info__Container">
                        <div>
                            <h2>quiénes somos</h2>
                            <p>Somos una empresa encargada de brindar <strong>asesorías y consultorías</strong> en gestión de establecimientos de salud públicos y privados, así como sistemas de gestión de seguridad y salud en el trabajo.<br /><br /> Contamos con un equipo de profesionales expertos que contribuyen a <strong>asegurar el éxito</strong> de nuestros proyectos, haciendo que cada uno de nuestros clientes reciban un servicio diferenciado.</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="Video__Container">
                    <iframe title="Video de consultorio empresarial" width="100%" height="450" src="https://www.youtube.com/embed/jfiGl8yj62U" frameBorder="0" allowFullScreen="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;