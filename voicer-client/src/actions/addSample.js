import axiosWithAuth from '../components/axiosAuth';
import axios from 'axios';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server address

export const ADD_SAMPLE_START = 'ADD_SAMPLE_START';
export const ADD_SAMPLE_SUCCESS = 'ADD_SAMPLE_SUCCESS';
export const ADD_SAMPLE_FAIL = 'ADD_SAMPLE_FAIL';

export const addSample = (file, fileName, fileType, userId) => dispatch => {
    dispatch({ type: ADD_SAMPLE_START });
    return axiosWithAuth()
        .post(`${dbUrl}/api/uploads`, {
            fileName: fileName,
            fileType: fileType
        })
        .then(response => {
            let returnData = response.data.data.returnData;
            let signedRequest = returnData.signedRequest;
            let url = returnData.url;
            console.log('Received a signed request ' + signedRequest);

            var options = {
                headers: {
                    'Content-Type': fileType
                }
            };
            axios
                .put(signedRequest, file, options)
                .then(result => {
                    dispatch({ type: ADD_SAMPLE_SUCCESS, payload: url });
                    console.log('Response from s3', url, result);
                })
                .catch(error => {
                    alert(JSON.stringify(error));
                    dispatch({ type: ADD_SAMPLE_FAIL, payload: error });
                });

          return {url: url, userId: userId};
        })
        .then(voiceSampleData => {
            const data = voiceSampleData;

            axiosWithAuth().post(`${dbUrl}/api/talents/voice-samples/`, data)
              .then(result => {
                return result.data.message
              })
              .catch(error => {
                  alert(JSON.stringify(error));
              });
        })
};
