/* eslint-disable react/display-name */
import React from 'react'
import ArticleList from './ArticleList'

export interface IRoute {
  name?: string,
  code: string,
  path: string,
  showInMenu?: boolean,
  notExact?: boolean,
  component?: ((props?: any) => JSX.Element),
  children?: Array<IRoute>
}

export const route: Array<IRoute> = [{
  name: 'Java',
  code: 'java',
  path: '/tech/java',
  component: () => <ArticleList category='tech:java' />,
}, {
  name: 'JS',
  code: 'js',
  path: '/tech/js',
  component: () => <ArticleList category='tech:js' />,
}, {
  name: 'Python',
  code: 'python',
  path: '/tech/python',
  component: () => <ArticleList category='tech:python' />,
}, {
  name: 'Linux',
  code: 'linux',
  path: '/tech/linux',
  component: () => <ArticleList category='tech:linux' />,
}, {
  name: 'DevOps',
  code: 'devops',
  path: '/tech/devops',
  component: () => <ArticleList category='tech:devops' />,
}, {
  name: 'Golang',
  code: 'golang',
  path: '/tech/golang',
  component: () => <ArticleList category='tech:golang' />,
}]
