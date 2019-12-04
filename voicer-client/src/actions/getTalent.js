import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server for testing

export const GET_TALENT_START = 'GET_TALENT_START';
export const GET_TALENT_SUCCESS = 'GET_TALENT_SUCCESS';
export const GET_TALENT_FAILED = 'GET_TALENT_FAILED';

export const getTalent = userId => dispatch => {
  dispatch({ type: GET_TALENT_START });
  return axiosWithAuth()
    .get(`${dbUrl}/api/talents/profile/${userId}`)
    .then(res => {
      dispatch({
        type: GET_TALENT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_TALENT_FAILED,
        payload: err
      });
    });
};
