import { IArticleEntity } from 'services/ArticleService'
import { ICommentEntity } from 'services/CommentService'

export interface IArticleAction {
  type: 'LIST'
  article: IArticleEntity
}

export interface IArticleState {
  [code: string]: IArticleEntity & {
    comments: [ICommentEntity]
  }
}

const articleReducer = (state = {}, action: IArticleAction) => {
  switch (action.type) {
  default:
    return state
  }
}

export default articleReducer