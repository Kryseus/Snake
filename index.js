const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rows = "20";
const cols = "30";
const cellWidth = canvas.width / cols;
const cellHeight = canvas.height / rows;
let snake = [{ x: 19, y: 3 }];
let food = { x: 5, y: 5 };
let direction = "LEFT";
let foodCollected = false;

placeFood();
setInterval(gameLoop, 160);
document.addEventListener("keydown", keyDown);

draw();

function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  snake.forEach((part) => add(part.x, part.y));

  ctx.fillStyle = "yellow";
  add(food.x, food.y);

  requestAnimationFrame(draw);
}

function placeFood() {
  let randomX = Math.floor(Math.random() * cols);
  let randomY = Math.floor(Math.random() * rows);

  food = { x: randomX, y: randomY };
}

function add(x, y) {
  ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth - 1, cellHeight - 1);
}

function gameLoop() {
    if (foodCollected) {
        snake = [{x: snake[0].x, y: snake[0].y}, ...snake];
        foodCollected = false;
    }
  if (direction == "LEFT") snake[0].x--;
  if (direction == "UP") snake[0].y--;
  if (direction == "RIGHT") snake[0].x++;
  if (direction == "DOWN") snake[0].y++;

  if (snake[0].x == food.x && snake[0].y == food.y) {
    foodCollected = true;
    placeFood();
  }
}

function keyDown(e) {
  if (e.keyCode == 37) {
    direction = "LEFT";
  }
  if (e.keyCode == 38) {
    direction = "UP";
  }
  if (e.keyCode == 39) {
    direction = "RIGHT";
  }
  if (e.keyCode == 40) {
    direction = "DOWN";
  }
}
