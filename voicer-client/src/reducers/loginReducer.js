import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from '../actions';

import jwt from 'jsonwebtoken';

const initialState = {
    loggingIn: false,
    id: null,
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
                id: jwt.verify(localStorage.getItem('token'), process.env.REACT_APP_SECRET).userId,
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