import { IUserEntity } from 'services/UserService'

export interface IUserAction {
  type: 'LOGIN'
  user: IUserEntity & {
    token: string
  }
}

export type ICurrentUser = IUserEntity & {
  token: string
}

export interface IUserState {
  currentUser?: ICurrentUser
}

const userReducer = (state: IUserState = {}, action: IUserAction) => {
  switch (action.type) {
    case 'LOGIN':
      state.currentUser = action.user
      return state
    default:
      return state
  }
}

export default userReducer