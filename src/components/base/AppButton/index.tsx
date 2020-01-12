import React from 'react'

interface IButtonProps {
  children: any
}

const AppButton = (props: IButtonProps) => {
  return (
    <button>{props.children}</button>
  )
}

export default AppButton