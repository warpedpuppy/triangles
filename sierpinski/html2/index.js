(function () {
  this.canvas = document.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");


  animate();
  function animate() {
    ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    ctx.beginPath();

    ctx.fill();
    requestAnimationFrame(animate);
  }

})()