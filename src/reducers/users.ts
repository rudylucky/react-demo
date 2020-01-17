export interface IUserAction {
  type: string
  name: string
}

const user = (state = {}, action: IUserAction) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        title: action.name
      }
    default:
      return state
  }
}

export default user