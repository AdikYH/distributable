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
      g_30.className = 'angle g-30 clicked';
      g_90.className = 'angle g-90';
      g_150.className = 'angle g-150';
      g_210.className = 'angle g-210';
      g_270.className = 'angle g-270';
      g_330.className = 'angle g-330';
      grade = 30;
      break;
  }
  
  //console.log(grade);
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
    default:
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
      typeTub = 'et';
      diametro = '12';
      break;
  }
  
  //console.log(newTypeTub, newDiametro);
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
    tub = [],    
    tag = [],    
    componentes = [],    
    contador = 0,
    grade = 30,
    typeTub = 'vt',
    diametro = '0',
    puntero = -1,
    distance = 0,
    recta = [0,0,0,0],
    edit = false,
    drag = false,
    moveTag = false,
    corXY = [-1, -1],
    //newCorXY = [-1, -1],
    click_count = 0,
    mypointer = -1,
    myTagPointer = -1,
    antpointer = -1,
    antTagPointer = -1,
    suma_34 = 0,
    suma_12 = 0,
    suma_1 = 0,
    suma_14 = 0,
    suma_total = 0,
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
    slct_aumentar = document.getElementById('slctAumentar'),
    chkbx_Inicio = document.getElementById('chkbx_Inicio'),
    chkbx_Body = document.getElementById('chkbx_Body'),
    chkbx_Fin = document.getElementById('chkbx_Fin'),
    drC_header = document.getElementById('dr_c_header'),
    drC_select = document.getElementById('dr_c_select'),
    drC_check = document.getElementById('dr_c_check'),
    sum_14 = document.getElementById('suma_14'),
    sum_1 = document.getElementById('suma_1'),
    sum_12 = document.getElementById('suma_12'),
    sum_34 = document.getElementById('suma_34'),
    sum_total = document.getElementById('suma_total'),
    
    myPointData = document.getElementById('myPointData'),
    myGradosData = document.getElementById('myGradosData'),
    myDistanciaData = document.getElementById('myDistanciaData'),
    myTubData = document.getElementById('myTubData'),
    myTagData = document.getElementById('myTagData'),
    myComponentesData = document.getElementById('myComponentesData');

    //dr_rt = document.getElementById('dr_rect'),
    //dr_tf = document.getElementById('dr_tf');
  

  //point[0] = x1;
  //point[1] = y1;

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
//dr_tf.addEventListener('click', function(){dibujarCaja(puntero, grade, distance, 5);dibujarTuberiaForro(puntero, grade, distance, 5);alert(puntero + ' '+ grade + ' '+ distance + ' ' + typeTub)})

function init(){
  setGrade(30);
  setTub('et', '12');
  ctx.scale(1,1);
  //point[0] = x1;
  //point[1] = y1;
  
  try{
    point = JSON.parse(myPointData.value);
    grados = JSON.parse(myGradosData.value);
    distancia = JSON.parse(myDistanciaData.value);
    tub = JSON.parse(myTubData.value);
    tag = JSON.parse(myTagData.value);
    componentes = JSON.parse(myComponentesData.value);
    
    dibujarRuta(point.length);
  }
  catch(exception){
    /*point[0] = x1;
    point[1] = y1;*/
    point = [x1, y1];
    grados = [];
    distancia = [];
    tub = [];
    tag = [];
    componentes = [];
  }
  
  /*alert('cargado');
  ctx.beginPath();
  ctx.fillRect(0,0,100,100);
  ctx.fill();
  ctx.closePath();*/
  
}

function limpiar(){
  point = [100, 300];
  grados = [];
  distancia = [];
  tub = [];
  tag = [];
  componentes = [];
  dibujarRuta(point.length);
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
    if(grados.length>0 && Math.abs(grade-grados[grados.length-1])==0 || Math.abs(grade-grados[grados.length-1])==180)
      alert('Cambie el valor del angulo para el siguiente trazo');
    else{
      point.push(parseFloat(a));
      point.push(parseFloat(b));
      grados.push(grade);
      tub.push(typeTub);
      tub.push(diametro);
      
      var eTag = '';
      if(tub.length>0&&tub[tub.length-1].length==2)
        eTag = 'L='+distancia[distancia.length-1]+' D='+tub[tub.length-1][0]+'/'+tub[tub.length-1][1]+'"AG';
      else
        eTag = 'L='+distancia[distancia.length-1]+' D='+tub[tub.length-1]+'"AG';
      //var xTag = ;
      //var yTag = ;
      tag.push(eTag);
      
      //150
      //210
      var mySeparationPoint = getPointSeparacion(20, grados[grados.length-1], point[point.length-4], point[point.length-3]);
        
      tag.push(mySeparationPoint[0]);
      tag.push(mySeparationPoint[1]);
      
      //alert('Introducidos ' +distancia[distancia.length-1]+' '+ grados[grados.length-1]+ ' ' +point[point.length-2]+' '+point[point.length-1]);
    }
    dibujarRuta(point.length);
  }
}

function getPointSeparacion(separacion, grado, x, y){
  var myPx1 = separacion * Math.cos((grado+45) * Math.PI/180) + x;
  var myPy1 = -separacion * Math.sin((grado+45) * Math.PI/180) + y;
  return [myPx1, myPy1];
}

function recalcularRuta(inicioX, inicioY){
  
  var newRute = [];
  //var newTag = [];
  
  for(i = 0; i < point.length-1; i = i + 2){
    if(i==0){
      newRute[0] = inicioX;
      newRute[1] = inicioY;
      //console.log(inicioX+'   '+inicioY);
    }
    else{
      //(i/2)-1
      var p = (i/2)-1;
      
      var nDistance = (distancia[p] * 37.79527559055)/50;
      var x2 = nDistance * Math.cos(grados[p] * Math.PI/180)+newRute[i-2];
      var y2 = -nDistance * Math.sin(grados[p] * Math.PI/180)+newRute[i-1];
      
      var a = x2.toFixed(2);
      var b = y2.toFixed(2);
      
      
      //console.log('------------------------');
      //console.log(tag[p*3]);
      //console.log(parseFloat(tag[p*3+1]));
      //console.log('suma: '+(parseFloat(tag[p*3+1]+masX)));
      //console.log(parseFloat(tag[p*3+2]));
      //console.log('suma: '+(parseFloat(tag[p*3+2]+masY)));
      
      /*tag[p*3+1] = *///console.log(tag[p*3+1]); console.log( newRute[newRute.length-2]);
      /*tag[p*3+2] = *///console.log(tag[p*3+2]); console.log( newRute[newRute.length-1]);
      
      //newTag.push(tag[p*3]);
      //newTag.push(parseFloat(tag[p*3+1] + masX));
      //newTag.push(parseFloat(tag[p*3+2] + masY));
      
      newRute.push(parseFloat(a));
      newRute.push(parseFloat(b));
      //console.log(p)
    }
    //console.log(i)
  }
  point = newRute;
  //tag = newTag;
  
  dibujarRuta(point.length);
      
}

function dibujarComponentes(myArray, puntero){
  //ctx.fillRect(300*puntero, 300, 50, 50);
  //ctx.fill();
  
  for(t=0; t<myArray.length; t++){
    console.log('elemento: '+myArray[t])
    switch(myArray[t]){
      case('medidor'):
        //ctx.save();
        dibujarMedidor(50, 37.79527559055, point[puntero*2], point[(puntero*2)+1]);
        //ctx.restore();
        break;
      case('tubForro'):
        dibujarTuberiaForro(puntero*2, grados[puntero], (distancia[puntero]*37.79527559055)/50, 5)
        break;
    }
  }
  //console.log('saliendo');
}

function dibujarRuta(tope){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  //ctx.save();
  //dibujarMedidor(50, 37.79527559055, 100, 300);
  //dibujarMedidor(50, 37.79527559055, point[0], point[1]);
  for(i = 3; i < tope; i = i+2){
    
    if(componentes[(i-3)/2] == undefined)
      componentes[(i-3)/2] = [];
    
    dibujarComponentes(componentes[(i-3)/2], ((i-3)/2));
    
    ctx.lineWidth = 1;
    ctx.lineJoin = "round";
    ctx.lineCap="round";
    ctx.strokeStyle = 'rgba(0, 0, 0, 1.0)';
    //ctx.lineDashOffset = 2;
    
    //alert(tub[(i-3)+1] )
    suma_34 = 0;
    suma_12 = 0;
    suma_1 = 0;
    suma_14 = 0;
    suma_total = 0;
    for(m = 1 ; m<point.length; m = m+2){
      //console.log(tub[m]);
      
      switch(tub[m]){
        case('34'):
        suma_34 = suma_34 + distancia[(m-1)/2]
        sum_34.innerHTML = suma_34;
        break;
        case('12'):
        suma_12 = suma_12 + distancia[(m-1)/2]
        sum_12.innerHTML = suma_12;
        break;
        case('1'):
        suma_1 = suma_1 + distancia[(m-1)/2]
        sum_1.innerHTML = suma_1;
        break;
        case('14'):
        suma_14 = suma_14 + distancia[(m-1)/2]
        sum_14.innerHTML = suma_14;
        break;
      }
    }
    
    sum_total.innerHTML = suma_1 +suma_12 +suma_14 + suma_34;
    
    if(tub[(i-3)] =='vt')
      ctx.setLineDash([0]);
    else
      ctx.setLineDash([2, 6]);
    ctx.beginPath();
    ctx.moveTo(point[i-3],point[i-2]);
    ctx.lineTo(point[i-1],point[i-0]);
    ctx.closePath();
    ctx.stroke();
    
    ctx.save();
    ctx.font = "10pt Arial";
    ctx.lineWidth = '2';
    //ctx.strokeStyle='#369';
    ctx.fillStyle = "#000";
    
    /*var tag = '';
    if(tub[tub.length-1].length==2)
      tag = 'L='+distancia[distancia.length-1]+' D='+tub[tub.length-1][0]+'/'+tub[tub.length-1][1]+'"AG';
    else
      tag = 'L='+distancia[distancia.length-1]+' D='+tub[tub.length-1]+'"AG';
    */
    //ctx.translate(canvas.width/2, canvas.height/2);
    var npointer = ((i-3)/2)*3;
    
    ctx.translate(tag[npointer+1], tag[npointer+2]);
    //console.log(tag[npointer+1] + tag[nptubointer+2]);
    //console.log(tag[npointer+3] + tag[npointer+4]);
    
    switch (grados[(i-3)/2]){
      case 210:
        ctx.rotate(-30*Math.PI/180);
        break;
      case 150:
        ctx.rotate(-330*Math.PI/180);
        break;
      default:
        ctx.rotate(-grados[(i-3)/2]*Math.PI/180);
        break;
    }
    
    //ctx.translate(-canvas.width/2, -canvas.height/2);
    ctx.translate(-tag[npointer+1], -tag[npointer+2]);
    
    ctx.fillText(tag[npointer], tag[npointer+1], tag[npointer+2])//tag,point[i-3],point[i-2]);
    //ctx.strokeText("Texto l\u00ednea",20,80);
    ctx.restore();
    
  }
  //ctx.restore();
  
  myPointData.value = JSON.stringify(point, null, 0) || '';
  myGradosData.value = JSON.stringify(grados, null, 0) || '';
  myDistanciaData.value = JSON.stringify(distancia, null, 0) || '';
  myTubData.value = JSON.stringify(tub, null, 0) || '';
  myTagData.value = JSON.stringify(tag, null, 0) || '';
  myComponentesData.value = JSON.stringify(componentes, null, 0) || '';
  //console.log(JSON.stringify(componentes, null, 0));
  
}

function KeyPress(e) {
  //var aux = [];
  //var aux_g = [];
  //var aux_tt = [];
  //var aux_d = [];
  var evtobj = window.event? event : e
  if (evtobj.keyCode == 90 && evtobj.ctrlKey) {
    //alert('control + Z');
    if(point.length>2){
      point.pop();
      point.pop();
    }
    
    /*for(i = 0; i < point.length-2; i++){
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
    */
    
    //console.log(grados.pop());
    tub.pop();
    tub.pop();
    tag.pop();
    tag.pop();
    tag.pop();
    grados.pop();
    
    setGrade(grados[grados.length-1]);
    setTub(tub[tub.length-2], tub[tub.length-1]);
    
    dibujarRuta(point.length);
    btn_dibujar.value = 'Dibujar';
    btn_dibujar.onclick = dibujar;
    edit = true;
  }
}

function editarRecta(e){
  /*if(dibujarMarcadores(event)){
    drag = true;
    txt_ditance.value = distancia[puntero/2];
    setGrade(grados[puntero/2]);
    setTub(tub[puntero], tub[puntero+1]);
    btn_dibujar.value = ' Editar ';
    btn_dibujar.onclick = editar;
    edit = false;
    dr_cp.style.display = 'inline';
    dr_rt.style.display = 'inline';
  } */  
  
  var incX = getCords(e)[0] - corXY[0];
  var incY = getCords(e)[1] - corXY[1];
  drag=false;
  if(mypointer>-1 && click_count ==2){
    //alert(mypointer);
    dibujarRuta(point.length);
    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(point[mypointer],point[mypointer+1],5,0,(Math.PI/180)*360,true);
    var Xap = point[i+2]+5 * Math.cos((Math.PI/180)*0);
    var Yap = point[i+3]+5 * Math.sin((Math.PI/180)*0);
    ctx.moveTo(Xap, Yap);
    ctx.arc(point[mypointer+2],point[mypointer+3],5,0,(Math.PI/180)*360,false);
    ctx.closePath();
    //rgb(74, 123, 62)
    ctx.fillStyle = 'rgb(54, 93, 44)';
    //ctx.fillStyle = 'rgb(255, 157, 0)';
    ctx.fill();
    ctx.restore();
    
    //console.log(mypointer/2);
    txt_ditance.value = distancia[mypointer/2];
    setGrade(grados[mypointer/2]);
    setTub(tub[mypointer], tub[mypointer+1]);
    
    
    drC_header.className = 'menu-component visto';
    drC_select.className = 'menu-component visto';
    drC_check.className = 'menu-component visto';
    
    
    btn_dibujar.style.background = '#FF9D00';//'#00A186'; //'#00BD9B'; // '#F15300';
    btn_dibujar.value = ' Editar ';
    btn_dibujar.onclick = editar;
    edit = true;
    /*dr_cp.style.display = 'inline';
    dr_rt.style.display = 'inline';*/
    click_count = 0;
    
  }
  
  moveTag = false;
  tagPointer = -1;
  
  puntero = mypointer;
  //mypointer = -1;
  //antpointer = -1;
    
  
  x1 = x1+incX;
  y1 = y1+incY;
  
}

function editar(){
  distance = parseFloat(document.getElementById("distance").value);
  
  if(distance > 0 && distance != distancia[puntero/2])
    distancia[puntero/2] = distance;
  
  if(grade != grados[puntero/2])
    grados[puntero/2] = grade;
  
  if(typeTub != tub[puntero])
    tub[puntero] = typeTub;
  
  if(diametro != tub[puntero+1])
    tub[puntero+1] = diametro;
  
  var eTag = '';
  
  console.log(tub[puntero])
  
  if(tub[puntero+1].length==2)
    eTag = 'L='+distancia[puntero/2]+' D='+tub[puntero+1][0]+'/'+tub[puntero+1][1]+'"AG';
  else
    eTag = 'L='+distancia[puntero/2]+' D='+tub[puntero+1]+'"AG';
  
  tag[(puntero/2)*3] = eTag;
  console.log(eTag);
  
  for(i = puntero; i < point.length-2; i=i+2){
    
    var newDistance = (distancia[i/2] * 37.79527559055)/50;
    
    var px1 = point[i];
    var py1 = point[i+1];
    var px2 = newDistance * Math.cos(grados[i/2] * Math.PI/180) + point[i];
    var py2 = -newDistance * Math.sin(grados[i/2] * Math.PI/180) + point[i+1];
    point[i+2] = parseFloat(px2.toFixed(2));
    point[i+3] = parseFloat(py2.toFixed(2));
    //console.log(i);
  }
  
  
  dibujarRuta(point.length)
  
  
  drC_header.className = 'menu-component';
  drC_select.className = 'menu-component';
  drC_check.className = 'menu-component';
  
  btn_dibujar.style.background = '#365D2C';
  btn_dibujar.value = 'Dibujar';
  btn_dibujar.onclick = dibujar;
  //dr_cp.style.display = 'none';
  //dr_rt.style.display = 'none';
  slct_aumentar.value = 'none';
  chkbx_Inicio.checked = false;
  chkbx_Inicio.disabled = true;
  chkbx_Body.checked = false;
  chkbx_Body.disabled = true;
  chkbx_Fin.checked = false;
  chkbx_Fin.disabled = true;
  edit = false;
}

function existe(myArray, myString){
  for(j = 0; j < myArray.length; j++)
    if(myArray[j] == myString)
      return true;
  return false;
}

function changeSelect(){
  //console.log(slct_aumentar.value);
  
  var selectValue = slct_aumentar.value;
  
  switch(selectValue){
    case('tubForro'):
      if(puntero >-1 && existe(componentes[puntero/2], 'tubForro'))
        chkbx_Body.checked = true;
      else
        chkbx_Body.checked = false;
      
      chkbx_Inicio.disabled = true;
      chkbx_Body.disabled = false;
      chkbx_Fin.disabled = true;
      //console.log('dibuja tuberia en '+ puntero)
      break;
    case('medidor'):
      /*f(puntero >-1 && existe(componentes[puntero/2], 'medidor'))
        chkbx_Inicio.checked = true;
      else
        chkbx_Inicio.checked = false;*/
      chkbx_Inicio.disabled = false;
      chkbx_Body.disabled = true;
      chkbx_Fin.disabled = true;
      break;
    case('te'):
      //chkbx_Inicio.disabled = 
      //chkbx_Body.disabled = 
      //chkbx_Fin.disabled = 
      chkbx_Inicio.disabled = true;
      chkbx_Body.disabled = true;
      chkbx_Fin.disabled = false;
      break;
    case('codoreductor'):
      //chkbx_Inicio.disabled = 
      //chkbx_Body.disabled = 
      //chkbx_Fin.disabled = 
      chkbx_Inicio.disabled = false;
      chkbx_Body.disabled = true;
      chkbx_Fin.disabled = true;
      break;
    case('reduccion'):
      //chkbx_Inicio.disabled = 
      //chkbx_Body.disabled = 
      //chkbx_Fin.disabled = 
      chkbx_Inicio.disabled = false;
      chkbx_Body.disabled = true;
      chkbx_Fin.disabled = true;
      break;
    case('valvulaMando'):
      //chkbx_Inicio.disabled = 
      //chkbx_Body.disabled = 
      //chkbx_Fin.disabled = 
      chkbx_Inicio.disabled = true;
      chkbx_Body.disabled = false;
      chkbx_Fin.disabled = true;
      break;
    default:
      //chkbx_Inicio.disabled = 
      //chkbx_Body.disabled = 
      //chkbx_Fin.disabled = 
      chkbx_Inicio.disabled = true;
      chkbx_Body.disabled = true;
      chkbx_Fin.disabled = true;
      break;
  }
}

function incInicio(){
  slct_aumentar.value;
  //console.log('añadiendose a Body '+slct_aumentar.value+' puntero '+puntero + ' checado '+ chkbx_Body.checked);
  
  if(chkbx_Inicio.checked){
    componentes[puntero/2].push(slct_aumentar.value);
    dibujarRuta(point.length);
  }
  else{
    var myCAux = [];
    for(c = 0; c < componentes[puntero/2].length; c++)
      if(componentes[puntero/2][c] != slct_aumentar.value)
        myCAux.push(componentes[puntero][c]);
    
    componentes[puntero/2] = myCAux;
    
    dibujarRuta(point.length);
  }
}

function incBody(){
  slct_aumentar.value;
  
  //console.log('añadiendose a Body '+slct_aumentar.value+' puntero '+puntero + ' checado '+ chkbx_Body.checked);
  if(chkbx_Body.checked){
    /*ctx.save();
    ctx.beginPath();
    ctx.fillRect(300, 200, 50, 60);
    ctx.closePath();
    ctx.fill();
    ctx.restore();*/
    
    componentes[puntero/2].push(slct_aumentar.value);
    dibujarRuta(point.length);
    
    //dibujarTuberiaForro(puntero, grados[puntero/2], (distancia[puntero/2]*37.79527559055)/50, 5)
    
  }
  else{
    var myCAux = [];
    for(c = 0; c < componentes[puntero/2].length; c++)
      if(componentes[puntero/2][c] != slct_aumentar.value)
        myCAux.push(componentes[puntero][c]);
    
    
    componentes[puntero/2] = myCAux;
    
    ctx.clearRect(0,0,canvas.width, canvas.height)
    dibujarRuta(point.length);
  }
}

function incFin(){
  slct_aumentar.value;
  
  if(chkbx_Fin.checked){
    componentes[puntero/2].push(slct_aumentar.value);
    dibujarRuta(point.length);
  }
  else{
    var myCAux = [];
    for(c = 0; c < componentes[puntero/2].length; c++)
      if(componentes[puntero/2][c] != slct_aumentar.value)
        myCAux.push(componentes[puntero][c]);
    componentes[puntero/2] = myCAux;
    
    dibujarRuta(point.length);
  }
}

function dibujarTuberiaForro(puntero, angulo, distancia, separacion){
  var px1 = separacion * Math.cos((angulo-45) * Math.PI/180) + point[puntero];
  var py1 = -separacion * Math.sin((angulo-45) * Math.PI/180) + point[puntero+1];
  
  var px2 = (distancia-(separacion*2)) * Math.cos(angulo * Math.PI/180) + px1;
  var py2 = -(distancia-(separacion*2)) * Math.sin(angulo * Math.PI/180) + py1;
  
  ctx.save();
  ctx.lineWidth = 1;//2;
  ctx.strokeStyle = 'black';
  ctx.strokeStyle = 'black';//rgb(54, 93, 44)';
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
  //console.log(esca);
  //console.log(equiv);
  //console.log(origen_x);
  //console.log(origen_y);
  //ctx.fillRect(300*puntero, 300, 50, 50);
  //ctx.fill();
  
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
  //ctx.save();
  
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
  
  ctx.lineWidth = 1;
  ctx.lineJoin = "round";
  ctx.lineCap="round";
  ctx.strokeStyle = 'rgba(0, 0, 0, 1.0)';    
  ctx.setLineDash([0]);  
  
  for(l = 0; l < caja.length-2; l = l+2){
    
    ctx.beginPath();
    ctx.moveTo(caja[l], caja[l+1]);
    ctx.lineTo(caja[l+2], caja[l+3]);
    ctx.closePath();
    ctx.stroke();
  }
  var imagen = new Image();
  imagen.src ='images/M.svg';
  imagen.onload = function(){
    ctx.drawImage(imagen, ox-anchura/2, oy+altura/2, (imagen.width*equivalencia)/escala, (imagen.height*equivalencia)/escala);
  }
  
  //ctx.restore();
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

function getTag(x, y){
  tagPointer = -1;
  for(i = 0; i < point.length/2-1; i++){
    if((x > tag[i*3 + 1] - 5 && x < tag[i*3 + 1] + 5)  && (y > tag[i*3 + 2] -5 && y < tag[i*3 + 2] +5)){
      //console.log('interseccion');
      tagPointer = i;
      break;
    }
  }
  return tagPointer;
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

function guardar(){
  //alert('hola');
  console.log('--------------------------------');
  console.log(point);
  console.log(grados);
  console.log(distancia);
  console.log(tub);
  console.log(tag);
  console.log(componentes);
}
//canvas.addEventListener("onclick", editarRecta, false);

canvas.addEventListener("mousedown", function(e){
  
  if(edit==false){
    
    click_count++;
  
    corXY = getCords(e);
    mypointer = getRecta(corXY[0], corXY[1], 3);//numero
    myTagPointer = getTag(corXY[0], corXY[1]);//numero

    if(mypointer > -1 && click_count==1){
      drag=true;
      //click_count++;
      antpointer = mypointer;
      //antTagPointer = myTagPointer; 
      console.log('puntero:) '+antpointer);

    }
    else if(myTagPointer > -1 && click_count==1){
      //console.log(myTagPointer)
      moveTag = true;
    }
    else if(antpointer != mypointer && click_count==2){
      click_count = 0;
      console.log('puntero: '+antpointer);
      console.log('puntero: '+mypointer);
    }
    if(click_count == 3)
      click_count = 1
    console.log(click_count);
    
  }
}, false);

canvas.addEventListener("mousemove", function(e){
  if(drag==true){
    var incX = getCords(e)[0] - corXY[0];
    var incY = getCords(e)[1] - corXY[1];
    
    recalcularRuta(x1+incX, y1+incY);
    click_count = 0;
  }
  if(moveTag == true){
    tag[myTagPointer*3+1] = getCords(e)[0];
    tag[myTagPointer*3+2] = getCords(e)[1];
    dibujarRuta(point.length);
    click_count = 0;
  }
}, false);

canvas.addEventListener("mouseup", editarRecta, false);

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