import axios from 'axios';
import axiosWithAuth from '../components/axiosAuth';

export const REGISTER_START = 'REGISTER-START';
export const REGISTER_SUCCESS = 'REGISTER-SUCCESS';
export const REGISTER_FAILED = 'REGISTER-FAILED';

export const CREATE_PROFILE_START = 'CREATE_PROFILE_START';
export const CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS';
export const CREATE_PROFILE_FAILURE = 'CREATE_PROFILE_FAILURE';

export const GET_LANGUAGES_START = 'GET_TALENT_LANGUAGES';
export const GET_LANGUAGES_SUCESS = 'GET_LANGUAGES_SUCCESS';
export const GET_LANGUAGES_FAILURE = 'GET_LANGUAGES_FAILURE';

export const GET_ACCENTS_START = 'GET_ACCENTS_START';
export const GET_ACCENTS_SUCCESS = 'GET_ACCENTS_SUCCESS';
export const GET_ACCENTS_FAIL = 'GET_ACCENTS_FAIL';

export const register = creds => dispatch => {
  dispatch({ type: REGISTER_START });
  if (!creds.username) {
    dispatch({ type: REGISTER_FAILED, error: 'Please enter a username' });
  }
  if (!creds.password) {
    dispatch({ type: REGISTER_FAILED, error: 'Please enter a password' });
  }
  if (!creds.firstName) {
    dispatch({ type: REGISTER_FAILED, error: 'Please enter your first name' });
  }
  if (!creds.lastName) {
    dispatch({ type: REGISTER_FAILED, error: 'Please enter your last name' });
  }
  if (!creds.email.includes('@') || !creds.email.includes('.')) {
    dispatch({ type: REGISTER_FAILED, error: 'Please enter a correct email' });
  }
  return axios
    .post(
      'https://voicer-lambda-app-staging.herokuapp.com/api/auth/register',
      creds
    ) // CHANGE URL
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: 'SUCCEED'
      });
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAILED,
        payload: 'FAILED'
      });
    });
};

export const createClientProfile = creds => dispatch => {
  dispatch({ type: CREATE_PROFILE_START });
  return axiosWithAuth()
    .post('https://voicer-lambda-app-staging.herokuapp.com/api/clients/', creds)
    .then(res => dispatch({ type: CREATE_PROFILE_SUCCESS }))
    .catch(err => {
      console.log(err);
      return dispatch({ type: CREATE_PROFILE_FAILURE });
    });
};

export const createTalentProfile = creds => dispatch => {
  dispatch({ type: CREATE_PROFILE_START });
  return axiosWithAuth()
    .post('https://voicer-lambda-app-staging.herokuapp.com/api/talent/', creds)
    .then(res => dispatch({ type: CREATE_PROFILE_SUCCESS }))
    .catch(err => {
      console.log(err);
      return dispatch({ type: CREATE_PROFILE_FAILURE });
    });
};

export const getLanguages = () => dispatch => {
  dispatch({ type: GET_LANGUAGES_START });
  return axios
    .get('http://localhost:4000/api/auth/languages')
    .then(res => {
      dispatch({
        type: GET_LANGUAGES_SUCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_LANGUAGES_SUCESS,
        payload: err
      });
    });
};

export const getAccents = () => dispatch => {
  dispatch({ type: GET_ACCENTS_START });
  return axios
    .get('http://localhost:4000/api/auth/accents')
    .then(res => {
      dispatch({
        type: GET_ACCENTS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ACCENTS_FAIL,
        payload: err
      });
    });
};
