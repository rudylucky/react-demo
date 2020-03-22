import { IUserEntity } from 'services/UserService'
import { setCurrentUser, rmCurrentUser } from 'common/util'

export interface ILoginAction {
  type: 'LOGIN'
  user: IUserEntity & {
    token: string
  }
}

export interface ILoginoutAction {
  type: 'LOGOUT'
}

export type IUserAction = ILoginAction & ILoginoutAction

export type ICurrentUser = IUserEntity & {
  token: string
}

export interface IUserState {
  currentUser?: ICurrentUser
}

const userReducer = (state: IUserState = {}, action: IUserAction) => {
  switch (action.type) {
    case 'LOGIN':
      setCurrentUser(action.user)
      state.currentUser = action.user
      return state
    case 'LOGOUT':
      rmCurrentUser()
      delete state.currentUser
      return state
    default:
      return state
  }
}

export default userReducer