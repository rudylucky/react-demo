import { combineReducers } from 'redux'
import articleReducer from './articleReducer'
import userReducer from './userReducer'

export default combineReducers({
  article: articleReducer,
  user: userReducer,
})