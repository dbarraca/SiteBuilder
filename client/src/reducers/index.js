import { combineReducers } from 'redux';
import siteReducer from './siteReducer';
import sectionReducer from './sectionReducer';

export default combineReducers( {
    sites: siteReducer,
    sections: sectionReducer
});