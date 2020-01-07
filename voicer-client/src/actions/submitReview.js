import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server for testing

export const SUBMIT_REVIEW_START = 'SUBMIT-REVIEW-START';
export const SUBMIT_REVIEW_SUCCESS = 'SUBMIT_REVIEW-SUCCESS';
export const SUBMIT_REVIEW_FAILED = 'SUBMIT-REVIEW-FAILED';
export const SUBMIT_REVIEW_COMPLETED = 'SUBMIT-REVIEW-COMPLETED';

export const submitReview = review => dispatch => {

  dispatch({ type: SUBMIT_REVIEW_START });
  axiosWithAuth()
    .post(`${dbUrl}/api/reviews/`, review)
    //.post(`http://localhost:4000/api/reviews`, review)
    .then(res => {
      dispatch({
        type: SUBMIT_REVIEW_SUCCESS,
        payload: res.data
      });
      //setTimeout(() => dispatch({type: SUBMIT_REVIEW_COMPLETED}), 3000)
    })
    .catch(err => {
      dispatch({
        type: SUBMIT_REVIEW_FAILED,
        payload: err
      });
      //setTimeout(() => dispatch({type: SUBMIT_REVIEW_COMPLETED}), 3000)
    });
};
