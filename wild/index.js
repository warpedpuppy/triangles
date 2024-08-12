(function () {
  this.canvas = document.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = this.canvasWidth = window.innerWidth;
  this.canvas.height = this.canvasHeight = window.innerHeight;
  let halfWidth = this.halfWidth = window.innerWidth / 2;
  let halfHeight = this.halfHeight = window.innerHeight / 2;
  let dotWidth = 5;
  this.ctx.lineCap = "round";

  // this.ctx.beginPath();
  // this.ctx.arc(halfWidth, halfHeight, 200, 0, 2 * Math.PI);
  // this.ctx.moveTo(0, halfHeight)
  // this.ctx.lineTo(this.canvasWidth, halfHeight)
  // this.ctx.moveTo(halfWidth, 0)
  // this.ctx.lineTo(halfWidth, this.canvasHeight)
  // this.ctx.stroke();

  function start() {
    let length = 200;
    this.ctx.beginPath();
    this.ctx.moveTo(halfWidth, halfHeight);
    this.ctx.lineTo(halfWidth + length, halfHeight)
    this.ctx.arc(halfWidth + length, halfHeight, 100, 0, 2 * Math.PI);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(halfWidth, halfHeight);
    this.ctx.lineTo(halfWidth - length, halfHeight);
    this.ctx.arc(halfWidth - length, halfHeight, 100, 0, 2 * Math.PI);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(halfWidth, halfHeight);
    this.ctx.lineTo(halfWidth, halfHeight + length);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(halfWidth, halfHeight + length, 100, 0, 2 * Math.PI);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(halfWidth, halfHeight);
    this.ctx.lineTo(halfWidth, halfHeight - length);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.arc(halfWidth, halfHeight - length, 100, 0, 2 * Math.PI);
    this.ctx.stroke();
  }

  this.ctx.beginPath();
  this.ctx.arc(halfWidth, halfHeight, 200, 0, 2 * Math.PI);
  this.ctx.moveTo(0, halfHeight)
  this.ctx.lineTo(this.canvasWidth, halfHeight)
  this.ctx.moveTo(halfWidth, 0)
  this.ctx.lineTo(halfWidth, this.canvasHeight)
  this.ctx.stroke();

  getSixty(200, { x: halfWidth, y: halfHeight });



  function getSixty(radius, centerPoint) {
    let newX = (1 / 2) * radius;
    let finalY = (Math.sqrt(3) / 2) * radius;

    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(centerPoint.x, centerPoint.y);
    this.ctx.lineTo(centerPoint.x + newX, centerPoint.y)
    this.ctx.lineTo(centerPoint.x + newX, centerPoint.y - finalY)
    this.ctx.lineTo(centerPoint.x, centerPoint.y);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(centerPoint.x, centerPoint.y);
    this.ctx.lineTo(centerPoint.x - newX, centerPoint.y)
    this.ctx.lineTo(centerPoint.x - newX, centerPoint.y - finalY)
    this.ctx.lineTo(centerPoint.x, centerPoint.y);
    this.ctx.stroke();

    return { x: centerPoint.x + newX, y: centerPoint.y - finalY }

  }
  getThirty();
  function getThirty() {
    let radius = 200;
    let newX = (Math.sqrt(3) / 2) * radius;
    let finalY = (1 / 2) * radius;

    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(halfWidth, halfHeight);
    this.ctx.lineTo(halfWidth + newX, halfHeight)
    this.ctx.lineTo(halfWidth + newX, halfHeight - finalY)
    this.ctx.lineTo(halfWidth, halfHeight);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(halfWidth, halfHeight);
    this.ctx.lineTo(halfWidth - newX, halfHeight)
    this.ctx.lineTo(halfWidth - newX, halfHeight - finalY)
    this.ctx.lineTo(halfWidth, halfHeight);
    this.ctx.stroke();
  }
  thirtyWithSinAndCos()
  function thirtyWithSinAndCos() {
    let radius = 200;
    let newX = (Math.cos(60) * (180 / Math.pi)) * radius;
    let finalY = (Math.sin(60) * (180 / Math.pi)) * radius;
    console.log("thirty:", Math.sin(30), Math.cos(30))
    console.log("sixty:", Math.sin(60), Math.cos(60))
    console.log(Math.cos(30), (Math.sqrt(3) / 2) * (Math.PI / 180))
    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(halfWidth, halfHeight);
    this.ctx.lineTo(halfWidth + newX, halfHeight)
    this.ctx.lineTo(halfWidth + newX, halfHeight + finalY)
    this.ctx.lineTo(halfWidth, halfHeight);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(halfWidth, halfHeight);
    this.ctx.lineTo(halfWidth - newX, halfHeight)
    this.ctx.lineTo(halfWidth - newX, halfHeight + finalY)
    this.ctx.lineTo(halfWidth, halfHeight);
    this.ctx.stroke();
  }
  sixtyWithSinAndCos()
  function sixtyWithSinAndCos() {
    let radius = 200;
    let newX = (Math.sin(60) * (180 / Math.pi)) * radius;
    let finalY = (Math.cos(60) * (180 / Math.pi)) * radius;

    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = "round";
    this.ctx.beginPath();
    this.ctx.moveTo(halfWidth, halfHeight);
    this.ctx.lineTo(halfWidth + newX, halfHeight)
    this.ctx.lineTo(halfWidth + newX, halfHeight + finalY)
    this.ctx.lineTo(halfWidth, halfHeight);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(halfWidth, halfHeight);
    this.ctx.lineTo(halfWidth - newX, halfHeight)
    this.ctx.lineTo(halfWidth - newX, halfHeight + finalY)
    this.ctx.lineTo(halfWidth, halfHeight);
    this.ctx.stroke();

  }


})()

function getTriangle(radius, centerPoint) {
  let point1 = { x: radius * Math.cos(0) + centerPoint.x, y: radius * Math.sin(0) + centerPoint.y }
  let point2 = { x: radius * Math.cos((1 / 3) * (2 * Math.PI)) + centerPoint.x, y: radius * Math.sin((1 / 3) * (2 * Math.PI)) + centerPoint.y }
  let point3 = { x: radius * Math.cos((2 / 3) * (2 * Math.PI)) + centerPoint.x, y: radius * Math.sin((2 / 3) * (2 * Math.PI)) + centerPoint.y }
  return { point1, point2, point3 }
}