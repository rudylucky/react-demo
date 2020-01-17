export interface IBreadCrumbAction {
  type: string
  content: string
}

const breadCrumb = (state = { content: '' }, action: IBreadCrumbAction) => {
  switch (action.type) {
    case 'UPDATE_BREADCRUMB':
      if (action.content === '/ ') {
        return state
      }
      return {
        content: action.content
      }
    default:
      return state
  }
}

export default breadCrumb