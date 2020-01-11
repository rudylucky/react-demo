import React from 'react'
import './App.css'
import BaseLayout from 'components/layout/BaseLayout'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </div>
  )
}

export default App
