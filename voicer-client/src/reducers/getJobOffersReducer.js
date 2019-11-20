import {
    GET_JOB_OFFERS_START,
    GET_JOB_OFFERS_SUCCESS,
    GET_JOB_OFFERS_FAILED
} from '../actions';

const initialState = {
    gettingJobOffers: false,
    error: null,
    jobOffers: []
}

export const getJobOffersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_JOB_OFFERS_START:
            return {
                ...state,
                gettingJobOffers: true,
                error: null
            }
        case GET_JOB_OFFERS_SUCCESS:
            return {
                ...state,
                gettingJobOffers: false,
                error: false,
                jobOffers: action.payload
            }
        case GET_JOB_OFFERS_FAILED:
            return {
                ...state,
                gettingJobOffers: false,
                error: true
            }
        default: return state;
    }
}