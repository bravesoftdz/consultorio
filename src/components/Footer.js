import React from 'react'

const Footer = () => {
    return (
        <div className="Footer" style={{position: "relative", marginTop:"80px"}}>
            <div className="Container">
                <div className="Logo__Footer">
                    <img src={require('../images/logofooter.png')} alt="" />
                </div>
                <div className="Services__Footer">
                   <div>
                   <p>Dirección</p>
                    <span>Av. Salaverry Nº 109 2º piso, Chiclayo</span>
                    <p style={{marginTop: "20px"}}></p>
                    <span>Jr. Huascar 1967 Oficina Nº 1101. Jesús María - Lima</span>
                   </div>
                </div>
                <div className="Benef__Footer">
                   <div>
                   <p>Teléfono</p>
                    <span>993 520 343</span>

                    <p style={{marginTop: "20px"}}>Correo</p>
                    <span>info@consultorioempresarial.pe</span>
                   </div>
                </div>
                <div className="Socials__Footer">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/consultorioempresarialpe"><i className="fab fa-facebook-f"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/consultorioempresarial/"><i className="fab fa-linkedin-in"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/consultorio_empresarial/"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;