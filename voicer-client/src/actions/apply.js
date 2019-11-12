import axiosWithAuth from '../components/axiosAuth';

export const APPLY_START = 'APPLY-START';
export const APPLY_SUCCESS = 'APPLY-SUCCESS';
export const APPLY_FAILED = 'APPLY-FAILED';

export const apply = application => dispatch => {
    dispatch({ type: APPLY_START });
    axiosWithAuth()
        //.post(`https://voicer-lambda-app-staging.herokuapp.com/api/jobs/${jobId}/offers`, application)
        .post(`http://localhost:4000/api/jobs/${application.jobId}/offers`, application)
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
}