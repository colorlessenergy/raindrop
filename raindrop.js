class RainDrop {
  constructor(x, y, w, h, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.ctx = ctx;
  }

  createRain() {
    this.ctx.fillStyle = "purple";
    this.ctx.rect(this.x, this.y, this.w, this.h);
    this.ctx.fill();
  }

  fall() {
    this.y = this.y + 10;

    if (this.y > 500) {
      this.y =  Math.floor(Math.random() * 100) - 150;
      this.x = Math.floor(Math.random() * 499);
    }
  }
}
