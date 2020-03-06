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
        {/* <Redirect exact path='/' to='/index' /> */}
        <Route exact path='/index' component={HomePage} />
        {/* <Redirect exact path='/tech/update' to='/index' /> */}
        <Route exact path='/tech/:category' component={HomePage} />
        <Route path='/article/detail/:articleCode' component={AritcleView} />
      </BrowserRouter>
    </div>
  )
}

export default App
