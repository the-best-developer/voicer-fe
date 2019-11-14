import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { clientProfileReducer } from './clientProfileReducer';
import { postJobReducer } from './postJobReducer';
import { getJobsReducer } from './getJobsReducer';
import { filterReducer } from './filterReducer';
import { applyReducer } from './applyReducer';

export default combineReducers({
    registerReducer,
    loginReducer,
    clientProfileReducer,
    postJobReducer,
    getJobsReducer,
    filterReducer,
    applyReducer
});