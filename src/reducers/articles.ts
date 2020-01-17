export interface IArticleAction {
  type: string
  title: string
}

const article = (state = {}, action: IArticleAction) => {
  switch (action.type) {
    case 'UPDATE_ARTICLE':
      return {
        title: action.title
      }
    default:
      return state
  }
}

export default article