import ArticleList from 'pages/ArticleListPage'
import HomePage from 'pages/HomePage'
import AritcleView from 'pages/ArticleView'

export interface AppRoute {
  name: string,
  code: string,
  path: string,
  component?: (props?: any) => JSX.Element,
  children?: Array<AppRoute>
}

const route: Array<AppRoute> = [{
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
    component: AritcleView,
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
  children: [{
    name: '电影',
    code: 'movie',
    path: '/movie',
  },
  {
    name: '读书',
    code: 'reading',
    path: '/reading',
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

export default route