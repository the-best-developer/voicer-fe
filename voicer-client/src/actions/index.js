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
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    login
} from './login';

export {
    EDIT_CLIENT_PROFILE_START,
    EDIT_CLIENT_PROFILE_SUCCESS,
    EDIT_CLIENT_PROFILE_FAILURE,
    editClientProfile
} from './editClientProfile'

export {
    GET_CLIENT_PROFILE_START,
    GET_CLIENT_PROFILE_SUCCESS,
    GET_CLIENT_PROFILE_FAILURE,
    getClientProfile
} from './getClientProfile'

export {
    POST_JOB_START,
    POST_JOB_SUCCESS,
    POST_JOB_FAILED,
    postJob
} from './postJob';

export {
    GET_JOBS_START,
    GET_JOBS_SUCCESS,
    GET_JOBS_FAILED,
    getJobs
} from './getJobs'

export {
    APPLY_START,
    APPLY_SUCCESS,
    APPLY_FAILED
} from './apply'