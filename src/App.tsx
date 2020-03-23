import HomePage from 'pages/HomePage'
import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import './App.css'
import AritcleView from 'pages/ArticleView'
import AppHeader from 'components/layout/AppHeader'
import AppFooter from 'components/layout/AppFooter'
import AboutMe from 'pages/AboutMe'
import MessageBoard from 'pages/MessageBoard'
import Essay from 'pages/Essay'
import BookHouse from 'pages/BookHouse'
import Test from 'components/Test'

const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Switch>
          <Route exact path='/index/:category' component={HomePage} />
          <Route exact path='/index' component={HomePage} />
          <Route path='/article/detail/:articleCode' component={AritcleView} />
          <Route exact path='/aboutme' component={AboutMe} />
          <Route exact path='/bookhouse' component={BookHouse} />
          <Route exact path='/messageboard' component={MessageBoard} />
          <Route exact path='/essay' component={Essay} />
          <Route exact path='/test' component={Test} />
          <Redirect exact path='/' to='/index' />
        </Switch>
        <AppFooter />
      </BrowserRouter>
      <div className='messgge-container'>

      </div>
    </div>
  )
}

export default App
