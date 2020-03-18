import { combineReducers } from 'redux'
import articleReducer, { IArticleState } from './articleReducer'
import userReducer, { IUserState } from './userReducer'

export interface IStore {
  articleState: IArticleState
  userState: IUserState
}

export default combineReducers({
  articleState: articleReducer,
  userState: userReducer,
})