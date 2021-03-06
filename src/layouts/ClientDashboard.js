import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getClients, deleteClient } from '../redux/actions/client'
import '../styles/banners.css'

const ClientDashboard = () => {

    const clients = useSelector((state) => state.clients.clients)
    const history = useHistory();
    const dispatch = useDispatch()

    const [deletingClient, setDeletingClient] = useState(false)

    useEffect(() => {
        dispatch(getClients());
    }, [])

    console.log(clients)

    const deleteClients = (id) => {

        if (deletingClient) {
            return
        }

        try {
            setDeletingClient(true)
            let result = window.confirm("Estas seguro de eliminar este cliente?, recuerda que tambien se borrará de tu pagina de inicio")
            if(result == true) {
                dispatch(deleteClient(id))
                setTimeout(() => {
                    dispatch(getClients());
                    history.push('/dashboard/clientes');
                }, 2000);
            }
            setDeletingClient(false)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div className="ClientDashboard">
            <div className="header-client">
                <p>Su galería de imagenes para sus clientes</p>
                <Link to="/dashboard/clientes/nuevo">Agregar cliente</Link>
            </div>
            <div className="container-gallery_client">
                {
                    clients && clients.length > 0 ? 
                    clients.map(client => (
                        <div className="client-item" key={client.id} style={{background: "#fff", borderRadius: "4px"} }>
                            <img src={client.image} alt="imagen cliente"/>
                            <p>{client.title}</p>
                            <button className="delete-client" onClick={()=>deleteClients(client.id)}><i style={{color: "#000"}} className="fas fa-trash"></i></button>
                        </div>
                    )) : 
                    <img src={require('../images/retratos.png')} alt="imagen del banner" />
                }
            </div>
        </div>
     );
}
 
export default ClientDashboard;