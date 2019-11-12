import {
    APPLY_START,
    APPLY_SUCCESS,
    APPLY_FAILED
} from '../actions';

const initialState = {
    postingApplication: false,
    error: false,
    success: false
}

export const applyReducer = (state = initialState, action) => {
    switch(action.type) {
        case APPLY_START:
            return {
                ...state,
                postingApplication: true,
                error: false,
                success: false
            }
        case APPLY_SUCCESS:
            return {
                ...state,
                postingApplication: false,
                error: false,
                success: true
            }
        case APPLY_FAILED:
            return {
                ...state,
                postingApplication: false,
                error: true,
                success: false
            }
        default: return state;
    }
}