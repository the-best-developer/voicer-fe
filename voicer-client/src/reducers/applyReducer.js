import {
    APPLY_START,
    APPLY_SUCCESS,
    APPLY_FAILED
} from '../actions';

const initialState = {
    postingApplication: false,
    error: null
}

export const applyReducer = (state = initialState, action) => {
    switch(action.type) {
        case APPLY_START:
            return {
                ...state,
                postingApplication: true,
                error: null
            }
        case APPLY_SUCCESS:
            return {
                ...state,
                postingApplication: false,
                error: false
            }
        case APPLY_FAILED:
            return {
                ...state,
                postingApplication: false,
                error: true
            }
        default: return state;
    }
}