export interface IUserAction {
  type: 'UPDATE_USER' | 'LOGIN'
  name: string
}

const userReducer = (state = {}, action: IUserAction) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        title: action.name
      }
    case 'LOGIN':
      return {
        username: action.name
      }
    default:
      return state
  }
}

export default userReducer