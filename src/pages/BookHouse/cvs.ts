export function draw(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = 'orange'
  ctx.beginPath()
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true)
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true)
  ctx.fill('evenodd')
}