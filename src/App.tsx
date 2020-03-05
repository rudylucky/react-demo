import HomePage from 'pages/HomePage'
import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import './App.css'
import AritcleView from 'pages/ArticleView'
import AppHeader from 'components/layout/AppHeader'

const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Redirect path='/' to='/index' />
        <Route exact path={'/index'} ><HomePage/></Route>
        <Route exact path={'/article/:code'} ><AritcleView/></Route>
      </BrowserRouter>
    </div>
  )
}

export default App
