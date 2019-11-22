import {
  GET_LANGUAGES_START,
  GET_LANGUAGES_SUCESS,
  GET_LANGUAGES_FAILURE,
  ADD_TALENT_LANGUAGE_START,
  ADD_TALENT_LANGUAGE_SUCCESS,
  ADD_TALENT_LANGUAGE_FAIL
} from '../actions';

const initialState = {
  languages: null,
  error: null,
  talentLanguages: null
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case ADD_TALENT_LANGUAGE_START:
      return {
        ...state,
        error: null
      };
    case ADD_TALENT_LANGUAGE_SUCCESS:
      return {
        ...state
      };
    case ADD_TALENT_LANGUAGE_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
