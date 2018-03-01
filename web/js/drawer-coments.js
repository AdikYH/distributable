var setGrade = function(newGrade){
  grade = newGrade;
  //console.log(grade);
}
var setTub = function(newTypeTub, newDiametro){
  swtypeTub = newTypeTub;
  //console.log(newTypeTub, newDiametro);
}

var canvas = document.getElementById('boceto'),
    ctx = canvas.getContext('2d'),
    x = new Number(),
    y = new Number(),
    x1 = 100,
    y1 = 100,
    point = [],
    grados = [],
    contador = 0,
    grade = 30,
    typeTub = false,
    distance = 0,
    g_30 = document.getElementById('g_30'),
    g_90 = document.getElementById('g_90'),
    g_150 = document.getElementById('g_150'),
    g_210 = document.getElementById('g_210'),
    g_270 = document.getElementById('g_270'),
    g_330 = document.getElementById('g_330'),
    t_et_12 = document.getElementById('t_et_12'),
    t_et_34 = document.getElementById('t_et_34'),
    t_et_1 = document.getElementById('t_et_1'),
    t_et_14 = document.getElementById('t_et_14'),
    t_ep_12 = document.getElementById('t_ep_12'),
    t_ep_34 = document.getElementById('t_ep_34'),
    t_ep_1 = document.getElementById('t_ep_1'),
    t_ep_14 = document.getElementById('t_ep_14'),
    t_vt_12 = document.getElementById('t_vt_12'),
    t_vt_34 = document.getElementById('t_vt_34'),
    t_vt_1 = document.getElementById('t_vt_1'),
    t_vt_14 = document.getElementById('t_vt_14');

  point[0] = x1;
  point[1] = y1;

g_30.addEventListener('click', function(){setGrade(30)});
g_90.addEventListener('click', function(){setGrade(90)});
g_150.addEventListener('click', function(){setGrade(150)});
g_210.addEventListener('click', function(){setGrade(210)});
g_270.addEventListener('click', function(){setGrade(270)});
g_330.addEventListener('click', function(){setGrade(330)});
t_et_12.addEventListener('click', function(){ setTub('et', '12') });
t_et_34.addEventListener('click', function(){ setTub('et', '34') });
t_et_1.addEventListener('click', function(){ setTub('et', '1') });
t_et_14.addEventListener('click', function(){ setTub('et', '14') });
t_ep_12.addEventListener('click', function(){ setTub('ep', '12') });
t_ep_34.addEventListener('click', function(){ setTub('ep', '34') });
t_ep_1.addEventListener('click', function(){ setTub('ep', '1') });
t_ep_14.addEventListener('click', function(){ setTub('ep', '14') });
t_vt_12.addEventListener('click', function(){ setTub('vt', '12') });
t_vt_34.addEventListener('click', function(){ setTub('vt', '34') });
t_vt_1.addEventListener('click', function(){ setTub('vt', '1') });
t_vt_14.addEventListener('click', function(){ setTub('vt', '14') });

function dibujar(){
  distance = parseFloat(document.getElementById("distance").value);
  if(isNaN(distance))
    distance = 0;
  if(distance>0){
    x2 = distance * Math.cos(grade * Math.PI/180)+point[point.length-2];
    y2 = -distance * Math.sin(grade * Math.PI/180)+point[point.length-1];
    var a = x2.toFixed(2);
    var b = y2.toFixed(2);
    point.push(parseFloat(a));
    point.push(parseFloat(b));
    grados.push(grade);
  }
  dibujarRuta(point.length);
}

function dibujarRuta(tope){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 2;
  
  ctx.moveTo(point[0],point[1]);
  for(i = 0; i < tope; i = i+2){
    ctx.lineTo(point[i],point[i+1]);
    console.log(point[i]+' - '+point[i+1])
  }
  ctx.lineJoin = "round";
  ctx.lineCap="round";
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.stroke();
  
}
function KeyPress(e) {
  var aux = [];
  var evtobj = window.event? event : e
  if (evtobj.keyCode == 90 && evtobj.ctrlKey) {
    for(i = 0; i < point.length-2; i++)
      aux[i] = point[i];
    point = aux;
    dibujarRuta(point.length);
  }
}

function dibujarCuadrado(event){
  
  obtenerCoords(event);
  RECTA = [0,0,0,0];
  
  RECTA = verPuntoRecta();
  console.log("GGG: "+ RECTA[0]+ " "+ RECTA[1]+ " "+ RECTA[2]+ " "+ RECTA[3]);
  ctx.save();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  
  ctx.beginPath();
  ctx.strokeRect(RECTA[0],RECTA[1], 5, 5);
  ctx.strokeRect(RECTA[2],RECTA[3], 5, 5);
  ctx.closePath();
  
  ctx.stroke();
  ctx.restore();
}
function verPuntoRecta(){
    var P1 = 0, 
        P2 = 0,
        A = 0,
        B = 0,
        NUM = 0,
        COS = 0,
        DIS = 0,
        SUPx = 0,
        INFx = 0,
        SUPy =0,
        INFy = 0,
        tol = 5,
        inter = false,
        cota =false,
        RECTA = [0,0,0,0];
        
  for(i = 0; i < point.length-2; i=i+2){
    P1 = (y-point[i+1])*(point[i+2]-point[i]);
    P2 = (point[i+3]-point[i+1])*(x-point[i]);
    A = point[i+3]-point[i+1];
    B = -point[i+2]+point[i];
    NUM = P1-P2;
    COS = Math.sqrt(Math.pow(A,2)+Math.pow(B,2));
    DIS = Math.abs(NUM)/COS;
    
    if(DIS < tol){
      console.log('interseccion recta: '+((i/2)+1));
      inter = true;
      SUPx = Math.max(point[i], point[i+2]);
      INFx = Math.min(point[i], point[i+2]);
      SUPy = Math.max(point[i+1], point[i+3]);
      INFy = Math.min(point[i+1], point[i+3]);

      if((INFx-tol <= x && x<=SUPx+tol) && (INFy-tol <= y && y <= SUPy+tol))
      {
        console.log('acotado en recta: '+((i/2)+1));
        cota = true;
        RECTA = [point[i], point[i+1], point[i+2], point[i+3]];
        break;
      }
    }
    else
      console.log('nada'+DIS);
    /*console.log(DIS);
    console.log('x: '+x+' y: '+y+' x0: '+point[i]+' y0: '+point[i+1]+' x1: '+point[i+2]+' y1: '+point[i+3]);
    console.log('******************************************');
    if(cota && inter){
      
    }
    else
      cota = inter = false;*/
  }
  console.log('-----------------------------------------');
  /*{
    console.log('ITER: '+((i/2)+1));
    console.log('x: '+x);
    console.log('y: '+y);
    console.log('x0: '+point[i]);
    console.log('y0: '+point[i+1]);
    console.log('x1: '+point[i+2]);
    console.log('y1: '+point[i+3]);
    var p1 = (y-point[i+1])*(point[i+2]-point[i]);
    var p2 = (point[i+3]-point[i+1])*(x-point[i]);
    var A = point[i+3]-point[i+1];
    var B = -point[i+2]+point[i];
    var cos = parseFloat(Math.sqrt(Math.pow(A,2)+Math.pow(B,2)).toFixed(2));
    console.log('prim: '+(y-point[i+1])*(x-point[i]));
    console.log('sec: '+(point[i+3]-point[i+1])*(point[i+2]-point[i]));
    console.log('cos: '+cos);
    console.log('distancia punto recta: '+(Math.abs(p1-p2)/cos));
  }*/
  console.log("GGG: "+ RECTA[0]+ " "+ RECTA[1]+ " "+ RECTA[2]+ " "+ RECTA[3]);
    return RECTA;
      
}

function obtenerCoords(event){
    //var x = new Number();
    //var y = new Number();
    //var canvas = document.getElementById('boceto');

    if (event.x != undefined && event.y != undefined){
      x = event.x+ document.body.scrollLeft + document.documentElement.scrollLeft;;
      y = event.y + document.body.scrollTop + document.documentElement.scrollTop;
    }else{// Firefox
      x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

  //alert("x: " + x + "  y: " + y);
}
canvas.addEventListener("mousedown", dibujarCuadrado, false);
document.onkeydown = KeyPress;