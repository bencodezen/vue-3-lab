export const useDrawCanvas = domSelector => {
  const draw = () => {
    var canvas = document.querySelector(domSelector)

    if (canvas.getContext) {
      var ctx = canvas.getContext('2d')

      ctx.beginPath()
      ctx.moveTo(75, 50)
      ctx.lineTo(100, 75)
      ctx.lineTo(100, 25)
      ctx.fill()
    }
  }

  return {
    draw
  }
}
