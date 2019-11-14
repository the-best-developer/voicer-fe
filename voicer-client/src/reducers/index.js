import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { editClientProfileReducer } from './editClientProfileReducer'
import { getClientProfileReducer } from './clientProfileReducer';
import { postJobReducer } from './postJobReducer';
import { getJobsReducer } from './getJobsReducer';

export default combineReducers({
    registerReducer,
    loginReducer,
    editClientProfileReducer,
    getClientProfileReducer,
    postJobReducer,
    getJobsReducer
});