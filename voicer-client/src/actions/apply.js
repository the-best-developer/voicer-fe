import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server for testing

export const APPLY_START = 'APPLY-START';
export const APPLY_SUCCESS = 'APPLY-SUCCESS';
export const APPLY_FAILED = 'APPLY-FAILED';
export const APPLY_COMPLETED = 'APPLY_COMPLETED';

export const apply = application => dispatch => {
  dispatch({ type: APPLY_START });
  axiosWithAuth()
    .post(`${dbUrl}/api/jobs/${application.jobId}/offers`, application)
    //.post(`http://localhost:4000/api/jobs/${application.jobId}/offers`, application)
    .then(res => {
      dispatch({
        type: APPLY_SUCCESS,
        payload: res.data
      });
      setTimeout(() => dispatch({type: APPLY_COMPLETED}), 3000)
    })
    .catch(err => {
      dispatch({
        type: APPLY_FAILED,
        payload: err
      });
      setTimeout(() => dispatch({type: APPLY_COMPLETED}), 3000)
    });
};
