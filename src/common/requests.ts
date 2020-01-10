import { AppResponse, BaseEntity } from 'services/BaseService'

export enum HttpMethod {
  GET,
  POST
}

export enum ContentType {
  FORM = 'application/x-www-form-urlencoded',
  JSON = 'application/json'
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
  contentType?: string
}

const defaultOption: IConfig & RequestInit = {
  method: 'post',
  url: 'Invalid URL'
}

export function request(url: string, data?: object, contentType?: ContentType): any;
export function request(url: string, method: number, data: object): any;
export function request(
  arg0: string,
  arg1?: object | number,
  arg2?: object | ContentType
) {

  JSON.parse(JSON.stringify(defaultOption))
  const config = defaultOption
  config.url = arg0

  // (url, mthod, data)
  if (typeof arg1 === 'number') {
    config.method = parseMethod(arg1)
    config.data! = arg2 as object
    return callRemote(config)
  }

  // (url, data, contentType)
  if (typeof arg0 === 'string') {
    config.data = arg1
    config.contentType = arg2 as string
    return callRemote(config)
  }

  throw new Error('request call mistake')
}

function callRemote(config: IConfig & RequestInit) {
  console.log('http fetch params', {
    url: config.url,
    data: config.data
  })
  const headers: HeadersInit = new Headers()
  headers.set('content-type', config.contentType || ContentType.JSON)
  config.headers = headers
  config.body = queryString(config.data)
  return fetch(config.url, config)
    .then(checkHttpStatus)
    .then(checkResposeData)
}

function queryString(obj: any) {
  const s = Object.keys(obj)
    .reduce((a, b) => {
      const value = obj[b]
      if (value instanceof Array) {
        return value.reduce((x, y) => `${x}&${a}=${y}`)
      }
      return `${a}&${b}=${value}`
    }, '')
    .substring(1)
  return s
}

function checkHttpStatus(resp: Response) {
  const response = resp.json()
  return response
}

function checkResposeData(resp: AppResponse<BaseEntity>): any {
  if (resp.errorCode) {
    console.error('http fetch error', resp)
  }
  console.info('http fetch result', resp.data)
  return resp.data
}