import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';

export const ACCEPT_START = "ACCEPT_START";
export const ACCEPT_SUCCESS = "ACCEPT_SUCCESS";
export const ACCEPT_FAILED = "ACCEPT_FAILED";

export const DECLINE_START = "DECLINE_START";
export const DECLINE_SUCCESS = "DECLINE_SUCCESS";
export const DECLINE_FAILED = "DECLINE_FAILED";

export const accept = (job, offer) => async dispatch => {
    dispatch({type: ACCEPT_START})
    const responses = []
    await axiosWithAuth().get(`${dbUrl}/api/clients/cid/${offer.clientId}`).then(async (res) => {
        let fee = res.data[0].loyaltyLevel === 1 ? 0.1 : 
            res.data[0].loyaltyLevel === 2 ? 0.075 : 0.05
        if(parseFloat(res.data[0].accountBalance) - (parseFloat(offer.price) + (offer.price*fee)) < 0) {
            console.log({message: 'Insufficient funds. Please make a deposit to complete this transaction.'})
        }
        let admin = await axiosWithAuth().get(`${dbUrl}/api/talents/profile/tid/3`)
        await axiosWithAuth().put(`${dbUrl}/api/users/${res.data[0].userId}`, {
            accountBalance: parseFloat(res.data[0].accountBalance) - parseFloat((parseFloat(offer.price) + (offer.price*fee)))
        })
        await axiosWithAuth().put(`${dbUrl}/api/users/5`, {
            accountBalance: parseFloat(admin.data[0].accountBalance) + (offer.price*fee)
        })
    }).catch((error) => console.log(error))
    axiosWithAuth()
        .put(`${dbUrl}/api/jobs/${job.jobId}/offers/${offer.jobOfferId}`, {status: 'Accepted'})
        .then((res) => {
            responses.push(res)
            axiosWithAuth()
            .put(`${dbUrl}/api/jobs/${job.jobId}`, {status: 'Hired'})
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
        .put(`${dbUrl}/api/jobs/${job.jobId}/offers/${offer.jobOfferId}`, {status: 'Declined'})
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error)
        })
}