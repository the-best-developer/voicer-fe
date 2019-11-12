import axios from 'axios';

export const LOGIN_START = 'LOGIN-START';
export const LOGIN_SUCCESS = 'LOGIN-SUCCESS';
export const LOGIN_FAILED = 'LOGIN-FAILED';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    if (!creds.username) {
        dispatch({ type: LOGIN_FAILED, error: 'username not correct' });
    }
    if (!creds.password) {
        dispatch({ type: LOGIN_FAILED, error: 'password not correct' });
    }
    return axios
        .post('https://voicer-lambda-app-staging.herokuapp.com/api/auth/login', creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            localStorage.removeItem('token')
            dispatch({
                type: LOGIN_FAILED,
                payload: 'FAILED'
            })
        })
};