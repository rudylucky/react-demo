/* eslint-disable react/display-name */
import React from 'react'
import HomePage from 'pages/HomePage'
import AritcleView from 'pages/ArticleView'
import { Redirect } from 'react-router-dom'
import _, { flatMap } from 'lodash'
import Test from 'components/Test'
import ArticleList from 'pages/HomePage/ArticleList'

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

_.flatMap(hiddenRoute, v => [v, ...v.children ?? []]).forEach(v => v.showInMenu = true)

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
  component: () => <ArticleList category='tech' />,
  children: [{
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
  }],
},
{
  name: '生活',
  code: 'life',
  path: '/life',
  component: () => <ArticleList category='tech:life' />,
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
  name: '笔记',
  code: 'note',
  path: '/note',
  component: () => <ArticleList category='tech:note' />,
}]
const route = menuRoute.concat(hiddenRoute)

export function routeName(path: string): IRoute | undefined {
  const s = (JSON.parse(JSON.stringify(menuRoute)) as Array<IRoute>)
  return flatMap(s, v => [v].concat(v.children ?? []))
    .find(v => v.code === path)
}

export {
  route,
  hiddenRoute,
  menuRoute
}