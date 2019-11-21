import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions';

const initialState = {
    loggingIn: false,
    id: null,
    userType: null,
    error: false,
    success: false
}

export const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: false,
                success: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                id: action.payload.userId,
                userType: action.payload.userType,
                loggingIn: false,
                success: true,
                error: false
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload,
                loggingIn: false,
                success: false
            }
        default: return state;
    }
}