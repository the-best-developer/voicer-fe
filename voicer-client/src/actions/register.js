import axios from 'axios';

export const REGISTER_START = 'REGISTER-START';
export const REGISTER_SUCCESS = 'REGISTER-SUCCESS';
export const REGISTER_FAILED = 'REGISTER-FAILED';

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    return axios
        .post('https://voicer-lambda-app-staging.herokuapp.com/api/auth/register', creds) // CHANGE URL
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: 'SUCCEED'
            })
        })
        .catch(err => {
            dispatch({
                type: REGISTER_FAILED,
                payload: 'FAILED'
            })
        })
};