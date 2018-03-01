window.addEventListener('load', init);
function init(){
  var canvas = document.getElementById('boceto');
  ctx = canvas.getContext('2d');
  
  var camino = {
    x:100,
    y:100,
    
  };
  
  cuadricula(canvas, ctx);
  
  ruta(canvas, ctx, camino);
  
    
}

function ruta(canvas,ctx, camino){
  ctx.strokeStyle = '#000';
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineJoin = "round";
  ctx.lineCap="round";
  ctx.moveTo(camino['x'],camino['y']);//origen
  ctx.lineTo(150,150);
  ctx.lineTo(160,160);
  ctx.lineTo(180,160);
  ctx.lineTo(200,250);
  ctx.closePath();
  ctx.stroke();
}

function cuadricula(canvas, ctx){
  ctx.strokeStyle = 'rgb(146,146,146)';
  ctx.lineWidth = 1;
  for(i =15; i<canvas.width; i=i+15){
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i,canvas.height);
    ctx.closePath();
    ctx.stroke();
  }
  
  for(i =15; i<canvas.height; i=i+15){
    ctx.beginPath();
    ctx.moveTo(0,i);
    ctx.lineTo(canvas.width,i);
    ctx.closePath();
    ctx.stroke();
  }
}