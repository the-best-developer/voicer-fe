import axiosWithAuth from '../components/axiosAuth';
import axios from 'axios';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server address

export const ADD_SAMPLE_START = 'ADD_SAMPLE_START';
export const ADD_SAMPLE_SUCCESS = 'ADD_SAMPLE_SUCCESS';
export const ADD_SAMPLE_FAIL = 'ADD_SAMPLE_FAIL';

export const addSample = (fileName, fileType) => dispatch => {
  axiosWithAuth()
    .post(`${dbUrl}/api/uploads`, {
      fileName: fileName,
      fileType: fileType
    })
    .then(response => {
      let returnData = response.data.data.returnData;
      let signedRequest = returnData.signedRequest;
      let url = returnData.url;
    });
};
