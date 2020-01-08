import { AppResponse, BaseEntity } from 'services/BaseService'

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
export function request(
  arg0: string,
  arg1?: object | number,
  arg2?: object
) {

  JSON.parse(JSON.stringify(defaultOption))
  const config = defaultOption
  config.url = arg0

  // (url, mthod, data)
  if (typeof arg1 === 'number') {
    config.method = parseMethod(arg1)
    config.data = arg2
    return callRemote(config)
  }

  // (url, data)
  if (typeof arg0 === 'string') {
    config.data = arg1
    return callRemote(config)
  }

  throw new Error('request call mistake')
}

function callRemote(config: IConfig & RequestInit) {
  console.log('http fetch params', {
    url: config.url,
    data: config.data
  })
  return fetch(config.url, config)
    .then(checkHttpStatus)
    .then(checkResposeData)
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