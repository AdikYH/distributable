$(document).ready(function(){
  var c = document.getElementById('canvas'),
      ctx = c.getContext('2d');
  var giro = 0,
      sca = 1,
      sw = 0;
  //ctx.beginPath();
  setInterval(function(){
    c.width=c.width;
    //console.log(giro);
    
  
    ctx.scale(sca,sca);
    ctx.translate(c.width/2,c.height/2);
    ctx.rotate(giro*Math.PI/180)
    ctx.fillRect(0,0,100,50);
    

    //ctx.arc(95,50,40,0,2*Math.PI);
    //ctx.font="30px Arial";
    //ctx.fillText("Top",50,100);
    ctx.stroke();
    if(giro==360) giro =0;
    else giro++;
  }, 32);
  
  
});

//window.setInterval(function(){alert('hello')}, 1000)