import { combineReducers } from 'redux'
import article from './articles'
import user from './users'
import breadCrumb from './breadCrumb'

export default combineReducers({
  article,
  user,
  breadCrumb
})