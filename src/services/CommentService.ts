import BaseService, { IBaseEntity } from './BaseService'


export interface ICommentEntity extends IBaseEntity {
  articleCode?: string
  userCode?: string
  content?: string
}

class CommentService extends BaseService<ICommentEntity> {

  private static instance: CommentService

  constructor() {
    super('comment')
  }

  static getInstance() {
    if (typeof CommentService.instance === 'undefined') {
      CommentService.instance = new CommentService()
    }
    return CommentService.instance
  }

}

export default CommentService