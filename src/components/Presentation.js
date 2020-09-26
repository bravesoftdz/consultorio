import React from 'react'

const Presentation = ({title, cssFz}) => {
    return (
        <div className={`Bg__Services Container ${cssFz}`} >
            <h1 className=" wow animate__animated animate__fadeIn"
                            data-wow-duration="2s"
                            data-wow-delay="0.1s" style={{top: "150px"}}>{title}</h1>
        </div>
    );
}

export default Presentation;