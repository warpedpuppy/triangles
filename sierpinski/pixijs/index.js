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
  let startPoints = []

  class newTriangle {
    constructor(top, height, container) {
      const { x, y } = top;
      this.top = top
      this.height = height;
      this.pt1 = { x, y }
      this.pt2 = { x: top.x - 10, y: this.startY + this.height };
      this.pt3 = { x: top.x + 10, y: this.startY + this.height };
      this.totalGrowth = 10;
      this.graphics = new PIXI.Graphics();
      container.addChild(this.graphics);
    }
    draw(top) {

      this.graphics.clear();
      this.graphics.moveTo(top.x, top.y);
      this.pt2 = { x: top.x - this.totalGrowth, y: top.y + this.height }
      this.pt3 = { x: top.x + this.totalGrowth, y: top.y + this.height }
      let length = top.x - this.pt2.x + 1;
      let angle = Math.atan2(length, this.height); // for half of the top angle
      let deg = angle * 180 / Math.PI;
      this.totalGrowth = (deg < 30) ? this.totalGrowth + 1 : this.totalGrowth;

      this.graphics.lineTo(this.pt2.x, this.pt2.y);
      this.graphics.lineTo(this.pt3.x, this.pt3.y);
      this.graphics.lineTo(top.x, top.y);
      this.graphics.stroke({ width: 1, color: 0xFFFFFF, miterLimit: 1 });
      this.deg = deg;
      this.top = top;
      if (deg >= 30) { this.done = true; this.graphics.cacheAsBitmap }
    }
  }

  class Unit {
    constructor(startPoint) {
      console.log(startPoint)
      this.container = new PIXI.Container();
      this.container.x = halfWidth;
      this.container.y = halfHeight - 100;
      app.stage.addChild(this.container)

      this.startPoint = startPoint;
      this.triangles = [];
      this.triangles.push(new newTriangle({ x: 0, y: 0 }, height, this.container));
      this.triangles.push(new newTriangle({ x: 0, y: 0 }, height, this.container));
      this.triangles.push(new newTriangle({ x: 0, y: 0 }, height, this.container));
      this.done = false;
      this.counter = 0;
      this.tops = [];
    }
    draw() {
      this.tops = [];
      for (let i = 0; i < this.triangles.length; i++) {
        let triangle = this.triangles[i];

        let newPoint = i === 0 ? this.startPoint : i === 1 ? this.triangles[0].pt3 : this.triangles[0].pt2;
        triangle.draw(newPoint);

        if (triangle.done) this.counter++;
        this.tops.push(newPoint)
        if (this.counter === 3) { this.done = true }
      }
    }
  }
  let failSafe = 4;
  let failSafeCounter = 0;
  class Units {
    constructor() {
      this.flip = 1;
      this.units = [new Unit({ x: 0, y: 0 })];

    }
    addNew(tops) {

      tops.forEach(top => {
        this.units.push(new Unit(top))
      })

    }
    draw = () => {

      this.units.forEach((unit, index) => {
        if (!unit.done) {
          unit.draw();
        } else {
          this.units.splice(index, 1)
        }

        if (unit.done) {

          failSafeCounter++;
          if (failSafeCounter < failSafe) this.addNew(unit.tops);
        }
      })
    }
  }


  let units = new Units();


  app.ticker.add((time) => {
    units.draw();
  });



})()