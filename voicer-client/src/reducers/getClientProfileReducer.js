import {
    GET_CLIENT_PROFILE_START,
    GET_CLIENT_PROFILE_SUCCESS,
    GET_CLIENT_PROFILE_FAILURE
} from '../actions';

const initialState = {
    clientProfile: {},
    gettingClientProfile: false,
}

export const getClientProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLIENT_PROFILE_START:
            return {
                ...state,
                gettingClientProfile: true
            }
        case GET_CLIENT_PROFILE_SUCCESS:
            return {
                ...state,
                clientProfile: action.payload[0],
                gettingClientProfile: false
            }
        case GET_CLIENT_PROFILE_FAILURE:
            return {
                ...state,
                gettingClientProfile: false,
            }
        default:
            return state;
    }
}