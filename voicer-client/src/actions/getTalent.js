import axiosWithAuth from '../components/axiosAuth';

export const GET_TALENT_START = 'GET_TALENT_START';
export const GET_TALENT_SUCCESS = 'GET_TALENT_SUCCESS';
export const GET_TALENT_FAILED = 'GET_TALENT_FAILED';

export const getTalent = () => dispatch => {
    dispatch({ type: GET_TALENT_START });
    return axiosWithAuth()
        .get('https://voicer-lambda-app-staging.herokuapp.com/api/jobs')
        //.get('http://localhost:4000/api/talents')
        .then((res) => {
            dispatch({
                type: GET_TALENT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_TALENT_FAILED,
                payload: err
            })
        })
};