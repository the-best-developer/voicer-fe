import axios from 'axios';
import jwt from 'jsonwebtoken';

export const GET_CLIENT_PROFILE_START = 'GET_CLIENT_PROFILE_START';
export const GET_CLIENT_PROFILE_SUCCESS = 'GET_CLIENT_PROFILE_SUCCESS';
export const GET_CLIENT_PROFILE_FAILURE = 'GET_CLIENT_PROFILE_FAILURE';

export const getClientProfile = () => dispatch => {
    dispatch({ type: GET_CLIENT_PROFILE_START });
    let userId = jwt.decode(localStorage.getItem('token'))['userId'];
    return axios.get(`http://voicer-lambda-app-staging.herokuapp.com/api/clients/${userId}`).then(res => {
        dispatch({
            type: GET_CLIENT_PROFILE_SUCCESS,
        });
    }).catch(err => {
        dispatch({
            type: GET_CLIENT_PROFILE_FAILURE,
        });
    });
}