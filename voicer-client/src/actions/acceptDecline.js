import axiosWithAuth from '../components/axiosAuth';

export const ACCEPT_START = "ACCEPT_START";
export const ACCEPT_SUCCESS = "ACCEPT_SUCCESS";
export const ACCEPT_FAILED = "ACCEPT_FAILED";

export const DECLINE_START = "DECLINE_START";
export const DECLINE_SUCCESS = "DECLINE_SUCCESS";
export const DECLINE_FAILED = "DECLINE_FAILED";

export const accept = (job, offer) => dispatch => {
    dispatch({type: ACCEPT_START})
    const responses = []
    axiosWithAuth()
        .put(`https://voicer-lambda-app-staging.herokuapp.com/api/jobs/${job.jobId}/offers/${offer.jobOfferId}`, {status: 'Accepted'})
        .then((res) => {
            responses.push(res)
            axiosWithAuth()
            .put(`https://voicer-lambda-app-staging.herokuapp.com/api/jobs/${job.jobId}`, {status: 'Hired'})
            .then((res) => {
                dispatch({type: ACCEPT_SUCCESS})
                responses.push(res)
                console.log(responses)
            })
            .catch((error) => {
                dispatch({type: ACCEPT_FAILED})
                console.log(error)
            })
        })
        .catch((error) => { 
            dispatch({type: ACCEPT_FAILED})
            console.log(error)
        })
}

export const decline = (job, offer) => dispatch => {
    dispatch({type: DECLINE_START})
    axiosWithAuth()
        .put(`https://voicer-lambda-app-staging.herokuapp.com/api/jobs/${job.jobId}/offers/${offer.jobOfferId}`, {status: 'Declined'})
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
}