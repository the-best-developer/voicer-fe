export {
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    CREATE_PROFILE_START,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAILURE,
    createClientProfile,
    createTalentProfile,
    register
} from './register';

export {
    GET_SAMPLES_START,
    GET_SAMPLES_SUCCESS,
    GET_SAMPLES_FAIL,
    GET_SAMPLEBYID_START,
    GET_SAMPLEBYID_SUCCESS,
    GET_SAMPLEBYID_FAIL
} from './getSamples';

export {
    ADD_SAMPLE_START,
    ADD_SAMPLE_SUCCESS,
    ADD_SAMPLE_FAIL,
    addSample
} from './addSample';

export {
    GET_LANGUAGES_START,
    GET_LANGUAGES_SUCESS,
    GET_LANGUAGES_FAILURE,
    ADD_TALENT_LANGUAGE_START,
    ADD_TALENT_LANGUAGE_SUCCESS,
    ADD_TALENT_LANGUAGE_FAIL,
    getLanguages,
    addTalentLanguage
} from './language';

export {
    GET_ACCENTS_START,
    GET_ACCENTS_SUCCESS,
    GET_ACCENTS_FAIL,
    ADD_TALENT_ACCENT_START,
    ADD_TALENT_ACCENT_SUCCESS,
    ADD_TALENT_ACCENT_FAIL,
    getAccents,
    addTalentAccent
} from './accent';

export { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, login } from './login';

export {
    EDIT_CLIENT_PROFILE_START,
    EDIT_CLIENT_PROFILE_SUCCESS,
    EDIT_CLIENT_PROFILE_FAILURE,
    editClientProfile
} from './editClientProfile';

export {
    GET_CLIENT_PROFILE_START,
    GET_CLIENT_PROFILE_SUCCESS,
    GET_CLIENT_PROFILE_FAILURE,
    getClientProfile
} from './getClientProfile';

export { getTalentJobOffers } from './getTalentJobOffers';

export {
    APPLY_START,
    APPLY_SUCCESS,
    APPLY_FAILED,
    APPLY_COMPLETED,
    apply
} from './apply';

export {
  COMPLETE_JOB_START,
  COMPLETE_JOB_SUCCESS,
  COMPLETE_JOB_FAILED,
  complete
} from './completeJob';

export {
  GET_TALENT_START,
  GET_TALENT_SUCCESS,
  GET_TALENT_FAILED,
  getTalent
} from './getTalent';

export {
  GET_CLIENT_START,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILED,
  getClient
} from './getClient';

export {
    GET_VOICE_SAMPLES_START,
    GET_VOICE_SAMPLES_SUCCESS,
    GET_VOICE_SAMPLES_FAILURE
} from './getVoiceSamples'

export {
    GET_TALENTS_START,
    GET_TALENTS_SUCCESS,
    GET_TALENTS_FAILED,
    getTalents
} from './getTalents';

export {
    GET_JOB_OFFERS_START,
    GET_JOB_OFFERS_SUCCESS,
    GET_JOB_OFFERS_FAILED,
    getApplications,
    getApplicationsByClientId
} from './getApplications';

export {
    POST_JOB_START,
    POST_JOB_SUCCESS,
    POST_JOB_FAILED,
    postJob
} from './postJob';

export {
  UPDATE_BALANCE_START,
  UPDATE_CLIENT_BALANCE_SUCCESS,
  UPDATE_TALENT_BALANCE_SUCCESS,
  UPDATE_BALANCE_FAILED,
  withdraw,
  deposit
} from './updateBalance';

export {
  GET_JOBS_START,
  GET_JOBS_SUCCESS,
  GET_JOBS_FAILED,
  getJobs,
  getJobsBy
} from './getJobs';

// Review submit actions

export {
  SUBMIT_REVIEW_START,
  SUBMIT_REVIEW_SUCCESS,
  SUBMIT_REVIEW_FAILED,
  SUBMIT_REVIEW_COMPLETED,
  submitReview
} from './submitReview';

// Get reviews actions

export {
  GET_AUTHORED_REVIEWS_START,
  GET_AUTHORED_REVIEWS_SUCCESS,
  GET_AUTHORED_REVIEWS_FAILURE,
  GET_RECEIVED_REVIEWS_START,
  GET_RECEIVED_REVIEWS_SUCCESS,
  GET_RECEIVED_REVIEWS_FAILURE,
  getAuthoredReviews,
  getReceivedReviews
} from './getReviews';



export { SET_JOB_ID, setJobId } from './setJobId';

const dbUrl = 'https://dylan-voicer-backend.herokuapp.com';

export { dbUrl };
