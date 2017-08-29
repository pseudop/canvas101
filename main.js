var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function Circle(x, y, dx, dy, rad, colour){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.rad = rad;
  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
    c.fillStyle = colour;
    c.fill();
  }
  this.update = function(){
    ((this.x + this.rad) > innerWidth || (this.x - this.rad) < 0) ? this.dx = (-this.dx) : null;
    ((this.y + this.rad) > innerHeight || (this.y - this.rad) < 0) ? this.dy = (-this.dy) : null;
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
} //Circle

function init(){
  circleArray = [];
  c.globalAlpha = 0.6;
  for(var i = 0; i < 600; i++){
    var rad = Math.random() * 12 + 2;
    var x = Math.random() * (innerWidth - rad * 2) + rad;
    var y = Math.random() * (innerHeight - rad * 2) + rad;
    var dx = Math.random() - 0.5;
    var dy = Math.random() - 0.5;
    // var colourArray = ['#bf3111', '#d09a5e', '#f2cda0', '#fef0d0', '#ffdeb1'];
    // var colour = colourArray[Math.floor(Math.random() * colourArray.length)];
    // var colour = '#' + Math.random().toString(16).slice(2, 8);
    var colour = '#099';
    circleArray.push(new Circle(x, y, dx, dy, rad, colour));
  }
}
init();

(function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for(var i = 0; circle = circleArray[i]; i++){
    circle.update();
  }
})();