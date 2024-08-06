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
    triangles = [];
    constructor() {
      this.firstTriangle = new PIXI.Graphics();
      const { startPoint, secondPoint, thirdPoint } = TrianglePoints(300, { x: 0, y: 0 })
      this.startPoint = startPoint;
      this.secondPoint = secondPoint;
      this.thirdPoint = thirdPoint
      this.firstTriangle.circle(startPoint.x, startPoint.y, 2);
      this.firstTriangle.circle(secondPoint.x, secondPoint.y, 2);
      this.firstTriangle.circle(thirdPoint.x, thirdPoint.y, 2)
      this.firstTriangle.fill(0xFFFFFF, 1);
      this.triangles.push({ g: this.firstTriangle, radius: 300, points: [startPoint, secondPoint, thirdPoint] })

      cont.addChild(this.firstTriangle);
      this.ratio = 0;
      this.draw(this.startPoint, this.secondPoint, this.thirdPoint);
    }
    expand = () => {
      console.log("expand");

      this.triangles.forEach(triangle => {
        triangle.g.clear();
        triangle.radius += 10;
        const { startPoint, secondPoint, thirdPoint } = TrianglePoints(triangle.radius, { x: 0, y: 0 })
        this.firstTriangle.circle(startPoint.x, startPoint.y, 2);
        this.firstTriangle.circle(secondPoint.x, secondPoint.y, 2);
        this.firstTriangle.circle(thirdPoint.x, thirdPoint.y, 2);
        this.firstTriangle.moveTo(startPoint.x, startPoint.y);
        this.firstTriangle.lineTo(secondPoint.x, secondPoint.y);
        cont.addChild(this.firstTriangle);
      })
      setTimeout(this.expand, 1000);
    }
    drawLine(x1, y1, x2, y2, ratio) {

      this.g2 = new PIXI.Graphics();
      this.g2.moveTo(x1, y1);
      x2 = x1 + ratio * (x2 - x1);
      y2 = y1 + ratio * (y2 - y1);
      this.g2.lineTo(x2, y2);
      this.g2.stroke({ width: 1, color: 0xffd900 });
      cont.addChild(this.g2)
    }
    draw = (point1, point2, point3) => {

      this.drawLine(point1.x, point1.y, point2.x, point2.y, this.ratio, this.graphics)
      this.drawLine(point2.x, point2.y, point3.x, point3.y, this.ratio, this.graphics)
      this.drawLine(point3.x, point3.y, point1.x, point1.y, this.ratio, this.graphics)
      if (this.ratio < 1) {
        this.ratio += 0.01;
        setTimeout(() => this.draw(point1, point2, point3), 20);
      } else {
        this.newPoints(point1, point2, point3);
      }
    }
    newPoints(point1, point2, point3) {
      let newPoint1 = {
        x: (point1.x + point2.x) / 2,
        y: (point1.y + point2.y) / 2
      }
      let newPoint2 = {
        x: (point2.x + point3.x) / 2,
        y: (point2.y + point3.y) / 2
      }
      let newPoint3 = {
        x: (point1.x + point3.x) / 2,
        y: (point1.y + point3.y) / 2
      }
      let newPointGraphics = new PIXI.Graphics();
      newPointGraphics.circle(newPoint1.x, newPoint1.y, 2);
      newPointGraphics.circle(newPoint2.x, newPoint2.y, 2);
      newPointGraphics.circle(newPoint3.x, newPoint3.y, 2);
      newPointGraphics.fill(0xFFFFFF, 1);
      cont.addChild(newPointGraphics);
      this.ratio = 0;
      // this.expand();
      this.draw(newPoint1, newPoint2, newPoint3)
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

    // t.draw();
  });



})()