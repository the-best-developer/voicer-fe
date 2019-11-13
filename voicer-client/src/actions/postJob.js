import axiosWithAuth from '../components/axiosAuth';

export const POST_JOB_START = 'POST_JOB-START';
export const POST_JOB_SUCCESS = 'POST_JOB-SUCCESS';
export const POST_JOB_FAILED = 'POST_JOB-FAILED';

export const postJob = job => dispatch => {
    dispatch({ type: POST_JOB_START });
    return axiosWithAuth()
        .post('https://voicer-lambda-app-staging.herokuapp.com/api/jobs', job)
        .then(res => {
            dispatch({
                type: POST_JOB_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: POST_JOB_FAILED,
                payload: err
            })
        })
};