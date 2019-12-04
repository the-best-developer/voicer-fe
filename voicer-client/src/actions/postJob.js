import axiosWithAuth from '../components/axiosAuth';

export const POST_JOB_START = 'POST_JOB-START';
export const POST_JOB_SUCCESS = 'POST_JOB-SUCCESS';
export const POST_JOB_FAILED = 'POST_JOB-FAILED';

export const postJob = (job, history) => dispatch => {
    dispatch({ type: POST_JOB_START });
    if (!job.jobTitle) {
        dispatch({ type: POST_JOB_FAILED, error: 'Please enter a job title' })
    };
    return axiosWithAuth()
        .post('https://voicer-lambda-app-staging.herokuapp.com/api/jobs', job)
        .then(res => {
            dispatch({
                type: POST_JOB_SUCCESS,
                payload: res.data
            })
            history.push("/client")
        })
        .catch(err => {
            dispatch({
                type: POST_JOB_FAILED,
                payload: err
            })
        })
};