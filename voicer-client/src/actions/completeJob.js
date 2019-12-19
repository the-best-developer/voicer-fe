import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';

export const COMPLETE_JOB_START = 'COMPLETE_JOB_START';
export const COMPLETE_JOB_SUCCESS = 'COMPLETE_JOB_SUCCESS';
export const COMPLETE_JOB_FAILED = 'COMPLETED_JOB_FAILED';

export const complete = (jobId) => async dispatch => {
    dispatch({type: COMPLETE_JOB_START})
    await axiosWithAuth().put(`${dbUrl}/api/jobs/complete/${jobId}`)
    .then((res) => {
        dispatch({type: COMPLETE_JOB_SUCCESS})
        console.log(res)
    })
    .catch((res) => { 
        dispatch({type: COMPLETE_JOB_FAILED})
        console.log(res)
    })
}