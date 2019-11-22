import {
  GET_ACCENTS_START,
  GET_ACCENTS_SUCCESS,
  GET_ACCENTS_FAIL,
  ADD_TALENT_ACCENT_START,
  ADD_TALENT_ACCENT_SUCCESS,
  ADD_TALENT_ACCENT_FAIL
} from '../actions';

const initialState = {
  accents: null,
  error: null,
  talentAccents: null
};

export const accentReducer = (state = initialState, action) => {
  switch (action.type) {
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
    case ADD_TALENT_ACCENT_START:
      return {
        ...state,
        error: null
      };
    case ADD_TALENT_ACCENT_SUCCESS:
      return {
        ...state
      };
    case ADD_TALENT_ACCENT_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
