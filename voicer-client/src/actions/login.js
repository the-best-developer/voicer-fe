import axios from 'axios';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server for testing

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const login = creds => async dispatch => {
  dispatch({ type: LOGIN_START });
  if (!creds.username) {
    dispatch({ type: LOGIN_FAILED, error: 'username not correct' });
  }
  if (!creds.password) {
    dispatch({ type: LOGIN_FAILED, error: 'password not correct' });
  }
  return await axios
    .post(`${dbUrl}/api/auth/login`, creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      localStorage.removeItem('token');
      dispatch({
        type: LOGIN_FAILED,
        payload: err
      });
    });
};
