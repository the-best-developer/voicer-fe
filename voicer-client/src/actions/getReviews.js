import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server for testing

export const GET_REVIEW_START = 'GET-REVIEW-START';
export const GET_REVIEW_SUCCESS = 'GET_REVIEW-SUCCESS';
export const GET_REVIEW_FAILED = 'GET-REVIEW-FAILED';

export const getReviews = userId => dispatch => {

  dispatch({ type: GET_REVIEW_START });
  axiosWithAuth()
    .get(`${dbUrl}/api/reviews/${userId}`)
    //.get(`http://localhost:4000/api/reviews${userId}`)
    .then(res => {
      dispatch({
        type: GET_REVIEW_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_REVIEW_FAILED,
        payload: err
      });
    });
};
