import {
    GET_TALENTS_START,
    GET_TALENTS_SUCCESS,
    GET_TALENTS_FAILED,
} from '../actions';

const initialState = {
    gettingTalents: false,
    error: null,
    talents: []
}

export const getTalentsReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_TALENTS_START: {
      return {
        ...state,
        gettingTalents: true,
        error: null
      }
    }

    case GET_TALENTS_SUCCESS: {
      return {
        ...state,
        gettingTalents: false,
        error: null,
        talents: action.payload.filter(talent => talent.firstName !== "Admin")
      }
    }

    case GET_TALENTS_FAILED: {
      return {
        ...state,
        gettingTalents: false,
        error: true
      }
    }

    default: return state

  }
}
