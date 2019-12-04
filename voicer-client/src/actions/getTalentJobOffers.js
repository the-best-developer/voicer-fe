import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';
//replace dbUrl in index.js to change backend server for testing

export const GET_TALENT_JOB_OFFERS_START = 'GET_TALENT_JOB_OFFERS_START';
export const GET_TALENT_JOB_OFFERS_SUCCESS = 'GET_TALENT_JOB_OFFERS_SUCCESS';
export const GET_TALENT_JOB_OFFERS_FAILED = 'GET_TALENT_JOB_OFFERS_FAILED';

export const getTalentJobOffers = talentId => dispatch => {
  dispatch({ type: GET_TALENT_JOB_OFFERS_START });
  return (
    axiosWithAuth()
      .get(`${dbUrl}/api/jobs/talent/${talentId}/offers`)
      //.get('http://localhost:4000/api/jobs')
      .then(res => {
        console.log(res);
        dispatch({
          type: GET_TALENT_JOB_OFFERS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_TALENT_JOB_OFFERS_FAILED,
          payload: err
        });
      })
  );
};
