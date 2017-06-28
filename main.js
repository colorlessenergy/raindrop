 // purple rain
 // 1. create canvas height/width
 // 2. create rain drops
 //  a. random X and Y should be at before the actually seen top.
 //  b. track Y and keep going down until reaches the max Y (bottom)
 //  c. once reach bottom remove it than add another once

const drop = [];
var c = document.createElement('canvas');
var canvas = c.getContext('2d');
c.height = 500;
c.width = 500;
document.querySelector('body').appendChild(c);


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


function update () {
  canvas.beginPath();
  canvas.fillStyle = "black";
  canvas.clearRect(0, 0, 500, 500);
  canvas.fillRect(0, 0, 500, 500);
  canvas.closePath();
  for (var i = 0; i < drop.length; i++) {
    drop[i].createRain();
    drop[i].fall();
  }
}

function setUp () {
  for (var i = 0; i < 100; i++) {
    drop[i] = new RainDrop(Math.floor(Math.random() * 499), Math.floor(Math.random() * 100) - 300,5, Math.floor(Math.random() * 13) + 10, canvas);
  }
  setInterval(update, 10);
}

setUp();
