import {
    GET_CLIENT_START,
    GET_CLIENT_SUCCESS,
    GET_CLIENT_FAILED,
    SET_JOB_ID,
    UPDATE_CLIENT_BALANCE_SUCCESS
} from '../actions';

const initialState = {
    gettingClient: false,
    error: null,
    client: {},
    jobId: null
}

export const getClientReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CLIENT_START:
            return {
                ...state,
                gettingClient: true,
                error: null
            }
        case GET_CLIENT_SUCCESS:
            return {
                ...state,
                gettingClient: false,
                error: false,
                client: action.payload
            }
        case GET_CLIENT_FAILED:
            return {
                ...state,
                gettingClient: false,
                error: true
            }
        case SET_JOB_ID:
            return {
                ...state,
                jobId: action.payload
            }
        case UPDATE_CLIENT_BALANCE_SUCCESS:
            return {
                ...state,
                client: {...state.client[0], accountBalance: action.payload}
            }
        default: return state;
    }
}