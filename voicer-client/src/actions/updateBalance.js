import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';

export const UPDATE_BALANCE_START = "UPDATE_BALANCE_START";
export const UPDATE_TALENT_BALANCE_SUCCESS = "UPDATE_TALENT_BALANCE_SUCCESS";
export const UPDATE_CLIENT_BALANCE_SUCCESS = "UPDATE_CLIENT_BALANCE_SUCCESS";
export const UPDATE_BALANCE_FAILED = "UPDATE_BALANCE_FAILED";


export const withdraw = (profile, amount) => async dispatch => {
    dispatch({type: UPDATE_BALANCE_START})
    await axiosWithAuth().put(`${dbUrl}/api/users/${profile.userId}`, {
        accountBalance: profile.accountBalance - amount
    }).then(res => profile.userType === "talent" ?
        dispatch({type: UPDATE_TALENT_BALANCE_SUCCESS, payload: profile.accountBalance - amount}) :
        dispatch({type: UPDATE_CLIENT_BALANCE_SUCCESS, payload: profile.accountBalance - amount}))
    .catch(res => dispatch({type: UPDATE_BALANCE_FAILED}))
}

export const deposit = (profile, amount) => async dispatch => {
    dispatch({type: UPDATE_BALANCE_START})
    await axiosWithAuth().put(`${dbUrl}/api/users/${profile.userId}`, {
        accountBalance: profile.accountBalance + amount
    }).then(res => profile.userType === "talent" ? 
        dispatch({type: UPDATE_TALENT_BALANCE_SUCCESS, payload: profile.accountBalance + amount}) : 
        dispatch({type: UPDATE_CLIENT_BALANCE_SUCCESS, payload: profile.accountBalance + amount}))
    .catch(res => dispatch({type: UPDATE_BALANCE_FAILED}))
}