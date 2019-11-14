import axiosWithAuth from '../components/axiosAuth';
import jwt from 'jsonwebtoken';

export const EDIT_CLIENT_PROFILE_START = 'EDIT_CLIENT_PROFILE_START';
export const EDIT_CLIENT_PROFILE_SUCCESS = 'EDIT_CLIENT_PROFILE_SUCCESS';
export const EDIT_CLIENT_PROFILE_FAILURE = 'EDIT_CLIENT_PROFILE_FAILURE';

export const editClientProfile = changes => dispatch => {
    let userId = jwt.decode(localStorage.getItem('token')).userId;
    dispatch({ type: EDIT_CLIENT_PROFILE_START });
    return axiosWithAuth().put(`https://voicer-lambda-app-staging.herokuapp.com/api/users/${userId}`, changes).then(res => {
        dispatch({
            type: EDIT_CLIENT_PROFILE_SUCCESS,
            payload: res.data
        });
    }).catch(err => {
        dispatch({
            type: EDIT_CLIENT_PROFILE_FAILURE
        });
    });
}