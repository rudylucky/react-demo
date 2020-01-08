import ArticleList from 'pages/Article/ArticleList'
import HomePage from 'pages/HomePage'

export interface AppRoute {
  name?: string,
  code?: string,
  path?: string,
  component?: () => JSX.Element,
  children?: Array<AppRoute>
}

const route: Array<AppRoute> = [{
  name: '首页',
  code: 'index',
  path: '/index',
  component: ArticleList
},
{
  name: '技术',
  code: 'tech',
  path: 'tech',
  component: HomePage,
  children: [{
    name: 'Java',
    code: 'java',
    path: 'java',
  }, {
    name: 'JS',
    code: 'js',
    path: 'js'
  }, {
    name: 'Python',
    code: 'python',
    path: 'python',
  }, {
    name: 'Golang',
    code: 'golang',
    path: 'golang'
  }],
},
{
  name: '生活',
  code: 'life',
  path: 'life',
},
{
  name: '杂谈',
  code: 'talk',
  path: 'talk',
},
{
  name: '笔记',
  code: 'note',
  path: 'note',
},
{
  name: '电影',
  code: 'movie',
  path: 'movie',
},
{
  name: '读书',
  code: 'reading',
  path: 'reading',
}]

export default route