import { request } from 'common/requests'
import appConfig from 'common/config'

export interface AppResponse<T> {
  status?: number;
  data?: T;
  errorMessage?: string;
  errorCode?: string;
}

export interface BaseEntity {
  id?: number,
  code?: string,
  createTime?: Date,
  createUser?: string,
  updateTime?: Date,
  updateUser?: string
}

abstract class BaseService<T extends BaseEntity> {
  private baseUrl: string;

  constructor(suffix: string) {
    this.baseUrl = appConfig.baseUrl + suffix
  }

  request(api: string, param: T = {} as T): any {
    return request(this.baseUrl + api, param)
  }

  search (data: T): Array<T> {
    return this.request('/search', data)
  }

  list (data: T): Array<T> {
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
