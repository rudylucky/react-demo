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
    content: '怎么设置仿真翻页等模式，在设置里找半天找不到！',
    createTime: '2019年12月03日 上午9:29  Δ42楼'
  }

  getComments(data?: ICommentEntity): Array<ICommentEntity> {
    return new Array(10).fill(this.comment)
  }

}

export default CommentService