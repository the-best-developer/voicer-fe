import { combineReducers } from 'redux';
import { registerReducer } from './registerReducer';
import { loginReducer } from './loginReducer';
import { editClientProfileReducer } from './editClientProfileReducer';
import { getClientProfileReducer } from './getClientProfileReducer';
import { postJobReducer } from './postJobReducer';
import { getJobsReducer } from './getJobsReducer';
import { filterReducer } from './filterReducer';
import { applyReducer } from './applyReducer';
import { getTalentReducer } from './getTalentReducer';
import { getTalentsReducer } from './getTalentsReducer';
import { getJobOffersReducer } from './getJobOffersReducer';
import { languageReducer } from './languageReducer';
import { accentReducer } from './accentReducer';
import { sampleReducer } from './sampleReducer';
import { submitReviewReducer } from './submitReviewReducer';
import { getReviewsReducer } from './getReviewsReducer';

export default combineReducers({
    registerReducer,
    loginReducer,
    editClientProfileReducer,
    getClientProfileReducer,
    postJobReducer,
    getJobsReducer,
    filterReducer,
    applyReducer,
    getTalentReducer,
    getTalentsReducer,
    getJobOffersReducer,
    languageReducer,
    accentReducer,
    submitReviewReducer,
    getReviewsReducer,
    sampleReducer
});
