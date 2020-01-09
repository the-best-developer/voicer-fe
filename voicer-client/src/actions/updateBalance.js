import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';

export const UPDATE_BALANCE_START = "UPDATE_BALANCE_START";
export const UPDATE_TALENT_BALANCE_SUCCESS = "UPDATE_TALENT_BALANCE_SUCCESS";
export const UPDATE_CLIENT_BALANCE_SUCCESS = "UPDATE_CLIENT_BALANCE_SUCCESS";
export const UPDATE_BALANCE_FAILED = "UPDATE_BALANCE_FAILED";


export const withdraw = (profile, amount) => async dispatch => {
    const currentBalance = parseFloat(profile.accountBalance)
    const withdrawAmount = parseFloat(amount)
    dispatch({type: UPDATE_BALANCE_START})
    await axiosWithAuth().put(`${dbUrl}/api/users/${profile.userId}`, {
        accountBalance: currentBalance - withdrawAmount
    }).then(res => profile.userType.toLowerCase() === "talent" ?
        dispatch({type: UPDATE_TALENT_BALANCE_SUCCESS, payload: currentBalance - withdrawAmount}) :
        dispatch({type: UPDATE_CLIENT_BALANCE_SUCCESS, payload: currentBalance - withdrawAmount}))
    .catch(res => dispatch({type: UPDATE_BALANCE_FAILED}))
}

export const deposit = (profile, amount) => async dispatch => {
    const currentBalance = parseFloat(profile.accountBalance)
    const depositAmount = parseFloat(amount)
    dispatch({type: UPDATE_BALANCE_START})
    await axiosWithAuth().put(`${dbUrl}/api/users/${profile.userId}`, {
        accountBalance: currentBalance + depositAmount
    }).then(res => profile.userType.toLowerCase() === "talent" ? 
        dispatch({type: UPDATE_TALENT_BALANCE_SUCCESS, payload: currentBalance + depositAmount}) : 
        dispatch({type: UPDATE_CLIENT_BALANCE_SUCCESS, payload: currentBalance + depositAmount}))
    .catch(res => dispatch({type: UPDATE_BALANCE_FAILED}))
}