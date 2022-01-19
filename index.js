let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

draw();

function draw() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    add(100, 150);
    add(130, 150);
    add(160, 150);
    add(190, 150);
   

    ctx.fillStyle = 'yellow';
    add(100, 100);
}

function add(x, y) {
    ctx.fillRect(x, y, 30 -1, 30 -1);
}

function gameLoop() {

}

