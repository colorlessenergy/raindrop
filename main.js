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


class Rain {
  constructor () {
    this.setUp();
  }
  setUp () {
    for (var i = 0; i < 100; i++) {
      drop[i] = new RainDrop(Math.floor(Math.random() * 499), Math.floor(Math.random() * 100) - 400, 5, Math.floor(Math.random() * 13) + 10, canvas);
    }
    setInterval(this.update, 10);
  }

  update () {
    canvas.beginPath();
    canvas.fillStyle = "black";
    canvas.clearRect(0, 0, c.height, c.width);
    canvas.fillRect(0, 0, c.height, c.width);
    canvas.closePath();
    for (var i = 0; i < drop.length; i++) {
      drop[i].createRain();
      drop[i].fall();
    }
  }
}

var s = new Rain();
