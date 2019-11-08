import axios from 'axios';

export const APPLY_START = 'APPLY-START';
export const APPLY_SUCCESS = 'APPLY-SUCCESS';
export const APPLY_FAILED = 'APPLY-FAILED';

export const apply = (jobId) => dispatch => {
    dispatch({ type: APPLY_START });
    return axios
        //.post(`https://voicer-lambda-app-staging.herokuapp.com/api/jobs/${jobId}/offers`)
        .post(`http://localhost:4000/api/jobs/${jobId}/offers`)
        .then(res => {
            dispatch({
                type: APPLY_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: APPLY_FAILED,
                payload: err
            })
        })
};