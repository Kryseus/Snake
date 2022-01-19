const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rows = "20";
const cols = "30";
const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;
let snake = [
  { x: 2, y: 3 },
  { x: 3, y: 3 },
];
let food = { x: 5, y: 5 };
let direction = "LEFT";

draw();

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  snake.forEach(part => add(part.x, part.y))
  
  ctx.fillStyle = "yellow";
  add(food.x, food.y);
}

function add(x, y) {
  ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth -1, cellHeight - 1);
}

function gameLoop() {}
