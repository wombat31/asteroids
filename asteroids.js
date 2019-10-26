var canvas= document.getElementById('asteroids');
var context = canvas.getContext('2d');

//draw to the canvas

context.strokeStyle = "#00FF00";
context.fillStyle = "#009900";

for(var x=0; x<canvas.width; x += 10){
    context.beginPath();
    context.moveTo(x,0);
    context.lineTo(x,canvas.height);
    context.lineWidth = (x % 50 == 0) ? 0.75 : 0.5;
    context.stroke();
    if(x % 50 == 0){context.fillText(x,x,10);}
}
for(var y=0; y<canvas.height; y += 10){
    context.beginPath();
    context.moveTo(0,y);
    context.lineTo(canvas.width, y);
    context.lineWidth = (y % 50 == 0) ? 0.75 : 0.5;
    context.stroke();
    if(y % 50 == 0){context.fillText(y,0,y+10);}
}
