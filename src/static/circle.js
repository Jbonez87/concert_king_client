class Circle {
  constructor(options) {
      this.ctx = options.ctx;
      this.size = options.size;
      this.position = {};
      this.position.x = options.width;
      this.position.y = options.height;
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(this.position.x, this.position.y);
    ctx.beginPath();
    ctx.shadowOffsetX = 3;
    ctx.shadowOffsetY = 3;
    ctx.shadowBlur = 10;
    ctx.shadowColor = '#13a0b9';
    ctx.lineWidth = 10;
    ctx.arc(0, 0, this.size, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  }
}

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let circles = [];

for ( let i = 0; i < 26; i++) {
  let options = {
    ctx : ctx,
    size : 30 * i,
    width : canvas.width / 2,
    height : canvas.height / 2,
  }

  if (i === 0) {
    options.size = 1;
}

  circles[i] = new Circle(options);
  circles[i].draw();
}

const start = () => {
  requestAnimationFrame(start);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let w = 1; w < circles.length; w++) {
      if (circles[w].size < 750) {
          circles[w].size += 1;
      } else {
          circles[w].size = 0;
      }
      circles[w].draw();
  }
}

start();

const resizeIt = () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
};
window.onresize = resizeIt;
