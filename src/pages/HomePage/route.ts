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
  path: '/tech/java',
}, {
  name: 'JS',
  code: 'js',
  path: '/tech/js',
}, {
  name: 'Python',
  code: 'python',
  path: '/tech/python',
}, {
  name: 'Linux',
  code: 'linux',
  path: '/tech/linux',
}, {
  name: 'DevOps',
  code: 'devops',
  path: '/tech/devops',
}]
