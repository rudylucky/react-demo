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

export const menu: Array<IRoute> = [{
  name: 'Java',
  code: 'java',
  path: '/java',
  component: () => <ArticleList category='tech:java' />,
}, {
  name: 'JS',
  code: 'js',
  path: '/js',
  component: () => <ArticleList category='tech:js' />,
}, {
  name: 'Python',
  code: 'python',
  path: '/python',
  component: () => <ArticleList category='tech:python' />,
}, {
  name: 'Linux',
  code: 'linux',
  path: '/linux',
  component: () => <ArticleList category='tech:linux' />,
}, {
  name: 'DevOps',
  code: 'devops',
  path: '/devops',
  component: () => <ArticleList category='tech:devops' />,
}, {
  name: 'Golang',
  code: 'golang',
  path: '/golang',
  component: () => <ArticleList category='tech:golang' />,
}]
