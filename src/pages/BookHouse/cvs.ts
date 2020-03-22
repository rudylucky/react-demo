import { Application, Graphics } from 'pixi.js'

let v = 0

export function draw(app: Application) {
  app.renderer.backgroundColor = 0xeeeeee

  for (let i = 1; i <= 1; i++) {
    setTimeout(() => {
      const rect = new Graphics()
      rect.beginFill(0x66ccff)
      rect.lineStyle(1, 0xFF3300, 1)
      rect.drawCircle(0, 0, 30)
      rect.endFill()
      rect.position.set(60 * i, 30)
      app.stage.addChild(rect)


      app.ticker.add(() => {
        move(rect, v)
      })
    }, 1000)
  }
}

function move(obj: Graphics, v0: number) {
  const g = 9.8
  let vt = v0 + g / 60
  let delta = (vt * vt - v0 * v0) * 10
  if (obj.y + delta > 570) {
    vt = -vt * 0.6
    delta = -delta
  }
  if (Math.abs(v) < 1 && obj.y > 568) {
    vt = v0 = 0
    delta = 0
    obj.y = 570
  }
  obj.y += delta
  v = vt
}
