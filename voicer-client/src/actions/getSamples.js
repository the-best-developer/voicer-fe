import axiosWithAuth from '../components/axiosAuth';
import axios from 'axios';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server address

export const GET_SAMPLES_START = 'GET_SAMPLES_START';
export const GET_SAMPLES_SUCCESS = 'GET_SAMPLES_SUCCESS';
export const GET_SAMPLES_FAIL = 'GET_SAMPLES_FAIL';

export const GET_SAMPLEBYID_START = 'GET_SAMPLEBYID_START';
export const GET_SAMPLEBYID_SUCCESS = 'GET_SAMPLEBYID_SUCCESS';
export const GET_SAMPLEBYID_FAIL = 'GET_SAMPLEBYID_FAIL';

export const getSamples = () => dispatch => {
  dispatch({ type: GET_SAMPLES_START });
  return axiosWithAuth().post(`${dbUrl}/`);
};
