import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { clientProfileReducer } from './clientProfileReducer';
import { postJobReducer } from './postJobReducer';
import { getJobsReducer } from './getJobsReducer';

export default combineReducers({
    registerReducer,
    loginReducer,
    clientProfileReducer,
    postJobReducer,
    getJobsReducer
});