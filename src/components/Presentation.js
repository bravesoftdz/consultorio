import React from 'react'

const Presentation = ({ title, cssFz, image, top }) => {
    return (
        <div className={`Bg__Services Container ${cssFz}`}>
            <div className="fbc">
            <h1 data-aos="fade-right" className={`${top}`}>{title}</h1>
            {
                image ? 
                <img src={image} alt="imagen de presentación"/> : ''
            }
            </div>
        </div>
    );
}

export default Presentation;