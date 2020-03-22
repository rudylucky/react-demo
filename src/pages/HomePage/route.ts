export interface IRoute {
  name?: string,
  code: string,
  path: string,
  showInMenu?: boolean,
  notExact?: boolean,
  component?: ((props?: any) => JSX.Element),
  children?: Array<IRoute>
  category?: string
}

export const route: Array<IRoute> = [{
  name: '最近更新',
  code: 'update',
  path: '/index',
}, {
  name: 'Java',
  code: 'java',
  path: '/index/java',
}, {
  name: 'JS',
  code: 'js',
  path: '/index/js',
}, {
  name: 'Python',
  code: 'python',
  path: '/index/python',
}, {
  name: 'Linux',
  code: 'linux',
  path: '/index/linux',
}, {
  name: 'DevOps',
  code: 'devops',
  path: '/index/devops',
}]
