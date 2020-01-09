import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server for testing

export const GET_CLIENT_START = 'GET_CLIENT_START';
export const GET_CLIENT_SUCCESS = 'GET_CLIENT_SUCCESS';
export const GET_CLIENT_FAILED = 'GET_CLIENT_FAILED';

export const getClientByClientId = (clientId) => dispatch => {
    dispatch({ type: GET_CLIENT_START });
    return axiosWithAuth()
        .get(`${dbUrl}/api/clients/cid/${clientId}`)
        .then((res) => {
            return res.data
        })
        .catch(err => {
            dispatch({
                type: GET_CLIENT_FAILED,
                payload: err
            })
        })
};
export const getClient = userId => dispatch => {
  dispatch({ type: GET_CLIENT_START });
  return axiosWithAuth()
    .get(`${dbUrl}/api/clients/${userId}`)
    .then(res => {
      dispatch({
        type: GET_CLIENT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CLIENT_FAILED,
        payload: err
      });
    });
};
