var setGrade = function(newGrade){
  grado = newGrade;
  switch(grado){
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
      grado = 30;
      break;
  }
  
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
  
}
var setDistance = function (newDistance){
  distancia = newDistance;
}

var grado = 30,
    typeTub = 'vt',
    diametro = '0',
    distancia = 0,
    grafo = new Array(),    
    ruta = new Array(),
    /*neoRuta = new Array(),*/
    /*miNeoRuta = new Array(),*/
    tab = new Object(),
    punto = new Object(),
    modo = 'dibujo',
    punteroDeDibujo = new Array(),
    
    puntoPartida = new Array(),
    trozoParaMover = new Array(),
    grafoEspejo = new Array(),
    
    minX= 1000,
    maxX= -1000,
    minY= 1000,
    maxY= -1000,
    
    limitadorDeMargen = true,
    
    svgNS = 'http://www.w3.org/2000/svg',
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
    txt_distancia = document.getElementById('distancia'),
    btn_dibujar = document.getElementById('drawer'),
    ctl_lienzoContainer = document.getElementById('lienzo-container'),
    ctl_lienzoHoja = document.getElementById('lienzo-hoja'),
    svg_lienzo = document.getElementById('miSVGLienzo'),
    controlRange = document.getElementById('controlRange'),
    valueRange = document.getElementById('valueRange'),
    controlScale = document.getElementById('controlScale'),
    valueScale = document.getElementById('valueScale'),
    btn_CrearLienzo = document.getElementById('botonCrearLienzo'),
    btn_EliminarLienzo = document.getElementById('botonEliminarLienzo'),
    ctl_lienzoBotonera = document.getElementById('lienzo-botonera'),
    btn_AdelanteLienzo = document.getElementById('botonAdelanteLienzo'),
    btn_AtrasLienzo = document.getElementById('botonAtrasLienzo'),
    ctl_adviceErrors = document.getElementById('adviceErrors'),
    txt_nameChanger = document.getElementById('nameChanger'),
    alert_Modal = document.getElementById('myModal'),
    btn_aceptarModal = document.getElementById('btn_aceptar'),
    btn_cancelarModal = document.getElementById('btn_cancelar'),
    detelePosition = -1,
    txt_modalMessage = document.getElementById('modal-message'),
    chckbx_Margen = document.getElementById('chckbxMargen'),
    ctl_modeCanvas = document.getElementById('modeCanvas');

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
btn_CrearLienzo.addEventListener('click', function(){crearLienzo()});
btn_EliminarLienzo.addEventListener('click', function(){eliminarLienzo()});
btn_AdelanteLienzo.addEventListener('click', function(){adelanteLienzo()});
btn_AtrasLienzo.addEventListener('click', function(){atrasLienzo()});

function init(){
  document.getElementById('loading').style.display = 'none';
  document.getElementById('lienzos').style.display = 'block';
  setGrade(30);
  setTub('et', '12');
  

  setValueScale(25)
  
  setControlScale(25)
  
  tab = new Object();
  tab.id = 'Hoja 0';
  tab.name = 'Hoja 0'
  tab.type = 'H';
  
  ruta[0] = tab;
  grafo[0] = ruta;
  
  
  //myGraphData
  
  copiarGrafo(grafo, grafoEspejo);
  
  iniciarLienzos();
  setValueRange(1.5);
  setControlRange(1.5);
  dibujarEnLienzo(0);
  
}

function cambiarGrosorLinea(range){
  for(chc = 0; chc < svg_lienzo.children.length; chc++){
    svg_lienzo.children[chc].style.strokeWidth = range;
  }
    
}

function setValueRange(range){
  valueRange.value = range
  cambiarGrosorLinea(range)
}

function setControlRange(range){
  controlRange.value = range
  cambiarGrosorLinea(range)
}

function setMarginControl(){
  //console.log(chckbx_Margen.checked);
  limitadorDeMargen = chckbx_Margen.checked;
}

function setValueScale(scale){
  console.log(scale)
  valueScale.value = scale
}

function setControlScale(scale){
  console.log(scale)
  controlScale.value = scale
}

function setMode(miModo){
  
  modo = miModo;
  
  while(ctl_modeCanvas.children.length > 0)
    ctl_modeCanvas.removeChild(ctl_modeCanvas.childNodes[0]);
  
  var titleMode = document.createElement('h1');
  
  switch(modo){
    case 'dibujo':
      titleMode.innerHTML = 'Modo dibujo';
      titleMode.style.color = 'rgb(144, 197, 63)';
      //titleMode.style.borderColor = 'rgb(144, 197, 63)';
      //ctl_modeCanvas.style.background = 'rgb(110, 149, 70)'//'rgb(74, 123, 62)';
      break;
    case 'edicion':
      titleMode.innerHTML = 'Modo edición';
      titleMode.style.color = 'rgb(255, 197, 0)';
      //titleMode.style.borderColor = 'rgb(255, 197, 0)';
      //ctl_modeCanvas.style.background = 'rgb(255, 157, 0)'//'rgb(255, 157, 0)'//rgb(196, 255, 0)'//'rgb(250, 198, 19)'//';
      break;
    case 'mover':
      titleMode.innerHTML = 'Modo movimiento';
      titleMode.style.color = 'rgb(213, 72, 27)';
      //titleMode.style.borderColor = 'rgb(255, 75, 58)';
      //ctl_modeCanvas.style.background = 'rgb(0, 153, 222)';
      break;
  }
  
  ctl_modeCanvas.appendChild(titleMode);
}

function iniciarLienzos(){
  var sw = 0;
  
  for(i = 0; i < grafo[0].length; i++){
    
    if(grafo[0][i].type == 'H'){
      var botonLienzo = document.createElement('div');
      
      if(sw == 0){
        botonLienzo.className = 'boton activo';
        txt_nameChanger.value = grafo[0][i].name;
        sw = 1;
      }
      else
        botonLienzo.className = 'boton';
      
      botonLienzo.id = grafo[0][i].id;
      botonLienzo.innerHTML = grafo[0][i].name;
      botonLienzo.setAttribute('onclick', 'cargarHoja(this.id)');
      
      
      ctl_lienzoBotonera.appendChild(botonLienzo);
    }
  }
  
}

function copiarGrafo(origen, destino){
  for(po = 0; po < origen.length; po++){
    destino[po] = new Array();
    for(poc = 0; poc < origen[po].length; poc++){
      if(origen[po][poc].type == 'P')
        destino[po][poc] = JSON.parse(JSON.stringify(origen[po][poc]));
      
      if(origen[po][poc].type == 'H')
        destino[po][poc] = JSON.parse(JSON.stringify(origen[po][poc]));
      
      if(origen[po][poc] == 'S')
        destino[po][poc] = origen[po][poc];
    }
  }
}

function crearNombre(nombre){
  var myNum;
  var maxAutoTag = 0;
  for(nm = 0; nm < ctl_lienzoBotonera.children.length; nm++){
    if(nombre == ctl_lienzoBotonera.children[nm].id){
      myNum = parseInt(ctl_lienzoBotonera.children[nm].id.substring(5, ctl_lienzoBotonera.children[nm].id.length));
      
      for(bnm = 0; bnm < ctl_lienzoBotonera.children.length; bnm++){
        if(parseInt(ctl_lienzoBotonera.children[bnm].id.substring(5, ctl_lienzoBotonera.children[bnm].id.length)))
          if(maxAutoTag<parseInt(ctl_lienzoBotonera.children[bnm].id.substring(5, ctl_lienzoBotonera.children[bnm].id.length)))
            maxAutoTag=parseInt(ctl_lienzoBotonera.children[bnm].id.substring(5, ctl_lienzoBotonera.children[bnm].id.length))
      }
        return 'Hoja ' + (maxAutoTag+1);
    }
  }
  return nombre;
}

function limpiarBotonera(){
  while(ctl_lienzoBotonera.children.length>0)
    ctl_lienzoBotonera.removeChild(ctl_lienzoBotonera.childNodes[0]);
}

function recargarLienzos(){
  limpiarBotonera();
  for(i = 0; i < grafo[0].length; i++){
    
    if(grafo[0][i].type == 'H'){
      var botonLienzo = document.createElement('div');
      
      botonLienzo.className = 'boton';
      txt_nameChanger.value = grafo[0][i].name;
      
      botonLienzo.id = grafo[0][i].id;
      botonLienzo.innerHTML = grafo[0][i].name;
      botonLienzo.setAttribute('onclick', 'cargarHoja(this.id)');
      
      
      ctl_lienzoBotonera.appendChild(botonLienzo);
    }
  }
  
}

function insertarLienzoArray(posicion, id, nombre){
  //console.log('Posicion: '+posicion);
  for(rg = 0; rg < grafo.length ; rg++){
    var grafoAuxiliar = new Array();
    var posGrafoAuxiliar = 0;
    var pivoteGrafo = 0;
    var grafoCounter = -1;
    for(gr = 0; gr < grafo[rg].length; gr++){
      pivoteGrafo = grafo[rg].length;
      if(grafo[rg][gr].type == 'H')
        grafoCounter++;
      if(grafoCounter == posicion+1){
        pivoteGrafo = gr;
        break;
      }
    }
    for(gr = pivoteGrafo; gr < grafo[rg].length; gr++){
      grafoAuxiliar[posGrafoAuxiliar] = grafo[rg][gr];
      posGrafoAuxiliar++;
    }
    
    tab = new Object();
    tab.id = id;
    tab.name = nombre;
    tab.type = 'H';
    
    grafo[rg][pivoteGrafo] = tab;
    
    for(gr = 0; gr < grafoAuxiliar.length; gr++){
      grafo[rg][pivoteGrafo+1+gr]=grafoAuxiliar[gr];
    }
    
    
    /*for(gr = 0; gr < grafo[rg].length; gr++){
      console.log(grafo[rg][gr])
    }*/
    
    //console.log(pivoteGrafo)
  }
}

function crearLienzo(){
  var position = -1;
  var botonLienzo = document.createElement('div');
  var nombre = crearNombre('Hoja ' + ctl_lienzoBotonera.children.length);
  
  botonLienzo.className = 'boton';
  
  botonLienzo.id = nombre;
  botonLienzo.innerHTML = nombre;
  
  botonLienzo.setAttribute('onclick', 'cargarHoja(this.id)');
  
  for(i = 0; i < ctl_lienzoBotonera.children.length; i++)
    if(ctl_lienzoBotonera.children[i].className == 'boton activo'){
      position = i;
      break;
    }
      
  insertarLienzoArray(position, nombre, nombre);
  
  recargarLienzos();
  
  if(position>-1){
    ctl_lienzoBotonera.children[position].className = 'boton activo'
    dibujarEnLienzo(position);
  }
  
  ponerAlerta('Lienzo añadido: '+ nombre, 'Se ha añadido un nuevo lienzo correctamente.')
  
}

function obtenerPosicionLienzoMarcado(){
  var lienzoMarcado = -1;
  for(nc = 0; nc < ctl_lienzoBotonera.children.length; nc++){
    if(ctl_lienzoBotonera.children[nc].className == 'boton activo')
      lienzoMarcado = nc;
  }
  return lienzoMarcado;
}

function renombrarLienzo(){
  var myPosition = obtenerPosicionLienzoMarcado();
  if(myPosition ==-1){
    ponerAlerta('Imposible renombrar', 'Debes seleccionar un lienzo antes de renombrarlo.');
  }
  else if(!txt_nameChanger.value){
    ponerAlerta('Imposible renombrar el lienzo', 'El campo de texto esta vacío');
  }
  else{
    var isPosible = true;
    for(nc = 0; nc < ctl_lienzoBotonera.children.length; nc++){
      if(ctl_lienzoBotonera.children[nc].innerHTML == txt_nameChanger.value){
        ponerAlerta('El nombre ya existe', 'Escoge otro nombre');
        isPosible = false;
        break;
      }
    }
    if(isPosible){
      ctl_lienzoBotonera.children[myPosition].innerHTML = txt_nameChanger.value;
    }
  }
}

function eliminarLienzoArray(posicion){
  //console.log('Se eliminara en: '+posicion)
  for(rg = 0; rg < grafo.length ; rg++){
    var grafoAuxiliar = new Array();
    var posGrafoAuxiliar = 0;
    var pivoteGrafoIni = 0;
    var pivoteGrafoFin = 0;
    var sw = 0;
    var grafoCounter = -1;
    for(gr = 0; gr < grafo[rg].length; gr++){
      pivoteGrafo = grafo[rg].length;
      if(grafo[rg][gr].type == 'H')
        grafoCounter++;
      if(grafoCounter == posicion && sw == 0){
        pivoteGrafoIni = gr;
        sw = 1;
      }
      if(grafoCounter == posicion+1 && sw ==1){
        pivoteGrafoFin = gr;
        break;
      }
    }
    if(pivoteGrafoFin == 0)
      pivoteGrafoFin = grafo[rg].length;
    
    for(gr = pivoteGrafoFin; gr < grafo[rg].length; gr++){
      grafoAuxiliar[posGrafoAuxiliar] = grafo[rg][gr];
      posGrafoAuxiliar++;
    }
    for(gr = 0; gr < pivoteGrafoFin-pivoteGrafoIni; gr++)
      grafo[rg].pop();
    
    for(gr = 0; gr < grafoAuxiliar.length; gr++){
      grafo[rg][pivoteGrafoIni]=grafoAuxiliar[gr];
      pivoteGrafoIni++;
    }
  }
}

function setAceptarDeleteModal(){
  ponerAlerta('Lienzo eliminado: '+ctl_lienzoBotonera.children[deletePosition].innerHTML, 'El lienzo se ha eliminado correctamente, junto con todos sus datos correspondientes')
  eliminarLienzoArray(deletePosition);
  ctl_lienzoBotonera.removeChild(ctl_lienzoBotonera.children[deletePosition]);
  limpiarLienzo();
  deletePosition = -1;
  alert_Modal.style.display = 'none';
}

function setCancelarDeleteModal(){
  ponerAlerta('Eliminación cancelada', 'Has cancelado la eliminación del lienzo')
  alert_Modal.style.display = 'none';
}

function eliminarLienzo(){
  var position = -1;
  for(j = 0; j < ctl_lienzoBotonera.children.length; j++)
    if(ctl_lienzoBotonera.children[j].className == 'boton activo'){
      position = j;
      break;
    }
  if(ctl_lienzoBotonera.children.length == 0)
    ponerAlerta('Imposible eliminar', 'No se puede eliminar el primer lienzo, debe existir al menos un lienzo en el dibujo')
  else if(position == -1){
    ponerAlerta('Error al ejecutar eliminación', 'Debes seleccionar el lienzo que eliminarás.')
  }
  else{
    deletePosition = position;
    ponerModalAlert('Estas a punto de eliminar el lienzo de dibujo <span>'+ctl_lienzoBotonera.children[position].innerHTML+'</span> de tu proyecto isométrico. Este cambio será irrevertible. <span>¿Estás seguro?</span>');
    
    alert_Modal.style.display = 'block';
  }
  
  if(ctl_lienzoBotonera.children.length== 0)
    ponerAlerta('Alerta de proyecto', 'No hay ningún lienzo, podrían haber errores. Crea uno para evitar esto')//console.log('todo eliminado')
}

function adelanteLienzoArray(posicion){
  for(rg = 0; rg < grafo.length ; rg++){
    var grafoAdelantado = new Array();
    var grafoSeleccionado = new Array();
    var grafoCola = new Array();
    var posGrafoAuxiliar = 0;
    var pivoteGrafoAdelanteIni = 0;
    var pivoteGrafoAdelanteFin = 0;
    var pivoteGrafoIni = 0;
    var pivoteGrafoFin = 0;
    var sw = 0;
    var grafoCounter = -1;
    for(gr = 0; gr < grafo[rg].length; gr++){
      //pivoteGrafo = grafo[rg].length;
      if(grafo[rg][gr].type == 'H')
        grafoCounter++;
      if(grafoCounter == posicion-1 && sw == 0){
        pivoteGrafoAdelanteIni = gr;
        sw = 1;
      }
      if(grafoCounter == posicion && sw == 1){
        pivoteGrafoAdelanteFin = gr;
        pivoteGrafoIni = gr;
        sw = 2;
      }
      if(grafoCounter == posicion+1 && sw ==2){
        pivoteGrafoFin = gr;
        break;
      }
    }
    if(pivoteGrafoFin == 0)
      pivoteGrafoFin = grafo[rg].length;
    
    //console.log(pivoteGrafoAdelanteIni);
    //console.log(pivoteGrafoAdelanteFin);
    //console.log(pivoteGrafoIni);
    //console.log(pivoteGrafoFin);
    
    posGrafoAuxiliar = 0;
    for(gr = pivoteGrafoAdelanteIni; gr < pivoteGrafoAdelanteFin; gr++){
      grafoAdelantado[posGrafoAuxiliar] = grafo[rg][gr];
      posGrafoAuxiliar++;
    }
    
    posGrafoAuxiliar = 0;
    for(gr = pivoteGrafoIni; gr < pivoteGrafoFin; gr++){
      grafoSeleccionado[posGrafoAuxiliar] = grafo[rg][gr];
      posGrafoAuxiliar++;
    }
    
    posGrafoAuxiliar = 0;
    for(gr = pivoteGrafoFin; gr < grafo[rg].length; gr++){
      grafoCola[posGrafoAuxiliar] = grafo[rg][gr];
      posGrafoAuxiliar++;
    }
    //console.log(grafoAdelantado);
    //console.log(grafoSeleccionado);
    //console.log(grafoCola);
    
    posGrafoAuxiliar = pivoteGrafoAdelanteIni;
    for(gr = 0; gr < grafoSeleccionado.length; gr++){
      grafo[rg][posGrafoAuxiliar] = grafoSeleccionado[gr];
      posGrafoAuxiliar++;
    }
    
    for(gr = 0; gr < grafoAdelantado.length; gr++){
      grafo[rg][posGrafoAuxiliar] = grafoAdelantado[gr];
      posGrafoAuxiliar++;
    }
    
    for(gr = 0; gr < grafoCola.length; gr++){
      grafo[rg][posGrafoAuxiliar] = grafoCola[gr];
      posGrafoAuxiliar++;
    }
  }
}

function adelanteLienzo(){
  //var afterButton;
  var markedButton;
  var position;
  //var temporalButtons = [];
  for(i = 0; i < ctl_lienzoBotonera.children.length; i++){
    if(ctl_lienzoBotonera.children[i].className == 'boton activo'){
      markedButton = document.getElementById(ctl_lienzoBotonera.children[i].id);
      position = i;
    }
  }
  
  if(markedButton){
    if(position > 0){
      ctl_lienzoBotonera.removeChild(ctl_lienzoBotonera.children[position]);
      ctl_lienzoBotonera.insertBefore(markedButton, ctl_lienzoBotonera.children[position-1]);
      adelanteLienzoArray(position);
      ponerAlerta('Posición adelantada', 'El lienzo ha sido llevado una posición adelante.')
    }
    else
      ponerAlerta('Posición mínima alcanzada', 'El lienzo esta en la mínima posición posible.')
  }
  else
    ponerAlerta('Imposible llevar adelante', 'Debes seleccionar un lienzo para llevarlo.');
}

function atrasLienzoArray(posicion){
  //console.log('Ps: '+ posicion)
  for(rg = 0; rg < grafo.length ; rg++){
    var grafoAtrasado = new Array();
    var grafoSeleccionado = new Array();
    var grafoCola = new Array();
    var posGrafoAuxiliar = 0;
    var pivoteGrafoAtrasIni = 0;
    var pivoteGrafoAtrasFin = 0;
    var pivoteGrafoIni = 0;
    var pivoteGrafoFin = 0;
    var sw = 0;
    var grafoCounter = -1;
    for(gr = 0; gr < grafo[rg].length; gr++){
      /*pivoteGrafo = grafo[rg].length;*/
      if(grafo[rg][gr].type == 'H')
        grafoCounter++;
      if(grafoCounter == posicion && sw == 0){
        pivoteGrafoIni = gr;
        sw = 1;
      }
      if(grafoCounter == posicion+1 && sw == 1){
        pivoteGrafoAtrasIni = gr;
        pivoteGrafoFin = gr;
        sw = 2;
      }
      if(grafoCounter == posicion+2 && sw == 2){
        pivoteGrafoAtrasFin = gr;
        break;
      }
    }
    if(pivoteGrafoAtrasFin == 0)
      pivoteGrafoAtrasFin = grafo[rg].length;
    
    //console.log(pivoteGrafoIni);
    //console.log(pivoteGrafoFin);
    //console.log(pivoteGrafoAtrasIni);
    //console.log(pivoteGrafoAtrasFin);
    
    posGrafoAuxiliar = 0;
    for(gr = pivoteGrafoIni; gr < pivoteGrafoFin; gr++){
      grafoSeleccionado[posGrafoAuxiliar] = grafo[rg][gr];
      posGrafoAuxiliar++;
    }
    
    posGrafoAuxiliar = 0;
    for(gr = pivoteGrafoAtrasIni; gr < pivoteGrafoAtrasFin; gr++){
      grafoAtrasado[posGrafoAuxiliar] = grafo[rg][gr];
      posGrafoAuxiliar++;
    }
    
    posGrafoAuxiliar = 0;
    for(gr = pivoteGrafoAtrasFin; gr < grafo[rg].length; gr++){
      grafoCola[posGrafoAuxiliar] = grafo[rg][gr];
      posGrafoAuxiliar++;
    }
    
    //console.log(grafoSeleccionado);
    //console.log(grafoAtrasado);
    //console.log(grafoCola);
    
    posGrafoAuxiliar = pivoteGrafoIni;
    for(gr = 0; gr < grafoAtrasado.length; gr++){
      grafo[rg][posGrafoAuxiliar] = grafoAtrasado[gr];
      posGrafoAuxiliar++;
    }
    
    for(gr = 0; gr < grafoSeleccionado.length; gr++){
      grafo[rg][posGrafoAuxiliar] = grafoSeleccionado[gr];
      posGrafoAuxiliar++;
    }
    
    for(gr = 0; gr < grafoCola.length; gr++){
      grafo[rg][posGrafoAuxiliar] = grafoCola[gr];
      posGrafoAuxiliar++;
    }
  }
}

function atrasLienzo(){
  var markedButton;
  var position;
  for(i = 0; i < ctl_lienzoBotonera.children.length; i++){
    if(ctl_lienzoBotonera.children[i].className == 'boton activo'){
      markedButton = document.getElementById(ctl_lienzoBotonera.children[i].id);
      position = i;
    }
  }
  if(markedButton){
    if(position < ctl_lienzoBotonera.children.length-1){
      ctl_lienzoBotonera.removeChild(ctl_lienzoBotonera.children[position]);
      ctl_lienzoBotonera.insertBefore(markedButton, ctl_lienzoBotonera.children[position+1]);
      atrasLienzoArray(position);
      ponerAlerta('Posición atrasada', 'El lienzo ha sido llevado una posición atrás.')
    }
    else
      ponerAlerta('Posición máxima alcanzada', 'El lienzo esta en la máxima posición posible.')
  }
  else
    ponerAlerta('Imposible llevar atrás', 'Debes seleccionar un lienzo para llevarlo.');
}

function cargarHoja(a){
  var myButton;
  var markedButton;
  var myButtonPosition;
  for(i = 0; i < ctl_lienzoBotonera.children.length; i++){
    if(ctl_lienzoBotonera.children[i].id == a){
      myButton = document.getElementById(a);
      myButtonPosition = i;
    }
      
    if(ctl_lienzoBotonera.children[i].className == 'boton activo')
      markedButton = document.getElementById(ctl_lienzoBotonera.children[i].id);
  }
  
  if(myButton){
    console.log(myButton.id);
    if(markedButton)
      markedButton.className = 'boton';
    myButton.className = 'boton activo';
    dibujarEnLienzo(myButtonPosition);
    cambiarGrosorLinea(controlRange.value)
    txt_nameChanger.value = myButton.id;
  }
}

function dibujarEnLienzo(numeroDeLienzo){
  limpiarLienzo();
  for(pivoteGrafo = 0; pivoteGrafo < grafo.length; pivoteGrafo++){
    //console.log(grafo[pivoteGrafo]);
    dibujarRuta(numeroDeLienzo, grafo[pivoteGrafo]);
  }
}

function dibujarEnLienzoEspejo(numeroDeLienzo){
  limpiarLienzo();
  for(pivoteGrafo = 0; pivoteGrafo < grafoEspejo.length; pivoteGrafo++){
    //console.log(grafo[pivoteGrafo]);
    dibujarRuta(numeroDeLienzo, grafoEspejo[pivoteGrafo]);
  }
}

function dibujarRuta(numeroDeLienzo, ruta){
  
  //console.log('***********************************');
  //console.log(ruta);
  //console.log('***********************************');
  var positionCounter = -1;
  var pv = 0;
  
  while(positionCounter <= numeroDeLienzo && pv < ruta.length){
    if(ruta[pv].type == 'H'){
      positionCounter++;
      //console.log(ruta[pv])
      //console.log(positionCounter)
    }
    else if(ruta[pv] == 'S'){
      miX1 = ruta[pv+1].x;
      miY1 = ruta[pv+1].y;
    }
    else{
      
      var myLine = document.createElementNS(svgNS, 'line');
      myLine.setAttribute('x1', miX1);
      myLine.setAttribute('y1', miY1);
      myLine.setAttribute('x2', ruta[pv].x);
      myLine.setAttribute('y2', ruta[pv].y);
      myLine.setAttribute('stroke-linecap', 'round');
      if(ruta[pv-1].typeTub == 'vt'){
        myLine.setAttribute('class', 'path');
      }
      else{
        myLine.setAttribute('class', 'path-dash');
      }
        
      miX1 = ruta[pv].x;
      miY1 = ruta[pv].y;
      
      if(numeroDeLienzo == positionCounter){
        svg_lienzo.appendChild(myLine);
      }
    }
    pv++;
  }
  /*var pv = 0;
  var positionCounter = -1;
  
  while(pv < ruta.length){
    if(ruta[pv].type == 'H'){
      positionCounter++;
      //console.log('Existe en: '+ pv);
      //console.log('Para la hoja: '+ positionCounter);
    }
    else if(ruta[pv] == 'S'){
      myX1 = ruta[pv+1].x;
      myY1 = ruta[pv+1].y;
      pv++;
    }
    else{
      var myLine = document.createElementNS(svgNS, 'line');
      myLine.setAttribute('x1', myX1);
      myLine.setAttribute('y1', myY1);
      myLine.setAttribute('x2', ruta[pv].x);
      myLine.setAttribute('y2', ruta[pv].y);
      myLine.setAttribute('class', 'path');
      
      myLine.setAttribute('stroke-linecap', 'round');
      
      
      
      var myCircle = document.createElementNS(svgNS, 'circle');
      myCircle.setAttribute('cx', myX1);
      myCircle.setAttribute('cy', myY1);
      myCircle.setAttribute('class', 'circle-marker-drawMode');
      myCircle.setAttribute('r', 5);
      //svg_lienzo.appendChild(myCircle);
      
      var myCircleLast = document.createElementNS(svgNS, 'circle');
      myCircleLast.setAttribute('cx', ruta[pv].x);
      myCircleLast.setAttribute('cy', ruta[pv].y);
      myCircleLast.setAttribute('class', 'circle-marker-drawMode');
      myCircleLast.setAttribute('r', 5);
      //svg_lienzo.appendChild(myCircle);
      
      myX1 = ruta[pv].x;
      myY1 = ruta[pv].y;
      
      
        
      if(numeroDeLienzo == positionCounter){
        console.log('Tipo de tubería: '+ruta[pv-1].typeTub);
        
        svg_lienzo.appendChild(myLine);
      }
      if(ruta[pv].marca == 'move' && numeroDeLienzo == positionCounter){
        svg_lienzo.appendChild(myCircle);
        svg_lienzo.appendChild(myCircleLast);
      }
    }
    pv++;
  }*/
  
  
  
}

function limpiarLienzo(){
  //console.log('Limpiando: '+ svg_lienzo.children.length);
  while(svg_lienzo.children.length>0)
    svg_lienzo.removeChild(svg_lienzo.childNodes[0]);
}

function ponerAlerta(titulo, contenido){
  
  var myAlert = document.createElement('h3');
  myAlert.innerHTML = titulo;
  var myAlertContent = document.createElement('p');
  myAlertContent.innerHTML = contenido;
  ctl_adviceErrors.insertBefore(myAlertContent, ctl_adviceErrors.children[0]);
  ctl_adviceErrors.insertBefore(myAlert, ctl_adviceErrors.children[0]);
  if(ctl_adviceErrors.children.length > 0)
    setTimeout(limpiarAlertas, 5000);
}

function ponerAccionEjecutada(titulo, contenido){
  
  var myAlert = document.createElement('h2');
  myAlert.innerHTML = titulo;
  var myAlertContent = document.createElement('p');
  myAlertContent.innerHTML = contenido;
  ctl_adviceErrors.insertBefore(myAlertContent, ctl_adviceErrors.children[0]);
  ctl_adviceErrors.insertBefore(myAlert, ctl_adviceErrors.children[0]);
  if(ctl_adviceErrors.children.length > 0)
    setTimeout(limpiarAlertas, 5000);
}

function limpiarAlertas(){
  while(ctl_adviceErrors.children.length > 0)
    ctl_adviceErrors.removeChild(ctl_adviceErrors.childNodes[0])
}

function ponerModalAlert(mensaje){
  while(txt_modalMessage.children.length>0)
    txt_modalMessage.removeChild(txt_modalMessage.childNodes[0]);
  var p = document.createElement('p');
  p.innerHTML = mensaje;
  txt_modalMessage.appendChild(p);
}

function calcularNuevoPunto(pOrigen, distancia, angulo, escala){
  //console.log(tipoTuberia);
  //console.log(diametro);
  var miPunto = new Object();
  miPunto.type = 'P';
  var miDistancia = ((distancia * 100) * 37.95)/escala;
  miPunto.x = parseFloat((miDistancia * Math.cos(angulo * Math.PI/180) + pOrigen.x).toFixed(2));
  miPunto.y = parseFloat((-miDistancia * Math.sin(angulo * Math.PI/180) + pOrigen.y).toFixed(2));
  //miPunto.typeTub = tipoTuberia;
  //miPunto.diametro = diametro;
  
  //console.log(miPunto)
  return miPunto;
}

function insertarEnVector(miVectorGrafo, posicion, objeto, tipoDeTuberia, diametro){
  
  var lastVector = new Array();
  var lvp = 0;
  console.log(posicion)
  miVectorGrafo[posicion-1].typeTub = tipoDeTuberia;
  miVectorGrafo[posicion-1].diametro = diametro;
  for(rv = posicion; rv < miVectorGrafo.length; rv++){
    if(miVectorGrafo[rv].type == 'H'){
      lastVector[lvp] = new Object();
      lastVector[lvp].id = miVectorGrafo[rv].id;
      lastVector[lvp].name = miVectorGrafo[rv].name;
      lastVector[lvp].type = miVectorGrafo[rv].type;
    }
    if(miVectorGrafo[rv].type == 'P'){
      lastVector[lvp] = new Object();
      lastVector[lvp].type = 'P';
      lastVector[lvp].x = miVectorGrafo[rv].x;
      lastVector[lvp].y = miVectorGrafo[rv].y;
      lastVector[lvp].typeTub = miVectorGrafo[rv].typeTub;
      lastVector[lvp].diametro = miVectorGrafo[rv].diametro;
    }
    if(miVectorGrafo[rv] == 'S')
      lastVector[lvp] = miVectorGrafo[rv];
    lvp++;
  }
  
  miVectorGrafo[posicion] = objeto;
  lvp = posicion + 1;
  
  for(rv = 0; rv < lastVector.length; rv++){
    if(lastVector[rv].type == 'H'){
      miVectorGrafo[lvp] = new Object();
      miVectorGrafo[lvp].id = lastVector[rv].id;
      miVectorGrafo[lvp].name = lastVector[rv].name;
      miVectorGrafo[lvp].type = lastVector[rv].type;
    }
    if(lastVector[rv].type == 'P'){
      miVectorGrafo[lvp] = new Object();
      miVectorGrafo[lvp].type = 'P';
      miVectorGrafo[lvp].x = lastVector[rv].x;
      miVectorGrafo[lvp].y = lastVector[rv].y;
      miVectorGrafo[lvp].typeTub = lastVector[rv].typeTub;
      miVectorGrafo[lvp].diametro = lastVector[rv].diametro;
    }
    if(lastVector[rv] == 'S')
      miVectorGrafo[lvp] = lastVector[rv];
    lvp++;
  }
  
}

////////////////////////////////

function dibujar(){
  var markedPositionLienzo;
  var markedButton;
  for(i = 0; i < ctl_lienzoBotonera.children.length; i++){
    if(ctl_lienzoBotonera.children[i].className == 'boton activo'){
      markedButton = document.getElementById(ctl_lienzoBotonera.children[i].id);
      markedPositionLienzo = i;
    }
  }
  if(markedButton){
    console.log('listos para dibujar en el lienzo '+ markedPositionLienzo)//markedButton.className = 'boton';
    if(punteroDeDibujo.length == 0)
      ponerAlerta('Error de dibujo', 'Debes marcar un punto de partida para dibujar');
    else{
      //ponerAccionEjecutada('Trazo dibujado', 'El trazo se ha dibujado correctamente');
      
      /*console.log(distancia)
      console.log(grado)
      console.log(typeTub)
      console.log(diametro)
      console.log(punteroDeDibujo)
      console.log(grafo[punteroDeDibujo[0]][punteroDeDibujo[8]])
      console.log('----------------------------------------')*/
      
      console.log(punteroDeDibujo)
      /*var a = ['1as',2,'asd','rtt','rtwrtwr']
      //console.log(a)
      distancia = txt_distancia.value;
      var miNuevoPunto = calcularNuevoPunto(grafo[punteroDeDibujo[0]][punteroDeDibujo[8]], distancia, grado, 50);
      
      insertarEnVector(grafo[punteroDeDibujo[0]], punteroDeDibujo[8] + 1, miNuevoPunto, typeTub, diametro);
      
      punteroDeDibujo = obtenerPosiciones(markedPositionLienzo, 5, miNuevoPunto.x, miNuevoPunto.y)
      
      
      copiarGrafo(grafo, grafoEspejo);
      dibujarEnLienzo(markedPositionLienzo);
    
      marcarPunto(punteroDeDibujo[1], punteroDeDibujo[0], punteroDeDibujo[8], modo);*/
      
    }
    
    
  }
  else{
    ponerAlerta('Error de dibujo', 'Debes marcar una pestaña del lienzo');
  }
    
}

function obtenerCoordenadasLienzo(e){
  var lienzoCoordenadas = new Array();
  if (e.x != undefined && e.y != undefined){
    lienzoCoordenadas[0] = e.x;//+ document.body.scrollLeft + document.documentElement.scrollLeft;
    lienzoCoordenadas[1] = e.y;// + document.body.scrollTop + document.documentElement.scrollTop;
  }else{// Firefox
    lienzoCoordenadas[0] = e.clientX;// + document.body.scrollLeft + document.documentElement.scrollLeft;
    lienzoCoordenadas[1] = e.clientY;// + document.body.scrollTop + document.documentElement.scrollTop;
  }
  /*lienzoCoordenadas[0] -= ctl_lienzoContainer.offsetLeft+1
  lienzoCoordenadas[1] -= document.getElementById('lienzos').offsetTop + ctl_lienzoHoja.offsetTop+1;//  svg_lienzo.offsetTop;
  
  svg_lienzo.getBoundingClientRect();*/
  lienzoCoordenadas[0] -= svg_lienzo.getBoundingClientRect().left;
  lienzoCoordenadas[1] -= svg_lienzo.getBoundingClientRect().top;
  return lienzoCoordenadas;
  //ponerAlerta(x, y)
}

function distanciaPuntoPunto(px, py, p1){
  var distanciaPuntoPunto = Math.sqrt(Math.pow((p1.x-px),2)+Math.pow((p1.y-py), 2));
  
  return distanciaPuntoPunto;
  
}

function verificarSeleccionExtremo(px, py, tolerancia, p1){
  var distanciaPuntoPunto = Math.sqrt(Math.pow((p1.x-px),2)+Math.pow((p1.y-py), 2));
  
  if(distanciaPuntoPunto < tolerancia)
    return true;
  
  return false;
  
}

function verificarInterseccionPuntoRecta(px, py, tolerancia, p1, p2){
  var supx = -10;
  var infx = 1000;
  var supy = -10;
  var infy = 1000;
  var izquierdaFactor = (py-p1.y)*(p2.x-p1.x);
  var derechaFactor = (p2.y-p1.y)*(px-p1.x);
  
  var distanciaPuntoRecta = Math.abs(izquierdaFactor-derechaFactor)/Math.sqrt(Math.pow((p2.y-p1.y), 2) + Math.pow((p1.x-p2.x), 2));
  
  //console.log('Distancia: '+distanciaPuntoRecta);
  
  if(distanciaPuntoRecta < tolerancia){
    
    supx = Math.max(p1.x, p2.x);
    infx = Math.min(p1.x, p2.x);
    supy = Math.max(p1.y, p2.y);
    infy = Math.min(p1.y, p2.y);
    
    if((infx-tolerancia <= px && px <= supx+tolerancia) && (infy-tolerancia <= py && py <= supy+tolerancia))
      return true;
    else
      return false;
    
  }
  return false;
      
}


function obtenerPosiciones(numHoja, tolerancia, px, py){
  //console.log(numHoja);
  var positionData = new Array();
  for(pg = 0; pg < grafo.length; pg++){
    //console.log(grafo[pg]);
    var hCounter = -1;
    var posHoja = -1;
    
    var sCounter = -1;
    var posSegmento = -1;
    
    var rCounter = -1;
    var posRecta = -1;
    
    var pCounter = -1;
    var posPoint = -1;
    for(pl = 0; pl < grafo[pg].length-1; pl++){
      if(grafo[pg][pl].type == 'H'){
        hCounter++;
        sCounter = -1;
        posHoja = pl;
      }
      
      if(grafo[pg][pl] == 'S'){
        sCounter++;
        posSegmento = pl;
      }
        
      
      if(hCounter == numHoja){
        if(grafo[pg][pl].type == 'P' && grafo[pg][pl+1].type == 'P'){
          
          pCounter++;
          posPoint = pl;
          
          rCounter++;
          posRecta = pl;
        
          if(verificarInterseccionPuntoRecta(px, py, tolerancia, grafo[pg][pl], grafo[pg][pl+1])){
            posRecta = pl;
            
            positionData[0] = pg;
            positionData[1] = hCounter;
            positionData[2] = posHoja;
            positionData[3] = sCounter;
            positionData[4] = posSegmento;
            positionData[5] = rCounter;
            positionData[6] = posRecta;
            
            //var distanciaA = verificarSeleccionExtremo(px, py, tolerancia, grafo[pg][pl]);
            //var distanciaB = verificarSeleccionExtremo(px, py, tolerancia, grafo[pg][pl + 1]);
            
            if(verificarSeleccionExtremo(px, py, tolerancia, grafo[pg][pl])){
              positionData[7] = pCounter;
              positionData[8] = posPoint;
            }
            else if(verificarSeleccionExtremo(px, py, tolerancia, grafo[pg][pl+1])){
              positionData[7] = pCounter+1;
              positionData[8] = posPoint+1;
            }
            else{
              if(distanciaPuntoPunto(px, py, grafo[pg][pl]) < distanciaPuntoPunto(px, py, grafo[pg][pl+1])){
                positionData[7] = pCounter;
                positionData[8] = posPoint;
              }
              else{
                positionData[7] = pCounter+1;
                positionData[8] = posPoint+1;
              }
              
            }
            
            /*console.log('Grafo: '+ positionData[0]);
            console.log('Cantidad hoja: '+ positionData[1]);
            console.log('Posicion hoja: '+ positionData[2]);
            console.log('Cantidad segmento: '+ positionData[3]);
            console.log('Posicion segmento: '+ positionData[4]);
            console.log('Cantidad recta: '+ positionData[5]);
            console.log('Posicion recta: '+ positionData[6]);
            console.log('Cantidad punto: '+ positionData[7]);
            console.log('Posicion punto: '+ positionData[8]);*/
            
            return positionData;
          }
            
        }
        if(hCounter > numHoja)
          break;
      }
    }
  }
    
  return positionData;
}




function obtenerPosicionesHanoi_4(numHoja, tolerancia, px, py, hanoi_4){
  var positionData = new Array();
  for(pg = 0; pg < hanoi_4.length; pg++){
    var hCounter = -1;
    var posHoja = -1;
    
    var sCounter = -1;
    var posSegmento = -1;
    
    var rCounter = -1;
    var posRecta = -1;
    
    var pCounter = -1;
    var posPoint = -1;
    for(pl = 0; pl < hanoi_4[pg].length-1; pl++){
      if(hanoi_4[pg][pl].type == 'H'){
        hCounter++;
        sCounter = -1;
        posHoja = pl;
      }
      
      if(hanoi_4[pg][pl] == 'S'){
        sCounter++;
        posSegmento = pl;
      }
        
      
      if(hCounter == numHoja){
        if(hanoi_4[pg][pl].type == 'P' && hanoi_4[pg][pl+1].type == 'P'){
          
          pCounter++;
          posPoint = pl;
          
          rCounter++;
          posRecta = pl;
        
          if(verificarInterseccionPuntoRecta(px, py, tolerancia, hanoi_4[pg][pl], hanoi_4[pg][pl+1])){
            posRecta = pl;
            
            positionData[0] = pg;
            positionData[1] = hCounter;
            positionData[2] = posHoja;
            positionData[3] = sCounter;
            positionData[4] = posSegmento;
            positionData[5] = rCounter;
            positionData[6] = posRecta;
            
            //var distanciaA = verificarSeleccionExtremo(px, py, tolerancia, grafo[pg][pl]);
            //var distanciaB = verificarSeleccionExtremo(px, py, tolerancia, grafo[pg][pl + 1]);
            
            if(verificarSeleccionExtremo(px, py, tolerancia, hanoi_4[pg][pl])){
              positionData[7] = pCounter;
              positionData[8] = posPoint;
            }
            else if(verificarSeleccionExtremo(px, py, tolerancia, hanoi_4[pg][pl+1])){
              positionData[7] = pCounter+1;
              positionData[8] = posPoint+1;
            }
            else{
              if(distanciaPuntoPunto(px, py, hanoi_4[pg][pl]) < distanciaPuntoPunto(px, py, hanoi_4[pg][pl+1])){
                positionData[7] = pCounter;
                positionData[8] = posPoint;
              }
              else{
                positionData[7] = pCounter+1;
                positionData[8] = posPoint+1;
              }
              
            }
            
            return positionData;
          }
            
        }
        if(hCounter > numHoja)
          break;
      }
    }
  }
    
  return positionData;
}

function obtenerDatosTrozo(punto){
  
  var misCoordenadas = punto;//obtenerCoordenadasLienzo(e);
  var miLienzo = obtenerPosicionLienzoMarcado();
  
  var hanoi_5 = new Array();//grafo.slice();
  copiarGrafo(grafo, hanoi_5);
  
  var hanoi_4 = new Array();//grafo.slice();
  copiarGrafo(grafo, hanoi_4);
  
  var hanoi_3 = new Array();
  var hanoi_2 = new Array();
  var hanoi_1 = new Array();
  
  for(cgh = 0; cgh < hanoi_5.length ;cgh++){
    hanoi_3[cgh] = new Array();
    hanoi_2[cgh] = new Array();
    hanoi_1[cgh] = new Array();
  }
  
  var miPosicion = obtenerPosicionesHanoi_4(miLienzo, 5, misCoordenadas[0], misCoordenadas[1], hanoi_4);
  //console.log(miPosicion)
  
  if(miPosicion.length > 0){
    
    hanoi_2[miPosicion[0]] = miPosicion;
    hanoi_4[miPosicion[0]] = new Array();
    //console.log(hanoi_4)
    //console.log(hanoi_2)
    //console.log('-----------------------')
    //console.log(hanoi_2)
    //console.log(hanoi_4)
    var encontrado = false;
    do{
      encontrado = false;
      for(ch2 = 0; ch2 < hanoi_2.length; ch2++){
        //console.log(hanoi_2[ch2])
        if(hanoi_2[ch2].length > 0){
          //console.log(hanoi_4[ch2].length);
          //console.log(hanoi_2[ch2][0]);
          //console.log(hanoi_4[hanoi_2[ch2][0]].length);
          for(ch5 = hanoi_2[ch2][4]+1; ch5 < hanoi_5[ch2].length; ch5++){
            
            if(hanoi_5[ch2][ch5].type == 'P'){
              //console.log(hanoi_5[ch2][ch5])
              //console.log('***********')
              for(ch4 = 0; ch4 < hanoi_4.length; ch4++){
                //console.log(hanoi_4[ch4])
                //console.log(hanoi_5[ch])
                if(hanoi_4[ch4].length > 0){
                  var miSearch = obtenerPosicionesHanoi_4(miLienzo, 5, hanoi_5[ch2][ch5].x, hanoi_5[ch2][ch5].y, hanoi_4);
                  //console.log(obtenerPosicionesHanoi_4(miLienzo, 5, hanoi_5[ch2][ch5].x, hanoi_5[ch2][ch5].y, hanoi_4));
                  if(miSearch.length > 0){
                    encontrado = true;
                    //console.log(miSearch[0])
                    hanoi_3[miSearch[0]] = miSearch;
                    break;
                  }
                  
                }
              }
              //console.log('***********')
            }
            
            if(hanoi_5[ch2][ch5].type == 'H')
              break;
            if(hanoi_5[ch2][ch5] == 'S')
              break;
          }
        }
      }
      
      /*console.log('*****HANOI 3********')
      console.log(hanoi_3)
      console.log('******************')*/
      //vaciar h2
      for(ch2 = 0; ch2 < hanoi_2.length; ch2++){
        if(hanoi_2[ch2].length > 0)
          hanoi_1[ch2] = hanoi_2[ch2].slice();
        hanoi_2[ch2] = new Array();
      }
      /*console.log('*****HANOI 2********')
      console.log(hanoi_2)
      console.log('******************')
      
      console.log('*****HANOI 1********')
      console.log(hanoi_1)
      console.log('******************')*/
      /*var miniCounter = 0;
      for(ch3 = 0; ch3 < hanoi_3.length; ch3++){
        if(hanoi_3[ch3].length == 0)
          miniCounter++;
      }
      console.log('SOMEEEE: '+miniCounter)
      
      if(miniCounter == 3)
        encontrado = false*/
      
      for(ch3 = 0; ch3 < hanoi_3.length; ch3++){
        
        hanoi_2[ch3] = hanoi_3[ch3].slice();
        if(hanoi_3[ch3].length > 0)
          hanoi_4[ch3] = new Array();
        
        hanoi_3[ch3] = new Array();
        
        //console.log(hanoi_3)
      }
      
      /*console.log('*****HANOI 3********')
      console.log(hanoi_3)
      console.log('******************')
      
      console.log('*****HANOI 2********')
      console.log(hanoi_2)
      console.log('******************')
      
      console.log('*****HANOI 1********')
      console.log(hanoi_1)
      console.log('******************')
      console.log('-------------------------------------------------')*/
    }while(encontrado);
    
    
    //console.log(hanoi_1)
    //marcarTrozo(hanoi_1)
    
  }
  return hanoi_1;
}



function marcarPunto(miLienzo, miGrafo, miPosicion, modo){
  
  limpiarLienzo();
  dibujarEnLienzo(miLienzo);
  
  var myCircle = document.createElementNS(svgNS, 'circle');
  myCircle.setAttribute('cx', grafo[miGrafo][miPosicion].x);
  myCircle.setAttribute('cy', grafo[miGrafo][miPosicion].y);
  
  switch(modo){
    case 'dibujo':
      myCircle.setAttribute('class', 'circle-marker-drawMode');
      break;
    case 'edicion':
      myCircle.setAttribute('class', 'circle-marker-editMode');
      break;
    case 'mover':
      myCircle.setAttribute('class', 'circle-marker-moveMode');
      break;
  }
    
  //myCircle.setAttribute('class', 'circle-marker-drawMode');
  
  myCircle.setAttribute('r', 5);
  svg_lienzo.appendChild(myCircle);
  
  setValueRange(controlRange.value);
  setControlRange(valueRange.value);
  
}

function marcarRecta(miLienzo, miGrafo, miPosicion, modo){
  limpiarLienzo();
  dibujarEnLienzo(miLienzo);
  
  var myCircle = document.createElementNS(svgNS, 'circle');
  myCircle.setAttribute('cx', grafo[miGrafo][miPosicion].x);
  myCircle.setAttribute('cy', grafo[miGrafo][miPosicion].y);
  myCircle.setAttribute('class', 'circle-marker-drawMode');
  
  myCircle.setAttribute('r', 5);
  svg_lienzo.appendChild(myCircle);
  
  var myCircle = document.createElementNS(svgNS, 'circle');
  myCircle.setAttribute('cx', grafo[miGrafo][miPosicion+1].x);
  myCircle.setAttribute('cy', grafo[miGrafo][miPosicion+1].y);
  myCircle.setAttribute('class', 'circle-marker-drawMode');
  
  myCircle.setAttribute('r', 5);
  svg_lienzo.appendChild(myCircle);
  
  setValueRange(controlRange.value);
  setControlRange(valueRange.value);
  
}

function marcarSegmento(miLienzo, miGrafo, miSegmentoPosicion, modo){
  
  limpiarLienzo();
  dibujarEnLienzo(miLienzo);
  
  var hCounter = -1;
  var sCounter = -1;
  //console.log(grafo[miGrafo].length);
  for(pl = miSegmentoPosicion+1; pl < grafo[miGrafo].length; pl++){
    
    if(grafo[pg][pl].type == 'P'){
      var myCircle = document.createElementNS(svgNS, 'circle');
      myCircle.setAttribute('cx', grafo[miGrafo][pl].x);
      myCircle.setAttribute('cy', grafo[miGrafo][pl].y);
      myCircle.setAttribute('class', 'circle-marker-drawMode');
      myCircle.setAttribute('r', 5);
      svg_lienzo.appendChild(myCircle);
    }
    else
      break;
  }
  
}

function marcarGrafo(miLienzo, miGrafo, miPosicionHoja, modo){
  
  limpiarLienzo();
  dibujarEnLienzo(miLienzo);
  
  var hCounter = -1;
  var sCounter = -1;
  
  for(pl = miPosicionHoja+1; pl < grafo[miGrafo].length; pl++){
    
    if(grafo[pg][pl].type == 'P'){
      //console.log(grafo[miGrafo][pl].x)
      //console.log(grafo[miGrafo][pl].y)
      var myCircle = document.createElementNS(svgNS, 'circle');
      myCircle.setAttribute('cx', grafo[miGrafo][pl].x);
      myCircle.setAttribute('cy', grafo[miGrafo][pl].y);
      myCircle.setAttribute('class', 'circle-marker-drawMode');
      myCircle.setAttribute('r', 5);
      svg_lienzo.appendChild(myCircle);
    }
    if(grafo[pg][pl].type == 'H')
      break;
  }
  
}

function marcarTrozo(miHanoiSegmentos){
  for(hSc = 0; hSc < miHanoiSegmentos.length; hSc++){
    //console.log(grafo[hSc][miHanoiSegmentos[hSc][6]])
    
    if(miHanoiSegmentos[hSc].length > 0){//OBS
      for(mkT = miHanoiSegmentos[hSc][4]+1; mkT < grafo[hSc].length; mkT++){
        //console.log(grafo[hSc][mkT])
        if(grafo[hSc][mkT].type == 'P'){
          //console.log(grafo[miGrafo][pl].x)
          //console.log(grafo[miGrafo][pl].y)
          var myCircle = document.createElementNS(svgNS, 'circle');
          myCircle.setAttribute('cx', grafo[hSc][mkT].x);
          myCircle.setAttribute('cy', grafo[hSc][mkT].y);
          myCircle.setAttribute('class', 'circle-marker-drawMode');
          myCircle.setAttribute('r', 5);
          svg_lienzo.appendChild(myCircle);
        }
        if(grafo[hSc][mkT].type == 'H')
          break;
        if(grafo[hSc][mkT] == 'S')
          break;
      }
    }
  }
}



function seleccionarTrozo(e){
  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miTrozo = obtenerDatosTrozo(misCoordenadas);
  marcarTrozo(miTrozo);
}

function obtenerPosicionInterseccion(e){
  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miLienzo = obtenerPosicionLienzoMarcado();
  var miPosicionMarcada = obtenerPosiciones(miLienzo, 5, misCoordenadas[0], misCoordenadas[1])
  console.log(misCoordenadas)
  console.log(miLienzo)
  console.log(miPosicionMarcada)
  
  
  if(miPosicionMarcada.length > 0)
    marcarSegmento(miPosicionMarcada[1], miPosicionMarcada[0], miPosicionMarcada[4], modo);
  
}

function obtenerPosicionParaDibujar(e){
  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miLienzo = obtenerPosicionLienzoMarcado();
  punteroDeDibujo = obtenerPosiciones(miLienzo, 5, misCoordenadas[0], misCoordenadas[1])
  //puntoPartida = obtenerCoordenadasLienzo(e);
  //console.log(misCoordenadas)
  //console.log(miLienzo)
  console.log(punteroDeDibujo)
  
  
  if(punteroDeDibujo.length > 0)
    marcarPunto(punteroDeDibujo[1], punteroDeDibujo[0], punteroDeDibujo[8], modo);
  
}


function marcarPuntoPartida(e){
  puntoPartida = obtenerCoordenadasLienzo(e);
  trozoParaMover = obtenerDatosTrozo(puntoPartida);
  marcarTrozo(trozoParaMover);
  
}


function moverTrozo(e){
  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miLienzo = obtenerPosicionLienzoMarcado();
  
  if(puntoPartida.length > 0 && trozoParaMover.length > 0){
    var movX = (misCoordenadas[0] - puntoPartida[0]);
    var movY = (misCoordenadas[1] - puntoPartida[1]);
    
    
    //console.log('***********');
    if(limitadorDeMargen){
      var movement = true;
      for(mc = 0; mc < trozoParaMover.length; mc++){
        if(trozoParaMover[mc].length > 0){
          for(msg = trozoParaMover[mc][4]+1; msg < grafo[mc].length; msg++){

            if(grafo[mc][msg].type == 'P'){

              if(grafoEspejo[mc][msg].x < 20 || grafoEspejo[mc][msg].x > 681-20){
                movement = false;
                if(grafoEspejo[mc][msg].x < 20 && grafoEspejo[mc][msg].x < minX)
                  minX = grafoEspejo[mc][msg].x;
                if(grafoEspejo[mc][msg].x > 681-20 && grafoEspejo[mc][msg].x > maxX)
                  maxX = grafoEspejo[mc][msg].x
              }

              if(grafoEspejo[mc][msg].y < 20 || grafoEspejo[mc][msg].y > 718-20){
                movement = false;
                if(grafoEspejo[mc][msg].y < 20 && grafoEspejo[mc][msg].y < minY)
                  minY = grafoEspejo[mc][msg].y;
                if(grafoEspejo[mc][msg].y > 718-20 && grafoEspejo[mc][msg].y > maxY)
                    maxY = grafoEspejo[mc][msg].y;
              }

            }
            if(grafo[mc][msg].type == 'H')
              break;
            if(grafo[mc][msg] == 'S')
              break;
          }

        }
      }

      if(movement){
        for(mc = 0; mc < trozoParaMover.length; mc++){
          if(trozoParaMover[mc].length > 0){
            for(msg = trozoParaMover[mc][4]+1; msg < grafo[mc].length; msg++){

              if(grafo[mc][msg].type == 'P'){

                var myObject = JSON.parse(JSON.stringify(grafo[mc][msg]));



                myObject.x = grafo[mc][msg].x + movX;
                myObject.y = grafo[mc][msg].y + movY;
                myObject.marca = 'move';

                grafoEspejo[mc][msg] = JSON.parse(JSON.stringify(myObject));

              }
              if(grafo[mc][msg].type == 'H')
                break;
              if(grafo[mc][msg] == 'S')
                break;
            }

          }

        }

      }
    }
    else{
      for(mc = 0; mc < trozoParaMover.length; mc++){
        if(trozoParaMover[mc].length > 0){
          for(msg = trozoParaMover[mc][4]+1; msg < grafo[mc].length; msg++){

            if(grafo[mc][msg].type == 'P'){
              
              var myObject = JSON.parse(JSON.stringify(grafo[mc][msg]));
              
              

              myObject.x = grafo[mc][msg].x + movX;
              myObject.y = grafo[mc][msg].y + movY;
              myObject.marca = 'move';
              
              grafoEspejo[mc][msg] = JSON.parse(JSON.stringify(myObject));

            }
            if(grafo[mc][msg].type == 'H')
              break;
            if(grafo[mc][msg] == 'S')
              break;
          }

        }
        
      }
    }
    
    dibujarEnLienzoEspejo(miLienzo);
    
  }
  
  
}

function moverTrozo2(e){
  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miLienzo = obtenerPosicionLienzoMarcado();
  
  if(puntoPartida.length > 0 && trozoParaMover.length > 0){
    var movX = (misCoordenadas[0] - puntoPartida[0]);
    var movY = (misCoordenadas[1] - puntoPartida[1]);
    var movement = true;
    
    console.log('***********');
    
    for(mc = 0; mc < trozoParaMover.length; mc++){
      if(trozoParaMover[mc].length > 0){
        for(msg = trozoParaMover[mc][4]+1; msg < grafo[mc].length; msg++){

          if(grafo[mc][msg].type == 'P'){
            
            if(grafoEspejo[mc][msg].x < 20 || grafoEspejo[mc][msg].x > 681-20){
              movement = false;
              if(grafoEspejo[mc][msg].x < 20 && grafoEspejo[mc][msg].x < minX)
                minX = grafoEspejo[mc][msg].x;
              if(grafoEspejo[mc][msg].x > 681-20 && grafoEspejo[mc][msg].x > maxX)
                maxX = grafoEspejo[mc][msg].x
            }
            
            if(grafoEspejo[mc][msg].y < 20 || grafoEspejo[mc][msg].y > 718-20){
              movement = false;
              if(grafoEspejo[mc][msg].y < 20 && grafoEspejo[mc][msg].y < minY)
                minY = grafoEspejo[mc][msg].y;
              if(grafoEspejo[mc][msg].y > 718-20 && grafoEspejo[mc][msg].y > maxY)
                  maxY = grafoEspejo[mc][msg].y;
            }
            
          }
          if(grafo[mc][msg].type == 'H')
            break;
          if(grafo[mc][msg] == 'S')
            break;
        }

      }
    }
    
    if(movement){
      for(mc = 0; mc < trozoParaMover.length; mc++){
        if(trozoParaMover[mc].length > 0){
          for(msg = trozoParaMover[mc][4]+1; msg < grafo[mc].length; msg++){

            if(grafo[mc][msg].type == 'P'){
              
              var myObject = JSON.parse(JSON.stringify(grafo[mc][msg]));

              myObject.x = grafo[mc][msg].x + movX;
              myObject.y = grafo[mc][msg].y + movY;
              myObject.marca = 'move';
              
              grafoEspejo[mc][msg] = JSON.parse(JSON.stringify(myObject));

            }
            if(grafo[mc][msg].type == 'H')
              break;
            if(grafo[mc][msg] == 'S')
              break;
          }

        }
      }
      
    }
    else{
      
      if(minX < 20){
        console.log(Math.abs(minX) + Math.abs(20))
        console.log(minX)
        for(mc = 0; mc < trozoParaMover.length; mc++){
          if(trozoParaMover[mc].length > 0){
            for(msg = trozoParaMover[mc][4]+1; msg < grafo[mc].length; msg++){

              if(grafo[mc][msg].type == 'P'){
                
                var myObject = JSON.parse(JSON.stringify(grafo[mc][msg]));

                myObject.x = grafoEspejo[mc][msg].x + Math.abs(minX) + Math.abs(20);
                myObject.y = grafoEspejo[mc][msg].y;
                myObject.marca = 'move';
                
                grafoEspejo[mc][msg] = JSON.parse(JSON.stringify(myObject));

              }
              if(grafo[mc][msg].type == 'H')
                break;
              if(grafo[mc][msg] == 'S')
                break;
            }

          }
        }
      }
      if(maxX > 681-20){
        console.log(Math.abs(maxX) + Math.abs(681-20))
        console.log(maxX)
      }
      
      if(minY < 20){
        console.log(Math.abs(minY) + Math.abs(20))
        console.log(minY)
      }
      if(maxY > 718-20){
        console.log(Math.abs(maxY) + Math.abs(718-20))
        console.log(maxY)
      }
      
    }
    //dibujarEnLienzoEspejo(miLienzo);
    
  }
  
  
}

function desmarcarPuntoPartida(e){
  
  var miLienzo = obtenerPosicionLienzoMarcado();
  //grafo = grafoEspejo.splice();
  if(limitadorDeMargen){
    
    if(minX < 20){
    
      //console.log(20 - minX)
      for(mc = 0; mc < trozoParaMover.length; mc++){
        if(trozoParaMover[mc].length > 0){
          for(msg = trozoParaMover[mc][4]+1; msg < grafo[mc].length; msg++){

            if(grafo[mc][msg].type == 'P'){

              var myObject = JSON.parse(JSON.stringify(grafo[mc][msg]));

              myObject.x = grafoEspejo[mc][msg].x + 20 - minX;
              myObject.y = grafoEspejo[mc][msg].y;
              myObject.marca = 'move';

              grafoEspejo[mc][msg] = JSON.parse(JSON.stringify(myObject));

            }
            if(grafo[mc][msg].type == 'H')
              break;
            if(grafo[mc][msg] == 'S')
              break;
          }

        }
      }
    }
  
    if(maxX > 681-20){

      //console.log(maxX-661)
      //console.log(maxX)
      //console.log(grafoEspejo[mc][msg].x)
      for(mc = 0; mc < trozoParaMover.length; mc++){
        if(trozoParaMover[mc].length > 0){
          for(msg = trozoParaMover[mc][4]+1; msg < grafo[mc].length; msg++){

            if(grafo[mc][msg].type == 'P'){

              var myObject = JSON.parse(JSON.stringify(grafo[mc][msg]));

              myObject.x = grafoEspejo[mc][msg].x - maxX + 661;
              myObject.y = grafoEspejo[mc][msg].y;
              myObject.marca = 'move';

              grafoEspejo[mc][msg] = JSON.parse(JSON.stringify(myObject));

            }
            if(grafo[mc][msg].type == 'H')
              break;
            if(grafo[mc][msg] == 'S')
              break;
          }

        }
      }
    }

    if(minY < 20){

      //console.log(20 - minX)
      for(mc = 0; mc < trozoParaMover.length; mc++){
        if(trozoParaMover[mc].length > 0){
          for(msg = trozoParaMover[mc][4]+1; msg < grafo[mc].length; msg++){

            if(grafo[mc][msg].type == 'P'){

              var myObject = JSON.parse(JSON.stringify(grafo[mc][msg]));

              myObject.x = grafoEspejo[mc][msg].x;
              myObject.y = grafoEspejo[mc][msg].y + 20 - minY;
              myObject.marca = 'move';

              grafoEspejo[mc][msg] = JSON.parse(JSON.stringify(myObject));

            }
            if(grafo[mc][msg].type == 'H')
              break;
            if(grafo[mc][msg] == 'S')
              break;
          }

        }
      }
    }
  
    if(maxY > 718-20){
      //console.log(maxY-708)
      for(mc = 0; mc < trozoParaMover.length; mc++){
        if(trozoParaMover[mc].length > 0){
          for(msg = trozoParaMover[mc][4]+1; msg < grafo[mc].length; msg++){

            if(grafo[mc][msg].type == 'P'){

              var myObject = JSON.parse(JSON.stringify(grafo[mc][msg]));

              myObject.x = grafoEspejo[mc][msg].x;
              myObject.y = grafoEspejo[mc][msg].y - maxY + 698;
              myObject.marca = 'move';

              grafoEspejo[mc][msg] = JSON.parse(JSON.stringify(myObject));

            }
            if(grafo[mc][msg].type == 'H')
              break;
            if(grafo[mc][msg] == 'S')
              break;
          }

        }
      }
    }
    
  }
  
  
  puntoPartida = new Array();
  minX= 1000;
  maxX= -1000;
  minY= 1000;
  maxY= -1000;
  
  for(gec = 0; gec < grafo.length; gec++){
    
    for(gec2 = 0; gec2 < grafo[gec].length; gec2++){
      
      if(grafo[gec][gec2].type == 'P'){
        var myObject = JSON.parse(JSON.stringify(grafoEspejo[gec][gec2]));
        grafo[gec][gec2] = JSON.parse(JSON.stringify(myObject));
      }
      
      if(grafo[gec][gec2].type == 'H'){
        var myObject = JSON.parse(JSON.stringify(grafoEspejo[gec][gec2]));
        grafo[gec][gec2] = JSON.parse(JSON.stringify(myObject));
      }
      
      if(grafoEspejo[gec][gec2] == 'S')
        grafo[gec][gec2] = grafoEspejo[gec][gec2];
      //console.log(grafoEspejo[gec][gec2]);
      //console.log(grafo[gec][gec2]);
    }
  }
  
  //punteroDeDibujo = new Array();
  //grafoEspejo = new Array();
  //copiarGrafo(grafo, grafoEspejo);
  dibujarEnLienzo(miLienzo);
  marcarTrozo(trozoParaMover);
  trozoParaMover = new Array();
  
}

svg_lienzo.addEventListener('mousedown', function(e){
  switch(modo){
    case 'dibujo':
      obtenerPosicionParaDibujar(e)
      break;
    case 'edicion':
      break;
    case 'mover':
      marcarPuntoPartida(e)
      break;
  }
}, false);

svg_lienzo.addEventListener('mousemove', function(e){
  switch(modo){
    case 'dibujo':
      break;
    case 'edicion':
      break;
    case 'mover':
      moverTrozo(e)
      break;
  }
  
}, false);

svg_lienzo.addEventListener('mouseup', function(e){
  switch(modo){
    case 'dibujo':
      break;
    case 'edicion':
      break;
    case 'mover':
      desmarcarPuntoPartida(e)
      break;
  }
  
}, false);

svg_lienzo.addEventListener('mouseleave', function(e){
  switch(modo){
    case 'dibujo':
      break;
    case 'edicion':
      break;
    case 'mover':
      desmarcarPuntoPartida(e)
      break;
  }
  
}, false);


window.onload = init();