(async function () {
  // Create a new application
  const app = new PIXI.Application();
  // Initialize the application
  await app.init({ antialias: true, resizeTo: window });
  // Append the application canvas to the document body
  document.body.appendChild(app.canvas);
  this.canvas.width = this.canvasWidth = window.innerWidth;
  this.canvas.height = this.canvasHeight = window.innerHeight;
  let halfWidth = window.innerWidth / 2;
  let halfHeight = window.innerHeight / 2;
  let height = 50;

  let cont = new PIXI.Container();
  cont.x = halfWidth;
  cont.y = halfHeight
  app.stage.addChild(cont)

  function TrianglePoints(radius, centerPoint) {
    let startPoint = { x: radius * Math.cos(0) + centerPoint.x, y: radius * Math.sin(0) + centerPoint.y }
    let secondPoint = { x: radius * Math.cos((1 / 3) * (2 * Math.PI)) + centerPoint.x, y: radius * Math.sin((1 / 3) * (2 * Math.PI)) + centerPoint.y }
    let thirdPoint = { x: radius * Math.cos((2 / 3) * (2 * Math.PI)) + centerPoint.x, y: radius * Math.sin((2 / 3) * (2 * Math.PI)) + centerPoint.y }

    return { startPoint, secondPoint, thirdPoint }
  }

  class Triangle {
    constructor() {
      this.graphics = new PIXI.Graphics();
      const { startPoint, secondPoint, thirdPoint } = TrianglePoints(100, { x: 0, y: 0 })
      this.startPoint = startPoint;
      this.secondPoint = secondPoint;
      this.thirdPoint = thirdPoint
      let circle = this.graphics.circle(startPoint.x, startPoint.y, 2);
      let circle1 = this.graphics.circle(secondPoint.x, secondPoint.y, 2);
      let circle3 = this.graphics.circle(thirdPoint.x, thirdPoint.y, 2)
      this.graphics.fill(0xFFFFFF, 1);

      this.graphics.pivot = { x: 0, y: 0 }
      let halfTopAngle = (Math.atan2(2, 3) * 180) / Math.PI
      this.ratio = 0;
      cont.addChild(this.graphics)
    }
    drawLine(x1, y1, x2, y2, ratio) {
      // console.log(x1, y1, x2, y2)
      this.g2 = new PIXI.Graphics();
      this.g2.moveTo(x1, y1);
      x2 = x1 + ratio * (x2 - x1);
      y2 = y1 + ratio * (y2 - y1);
      this.g2.lineTo(x2, y2);
      this.g2.stroke({ width: 1, color: 0xffd900 });
      cont.addChild(this.g2)
      // ctx.stroke();
      // And if we intend to start new things after
      // this, and this is part of an outline, 
      // we probably also want a ctx.closePath()
    }
    draw = () => {

      if (this.ratio < 1) {
        this.ratio += 0.01
      }
      this.drawLine(this.startPoint.x, this.startPoint.y, this.secondPoint.x, this.secondPoint.y, this.ratio, this.graphics)
      this.drawLine(this.secondPoint.x, this.secondPoint.y, this.thirdPoint.x, this.thirdPoint.y, this.ratio, this.graphics)
      this.drawLine(this.thirdPoint.x, this.thirdPoint.y, this.startPoint.x, this.startPoint.y, this.ratio, this.graphics)
      if (this.ratio < 1) {
        this.ratio += 0.01
      }
    }
  }
  function animate(ratio) {
    ratio = ratio || 0;
    drawLine(0, 0, 300, 300, ratio);
    if (ratio < 1) {
      requestAnimationFrame(function () {
        animate(ratio + 0.01);
      });
    }
  }
  function drawLine(x1, y1, x2, y2, ratio, graphics) {
    graphics.moveTo(x1, y1);
    x2 = x1 + ratio * (x2 - x1);
    y2 = y1 + ratio * (y2 - y1);
    graphics.lineTo(x2, y2);
    // ctx.stroke();
    // And if we intend to start new things after
    // this, and this is part of an outline, 
    // we probably also want a ctx.closePath()
  }

  let t = new Triangle();



  app.ticker.add((time) => {
    cont.rotation += 0.01;
    t.draw();
  });



})()