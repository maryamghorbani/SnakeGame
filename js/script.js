const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext('2d');

ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height)

let snake = [
    { x: 150 , y : 150},
    { x: 140 , y : 150},
    { x: 130 , y : 150},
    { x: 120 , y : 150},
    { x: 110 , y : 150},
]

snake.forEach(snakePart => {
    ctx.fillStyle = 'lightgreen';
    ctx.strokeStyle = 'black';

    ctx.fillRect(snakePart.x , snakePart.y , 10 ,10);
    ctx.strokeRect(snakePart.x , snakePart.y , 10 , 10)
})

let foodX;
let foodY;

let randomNumber = (max , min) => Math.round((Math.random() * (max-min) + min) /10) * 10

let createFood = () => {
    foodX = randomNumber(0 , gameCanvas.width -10);
    foodY = randomNumber(0 , gameCanvas.height -10);

    snake.forEach(snakePart => {
        if ( snakePart.x == foodX && snakePart.y == foodY ) {
            createFood()
        }
    })
}

createFood()

ctx.fillStyle = 'red';
ctx.strokeStyle = 'black';

ctx.fillRect(foodX , foodY, 10, 10)
ctx.strokeRect(foodX , foodY, 10, 10)