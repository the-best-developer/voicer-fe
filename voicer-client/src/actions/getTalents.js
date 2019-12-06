import axiosWithAuth from '../components/axiosAuth';

export const GET_TALENTS_START = 'GET_TALENTS_START';
export const GET_TALENTS_SUCCESS = 'GET_TALENTS_SUCCESS';
export const GET_TALENTS_FAILED = 'GET_TALENTS_FAILED';

export const getTalents = () => dispatch => {
    dispatch({ type: GET_TALENTS_START });

    return axiosWithAuth()
        .get(`https://voicer-lambda-app-staging.herokuapp.com/api/talents/`)
        .then((res) => {
            dispatch({
                type: GET_TALENTS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_TALENTS_FAILED,
                payload: err
            })
        })
};
