import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions';

const initialState = {
    loggingIn: false,
    id: null,
    userType: null,
    error: null
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                id: action.payload.userId,
                userType: action.payload.userType,
                loggingIn: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}