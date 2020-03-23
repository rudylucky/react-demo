import React from 'react'
import ReactDOM from 'react-dom'
import Notice from './Notice'

class Notification {

  private createNotification() {
    const div = document.createElement('div')
    document.body.appendChild(div)
  }

}

function popup({
  duration
}: {
  duration: number
}) {
  setTimeout(() => <Notice/>, 2000)
}

export default Notification