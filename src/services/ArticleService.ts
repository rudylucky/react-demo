import BaseService, { IBaseEntity } from './BaseService'
import { ContentType } from 'common/requests'

export interface IArticleEntity extends IBaseEntity {
  title: string,
  authorCode: string,
  abstract: string,
  upVote: number,
  tag: string,
  category: string,
  totalRead: number
}

class ArticleService extends BaseService<IArticleEntity> {

  private static instance: ArticleService

  constructor() {
    super('article')
  }

  static getInstance() {
    if (typeof ArticleService.instance === 'undefined') {
      ArticleService.instance = new ArticleService()
    }
    return ArticleService.instance
  }

  upVote(data: IArticleEntity) {
    return this.request('upVote', data)
  }

  getContent(articleCode: string) {
    return this.request('getContent', { articleCode }, ContentType.FORM)
  }

  listWithContent(data: IArticleEntity) {
    return this.request('listWithContent', data)
  }

  infoWithContent(data: IArticleEntity) {
    return this.request('infoWithContent', data)
  }
}

export default ArticleService