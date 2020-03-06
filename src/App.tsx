import HomePage from 'pages/HomePage'
import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './App.css'
import AritcleView from 'pages/ArticleView'
import AppHeader from 'components/layout/AppHeader'

const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Switch>
          <Route exact path='/index' component={HomePage} />
          <Route exact path='/tech/:category' component={HomePage} />
          <Route path='/article/detail/:articleCode' component={AritcleView} />
          <Redirect exact path='/' to='/index' />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
