import React from 'react'

interface AppButtonProps {
  children: any
}

const AppButton = (props: AppButtonProps) => {
  return (
    <button>{props.children}</button>
  )
}

export default AppButton