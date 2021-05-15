const gameCanvas = document.getElementById("gameCanvas");

const ctx = gameCanvas.getContext('2d');

document.addEventListener('keydown', changeDirection)

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;

    if(keyPressed == LEFT_KEY) {
        dx = -10;
        dy = 0;
    }
    if(keyPressed == RIGHT_KEY) {
        dx = 10;
        dy = 0;
    }
    if(keyPressed == UP_KEY) {
        dx = 0;
        dy = 10;
    }
    if(keyPressed == DOWN_KEY) {
        dx = 0;
        dy = -10;
    }
}

let snake = [
    { x : 150 , y : 150 },
    { x : 140 , y : 150 },
    { x : 130 , y : 150 },
    { x : 120 , y : 150 },
    { x : 110 , y : 150 },
]

let foodX;
let foodY;
let dx = 10;
let dy = 0;


function main() {
    // game over
    setTimeout(() => {
        clearCanvas()
        drawFood()
        advanceSnake()
        drawSnake()

        main();
    }, 100);
}


let clearCanvas = () => {
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'black'

    ctx.fillRect(0 , 0 , gameCanvas.width , gameCanvas.height)
    ctx.strokeRect(0,0 ,gameCanvas.width, gameCanvas.height)
}

let randomNumber = (max , min) => Math.round((Math.random() * (max - min) + min) / 10) * 10

let createFood = () => {
    foodX = randomNumber(0,gameCanvas.width - 10);
    foodY = randomNumber(0,gameCanvas.height - 10);
    snake.forEach(snakePart => {
        if(snakePart.x === foodX && snakePart.y === foodY) {
            createFood()
        }
    })
}

let advanceSnake = () => {
    const head = { x : snake[0].x + dx , y : snake[0].y - dy}

    snake.unshift(head);

    snake.pop()

}

let drawSnake = () => snake.forEach(drawSnakePart)
let drawSnakePart = snakePart => {
    ctx.fillStyle = 'lightgreen';
    ctx.strokeStyle = 'black'

    ctx.fillRect(snakePart.x , snakePart.y , 10 , 10);
    ctx.strokeRect(snakePart.x , snakePart.y , 10 , 10);
}

let drawFood = () => {
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'darkred'

    ctx.fillRect(foodX , foodY , 10 , 10)
    ctx.strokeRect(foodX , foodY , 10 , 10)
}

createFood()

// let foodY

main()