import {
    GET_AUTHORED_REVIEWS_START,
    GET_AUTHORED_REVIEWS_SUCCESS,
    GET_AUTHORED_REVIEWS_FAILURE,
    GET_RECEIVED_REVIEWS_START,
    GET_RECEIVED_REVIEWS_SUCCESS,
    GET_RECEIVED_REVIEWS_FAILURE
} from '../actions';

const initialState = {
    gettingAuthoredReviews: false,
    gettingReceivedReviews: false,
    authoredReviews: [],
    receivedReviews: [],
    error: null
}

export const getReviewsReducer = (state = initialState, action) => {
    switch (action) {
        case GET_AUTHORED_REVIEWS_START:
            return {
                ...state,
                gettingAuthoredReviews: true
            }
        case GET_AUTHORED_REVIEWS_SUCCESS:
            return {
                ...state,
                gettingAuthoredReviews: false,
                authoredReviews: action.payload
            }
        case GET_AUTHORED_REVIEWS_FAILURE:
            return {
                ...state,
                gettingAuthoredReviews: false,
                error: action.payload
            }
        case GET_RECEIVED_REVIEWS_START:
            return {
                ...state,
                gettingReceivedReviews: true
            }
        case GET_RECEIVED_REVIEWS_SUCCESS:
            return {
                ...state,
                gettingReceivedReviews: false,
                receivedReviews: action.payload
            }
        case GET_RECEIVED_REVIEWS_FAILURE:
            return {
                ...state,
                gettingReceivedReviews: false,
                error: action.payload
            }
        default:
            return state;
    }
}