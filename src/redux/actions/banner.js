import { GET_BANNERS, GET_BANNERS_ERROR, ADD_BANNER, DELETE_BANNER,UPDATE_BANNER } from './types'

import axios from 'axios'

let token = localStorage.getItem('token')
const root = "http://api.consultorioempresarial.pe"

const config = {
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
}

export const getBanners = () => async dispatch => {
    try {
        const res = await axios.get(`${root}/api/banners`)
        dispatch({
            type: GET_BANNERS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_BANNERS_ERROR
        })
    }
}

export const createBanner = (data) => async dispatch => {
    try {
        const configForm = {
            headers: { 
                "Content-Type": "multipart/form-data",
            }
        }
        const res = await axios.post(`${root}/api/banners/upload`, data, configForm);
        console.log(res)
        dispatch({
            type: ADD_BANNER,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const editBanner = (id, banner) => async dispatch => {
    try {
        const res = await axios.put(`${root}/api/banners/${id}`, banner, config);
        dispatch({
            type: UPDATE_BANNER,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteBanner = (id) => async dispatch => {
    try {
        await axios.delete(`${root}/api/banners/${id}`,config);
        dispatch({
            type: DELETE_BANNER,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}