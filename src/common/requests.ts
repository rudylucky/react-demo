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
