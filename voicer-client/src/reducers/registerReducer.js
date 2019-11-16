import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  GET_LANGUAGES_START,
  GET_LANGUAGES_SUCESS,
  GET_LANGUAGES_FAILURE,
  GET_ACCENTS_START,
  GET_ACCENTS_SUCCESS,
  GET_ACCENTS_FAIL
} from '../actions';

const initialState = {
  signingUp: false,
  id: null,
  languages: null,
  accents: null,
  error: null
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        signingUp: true
      };
    case REGISTER_SUCCESS:
      const [id] = action.payload;
      return {
        ...state,
        id: id,
        signingUp: false
      };
    case REGISTER_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case GET_LANGUAGES_START:
      return {
        ...state,
        error: null
      };
    case GET_LANGUAGES_SUCESS:
      return {
        ...state,
        languages: action.payload,
        error: null
      };
    case GET_LANGUAGES_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case GET_ACCENTS_START:
      return {
        ...state,
        error: null
      };
    case GET_ACCENTS_SUCCESS:
      return {
        ...state,
        accents: action.payload,
        error: null
      };
    case GET_ACCENTS_FAIL:
      return {
        ...state,
        accents: null,
        error: null
      };
    default:
      return state;
  }
};
