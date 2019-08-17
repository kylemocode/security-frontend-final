import axios from 'axios';
import { AUTH_START,AUTH_SUCCESS,AUTH_FAIL,AUTH_LOGOUT } from './ActionTypes';
import { history } from '../routers/AppRouter';

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
          }
    )
        .then(res => {
            const token = res.data.auth_token;
            localStorage.setItem('token',token);
            dispatch(authSuccess(token));
            history.push('/computerlist');
        })
        .catch(err => {
            dispatch(authFail(err));
            history.push('/');
        })
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