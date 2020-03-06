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
  name: '首页',
  code: 'index',
  path: '/index',
}, {
  name: '笔记',
  code: 'note',
  path: '/note',
}, {
  name: '关于我',
  code: 'aboutme',
  path: '/aboutme',
}]
