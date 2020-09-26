import { GET_CLIENTS, GET_CLIENTS_ERROR, ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT } from './types'

import axios from 'axios'

let token = localStorage.getItem('token')
const root = "http://api.consultorioempresarial.pe"

const config = {
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
}

export const getClients = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/api/clients`)
        dispatch({
            type: GET_CLIENTS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_CLIENTS_ERROR
        })
    }
}

export const createClient = (data) => async dispatch => {
    try {
        const configForm = {
            headers: { 
                "Content-Type": "multipart/form-data",
            }
        }
        const res = await axios.post(`${root}/api/clients/upload`, data, configForm);
        dispatch({
            type: ADD_CLIENT,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const editClient = (id, banner) => async dispatch => {
    try {
        const res = await axios.put(`${root}/api/clients/${id}`, banner, config);
        dispatch({
            type: UPDATE_CLIENT,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteClient = (id) => async dispatch => {
    try {
        const res = await axios.delete(`${root}/api/clients/${id}`,config);
        dispatch({
            type: DELETE_CLIENT,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}