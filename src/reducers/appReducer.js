import { combineReducers } from 'redux';
import searchReducer from './searchReducer'
import matchReducer from './matchReducer'

export default combineReducers({
    search: searchReducer,
    matches: matchReducer,
});