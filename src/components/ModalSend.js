import React from 'react'
import CheckSend from '../images/svg/checksend'
import CloseModal from '../images/svg/closemodal';

const ModalSend = ({closeModal}) => {
    return (
        <div className="content-modal">
            <div className="modal-send">
                <CloseModal closeModal={closeModal} />
                <div className="info-content">
                    <CheckSend />
                    <h4>Su mensaje fue enviado</h4>
                    <p>Muy pronto nos pondremos en contacto con usted</p>
                </div>
            </div>
        </div>
    );
}

export default ModalSend;