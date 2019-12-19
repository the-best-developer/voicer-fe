import {
    SUBMIT_REVIEW_START,
    SUBMIT_REVIEW_SUCCESS,
    SUBMIT_REVIEW_FAILED,
    SUBMIT_REVIEW_COMPLETED
} from '../actions';

const initialState = {
    submittingReview: false,
    feedback: "",
    error: "",
    success: false
}

export const submitReviewReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_REVIEW_START:
            return {
                ...state,
                submittingReview: true,
                success: false
            }
        case SUBMIT_REVIEW_SUCCESS:
            return {
                ...state,
                feedback: action.payload,
                submittingReview: false,
                success: true
            }
        case SUBMIT_REVIEW_FAILED:
            return {
                ...state,
                submittingReview: false,
                error: action.payload,
                success: false
            }
        case SUBMIT_REVIEW_COMPLETED:
            return {
                ...state,
                error: "",
                success: false,
                submittingReview: false,
            }
        default: return state;
    }
}