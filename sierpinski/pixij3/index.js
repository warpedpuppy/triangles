(async function () {

  const app = new PIXI.Application();
  await app.init({ antialias: true, resizeTo: window });
  document.getElementById("canvas").appendChild(app.canvas);
  this.canvas.width = this.canvasWidth = window.innerWidth;
  this.canvas.height = this.canvasHeight = window.innerHeight;
  let halfWidth = window.innerWidth / 2;
  let halfHeight = window.innerHeight / 2;

  let cont = new PIXI.Container();
  cont.x = halfWidth;
  cont.y = halfHeight
  app.stage.addChild(cont)

  window.addEventListener("resize", resizeHandler);
  function resizeHandler() {
    this.canvas.width = this.canvasWidth = window.innerWidth;
    this.canvas.height = this.canvasHeight = window.innerHeight;
    let halfWidth = window.innerWidth / 2;
    let halfHeight = window.innerHeight / 2;
    cont.x = halfWidth;
    cont.y = halfHeight
  }

  class Triangle {
    triangles = [];
    firstTriangle = new PIXI.Graphics();
    expandQ = 1.1;
    expandIncrease = 1.006;
    ratioIncrease = 0.01;
    startRadius = window.innerHeight / 4;
    constructor(expand) {
      this.makeLinesArrayProperty(this.firstTriangle)
      cont.addChild(this.firstTriangle);
      this.firstTriangle.ratio = 0;
      this.firstTriangle.hasNewPoints = false;
      this.newPointsArray = [];
      this.newLinesArray = [];
      this.drawLineBoolean = false;
    }
    makeLinesArrayProperty(graphic) {
      let line1 = new PIXI.Graphics();
      let line2 = new PIXI.Graphics();
      let line3 = new PIXI.Graphics();
      cont.addChild(line1);
      cont.addChild(line2);
      cont.addChild(line3);
      graphic.lines = [line1, line2, line3]
    }
    drawTriangle() {

      this.startRadius *= this.expandIncrease;
      this.firstTriangle.clear();
      const { startPoint, secondPoint, thirdPoint } = this.trianglePoints(this.startRadius, { x: 0, y: 0 })
      this.startPoint = startPoint;
      this.secondPoint = secondPoint;
      this.thirdPoint = thirdPoint
      this.firstTriangle.circle(startPoint.x, startPoint.y, 2);
      this.firstTriangle.circle(secondPoint.x, secondPoint.y, 2);
      this.firstTriangle.circle(thirdPoint.x, thirdPoint.y, 2)
      this.firstTriangle.fill(0xFFFFFF, 1);


      this.draw(this.startPoint, this.secondPoint, this.thirdPoint, this.firstTriangle);
      let points = [this.startPoint, this.secondPoint, this.thirdPoint]
      this.newPointsArray.forEach(item => {
        let temp = this.newPoints(...points, item.graphic)
        points = temp;
      })
    }
    drawLine(x1, y1, x2, y2, ratio, graphics) {
      graphics.clear();
      graphics.moveTo(x1, y1);
      x2 = x1 + ratio * (x2 - x1);
      y2 = y1 + ratio * (y2 - y1);
      graphics.lineTo(x2, y2);
      graphics.stroke({ width: 1, color: 0xffd900 });
    }
    draw = (point1, point2, point3, graphic) => {
      this.drawLine(point1.x, point1.y, point2.x, point2.y, graphic.ratio, graphic.lines[0])
      this.drawLine(point2.x, point2.y, point3.x, point3.y, graphic.ratio, graphic.lines[1])
      this.drawLine(point3.x, point3.y, point1.x, point1.y, graphic.ratio, graphic.lines[2])
      if (graphic.ratio < 1) {
        graphic.ratio += this.ratioIncrease;
      } else if (!graphic.hasNewPoints) {
        console.log("make new graphic")
        graphic.hasNewPoints = true;
        let temp = new PIXI.Graphics();
        this.makeLinesArrayProperty(temp)
        temp.ratio = 0;
        temp.hasNewPoints = false;
        this.newPointsArray.push({ graphic: temp, origPoints: [point1, point2, point3] });
        cont.addChild(temp);
      }
    }
    newPoints(point1, point2, point3, graphic) {
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
      graphic.clear();
      graphic.circle(newPoint1.x, newPoint1.y, 2);
      graphic.circle(newPoint2.x, newPoint2.y, 2);
      graphic.circle(newPoint3.x, newPoint3.y, 2);
      graphic.fill(0xFFFFFF, 1);
      this.draw(newPoint1, newPoint2, newPoint3, graphic)
      return [newPoint1, newPoint2, newPoint3]
    }
    trianglePoints(radius, centerPoint) {
      let startPoint = { x: radius * Math.cos(0) + centerPoint.x, y: radius * Math.sin(0) + centerPoint.y }
      let secondPoint = { x: radius * Math.cos((1 / 3) * (2 * Math.PI)) + centerPoint.x, y: radius * Math.sin((1 / 3) * (2 * Math.PI)) + centerPoint.y }
      let thirdPoint = { x: radius * Math.cos((2 / 3) * (2 * Math.PI)) + centerPoint.x, y: radius * Math.sin((2 / 3) * (2 * Math.PI)) + centerPoint.y }
      return { startPoint, secondPoint, thirdPoint }
    }
  }

  let t = new Triangle();

  app.ticker.add((time) => {
    cont.rotation += 0.01;
    t.drawTriangle()
  });

})()