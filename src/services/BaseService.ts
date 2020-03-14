import appConfig from 'common/config'
import { ContentType, request } from 'common/requests'

export interface IResponse<T> {
  status?: number;
  data?: T;
  errorMessage?: string;
  errorCode?: string;
}

export interface IBaseEntity {
  id?: number,
  code?: string,
  createTime?: string,
  createUser?: string,
  updateTime?: string,
  updateUser?: string
}

abstract class BaseService<T extends IBaseEntity> {
  private baseUrl: string;

  constructor(suffix: string) {
    this.baseUrl = appConfig.baseUrl + suffix
  }

  request(api: string = '', param: T | object = {} as T, contentType?: ContentType): any {
    if (!api.startsWith('/')) {
      api = '/' + api
    }
    return request(this.baseUrl + api, param, contentType)
  }

  search (data: T): Array<T> {
    return this.request('/search', data)
  }

  list (data: T = {} as T): Promise<Array<T>> {
    return this.request('/list', data)
  }

  save (data: T) {
    return this.request('/save', data)
  }

  saveBatch (data: T) {
    this.request('/save/batch', data)
  }

  update (data: T) {
    this.request('/update', data)
  }

  info (data: T): T {
    return this.request('/info', data)
  }
}

export default BaseService
