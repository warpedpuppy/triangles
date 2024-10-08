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





  // ctx.translate(point2.x, point2.y);
  // ctx.rotate(-30 * (Math.PI / 180));
  // ctx.translate(-point2.x, -point2.y);



  // this.ctx.resetTransform();
  // ctx.translate(point1.x, point1.y);
  // ctx.rotate(30 * (Math.PI / 180));
  // ctx.translate(-point1.x, -point1.y);
  let [point1, point2, point3, point4, point5, point6] = getSixty(300, { x: halfWidth, y: halfHeight }, 1);
  getSixty(350, point1, 2);
  getSixty(350, point2, 3);
  getSixty(350, point3, 2);
  getSixty(350, point4, 3);
  getSixty(350, point5, 3);
  getSixty(350, point6, 3);

  ctx.translate(this.halfWidth, this.halfHeight);
  ctx.rotate(90 * (Math.PI / 180));
  ctx.translate(-this.halfWidth, -this.halfHeight);

  [point1, point2, point3, point4, point5, point6] = getSixty(300, { x: halfWidth, y: halfHeight }, 1);
  getSixty(350, point1, 2);
  getSixty(350, point2, 3);
  getSixty(350, point3, 2);
  getSixty(350, point4, 3);
  getSixty(350, point5, 3);
  getSixty(350, point6, 3);

  ctx.translate(this.halfWidth, this.halfHeight);
  ctx.rotate(90 * (Math.PI / 180));
  ctx.translate(-this.halfWidth, -this.halfHeight);

  [point1, point2, point3, point4, point5, point6] = getSixty(300, { x: halfWidth, y: halfHeight }, 1);
  getSixty(350, point1, 2);
  getSixty(350, point2, 3);
  getSixty(350, point3, 2);
  getSixty(350, point4, 3);
  getSixty(350, point5, 3);
  getSixty(350, point6, 3);


  ctx.translate(this.halfWidth, this.halfHeight);
  ctx.rotate(90 * (Math.PI / 180));
  ctx.translate(-this.halfWidth, -this.halfHeight);

  [point1, point2, point3, point4, point5, point6] = getSixty(300, { x: halfWidth, y: halfHeight }, 1);
  getSixty(350, point1, 2);
  getSixty(350, point2, 3);
  getSixty(350, point3, 2);
  getSixty(350, point4, 3);
  getSixty(350, point5, 3);
  getSixty(350, point6, 3);


  // this.ctx.resetTransform();
  // const point2D = new DOMPointReadOnly(point3.x, point3.y)
  // this.ctx.beginPath();
  // this.ctx.arc(point2D.x, point2D.y, 5, 0, 2 * Math.PI);
  // this.ctx.stroke();
  // this.ctx.resetTransform();

  // ctx.translate(point2D.x, point2D.y);
  // this.ctx.arc(point2D.x, point2D.y, 2, 0, 2 * Math.PI);
  // ctx.rotate(10 * (Math.PI / 180));
  // ctx.translate(-point3.x, -point3.y);
  // getSixty(25, point3);

  // this.ctx.resetTransform();
  // ctx.translate(point4.x, point4.y);
  // ctx.rotate(-30 * (Math.PI / 180));
  // ctx.translate(-point4.x, -point4.y);
  // getSixty(25, point4);





  // ctx.translate(point5.x, point5.y);
  // ctx.rotate(30 * (Math.PI / 180));
  // ctx.translate(-point5.x, -point5.y);
  // getSixty(25, point5);

  // this.ctx.resetTransform();
  // ctx.translate(point6.x, point6.y);
  // ctx.rotate(-30 * (Math.PI / 180));
  // ctx.translate(-point6.x, -point6.y);
  // getSixty(25, point6);








  function getSixty(radius, centerPoint, iteration) {

    let newX = ((1 / 2) * radius)
    let finalY = ((Math.sqrt(3) / 2) * radius)

    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    // this.ctx.moveTo(centerPoint.x, centerPoint.y);
    let topPoint = { x: centerPoint.x + newX, y: centerPoint.y - finalY }
    this.ctx.moveTo(topPoint.x, topPoint.y)
    this.ctx.lineTo(centerPoint.x, centerPoint.y);
    this.ctx.stroke();


    this.ctx.beginPath();
    // this.ctx.moveTo(centerPoint.x, centerPoint.y);
    let topPoint2 = { x: centerPoint.x - newX, y: centerPoint.y - finalY }
    this.ctx.moveTo(topPoint2.x, topPoint2.y)
    this.ctx.lineTo(centerPoint.x, centerPoint.y);
    this.ctx.stroke();

    let newX2 = (Math.sqrt(3) / 2) * radius;
    let finalY2 = (1 / 2) * radius;

    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(centerPoint.x, centerPoint.y);
    let topPoint3 = { x: centerPoint.x + newX2, y: centerPoint.y }
    this.ctx.lineTo(centerPoint.x + newX2, centerPoint.y)
    let topPoint4 = { x: centerPoint.x + newX2, y: centerPoint.y - finalY2 }
    this.ctx.moveTo(centerPoint.x + newX2, centerPoint.y - finalY2)
    this.ctx.lineTo(centerPoint.x, centerPoint.y);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(centerPoint.x, centerPoint.y);
    let topPoint5 = { x: centerPoint.x - newX2, y: centerPoint.y }
    this.ctx.lineTo(centerPoint.x - newX2, centerPoint.y)
    let topPoint6 = { x: centerPoint.x - newX2, y: centerPoint.y - finalY2 }
    this.ctx.moveTo(centerPoint.x - newX2, centerPoint.y - finalY2)
    this.ctx.lineTo(centerPoint.x, centerPoint.y);
    this.ctx.stroke();


    return [
      topPoint,
      topPoint2,
      topPoint3,
      topPoint4,
      topPoint5,
      topPoint6
    ]

  }

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