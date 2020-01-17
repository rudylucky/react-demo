import BaseService, { IBaseEntity } from './BaseService'


export interface ICommentEntity extends IBaseEntity {
  author: string,
  content: string,
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

  comment: ICommentEntity = {
    author: '昨天里的明天',
    content: '富强民主和谐！',
    createTime: '2019年12月03日 上午9:29'
  }

  getComments(data?: ICommentEntity): Array<ICommentEntity> {
    return new Array(10).fill(this.comment)
  }

}

export default CommentService