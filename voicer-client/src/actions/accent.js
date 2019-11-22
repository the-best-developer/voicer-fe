import axiosWithAuth from '../components/axiosAuth';
import axios from 'axios';

export const GET_ACCENTS_START = 'GET_ACCENTS_START';
export const GET_ACCENTS_SUCCESS = 'GET_ACCENTS_SUCCESS';
export const GET_ACCENTS_FAIL = 'GET_ACCENTS_FAIL';

export const ADD_TALENT_ACCENT_START = 'ADD_TALENT_ACCENT_START';
export const ADD_TALENT_ACCENT_SUCCESS = 'ADD_TALENT_ACCENT_SUCCESS';
export const ADD_TALENT_ACCENT_FAIL = 'ADD_TALENT_ACCENT_FAIL';

export const addTalentAccent = newTalentAccent => dispatch => {
  dispatch({ type: ADD_TALENT_ACCENT_START });
  return axiosWithAuth()
    .post(
      'https://voicer-lambda-app-staging.herokuapp.com/api/talents/talentAccent',
      newTalentAccent
    )
    .then(res => dispatch({ type: ADD_TALENT_ACCENT_SUCCESS }))
    .catch(err => {
      console.log(err);
      return dispatch({ type: ADD_TALENT_ACCENT_FAIL });
    });
};

export const getAccents = () => dispatch => {
  dispatch({ type: GET_ACCENTS_START });
  return axiosWithAuth()
    .get('https://voicer-lambda-app-staging.herokuapp.com/api/talents/accents')
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
