import {
    POST_JOB_START,
    POST_JOB_SUCCESS,
    POST_JOB_FAILED
} from '../actions';

const initialState = {
    postingJob: false,
    success: false,
    error: false
}

export const postJobReducer = (state = initialState, action) => {
    switch(action.type) {
        case POST_JOB_START:
            return {
                ...state,
                postingJob: true,
                success: false,
                error: false
            }
        case POST_JOB_SUCCESS:
            return {
                ...state,
                postingJob: false,
                success: true,
                error: false
            }
        case POST_JOB_FAILED:
            return {
                ...state,
                postingJob: false,
                success: false,
                error: true
            }
        default: return state;
    }
}