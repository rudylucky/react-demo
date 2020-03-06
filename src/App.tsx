import HomePage from 'pages/HomePage'
import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './App.css'
import AritcleView from 'pages/ArticleView'
import AppHeader from 'components/layout/AppHeader'
import AppFooter from 'components/layout/AppFooter'

const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Switch>
          <Route exact path='/index/:category' component={HomePage} />
          <Route exact path='/index' component={HomePage} />
          <Route path='/article/detail/:articleCode' component={AritcleView} />
          <Redirect exact path='/' to='/index' />
        </Switch>
        <AppFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
