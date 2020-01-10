import {
  GET_VOICE_SAMPLES_START,
  GET_VOICE_SAMPLES_SUCCESS,
  GET_VOICE_SAMPLES_FAILURE
} from '../actions';

const initialState = {
  gettingVoiceSamples: false,
  error: null,
  samples: []
}

export const getVoiceSamplesReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_VOICE_SAMPLES_START:
      return {
        ...state,
        gettingVoiceSamples: true,
        error: null
      }

    case GET_VOICE_SAMPLES_SUCCESS:
      return {
        ...state,
        gettingVoiceSamples: false,
        error: null,
        samples: action.payload
      }

    case GET_VOICE_SAMPLES_FAILURE:
      return {
        ...state,
        gettingVoiceSamples: false,
        error: true,
      }

    default:
      return state;
  }
}
