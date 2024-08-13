(function () {
  this.canvas = document.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = this.canvasWidth = window.innerWidth;
  this.canvas.height = this.canvasHeight = window.innerHeight;
  let halfWidth = this.halfWidth = window.innerWidth / 2;
  let halfHeight = this.halfHeight = window.innerHeight / 2;






  class Star {
    constructor(radius, centerPoint, ratio, ctx, children = 0) {
      this.radius = radius;
      this.centerPoint = centerPoint;
      this.ratio = ratio;
      this.ctx = ctx;
      this.children = children;

      // for the 60 degs
      this.newX = ((1 / 2) * radius);
      this.finalY = ((Math.sqrt(3) / 2) * radius);

      //for the 30 degs
      this.newX2 = (Math.sqrt(3) / 2) * radius;
      this.finalY2 = (1 / 2) * radius;

      this.spawned = false;
      this.chooseArray = [];
      this.counter = 0;
      this.chooser();
    }
    chooser() {
      for (let i = 0; i < 7; i++) {
        this.chooseArray.push(true)
        // this.chooseArray.push(Math.random() * 2000 < 500)
      }

      if (!this.chooseArray.includes(true)) {
        this.chooseArray[Math.floor(Math.random() * this.chooseArray.length)] = true;
      }
    }
    drawLine(x1, y1, x2, y2, ratio) {
      x2 = x1 + ratio * (x2 - x1);
      y2 = y1 + ratio * (y2 - y1);
      return { x: x2, y: y2 }
    }
    draw() {
      const { centerPoint, ctx, drawLine } = this;
      this.ctx.strokeStyle = "green";
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      let returnArray = [];
      let nextPoint;
      // this.counter++;
      if (this.children > 10) {
        return "done";
      }
      if (centerPoint.x > this.canvasWidth || centerPoint.x < 0 || centerPoint.y > this.canvasHeight || centerPoint.y < 0) {
        return "done";
      }

      if (this.chooseArray[6]) {
        let topPoint = { x: centerPoint.x + this.newX, y: centerPoint.y - this.finalY }
        returnArray.push(topPoint);
        nextPoint = drawLine(centerPoint.x, centerPoint.y, topPoint.x, topPoint.y, this.ratio)
        ctx.moveTo(centerPoint.x, centerPoint.y);
        ctx.lineTo(nextPoint.x, nextPoint.y);
        ctx.stroke();
      }

      if (this.chooseArray[0]) {
        let topPoint2 = { x: centerPoint.x - this.newX, y: centerPoint.y - this.finalY }
        returnArray.push(topPoint2);
        nextPoint = drawLine(centerPoint.x, centerPoint.y, topPoint2.x, topPoint2.y, this.ratio)
        ctx.moveTo(centerPoint.x, centerPoint.y);
        ctx.lineTo(nextPoint.x, nextPoint.y)
        ctx.stroke();
      }

      if (this.chooseArray[1]) {
        let topPoint3 = { x: centerPoint.x + this.newX2, y: centerPoint.y }
        returnArray.push(topPoint3);
        nextPoint = drawLine(centerPoint.x, centerPoint.y, topPoint3.x, topPoint3.y, this.ratio)
        ctx.moveTo(centerPoint.x, centerPoint.y);
        ctx.lineTo(nextPoint.x, nextPoint.y)
        ctx.stroke();
      }

      if (this.chooseArray[2]) {
        let topPoint4 = { x: centerPoint.x + this.newX2, y: centerPoint.y - this.finalY2 }
        returnArray.push(topPoint4);
        nextPoint = drawLine(centerPoint.x, centerPoint.y, topPoint4.x, topPoint4.y, this.ratio)
        ctx.moveTo(centerPoint.x, centerPoint.y);
        ctx.lineTo(nextPoint.x, nextPoint.y)
        ctx.stroke();
      }

      if (this.chooseArray[3]) {
        let topPoint5 = { x: centerPoint.x - this.newX2, y: centerPoint.y }
        returnArray.push(topPoint5);
        nextPoint = drawLine(centerPoint.x, centerPoint.y, topPoint5.x, topPoint5.y, this.ratio)
        ctx.moveTo(centerPoint.x, centerPoint.y);
        ctx.lineTo(nextPoint.x, nextPoint.y)
        ctx.stroke();
      }

      if (this.chooseArray[4]) {
        let topPoint6 = { x: centerPoint.x - this.newX2, y: centerPoint.y - this.finalY2 };
        returnArray.push(topPoint6);
        nextPoint = drawLine(centerPoint.x, centerPoint.y, topPoint6.x, topPoint6.y, this.ratio)
        ctx.moveTo(centerPoint.x, centerPoint.y);
        ctx.lineTo(nextPoint.x, nextPoint.y)
        ctx.stroke();
      }

      if (this.chooseArray[5]) {
        let topPoint7 = { x: centerPoint.x, y: centerPoint.y - this.radius };
        returnArray.push(topPoint7);
        nextPoint = drawLine(centerPoint.x, centerPoint.y, topPoint7.x, topPoint7.y, this.ratio)
        ctx.moveTo(centerPoint.x, centerPoint.y);
        ctx.lineTo(nextPoint.x, nextPoint.y)
        ctx.stroke();
      }


      if (this.ratio < 1) {
        this.ratio += 0.01;
      } else if (this.spawned === false) {
        this.spawned = true;
        this.children++;
        console.log(this.children)
        returnArray.forEach(point => {
          if (this.children < 3) stars.push(new Star(100, point, 0, this.ctx, this.children))
        })

      }

    }
  }

  this.ctx.strokeStyle = "green";
  this.ctx.lineWidth = 0.1;
  this.ctx.beginPath();
  let stars = [];
  let s = new Star(100, { x: halfWidth, y: halfHeight }, 0, this.ctx);
  stars.push(s)
  animate();
  function animate() {
    ctx.resetTransform();
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    stars.forEach((star, index) => {
      let ret = star.draw();

    })




    ctx.translate(this.halfWidth, this.halfHeight);
    ctx.rotate(90 * (Math.PI / 180));
    ctx.translate(-this.halfWidth, -this.halfHeight);

    stars.forEach((star, index) => {
      let ret = star.draw();

    })
    ctx.translate(this.halfWidth, this.halfHeight);
    ctx.rotate(180 * (Math.PI / 180));
    ctx.translate(-this.halfWidth, -this.halfHeight);

    stars.forEach((star, index) => {
      let ret = star.draw();
      if (ret === "done") stars.splice(index, 1)
    })
    ctx.translate(this.halfWidth, this.halfHeight);
    ctx.rotate(-90 * (Math.PI / 180));
    ctx.translate(-this.halfWidth, -this.halfHeight);

    stars.forEach((star, index) => {
      let ret = star.draw();
      if (ret === "done") stars.splice(index, 1)
    })





    requestAnimationFrame(animate)
  }




})()

