import React from 'react'
import MenuItem from './MenuItem'
import route from 'common/route'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import ArticleList from 'pages/Article/ArticleList'

const style = require('./index.module.scss')

const AppMenu = () => {

  const routers = route.filter(v => v.component).map(v => (
    // <Route exact path={v.path} key={v.code} component={v.component}>
    <Route exact path='/articleList' key={v.code} component={v.component}>
      {/* <MenuItem key={v.code} {...v} /> */}
      <div>sss</div>
    </Route>
  ))

  console.log(routers)

  return (
    <div className={style.appMenu}>
      <BrowserRouter>
        {/* {routers} */}
        <Route exact path='/articleList' component={ArticleList}></Route>
      </BrowserRouter>
    </div>
  )
}

export default AppMenu
