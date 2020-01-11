import ArticleList from 'components/ArticleList'
import HomePage from 'pages/HomePage'
import AritcleView from 'pages/ArticleView'

export interface AppRoute {
  name?: string,
  code: string,
  path: string,
  hideInMenu?: boolean,
  notExact?: boolean,
  component?: (props?: any) => JSX.Element,
  children?: Array<AppRoute>
}

const hiddenRoute: Array<AppRoute> = [{
  name: '文章',
  code: 'article',
  path: '/article',
  hideInMenu: true,
  children: [{
    name: '详情',
    code: 'detail',
    path: '/detail/:articleId',
    notExact: true,
    hideInMenu: true,
    component: AritcleView
  }]
}]

const menuRoute: Array<AppRoute> = [{
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

export function routeName(path: string): AppRoute | undefined {
  const s = (JSON.parse(JSON.stringify(route)) as Array<AppRoute>)
    .flatMap(v => [v].concat(v.children || []))
  return s.find(v => v.code === path)
}

export default route