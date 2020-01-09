import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';
import jwt from 'jsonwebtoken';

export const GET_VOICE_SAMPLES_START = "GET_VOICE_SAMPLES_START";
export const GET_VOICE_SAMPLES_SUCCESS = "GET_VOICE_SAMPLES_SUCCESS";
export const GET_VOICE_SAMPLES_FAILURE = "GET_VOICE_SAMPLES_SUCCESS";

export const getVoiceSamples = (userId) => dispatch => {

  dispatch({ type: GET_VOICE_SAMPLES_START })

  return axiosWithAuth()
          .get(`${dbUrl}/api/talents/${userId}/samples`)
          .then(res => {
            dispatch({
              type: GET_VOICE_SAMPLES_SUCCESS,
              payload: res.data
            })
            return res.data
          })
          .catch(err => {
            dispatch({
              type: GET_VOICE_SAMPLES_FAILURE,
              payload: err
            })
          })
};
