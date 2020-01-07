import React from 'react'

interface AppHomePage {
  children?: any
}

const HomePage = (props: AppHomePage) => {
  return (
    <button>{props.children}</button>
  )
}

export default HomePage