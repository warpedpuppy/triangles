(function () {
  this.canvas = document.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = this.canvasWidth = window.innerWidth;
  this.canvas.height = this.canvasHeight = window.innerHeight;
  let halfWidth = this.halfWidth = window.innerWidth / 2;
  let halfHeight = this.halfHeight = window.innerHeight / 2;
  let dotWidth = 5;

  this.ctx.beginPath();
  this.ctx.arc(halfWidth, halfHeight, 200, 0, 2 * Math.PI);
  this.ctx.moveTo(0, halfHeight)
  this.ctx.lineTo(this.canvasWidth, halfHeight)
  this.ctx.moveTo(halfWidth, 0)
  this.ctx.lineTo(halfWidth, this.canvasHeight)
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.arc(halfWidth, halfHeight, dotWidth, 0, 2 * Math.PI);
  this.ctx.stroke();

  let length = 200;
  let newX = length / 2;
  let finalY = (Math.sqrt(3) / 2) * length

  this.ctx.beginPath();
  this.ctx.arc(halfWidth + newX, halfHeight, dotWidth, 0, 2 * Math.PI);
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.arc(halfWidth + newX, halfHeight - finalY, dotWidth, 0, 2 * Math.PI);
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.arc(halfWidth - newX, halfHeight, dotWidth, 0, 2 * Math.PI);
  this.ctx.stroke();

  this.ctx.beginPath();
  this.ctx.arc(halfWidth - newX, halfHeight - finalY, dotWidth, 0, 2 * Math.PI);
  this.ctx.stroke();


})()

function getTriangle(radius, centerPoint) {
  let point1 = { x: radius * Math.cos(0) + centerPoint.x, y: radius * Math.sin(0) + centerPoint.y }
  let point2 = { x: radius * Math.cos((1 / 3) * (2 * Math.PI)) + centerPoint.x, y: radius * Math.sin((1 / 3) * (2 * Math.PI)) + centerPoint.y }
  let point3 = { x: radius * Math.cos((2 / 3) * (2 * Math.PI)) + centerPoint.x, y: radius * Math.sin((2 / 3) * (2 * Math.PI)) + centerPoint.y }
  return { point1, point2, point3 }
}