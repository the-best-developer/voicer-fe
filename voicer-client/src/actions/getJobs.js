import axiosWithAuth from '../components/axiosAuth';

export const GET_JOBS_START = 'GET_JOBS_START';
export const GET_JOBS_SUCCESS = 'GET_JOBS_SUCCESS';
export const GET_JOBS_FAILED = 'GET_JOBS_FAILED';

export const getJobs = () => dispatch => {
    dispatch({ type: GET_JOBS_START });
    return axiosWithAuth()
        .get('https://voicer-lambda-app-staging.herokuapp.com/api/jobs')
        //.get('http://localhost:4000/api/jobs')
        .then(res => {
            dispatch({
                type: GET_JOBS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_JOBS_FAILED,
                payload: err
            })
        })
};

export const getJobsBy = clientId => dispatch => {
    dispatch({ type: GET_JOBS_START });
    return axiosWithAuth()
        .get(`https://voicer-lambda-app-staging.herokuapp.com/api/clients/${clientId}/jobs`)
        //.get(`http://localhost:4000/api/jobs/${clienId}`)
        .then(res => {
            dispatch({
                type: GET_JOBS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_JOBS_FAILED,
                payload: err
            })
        })
};