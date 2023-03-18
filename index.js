let canvasWidth = 600;
let canvasHeight = 400;

let player;
let playerYPosition = 200;

// in screen canvas
var gameCanvas = {
  canvas: document.getElementById("canvas"),
  start: function () {
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    this.context = this.canvas.getContext("2d");
  },
};

// initialises the game scenario
function startGame() {
  gameCanvas.start();

  player = new createPlayer(30, 30, 10);
}

function createPlayer(width, height, x) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = playerYPosition;
  ctx = gameCanvas.context;
  ctx.fillStyle = "green";
  ctx.fillRect(this.x, this.y, this.width, this.height);
}
