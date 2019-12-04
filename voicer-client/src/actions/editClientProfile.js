import axiosWithAuth from '../components/axiosAuth';
import jwt from 'jsonwebtoken';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server for testing

export const EDIT_CLIENT_PROFILE_START = 'EDIT_CLIENT_PROFILE_START';
export const EDIT_CLIENT_PROFILE_SUCCESS = 'EDIT_CLIENT_PROFILE_SUCCESS';
export const EDIT_CLIENT_PROFILE_FAILURE = 'EDIT_CLIENT_PROFILE_FAILURE';

export const editClientProfile = changes => dispatch => {
  let userId = jwt.decode(localStorage.getItem('token')).userId;

  let userChanges = {
    username: changes.username,
    firstName: changes.firstName,
    lastName: changes.lastName
  };

  let clientProfileChanges = {
    companyName: changes.companyName
  };

  dispatch({ type: EDIT_CLIENT_PROFILE_START });
  return axiosWithAuth()
    .put(`${dbUrl}/api/users/${userId}`, userChanges)
    .then(res => {
      axiosWithAuth()
        .put(`${dbUrl}/api/clients/${userId}`, clientProfileChanges)
        .then(res => {
          dispatch({
            type: EDIT_CLIENT_PROFILE_SUCCESS
          });
        })
        .catch(err => {
          dispatch({
            type: EDIT_CLIENT_PROFILE_FAILURE
          });
        });
    })
    .catch(err => {
      dispatch({
        type: EDIT_CLIENT_PROFILE_FAILURE
      });
    });
};
