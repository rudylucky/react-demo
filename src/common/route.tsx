import React from 'react'
import ArticleList from 'components/ArticleList'
import HomePage from 'pages/HomePage'
import AritcleView from 'pages/ArticleView'
import { Redirect } from 'react-router-dom'
import util from './util'
import _ from 'lodash'
import Test from 'components/Test'

export interface IRoute {
  name?: string,
  code: string,
  path: string,
  showInMenu?: boolean,
  notExact?: boolean,
  component?: ((props?: any) => JSX.Element),
  children?: Array<IRoute>
}

const hiddenRoute: Array<IRoute> = [{
  code: '',
  path: '/',
  showInMenu: false,
  component: () => <Redirect to='/index' />,
}, {
  name: '文章',
  code: 'article',
  path: '/article',
  children: [{
    name: '详情',
    code: 'detail',
    path: '/detail/:articleId',
    notExact: false,
    component: AritcleView
  }]
}]

_.flatMap(hiddenRoute, v => [v, ...v.children || []]).forEach(v => v.showInMenu = true)

const menuRoute: Array<IRoute> = [{
  name: '首页',
  code: 'index',
  path: '/index',
  component: HomePage,
},
{
  name: '技术',
  code: 'tech',
  path: '/tech',
  component: ArticleList,
  children: [{
    name: 'Java',
    code: 'java',
    path: '/java',
  }, {
    name: 'JS',
    code: 'js',
    path: '/js'
  }, {
    name: 'Python',
    code: 'python',
    path: '/python',
  }, {
    name: 'Golang',
    code: 'golang',
    path: '/golang'
  }],
},
{
  name: '生活',
  code: 'life',
  path: '/life',
  component: ArticleList,
  children: [{
    name: '电影',
    code: 'movie',
    path: '/movie',
  },
  {
    name: '读书',
    code: 'reading',
    path: '/reading',
    component: Test
  }]
},
{
  name: '杂谈',
  code: 'talk',
  path: '/talk',
  component: ArticleList,
},
{
  name: '笔记',
  code: 'note',
  path: '/note',
  component: ArticleList,
}]
const route = menuRoute.concat(hiddenRoute)

export function routeName(path: string): IRoute | undefined {
  const s = (JSON.parse(JSON.stringify(menuRoute)) as Array<IRoute>)
  return util.flatMap(s, v => [v].concat(v.children || []))
    .find(v => v.code === path)
}

export {
  route,
  hiddenRoute,
  menuRoute
}