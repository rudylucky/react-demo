import BaseService, { BaseEntity } from './BaseService'

export interface ArticleEntity extends BaseEntity {
  title?: string,
  authorCode?: string,
  abstract?: string,
  upVote?: number,
  tag?: string,
  category?: string,
  totalRead?: number
}

class ArticleService extends BaseService<ArticleEntity> {

  private static instance: ArticleService

  constructor() {
    super('article')
  }

  static getInstance = () => {
    if (typeof ArticleService.instance === 'undefined') {
      ArticleService.instance = new ArticleService()
    }
    return ArticleService.instance
  }

  upVote(data: ArticleEntity) {
    return this.request('upVote', data)
  }

  listWithContent(data: ArticleEntity) {
    return this.request('listWithContent', data)
  }

  infoWithContent(data: ArticleEntity) {
    return this.request('infoWithContent', data)
  }
}

export default ArticleService