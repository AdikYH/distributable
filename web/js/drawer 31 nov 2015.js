
var setGrade = function(newGrade){
  grade = newGrade;
  switch(grade){
    case 30:
      g_30.className = 'angle g-30 clicked';
      g_90.className = 'angle g-90';
      g_150.className = 'angle g-150';
      g_210.className = 'angle g-210';
      g_270.className = 'angle g-270';
      g_330.className = 'angle g-330';
      break;
    case 90:
      g_30.className = 'angle g-30';
      g_90.className = 'angle g-90 clicked';
      g_150.className = 'angle g-150';
      g_210.className = 'angle g-210';
      g_270.className = 'angle g-270';
      g_330.className = 'angle g-330';
      break;
    case 150:
      g_30.className = 'angle g-30';
      g_90.className = 'angle g-90';
      g_150.className = 'angle g-150 clicked';
      g_210.className = 'angle g-210';
      g_270.className = 'angle g-270';
      g_330.className = 'angle g-330';
      break;
    case 210:
      g_30.className = 'angle g-30';
      g_90.className = 'angle g-90';
      g_150.className = 'angle g-150';
      g_210.className = 'angle g-210 clicked';
      g_270.className = 'angle g-270';
      g_330.className = 'angle g-330';
      break;
    case 270:
      g_30.className = 'angle g-30';
      g_90.className = 'angle g-90';
      g_150.className = 'angle g-150';
      g_210.className = 'angle g-210';
      g_270.className = 'angle g-270 clicked';
      g_330.className = 'angle g-330';
      break;
    case 330:
      g_30.className = 'angle g-30';
      g_90.className = 'angle g-90';
      g_150.className = 'angle g-150';
      g_210.className = 'angle g-210';
      g_270.className = 'angle g-270';
      g_330.className = 'angle g-330 clicked';
      break;
    default:
      g_30.className = 'angle g-30';
      g_90.className = 'angle g-90';
      g_150.className = 'angle g-150';
      g_210.className = 'angle g-210';
      g_270.className = 'angle g-270';
      g_330.className = 'angle g-330';
      break;
  }
  
  console.log(grade);
}
var setTub = function(newTypeTub, newDiametro){
  typeTub = newTypeTub;
  diametro = newDiametro;
  switch(typeTub){
    case 'et':
      switch(diametro){
        case '12':
          t_et_12.className = 'tub d_1_2 clicked';
          t_et_34.className = 'tub d_3_4';
          t_et_1.className = 'tub d_1';
          t_et_14.className = 'tub d_1_4';
          t_ep_12.className = 'tub d_1_2';
          t_ep_34.className = 'tub d_3_4';
          t_ep_1.className = 'tub d_1';
          t_ep_14.className = 'tub d_1_4';
          t_vt_12.className = 'tub d_1_2';
          t_vt_34.className = 'tub d_3_4';
          t_vt_1.className = 'tub d_1';
          t_vt_14.className = 'tub d_1_4';
          break;
        case '34':
          t_et_12.className = 'tub d_1_2';
          t_et_34.className = 'tub d_3_4 clicked';
          t_et_1.className = 'tub d_1';
          t_et_14.className = 'tub d_1_4';
          t_ep_12.className = 'tub d_1_2';
          t_ep_34.className = 'tub d_3_4';
          t_ep_1.className = 'tub d_1';
          t_ep_14.className = 'tub d_1_4';
          t_vt_12.className = 'tub d_1_2';
          t_vt_34.className = 'tub d_3_4';
          t_vt_1.className = 'tub d_1';
          t_vt_14.className = 'tub d_1_4';
          break;
        case '1':
          t_et_12.className = 'tub d_1_2';
          t_et_34.className = 'tub d_3_4';
          t_et_1.className = 'tub d_1 clicked';
          t_et_14.className = 'tub d_1_4';
          t_ep_12.className = 'tub d_1_2';
          t_ep_34.className = 'tub d_3_4';
          t_ep_1.className = 'tub d_1';
          t_ep_14.className = 'tub d_1_4';
          t_vt_12.className = 'tub d_1_2';
          t_vt_34.className = 'tub d_3_4';
          t_vt_1.className = 'tub d_1';
          t_vt_14.className = 'tub d_1_4';
          break;
        case '14':
          t_et_12.className = 'tub d_1_2';
          t_et_34.className = 'tub d_3_4';
          t_et_1.className = 'tub d_1';
          t_et_14.className = 'tub d_1_4 clicked';
          t_ep_12.className = 'tub d_1_2';
          t_ep_34.className = 'tub d_3_4';
          t_ep_1.className = 'tub d_1';
          t_ep_14.className = 'tub d_1_4';
          t_vt_12.className = 'tub d_1_2';
          t_vt_34.className = 'tub d_3_4';
          t_vt_1.className = 'tub d_1';
          t_vt_14.className = 'tub d_1_4';
          break;
      }
      break;
      case 'ep':
      switch(diametro){
        case '12':
          t_et_12.className = 'tub d_1_2';
          t_et_34.className = 'tub d_3_4';
          t_et_1.className = 'tub d_1';
          t_et_14.className = 'tub d_1_4';
          t_ep_12.className = 'tub d_1_2 clicked';
          t_ep_34.className = 'tub d_3_4';
          t_ep_1.className = 'tub d_1';
          t_ep_14.className = 'tub d_1_4';
          t_vt_12.className = 'tub d_1_2';
          t_vt_34.className = 'tub d_3_4';
          t_vt_1.className = 'tub d_1';
          t_vt_14.className = 'tub d_1_4';
          break;
        case '34':
          t_et_12.className = 'tub d_1_2';
          t_et_34.className = 'tub d_3_4';
          t_et_1.className = 'tub d_1';
          t_et_14.className = 'tub d_1_4';
          t_ep_12.className = 'tub d_1_2';
          t_ep_34.className = 'tub d_3_4 clicked';
          t_ep_1.className = 'tub d_1';
          t_ep_14.className = 'tub d_1_4';
          t_vt_12.className = 'tub d_1_2';
          t_vt_34.className = 'tub d_3_4';
          t_vt_1.className = 'tub d_1';
          t_vt_14.className = 'tub d_1_4';
          break;
        case '1':
          t_et_12.className = 'tub d_1_2';
          t_et_34.className = 'tub d_3_4';
          t_et_1.className = 'tub d_1';
          t_et_14.className = 'tub d_1_4';
          t_ep_12.className = 'tub d_1_2';
          t_ep_34.className = 'tub d_3_4';
          t_ep_1.className = 'tub d_1 clicked';
          t_ep_14.className = 'tub d_1_4';
          t_vt_12.className = 'tub d_1_2';
          t_vt_34.className = 'tub d_3_4';
          t_vt_1.className = 'tub d_1';
          t_vt_14.className = 'tub d_1_4';
          break;
        case '14':
          t_et_12.className = 'tub d_1_2';
          t_et_34.className = 'tub d_3_4';
          t_et_1.className = 'tub d_1';
          t_et_14.className = 'tub d_1_4';
          t_ep_12.className = 'tub d_1_2';
          t_ep_34.className = 'tub d_3_4';
          t_ep_1.className = 'tub d_1';
          t_ep_14.className = 'tub d_1_4 clicked';
          t_vt_12.className = 'tub d_1_2';
          t_vt_34.className = 'tub d_3_4';
          t_vt_1.className = 'tub d_1';
          t_vt_14.className = 'tub d_1_4';
          break;
      }
      break;
      case 'vt':
      switch(diametro){
        case '12':
          t_et_12.className = 'tub d_1_2';
          t_et_34.className = 'tub d_3_4';
          t_et_1.className = 'tub d_1';
          t_et_14.className = 'tub d_1_4';
          t_ep_12.className = 'tub d_1_2';
          t_ep_34.className = 'tub d_3_4';
          t_ep_1.className = 'tub d_1';
          t_ep_14.className = 'tub d_1_4';
          t_vt_12.className = 'tub d_1_2 clicked';
          t_vt_34.className = 'tub d_3_4';
          t_vt_1.className = 'tub d_1';
          t_vt_14.className = 'tub d_1_4';
          break;
        case '34':
          t_et_12.className = 'tub d_1_2';
          t_et_34.className = 'tub d_3_4';
          t_et_1.className = 'tub d_1';
          t_et_14.className = 'tub d_1_4';
          t_ep_12.className = 'tub d_1_2';
          t_ep_34.className = 'tub d_3_4';
          t_ep_1.className = 'tub d_1';
          t_ep_14.className = 'tub d_1_4';
          t_vt_12.className = 'tub d_1_2';
          t_vt_34.className = 'tub d_3_4 clicked';
          t_vt_1.className = 'tub d_1';
          t_vt_14.className = 'tub d_1_4';
          break;
        case '1':
          t_et_12.className = 'tub d_1_2';
          t_et_34.className = 'tub d_3_4';
          t_et_1.className = 'tub d_1';
          t_et_14.className = 'tub d_1_4';
          t_ep_12.className = 'tub d_1_2';
          t_ep_34.className = 'tub d_3_4';
          t_ep_1.className = 'tub d_1';
          t_ep_14.className = 'tub d_1_4';
          t_vt_12.className = 'tub d_1_2';
          t_vt_34.className = 'tub d_3_4';
          t_vt_1.className = 'tub d_1 clicked';
          t_vt_14.className = 'tub d_1_4';
          break;
        case '14':
          t_et_12.className = 'tub d_1_2';
          t_et_34.className = 'tub d_3_4';
          t_et_1.className = 'tub d_1';
          t_et_14.className = 'tub d_1_4';
          t_ep_12.className = 'tub d_1_2';
          t_ep_34.className = 'tub d_3_4';
          t_ep_1.className = 'tub d_1';
          t_ep_14.className = 'tub d_1_4';
          t_vt_12.className = 'tub d_1_2';
          t_vt_34.className = 'tub d_3_4';
          t_vt_1.className = 'tub d_1';
          t_vt_14.className = 'tub d_1_4 clicked';
          break;
      }
      break;
  }
  
  console.log(newTypeTub, newDiametro);
}
var setDistance = function (newDistance){
  distance = newDistance;
}
var canvas = document.getElementById('boceto'),
    ctx = canvas.getContext('2d'),
    x = new Number(),
    y = new Number(),
    x1 = 100,
    y1 = 300,
    point = [],
    grados = [],
    distancia = [],
    tub =[],
    contador = 0,
    grade = 30,
    typeTub = 'vt',
    diametro = '0',
    puntero = -1,
    distance = 0,
    recta = [0,0,0,0],
    edit = true,
    drag = false,
    corXY = [-1, -1],
    //newCorXY = [-1, -1],
    click_count = 0,
    mypointer = -1,
    antpointer = -1,
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
    t_vt_14 = document.getElementById('t_vt_14'),
    txt_ditance = document.getElementById('distance'),
    btn_dibujar = document.getElementById('drawer'),
    dr_cp = document.getElementById('dr_component'),
    dr_rt = document.getElementById('dr_rect'),
    dr_tf = document.getElementById('dr_tf');
  

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
dr_tf.addEventListener('click', function(){dibujarCaja(puntero, grade, distance, 5);dibujarTuberiaForro(puntero, grade, distance, 5);alert(puntero + ' '+ grade + ' '+ distance + ' ' + typeTub)})

function init(){
  setGrade(30);
  setTub('et', '12');
  //alert('cargado');
  /*ctx.beginPath();
  ctx.fillRect(0,0,100,100);
  ctx.fill();
  ctx.closePath();*/
}

function dibujar(){
  
  distance = parseFloat(document.getElementById("distance").value);
  if(isNaN(distance))
    distance = 0;
  if(distance>0){
    distancia.push(distance);
    // 1px = 0.026458333333 cm 
    // 1cm = 37.79527559055 px
    // 2cm = 50cm
    //distance = distance * 37.79527559055;
    //distance = (distance * 37.79527559055)/50;
    var newDistance = (distancia[distancia.length-1] * 37.79527559055)/50;
    //x2 = distance * Math.cos(grade * Math.PI/180)+point[point.length-2];
    //y2 = -distance * Math.sin(grade * Math.PI/180)+point[point.length-1];    
    x2 = newDistance * Math.cos(grade * Math.PI/180)+point[point.length-2];
    y2 = -newDistance * Math.sin(grade * Math.PI/180)+point[point.length-1];
    
    var a = x2.toFixed(2);
    var b = y2.toFixed(2);
    if(grados.length>0 && grade == grados[grados.length-1])
      alert('Cambie el valor del angulo para el siguiente trazo');
    else{
      point.push(parseFloat(a));
      point.push(parseFloat(b));
      grados.push(grade);
      tub.push(typeTub);
      tub.push(diametro);
      //alert('Introducidos ' +distancia[distancia.length-1]+' '+ grados[grados.length-1]+ ' ' +point[point.length-2]+' '+point[point.length-1]);
    }
    dibujarRuta(point.length);
  }
}

function recalcularRuta(inicioX, inicioY){
  
  var newRute = [];
  for(i = 0; i < point.length-1; i = i + 2){
    if(i==0){
      newRute[0] = inicioX;
      newRute[1] = inicioY;
      console.log(inicioX+'   '+inicioY);
    }
    else{
      //(i/2)-1
      var p = (i/2)-1;
      var nDistance = (distancia[p] * 37.79527559055)/50;
      var x2 = nDistance * Math.cos(grados[p] * Math.PI/180)+newRute[i-2];
      var y2 = -nDistance * Math.sin(grados[p] * Math.PI/180)+newRute[i-1];
      
      var a = x2.toFixed(2);
      var b = y2.toFixed(2);
      
      newRute.push(parseFloat(a));
      newRute.push(parseFloat(b));
      console.log(p)
    }
    //console.log(i)
  }
  point = newRute;
  
  dibujarRuta(point.length);
      
}

function dibujarRuta(tope){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  //ctx.save();
  //dibujarMedidor(50, 37.79527559055, 100, 300);
  dibujarMedidor(50, 37.79527559055, point[0], point[1]);
  for(i = 3; i < tope; i = i+2){
    ctx.lineWidth = 1;
    ctx.lineJoin = "round";
    ctx.lineCap="round";
    ctx.strokeStyle = 'rgba(0, 0, 0, 1.0)';
    //ctx.lineDashOffset = 2;
    if(tub[(i-3)] =='vt')
      ctx.setLineDash([0]);
    else
      ctx.setLineDash([2, 6]);
    ctx.beginPath();
    ctx.moveTo(point[i-3],point[i-2]);
    ctx.lineTo(point[i-1],point[i-0]);
    ctx.closePath();
    ctx.stroke();
    /*console.log(point[i-3]+' - '+point[i-2]);
    console.log(point[i-1]+' - '+point[i-0]);
    console.log(tub[(i-3)]+' - '+tub[(i-2)]);
    console.log(grados[(i-3)/2]);*/
  }
  //ctx.restore();
}

function KeyPress(e) {
  var aux = [];
  var aux_g = [];
  var aux_tt = [];
  var aux_d = [];
  var evtobj = window.event? event : e
  if (evtobj.keyCode == 90 && evtobj.ctrlKey) {
    for(i = 0; i < point.length-2; i++){
      aux[i] = point[i];
      if(i<tub.length-2)
        aux_tt[i] = tub[i];
      if(i < distancia.length-1){
        aux_d[i] = distancia[i];
        aux_g[i] = grados[i];
      }
      //console.log(aux_tt[i]);
      
    }
      
    point = aux;
    tub = aux_tt;
    distancia = aux_d;
    grados = aux_g;
    
    aux = [];
    aux_g = [];
    aux_tt = [];
    aux_d = [];
    setGrade(grados[grados.length-1]);
    setTub(tub[tub.length-2], tub[tub.length-1]);
    dibujarRuta(point.length);
    btn_dibujar.value = 'Dibujar';
    btn_dibujar.onclick = dibujar;
    edit = true;
  }
}

function editarRecta(event){
  if(dibujarMarcadores(event)){
    drag = true;
    txt_ditance.value = distancia[puntero/2];
    setGrade(grados[puntero/2]);
    setTub(tub[puntero], tub[puntero+1]);
    btn_dibujar.value = ' Editar ';
    btn_dibujar.onclick = editar;
    edit = false;
    dr_cp.style.display = 'inline';
    dr_rt.style.display = 'inline';
  }  
}

function editar(){
  //alert('HOLA');
  distance = parseFloat(document.getElementById("distance").value);
  if(distance > 0 && distance != distancia[puntero/2])
    distancia[puntero/2] = distance;
  if(grade != grados[puntero/2])
    grados[puntero/2] = grade;
  if(typeTub != tub[puntero])
    tub[puntero] = typeTub;
  if(diametro != tub[puntero+1])
    tub[puntero+1] = diametro;
  
  for(i = puntero; i<point.length-2; i=i+2){
    var px1 = point[i];
    var py1 = point[i+1];
    var px2 = distancia[i/2] * Math.cos(grados[i/2] * Math.PI/180) + point[i];
    var py2 = -distancia[i/2] * Math.sin(grados[i/2] * Math.PI/180) + point[i+1];
    point[i+2] = px2;
    point[i+3] = py2;
  }
  dibujarRuta(point.length)
  console.log(puntero);
  
  
  btn_dibujar.value = 'Dibujar';
  btn_dibujar.onclick = dibujar;
  dr_cp.style.display = 'none';
  dr_rt.style.display = 'none';
  edit = true;
}

function dibujarTuberiaForro(puntero, angulo, distancia, separacion){
  var px1 = separacion * Math.cos((angulo-45) * Math.PI/180) + point[puntero];
  var py1 = -separacion * Math.sin((angulo-45) * Math.PI/180) + point[puntero+1];
  var px2 = (distancia-(separacion*2)) * Math.cos(angulo * Math.PI/180) + px1;
  var py2 = -(distancia-(separacion*2)) * Math.sin(angulo * Math.PI/180) + py1;
  ctx.save();
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.strokeStyle = 'rgb(54, 93, 44)';
  ctx.setLineDash([0]);
  ctx.beginPath();
  ctx.moveTo(px1, py1);
  ctx.lineTo(px2, py2);
  ctx.closePath();
  ctx.stroke();
  
  px1 = separacion * Math.cos((angulo+45) * Math.PI/180) + point[puntero];
  py1 = -separacion * Math.sin((angulo+45) * Math.PI/180) + point[puntero+1];
  px2 = (distancia-(separacion*2)) * Math.cos(angulo * Math.PI/180) + px1;
  py2 = -(distancia-(separacion*2)) * Math.sin(angulo * Math.PI/180) + py1;
  
  ctx.beginPath();
  ctx.moveTo(px1, py1);
  ctx.lineTo(px2, py2);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
  
}

function dibujarMedidor(esca, equiv, origen_x, origen_y){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var escala = esca;//50;
  var equivalencia = equiv;//37.79527559055;
  var ox = ix;
  var oy = iy+15;
  var altura = (50 * equivalencia)/escala;
  var anchura = (36 * equivalencia)/escala;
  var profundidad = (20 * equivalencia)/escala;
  //console.log(altura);
  //console.log(anchura);
  //console.log(profundidad);
  var inclinacion = 150;
  var caja = [];
  var g_caja = [330, 270, 150, 90, 30, 330, 270, 210, 90, 30];
  var d_caja = [anchura, altura, anchura, altura, profundidad, anchura, altura, profundidad, altura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;
  
  var ppx1 = (anchura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(anchura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos((inclinacion+60) * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin((inclinacion+60) * Math.PI/180) + ppy1;
  ctx.save();
  
  for(t = 0; t < 22; t = t+2){
    if(t == 0){
      caja[0] = px1;
      caja[1] = py1;
    }
    else{
      px1 = caja[t-2];
      py1 = caja[t-1];
      px2 = d_caja[j] * Math.cos(g_caja[j] * Math.PI/180) + px1;
      py2 = -d_caja[j] * Math.sin(g_caja[j] * Math.PI/180) + py1;
      j++;
      caja[t] = px2;
      caja[t+1] = py2;
    }
  }
  
  ctx.setLineDash([0]); 
  ctx.beginPath();
  ctx.moveTo(ix, iy);
  ctx.lineTo(ox, oy);
  ctx.closePath();
  ctx.stroke();
  for(i = 0; i < caja.length-2; i = i+2){
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap="round";
    ctx.strokeStyle = 'rgba(0, 0, 0, 1.0)';    
    ctx.setLineDash([0]);    
    ctx.beginPath();
    ctx.moveTo(caja[i], caja[i+1]);
    ctx.lineTo(caja[i+2], caja[i+3]);
    ctx.stroke();
  }
  var imagen = new Image();
  imagen.src ='../images/M.svg';
  imagen.onload = function(){
    ctx.drawImage(imagen, ox-anchura/2, oy+altura/2, (imagen.width*equivalencia)/escala, (imagen.height*equivalencia)/escala);
  }
  
  ctx.restore();
}

function dibujarCaja(puntero, angulo, distancia, separacion){
  var ix = 100;
  var iy = 300;
  
  
  var ox = ix;
  var oy = iy+15;
  var altura = 50;
  var anchura = 36;
  var profundidad = 20;
  var inclinacion = 150;
  var caja = [];
  var g_caja = [330, 270, 150, 90, 30, 330, 270, 210, 90, 30];
  var d_caja = [36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;
  
  var ppx1 = (anchura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(anchura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  //var ppx2 = (anchura) * Math.cos((inclinacion-180) * Math.PI/180) + ppx1;
  //var ppy2 = -(anchura) * Math.sin((inclinacion-180) * Math.PI/180) + ppy1;
  var px1 = (profundidad/2) * Math.cos((inclinacion+60) * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin((inclinacion+60) * Math.PI/180) + ppy1;
  ctx.save();
  
  for(t = 0; t < 22; t = t+2){
    if(t == 0){
      caja[0] = px1;
      caja[1] = py1;
    }
    else{
      px1 = caja[t-2];
      py1 = caja[t-1];
      px2 = d_caja[j] * Math.cos(g_caja[j] * Math.PI/180) + px1;
      py2 = -d_caja[j] * Math.sin(g_caja[j] * Math.PI/180) + py1;
      j++;
      caja[t] = px2;
      caja[t+1] = py2;
      //console.log('caja: ' +g_caja[j]);
    }
    //console.log('bucle: '+t+' '+caja[t]+ ' ' +caja[t+1]+ ' ' +g_caja[j]);
  }
  
  ctx.setLineDash([0]); 
  ctx.beginPath();
  ctx.moveTo(ix, iy);
  ctx.lineTo(ox, oy);
  ctx.closePath();
  ctx.stroke();
  for(i = 0; i < caja.length-2; i = i+2){
    ctx.lineWidth = 2;
    ctx.lineJoin = "round";
    ctx.lineCap="round";
    ctx.strokeStyle = 'rgba(0, 0, 0, 1.0)';    
    ctx.setLineDash([0]);    
    ctx.beginPath();
    ctx.moveTo(caja[i], caja[i+1]);
    ctx.lineTo(caja[i+2], caja[i+3]);
    ctx.stroke();
  }
  
  
  /*font-family 'grades'
        content '\e905'
        font-size 45px
        display inline-block*/
  
  //ctx.font = '24px grades';
  //ctx.fillText('\e905', ox-anchura/2, oy+altura-7);
  var imagen = new Image();
  imagen.src ='../images/M.svg';
  imagen.onload = function(){
    ctx.drawImage(imagen, ox-anchura/2, oy+altura/2);
  }
  
  
  
  /*ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.strokeStyle = 'rgba(15, 93, 70, 0.2)';
  ctx.setLineDash([0]);
  ctx.beginPath();
  ctx.moveTo(ox, oy);
  ctx.lineTo(ppx1, ppy1);
  ctx.closePath();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(ppx1, ppy1);
  ctx.lineTo(ppx2, ppy2);
  ctx.closePath();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(ppx2, ppy2);
  ctx.lineTo(px1, py1);
  ctx.closePath();
  ctx.stroke();*/
  ctx.restore();
}

function dibujarMarcadores(event){
  obtenerCoords(event);
  //recta = [0,0,0,0];
  //recta = obtenerRecta();
  if(edit)
    puntero = obtenerRecta();
  if(puntero > -1){
    //console.log("GGG: "+ recta[0]+ " "+ recta[1]+ " "+ recta[2]+ " "+ recta[3]);
    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(point[i],point[i+1],5,0,(Math.PI/180)*360,true);
    var Xap = point[i+2]+5 * Math.cos((Math.PI/180)*0);
    var Yap = point[i+3]+5 * Math.sin((Math.PI/180)*0);
    ctx.moveTo(Xap, Yap);
    ctx.arc(point[i+2],point[i+3],5,0,(Math.PI/180)*360,false);
    ctx.closePath();

    //rgb(74, 123, 62)
    ctx.fillStyle = 'rgb(54, 93, 44)';
    //ctx.fillStyle = 'rgb(255, 157, 0)';
    ctx.fill();
    ctx.restore();
    return true;
  }

  return false;
}


function getRecta(x, y, tolerancia){
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
        tol = tolerancia,//5,
        puntero = -1;
        
  for(i = 0; i < point.length-2; i=i+2){
    P1 = (y-point[i+1])*(point[i+2]-point[i]);
    P2 = (point[i+3]-point[i+1])*(x-point[i]);
    A = point[i+3]-point[i+1];
    B = -point[i+2]+point[i];
    NUM = P1-P2;
    COS = Math.sqrt(Math.pow(A,2)+Math.pow(B,2));
    DIS = Math.abs(NUM)/COS;
    
    if(DIS < tol){
      //console.log('interseccion recta: '+((i/2)+1));
      //inter = true;
      SUPx = Math.max(point[i], point[i+2]);
      INFx = Math.min(point[i], point[i+2]);
      SUPy = Math.max(point[i+1], point[i+3]);
      INFy = Math.min(point[i+1], point[i+3]);

      if((INFx-tol <= x && x<=SUPx+tol) && (INFy-tol <= y && y <= SUPy+tol))
      {
        //console.log('acotado en recta: '+((i/2)+1));
        //cota = true;
        //RECTA = [point[i], point[i+1], point[i+2], point[i+3]];
        puntero = i;
        break;
      }
    }
  };
  return puntero;
      
}

function obtenerRecta(){
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
        puntero = -1;
        //inter = false,
        //cota =false,
        //RECTA = [0,0,0,0];
        
  for(i = 0; i < point.length-2; i=i+2){
    P1 = (y-point[i+1])*(point[i+2]-point[i]);
    P2 = (point[i+3]-point[i+1])*(x-point[i]);
    A = point[i+3]-point[i+1];
    B = -point[i+2]+point[i];
    NUM = P1-P2;
    COS = Math.sqrt(Math.pow(A,2)+Math.pow(B,2));
    DIS = Math.abs(NUM)/COS;
    
    if(DIS < tol){
      //console.log('interseccion recta: '+((i/2)+1));
      //inter = true;
      SUPx = Math.max(point[i], point[i+2]);
      INFx = Math.min(point[i], point[i+2]);
      SUPy = Math.max(point[i+1], point[i+3]);
      INFy = Math.min(point[i+1], point[i+3]);

      if((INFx-tol <= x && x<=SUPx+tol) && (INFy-tol <= y && y <= SUPy+tol))
      {
        //console.log('acotado en recta: '+((i/2)+1));
        //cota = true;
        //RECTA = [point[i], point[i+1], point[i+2], point[i+3]];
        puntero = i;
        break;
      }
    }
    //else
      //console.log('nada'+DIS);
  }
  //console.log('-----------------------------------------');
  //console.log("GGG: "+ RECTA[0]+ " "+ RECTA[1]+ " "+ RECTA[2]+ " "+ RECTA[3]);
    //return RECTA;
  return puntero;
      
}

function obtenerCoords(event){

    if (event.x != undefined && event.y != undefined){
      x = event.x+ document.body.scrollLeft + document.documentElement.scrollLeft;;
      y = event.y + document.body.scrollTop + document.documentElement.scrollTop;
    }else{// Firefox
      x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
  //alert(x+ ' '+y);
}


function getCords(e){
  var coordenada = [-1, -1];
  if (e.x != undefined && e.y != undefined){
      coordenada[0] = e.x+ document.body.scrollLeft + document.documentElement.scrollLeft;;
      coordenada[1] = e.y + document.body.scrollTop + document.documentElement.scrollTop;
    }else{// Firefox
      coordenada[0] = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      coordenada[1] = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
  coordenada[0] -= canvas.offsetLeft;
  coordenada[1] -= canvas.offsetTop;
  return coordenada;
}

function getCordsTouch(e){
  var coordenada = [-1, -1];
  //Comprobamos si hay varios eventos del mismo tipo
  if (e.targetTouches.length == 1) { 
    var touch = e.targetTouches[0]; 
    // con esto solo se procesa UN evento touch
    //touch.pageX;
    //touch.pageY;
    coordenada[0] = touch.pageX-canvas.offsetLeft-document.body.scrollLeft-document.documentElement.scrollLeft+scrollX;
    coordenada[1] = touch.pageY-canvas.offsetTop-document.body.scrollTop-document.documentElement.scrollTop+scrollY;
  }
  return coordenada;
}

//canvas.addEventListener("onclick", editarRecta, false);

canvas.addEventListener("mousedown", function(e){
  corXY = getCords(e);
  mypointer = getRecta(corXY[0], corXY[1], 5);
  
  if(mypointer>-1 && click_count == 0){
    drag=true;
    click_count++;
    antpointer= mypointer;
  }
  /*if(mypointer>-1 && click_count ==2){
    drag = false;
    alert(mypointer)
  }*/
    
  //alert(getCords(event)[0]+' '+getCords(event)[1]);
  /*click_count++;
  if(click_count==1){
    
  }
  if(click_count==2){
    var cordX, cordY;
    if (event.x != undefined && event.y != undefined){
      cordX = event.x+ document.body.scrollLeft + document.documentElement.scrollLeft;;
      cordY = event.y + document.body.scrollTop + document.documentElement.scrollTop;
    }else{// Firefox
      cordX = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      cordY = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    cordX -= canvas.offsetLeft;
    cordY -= canvas.offsetTop;
    if(cordX==corX &&cordY==corY)
      console.log('doble click')
    click_count=0;
  }*/
  
  
  //drag = true;
  
  
  //ctx.fillRect(x1, y1, 10, 10);
  
  
  //corXY = [x1, y1];
}/*editarRecta*/, false);

canvas.addEventListener("mousemove", function(e){
  if(drag==true){
    //console.log((getCords(e)[0]+corXY[0])+' '+(getCords(e)[1]+corXY[1]));
    
    var incX = getCords(e)[0] - corXY[0];
    var incY = getCords(e)[1] - corXY[1];
    //recalcularRuta(point[0]+incX, point[1]+incY);
    recalcularRuta(x1+incX, y1+incY);
    
    //console.log((x1+incX)+'    '+(y1+incY));
    
    //ctx.clearRect(0,0,canvas.width, canvas.height);
    /*if(x1+incX<0)
      ctx.fillRect(0, y1+incY, 10, 10);
    if(y1+incY<0)
      ctx.fillRect(x1+incX, 0, 10, 10);
    if(x1+incX>=canvas.width-10)
      ctx.fillRect(canvas.width-10, y1+incY, 10, 10);
    if(y1+incY>=canvas.height-10)
      ctx.fillRect(x1+incX, canvas.height-10, 10, 10);*/
    
    //ctx.fillRect(x1+incX, y1+incY, 10, 10);
  }
}, false);

canvas.addEventListener("mouseup", function(e){
  var incX = getCords(e)[0] - corXY[0];
  var incY = getCords(e)[1] - corXY[1];
  drag=false;
  alert(mypointer);
  mypointer = -1;
  antpointer = -1;
  click_count = 0;
  x1 = x1+incX;
  y1 = y1+incY;
  
  //var xyTemp = getCords(e);
  //console.log(xyTemp[0]+' '+xyTemp[1]);
});

canvas.addEventListener("touchstart", function(e){
  //alert(getCordsTouch(event)[0]+'    '+getCordsTouch(event)[1]);
  //console.log(getCordsTouch(event)[0]+'    '+getCordsTouch(event)[1]);
  drag = true;
  corXY = getCordsTouch(e);
  ctx.fillRect(x1, y1, 10, 10);
}, false);

canvas.addEventListener("touchmove",function(e){
  //console.log('moviste')
  //console.log(getCordsTouch(event)[0]+'    '+getCordsTouch(event)[1]);
  if(drag==true){
    //console.log((getCords(e)[0]+corXY[0])+' '+(getCords(e)[1]+corXY[1]));
    
    var incX = getCordsTouch(e)[0] - corXY[0];
    var incY = getCordsTouch(e)[1] - corXY[1];
    
    //console.log((x1+incX)+'    '+(y1+incY));
    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillRect(x1+incX, y1+incY, 10, 10);
  }
}, false);

canvas.addEventListener("touchend",function(e){
  //console.log('moviste')
  //console.log(getCordsTouch(event)[0]+'    '+getCordsTouch(event)[1]);
  //console.log(corX+'    '+corY);
  drag=false; 
  var xyTemp = getCords(e);
  console.log(xyTemp[0]+' '+xyTemp[1]);
}, false);

document.onkeydown = KeyPress;