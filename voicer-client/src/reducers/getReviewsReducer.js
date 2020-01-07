import {
    GET_REVIEW_START,
    GET_REVIEW_SUCCESS,
    GET_REVIEW_FAILED
} from '../actions';

const initialState = {
    fetchingReview: false,
    reviews: [],
    error: "",
    success: false
}

export const getReviewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_REVIEW_START:
            return {
                ...state,
                fetchingReview: true,
                success: false
            }
        case GET_REVIEW_SUCCESS:
            return {
                ...state,
                reviews: action.payload,
                fetchingReview: false,
                success: true
            }
        case GET_REVIEW_FAILED:
            return {
                ...state,
                fetchingReview: false,
                error: action.payload,
                success: false
            }
        default: return state;
    }
}