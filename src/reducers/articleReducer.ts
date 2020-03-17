import ArticleService, { IArticleEntity } from 'services/ArticleService'
import { ICommentEntity } from 'services/CommentService'
import { stat } from 'fs'

export interface IArticleAction {
  type: 'LIST'
  article: IArticleEntity
}

export interface IArticleState {
  article: {
    [code: string]: IArticleEntity & {
      comments: [ICommentEntity]
    }
  }
}

const articleReducer = (state = {}, action: IArticleAction) => {
  switch (action.type) {
    default:
      return state
  }
}

export default articleReducer