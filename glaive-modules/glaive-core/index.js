module.exports = (function() {
    console.log('test')

    const canvas = document.querySelector('#game')
    const ctx = canvas.getContext('2d')

    // 16:9
    ctx.canvas.width = 640
    ctx.canvas.height = 360

    // 16:10
    // ctx.canvas.width = 640;
    // ctx.canvas.height = 400;

    let greenBox = new Image()

    greenBox.src = '/assets/green-box.png'

    greenBox.onload = () => {
        ctx.drawImage(greenBox, 100, 100)
    }

    ctx.beginPath()
    ctx.moveTo(115, 115)
    ctx.lineTo(150, 150)

    ctx.stroke()

    let addCanvas = () => {
        document.body.appendChild(canvas)
    }

    return {
        addCanvas
    }
}())
