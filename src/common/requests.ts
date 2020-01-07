import _ from './utils'
import appConfig from './config'

enum HttpMethod {
  GET,
  POST
}

function parseMethod(method: HttpMethod): string {
  switch (method) {
    case HttpMethod.GET:
      return 'get'
    case HttpMethod.POST:
      return 'post'
  }
}

interface IConfig {
  url: string;
  data?: object;
}

const defaultOption: IConfig & RequestInit = {
  method: 'post',
  url: 'Invalid URL'
}

export function request(url: string, data?: object): any;
export function request(url: string, method: number, data: object): any;
export function request(config: IConfig & RequestInit): any;
export function request(
  arg0: string | (IConfig & RequestInit),
  arg1?: object | number,
  arg2?: object
) {
  JSON.parse(JSON.stringify(defaultOption))
  const config = defaultOption

  // (config)
  if (typeof arg0 === 'object') {
    _.merge(arg0, config)
    return fetch(config.url, config)
  }

  // (url, mthod, data)
  if (typeof arg1 === 'number') {
    config.method = parseMethod(arg1)
    config.data = arg2
    return fetch(arg0, config)
  }

  // (url, data)
  if (typeof arg1 === 'string') {
    config.data = arg1
    return fetch(arg0, config)
  }
}

interface AppResponse {
  status: number;
  data: object;
  errorMessage: string;
  errorCode: string;
}

abstract class BaseService {
  private baseUrl: string;

  constructor(suffix: string) {
    this.baseUrl = appConfig.baseUrl + suffix
  }

  request(api: string, param: object) { }

  search(data: object) {
    request(this.baseUrl + '/search', data)
  }

  list(data: object) {
    request(this.baseUrl + '/list', JSON.stringify)
  }
}

function baseService(suffix: string): () => AppResponse {
  return () => request(appConfig.baseUrl + suffix)
}

export function articleService(suffix: string): () => AppResponse {
  return baseService('article/')
}
