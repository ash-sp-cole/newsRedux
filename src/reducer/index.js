import { combineReducers }from 'redux';
import postReducer from './postReduce';

export default combineReducers({
post: postReducer
});