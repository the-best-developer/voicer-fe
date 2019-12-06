import axiosWithAuth from '../components/axiosAuth';
import { dbUrl } from './index';

export const ADD_TALENT_BIO_START = "ADD_TALENT_BIO_START";
export const ADD_TALENT_BIO_SUCCESS = "ADD_TALENT_BIO_SUCCESS";
export const ADD_TALENT_BIO_FAILED = "ADD_TALENT_BIO_FAILED";

export const addTalentBio = talentBio => dispatch => {
    dispatch({ type: ADD_TALENT_BIO_START });
    return axiosWithAuth()
        .post(`${dbUrl}/api/talents/talentBio`, talentBio)
        .then(res => dispatch({ type: ADD_TALENT_BIO_SUCCESS }))
        .catch(err => {
            console.log(err);
            return dispatch({ type: ADD_TALENT_BIO_FAILED });
        });
};