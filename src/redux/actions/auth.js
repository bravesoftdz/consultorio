import { SIGNUP_ERROR,SIGNUP_SUCCESS, SIGNIN_SUCCESS, SIGNIN_ERROR, AUTH_SUCCESS, AUTH_ERROR } from './types'
import { setAlert } from './alert'
import axios from 'axios'

const root = "http://api.consultorioempresarial.pe"

export const authMe = () => async dispatch => {

    let token = localStorage.getItem('token')

    const config = {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    }

    try {
        const res = await axios.get(`${root}/api/users/me`, config)
        console.log("SUCCESS",res)
        dispatch({
            type: AUTH_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.log("ERROR",error)
        dispatch({
            type: AUTH_ERROR,
        })
    }
}
 
export const signin = (data) => async dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json'}
    }

    try {
        const res = await axios.post(`${root}/api/users/login`,data,config)
        dispatch({
            type: SIGNIN_SUCCESS,
            payload: res.data                                                                                                                                                                                                                                                                                          
        })
        dispatch(authMe())
    } catch (error) {
        console.log(error)
        const errors = error.response.data
        if(errors) {
            dispatch(setAlert(errors,'danger',10000));
        }
        dispatch({
            type: SIGNIN_ERROR
        })
    }
}

export const signup = (data) => async dispatch => {
    const config = {
        headers: { 'Content-Type': 'application/json'}
    }

    try {
        const res = await axios.post(`${root}/api/users/signup`,data,config)
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        const errors = error.response.data
        if(errors) {
            dispatch(setAlert(errors,'danger',10000));
        }
        dispatch({
            type: SIGNUP_ERROR
        })
    }
}