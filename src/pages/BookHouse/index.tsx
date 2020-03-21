import { Application } from 'pixi.js'
import React, { useEffect, useRef } from 'react'
import { draw } from './cvs'
import style from './index.module.scss'

const BookHouse = () => {

  const cvsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const app = new Application({
      antialias: true, // default: false
      transparent: false, // default: false
      resolution: 1 // default: 1
    })
    draw(app)
    cvsRef.current?.appendChild(app.view)
  }, [])

  return <div className={style.bookhouse}>
    <div ref={cvsRef} className={style.canvas}></div>
  </div>
}

export default BookHouse