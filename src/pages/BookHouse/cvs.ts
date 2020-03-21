import { Application, Graphics } from 'pixi.js'

export function draw(app: Application) {
  app.renderer.backgroundColor = 0xeeeeee

  for (let i = 0; i < 13; i++) {
    setTimeout(() => {
      const rect = new Graphics()
      rect.beginFill(0x66ccff)
      rect.lineStyle(1, 0xFF3300, 1)
      rect.drawCircle(0, 0, 30)
      rect.endFill()
      rect.position.set(30 * (1 + i) + 30 * i, 30)
      app.stage.addChild(rect)

      let direct = Math.round(Math.random() * 10) + 3

      app.ticker.add(() => {
        const position = outWall(rect, 30)
        if (position.y !== 0) {
          direct = -direct
        }
        rect.y += direct
      })
    }, Math.random() * 10 * 1000)
  }
}

function testPart(v: number, limit: number, r: number): 0 | -1 | 1 {
  if (v - r < 0) {
    return -1
  }
  if (v + r > limit) {
    return 1
  }
  return 0
}

function outWall(o: Graphics, x: number, y: number = x) {
  return {
    x: testPart(o.x, 800, x),
    y: testPart(o.y, 600, y)
  }
}