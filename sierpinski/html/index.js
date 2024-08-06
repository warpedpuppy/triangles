(function () {
  this.canvas = document.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = this.canvasWidth = window.innerWidth;
  this.canvas.height = this.canvasHeight = window.innerHeight;
  this.halfWidth = window.innerWidth / 2;
  this.halfHeight = window.innerHeight / 2;

  class newTriangle {
    constructor(top, height) {
      const { x, y } = top;
      this.top = top
      this.height = height;
      this.pt1 = { x, y }
      this.pt2 = { x: top.x - 10, y: this.startY + this.height };
      this.pt3 = { x: top.x + 10, y: this.startY + this.height };
      this.totalGrowth = 0;
    }
    draw(top) {

      ctx.beginPath();
      ctx.moveTo(top.x, top.y);

      this.pt2 = { x: top.x - this.totalGrowth, y: top.y + this.height }
      this.pt3 = { x: top.x + this.totalGrowth, y: top.y + this.height }

      let length = top.x - this.pt2.x + 1;
      if (!length) length = 1;
      let angle = Math.atan2(length, this.height); // for half of the top angle
      let deg = angle * 180 / Math.PI;

      this.totalGrowth = (deg < 30) ? this.totalGrowth + 1 : this.totalGrowth;


      this.deg = deg;
      if (deg >= 30) this.done = true;

      ctx.lineTo(this.pt2.x, this.pt2.y);
      ctx.lineTo(this.pt3.x, this.pt3.y);
      ctx.fill();

    }
  }
  this.ctx.save();
  class Unit {
    constructor(startPoint, flip) {
      this.flip = flip;

      this.startPoint = startPoint
      this.triangles = [];
      this.triangles.push(new newTriangle({ x: 200, y: 50 }, 100));
      this.triangles.push(new newTriangle({ x: 200, y: 50 }, 100));
      this.triangles.push(new newTriangle({ x: 200, y: 50 }, 100));
      this.done = false;
      this.counter = 0;
      if (this.flip === -1) {
        ctx.translate(600, 200);
        ctx.rotate((Math.PI / 180) * 180);
        ctx.translate(-600, -200);
      }
    }
    draw() {

      for (let i = 0; i < this.triangles.length; i++) {
        let triangle = this.triangles[i];
        let newPoint = i === 0 ? this.startPoint : i === 1 ? this.triangles[0].pt3 : this.triangles[0].pt2;
        triangle.draw(newPoint);
        if (triangle.done) this.counter++;
        if (this.counter === 3) { this.done = true }
      }
    }
  }

  class Units {
    constructor() {
      this.flip = 1;
      this.units = [new Unit({ x: 600, y: 100 }, this.flip)];

    }
    addNew() {
      this.units = [...this.units, new Unit({ x: 600, y: 50 }, this.flip)];
    }
    draw = () => {

      this.units.forEach(unit => {

        unit.draw();
        // if (unit.done && this.flip === 1) {
        //   this.flip *= -1;
        //   this.addNew();
        // }
        if (unit.done === false) {
          setTimeout(this.draw, 30)
        }
      })



    }
  }


  let units = new Units();
  units.draw();

  animate();
  function animate() {
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    ctx.beginPath();
    units.draw();
    ctx.fill();
    requestAnimationFrame(animate);
  }

})()