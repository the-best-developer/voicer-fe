import {
    EDIT_CLIENT_PROFILE_START,
    EDIT_CLIENT_PROFILE_SUCCESS,
    EDIT_CLIENT_PROFILE_FAILURE
} from '../actions';

const initialState = {
    editingClientProfile: false
}

export const editClientProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDIT_CLIENT_PROFILE_START:
            return {
                ...state,
                editingClientProfile: true
            }
        case EDIT_CLIENT_PROFILE_SUCCESS:
            return {
                ...state,
                editingClientProfile: false
            }
        case EDIT_CLIENT_PROFILE_FAILURE:
            return {
                ...state,
                editingClientProfile: false,
            }
        default:
            return state;
    }
}