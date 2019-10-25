import {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILED
} from '../actions';

const initialState = {
    signingUp: false,
    id: null,
    error: null
}

export const registerReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_START:
            
    }
}