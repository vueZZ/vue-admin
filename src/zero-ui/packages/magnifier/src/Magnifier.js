export default class Magnifier {
  constructor (img, cover, scale, bigPic) { // img:图片dom, cover: 放大镜dom
    this.img = img
    this.cover = cover
    this.scale = scale
    this.bigSrc = bigPic
    this.scaleCanvas = 2
    this.initCanvas()
  }
  handle (event) { // 添加边界，校正放大镜的偏移
    if (this.cover.style.display === 'block') {
      let { x, y } = this.getXY(event)
      let { left, top } = this.getOffset(this.img)
      this.range = { // 定义边界
        minX: left,
        maxX: left + this.img.offsetWidth - this.cover.offsetWidth,
        minY: top - document.documentElement.scrollTop,
        maxY: top - document.documentElement.scrollTop + this.img.offsetHeight - this.cover.offsetHeight
      }
      x = x < this.range.minX ? this.range.minX : x
      x = x > this.range.maxX ? this.range.maxX : x
      y = y < this.range.minY ? this.range.minY : y
      y = y > this.range.maxY ? this.range.maxY : y
      this.cover.style.left = x + 'px'
      this.cover.style.top = y + 'px'
      this.drawCavans(x, y)
    } else {
      return false
    }
  }
  show () { // 展示
    this.cover.style.display = 'block'
    this.ctx.canvas.style.display = 'block'
  }
  hide () { // 隐藏
    this.cover.style.display = 'none'
    this.ctx.canvas.style.display = 'none'
  }
  drawCavans (x, y) { // 根据参数绘制放大图片
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    let { left, top } = this.getOffset(this.img)
    let startX = x - left + document.documentElement.scrollLeft
    let startY = y - top + document.documentElement.scrollTop
    this.ctx.drawImage(this.trueImg, startX * this.scaleX, startY * this.scaleY, this.trueImg.width * this.scaleW, this.trueImg.height * this.scaleH, 0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }
  initCanvas () { // 生成放大canvas
    this.canvas = document.createElement('canvas')
    this.canvas.className = 'z-magnifier-canvas'
    this.canvas.width = this.img.offsetWidth * this.scaleCanvas
    this.canvas.height = this.img.offsetHeight * this.scaleCanvas
    this.canvas.style.display = 'none'
    this.canvas.style.left = this.img.offsetLeft + this.img.offsetWidth + 20 + 'px'
    this.canvas.style.top = this.img.offsetTop + 'px'
    this.canvas.style.position = 'absolute'
    this.canvas.style.zIndex = 9999
    this.canvas.style.border = '1px solid #000'
    this.canvas.style.top = this.img.offsetTop + 'px'
    document.body.append(this.canvas)
    this.ctx = this.canvas.getContext('2d')
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.generateImg()
  }
  generateImg () { // 生成放大图片
    let src = this.bigSrc || this.img.src
    this.trueImg = new Image()
    this.trueImg.src = src
    this.trueImg.onload = () => {
      this.scaleX = this.trueImg.width / this.img.offsetWidth
      this.scaleY = this.trueImg.height / this.img.offsetHeight
      this.scaleW = (this.img.offsetWidth / this.scale) / this.img.offsetWidth
      this.scaleH = (this.img.offsetHeight / this.scale) / this.img.offsetHeight
    }
  }
  getXY (event) { // 获取放大镜当前偏移
    return {
      x: event.clientX - (this.cover.offsetWidth / 2),
      y: event.clientY - (this.cover.offsetHeight / 2)
    }
  }
  getOffset () { // 获取图片相对于浏览器的偏移
    let left = this.img.offsetLeft
    let top = this.img.offsetTop
    let parent = this.img.offsetParent
    while (parent) {
      left = left + parent.clientLeft
      top = top + parent.clientTop
      parent = parent.offsetParent
    }
    return {
      left, top
    }
  }
}
