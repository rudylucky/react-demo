import _ from "./utils";
import appConfig from "./config";

enum HttpMethod {
  GET = 0,
  POST = 1
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
  url: string
  data?: string
}

const defaultOption: IConfig & RequestInit = {
  method: 'post',
  url: 'Invalid URL'
};

export function request(url: string, data?: string): any
export function request(url: string, method: number, data: string): any
export function request(config: IConfig & RequestInit): any
export function request(arg0: string | (IConfig & RequestInit), arg1?: string | number, arg2?: string) {

  JSON.parse(JSON.stringify(defaultOption))
  const config = defaultOption;

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
  status: number,
  data: object,
  errorMessage: string,
  errorCode: string
}

abstract class BaseService {

  constructor(private baseUrl: string) {
  }

  search(data: object) {
    request(this.baseUrl + '/list', JSON.stringify(data));
  }

  list(data: object) {
  }

  
}

function baseService(suffix: string): () => AppResponse {
  return () => request(appConfig.baseUrl + suffix)
}

export function articleService(suffix: string): () => AppResponse {
  return baseService('article/')
}