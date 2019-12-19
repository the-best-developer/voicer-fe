import {
    GET_TALENT_START,
    GET_TALENT_SUCCESS,
    GET_TALENT_FAILED,
    SET_JOB_ID,
    UPDATE_TALENT_BALANCE_SUCCESS
} from '../actions';

const initialState = {
    gettingTalent: false,
    error: null,
    talent: {},
    jobId: null
}

export const getTalentReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TALENT_START:
            return {
                ...state,
                gettingTalent: true,
                error: null
            }
        case GET_TALENT_SUCCESS:
            return {
                ...state,
                gettingTalent: false,
                error: false,
                talent: action.payload
            }
        case GET_TALENT_FAILED:
            return {
                ...state,
                gettingTalent: false,
                error: true
            }
        case SET_JOB_ID:
            return {
                ...state,
                jobId: action.payload
            }
        case UPDATE_TALENT_BALANCE_SUCCESS:
            return {
                ...state,
                talent: {...state.talent[0], accountBalance: action.payload}
            }
        default: return state;
    }
}