const gameCanvas = document.getElementById("gameCanvas");
const ctx = gameCanvas.getContext('2d');

ctx.fillStyle = 'white'
ctx.strokeStyle = 'black'
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height)
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height)