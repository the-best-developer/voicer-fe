import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server for testing

export const POST_JOB_START = 'POST_JOB-START';
export const POST_JOB_SUCCESS = 'POST_JOB-SUCCESS';
export const POST_JOB_FAILED = 'POST_JOB-FAILED';

export const postJob = (job, history) => dispatch => {
  dispatch({ type: POST_JOB_START });
  return axiosWithAuth()
    .post(`${dbUrl}/api/jobs`, job)
    .then(res => {
      dispatch({
        type: POST_JOB_SUCCESS,
        payload: res.data
      });
      history.push('/client');
    })
    .catch(err => {
      dispatch({
        type: POST_JOB_FAILED,
        payload: err
      });
    });
};
