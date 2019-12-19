import axiosWithAuth from '../components/axiosAuth';
import jwt from 'jsonwebtoken';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server for testing

export const GET_CLIENT_PROFILE_START = 'GET_CLIENT_PROFILE_START';
export const GET_CLIENT_PROFILE_SUCCESS = 'GET_CLIENT_PROFILE_SUCCESS';
export const GET_CLIENT_PROFILE_FAILURE = 'GET_CLIENT_PROFILE_FAILURE';

export const getClientProfile = () => dispatch => {
  let userId = jwt.decode(localStorage.getItem('token')).userId;
  dispatch({ type: GET_CLIENT_PROFILE_START });
  return axiosWithAuth()
    .get(`${dbUrl}/api/clients/${userId}`)
    .then(res => {
      dispatch({
        type: GET_CLIENT_PROFILE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CLIENT_PROFILE_FAILURE,
        payload: err
      });
    });
};
