import { combineReducers }from 'redux';
import postReduce from './postReduce';
import userReduce from './userReduce';

export default combineReducers({
posts: postReduce,
users : userReduce
});