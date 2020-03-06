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
  category?: string
}

export const route: Array<IRoute> = [{
  name: '最近更新',
  code: 'update',
  path: '/tech/update',
  category: 'tech:update'
}, {
  name: 'Java',
  code: 'java',
  path: '/tech/java',
  category: 'tech:java'
}, {
  name: 'JS',
  code: 'js',
  path: '/tech/js',
  category: 'tech:js'
}, {
  name: 'Python',
  code: 'python',
  path: '/tech/python',
  category: 'tech:python'
}, {
  name: 'Linux',
  code: 'linux',
  path: '/tech/linux',
  category: 'tech:linux'
}, {
  name: 'DevOps',
  code: 'devops',
  path: '/tech/devops',
  category: 'tech:devops'
}, {
  name: 'Golang',
  code: 'golang',
  path: '/tech/golang',
  category: 'tech:golang'
}]
