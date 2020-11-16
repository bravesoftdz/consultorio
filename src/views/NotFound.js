import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/nofound.css'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <div className="container-nf" id="container">
                <div className="content-nf">
                    <h2>404</h2>
                    <h4>Upps! Página no encontrada</h4>
                    <p>Párece que la página el cual deseas visitar no ha sido encontrada o no existe.</p>
                    <Link to="/">Regresar a inicio</Link>
                </div>
            </div>
        </div>
     );
}
 
export default NotFound;