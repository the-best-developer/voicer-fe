import {
    GET_SAMPLES_START,
    GET_SAMPLES_SUCCESS,
    GET_SAMPLES_FAIL,
    GET_SAMPLEBYID_START,
    GET_SAMPLEBYID_SUCCESS,
    GET_SAMPLEBYID_FAIL,
    ADD_SAMPLE_START,
    ADD_SAMPLE_SUCCESS,
    ADD_SAMPLE_FAIL
} from '../actions';

const initialState = {
    newUrl: null,
    uploadSuccess: null,
    uploadError: null,
    allSamples: null,
    userSamples: null,
    error: null
};

export const sampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SAMPLE_START:
            return {
                ...state,
                error: null,
                uploadError: null,
                newUrl: null,
                uploadSuccess: null
            };
        case ADD_SAMPLE_SUCCESS:
            return {
                ...state,
                newUrl: action.payload,
                uploadSuccess: true
            };
        case ADD_SAMPLE_FAIL:
            return {
                ...state,
                uploadSuccess: false,
                uploadError: true,
                error: action.payload
            };
        case GET_SAMPLES_START:
            return {
                ...state,
                error: null
            };
        case GET_SAMPLES_SUCCESS:
            return {
                ...state,
                allSamples: action.payload
            };
        case GET_SAMPLES_FAIL:
            return {
                ...state,
                error: null
            };
        case GET_SAMPLEBYID_START:
            return {
                ...state,
                error: null
            };
        case GET_SAMPLEBYID_SUCCESS:
            return {
                ...state,
                userSamples: action.payload
            };

        case GET_SAMPLEBYID_FAIL:
            return {
                ...state,
                error: null
            };
        default:
            return state;
    }
};
