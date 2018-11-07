var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
//fond
ctx.beginPath();
ctx.fillStyle="blue";
ctx.fillRect(0,0,400,400);
//ovale
ctx.beginPath();
ctx.fillStyle="white";
ctx.moveTo(100,200)
ctx.quadraticCurveTo(200, 125, 300, 200);
ctx.fill();
ctx.beginPath();
ctx.fillStyle="white";
ctx.moveTo(300,200)
ctx.quadraticCurveTo(200, 275, 100, 200);
ctx.fill();
//petit ovale
ctx.beginPath();
ctx.fillStyle="white";
ctx.moveTo(150,200)
ctx.quadraticCurveTo(200, 50, 250, 200);
ctx.fill();
