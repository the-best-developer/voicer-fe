import {
    GET_CLIENT_PROFILE_START,
    GET_CLIENT_PROFILE_SUCCESS,
    GET_CLIENT_PROFILE_FAILURE
} from '../actions';

const initialState = {
    clientProfile: null,
    gettingClientProfile: false,
    error: null
}

export const clientProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLIENT_PROFILE_START:
            return {
                ...state,
                gettingClientProfile: true
            }
        case GET_CLIENT_PROFILE_SUCCESS:
            return {
                ...state,
                clientProfile: action.payload,
                gettingClientProfile: false
            }
        case GET_CLIENT_PROFILE_FAILURE:
            return {
                ...state,
                gettingClientProfile: false,
                error: action.payload
            }
        default:
            return state;
    }
}