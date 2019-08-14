import axios from 'axios';
import { AUTH_START,AUTH_SUCCESS,AUTH_FAIL,AUTH_LOGOUT } from './ActionTypes';

export const authStart = () => {
    return {
        type: AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: AUTH_SUCCESS,
        token
    }
}

export const authFail = error => {
    return {
        type: AUTH_FAIL,
        error
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    
    return {
        type: AUTH_LOGOUT
    };
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/auth/token/login',{
            username,
            password
        }) 
        .then(res => {
            const token = res.auth_token;
            localStorage.setItem('token',token);
            dispatch(authSuccess(token));
        })
        .catch(err => dispatch(authFail(err)))
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
           dispatch(authSuccess(token)); 
        }
    }
}