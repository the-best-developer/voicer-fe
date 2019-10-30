import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { clientProfileReducer } from './clientProfileReducer';

export default combineReducers({
    registerReducer,
    loginReducer,
    clientProfileReducer
});