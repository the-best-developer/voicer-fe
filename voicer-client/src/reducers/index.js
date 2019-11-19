import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { editClientProfileReducer } from './editClientProfileReducer'
import { getClientProfileReducer } from './getClientProfileReducer';
import { postJobReducer } from './postJobReducer';
import { getJobsReducer } from './getJobsReducer';
import { filterReducer } from './filterReducer';
import { applyReducer } from './applyReducer';
import { getTalentReducer } from './getTalentReducer';

export default combineReducers({
    registerReducer,
    loginReducer,
    editClientProfileReducer,
    getClientProfileReducer,
    postJobReducer,
    getJobsReducer,
    filterReducer,
    applyReducer,
    getTalentReducer
});