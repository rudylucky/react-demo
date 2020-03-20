import React, { useRef, useEffect } from 'react'
import style from './index.module.scss'
import { draw } from './cvs'

const BookHouse = () => {

  const cvsRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = cvsRef.current?.getContext('2d')
    if (ctx) {
      draw(ctx)
    }
  })


  return <div className={style.bookhouse}>
    <canvas ref={cvsRef} height='500px' width='500px' className={style.canvas}>
    </canvas>
  </div>
}

export default BookHouse