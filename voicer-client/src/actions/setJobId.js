export const SET_JOB_ID = 'SET_JOB_ID';

export const setJobId = jobId => dispatch => {
    dispatch({ type: SET_JOB_ID, payload: jobId });
}