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
  dibujar()
  if(zoomActive){
    svgContent = document.getElementById('miSVGLienzo')
    svgZoomContent =  document.getElementById('zoomContentSvg')
    if(svgZoomContent!=null){
      while (svgZoomContent.firstChild) {
          svgZoomContent.removeChild(svgZoomContent.firstChild);
      }
      loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
    }

  }
}

var markGrade = function(newGrade){
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

var setTagGrade = function(newtagGrade){
  //console.log('848484848484848484848484')
  //console.log(newtagGrade)
  //console.log('848484848484848484848484')
  tagGrado = newtagGrade;

  if(tagEditable.length > 0){
    console.log(grafo[tagEditable[0]][tagEditable[1]])
    grafo[tagEditable[0]][tagEditable[1]].tagAngulo = tagGrado;
    //tgS_txt = 'L'grafo[tagEditable[0]][tagEditable[1]];
    var miLienzo = obtenerPosicionLienzoMarcado();
    dibujarEnLienzo(miLienzo)
    copiarGrafo(grafo, grafoEspejo)
  }


  switch(tagGrado){
    case 0:
      tgS_0.className = 'tagAngle tg-0 clicked';
      tgS_30.className = 'tagAngle tg-30';
      tgS_90.className = 'tagAngle tg-90';
      tgS_150.className = 'tagAngle tg-150';
      tgS_210.className = 'tagAngle tg-210';
      tgS_270.className = 'tagAngle tg-270';
      tgS_330.className = 'tagAngle tg-330';
      break;
    case 30:
      tgS_0.className = 'tagAngle tg-0';
      tgS_30.className = 'tagAngle tg-30 clicked';
      tgS_90.className = 'tagAngle tg-90';
      tgS_150.className = 'tagAngle tg-150';
      tgS_210.className = 'tagAngle tg-210';
      tgS_270.className = 'tagAngle tg-270';
      tgS_330.className = 'tagAngle tg-330';
      break;
    case 90:
      tgS_0.className = 'tagAngle tg-0';
      tgS_30.className = 'tagAngle tg-30';
      tgS_90.className = 'tagAngle tg-90 clicked';
      tgS_150.className = 'tagAngle tg-150';
      tgS_210.className = 'tagAngle tg-210';
      tgS_270.className = 'tagAngle tg-270';
      tgS_330.className = 'tagAngle tg-330';
      break;
    case 150:
      tgS_0.className = 'tagAngle tg-0';
      tgS_30.className = 'tagAngle tg-30';
      tgS_90.className = 'tagAngle tg-90';
      tgS_150.className = 'tagAngle tg-150 clicked';
      tgS_210.className = 'tagAngle tg-210';
      tgS_270.className = 'tagAngle tg-270';
      tgS_330.className = 'tagAngle tg-330';
      break;
    case 210:
      tgS_0.className = 'tagAngle tg-0';
      tgS_30.className = 'tagAngle tg-30';
      tgS_90.className = 'tagAngle tg-90';
      tgS_150.className = 'tagAngle tg-150';
      tgS_210.className = 'tagAngle tg-210 clicked';
      tgS_270.className = 'tagAngle tg-270';
      tgS_330.className = 'tagAngle tg-330';
      break;
    case 270:
      tgS_0.className = 'tagAngle tg-0';
      tgS_30.className = 'tagAngle tg-30';
      tgS_90.className = 'tagAngle tg-90';
      tgS_150.className = 'tagAngle tg-150';
      tgS_210.className = 'tagAngle tg-210';
      tgS_270.className = 'tagAngle tg-270 clicked';
      tgS_330.className = 'tagAngle tg-330';
      break;
    case 330:
      tgS_0.className = 'tagAngle tg-0';
      tgS_30.className = 'tagAngle tg-30';
      tgS_90.className = 'tagAngle tg-90';
      tgS_150.className = 'tagAngle tg-150';
      tgS_210.className = 'tagAngle tg-210';
      tgS_270.className = 'tagAngle tg-270';
      tgS_330.className = 'tagAngle tg-330 clicked';
      break;
    default:
      tgS_txt.value = ''
      tgS_0.className = 'tagAngle tg-0';
      tgS_30.className = 'tagAngle tg-30';
      tgS_90.className = 'tagAngle tg-90';
      tgS_150.className = 'tagAngle tg-150';
      tgS_210.className = 'tagAngle tg-210';
      tgS_270.className = 'tagAngle tg-270';
      tgS_330.className = 'tagAngle tg-330';
      //grado = 30;
      break;
  }
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////

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

var update = new Date(),
    use = new Date(),
    creation = new Date(),
    tagGrado = 0,
    grado = 30,
    typeTub = 'vt',
    diametro = '1',
    distancia = 0,
    grafo = new Array(),

    modo = 'dibujo',

    punteroDeDibujo = new Array(),
    punteroDeEdicion = new Array(),

    puntoPartida = new Array(),//OJO


    trozoParaMover = new Array(),

    tagParaMover = new Array(),

    tagEditable = new Array(),

    tagsExtra = new Array(),//////////////////////////////////

    tagsExtraEspejo = new Array(),

    tagExtraParaMover = new Array(),

    circulosGrandesExtraParaMover = new Array(),

    circulosExtra = new Array(),
    circulosExtraEspejo = new Array(),
    circulosExtraParaMover = new Array(),

    brokenSegmentWaiting = new Array(),
    linkSegmentWaiting = new Array(),


    grafoEspejo = new Array(),

    numberPageData = new Array(),

    minX= 1000,
    maxX= -1000,
    minY= 1000,
    maxY= -1000,

    limitadorDeMargen = true,
    //textoCorto = false,
    textoCorto = true,
    permitirCodos = true,

    escala = 50,
    tolerancia = 5,
    toleranciaTag = 8,
    grosorLinea = 2,
    limiteDistanciaTubo = 5.8,
    tamanoFuenteGrafo = 14,

    tutorialArray = ['', '', '', 0, ''],

    zoomRadioLupa = 50,
    zoomActive = true,//false,
    zoomEscala = 4,

    zoomCapturaActiva = true,
    zoomCapturaRecalcular = true,

    addComponent = '',

    svgNS = 'http://www.w3.org/2000/svg',
    g_30 = document.getElementById('g_30'),
    g_90 = document.getElementById('g_90'),
    g_150 = document.getElementById('g_150'),
    g_210 = document.getElementById('g_210'),
    g_270 = document.getElementById('g_270'),
    g_330 = document.getElementById('g_330'),
    tgS_0 = document.getElementById('tgS_0'),
    tgS_30 = document.getElementById('tgS_30'),
    tgS_90 = document.getElementById('tgS_90'),
    tgS_150 = document.getElementById('tgS_150'),
    tgS_210 = document.getElementById('tgS_210'),
    tgS_270 = document.getElementById('tgS_270'),
    tgS_330 = document.getElementById('tgS_330'),
    tgS_listModifier = document.getElementById('tags-listModifier'),////////////////////////////////
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
    chckbx_ZoomActive = document.getElementById('chckbxZoomActive'),
    controlZoomLupa = document.getElementById('controlZoomLupa'),
    valueZoomLupa = document.getElementById('valueZoomLupa'),
    controlZoomRadioLupa = document.getElementById('controlZoomRadioLupa'),
    valueZoomRadioLupa = document.getElementById('valueZoomRadioLupa'),
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
    chckbx_Texto = document.getElementById('chckbxTextoCorto'),
    txt_tagSeleccionado = document.getElementById('tgS_txt'),
    chckbx_Codos = document.getElementById('chckbxCodos'),
    ctl_modeCanvas = document.getElementById('modeCanvas'),
    ctl_listaInstalaciones = document.getElementById('instalaciones_lista'),
    btn_lienzo_menu_new_Documento = document.getElementById('lienzo-menu-new-Documento'),
    btn_lienzo_menu_new_Cotas = document.getElementById('lienzo-menu-new-Cotas'),
    btn_lienzo_menu_new_Instalaciones = document.getElementById('lienzo-menu-new-Instalaciones'),
    btn_lienzo_menu_new_Propiedades = document.getElementById('lienzo-menu-new-Propiedades'),
    btn_lienzo_menu_new_Extra = document.getElementById('lienzo-menu-new-Extra'),
    btn_lienzo_menu_new_Componentes = document.getElementById('lienzo-menu-new-Componentes');

g_30.addEventListener('click', function(){setGrade(30)});
g_90.addEventListener('click', function(){setGrade(90)});
g_150.addEventListener('click', function(){setGrade(150)});
g_210.addEventListener('click', function(){setGrade(210)});
g_270.addEventListener('click', function(){setGrade(270)});
g_330.addEventListener('click', function(){setGrade(330)});
tgS_0.addEventListener('click', function(){setTagGrade(0)});
tgS_30.addEventListener('click', function(){setTagGrade(30)});
tgS_90.addEventListener('click', function(){setTagGrade(90)});
tgS_150.addEventListener('click', function(){setTagGrade(150)});
tgS_210.addEventListener('click', function(){setTagGrade(210)});
tgS_270.addEventListener('click', function(){setTagGrade(270)});
tgS_330.addEventListener('click', function(){setTagGrade(330)});
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

btn_lienzo_menu_new_Documento.addEventListener('click', function(){mostrarMenuNew('documento')});
btn_lienzo_menu_new_Cotas.addEventListener('click', function(){mostrarMenuNew('cotas')});
btn_lienzo_menu_new_Instalaciones.addEventListener('click', function(){mostrarMenuNew('instalaciones')});
btn_lienzo_menu_new_Propiedades.addEventListener('click', function(){mostrarMenuNew('propiedades')});
btn_lienzo_menu_new_Extra.addEventListener('click', function(){mostrarMenuNew('extra')});
btn_lienzo_menu_new_Componentes.addEventListener('click', function(){mostrarMenuNew('componentes')});

function init(){

  var isoData = JSON.parse(document.getElementById('myJsonAdress').value);
  var metricsData = isoData.ISOMETRICO;
  var graphData = metricsData.graphData;
  //console.log(document.getElementById('myJsonAdress').value)
  //console.log(isoData.ISOMETRICO.graphData)
  //console.log(isoData)
  //console.log(isoData.Loc)
  //console.log(metricsData)
  // console.log(graphData)
  //console.log(JSON.parse(graphData))

  //document.getElementById('first-draw').style.display = 'block';

  document.getElementById('loading').style.display = 'none';
  document.getElementById('lienzos').style.display = 'block';
  setGrade(30);
  setTub('et', '12');

  limiteDistanciaTubo = Math.round(parseFloat(document.getElementById('myVCaneria').value)*100)/100

  cargarGrafo();

  setValueScale(escala);
  setControlScale(escala);

  copiarGrafo(grafo, grafoEspejo);

  iniciarLienzos();
  //setValueRange(2);
  //setControlRange(2);

  // setActiveZoomLupa();
  chckbx_ZoomActive.checked = zoomActive
  setValueZoomLupa(zoomEscala);
  setControlZoomLupa(zoomEscala);

  setValueZoomRadioLupa(zoomRadioLupa);
  setControlZoomRadioLupa(zoomRadioLupa);


  setValueRange(grosorLinea);
  setControlRange(grosorLinea);

  dibujarEnLienzo(0);
  setMode('dibujo');
  ////setMode('mover');
  inicializarLista();
  limpiarAlertas();

  //if(zoomActive)
  svgZoomCreator('lienzo-hoja', 'miSVGLienzo', zoomEscala, zoomRadioLupa);
  chckbx_ZoomActive.checked = false
  setActiveZoomLupa()
}

function cargarGrafo(){
  //console.log(JSON.parse(JSON.stringify(document.getElementById('graphData'))));
  var miGraph = new Object();
  //miGraph = JSON.parse(document.getElementById('graphData'));
  miGraph = JSON.parse(document.getElementById('graphData').value);
  //console.log(Object.keys(miGraph).length);

  if(Object.keys(miGraph).length > 1){
    document.getElementById('first-draw').style.display = 'none';
  }

  if(Object.keys(miGraph).length == 0){
    ruta = new Array();

    tab = new Object();
    tab.id = 'Hoja 0';
    tab.name = 'Hoja 0'
    tab.type = 'H';

    ruta[0] = tab;
    grafo[0] = ruta;
    //console.log(miGraph)
    numberPageData[0] = '1 : 1'
  }
  else{

    //console.log(miGraph);
    //console.log('------------------------------');
    for(gi = 0; gi < miGraph.length; gi++){
      //console.log(miGraph[gi]);
      grafo[gi] = new Array();
      for(gci = 0; gci < miGraph[gi].length; gci++){
        //grafo[gi][gci] = new Object();
        grafo[gi][gci] = miGraph[gi][gci]//JSON.parse();
        //console.log(typeof miGraph[gi][gci]);
      }
    }
    numberPageData = JSON.parse(document.getElementById('numberPageData').value);
  }


  var miTagsExtra = new Object();
  miTagsExtra = JSON.parse(document.getElementById('tagsExtra').value);
  if(Object.keys(miTagsExtra).length == 0){
    tagsExtra = new Array();
  }
  else{
    for(gt = 0; gt < miTagsExtra.length; gt++){
      tagsExtra[gt] = miTagsExtra[gt];
    }
  }


  var miConfiguracion = new Object();
  miConfiguracion = JSON.parse(document.getElementById('configuraciones').value);
  //console.log(miConfiguracion)

  if(Object.keys(miConfiguracion).length == 0){
    //var miConf = new Array();
    miConfiguracion[0] = escala;
    valueScale.value = escala;
    controlScale.value = escala;
    miConfiguracion[1] = creation;
    miConfiguracion[2] = use;
    miConfiguracion[3] = update;

    //last edit
    miConfiguracion[4] = '1';//grosorLinea;
    miConfiguracion[5] = true;//cotas
    miConfiguracion[6] = false;//margen
    miConfiguracion[7] = false;//codos
    miConfiguracion[8] = '10';//tamaño de fuente

    grosorLinea = miConfiguracion[4];
    chckbx_Texto.checked = miConfiguracion[5];
    chckbx_Margen.checked = miConfiguracion[6];
    chckbx_Codos.checked = miConfiguracion[7];
    document.getElementById('valueGlobalTags').value = miConfiguracion[8];
    tamanoFuenteGrafo = miConfiguracion[8];

    document.getElementById('configuraciones').value = JSON.stringify(miConfiguracion);
    document.getElementById('escalaPage').innerHTML = '1 : ' + escala;
    var y = use.getFullYear();
    var m = (use.getMonth()+1).toString();
    var d = use.getDate().toString();

    if(d.length < 2)
      d ='0' + d;
    if(m.length < 2)
      m = '0' + m

    var f = use.getFullYear()+'-'+m+'-'+d;

    document.getElementById('useDate').value = f;


  }
  else{
    escala = miConfiguracion[0];
    valueScale.value = miConfiguracion[0];
    controlScale.value = miConfiguracion[0];
    use = new Date(miConfiguracion[2]);
    miConfiguracion[3] = new Date();
    document.getElementById('configuraciones').value = JSON.stringify(miConfiguracion);
    document.getElementById('escalaPage').innerHTML = '1 : ' + escala;
    //document.getElementById('useDate').value = '1 : ' + escala;

    var y = use.getFullYear();
    var m = (use.getMonth()+1).toString();
    var d = (use.getDate()+1).toString();

    if(d.length < 2)
      d ='0' + d;
    if(m.length < 2)
      m = '0' + m

    var f = use.getFullYear()+'-'+m+'-'+d;

    document.getElementById('useDate').value = f;

    ///last edit
    grosorLinea = miConfiguracion[4];

    chckbx_Texto.checked = miConfiguracion[5];
    textoCorto = miConfiguracion[5];

    chckbx_Margen.checked = miConfiguracion[6];
    limitadorDeMargen = miConfiguracion[6];

    chckbx_Codos.checked = miConfiguracion[7];
    permitirCodos = miConfiguracion[7];

    document.getElementById('valueGlobalTags').value = miConfiguracion[8];
    tamanoFuenteGrafo = miConfiguracion[8];
    //miConfiguracion[5] = true;//cotas
    //miConfiguracion[6] = false;//margen
    //miConfiguracion[7] = false;//codos
    //miConfiguracion[8] = '10';//tamaño de fuente

  }


}

function cleanSvgLienzo(svgZoomContent){
  while (svgZoomContent.firstChild) {
      svgZoomContent.removeChild(svgZoomContent.firstChild);
  }
}

function loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa){

  for(i = 0;i< svgContent.children.length; i++){
    element = svgContent.children[i];
    sendElement = element.cloneNode(true);
    attribute = sendElement.getAttribute("r");
    if(attribute != undefined)
      sendElement.setAttribute("r", ''+attribute*zoomEscala+'');
    attribute = sendElement.getAttribute("cx");
    if(attribute != undefined)
      sendElement.setAttribute("cx", ''+attribute*zoomEscala+'');
    attribute = sendElement.getAttribute("cy");
    if(attribute != undefined)
      sendElement.setAttribute("cy", ''+attribute*zoomEscala+'');

    attribute = sendElement.getAttribute("x");
    if(attribute != undefined)
        sendElement.setAttribute("x", attribute*zoomEscala);
    attribute = sendElement.getAttribute("y");
    if(attribute != undefined)
      sendElement.setAttribute("y", attribute*zoomEscala);

    attribute = sendElement.getAttribute("height");
    if(attribute != undefined)
      sendElement.setAttribute("height", parseFloat(attribute)*zoomEscala+"px");
    attribute = sendElement.getAttribute("width");
    if(attribute != undefined)
      sendElement.setAttribute("width", parseFloat(attribute)*zoomEscala+"px");

    attribute = sendElement.getAttribute("points");
    if(attribute != undefined){
      points = attribute
      // console.log(points.toString());
      vPartialPoints = points.split(" ")
      var nPoints = ""
      for(ip = 0; ip < vPartialPoints.length ;ip++){
      vSubPartialPoints = vPartialPoints[ip].split(",")
      	for(jp = 0; jp < vSubPartialPoints.length ;jp++){
      		// console.log(vSubPartialPoints[jp])5.......0+888880000

      		nPoints += vSubPartialPoints[jp]*zoomEscala
      		if(jp < vSubPartialPoints.length-1)
      			nPoints += ","
      	}
      	if(ip < vPartialPoints.length-1)
      		nPoints += " "
      }
      // console.log(nPoints)
      sendElement.setAttribute("points", nPoints);
      // console.log(JSON.parse("["+attribute+"]"))//sendElement.setAttribute("points", parseFloat(attribute)*2+"px");
    }


    attribute = sendElement.getAttribute("style");
    if(attribute != undefined){
      style = attribute
      if (attribute.includes("stroke-width")){
        sWidthValue = parseInt(attribute.substring(attribute.indexOf('stroke-width: ')+14, attribute.length))
        cWidth= "stroke-width: "+sWidthValue+";"
        style = attribute.substring(0, attribute.indexOf('stroke-width: ')+14)+
                sWidthValue*zoomEscala+
                attribute.substring(attribute.indexOf('stroke-width: ')
                +cWidth.length-1, attribute.length)
        attribute = style;
      }
      if (attribute.includes("font-size")){
        sWidthValue = parseInt(attribute.substring(attribute.indexOf('font-size: ')+11, attribute.length))
        cWidth= "font-size: "+sWidthValue+"px;"
        style = attribute.substring(0, attribute.indexOf('font-size: ')+11)+
                sWidthValue*zoomEscala+attribute.substring(attribute.indexOf('font-size: ')+cWidth.length-3, attribute.length)
      }
        sendElement.setAttribute("style", style);
    }

    attribute = sendElement.getAttribute("transform");
    if(attribute != undefined){
      transform = attribute
      if (attribute.includes("translate(")){
        xValue = parseFloat(attribute.substring(attribute.indexOf('translate(')+10, attribute.length))
        xWidth= "translate("+xValue+","
        finalString = attribute.substring(attribute.indexOf('translate(')+xWidth.length-1, attribute.length);
        yValue = parseFloat(finalString.substring(1))
        finalConcatPos = attribute.indexOf(')', attribute.indexOf("translate("))
        transform = attribute.substring(0, attribute.indexOf('translate(')+10) + xValue*zoomEscala +","+ yValue*zoomEscala +attribute.substring(finalConcatPos, attribute.length)

      }
      sendElement.setAttribute("transform", transform);
    }
    attribute = sendElement.getAttribute("x1");
    if(attribute != undefined)
        sendElement.setAttribute("x1", ''+attribute*zoomEscala+'');
    attribute = sendElement.getAttribute("y1");
    if(attribute != undefined)
      sendElement.setAttribute("y1", ''+attribute*zoomEscala+'');
    attribute = sendElement.getAttribute("x2");
    if(attribute != undefined)
      sendElement.setAttribute("x2", ''+attribute*zoomEscala+'');
    attribute = sendElement.getAttribute("y2");
    if(attribute != undefined)
      sendElement.setAttribute("y2", ''+attribute*zoomEscala+'');
    // console.log(svgContent.children[i]);
    svgZoomContent.appendChild(sendElement)
  }
}

function svgZoomCreator(idContainer, idSvgContent, zoomScale, radioZoom){
  divContainer = document.getElementById(idContainer)

  svgContent = document.getElementById(idSvgContent)
  svgContentHeight = svgContent.getAttribute('height')
  svgContentWidth = svgContent.getAttribute('width')
  svgContentClass = svgContent.getAttribute('class')

  divContainer.style.position = 'relative'
  divContainer.style.height = svgContentHeight+'px'
  divContainer.style.width = svgContentWidth+'px'

  divZoom = document.getElementById('zoomContainer')//document.createElement('div')
  divZoom.style.width = "100px"
  divZoom.style.height = "100px"
  divZoom.style.position = 'absolute'
  divZoom.style.overflow = 'hidden'
  divZoom.style.borderRadius = '50%'
  divZoom.style.boxShadow = '2px 2px 5px #999'
  divZoom.style.overflow = 'none'
  divZoom.style.top = '0px'
  divZoom.style.left = '0px'
  divZoom.style.border = '1px solid red';

  //
  if(zoomActive)
    divZoom.style.display = 'block'
  else
    divZoom.style.display = 'none'
  // divZoom.setAttribute('id', 'zoomContainer')
  divContainer.appendChild(divZoom)

  var svgZoomContent = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgZoomContent.setAttribute('id', 'zoomContentSvg')
  svgZoomContent.setAttribute('class', svgContentClass);
  svgZoomContent.setAttribute('width', svgContentWidth*zoomScale);
  svgZoomContent.setAttribute('height', svgContentHeight*zoomScale);
  svgZoomContent.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
  svgZoomContent.style.position = 'absolute'
  svgZoomContent.style.background = '#E5EBF4'
  // svgZoomContent.style.background = '#B3C5DF'

  divZoom.appendChild(svgZoomContent);
  cleanSvgLienzo(svgZoomContent)
  loadSvgLienzo(svgContent, svgZoomContent, zoomScale, radioZoom);


}
//funciones cuadraticas y de acotacion
function getIntersection(m, a, b, x, y, r){
  var _a = Math.pow(m, 2) + 1;
  var _b = 2*(y*m - x*Math.pow(m,2) - a - m*b);
  var _c = Math.pow(x,2)*Math.pow(m,2) - 2*x*y*m + Math.pow(y,2) + Math.pow(a,2) + 2*x*m*b - 2*y*b + Math.pow(b,2) - Math.pow(r,2);
  return [_a/_a, _b/_a, _c/_a]
}

function cuadraticaPositivo(_a, _b, _c){
  x = (-_b + Math.sqrt((Math.pow(_b, 2) - 4*_a*_c), 2))/2*_a
  return x
}

function cuadraticaNegativo(_a, _b, _c){
  x = (-_b - Math.sqrt((Math.pow(_b, 2) - 4*_a*_c), 2))/2*_a
  return x
}

function getValuesPoints(m, a, b, x, y, r){
  if(isFinite(m)){
    var cd = getIntersection(m, a, b, x, y, r)
    x1 = cuadraticaPositivo(cd[0], cd[1], cd[2]);
    x2 = cuadraticaNegativo(cd[0], cd[1], cd[2]);
    y1 = m*(x1-x)+y;
    y2 = m*(x2-x)+y;
    return [x1, y1, x2, y2]
  }
  else {
    x1 = x
    x2 = x
    var cd = [1, -2*b, Math.pow((x1-a), 2) + Math.pow(b, 2) - Math.pow(r, 2)]
    y1 = cuadraticaPositivo(cd[0], cd[1], cd[2]);
    y2 = cuadraticaNegativo(cd[0], cd[1], cd[2]);
    return [x1, y1, x2, y2]
  }
}

function getPendiente(x1, y1, x2, y2){
  return (y2-y1)/(x2-x1)
}

//si es intersectada por esta linea
function isIntersected(arrayProcess){
  if(arrayProcess.length < 4)
    return false
  else if(isNaN(arrayProcess[0]) || isNaN(arrayProcess[1]) || isNaN(arrayProcess[2]) || isNaN(arrayProcess[3]))
    return false
  return true
}
//si es intersectada ver sus cotas Bounds
//lowerBound cota inferior
//upperBound cota superior
function getBoundsCircleOrRectX(arrayProcess){
  if(arrayProcess[0] < arrayProcess[2])
    return [[arrayProcess[0], arrayProcess[1]], [arrayProcess[2], arrayProcess[3]]]
  else
    return [[arrayProcess[2], arrayProcess[3]], [arrayProcess[0], arrayProcess[1]]]
}

function getBoundsCircleOrRectY(arrayProcess){
  if(arrayProcess[1] < arrayProcess[3])
    return [[arrayProcess[0], arrayProcess[1]], [arrayProcess[2], arrayProcess[3]]]
  else
    return [[arrayProcess[2], arrayProcess[3]], [arrayProcess[0], arrayProcess[1]]]
}

function getBounds(x1, y1, x2, y2, cx,cy, r){
  x1 = Math.round(x1*100)/100
  y1 = Math.round(y1*100)/100
  x2 = Math.round(x2*100)/100
  y2 = Math.round(y2*100)/100
  cx = Math.round(cx*100)/100
  cy = Math.round(cy*100)/100
  r = Math.round(r*100)/100
  m = getPendiente(x1, y1, x2, y2)//pendiente de la recta
  // console.log('??????????????????????????????????');
  // console.log(x1);
  // console.log(y1);
  // console.log(x2);
  // console.log(y2);
  // console.log(cx);
  // console.log(cy);
  // console.log(r);
  // console.log(m);
  arrayProcess = getValuesPoints(m, cx, cy, x1, y1, r) // console.log(isIntersected(arrayProcess)); // console.log(arrayProcess);
  if(isIntersected(arrayProcess)){
    if(isFinite(m)){
      boundsCircle = getBoundsCircleOrRectX(arrayProcess)
      lowerBoundCircle = boundsCircle[0]
      upperBoundCircle = boundsCircle[1]

      boundsRect = getBoundsCircleOrRectX([x1, y1, x2, y2])
      lowerBoundRect = boundsRect[0]
      upperBoundRect = boundsRect[1]

      if(lowerBoundRect[0] < upperBoundCircle[0] && upperBoundRect[0] > lowerBoundCircle[0]){

        min = []
        max = []

        if(lowerBoundRect[0] > lowerBoundCircle[0])
          min = lowerBoundRect
        else
          min = lowerBoundCircle

        if(upperBoundRect[0] < upperBoundCircle[0])
          max = upperBoundRect
        else
          max = upperBoundCircle

        return{minimo: min, maximo: max}
      }
    }
    else{
      boundsCircle = getBoundsCircleOrRectY(arrayProcess)
      lowerBoundCircle = boundsCircle[0]
      upperBoundCircle = boundsCircle[1]

      boundsRect = getBoundsCircleOrRectY([x1, y1, x2, y2])
      lowerBoundRect = boundsRect[0]
      upperBoundRect = boundsRect[1]

      if(lowerBoundRect[1] < upperBoundCircle[1] && upperBoundRect[1] > lowerBoundCircle[1]){

        min = []
        max = []

        if(lowerBoundRect[1] > lowerBoundCircle[1])
          min = lowerBoundRect
        else
          min = lowerBoundCircle

        if(upperBoundRect[1] < upperBoundCircle[1])
          max = upperBoundRect
        else
          max = upperBoundCircle

        return{minimo: min, maximo: max}
      }
    }
    // else
    //   return {minimo: null, maximo: null}
  }
  return {minimo: null, maximo: null}
}

function getAllBoundsInGraphData(gData, cx, cy, r){
  // console.log(gData);
  // obtenerPosicionLienzoMarcado
  miPosLienzo = obtenerPosicionLienzoMarcado()
  arrayPointsData = []
  // console.log(miLienzo);

  // prooooob = 0

  for(ci = 0; ci < gData.length; ci++){
    posLienzo = -1
    for(cj = 0; cj < gData[ci].length; cj++){

      var elData = gData[ci][cj]
      var elNextData = gData[ci][cj+1]

      if(elData.type == 'H')
        posLienzo++
      if(posLienzo > miPosLienzo)
        break;
      if(posLienzo == miPosLienzo){
        if(elData.type == 'P' && elNextData && elNextData.type == 'P'){
          bounds = getBounds(elData.x, elData.y, elNextData.x, elNextData.y, cx, cy, r)
          // console.log(elData);
          // console.log(bounds);
          if(bounds.minimo != null && bounds.maximo != null){
            bounds.typeTub = elData.typeTub
            arrayPointsData.push(bounds)
          }
        }
      }
    }
  }
  // console.log(arrayPointsData);
  return arrayPointsData
}
//fin funciones cuadraticas

// inicio funciones del vector de circulosExtra y su controlador

function getNumberSegmentInPage(nmGrafo, nmPosition){
  var ncl = nmPosition;
  var counterSegment = 0;

  while(grafo[nmGrafo][ncl].type != "H" && ncl >= 0){
    if(grafo[nmGrafo][ncl].type == "S")
      counterSegment++
    ncl --
  }
  return counterSegment
}

function moveCirclesBase(mX, mY, ceGrafo, ceSegmento){
  console.log(mX);
  console.log(mY);
  console.log(ceGrafo);
  console.log("-----------");
  console.log(ceSegmento);
  console.log("-----------");
  console.log("++++++++++++++++");
  var posicionLienzoCE = obtenerPosicionLienzoMarcado();
  // console.log(obtenerPosicionLienzoMarcado());
  console.log("++++++++++++++++");
  for(ce = 0; ce < circulosExtraEspejo.length; ce = ce+2){
    if(circulosExtraEspejo[ce].hoja == posicionLienzoCE && circulosExtraEspejo[ce].grafo == ceGrafo && circulosExtraEspejo[ce].segmento == ceSegmento-1){
      console.log("Encontrada coincidencia");
      console.log(circulosExtraEspejo[ce]);
      // circulosExtraEspejo[ce].x = circulosExtra[ce].x + mX
      // circulosExtraEspejo[ce].y = circulosExtra[ce].y + mY

      var myObjectCircle = JSON.parse(JSON.stringify(circulosExtra[ce]));
      myObjectCircle.x = circulosExtra[ce].x + mX
      myObjectCircle.y = circulosExtra[ce].y + mY
      circulosExtraEspejo[ce] = JSON.parse(JSON.stringify(myObjectCircle));
    }
  }

}

function getLastPositionInPage(){
  var tam = circulosExtra.length
  var miHoja = obtenerPosicionLienzoMarcado();
  for(gPos = 0; gPos < tam; gPos++){
    if(circulosExtra[gPos].activo == true && circulosExtra[gPos].hoja == miHoja)
      return gPos
  }
  return -1
}

function corteValidation(valueVal){
  for(vl = 0; vl < valueVal.length; vl++){
    if(isNaN(valueVal[vl])){
      return false;
    }
  }
  return true;
}

function instalacionValidation(valueVal){
  if(valueVal == 'ypfb')
    return true;
  else if(valueVal== '0')
    return false;
  else{
    for(vl = 0; vl < valueVal.length; vl++){
      if(isNaN(valueVal[vl])){
        return false;
      }
    }
  }
  return true;
}

function existsSegmentInPage(instalacion, segmento){
  var intInstalacion = parseInt(instalacion)
  var miHojaSegment = obtenerPosicionLienzoMarcado()
  var cSeg = 0 // es el numero de cortes en la hoja no la posicion del corte
  var cHoja = -1
  var pHoja = -1
  for(mhs = 0; mhs < grafo[intInstalacion].length; mhs++){
    if(grafo[intInstalacion][mhs].type == "H")
      cHoja ++
    if(cHoja == miHojaSegment){
      pHoja = mhs + 1
      break;
    }
  }
  console.log(pHoja);
  if(pHoja > -1){
    var resp = false
    for(mhs = pHoja; mhs < grafo[intInstalacion].length; mhs++){
      if(grafo[intInstalacion][mhs].type == "H")
        break;
      if(grafo[intInstalacion][mhs].type == "S")
        cSeg++
      if(cSeg == segmento && cSeg > 0){
        resp = true;
        break;
      }
    }
    return resp
  }
  else return false
  return false
}

function changeInputTblCircle(element){
  // console.log(element);
  // console.log(element.value);
  // console.log(Boolean(element.getAttribute("activo")))
  if(element.getAttribute("activo") === "true"){
    if(element.getAttribute("tipo") == "instalacion"){
      // alert("Se modificara instalacion")
      if(element.value != ""){
        if(instalacionValidation(element.value)){
          if(element.value == "ypfb" || element.value == "1"){
            var posChange = parseInt(element.getAttribute("posicion"))
            circulosExtra[posChange].grafo = parseInt(element.value)-1
            circulosExtra[posChange+1].grafo = parseInt(element.value)-1
              element.value = "ypfb"
          }
          else{
            if(parseInt(element.value) > grafo.length){
              alert("Esa instalación no ha sido creada")
              element.value = element.getAttribute("valor")
            }
          }
        }
        else{
          alert("Valor ingresado no válido")
          element.value = element.getAttribute("valor")
        }
      }
      else{
        alert("Es necesario introducir un valor")
        element.value = element.getAttribute("valor")
      }
      // corteValidation()
    }
    else if (element.getAttribute("tipo") == "segmento") {
      // alert("Se modificara segmento")
      if(element.value != ""){
        if(corteValidation(element.value)){
          if(existsSegmentInPage(parseInt(element.getAttribute("instalacion")), parseInt(element.value))){
            var posChange = parseInt(element.getAttribute("posicion"))
            circulosExtra[posChange].segmento = parseInt(element.value)-1
            circulosExtra[posChange+1].segmento = parseInt(element.value)-1
          }
          else{
            alert("Ese corte no existe en esta hoja")
            element.value = element.getAttribute("valor")
          }
        }
        else{
          alert("Valor ingresado no válido")
          element.value = element.getAttribute("valor")
        }
      }
      else{
        alert("Es necesario introducir un valor")
        element.value = element.getAttribute("valor")
      }
    }
  }
  else
  {
    alert("No se puede cambiar un elemento aplicado")
    element.value = element.getAttribute("valor")
  }
}

function drawCirclesList(){
  // function drawCirclesList(element, hoja){
  //  var tblCircles = element.closest("#tblCirclesList").tBodies[0];
  var hoja = obtenerPosicionLienzoMarcado()
  var tblCircles = document.getElementById("tblCirclesList").tBodies[0];
  tblCircles.innerHTML = ""
  var tmce = circulosExtra.length
  for(i = 0; i < tmce; i = i + 2){
    if(circulosExtra[i].hoja == hoja){
      var tr = document.createElement('tr')
      var td = document.createElement('td')
      if(circulosExtra[i].activo)
        td.className = 'tblCell tblActive'
      else
        td.className = 'tblCell tblNotActive'

       var input = document.createElement('input')
       input.setAttribute('type', 'text')

       input.setAttribute('posicion', i)
       input.setAttribute('hoja', circulosExtra[i].hoja)
       input.setAttribute('instalacion', circulosExtra[i].grafo)
       input.setAttribute('segmento', circulosExtra[i].segmento)
       input.setAttribute('tipo', 'instalacion')
       input.setAttribute('activo', circulosExtra[i].activo)
       input.setAttribute('onchange', 'changeInputTblCircle(this)')

       input.className = 'tblInput'
      if(circulosExtra[i].grafo == 0){
        input.setAttribute('value', 'ypfb')
        input.setAttribute('valor', 'ypfb')
      }
      else{
        input.setAttribute('value', circulosExtra[i].grafo+1)
        input.setAttribute('valor', circulosExtra[i].grafo+1)
      }

       td.appendChild(input)
       tr.appendChild(td)

       var td = document.createElement('td')
       if(circulosExtra[i].activo)
         td.className = 'tblCell tblActive'
       else
         td.className = 'tblCell tblNotActive'
       var input = document.createElement('input')
       input.setAttribute('type', 'text')

       input.setAttribute('posicion', i)
       input.setAttribute('hoja', circulosExtra[i].hoja)
       input.setAttribute('instalacion', circulosExtra[i].grafo)
       input.setAttribute('segmento', circulosExtra[i].segmento)
       input.setAttribute('tipo', 'segmento')
       input.setAttribute('activo', circulosExtra[i].activo)
       input.setAttribute('onchange', 'changeInputTblCircle(this)')

       input.className = 'tblInput'
       input.setAttribute('value', circulosExtra[i].segmento + 1)
       input.setAttribute('valor', circulosExtra[i].segmento + 1)

       td.appendChild(input)
       input = document.createElement('input')
       input.setAttribute('type', 'button')
       input.className = 'btnMinus'
       input.setAttribute('value', '-')
       input.setAttribute('posicion', i)
       input.setAttribute('onclick', 'delCircleCreatorElement(this)')
       td.appendChild(input)
      //  input = document.createElement('input')
      //  input.setAttribute('type', 'button')
      //  input.className = 'btnPlus'
      //  input.setAttribute('value', '+')
      //  input.setAttribute('onclick', 'addCircleCreatorElement(this)')
      //  td.appendChild(input)

       tr.appendChild(td)
       tblCircles.appendChild(tr)
     }
   }
}

function delCircleCreatorElement(element){
  // console.log(parseInt(element.getAttribute("posicion")));
  posicion = parseInt(element.getAttribute("posicion"))
  circulosExtra.splice(posicion, 2)
  circulosExtraEspejo.splice(posicion, 2)
  drawCirclesList();
  dibujarEnLienzo(obtenerPosicionLienzoMarcado());

}

function addCircleCreatorElement(element){

  if(existsSegmentInPage(0, 1)){
    var hoja = obtenerPosicionLienzoMarcado();

    var objCircleFat = new Object();
    objCircleFat.content = new Array();
    objCircleFat.escalaBase = 0;
    objCircleFat.grafo = 0
    objCircleFat.hoja = hoja
    objCircleFat.r = 50
    objCircleFat.segmento = 0
    objCircleFat.x = 0
    objCircleFat.y = 0
    objCircleFat.activo = true

    var objCircleSon = new Object();
    objCircleSon.content = new Array();
    objCircleSon.dataLines = new Array();
    objCircleSon.escala = 0;
    objCircleSon.grafo = 0
    objCircleSon.hoja = hoja
    objCircleSon.r = 50
    objCircleSon.segmento = 0
    objCircleSon.x = 0
    objCircleSon.y = 0
    objCircleSon.activo = true

    circulosExtra.push(objCircleFat)
    circulosExtra.push(objCircleSon)
    // console.log(circulosExtra);
    circulosExtraEspejo = JSON.parse(JSON.stringify(circulosExtra))
    drawCirclesList()
  }
  else{
    alert("no se puede crear sobre un corte que no existe")
  }

}

function cargarGrafoOLD(){

  tagsExtra[0] = new Object();
  tagsExtra[0].content = 'Hola';
  tagsExtra[0].x = 200;
  tagsExtra[0].y = 200;
  tagsExtra[0].size = 100;
  tagsExtra[0].inclinacion = 90;
  tagsExtra[0].hoja = 0;

  tagsExtra[1] = new Object();
  tagsExtra[1].content = 'Adios';
  tagsExtra[1].x = 200;
  tagsExtra[1].y = 200;
  tagsExtra[1].size = 40;
  tagsExtra[1].inclinacion = 0;
  tagsExtra[1].hoja = 2;

  tagsExtra[2] = new Object();
  tagsExtra[2].content = 'Pepe';
  tagsExtra[2].x = 250;
  tagsExtra[2].y = 250;
  tagsExtra[2].size = 40;
  tagsExtra[2].inclinacion = 0;
  tagsExtra[2].hoja = 0;

  tagsExtra[3] = new Object();
  tagsExtra[3].content = 'Pepe';
  tagsExtra[3].x = 300;
  tagsExtra[3].y = 300;
  tagsExtra[3].size = 40;
  tagsExtra[3].inclinacion = 0;
  tagsExtra[3].hoja = 1;

  tagsExtra[4] = new Object();
  tagsExtra[4].content = 'Pepe';
  tagsExtra[4].x = 50;
  tagsExtra[4].y = 50;
  tagsExtra[4].size = 40;
  tagsExtra[4].inclinacion = 0;
  tagsExtra[4].hoja = 0;//3;

  tagsExtra[5] = new Object();
  tagsExtra[5].content = 'Pepe';
  tagsExtra[5].x = 60;
  tagsExtra[5].y = 60;
  tagsExtra[5].size = 40;
  tagsExtra[5].inclinacion = 0;
  tagsExtra[5].hoja = 1;

  tagsExtra[6] = new Object();
  tagsExtra[6].content = 'Pepe';
  tagsExtra[6].x = 80;
  tagsExtra[6].y = 80;
  tagsExtra[6].size = 40;
  tagsExtra[6].inclinacion = 0;
  tagsExtra[6].hoja = 0;//3;

  tagsExtra[7] = new Object();
  tagsExtra[7].content = 'Pepe';
  tagsExtra[7].x = 90;
  tagsExtra[7].y = 90;
  tagsExtra[7].size = 40;
  tagsExtra[7].inclinacion = 0;
  tagsExtra[7].hoja = 0;

  tagsExtra[8] = new Object();
  tagsExtra[8].content = 'Pepe';
  tagsExtra[8].x = 400;
  tagsExtra[8].y = 400;
  tagsExtra[8].size = 40;
  tagsExtra[8].inclinacion = 0;
  tagsExtra[8].hoja = 2;

  tagsExtra[9] = new Object();
  tagsExtra[9].content = 'Pepe';
  tagsExtra[9].x = 375;
  tagsExtra[9].y = 375;
  tagsExtra[9].size = 40;
  tagsExtra[9].inclinacion = 0;
  tagsExtra[9].hoja = 0;

  tagsExtra[10] = new Object();
  tagsExtra[10].content = 'Pepux';
  tagsExtra[10].x = 420;
  tagsExtra[10].y = 420;
  tagsExtra[10].size = 40;
  tagsExtra[10].inclinacion = 0;
  tagsExtra[10].hoja = 0;

  ruta = new Array();
  neoRuta = new Array();
  miNeoRuta = new Array();
  tab = new Object();
  tab.id = 'Hoja 0';
  tab.name = 'Hoja 0'
  tab.type = 'H';
  //tab.tags = tagsExtra;

  ruta[0] = tab;

  seg = new Object();
  seg.type = 'S';
  ruta[1] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 21;
  punto.y = 21;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 21;
  punto.tagY = 21;
  punto.tagAngulo = 30;
  ruta[2] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 50;
  punto.y = 50;
  punto.angulo = 30;
  punto.typeTub = 'et';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 50;
  punto.tagY = 50;
  punto.tagAngulo = 30;
  ruta[3] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 50;
  punto.y = 100;
  punto.angulo = 30;
  ruta[4] = punto;

  seg = new Object();
  seg.type = 'S';
  ruta[5] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 150;
  punto.y = 150;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 150;
  punto.tagY = 150;
  punto.tagAngulo = 30;
  ruta[6] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 200;
  punto.y = 200;
  punto.angulo = 30;
  ruta[7] = punto;

  tab = new Object();
  tab.id = 'Hoja 1';
  tab.name = 'Hoja 1'
  tab.type = 'H';
  ruta[8] = tab;

  seg = new Object();
  seg.type = 'S';
  ruta[9] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 50;
  punto.y = 50;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 50;
  punto.tagY = 50;
  punto.tagAngulo = 30;
  ruta[10] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 70;
  punto.y = 85;
  punto.angulo = 30;
  punto.typeTub = 'ep';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 70;
  punto.tagY = 85;
  punto.tagAngulo = 30;
  punto.instalacion = '1';
  ruta[11] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 200;
  punto.y = 200;
  punto.angulo = 30;
  punto.typeTub = 'ep';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 200;
  punto.tagY = 200;
  punto.tagAngulo = 30;
  punto.instalacion = '4'
  ruta[12] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 200;
  punto.y = 250;
  punto.angulo = 30;
  ruta[13] = punto;

  tab = new Object();
  tab.id = 'Hoja 2';
  tab.name = 'Hoja 2'
  tab.type = 'H';
  ruta[14] = tab;

  tab = new Object();
  tab.id = 'Hoja 3';
  tab.name = 'Hoja 3'
  tab.type = 'H';
  ruta[15] = tab;

  seg = new Object();
  seg.type = 'S';
  ruta[16] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 70;
  punto.y = 85;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 70;
  punto.tagY = 85;
  punto.tagAngulo = 30;
  ruta[17] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 200;
  punto.y = 200;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 200;
  punto.tagY = 200;
  punto.tagAngulo = 30;
  ruta[18] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 200;
  punto.y = 300;
  punto.angulo = 30;
  ruta[19] = punto;

  grafo[0] = ruta;

  /////////////////////////////////////////////////////////////////////////////

  tab = new Object();
  tab.id = 'Hoja 0';
  tab.name = 'Hoja 0'
  tab.type = 'H';
  neoRuta[0] = tab;

  tab = new Object();
  tab.id = 'Hoja 1';
  tab.name = 'Hoja 1'
  tab.type = 'H';
  neoRuta[1] = tab;

  seg = new Object();
  seg.type = 'S';
  seg.padre = '0';
  neoRuta[2] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 70;
  punto.y = 85;
  punto.angulo = 30;
  punto.typeTub = 'ep';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 70;
  punto.tagY = 85;
  punto.tagAngulo = 30;
  neoRuta[3] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 100;
  punto.y = 50;
  punto.angulo = 30;
  punto.typeTub = 'ep';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 100;
  punto.tagY = 50;
  punto.tagAngulo = 30;
  neoRuta[4] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 150;
  punto.y = 85;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 150;
  punto.tagY = 85;
  punto.tagAngulo = 30;
  punto.instalacion = '2';
  neoRuta[5] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 200;
  punto.y = 50;
  punto.angulo = 30;
  neoRuta[6] = punto;



  tab = new Object();
  tab.id = 'Hoja 2';
  tab.name = 'Hoja 2'
  tab.type = 'H';
  neoRuta[7] = tab;

  seg = new Object();
  seg.type = 'S';
  neoRuta[8] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 70;//70;
  punto.y = 85;//85;
  punto.angulo = 30;
  punto.typeTub = 'et';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 70;
  punto.tagY = 85;
  punto.tagAngulo = 30;
  neoRuta[9] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 250;//100;
  punto.y = 250;//75;
  punto.angulo = 30;
  neoRuta[10] = punto;

  seg = new Object();
  seg.type = 'S';
  neoRuta[11] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 70;
  punto.y = 85;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 100;
  punto.tagY = 75;
  punto.tagAngulo = 30;
  neoRuta[12] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 200;
  punto.y = 275;
  punto.angulo = 30;
  neoRuta[13] = punto;

  tab = new Object();
  tab.id = 'Hoja 3';
  tab.name = 'Hoja 3'
  tab.type = 'H';

  neoRuta[7] = tab;

  grafo[1] = neoRuta;

  ////////////////////////////////////////////////////////////////////

  tab = new Object();
  tab.id = 'Hoja 0';
  tab.name = 'Hoja 0'
  tab.type = 'H';
  miNeoRuta[0] = tab;

  tab = new Object();
  tab.id = 'Hoja 1';
  tab.name = 'Hoja 1'
  tab.type = 'H';
  miNeoRuta[1] = tab;

  seg = new Object();
  seg.type = 'S';
  seg.padre = '1';
  miNeoRuta[2] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 150;
  punto.y = 85;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 150;
  punto.tagY = 85;
  punto.tagAngulo = 30;
  miNeoRuta[3] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 250;
  punto.y = 250;
  punto.angulo = 30;
  punto.typeTub = 'ep';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 250;
  punto.tagY = 250;
  punto.tagAngulo = 30;
  punto.instalacion = '3';
  miNeoRuta[4] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 300;
  punto.y = 300;
  punto.angulo = 30;
  miNeoRuta[5] = punto;

  tab = new Object();
  tab.id = 'Hoja 2';
  tab.name = 'Hoja 2'
  tab.type = 'H';
  miNeoRuta[6] = tab;

  seg = new Object();
  seg.type = 'S';
  miNeoRuta[7] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 70;//170;
  punto.y = 85;//170;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 100;//170;
  punto.tagY = 75;//170;
  punto.tagAngulo = 30;
  miNeoRuta[8] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 250;
  punto.y = 250;
  punto.angulo = 30;
  miNeoRuta[9] = punto;


  tab = new Object();
  tab.id = 'Hoja 3';
  tab.name = 'Hoja 3'
  tab.type = 'H';
  miNeoRuta[6/*10*/] = tab;

  grafo[2] = miNeoRuta;

  ////////////////////////////////////////////////////////////////////

  miNeoRuta = new Array();
  tab = new Object();
  tab.id = 'Hoja 0';
  tab.name = 'Hoja 0'
  tab.type = 'H';
  miNeoRuta[0] = tab;

  tab = new Object();
  tab.id = 'Hoja 1';
  tab.name = 'Hoja 1'
  tab.type = 'H';
  miNeoRuta[1] = tab;

  seg = new Object();
  seg.type = 'S';
  seg.padre = '2';
  miNeoRuta[2] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 250;
  punto.y = 250;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 250;
  punto.tagY = 250;
  punto.tagAngulo = 30;
  miNeoRuta[3] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 250;
  punto.y = 300;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 250;
  punto.tagY = 300;
  punto.tagAngulo = 30;
  miNeoRuta[4] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 350;
  punto.y = 350;
  punto.angulo = 30;
  miNeoRuta[5] = punto;

  tab = new Object();
  tab.id = 'Hoja 2';
  tab.name = 'Hoja 2'
  tab.type = 'H';
  miNeoRuta[6] = tab;

  tab = new Object();
  tab.id = 'Hoja 3';
  tab.name = 'Hoja 3'
  tab.type = 'H';
  miNeoRuta[7] = tab;

  grafo[3] = miNeoRuta;

  ////////////////////////////////////////////////////////////////////

  miNeoRuta = new Array();
  tab = new Object();
  tab.id = 'Hoja 0';
  tab.name = 'Hoja 0'
  tab.type = 'H';
  miNeoRuta[0] = tab;

  tab = new Object();
  tab.id = 'Hoja 1';
  tab.name = 'Hoja 1'
  tab.type = 'H';
  miNeoRuta[1] = tab;

  seg = new Object();
  seg.type = 'S';
  seg.padre = '0';
  miNeoRuta[2] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 200;
  punto.y = 200;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 200;
  punto.tagY = 200;
  punto.tagAngulo = 30;
  miNeoRuta[3] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 50;
  punto.y = 250;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 50;
  punto.tagY = 250;
  punto.tagAngulo = 30;
  miNeoRuta[4] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 30;
  punto.y = 350;
  punto.angulo = 30;
  miNeoRuta[5] = punto;

  tab = new Object();
  tab.id = 'Hoja 2';
  tab.name = 'Hoja 2'
  tab.type = 'H';
  miNeoRuta[6] = tab;

  tab = new Object();
  tab.id = 'Hoja 3';
  tab.name = 'Hoja 3'
  tab.type = 'H';
  miNeoRuta[7] = tab;

  grafo[4] = miNeoRuta;
}

function hola(){
  alert('hola')
}

function mostrarMenuNew(signal){
  switch(signal){
    case 'documento':
      document.getElementById('lienzo-menu-new-box-documento').style.display = 'block';
      document.getElementById('lienzo-menu-new-box-propiedades').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-instalaciones').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-cotas').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-extra').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-componentes').style.display = 'none';
      btn_lienzo_menu_new_Documento.className = 'lienzo-menu-new-head-tag marked';
      btn_lienzo_menu_new_Cotas.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Instalaciones.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Propiedades.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Extra.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Componentes.className = 'lienzo-menu-new-head-tag';
      break;
    case 'propiedades':
      document.getElementById('lienzo-menu-new-box-documento').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-propiedades').style.display = 'block';
      document.getElementById('lienzo-menu-new-box-instalaciones').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-cotas').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-extra').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-componentes').style.display = 'none';
      btn_lienzo_menu_new_Documento.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Cotas.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Instalaciones.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Propiedades.className = 'lienzo-menu-new-head-tag marked';
      btn_lienzo_menu_new_Extra.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Componentes.className = 'lienzo-menu-new-head-tag';
      break;
    case 'instalaciones':
      document.getElementById('lienzo-menu-new-box-documento').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-propiedades').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-instalaciones').style.display = 'block';
      document.getElementById('lienzo-menu-new-box-cotas').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-extra').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-componentes').style.display = 'none';
      btn_lienzo_menu_new_Documento.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Cotas.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Instalaciones.className = 'lienzo-menu-new-head-tag marked';
      btn_lienzo_menu_new_Propiedades.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Extra.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Componentes.className = 'lienzo-menu-new-head-tag';
      break;
    case 'cotas':
      document.getElementById('lienzo-menu-new-box-documento').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-propiedades').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-instalaciones').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-cotas').style.display = 'block';
      document.getElementById('lienzo-menu-new-box-extra').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-componentes').style.display = 'none';
      btn_lienzo_menu_new_Documento.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Cotas.className = 'lienzo-menu-new-head-tag marked';
      btn_lienzo_menu_new_Instalaciones.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Propiedades.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Extra.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Componentes.className = 'lienzo-menu-new-head-tag';
      break;
    case 'extra':
      document.getElementById('lienzo-menu-new-box-documento').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-propiedades').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-instalaciones').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-cotas').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-extra').style.display = 'block';
      document.getElementById('lienzo-menu-new-box-componentes').style.display = 'none';
      btn_lienzo_menu_new_Documento.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Cotas.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Instalaciones.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Propiedades.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Extra.className = 'lienzo-menu-new-head-tag marked';
      btn_lienzo_menu_new_Componentes.className = 'lienzo-menu-new-head-tag';
      break;
    case 'componentes':
      document.getElementById('lienzo-menu-new-box-documento').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-propiedades').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-instalaciones').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-cotas').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-extra').style.display = 'none';
      document.getElementById('lienzo-menu-new-box-componentes').style.display = 'block';
      btn_lienzo_menu_new_Documento.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Cotas.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Instalaciones.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Propiedades.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Extra.className = 'lienzo-menu-new-head-tag';
      btn_lienzo_menu_new_Componentes.className = 'lienzo-menu-new-head-tag marked';
      break;
  }
}

function showSegments(miId){
  var miIndex = parseInt((miId.substring(11)));//segmentShow
  //alert(parseInt((miId.substring(11))))
  if(document.getElementById(miId).className == 'segmentShow'){
    document.getElementById(miId).className = 'segmentHide';

    if(document.getElementById('segmentContainer'+miIndex).children.length > 0)
      document.getElementById('segmentContainer'+miIndex).style.display = 'block';

  }
  else{
    document.getElementById(miId).className = 'segmentShow';
    document.getElementById('segmentContainer'+miIndex).style.display = 'none';
  }

}

function addThisSegment(miId){
  var miPreIndex = miId.substring(6);//segAdd
  //alert(miId);

  var signal = -1;
  for(pic = 0; pic < miPreIndex.length; pic++){
    if(miPreIndex[pic] == '_'){
      signal = pic;
      break;
    }
  }
  var miGrafo = parseInt(miPreIndex.substring(0, signal));
  var miPosicion = parseInt(miPreIndex.substring(signal+1));

  if(miPosicion){
    var insertPosicion = grafo[miGrafo].length;
    for(r = miPosicion+1; r < grafo[miGrafo].length; r++){
      //console.log(grafo[miGrafo][r]);
      if(grafo[miGrafo][r].type == 'H' || grafo[miGrafo][r].type == 'S'){
        insertPosicion = r;
        break;
      }
    }
    //console.log(grafo[miGrafo][insertPosicion])
    var backArray = new Array();
    var miPos = 0;
    for(r = insertPosicion; r < grafo[miGrafo].length; r++){
      backArray[miPos] = JSON.parse(JSON.stringify(grafo[miGrafo][r]));
      miPos++;
    }
    miPos = insertPosicion;
    var miSeg = new Object();
    miSeg.type = 'S';

    grafo[miGrafo][miPos] = miSeg;

    var miPunto = new Object();
    miPunto.type = 'P';
    miPunto.x = 300;
    miPunto.y = 300;
    miPunto.angulo = 270;
    miPunto.typeTub = 'vt';
    miPunto.diametro = '1';
    miPunto.distancia = 1;
    miPunto.tagX = 305;
    miPunto.tagY = 295;
    miPunto.tagAngulo = 270;
    miPos++;
    grafo[miGrafo][miPos] = miPunto;

    var miOtroPunto = calcularNuevoPunto(miPunto, miPunto.distancia, miPunto.angulo, escala);
    miPos++;
    grafo[miGrafo][miPos] = miOtroPunto;
    miPos++;
    for(r = 0; r < backArray.length; r++){
      grafo[miGrafo][miPos] = JSON.parse(JSON.stringify(backArray[r]));
      miPos++;
    }
    //function calcularNuevoPunto(pOrigen, distancia, angulo, miEscala)
    //calcularNuevoPunto()
    /*seg = new Object();
  seg.type = 'S';
  neoRuta[11] = seg;

  punto = new Object();
  punto.type = 'P';
  punto.x = 70;
  punto.y = 85;
  punto.angulo = 30;
  punto.typeTub = 'vt';
  punto.diametro = '1';
  punto.distancia = 0.35;
  punto.tagX = 100;
  punto.tagY = 75;
  punto.tagAngulo = 30;
  neoRuta[12] = punto;

  punto = new Object();
  punto.type = 'P';
  punto.x = 200;
  punto.y = 275;
  punto.angulo = 30;
  neoRuta[13] = punto;*/
    //alert(miGrafo+'  '+miPosicion);
    copiarGrafo(grafo, grafoEspejo);
    inicializarLista();
    var miLienzo = obtenerPosicionLienzoMarcado();
    dibujarEnLienzo(miLienzo)
    //marcarSegmento(miLienzo, miGrafo, miPosicion, 'ver')
  }
  else{
    //alert(miGrafo+'  '+'_1');
    var miLienzo = obtenerPosicionLienzoMarcado();
    //console.log(miLienzo);
    //console.log(grafo[0]);
    var hc = -1;
    for(gc = 0; gc < grafo[miGrafo].length; gc++){
      if(grafo[miGrafo][gc].type == 'H'){
        hc++;
      }
      if(hc == miLienzo){
        miPosicion = gc;
        break;
      }
    }
    //console.log(miPosicion);
    var insertPosicion = grafo[miGrafo].length;

    var backArray = new Array();
    var miPos = 0;
    for(r = miPosicion + 1; r < grafo[miGrafo].length; r++){
      backArray[miPos] = JSON.parse(JSON.stringify(grafo[miGrafo][r]));
      miPos++;
    }
    miPos = miPosicion + 1;
    var miSeg = new Object();
    miSeg.type = 'S';

    grafo[miGrafo][miPos] = miSeg;

    var miPunto = new Object();
    miPunto.type = 'P';
    miPunto.x = 300;
    miPunto.y = 300;
    miPunto.angulo = 270;
    miPunto.typeTub = 'vt';
    miPunto.diametro = '1';
    miPunto.distancia = 1;
    miPunto.tagX = 305;
    miPunto.tagY = 295;
    miPunto.tagAngulo = 270;
    miPos++;
    grafo[miGrafo][miPos] = miPunto;

    var miOtroPunto = calcularNuevoPunto(miPunto, miPunto.distancia, miPunto.angulo, escala);
    miPos++;
    grafo[miGrafo][miPos] = miOtroPunto;
    miPos++;
    for(r = 0; r < backArray.length; r++){
      grafo[miGrafo][miPos] = JSON.parse(JSON.stringify(backArray[r]));
      miPos++;
    }
    copiarGrafo(grafo, grafoEspejo);
    inicializarLista();
    dibujarEnLienzo(miLienzo);
  }
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
}

function addThisSegmentTuto(tGrafo, tPosicion, tMedidor, tTypeTub, tDiametro, tDistancia, tAngulo){
  //  var miPreIndex = miId.substring(6);//segAdd
  //alert(miId);

  /*var signal = -1;
  for(pic = 0; pic < miPreIndex.length; pic++){
    if(miPreIndex[pic] == '_'){
      signal = pic;
      break;
    }
  }*/
  var miGrafo = tGrafo;//0;//parseInt(miPreIndex.substring(0, signal));
  var miPosicion = tPosicion;//1;//parseInt(miPreIndex.substring(signal+1));
  // console.log(grafo[miGrafo].length);
  // console.log(grafo[miGrafo]);
  // console.log(miPosicion);

  if(miPosicion){
    var insertPosicion = grafo[miGrafo].length; // 1
    for(r = miPosicion+1; r < grafo[miGrafo].length; r++){
      //console.log(grafo[miGrafo][r]);
      if(grafo[miGrafo][r].type == 'H' || grafo[miGrafo][r].type == 'S'){
        insertPosicion = r;
        break;
      }
    }
    //console.log(grafo[miGrafo][insertPosicion])
    var backArray = new Array();
    var miPos = 0;
    for(r = insertPosicion; r < grafo[miGrafo].length; r++){
      backArray[miPos] = JSON.parse(JSON.stringify(grafo[miGrafo][r]));
      miPos++;
    }
    miPos = insertPosicion; // 1
    var miSeg = new Object();
    miSeg.type = 'S';

    grafo[miGrafo][miPos] = miSeg;

    var miPunto = new Object();
    miPunto.type = 'P';
    miPunto.x = 300;
    miPunto.y = 300;
    // console.log(tMedidor);

    switch(tMedidor){
      case 1: miPunto.medidorIzquierdaArriba = 'active'; break;
      case 2: miPunto.medidorIzquierdaDerecha = 'active'; break;
      case 3: miPunto.medidorIzquierdaIzquierda = 'active'; break;
      case 4: miPunto.medidorIzquierdaAbajo = 'active'; break;
      case 5: miPunto.medidorDerechaArriba = 'active'; break;
      case 6: miPunto.medidorDerechaDerecha = 'active'; break;
      case 7: miPunto.medidorDerechaIzquierda = 'active'; break;
      case 8: miPunto.medidorDerechaAbajo = 'active'; break;
      //
      case 9: miPunto.reguladorIzquierdaArriba = 'active'; break;
      case 10: miPunto.reguladorIzquierdaDerecha = 'active'; break;
      case 11: miPunto.reguladorIzquierdaIzquierda = 'active'; break;
      case 12: miPunto.reguladorIzquierdaAbajo = 'active'; break;
      case 13: miPunto.reguladorDerechaArriba = 'active'; break;
      case 14: miPunto.reguladorDerechaDerecha = 'active'; break;
      case 15: miPunto.reguladorDerechaIzquierda = 'active'; break;
      case 16: miPunto.reguladorDerechaAbajo = 'active'; break;
      //
      case 17: miPunto.reguladorIzquierdaArribaSIM = 'active'; break;
      case 18: miPunto.reguladorIzquierdaDerechaSIM = 'active'; break;
      case 19: miPunto.reguladorIzquierdaIzquierdaSIM = 'active'; break;
      case 20: miPunto.reguladorIzquierdaAbajoSIM = 'active'; break;
      case 21: miPunto.reguladorDerechaArribaSIM = 'active'; break;
      case 22: miPunto.reguladorDerechaDerechaSIM = 'active'; break;
      case 23: miPunto.reguladorDerechaIzquierdaSIM = 'active'; break;
      case 24: miPunto.reguladorDerechaAbajoSIM = 'active'; break;
    }
    miPunto.angulo = tAngulo;//270;
    miPunto.typeTub = tTypeTub;//'vt';
    miPunto.diametro = tDiametro;//'1';
    miPunto.distancia = tDistancia;//1;

    var auxPoint = new Object();
    auxPoint.x = 300
    auxPoint.y = 300
    auxPoint.angulo = tAngulo
    var separatorTagAux = getTagSeparationDefault(auxPoint);


    miPunto.tagX = separatorTagAux[0];
    miPunto.tagY = separatorTagAux[1];
    miPunto.tagAngulo = tAngulo;//270;
    miPos++;
    grafo[miGrafo][miPos] = miPunto;

    var miOtroPunto = calcularNuevoPunto(miPunto, miPunto.distancia, miPunto.angulo, escala);
    miPos++;
    grafo[miGrafo][miPos] = miOtroPunto;
    miPos++;
    for(r = 0; r < backArray.length; r++){
      grafo[miGrafo][miPos] = JSON.parse(JSON.stringify(backArray[r]));
      miPos++;
    }
    //function calcularNuevoPunto(pOrigen, distancia, angulo, miEscala)
    //calcularNuevoPunto()
    /*seg = new Object();
    seg.type = 'S';
    neoRuta[11] = seg;

    punto = new Object();
    punto.type = 'P';
    punto.x = 70;
    punto.y = 85;
    punto.angulo = 30;
    punto.typeTub = 'vt';
    punto.diametro = '1';
    punto.distancia = 0.35;
    punto.tagX = 100;
    punto.tagY = 75;
    punto.tagAngulo = 30;
    neoRuta[12] = punto;

    punto = new Object();
    punto.type = 'P';
    punto.x = 200;
    punto.y = 275;
    punto.angulo = 30;
    neoRuta[13] = punto;*/
    //alert(miGrafo+'  '+miPosicion);
    copiarGrafo(grafo, grafoEspejo);
    inicializarLista();
    var miLienzo = obtenerPosicionLienzoMarcado();
    dibujarEnLienzo(miLienzo)
    //marcarSegmento(miLienzo, miGrafo, miPosicion, 'ver')
  }
  else{
    //alert(miGrafo+'  '+'_1');
    var miLienzo = obtenerPosicionLienzoMarcado();
    //console.log(miLienzo);
    //console.log(grafo[0]);
    var hc = -1;
    for(gc = 0; gc < grafo[miGrafo].length; gc++){
      if(grafo[miGrafo][gc].type == 'H'){
        hc++;
      }
      if(hc == miLienzo){
        miPosicion = gc;
        break;
      }
    }
    //console.log(miPosicion);
    var insertPosicion = grafo[miGrafo].length;

    var backArray = new Array();
    var miPos = 0;
    for(r = miPosicion + 1; r < grafo[miGrafo].length; r++){
      backArray[miPos] = JSON.parse(JSON.stringify(grafo[miGrafo][r]));
      miPos++;
    }
    miPos = miPosicion + 1;
    var miSeg = new Object();
    miSeg.type = 'S';

    grafo[miGrafo][miPos] = miSeg;

    var miPunto = new Object();
    miPunto.type = 'P';
    miPunto.x = 300;
    miPunto.y = 300;
    miPunto.angulo = 270;
    miPunto.typeTub = 'vt';
    miPunto.diametro = '1';
    miPunto.distancia = 1;
    miPunto.tagX = 305;
    miPunto.tagY = 295;
    miPunto.tagAngulo = 270;
    miPos++;
    grafo[miGrafo][miPos] = miPunto;

    var miOtroPunto = calcularNuevoPunto(miPunto, miPunto.distancia, miPunto.angulo, escala);
    miPos++;
    grafo[miGrafo][miPos] = miOtroPunto;
    miPos++;
    for(r = 0; r < backArray.length; r++){
      grafo[miGrafo][miPos] = JSON.parse(JSON.stringify(backArray[r]));
      miPos++;
    }
    copiarGrafo(grafo, grafoEspejo);
    inicializarLista();
    dibujarEnLienzo(miLienzo);
  }
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
}

function delThisSegment(miId){
  var miPreIndex = miId.substring(6);//segAdd
  //alert(miId);

  var signal = -1;
  for(pic = 0; pic < miPreIndex.length; pic++){
    if(miPreIndex[pic] == '_'){
      signal = pic;
      break;
    }
  }
  var miGrafo = parseInt(miPreIndex.substring(0, signal));
  var miPosicion = parseInt(miPreIndex.substring(signal+1));


  var miAncestro = obtenerMayorAncestro(miGrafo, miPosicion);



  console.log('-------------------------------');
  console.log(miAncestro);
  console.log('-------------------------------');

  var miTrozoCompletoAEliminar = new Array();

  for(ge = miPosicion + 1; ge < grafo[miGrafo].length; ge++){

    if(grafo[miGrafo][ge].type == 'H' || grafo[miGrafo][ge].type == 'S')
      break;
    //console.log(grafo[miGrafo][ge]);
    var ancestro = new Array();
    var miTrozoAEliminar = new Array();
    if(grafo[miGrafo][ge].instalacion){
      console.log(grafo[miGrafo][ge].instalacion)
      ancestro[0] = parseInt(grafo[miGrafo][ge].instalacion);
      for(ra = 0; ra < grafo[ancestro[0]].length; ra++){
        //console.log(grafo[ancestro[0]][ra]);
        if(grafo[ancestro[0]][ra].padre){
          ancestro[1] = ra;
          break;
        }

      }
    }

    if(ancestro.length == 2)
      miTrozoAEliminar = obtenerInstalacionesHojas(ancestro);

    console.log(miTrozoAEliminar);
    while(miTrozoAEliminar.length > 0){
      miTrozoCompletoAEliminar.push(miTrozoAEliminar.pop());
    }



  }

  ordenarTrozoAEliminar(miTrozoCompletoAEliminar);
  for(dr = 0 ; dr < miTrozoCompletoAEliminar.length; dr++){
    delGraph('instDel'+miTrozoCompletoAEliminar[dr][0]);
  }


  //console.log(grafo[miGrafo])


  /*var misInstalaciones = obtenerInstalacionesHojas(miAncestro);


  ordenarTrozoAEliminar(misInstalaciones);
  for(ins = 0; ins < misInstalaciones.length; ins++){
    if(misInstalaciones[ins][0] != miAncestro[0])
      delGraph('instDel' + misInstalaciones[ins][0]);
    ponerAccionEjecutada('Grafo eliminado', 'Se ha eliminado la instalación ' + misInstalaciones[ins][0]);
  }
  console.log(misInstalaciones);*/
  //console.log(grafo[miGrafo][miPosicion])



  var miNuevaPosicion = grafo[miGrafo].length;

  for(r = miPosicion + 1; r < grafo[miGrafo].length; r++){
    if(grafo[miGrafo][r].type == 'S' || grafo[miGrafo][r].type == 'H'){
      miNuevaPosicion = r;
      break;
    }
  }
  var backArray = new Array();
  var miPos = 0;
  //console.log(grafo[miGrafo][miNuevaPosicion])
  for(r = miNuevaPosicion ; r < grafo[miGrafo].length; r++){
    backArray[miPos] = JSON.parse(JSON.stringify(grafo[miGrafo][r]));
    miPos++;
  }
  miPos = miPosicion;
  for(r = 0 ; r < backArray.length; r++){
    grafo[miGrafo][miPos] = JSON.parse(JSON.stringify(backArray[r]));
    miPos++;
  }
  for(r = 0; r < miNuevaPosicion - miPosicion; r++){
    grafo[miGrafo].pop();
  }

  //console.log(miGrafo + ' ' + miPosicion);

  //console.log(miNuevaPosicion);
  //console.log(miPosicion);
  //console.log(grafo);
  grafoEspejo = new Array();
  copiarGrafo(grafo, grafoEspejo);
  inicializarLista();
  var miLienzo = obtenerPosicionLienzoMarcado();
  dibujarEnLienzo(miLienzo);
  //marcarSegmento(miLienzo, miGrafo, miPosicion, 'ver')
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
}

function showThisSegment(miId){
  var miPreIndex = miId.substring(6);
  var signal = -1;
  for(pic = 0; pic < miPreIndex.length; pic++){
    if(miPreIndex[pic] == '_'){
      signal = pic;
      break;
    }
  }
  var miGrafo = parseInt(miPreIndex.substring(0, signal));
  var miPosicion = parseInt(miPreIndex.substring(signal+1));
  //alert(miGrafo+'  '+miPosicion)
  var miLienzo = obtenerPosicionLienzoMarcado();
  marcarSegmento(miLienzo, miGrafo, miPosicion, 'ver')

}

function brokeThisSegment(miId){
  var miPreIndex = miId.substring(9);
  var signal = -1;
  for(pic = 0; pic < miPreIndex.length; pic++){
    if(miPreIndex[pic] == '_'){
      signal = pic;
      break;
    }
  }
  var miGrafo = parseInt(miPreIndex.substring(0, signal));
  var miPosicion = parseInt(miPreIndex.substring(signal+1));
  //alert(miGrafo+'  '+miPosicion);
  var miLienzo = obtenerPosicionLienzoMarcado();
  marcarSegmento(miLienzo, miGrafo, miPosicion, 'ver');

  brokenSegmentWaiting = [true, miGrafo, miPosicion];
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
}

function linkThisSegment(miId){
  var miPreIndex = miId.substring(8);
  var signal = -1;
  for(pic = 0; pic < miPreIndex.length; pic++){
    if(miPreIndex[pic] == '_'){
      signal = pic;
      break;
    }
  }
  var miGrafo = parseInt(miPreIndex.substring(0, signal));
  var miPosicion = parseInt(miPreIndex.substring(signal+1));
  //alert(miGrafo+'  '+miPosicion);
  var miLienzo = obtenerPosicionLienzoMarcado();
  marcarSegmento(miLienzo, miGrafo, miPosicion, 'ver');

  var siguienteSegmento = -1;
  for(ss = miPosicion+1; ss < grafo[miGrafo].length; ss++){
    if(grafo[miGrafo][ss].type == 'H')
      break;
    if(grafo[miGrafo][ss].type == 'S'){
      siguienteSegmento = ss;
      break;
    }
  }

  linkSegmentWaiting = [true, miGrafo, miPosicion, siguienteSegmento];

  if(ss > -1){
    marcarSegmentos(miLienzo, miGrafo, miPosicion, siguienteSegmento, 'ver');
  }

  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
}

function showGraph(miId){
  marcarGrafoDeLaLista(miId)
}

function addGraph(miId){
  var miIndex = parseInt((miId.substring(7)));//instAdd
  //alert(parseInt((miId.substring(7))))

  var miSubGrafo = new Array();
  var miPivote = 0;
  for(sgc = miIndex+1; sgc < grafo.length; sgc++){
    //console.log(grafo[sgc]);
    miSubGrafo[miPivote] = new Object();
    miSubGrafo[miPivote] = JSON.parse(JSON.stringify(grafo[sgc]));
    miPivote++;
  }
  //console.log(miSubGrafo);
  /*var tab = new Object();
  tab.id = 'Hoja 2';
  tab.name = 'Hoja 2'
  tab.type = 'H';
  grafo[miIndex+1] = tab;*/
  //ctl_lienzoHoja.
  grafo[miIndex+1] = new Array();
  miPivote = 0;
  for(i = 0; i < grafo[0].length; i++){

    if(grafo[0][i].type == 'H'){
      var tab = new Object();
      tab.id = grafo[0][i].id;
      tab.name = grafo[0][i].name;
      tab.type = grafo[0][i].type;
      //grafo[miIndex+1] = tab;
      grafo[miIndex+1][miPivote] = tab;
      miPivote++;
    }
  }


  miPivote = miIndex+2;
  for(sgc = 0; sgc < miSubGrafo.length; sgc++){
    grafo[miPivote] = new Object();
    grafo[miPivote] = JSON.parse(JSON.stringify(miSubGrafo[sgc]));
    //console.log(JSON.parse(JSON.stringify(miSubGrafo[sgc])));
    //console.log(typeof miSubGrafo[sgc]);
    miPivote++;
  }
  //console.log(grafo);
  inicializarLista();
}

function addGraphWithSegment(miPosicionLienzo, miGrafo, miPosicion){

  var miInsertPosicion = grafo.length;
  grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].instalacion = miInsertPosicion.toString();



  var hArray = new Array();
  var pos = 0;
  var hCounter = -1;
  for(gr = 0 ; gr < grafo[0].length; gr++){
    if(grafo[0][gr].type == 'H'){
      hArray[pos] = JSON.parse(JSON.stringify(grafo[0][gr]));
      pos++;
      hCounter++;
      if(hCounter == miPosicionLienzo){
        var seg = new Object();
        seg.type = 'S';
        seg.padre = punteroDeEdicion[0].toString();
        hArray[pos] = seg;

        pos++;
        var miPunto = new Object();
        miPunto.type = 'P';
        miPunto.x = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].x;
        miPunto.y = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].y;

        //console.log(grafo[punteroDeEdicion[0]][punteroDeEdicion[8] + 1].angulo);
        //console.log(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].angulo);
        //console.log(grafo[punteroDeEdicion[0]][punteroDeEdicion[8] - 1].angulo);
        switch (grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].angulo){
          case 30:
            switch(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]-1].angulo){
              case 30:
                miPunto.angulo = 330;
                break;
              case 90:
                miPunto.angulo = 330;
                break;
              case 150:
                miPunto.angulo = 90;
                break;
              case 210:
                miPunto.angulo = 90;
                break;
              case 270:
                miPunto.angulo = 330;
                break;
              case 330:
                miPunto.angulo = 270;
                break;
              default:
                miPunto.angulo = 330;
                break;
            }
            break;
          case 90:
            switch(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]-1].angulo){
              case 30:
                miPunto.angulo = 270;
                break;
              case 90:
                miPunto.angulo = 30;
                break;
              case 150:
                miPunto.angulo = 210;
                break;
              case 210:
                miPunto.angulo = 330;
                break;
              case 270:
                miPunto.angulo = 330;
                break;
              case 330:
                miPunto.angulo = 270;
                break;
              default:
                miPunto.angulo = 330;
                break;
            }
            break;
          case 150:
            switch(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]-1].angulo){
              case 30:
                miPunto.angulo = 330;
                break;
              case 90:
                miPunto.angulo = 30;
                break;
              case 150:
                miPunto.angulo = 210;
                break;
              case 210:
                miPunto.angulo = 270;
                break;
              case 270:
                miPunto.angulo = 270;
                break;
              case 330:
                miPunto.angulo = 330;
                break;
              default:
                miPunto.angulo = 330;
                break;
            }
            break;
          case 210:
            switch(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]-1].angulo){
              case 30:
                miPunto.angulo = 330;
                break;
              case 90:
                miPunto.angulo = 30;
                break;
              case 150:
                miPunto.angulo = 90;
                break;
              case 210:
                miPunto.angulo = 330;
                break;
              case 270:
                miPunto.angulo = 330;
                break;
              case 330:
                miPunto.angulo = 330;
                break;
              default:
                miPunto.angulo = 330;
                break;
            }
            break;
          case 270:
            switch(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]-1].angulo){
              case 30:
                miPunto.angulo = 30;
                break;
              case 90:
                miPunto.angulo = 90;
                break;
              case 150:
                miPunto.angulo = 90;
                break;
              case 210:
                miPunto.angulo = 150;
                break;
              case 270:
                miPunto.angulo = 30;
                break;
              case 330:
                miPunto.angulo = 30;
                break;
              default:
                miPunto.angulo = 330;
                break;
            }
            break;
          case 330:
            switch(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]-1].angulo){
              case 30:
                miPunto.angulo = 90;
                break;
              case 90:
                miPunto.angulo = 150;
                break;
              case 150:
                miPunto.angulo = 90;
                break;
              case 210:
                miPunto.angulo = 150;
                break;
              case 270:
                miPunto.angulo = 210;
                break;
              case 330:
                miPunto.angulo = 30;
                break;
              default:
                miPunto.angulo = 30;
                break;
            }
            break;
          default:
            switch(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]-1].angulo){
              case 30:
                miPunto.angulo = 30;
                break;
              case 90:
                miPunto.angulo = 90;
                break;
              case 150:
                miPunto.angulo = 150;
                break;
              case 210:
                miPunto.angulo = 210;
                break;
              case 270:
                miPunto.angulo = 210;
                break;
              case 330:
                miPunto.angulo = 330;
                break;
              default:
                miPunto.angulo = 30;
                break;
            }
            break;
        }
        //miPunto.angulo = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].angulo;
        miPunto.typeTub = 'vt';
        miPunto.diametro = '1';
        miPunto.distancia = 1;
        miPunto.tagX = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].x + 5;//305;
        miPunto.tagY = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].y - 5;//295;
        //miPunto.tagAngulo = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].angulo;
        miPunto.tagAngulo = miPunto.angulo;

        hArray[pos] = miPunto;

        pos++;
        var miOtroPunto = calcularNuevoPunto(miPunto, miPunto.distancia, miPunto.angulo, escala);
        hArray[pos] = miOtroPunto;

        pos++;
      }
    }

  }
  grafo[miInsertPosicion] = new Array();
  grafo[miInsertPosicion] = hArray;

  //console.log(hArray)
  copiarGrafo(grafo, grafoEspejo);
  inicializarLista();
  dibujarEnLienzo(miPosicionLienzo);
}

function delGraphWithSegment(miPosicionLienzo, miGrafo, miPosicion){

  var ancestro = new Array();
  var miTrozoAEliminar = new Array();
  if(grafo[miGrafo][miPosicion].instalacion){
    //console.log(grafo[miGrafo][miPosicion].instalacion)
    ancestro[0] = parseInt(grafo[miGrafo][miPosicion].instalacion);
    for(ra = 0; ra < grafo[ancestro[0]].length; ra++){
      //console.log(grafo[ancestro[0]][ra]);
      if(grafo[ancestro[0]][ra].padre){
        ancestro[1] = ra;
        break;
      }
    }
  }

  if(ancestro.length == 2)
    miTrozoAEliminar = obtenerInstalacionesHojas(ancestro);

  ordenarTrozoAEliminar(miTrozoAEliminar);
  for(dr = 0 ; dr < miTrozoAEliminar.length; dr++){
    delGraphOnly('instDel'+miTrozoAEliminar[dr][0]);
  }

  //ponerAccionEjecutada('Punto eliminado', 'Se ha eliminado el punto correctamente.')
  delete grafo[miGrafo][miPosicion].instalacion;


  //console.log(hArray)
  grafoEspejo = new Array();
  copiarGrafo(grafo, grafoEspejo);
  console.log(grafo);
  console.log(grafoEspejo);
  inicializarLista();
  dibujarEnLienzo(miPosicionLienzo);
}

function delGraph(miId){
  var miIndex = parseInt((miId.substring(7)));//instDel
  //alert(parseInt((miId.substring(7))))
  var miSubGrafo = new Array();
  var miPivote = 0;
  for(sgc = miIndex+1; sgc < grafo.length; sgc++){
    miSubGrafo[miPivote] = new Object();
    miSubGrafo[miPivote] = JSON.parse(JSON.stringify(grafo[sgc]));
    miPivote++;
  }

  miPivote = miIndex;
  for(sgc = 0; sgc < miSubGrafo.length; sgc++){
    grafo[miPivote] = new Object();
    grafo[miPivote] = JSON.parse(JSON.stringify(miSubGrafo[sgc]));
    miPivote++;
  }
  //console.log(grafo);
  grafo.pop();

  for(dt = 0 ; dt < grafo.length; dt++){
    for(rr = 0;  rr < grafo[dt].length; rr++){
      //console.log(grafo[dt][rr]);
      if(grafo[dt][rr].instalacion){
        if(miIndex < parseInt(grafo[dt][rr].instalacion)){
          grafo[dt][rr].instalacion =  parseInt(grafo[dt][rr].instalacion) - 1;
        }
        break;
      }
    }
  }

  inicializarLista();
  var miLienzo = obtenerPosicionLienzoMarcado();
  dibujarEnLienzo(miLienzo);
}

function delGraphOnly(miId){
  var miIndex = parseInt((miId.substring(7)));//instDel
  //alert(parseInt((miId.substring(7))))
  var miSubGrafo = new Array();
  var miPivote = 0;
  for(sgc = miIndex+1; sgc < grafo.length; sgc++){
    miSubGrafo[miPivote] = new Object();
    miSubGrafo[miPivote] = JSON.parse(JSON.stringify(grafo[sgc]));
    miPivote++;
  }

  miPivote = miIndex;
  for(sgc = 0; sgc < miSubGrafo.length; sgc++){
    grafo[miPivote] = new Object();
    grafo[miPivote] = JSON.parse(JSON.stringify(miSubGrafo[sgc]));
    miPivote++;
  }
  //console.log(grafo);
  grafo.pop();

  for(dt = 0 ; dt < grafo.length; dt++){
    for(rr = 0;  rr < grafo[dt].length; rr++){
      //console.log(grafo[dt][rr]);
      if(grafo[dt][rr].instalacion){
        if(miIndex < parseInt(grafo[dt][rr].instalacion)){
          grafo[dt][rr].instalacion =  parseInt(grafo[dt][rr].instalacion) - 1;
        }
        //break;
      }
    }
  }

  inicializarLista();
  var miLienzo = obtenerPosicionLienzoMarcado();
  dibujarEnLienzo(miLienzo);
}

function inicializarLista(){
  while(ctl_listaInstalaciones.children.length>0)
    ctl_listaInstalaciones.removeChild(ctl_listaInstalaciones.childNodes[0]);
  //console.log(grafo.length)
  /*
          div(class = 'instalacion') PRINCIPAL
            div(class = 'installSegmentControls')
              div(class = 'SegmentShow' onclick = 'hola()')
            div(class = 'installControls')
              div(class = 'instAdd')
              div(class = 'instDel')
              div(class = 'instSel')
              div(class = 'instVer')
            div(class = 'segmentContainer')
              div(class = 'segmento') segmento
                div(class = 'segmentControls')
                  div(class = 'segAdd')
                  div(class = 'segDel')
                  div(class = 'segSel')
                  div(class = 'segVer')
                  div(class = 'segUnion')
                  div(class = 'segBroken')
  */
  /////////////////////////////////////////////////////
  for(ic = 0; ic < grafo.length; ic++){
    var miInstalacion = document.createElement('div');
    miInstalacion.className = 'instalacion';
    if(ic == 0)
      miInstalacion.innerHTML = 'Instalación por YPFB';//'PRINCIPAL';
      //miInstalacion.innerHTML = 'Subvencionada por YPFB';//'PRINCIPAL';
    else
      miInstalacion.innerHTML = 'Ampliación '+ic;//'Secundaria '+ic;

    var miInstallSegmentControls = document.createElement('div');
    miInstallSegmentControls.className = 'installSegmentControls';

    var miSegmentShow = document.createElement('div');
    miSegmentShow.id = 'segmentShow'+ic;
    miSegmentShow.className = 'segmentShow';
    miSegmentShow.setAttribute('onclick', 'showSegments(this.id)');
    miSegmentShow.innerHTML = 'Ver cortes';
    miInstallSegmentControls.appendChild(miSegmentShow);

    ///////////////////////////////////////////////////////////////////

    /*var miInstallSegmentInfoTotal = document.createElement('div');
    miInstallSegmentInfoTotal.className = 'installSegmentInfoTotal';

    var miSegmentTotal = document.createElement('div');
    miSegmentTotal.className = 'segmentTotal';
    miSegmentTotal.innerHTML = '10';
    miInstallSegmentInfoTotal.appendChild(miSegmentTotal);

    miInstalacion.appendChild(miInstallSegmentInfoTotal);

    var miInstallSegmentInfoHere = document.createElement('div');
    miInstallSegmentInfoHere.className = 'installSegmentInfoHere';

    var miSegmentHere = document.createElement('div');
    miSegmentHere.className = 'segmentHere';
    miSegmentHere.innerHTML = '10';
    miInstallSegmentInfoHere.appendChild(miSegmentHere);

    miInstalacion.appendChild(miInstallSegmentInfoHere);


    miInstallSegmentControls.appendChild(miInstallSegmentInfoHere);*/
    ///////////////////////////////////////////////////////


    var miInstallControls = document.createElement('div');
    miInstallControls.className = 'installControls';

    /*var miInstAdd = document.createElement('div');
    miInstAdd.id = 'instAdd'+ic;
    miInstAdd.className = 'instAdd';
    miInstAdd.setAttribute('onclick', 'addGraph(this.id)');
    miInstallControls.appendChild(miInstAdd);

    if(ic > 0){
      var miInstDel = document.createElement('div');
      miInstDel.id = 'instDel'+ic;
      miInstDel.className = 'instDel';
      miInstDel.setAttribute('onclick', 'delGraph(this.id)');
      miInstallControls.appendChild(miInstDel);
    }

    var miInstSel = document.createElement('div');
    miInstSel.className = 'instSel';
    miInstallControls.appendChild(miInstSel);*/

    var miInstVer = document.createElement('div');
    miInstVer.id = 'instVer'+ic;
    miInstVer.className = 'instVer';
    miInstVer.setAttribute('onclick', 'showGraph(this.id)');
    /////////////////////////
    miInstVer.innerHTML = 'Ver instalación';
    ////////////////////////
    miInstallControls.appendChild(miInstVer);

    var miSegmentTotal = document.createElement('div');
    miSegmentTotal.className = 'segmentTotal';
    miSegmentTotal.id = 'segmentTotal'+ic;
    //miSegmentTotal.innerHTML = '10';/////////////////////////////////////////
    miInstallControls.appendChild(miSegmentTotal);

    var miSegmentHere = document.createElement('div');
    miSegmentHere.className = 'segmentHere';
    miSegmentHere.id = 'segmentHere'+ic;
    //miSegmentHere.innerHTML = '10';/////////////////////////////////////////
    miInstallControls.appendChild(miSegmentHere);

    miInstalacion.appendChild(miInstallControls);
    miInstalacion.appendChild(miInstallSegmentControls);

    var miSegmentContainer = document.createElement('div');
    miSegmentContainer.id = 'segmentContainer'+ic;
    miSegmentContainer.className = 'segmentContainer';

    //miLista.setAttribute('onclick', 'marcarGrafoDeLaLista(this.id)')
    var miLienzo = obtenerPosicionLienzoMarcado();
    var hojaCounter = -1;
    var segmentCounterTotal = 0;
    var segmentCounterParcial = 0;
    var existeSiguienteSegmento = false;

    for(sc = 0; sc < grafo[ic].length; sc++){
      if(grafo[ic][sc].type == 'H'){
        hojaCounter++;
      }
      if(grafo[ic][sc].type == 'S'){
        segmentCounterTotal++;
        existeSiguienteSegmento = verificarSiExisteSiguienteSegmento(ic, sc+1);
      }

      if(grafo[ic][sc].type == 'S' && hojaCounter == miLienzo){
        segmentCounterParcial++;
        var miSegmento = document.createElement('div');

        if(grafo[ic][sc].padre){
          //miSegmento.innerHTML = '['+grafo[ic][sc].padre+'] Segmento '+ segmentCounterParcial;
          miSegmento.innerHTML = '['+grafo[ic][sc].padre+'] Corte '+ segmentCounterParcial;
        }else{
          miSegmento.innerHTML = 'Corte '+ segmentCounterParcial;//'Segmento '+ segmentCounterParcial;
        }

        miSegmento.className = 'segmento';

        var miSegmentControls = document.createElement('div');
        miSegmentControls.className = 'segmentControls';

        var miSegAdd = document.createElement('div');
        miSegAdd.className = 'segAdd';
        miSegAdd.id = 'segAdd'+ic+'_'+sc;
        miSegAdd.setAttribute('onclick', 'addThisSegment(this.id)');
        //
        miSegAdd.innerHTML = 'Añadir un corte nuevo';
        miSegmentControls.appendChild(miSegAdd);

        //miSegmento.appendChild(miSegAdd);

        if(!grafo[ic][sc].padre){
          var miSegDel = document.createElement('div');
          miSegDel.className = 'segDel';
          miSegDel.id = 'segDel'+ic+'_'+sc;
          miSegDel.setAttribute('onclick', 'delThisSegment(this.id)');
          /////
          miSegDel.innerHTML = 'Eliminar este corte';
          miSegmentControls.appendChild(miSegDel);
        }


        /*var miSegSel = document.createElement('div');
        miSegSel.className = 'segSel';
        miSegmentControls.appendChild(miSegSel);*/

        var miSegVer = document.createElement('div');
        miSegVer.className = 'segVer';
        miSegVer.id = 'segVer'+ic+'_'+sc;
        miSegVer.setAttribute('onclick', 'showThisSegment(this.id)');
        /////
        miSegVer.innerHTML = 'Ver este corte';
        miSegmentControls.appendChild(miSegVer);

        if(existeSiguienteSegmento){

        var miSegUnion = document.createElement('div');
        miSegUnion.className = 'segUnion';
        miSegUnion.id = 'segUnion'+ic+'_'+sc;
        miSegUnion.setAttribute('onclick', 'linkThisSegment(this.id)');
        ////
        miSegUnion.innerHTML = 'Unir este corte con siguiente corte';
        miSegmentControls.appendChild(miSegUnion);
        }

        var miSegBroken = document.createElement('div');
        miSegBroken.className = 'segBroken';
        miSegBroken.id = 'segBroken'+ic+'_'+sc;
        miSegBroken.setAttribute('onclick', 'brokeThisSegment(this.id)');
        ///////
        miSegBroken.innerHTML = 'Cortar corte en un punto';
        miSegmentControls.appendChild(miSegBroken);

        miSegmento.appendChild(miSegmentControls);

        miSegmentContainer.appendChild(miSegmento);
        //miInstalacion.appendChild(miSegmento);
      }
    }
    if(segmentCounterParcial == 0){
      var miSegmento = document.createElement('div');
      miSegmento.innerHTML = 'Crea un segmento';
      miSegmento.className = 'segmento';

      var miSegmentControls = document.createElement('div');
      miSegmentControls.className = 'segmentControls';

      var miSegAdd = document.createElement('div');
      miSegAdd.className = 'segAdd';
      miSegAdd.id = 'segAdd'+ic+'__1';
      miSegAdd.setAttribute('onclick', 'addThisSegment(this.id)');
      miSegmentControls.appendChild(miSegAdd);

      miSegmento.appendChild(miSegmentControls);

      miSegmentContainer.appendChild(miSegmento);
    }
    //.id = 'segmentContainer'+ic;
    miInstalacion.appendChild(miSegmentContainer);
    ctl_listaInstalaciones.appendChild(miInstalacion);

    document.getElementById('segmentTotal'+ic).innerHTML = 'Número de cortes en todas las hojas: '+segmentCounterTotal;
    //var miP = document.createElement('p');
    //miP.innerHTML = 'Número de cortes en todas las hojas: '+segmentCounterTotal;
    //document.getElementById('segmentTotal'+ic).appendChild(miP);

    document.getElementById('segmentHere'+ic).innerHTML = 'Número de cortes en esta hoja: '+segmentCounterParcial;
  }
  /*if(grafo.length == 0){
    var miInstalacion = document.createElement('div');
    miInstalacion.className = 'instalacion';
    miInstalacion.innerHTML = 'Crea una instalación';

    var miInstallControls = document.createElement('div');
    miInstallControls.className = 'installControls';

    var miInstAdd = document.createElement('div');
    miInstAdd.id = 'instAdd'+'__1';
    miInstAdd.className = 'instAdd';
    miInstAdd.setAttribute('onclick', 'addGraph(this.id)');
    miInstallControls.appendChild(miInstAdd);

    miInstalacion.appendChild(miInstallControls);

    ctl_listaInstalaciones.appendChild(miInstalacion);
    console.log(grafo);
    //graf

    iniciarLienzos();
    //var miLienzo = obtenerPosicionLienzoMarcado();
    //dibuja

  }*/
  //////////////////////////////////////////////////////////
  /*for(lic = 0; lic < grafo.length; lic++){
    var miLista = document.createElement('li');
    if(lic == 0)
      miLista.innerHTML = 'INSTALACIÓN PRINCIPAL';
    else
      miLista.innerHTML = 'Extensión '+lic;
    miLista.id = 'ListaGrafo '+ lic;

    miLista.setAttribute('onclick', 'marcarGrafoDeLaLista(this.id)')
    ctl_listaInstalaciones.appendChild(miLista)
  }*/
}

function cambiarGrosorLinea(range){
  for(chc = 0; chc < svg_lienzo.children.length; chc++){
    svg_lienzo.children[chc].style.strokeWidth = range;
  }
}

function setActivateImagen(){
  var aIma = document.getElementById('chckbxImagen').checked;

  if(aIma){
    document.getElementById('myTextoLogo').style.display = 'none';
    document.getElementById('myImagenLogo').style.display = 'block';
  }
  else{
    document.getElementById('myTextoLogo').style.display = 'block';
    document.getElementById('myImagenLogo').style.display = 'none';
  }
  //console.log(aIma);
}

function setZoomCaptureActive(){
  zoomCapturaActiva = chckbxZoomCaptureActive.checked;
  if(!chckbx_ZoomActive.checked){
    chckbxZoomCaptureActive.checked = false
    zoomCapturaActiva = chckbxZoomCaptureActive.checked
    // svgContent = document.getElementById('miSVGLienzo')
    // svgZoomContent =  document.getElementById('zoomContentSvg')
    // if(svgContent != null && svgZoomContent != null){
    //   cleanSvgLienzo(svgZoomContent);
    //   loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
    // }

  }
}

function setActiveZoomLupa(){
  zoomActive = chckbx_ZoomActive.checked;
  // console.log(chckbx_ZoomActive.checked);
  // console.log(zoomActive);
  if(zoomActive){
    document.getElementById("zoomContainer").style.display = "block"
    svgContent = document.getElementById('miSVGLienzo')
    svgZoomContent =  document.getElementById('zoomContentSvg')
    if(svgContent != null && svgZoomContent != null){
      cleanSvgLienzo(svgZoomContent);
      loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
    }
  }
  else{
    chckbxZoomCaptureActive.checked = false
    zoomCapturaActiva = chckbxZoomCaptureActive.checked

    document.getElementById("zoomContainer").style.display = "none"
  }
}

function setValueZoomLupa(value){
  valueZoomLupa.value = value;
  zoomEscala = value;
  svgContent = document.getElementById('miSVGLienzo')
  svgZoomContent =  document.getElementById('zoomContentSvg')
  if(zoomActive && svgContent && svgZoomContent){
    cleanSvgLienzo(svgZoomContent);
    loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
  }

  // var miConf = JSON.parse(document.getElementById('configuraciones').value);
  // miConf[4] = range;
  // document.getElementById('configuraciones').value = JSON.stringify(miConf);
}

function setControlZoomLupa(value){
  controlZoomLupa.value = value
  zoomEscala = value;
  svgContent = document.getElementById('miSVGLienzo')
  svgZoomContent =  document.getElementById('zoomContentSvg')
  if(zoomActive && svgContent && svgZoomContent){

    cleanSvgLienzo(svgZoomContent);
    loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
  }

  // var miConf = JSON.parse(document.getElementById('configuraciones').value);
  // miConf[4] = range;
  // document.getElementById('configuraciones').value = JSON.stringify(miConf);
}

function setValueZoomRadioLupa(value){
  valueZoomRadioLupa.value = value;
  zoomRadioLupa = parseFloat(value);
  document.getElementById("zoomContainer").style.width = (zoomRadioLupa*2)+"px"
  document.getElementById("zoomContainer").style.height = (zoomRadioLupa*2)+"px"
  // cambiarGrosorLinea(range);

  // var miConf = JSON.parse(document.getElementById('configuraciones').value);
  // miConf[4] = range;
  // document.getElementById('configuraciones').value = JSON.stringify(miConf);
}

function setControlZoomRadioLupa(value){
  controlZoomRadioLupa.value = value;
  zoomRadioLupa = parseFloat(value)
  document.getElementById("zoomContainer").style.width = (zoomRadioLupa*2)+"px"
  document.getElementById("zoomContainer").style.height = (zoomRadioLupa*2)+"px"
  // cambiarGrosorLinea(range);

  // var miConf = JSON.parse(document.getElementById('configuraciones').value);
  // miConf[4] = range;
  // document.getElementById('configuraciones').value = JSON.stringify(miConf);
}


function setValueRange(range){
  valueRange.value = range;
  grosorLinea = range;
  cambiarGrosorLinea(range);

  var miConf = JSON.parse(document.getElementById('configuraciones').value);
  miConf[4] = range;
  document.getElementById('configuraciones').value = JSON.stringify(miConf);
}

function setControlRange(range){
  controlRange.value = range
  grosorLinea = range;
  cambiarGrosorLinea(range);

  var miConf = JSON.parse(document.getElementById('configuraciones').value);
  miConf[4] = range;
  document.getElementById('configuraciones').value = JSON.stringify(miConf);
}

function setDatePage(miFecha){
  //alert(miFecha);//////////////////////////////////////////////
  var miConf = JSON.parse(document.getElementById('configuraciones').value)
  miConf[2] = new Date(miFecha);
  document.getElementById('configuraciones').value = JSON.stringify(miConf);
}

function setNumberPage(miNumero){
  //alert(miNumero);//////////////////////////////////////////////
  var miLienzo = obtenerPosicionLienzoMarcado();
  //console.log(miLienzo);
  if(miLienzo > -1){
    var miNumberPageData = JSON.parse(document.getElementById('numberPageData').value);
    numberPageData = new Array();
    numberPageData = miNumberPageData;
    numberPageData[miLienzo] = miNumero;
    document.getElementById('numberPageData').value = JSON.stringify(numberPageData);
  }
  //console.log(grafo);
}

function setMarginControl(){
  //console.log(chckbx_Margen.checked);
  limitadorDeMargen = chckbx_Margen.checked;

  var miConf = JSON.parse(document.getElementById('configuraciones').value);
  miConf[6] = limitadorDeMargen;
  document.getElementById('configuraciones').value = JSON.stringify(miConf);
}

function setGlobalTagsValue(miValue){

  tamanoFuenteGrafo = miValue;

  var miConf = JSON.parse(document.getElementById('configuraciones').value);
  miConf[8] = tamanoFuenteGrafo;
  document.getElementById('configuraciones').value = JSON.stringify(miConf);

  var miLienzo = obtenerPosicionLienzoMarcado();
  dibujarEnLienzo(miLienzo);

}

function setTextoControl(){
  //console.log('----------------------------------------------')
  //console.log(chckbx_Texto.checked);
  //textoCorto = chckbx_Texto.checked;

  textoCorto = chckbx_Texto.checked;

  var miConf = JSON.parse(document.getElementById('configuraciones').value);
  miConf[5] = textoCorto;
  document.getElementById('configuraciones').value = JSON.stringify(miConf);

  var miLienzoMarcado = obtenerPosicionLienzoMarcado();
  //console.log(miLienzoMarcado)
  dibujarEnLienzo(miLienzoMarcado);
}

function setCodosControl(){
  //console.log(chckbx_Margen.checked);
  permitirCodos = chckbx_Codos.checked;

  var miConf = JSON.parse(document.getElementById('configuraciones').value);
  miConf[7] = permitirCodos;
  document.getElementById('configuraciones').value = JSON.stringify(miConf);

  var miLienzoMarcado = obtenerPosicionLienzoMarcado();
  dibujarEnLienzo(miLienzoMarcado);
  if(zoomActive){
    svgContent = document.getElementById('miSVGLienzo')
    svgZoomContent =  document.getElementById('zoomContentSvg')
    if(svgContent != null && svgZoomContent != null){
      cleanSvgLienzo(svgZoomContent);
      loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
    }
  }
}

function setValueScale(scale){
  if(scale != escala){
    recalcularPuntos(scale, escala);
    escala = scale;
    var miLienzo = obtenerPosicionLienzoMarcado();
    dibujarEnLienzo(miLienzo);
    document.getElementById('escalaPage').innerHTML = '1 : ' + escala;
    var miConf = JSON.parse(document.getElementById('configuraciones').value);
    miConf[0] = scale;
    document.getElementById('configuraciones').value = JSON.stringify(miConf);
    document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  }
  controlScale.value = scale
  if(zoomActive){
    svgContent = document.getElementById('miSVGLienzo')
    svgZoomContent =  document.getElementById('zoomContentSvg')
    if(svgContent != null && svgZoomContent != null){
      cleanSvgLienzo(svgZoomContent);
      loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
    }
  }
}

function setControlScale(scale){
  if(scale != escala){
    recalcularPuntos(scale, escala);
    escala = scale;
    var miLienzo = obtenerPosicionLienzoMarcado();
    dibujarEnLienzo(miLienzo);
    document.getElementById('escalaPage').innerHTML = '1 : ' + escala;
    var miConf = JSON.parse(document.getElementById('configuraciones').value);
    miConf[0] = scale;
    document.getElementById('configuraciones').value = JSON.stringify(miConf);
    document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  }
  valueScale.value = scale
  if(zoomActive){
    svgContent = document.getElementById('miSVGLienzo')
    svgZoomContent =  document.getElementById('zoomContentSvg')
    if(svgContent != null && svgZoomContent != null){
      cleanSvgLienzo(svgZoomContent);
      loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
    }
  }
}

function recalcularPuntos(miEscala, miAnteriorEscala){
  console.log('iniciando')
  for(gr = 0; gr < grafo.length; gr++){
    //console.log('----------------------------------------')
    var pos = 0;
    while(pos < grafo[gr].length){
      //console.log(grafo[gr][pos]);
      if(grafo[gr][pos].type == 'S'){
        //console.log('-***********************************-');
        //pos = grafo[gr].length;
        //console.log(pos)

        for(c = pos + 1; c < grafo[gr].length+1; c++){
          if(c == grafo[gr].length){
            pos = grafo[gr].length-1;
            break;
          }
          //console.log(grafo[gr][c]);

          if(grafo[gr][c].type == 'S'){
            pos = c-1;
            //console.log(c);
            break;
          }
          if(grafo[gr][c].type == 'P' && grafo[gr][c-1].type == 'P'){

            //calcularNuevoPunto(pOrigen, distancia, angulo, miEscala)
            var miNuevoPunto = new Object();
            miNuevoPunto = calcularNuevoPunto(grafo[gr][c-1], grafo[gr][c-1].distancia, grafo[gr][c-1].angulo, miEscala);
            //console.log(miNuevoPunto);

            grafo[gr][c].x = miNuevoPunto.x;
            grafo[gr][c].y = miNuevoPunto.y;
            //dibujarTag(grafo[gr][c], grafo[gr][c-1])


          }

          if(grafo[gr][c].type == 'P' && grafo[gr][c+1] && grafo[gr][c+1].type == 'P'){
            var miTagCoords = getTagSeparationDefault(grafo[gr][c]);

            grafo[gr][c].tagX = miTagCoords[0];
            grafo[gr][c].tagY = miTagCoords[1];
          }
        }

      }
      pos++;
    }
  }

  copiarGrafo(grafo, grafoEspejo);

  for(gr = 0; gr < grafo.length; gr++){
    var pos = 0;
    while(pos < grafo[gr].length){
      //console.log(grafo[gr][pos]);
      if(grafo[gr][pos].type == 'S' && !grafo[gr][pos].padre){
        //console.log('¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡');
        //var my = obtenerMayorAncestro(miPosicion[0], miPosicion[8]);
        var sons = obtenerInstalaciones([gr, pos]);
        //console.log(sons);
        //ordenarTrozoAEliminar(sons);

        var hanoi_1 = new Array();
        var hanoi_2 = new Array();
        var hanoi_3 = new Array();
        var hanoi_save = new Array();

        if(sons.length > 1){

          var posi = 0;
          for(h = 0; h < sons.length; h++){
            if(sons[h][0] == gr)
              hanoi_1[0] = sons[h].slice();
            else{
              hanoi_save[posi] = sons[h].slice();
              posi++;
            }
          }

          for(h = 0; h < hanoi_save.length; h++)
            hanoi_3[h] = hanoi_save[h].slice();
          //console.log('**********************************')
          //console.log(hanoi_1)
          //console.log(hanoi_3)

        }

        while(hanoi_1.length > 0){
          hanoi_save = new Array();
          for(h1 = 0; h1 < hanoi_1.length; h1++){
            //console.log(hanoi_1[h1][0])
            for(h3 = 0; h3 < hanoi_3.length; h3++){
              //console.log(grafo[hanoi_3[h3][0]][hanoi_3[h3][1]])
              if(hanoi_1[h1][0] == parseInt(grafo[hanoi_3[h3][0]][hanoi_3[h3][1]].padre))
                hanoi_2.push(hanoi_3[h3].slice());
              else
                hanoi_save.push(hanoi_3[h3].slice());
            }
          }

          hanoi_3 = new Array();
          for(h = 0; h < hanoi_save.length; h++)
            hanoi_3[h] = hanoi_save[h].slice();
          //console.log('**********************************')
          //console.log(hanoi_2)
          //console.log(hanoi_3)

          for(h2 = 0; h2 < hanoi_2.length; h2++){
            //console.log('????????????????????????????')
            ////////////////////////////////////////////////////////////////////////////////////////

            var posPadre = obtenerPosicionPadre(parseInt(grafo[hanoi_2[h2][0]][hanoi_2[h2][1]].padre), hanoi_2[h2][0]);
            //console.log(posPadre);
            //console.log(grafo[hanoi_2[h2][0]][hanoi_2[h2][1]])
            //console.log(hanoi_2[h2][0])
            //console.log(grafo[parseInt(grafo[hanoi_2[h2][0]][hanoi_2[h2][1]].padre)][posPadre])

            //console.log(grafo[parseInt(grafo[hanoi_2[h2][0]][hanoi_2[h2][1]].padre)][posPadre].x)
            //console.log(grafo[parseInt(grafo[hanoi_2[h2][0]][hanoi_2[h2][1]].padre)][posPadre].y)

            //console.log(grafo[hanoi_2[h2][0]][hanoi_2[h2][1]+1].x)
            //console.log(grafo[hanoi_2[h2][0]][hanoi_2[h2][1]+1].y)
            var movX = grafo[hanoi_2[h2][0]][hanoi_2[h2][1]+1].x - grafo[parseInt(grafo[hanoi_2[h2][0]][hanoi_2[h2][1]].padre)][posPadre].x;
            var movY = grafo[hanoi_2[h2][0]][hanoi_2[h2][1]+1].y - grafo[parseInt(grafo[hanoi_2[h2][0]][hanoi_2[h2][1]].padre)][posPadre].y;

            //console.log('recorrido ' + movX);
            //console.log('recorrido ' + movY);

            for(rh2 = hanoi_2[h2][1]+1; rh2 < grafo[hanoi_2[h2][0]].length; rh2++){
              if(grafo[hanoi_2[h2][0]][rh2].type == 'S' || grafo[hanoi_2[h2][0]][rh2].type == 'H')
                break;
              grafo[hanoi_2[h2][0]][rh2].x = grafoEspejo[hanoi_2[h2][0]][rh2].x - movX;
              grafo[hanoi_2[h2][0]][rh2].y = grafoEspejo[hanoi_2[h2][0]][rh2].y - movY;
              if(grafo[hanoi_2[h2][0]][rh2].tagX){
                grafo[hanoi_2[h2][0]][rh2].tagX = grafoEspejo[hanoi_2[h2][0]][rh2].tagX - movX;
                grafo[hanoi_2[h2][0]][rh2].tagY = grafoEspejo[hanoi_2[h2][0]][rh2].tagY - movY;
              }
            }
          }
          ////////////////////////////
          hanoi_1 = new Array();

          for(h2 = 0; h2 < hanoi_2.length; h2++){
            hanoi_1.push(hanoi_2.pop());
          }
          hanoi_2 = new Array();
          //hanoi_1.pop();
        }

      }
      pos++;
    }
  }

  console.log('fin');
  copiarGrafo(grafo, grafoEspejo);

  for(cr=0; cr < circulosExtra.length; cr=cr+2){
    // console.log(circulosExtra[cr])
    // difEscalas = (miEscala - circulosExtra[cr].escala)/100
    // console.log('-------------------------');
    // console.log(grafo[circulosExtra[cr].x]);
    // getCoordenadasIniciales()
    // console.log(getCoordenadasIniciales(circulosExtra[cr].grafo, circulosExtra[cr].segmento));
    var tmpCircleCoords = getCoordenadasIniciales(circulosExtra[cr].grafo, circulosExtra[cr].segmento)
    // console.log('-------------------------');
    tmpX = circulosExtra[cr].x - tmpCircleCoords.x
    tmpY = circulosExtra[cr].y - tmpCircleCoords.y
    circulosExtra[cr].x = tmpCircleCoords.x + (tmpX * miAnteriorEscala)/miEscala//circulosExtra[cr].x - (circulosExtra[cr].x * Math.abs(difEscalas))
    circulosExtra[cr].y = tmpCircleCoords.y + (tmpY * miAnteriorEscala)/miEscala//circulosExtra[cr].y + (circulosExtra[cr].y * Math.abs(difEscalas))
    circulosExtra[cr].r = (circulosExtra[cr].r * miAnteriorEscala)/miEscala
    // console.log('***********************');
    // console.log();
    // console.log('***********************');
    // console.log(miEscala-circulosExtra[cr].escala);
  }
}

function getCoordenadasIniciales(nGrafo, nSegmento){
  // para esta funcion se toma encuenta que todos los puntos tiene un grafo y un
  // segmento validos, osea que estos existen
  var nHoja = obtenerPosicionLienzoMarcado()
  var nCounterPG = -1
  var pivCounterPG = 0
  for(npg = 0; npg < grafo[nGrafo].length; npg++){
    if(grafo[nGrafo][npg].type == "H"){
      nCounterPG++
    }
    if(nCounterPG == nHoja){
      pivCounterPG = npg
      break;
    }
  }

  var nCounterSegPG = -1
  var pivCounterSegPG = 0
  for(npg = pivCounterPG; npg < grafo[nGrafo].length; npg++){
    if(grafo[nGrafo][npg].type == "S"){
      nCounterSegPG++
    }
    if(nCounterSegPG == nSegmento){
      pivCounterSegPG = npg
      break;
    }
  }
  return grafo[nGrafo][pivCounterSegPG+1]
}

function recalcularPuntosOpcion2(miEscala){
  console.log('iniciando')
  for(gr = 0; gr < grafo.length; gr++){
    console.log('----------------------------------------')
    var pos = 0;
    while(pos < grafo[gr].length){
      console.log(grafo[gr][pos]);
      if(grafo[gr][pos].type == 'S' && !grafo[gr][pos].padre){
        console.log('-***********************************-');
        //pos = grafo[gr].length;
        //console.log(pos)
        for(c = pos + 1; c < grafo[gr].length+1; c++){
          if(c == grafo[gr].length){
            pos = grafo[gr].length;
            break;
          }
          console.log(grafo[gr][c]);
          if(grafo[gr][c].type == 'S'){
            pos = c;
            console.log(c);
            break;
          }
        }

      }
      pos++;
    }
  }
  console.log('fin');
}

function setTableDrawMode(){
  setMode('dibujo');
}

function setTableEditMode(objeto){
  setMode('edicion');

  addComponent = objeto;
}

function setMode(miModo){

  modo = miModo;
  var miLienzo = obtenerPosicionLienzoMarcado();

  while(ctl_modeCanvas.children.length > 0)
    ctl_modeCanvas.removeChild(ctl_modeCanvas.childNodes[0]);

  var titleMode = document.createElement('h1');

  switch(modo){

    case 'dibujo':
      document.getElementById('cmp_Controls').style.display = 'none'
      titleMode.innerHTML = 'Modo dibujo';
      titleMode.style.color = 'rgb(0, 37, 89)';//'rgb(144, 197, 63)';
      dibujarEnLienzo(miLienzo);
      break;
    case 'edicion':
      copiarGrafo(grafo, grafoEspejo);
      titleMode.innerHTML = 'Modo edición';
      titleMode.style.color = 'rgb(0, 37, 89)';//'rgb(255, 197, 0)';
      //document.getElementById('cmp_Controls').style.display = 'block'
      dibujarEnLienzo(miLienzo);
      break;
    case 'mover':
      document.getElementById('cmp_Controls').style.display = 'none';
      titleMode.innerHTML = 'Modo movimiento';
      titleMode.style.color = 'rgb(0, 37, 89)';//'rgb(213, 72, 27)';
      dibujarEnLienzo(miLienzo);
      break;
    case 'union':
      document.getElementById('cmp_Controls').style.display = 'none';
      titleMode.innerHTML = 'Modo unión';
      titleMode.style.color = 'rgb(0, 37, 89)';//'rgb(255, 255, 255)';
      dibujarEnLienzo(miLienzo);
      break;
    case 'ypfb':
      document.getElementById('cmp_Controls').style.display = 'none';
      titleMode.innerHTML = 'Isométrico para YPFB';
      titleMode.style.color = 'rgb(0, 37, 89)';//'rgb(255, 255, 255)';
      dibujarEnLienzo(miLienzo);
      break;
    case 'zoom':
      document.getElementById('cmp_Controls').style.display = 'none';
      titleMode.innerHTML = 'Zoom activado';
      titleMode.style.color = 'rgb(0, 37, 89)';//'rgb(255, 255, 255)';
      // dibujarEnLienzo(miLienzo);
      // activarZoom();
      break;

  }

  ctl_modeCanvas.appendChild(titleMode);
}

function setTubForro(){

  if(punteroDeEdicion.length > 0 && grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1] && grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1].type == 'P'){

    if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].tubForro){
      grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].tubForro = 'active';
      document.getElementById('tubForro').className = 'tubForro clicked';
    }
    else{
      delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].tubForro;
      document.getElementById('tubForro').className = 'tubForro';
    }
    copiarGrafo(grafo, grafoEspejo);
    var miLienzoMarcado = obtenerPosicionLienzoMarcado();
    dibujarEnLienzo(miLienzoMarcado);
    //grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].tubForro = 'active';
    //document.getElementById('tubForro').className = 'tubForro clicked';
  }

}

function setMedidor(miId){
  if(miId == 'medidorIzquierda'){
    if(punteroDeEdicion.length > 0){
      if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierda){
        grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierda = 'active';
        document.getElementById('medidorIzquierda').className = 'medidorIzquierda clicked';
      }
      else{
        delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierda;
        document.getElementById('medidorIzquierda').className = 'medidorIzquierda';
      }
      copiarGrafo(grafo, grafoEspejo);
      var miLienzoMarcado = obtenerPosicionLienzoMarcado();
      dibujarEnLienzo(miLienzoMarcado);
    }
  }
  else{
    if(punteroDeEdicion.length > 0){
      if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerecha){
        grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerecha = 'active';
        document.getElementById('medidorDerecha').className = 'medidorDerecha clicked';
      }
      else{
        delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerecha;
        document.getElementById('medidorDerecha').className = 'medidorDerecha';
      }
      copiarGrafo(grafo, grafoEspejo);
      var miLienzoMarcado = obtenerPosicionLienzoMarcado();
      dibujarEnLienzo(miLienzoMarcado);
    }
  }
}

function setMedidorNeo(miId){
  //console.log(miId.substring(0,16))
  //console.log(miId.substring(16,miId.length))
  if(miId.substring(0, 16) == 'medidorIzquierda'){
    if(punteroDeEdicion.length > 0){
      switch(miId.substring(16, miId.length)){
        case 'Arriba':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaArriba){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaArriba = 'active';
            document.getElementById('medidorIzquierdaArriba').className = 'medidorIzquierdaArriba clicked';
            document.getElementById('medidorIzquierdaIzquierda').className = 'medidorIzquierdaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaIzquierda;
            document.getElementById('medidorIzquierdaDerecha').className = 'medidorIzquierdaDerecha';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaDerecha;
            document.getElementById('medidorIzquierdaAbajo').className = 'medidorIzquierdaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaArriba;
            document.getElementById('medidorIzquierdaArriba').className = 'medidorIzquierdaArriba';
          }
          break;
        case 'Izquierda':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaIzquierda){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaIzquierda = 'active';

            document.getElementById('medidorIzquierdaArriba').className = 'medidorIzquierdaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaArriba;
            document.getElementById('medidorIzquierdaIzquierda').className = 'medidorIzquierdaIzquierda clicked';
            document.getElementById('medidorIzquierdaDerecha').className = 'medidorIzquierdaDerecha';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaDerecha;
            document.getElementById('medidorIzquierdaAbajo').className = 'medidorIzquierdaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaIzquierda;
            document.getElementById('medidorIzquierdaIzquierda').className = 'medidorIzquierdaIzquierda';
          }
          break;
        case 'Derecha':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaDerecha){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaDerecha = 'active';

            document.getElementById('medidorIzquierdaArriba').className = 'medidorIzquierdaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaArriba;
            document.getElementById('medidorIzquierdaIzquierda').className = 'medidorIzquierdaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaIzquierda;
            document.getElementById('medidorIzquierdaDerecha').className = 'medidorIzquierdaDerecha clicked';
            document.getElementById('medidorIzquierdaAbajo').className = 'medidorIzquierdaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaDerecha;
            document.getElementById('medidorIzquierdaDerecha').className = 'medidorIzquierdaDerecha';
          }
          break;
        case 'Abajo':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaAbajo){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaAbajo = 'active';
            document.getElementById('medidorIzquierdaAbajo').className = 'medidorIzquierdaAbajo clicked';

            document.getElementById('medidorIzquierdaArriba').className = 'medidorIzquierdaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaArriba;
            document.getElementById('medidorIzquierdaIzquierda').className = 'medidorIzquierdaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaIzquierda;
            document.getElementById('medidorIzquierdaDerecha').className = 'medidorIzquierdaDerecha ';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaDerecha;
            document.getElementById('medidorIzquierdaAbajo').className = 'medidorIzquierdaAbajo clicked';
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorIzquierdaAbajo;
            document.getElementById('medidorIzquierdaAbajo').className = 'medidorIzquierdaAbajo';
          }
          break;
      }
      copiarGrafo(grafo, grafoEspejo);
      var miLienzoMarcado = obtenerPosicionLienzoMarcado();
      dibujarEnLienzo(miLienzoMarcado);
    }
  }
  else{
    if(punteroDeEdicion.length > 0){
      switch(miId.substring(14, miId.length)){
        case 'Arriba':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaArriba){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaArriba = 'active';
            document.getElementById('medidorDerechaArriba').className = 'medidorDerechaArriba clicked';
            document.getElementById('medidorDerechaIzquierda').className = 'medidorDerechaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaIzquierda;
            document.getElementById('medidorDerechaDerecha').className = 'medidorDerechaDerecha';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaDerecha;
            document.getElementById('medidorDerechaAbajo').className = 'medidorDerechaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaArriba;
            document.getElementById('medidorDerechaArriba').className = 'medidorDerechaArriba';
          }
          break;
        case 'Izquierda':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaIzquierda){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaIzquierda = 'active';

            document.getElementById('medidorDerechaArriba').className = 'medidorDerechaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaArriba;
            document.getElementById('medidorDerechaIzquierda').className = 'medidorDerechaIzquierda clicked';
            document.getElementById('medidorDerechaDerecha').className = 'medidorDerechaDerecha';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaDerecha;
            document.getElementById('medidorDerechaAbajo').className = 'medidorDerechaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaIzquierda;
            document.getElementById('medidorDerechaIzquierda').className = 'medidorDerechaIzquierda';
          }
          break;
        case 'Derecha':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaDerecha){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaDerecha = 'active';

            document.getElementById('medidorDerechaArriba').className = 'medidorDerechaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaArriba;
            document.getElementById('medidorDerechaIzquierda').className = 'medidorDerechaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaIzquierda;
            document.getElementById('medidorDerechaDerecha').className = 'medidorDerechaDerecha clicked';
            document.getElementById('medidorDerechaAbajo').className = 'medidorDerechaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaDerecha;
            document.getElementById('medidorDerechaDerecha').className = 'medidorDerechaDerecha';
          }
          break;
        case 'Abajo':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaAbajo){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaAbajo = 'active';
            document.getElementById('medidorDerechaAbajo').className = 'medidorDerechaAbajo clicked';

            document.getElementById('medidorDerechaArriba').className = 'medidorDerechaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaArriba;
            document.getElementById('medidorDerechaIzquierda').className = 'medidorDerechaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaIzquierda;
            document.getElementById('medidorDerechaDerecha').className = 'medidorDerechaDerecha ';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaDerecha;
            document.getElementById('medidorDerechaAbajo').className = 'medidorDerechaAbajo clicked';
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].medidorDerechaAbajo;
            document.getElementById('medidorDerechaAbajo').className = 'medidorDerechaAbajo';
          }
          break;
      }
      copiarGrafo(grafo, grafoEspejo);
      var miLienzoMarcado = obtenerPosicionLienzoMarcado();
      dibujarEnLienzo(miLienzoMarcado);
    }
  }
}
//'medidorIzquierda'
//'medidorDerecha'

function setRegulador(miId){
  //console.log(miId)
  //console.log(miId.substring(0,18))
  //console.log(miId.substring(18,miId.length))
  if(miId.substring(0, 18) == 'reguladorIzquierda'){
    if(punteroDeEdicion.length > 0){
      switch(miId.substring(18, miId.length)){
        case 'Arriba':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArriba){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArriba = 'active';
            document.getElementById('reguladorIzquierdaArriba').className = 'reguladorIzquierdaArriba clicked';
            document.getElementById('reguladorIzquierdaIzquierda').className = 'reguladorIzquierdaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierda;
            document.getElementById('reguladorIzquierdaDerecha').className = 'reguladorIzquierdaDerecha';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerecha;
            document.getElementById('reguladorIzquierdaAbajo').className = 'reguladorIzquierdaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArriba;
            document.getElementById('reguladorIzquierdaArriba').className = 'reguladorIzquierdaArriba';
          }
          break;
        case 'Izquierda':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierda){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierda = 'active';

            document.getElementById('reguladorIzquierdaArriba').className = 'reguladorIzquierdaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArriba;
            document.getElementById('reguladorIzquierdaIzquierda').className = 'reguladorIzquierdaIzquierda clicked';
            document.getElementById('reguladorIzquierdaDerecha').className = 'reguladorIzquierdaDerecha';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerecha;
            document.getElementById('reguladorIzquierdaAbajo').className = 'reguladorIzquierdaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierda;
            document.getElementById('reguladorIzquierdaIzquierda').className = 'reguladorIzquierdaIzquierda';
          }
          break;
        case 'Derecha':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerecha){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerecha = 'active';

            document.getElementById('reguladorIzquierdaArriba').className = 'reguladorIzquierdaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArriba;
            document.getElementById('reguladorIzquierdaIzquierda').className = 'reguladorIzquierdaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierda;
            document.getElementById('reguladorIzquierdaDerecha').className = 'reguladorIzquierdaDerecha clicked';
            document.getElementById('reguladorIzquierdaAbajo').className = 'reguladorIzquierdaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerecha;
            document.getElementById('reguladorIzquierdaDerecha').className = 'reguladorIzquierdaDerecha';
          }
          break;
        case 'Abajo':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajo){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajo = 'active';
            document.getElementById('reguladorIzquierdaAbajo').className = 'reguladorIzquierdaAbajo clicked';

            document.getElementById('reguladorIzquierdaArriba').className = 'reguladorIzquierdaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArriba;
            document.getElementById('reguladorIzquierdaIzquierda').className = 'reguladorIzquierdaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierda;
            document.getElementById('reguladorIzquierdaDerecha').className = 'reguladorIzquierdaDerecha ';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerecha;
            document.getElementById('reguladorIzquierdaAbajo').className = 'reguladorIzquierdaAbajo clicked';
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajo;
            document.getElementById('reguladorIzquierdaAbajo').className = 'reguladorIzquierdaAbajo';
          }
          break;
        case 'ArribaSIM':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArribaSIM){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArribaSIM = 'active';
            document.getElementById('reguladorIzquierdaArribaSIM').className = 'reguladorIzquierdaArribaSIM clicked';
            document.getElementById('reguladorIzquierdaIzquierdaSIM').className = 'reguladorIzquierdaIzquierdaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierdaSIM;
            document.getElementById('reguladorIzquierdaDerechaSIM').className = 'reguladorIzquierdaDerechaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerechaSIM;
            document.getElementById('reguladorIzquierdaAbajoSIM').className = 'reguladorIzquierdaAbajoSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajoSIM;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArribaSIM;
            document.getElementById('reguladorIzquierdaArribaSIM').className = 'reguladorIzquierdaArribaSIM';
          }
          break;
        case 'IzquierdaSIM':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierdaSIM){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierdaSIM = 'active';

            document.getElementById('reguladorIzquierdaArribaSIM').className = 'reguladorIzquierdaArribaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArribaSIM;
            document.getElementById('reguladorIzquierdaIzquierdaSIM').className = 'reguladorIzquierdaIzquierdaSIM clicked';
            document.getElementById('reguladorIzquierdaDerechaSIM').className = 'reguladorIzquierdaDerechaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerechaSIM;
            document.getElementById('reguladorIzquierdaAbajoSIM').className = 'reguladorIzquierdaAbajoSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajoSIM;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierdaSIM;
            document.getElementById('reguladorIzquierdaIzquierdaSIM').className = 'reguladorIzquierdaIzquierdaSIM';
          }
          break;
        case 'DerechaSIM':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerechaSIM){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerechaSIM = 'active';

            document.getElementById('reguladorIzquierdaArribaSIM').className = 'reguladorIzquierdaArribaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArribaSIM;
            document.getElementById('reguladorIzquierdaIzquierdaSIM').className = 'reguladorIzquierdaIzquierdaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierdaSIM;
            document.getElementById('reguladorIzquierdaDerechaSIM').className = 'reguladorIzquierdaDerechaSIM clicked';
            document.getElementById('reguladorIzquierdaAbajoSIM').className = 'reguladorIzquierdaAbajoSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajoSIM;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerechaSIM;
            document.getElementById('reguladorIzquierdaDerechaSIM').className = 'reguladorIzquierdaDerechaSIM';
          }
          break;
        case 'AbajoSIM':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajoSIM){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajoSIM = 'active';
            document.getElementById('reguladorIzquierdaAbajoSIM').className = 'reguladorIzquierdaAbajoSIM clicked';

            document.getElementById('reguladorIzquierdaArribaSIM').className = 'reguladorIzquierdaArribaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaArribaSIM;
            document.getElementById('reguladorIzquierdaIzquierdaSIM').className = 'reguladorIzquierdaIzquierdaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaIzquierdaSIM;
            document.getElementById('reguladorIzquierdaDerechaSIM').className = 'reguladorIzquierdaDerechaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaDerechaSIM;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorIzquierdaAbajoSIM;
            document.getElementById('reguladorIzquierdaAbajoSIM').className = 'reguladorIzquierdaAbajoSIM';
          }
          break;
      }
      copiarGrafo(grafo, grafoEspejo);
      var miLienzoMarcado = obtenerPosicionLienzoMarcado();
      dibujarEnLienzo(miLienzoMarcado);
    }
  }
  else{
    //console.log('----------------------------------------')
    //console.log('INICIANDO')
    //console.log('----------------------------------------')
    //console.log(miId)
    //console.log(miId.substring(16, miId.length))
    if(punteroDeEdicion.length > 0){
      switch(miId.substring(16, miId.length)){
        case 'Arriba':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArriba){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArriba = 'active';
            document.getElementById('reguladorDerechaArriba').className = 'reguladorDerechaArriba clicked';
            document.getElementById('reguladorDerechaIzquierda').className = 'reguladorDerechaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierda;
            document.getElementById('reguladorDerechaDerecha').className = 'reguladorDerechaDerecha';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerecha;
            document.getElementById('reguladorDerechaAbajo').className = 'reguladorDerechaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArriba;
            document.getElementById('reguladorDerechaArriba').className = 'reguladorDerechaArriba';
          }
          break;
        case 'Izquierda':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierda){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierda = 'active';

            document.getElementById('reguladorDerechaArriba').className = 'reguladorDerechaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArriba;
            document.getElementById('reguladorDerechaIzquierda').className = 'reguladorDerechaIzquierda clicked';
            document.getElementById('reguladorDerechaDerecha').className = 'reguladorDerechaDerecha';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerecha;
            document.getElementById('reguladorDerechaAbajo').className = 'reguladorDerechaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierda;
            document.getElementById('reguladorDerechaIzquierda').className = 'reguladorDerechaIzquierda';
          }
          break;
        case 'Derecha':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerecha){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerecha = 'active';

            document.getElementById('reguladorDerechaArriba').className = 'reguladorDerechaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArriba;
            document.getElementById('reguladorDerechaIzquierda').className = 'reguladorDerechaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierda;
            document.getElementById('reguladorDerechaDerecha').className = 'reguladorDerechaDerecha clicked';
            document.getElementById('reguladorDerechaAbajo').className = 'reguladorDerechaAbajo';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajo;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerecha;
            document.getElementById('reguladorDerechaDerecha').className = 'reguladorDerechaDerecha';
          }
          break;
        case 'Abajo':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajo){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajo = 'active';
            document.getElementById('reguladorDerechaAbajo').className = 'reguladorDerechaAbajo clicked';

            document.getElementById('reguladorDerechaArriba').className = 'reguladorDerechaArriba';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArriba;
            document.getElementById('reguladorDerechaIzquierda').className = 'reguladorDerechaIzquierda';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierda;
            document.getElementById('reguladorDerechaDerecha').className = 'reguladorDerechaDerecha ';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerecha;
            document.getElementById('reguladorDerechaAbajo').className = 'reguladorDerechaAbajo clicked';
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajo;
            document.getElementById('reguladorDerechaAbajo').className = 'reguladorDerechaAbajo';
          }
          break;

        case 'ArribaSIM':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArribaSIM){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArribaSIM = 'active';
            document.getElementById('reguladorDerechaArribaSIM').className = 'reguladorDerechaArribaSIM clicked';
            document.getElementById('reguladorDerechaIzquierdaSIM').className = 'reguladorDerechaIzquierdaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierdaSIM;
            document.getElementById('reguladorDerechaDerechaSIM').className = 'reguladorDerechaDerechaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerechaSIM;
            document.getElementById('reguladorDerechaAbajoSIM').className = 'reguladorDerechaAbajoSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajoSIM;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArribaSIM;
            document.getElementById('reguladorDerechaArribaSIM').className = 'reguladorDerechaArribaSIM';
          }
          break;
        case 'IzquierdaSIM':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierdaSIM){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierdaSIM = 'active';

            document.getElementById('reguladorDerechaArribaSIM').className = 'reguladorDerechaArribaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArribaSIM;
            document.getElementById('reguladorDerechaIzquierdaSIM').className = 'reguladorDerechaIzquierdaSIM clicked';
            document.getElementById('reguladorDerechaDerechaSIM').className = 'reguladorDerechaDerechaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerechaSIM;
            document.getElementById('reguladorDerechaAbajoSIM').className = 'reguladorDerechaAbajoSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajoSIM;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierdaSIM;
            document.getElementById('reguladorDerechaIzquierdaSIM').className = 'reguladorDerechaIzquierdaSIM';
          }
          break;
        case 'DerechaSIM':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerechaSIM){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerechaSIM = 'active';

            document.getElementById('reguladorDerechaArribaSIM').className = 'reguladorDerechaArribaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArribaSIM;
            document.getElementById('reguladorDerechaIzquierdaSIM').className = 'reguladorDerechaIzquierdaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierdaSIM;
            document.getElementById('reguladorDerechaDerechaSIM').className = 'reguladorDerechaDerechaSIM clicked';
            document.getElementById('reguladorDerechaAbajoSIM').className = 'reguladorDerechaAbajoSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajoSIM;
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerechaSIM;
            document.getElementById('reguladorDerechaDerechaSIM').className = 'reguladorDerechaDerechaSIM';
          }
          break;
        case 'AbajoSIM':
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajoSIM){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajoSIM = 'active';
            document.getElementById('reguladorDerechaAbajoSIM').className = 'reguladorDerechaAbajoSIM clicked';

            document.getElementById('reguladorDerechaArribaSIM').className = 'reguladorDerechaArribaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaArribaSIM;
            document.getElementById('reguladorDerechaIzquierdaSIM').className = 'reguladorDerechaIzquierdaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaIzquierdaSIM;
            document.getElementById('reguladorDerechaDerechaSIM').className = 'reguladorDerechaDerechaSIM';
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaDerechaSIM;
            document.getElementById('reguladorDerechaAbajoSIM').className = 'reguladorDerechaAbajoSIM clicked';
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].reguladorDerechaAbajoSIM;
            document.getElementById('reguladorDerechaAbajoSIM').className = 'reguladorDerechaAbajoSIM';
          }
          break;
      }
      copiarGrafo(grafo, grafoEspejo);
      var miLienzoMarcado = obtenerPosicionLienzoMarcado();
      dibujarEnLienzo(miLienzoMarcado);
    }
  }
}

function setValvula(miId){
  //console.log(grafo[punteroDeEdicion[0]].length)
  //for(i = punteroDeEdicion[8]; i < grafo[punteroDeEdicion[0]].length; i++)
    //if(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]]){
    //}
  console.log(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1])
  if(punteroDeEdicion.length > 0 && grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1] && grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1].type == 'P'){
    if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].valvula){
      grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].valvula = 'active';
      document.getElementById('valvula').className = 'valvula clicked';
    }
    else{
      delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].valvula;
      document.getElementById('valvula').className = 'valvula';
    }
    copiarGrafo(grafo, grafoEspejo);
    var miLienzoMarcado = obtenerPosicionLienzoMarcado();
    dibujarEnLienzo(miLienzoMarcado);
  }
}

function setValvulaPunto(miId){
  if(punteroDeEdicion.length > 0 && grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1] && grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1].type== 'P'){
    if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].valvulaPunto){
      grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].valvulaPunto = 'active';
      document.getElementById('valvulaPunto').className = 'valvulaPunto clicked';
    }
    else{
      delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].valvulaPunto;
      document.getElementById('valvulaPunto').className = 'valvulaPunto';
    }
    copiarGrafo(grafo, grafoEspejo);
    var miLienzoMarcado = obtenerPosicionLienzoMarcado();
    dibujarEnLienzo(miLienzoMarcado);
  }
}

function setTe(miId){
  if(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1] && grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1].type == 'P')
    switch(miId){
      case 'te_30':
        if(punteroDeEdicion.length > 0){
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_30){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_30 = 'active';
            document.getElementById('te_30').className = 'te_30 clicked';
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_30;
            document.getElementById('te_30').className = 'te_30';
          }
          copiarGrafo(grafo, grafoEspejo);
          var miLienzoMarcado = obtenerPosicionLienzoMarcado();
          dibujarEnLienzo(miLienzoMarcado);
        }
        break;
      case 'te_90':
        if(punteroDeEdicion.length > 0){
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_90){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_90 = 'active';
            document.getElementById('te_90').className = 'te_90 clicked';
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_90;
            document.getElementById('te_90').className = 'te_90';
          }
          copiarGrafo(grafo, grafoEspejo);
          var miLienzoMarcado = obtenerPosicionLienzoMarcado();
          dibujarEnLienzo(miLienzoMarcado);
        }
        break;
      case 'te_150':
        if(punteroDeEdicion.length > 0){
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_150){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_150 = 'active';
            document.getElementById('te_150').className = 'te_150 clicked';
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_150;
            document.getElementById('te_150').className = 'te_150';
          }
          copiarGrafo(grafo, grafoEspejo);
          var miLienzoMarcado = obtenerPosicionLienzoMarcado();
          dibujarEnLienzo(miLienzoMarcado);
        }
        break;
      case 'te_210':
        if(punteroDeEdicion.length > 0){
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_210){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_210 = 'active';
            document.getElementById('te_210').className = 'te_210 clicked';
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_210;
            document.getElementById('te_210').className = 'te_210';
          }
          copiarGrafo(grafo, grafoEspejo);
          var miLienzoMarcado = obtenerPosicionLienzoMarcado();
          dibujarEnLienzo(miLienzoMarcado);
        }
        break;
      case 'te_270':
        if(punteroDeEdicion.length > 0){
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_270){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_270 = 'active';
            document.getElementById('te_270').className = 'te_270 clicked';
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_270;
            document.getElementById('te_270').className = 'te_270';
          }
          copiarGrafo(grafo, grafoEspejo);
          var miLienzoMarcado = obtenerPosicionLienzoMarcado();
          dibujarEnLienzo(miLienzoMarcado);
        }
        break;
      case 'te_330':
        if(punteroDeEdicion.length > 0){
          if(!grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_330){
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_330 = 'active';
            document.getElementById('te_330').className = 'te_330 clicked';
          }
          else{
            delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].te_330;
            document.getElementById('te_330').className = 'te_330';
          }
          copiarGrafo(grafo, grafoEspejo);
          var miLienzoMarcado = obtenerPosicionLienzoMarcado();
          dibujarEnLienzo(miLienzoMarcado);
        }
        break;
    }
}

//te_30
//te_90
//te_150
//te_210
//te_270
//te_330

function setInstalacion(){
  //alert('hola tub')
  if(punteroDeEdicion.length > 0){
    var miLienzoMarcado = obtenerPosicionLienzoMarcado();
    if(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].instalacion){
      //delete grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].instalacion;
      document.getElementById('componenteTePorInstalacion').className = 'instalacion';
      delGraphWithSegment(miLienzoMarcado, punteroDeEdicion[0], punteroDeEdicion[8]);
    }
    else{
      //grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].instalacion = 'active';
      document.getElementById('componenteTePorInstalacion').className = 'instalacion clicked';
      addGraphWithSegment(miLienzoMarcado, punteroDeEdicion[0], punteroDeEdicion[8]);
      //console.log(miLienzoMarcado)
    }
    copiarGrafo(grafo, grafoEspejo);

    dibujarEnLienzo(miLienzoMarcado);
  }
}

//CARGA  TODOS LOS LIENZOS QUE EXISTE EN EL GRAFO[0] Q ES EL PRINCIPAL
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

function copiarCirculosExtra(){
  circulosExtraEspejo = circulosExtra.slice(0)
}

function restaurarCirculosExtra(){
  circulosExtra = circulosExtraEspejo.slice(0)
}

function copiarGrafo(origen, destino){
  //destino = new Array();
  for(po = 0; po < origen.length; po++){
    destino[po] = new Array();
    for(poc = 0; poc < origen[po].length; poc++){
      if(origen[po][poc].type == 'P')
        destino[po][poc] = JSON.parse(JSON.stringify(origen[po][poc]));

      if(origen[po][poc].type == 'H')
        destino[po][poc] = JSON.parse(JSON.stringify(origen[po][poc]));

      if(origen[po][poc].type == 'S')
        destino[po][poc] = JSON.parse(JSON.stringify(origen[po][poc]));
    }
  }
}

function subGrafo(grafoObjetivo, origen, fin){
  var miSubGrafo = new Array();
  var posicion = 0;
  for(sgc = origen; sgc < fin; sgc++){
    miSubGrafo[posicion] = JSON.parse(JSON.stringify(grafoObjetivo[sgc]));
    posicion++;
  }
  return miSubGrafo;
}

//function

function recorrerGrafo(grafoObjetivo, pivoteInicio, pivoteFin){
  var distancia = pivoteFin-pivoteInicio;
  var miSubGrafo = subGrafo(grafoObjetivo, pivoteFin, miSubGrafo.length);
  for(m = 0; m < distancia ;m++)
    grafoObjetivo.pop()
  for(m = 0; m < miSubGrafo.length; m++){
    grafoObjetivo[pivoteInicio] = JSON.parse(JSON.stringify(miSubGrafo[m]));
    pivoteInicio++;
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
  for(tc = 0; tc < tagsExtra.length; tc++){
    if(tagsExtra[tc].hoja > posicion)
      tagsExtra[tc].hoja = tagsExtra[tc].hoja + 1;
  }

  //////////////////////////////////////////////////////////
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
    //console.log(pivoteGrafo)
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
  copiarGrafo(grafo, grafoEspejo);
  //console.log(grafo);
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
    /////////////////////////////////////////////////
    console.log(position)
    var nameDataAux = new Array();
    var namePos = 0;
    for(r = position+1; r < numberPageData.length; r++){
      nameDataAux[namePos] = numberPageData[r];
      namePos++;
    }
    numberPageData[position+1] = '1 : 1';
    namePos = position + 2;
    for(r = 0; r < nameDataAux.length; r++){
      numberPageData[namePos] = nameDataAux[r];
      namePos++;
    }
    /////////////////////////////////////////////////
  }
  else{
    /////////////////////////////////////////////////
    console.log(position)
    var nameDataAux = new Array();
    var namePos = 0;
    for(r = 0; r < numberPageData.length; r++){
      nameDataAux[namePos] = numberPageData[r];
      namePos++;
    }
    numberPageData[0] = '1 : 1';
    namePos = 1;
    for(r = 0; r < nameDataAux.length; r++){
      numberPageData[namePos] = nameDataAux[r];
      namePos++;
    }
    /////////////////////////////////////////////////
  }

  ponerAccionEjecutada('Lienzo añadido: '+ nombre, 'Se ha añadido un nuevo lienzo correctamente.')

  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  document.getElementById('numberPageData').value = JSON.stringify(numberPageData) || '[]';
  ///////////////////////////////////////////////////////////////

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


      for(rG = 0; rG < grafo.length; rG++){
        for(rE = 0; rE<grafo[rG].length; rE++){
          if(grafo[rG][rE].name == ctl_lienzoBotonera.children[myPosition].innerHTML){
            grafo[rG][rE].name = txt_nameChanger.value;
            break;
          }
        }
      }
      ctl_lienzoBotonera.children[myPosition].innerHTML = txt_nameChanger.value;
    }
  }
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
}

function eliminarLienzoArray(posicion){
  //console.log('Se eliminara en: '+posicion)
  var tagsExtraAux = new Array();
  //destino[po][poc] = JSON.parse(JSON.stringify(origen[po][poc]));
  for(tc = 0; tc < tagsExtra.length; tc++){

    if(tagsExtra[tc].hoja != posicion){
      if(tagsExtra[tc].hoja > posicion)
        tagsExtra[tc].hoja = tagsExtra[tc].hoja - 1;
      tagsExtraAux.push(JSON.parse(JSON.stringify(tagsExtra[tc])));
    }

  }
  tagsExtra = new Array();

  for(tc = 0; tc < tagsExtraAux.length; tc++){
    tagsExtra.push(JSON.parse(JSON.stringify(tagsExtraAux[tc])));
  }
  //dibujarTagsExtra();
  tgS_listModifier.style.display = 'none'
  //console.log(tagsExtra)
  /////////////////////////////////////////////////

  //console.log(posicion);
  var miDelGraph = new Array();
  for(rg = 0; rg < grafo.length ; rg++){
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
    //console.log(pivoteGrafoIni)
    //console.log(pivoteGrafoFin)
    for(gr = pivoteGrafoIni; gr < pivoteGrafoFin; gr++){
      if(grafo[rg][gr].padre){
        miDelGraph.push(rg);
      }
    }
  }

  for(rg = 0; rg < miDelGraph.length; rg++){
    delGraph('instDel' + miDelGraph[rg]);
  }


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
  grafoEspejo = new Array();
  copiarGrafo(grafo, grafoEspejo);
  tgS_listModifier.style.display = 'none'
  //console.log(grafo);
}

function setAceptarDeleteModal(){
  ponerAlerta('Lienzo eliminado: '+ctl_lienzoBotonera.children[deletePosition].innerHTML, 'El lienzo se ha eliminado correctamente, junto con todos sus datos correspondientes')
  eliminarLienzoArray(deletePosition);

  /////////////////////////////////////////////////
  //console.log(deletePosition);
  var nameDataAux = new Array();
  var namePos = 0;
  for(r = deletePosition + 1; r < numberPageData.length; r++){
    nameDataAux[namePos] = numberPageData[r];
    namePos++;
  }
  numberPageData.pop();

  namePos = deletePosition;
  for(r = 0; r < nameDataAux.length; r++){
    numberPageData[namePos] = nameDataAux[r];
    namePos++;
  }
  document.getElementById('numberPageData').value = JSON.stringify(numberPageData) || '[]';
  /////////////////////////////////////////////////

  ctl_lienzoBotonera.removeChild(ctl_lienzoBotonera.children[deletePosition]);
  limpiarLienzo();
  deletePosition = -1;

  //console.log(ctl_lienzoBotonera.children.length);

  if(ctl_lienzoBotonera.children.length == 0){

    insertarLienzoArray(0, 'Hoja 0', 'Hoja 0');
    var delCount = grafo.length-1;
    while(grafo.length > 1){
      grafo.pop(delCount);
      delCount--;
    }
    //copiarGrafo(grafo, grafoEspejo);
    recargarLienzos();


    ponerAccionEjecutada('Lienzo creado '+ctl_lienzoBotonera.children[0].innerHTML, 'Se ha creado un lienzo de dibujo por defecto, debe existir al menos un lienzo vacío para comenzar a dibujar.')
  }
  //console.log(grafo)
  alert_Modal.style.display = 'none';
  inicializarLista();
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
    ponerModalAlert('Estas a punto de eliminar el lienzo de dibujo <span>'+ctl_lienzoBotonera.children[position].innerHTML+'</span> de tu proyecto isométrico. Además se eliminarán <span>todas las instalaciones</span> que comiencen en esta hoja de todas las hojas. Este cambio será irrevertible. <span>¿Estás seguro?</span>');

    alert_Modal.style.display = 'block';

  }

  if(ctl_lienzoBotonera.children.length== 0)
    ponerAlerta('Alerta de proyecto', 'No hay ningún lienzo, podrían haber errores. Crea uno para evitar esto')//console.log('todo eliminado')
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';

  ///////////////////////////////////////////////////////////////
}

function adelanteLienzoArray(posicion){

  for(tc = 0; tc < tagsExtra.length; tc++){
    if(tagsExtra[tc].hoja == posicion)
      tagsExtra[tc].hoja = tagsExtra[tc].hoja - 1;
    else if(tagsExtra[tc].hoja == posicion-1){
      tagsExtra[tc].hoja = tagsExtra[tc].hoja + 1;
    }
  }
  ////////////////////////////////////////////////////
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
  copiarGrafo(grafo, grafoEspejo)
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
      ponerAlerta('Posición adelantada', 'El lienzo ha sido llevado una posición adelante.');
      /////////////////////////////////////////////////
      //console.log(position);
      var nameDataAux = numberPageData[position];
      numberPageData[position] = numberPageData[position-1];
      numberPageData[position-1] = nameDataAux;
      document.getElementById('numberPageData').value = JSON.stringify(numberPageData) || '[]';
      /////////////////////////////////////////////////
    }
    else
      ponerAlerta('Posición mínima alcanzada', 'El lienzo esta en la mínima posición posible.')
  }
  else
    ponerAlerta('Imposible llevar adelante', 'Debes seleccionar un lienzo para llevarlo.');
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
}

function atrasLienzoArray(posicion){
  //console.log('Ps: '+ posicion)
  for(tc = 0; tc < tagsExtra.length; tc++){
    if(tagsExtra[tc].hoja == posicion)
      tagsExtra[tc].hoja = tagsExtra[tc].hoja + 1;
    else if(tagsExtra[tc].hoja == posicion+1){
      tagsExtra[tc].hoja = tagsExtra[tc].hoja - 1;
    }
  }
  ////////////////////////////////////////////////////
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

  copiarGrafo(grafo, grafoEspejo)
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
      /////////////////////////////////////////////////
      //console.log(position);
      var nameDataAux = numberPageData[position];
      numberPageData[position] = numberPageData[position + 1];
      numberPageData[position + 1] = nameDataAux;
      document.getElementById('numberPageData').value = JSON.stringify(numberPageData) || '[]';
      /////////////////////////////////////////////////
    }
    else
      ponerAlerta('Posición máxima alcanzada', 'El lienzo esta en la máxima posición posible.')
  }
  else
    ponerAlerta('Imposible llevar atrás', 'Debes seleccionar un lienzo para llevarlo.');
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
}

function cargarHoja(a){
  document.getElementById('cmp_Controls').style.display = 'none'
  //console.log(grafo)
  tagEditable = new Array();
  setTagGrade(-1);
  punteroDeDibujo = new Array();
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
    //console.log(myButton.id);
    if(markedButton)
      markedButton.className = 'boton';
    myButton.className = 'boton activo';
    dibujarEnLienzo(myButtonPosition);
    cambiarGrosorLinea(controlRange.value)
    txt_nameChanger.value = myButton.innerHTML//id;
  }

  inicializarLista();
  if(zoomActive){
    svgContent = document.getElementById('miSVGLienzo')
    svgZoomContent =  document.getElementById('zoomContentSvg')
    cleanSvgLienzo(svgZoomContent);
    loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
  }
  drawCirclesList()
}

function dibujarEnLienzo(numeroDeLienzo){

  ///////////////////////////////////////////////////////////////////////
  var sum14 = 0;
  var sum1 = 0;
  var sum34 = 0;
  var sum12 = 0;
  var sumTotal = 0;

  var codo14 = 0;
  var codo1 = 0;
  var codo34 = 0;
  var codo12 = 0;

  var cupla12 = 0;
  var cupla34 = 0;
  var cupla01 = 0;
  var cupla14 = 0;

  var te12 = 0;
  var te34 = 0;
  var te01 = 0;
  var te14 = 0;

  var tapon12 = 0;
  var tapon34 = 0;
  var tapon01 = 0;
  var tapon14 = 0;

  var reductorDe14a01 = 0;
  var reductorDe01a34 = 0;
  var reductorDe34a12 = 0;

  var valvula12 = 0;
  var valvula34 = 0;
  var valvula01 = 0;
  var valvula14 = 0;
  ///////////////////////////////////////////////////////////////////////

  limpiarLienzo();
  for(pivoteGrafo = 0; pivoteGrafo < grafo.length; pivoteGrafo++){
    //console.log(grafo[pivoteGrafo]);
    dibujarRuta(numeroDeLienzo, grafo[pivoteGrafo]);
    var sumaParcial = sumarRuta(numeroDeLienzo, grafo[pivoteGrafo]);
    sum12 = sum12 + sumaParcial[0];
    sum34 = sum34 + sumaParcial[1];
    sum1 = sum1 + sumaParcial[2];
    sum14 = sum14 + sumaParcial[3];


    codo14 = codo14 + sumaParcial[7];
    codo1 = codo1 + sumaParcial[6];
    codo34 = codo34 + sumaParcial[5];
    codo12 = codo12 + sumaParcial[4];

    cupla12 = cupla12 + sumaParcial[8];
    cupla34 = cupla34 + sumaParcial[9];
    cupla01 = cupla01 + sumaParcial[10];
    cupla14 = cupla14 + sumaParcial[11];

    te12 = te12 + sumaParcial[12];
    te34 = te34 + sumaParcial[13];
    te01 = te01 + sumaParcial[14];
    te14 = te14 + sumaParcial[15];

    tapon12 = tapon12 + sumaParcial[16];
    tapon34 = tapon34 + sumaParcial[17];
    tapon01 = tapon01 + sumaParcial[18];
    tapon14 = tapon14 + sumaParcial[19];

    reductorDe14a01 = reductorDe14a01 + sumaParcial[20];
    reductorDe01a34 = reductorDe01a34 + sumaParcial[21];
    reductorDe34a12 = reductorDe34a12 + sumaParcial[22];

    valvula12 = valvula12 + sumaParcial[23];
    valvula34 = valvula34 + sumaParcial[24];
    valvula01 = valvula01 + sumaParcial[25];
    valvula14 = valvula14 + sumaParcial[26];

  }
  if(modo == 'ypfb'){

    sum34 = sum34 + sum1 + sum14;
    sum1 = 0;
    sum14 = 0;

    codo14 = 0;
    codo1 = 0;
    codo34 = codo34 + codo1 + codo14;

    cupla34 = cupla34 + cupla01+ cupla14;
    cupla01 = 0;
    cupla14 = 0;

    te34 = te34 + te01 + te14;
    te01 = 0;
    te14 = 0;

    tapon34 = tapon34 + tapon01 + tapon14;
    tapon01 = 0;
    tapon14 = 0;

    reductorDe14a01 = 0;
    reductorDe01a34 = 0;
    reductorDe34a12 = reductorDe34a12;

    valvula34 = valvula34 + valvula01 + valvula14;
    valvula01 = 0;
    valvula14 = 0;
  }

  /////////////
  //YPFB REPORT
  /////////////
  dibujarTagsExtra(numeroDeLienzo);
  dibujarCirculosExtra(numeroDeLienzo);
  //
  // console.log(tagsExtra);
  document.getElementById('indexPageCanvas').value = numberPageData[numeroDeLienzo];
  //console.log('suma14: '+sum14)
  //console.log('suma1: '+sum1)
  //console.log('suma34: '+sum34)
  //console.log('suma12: '+sum12)
  //Math.round((distancia - limiteDistanciaTubo)*100)/100;
  //console.log(codo12)

  //console.log(document.getElementById('tablasAccesorios').className)

  var miTop = 680;

  if(sum14 > 0 && modo != 'ypfb'){
    document.getElementById('tubSum_14').className = '';
    document.getElementById('suma_14').innerHTML = Math.round(sum14*100)/100;
    miTop = miTop - 15;
    ///////////////////////////////////////////////////
    document.getElementById('tubSum_14Copia').className = '';
    document.getElementById('suma_14Copia').innerHTML = Math.round(sum14*100)/100;
  }
  else{
    document.getElementById('tubSum_14').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('tubSum_14Copia').className = 'none';
  }
  if(sum1 > 0 && modo != 'ypfb'){
    document.getElementById('tubSum_1').className = '';
    document.getElementById('suma_1').innerHTML = Math.round(sum1*100)/100;
    //////////////////////////////////////////////////
    document.getElementById('tubSum_1Copia').className = '';
    document.getElementById('suma_1Copia').innerHTML = Math.round(sum1*100)/100;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('tubSum_1').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('tubSum_1Copia').className = 'none';
  }
  if(sum34 > 0){
    document.getElementById('tubSum_34').className = '';
    document.getElementById('suma_34').innerHTML = Math.round(sum34*100)/100;
    //////////////////////////////////////////////////
    document.getElementById('tubSum_34Copia').className = '';
    document.getElementById('suma_34Copia').innerHTML = Math.round(sum34*100)/100;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('tubSum_34').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('tubSum_34Copia').className = 'none';
  }
  if(sum12 > 0){
    document.getElementById('tubSum_12').className = '';
    document.getElementById('suma_12').innerHTML = Math.round(sum12*100)/100;
    //////////////////////////////////////////////////
    document.getElementById('tubSum_12Copia').className = '';
    document.getElementById('suma_12Copia').innerHTML = Math.round(sum12*100)/100;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('tubSum_12').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('tubSum_12Copia').className = 'none';
  }

  if(codo12 > 0){
    document.getElementById('tubCodo_12').className = '';
    document.getElementById('codo_12').innerHTML = codo12;
    //////////////////////////////////////////////////
    document.getElementById('tubCodo_12Copia').className = '';
    document.getElementById('codo_12Copia').innerHTML = codo12;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('tubCodo_12').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('tubCodo_12Copia').className = 'none';
  }

  if(codo34 > 0){
    document.getElementById('tubCodo_34').className = '';
    document.getElementById('codo_34').innerHTML = codo34;
    //////////////////////////////////////////////////
    document.getElementById('tubCodo_34Copia').className = '';
    document.getElementById('codo_34Copia').innerHTML = codo34;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('tubCodo_34').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('tubCodo_34Copia').className = 'none';
  }
  if(codo1 > 0 && modo != 'ypfb'){
    document.getElementById('tubCodo_1').className = '';
    document.getElementById('codo_1').innerHTML = codo1;
    //////////////////////////////////////////////////
    document.getElementById('tubCodo_1Copia').className = '';
    document.getElementById('codo_1Copia').innerHTML = codo1;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('tubCodo_1').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('tubCodo_1Copia').className = 'none';
  }
  if(codo14 > 0 && modo != 'ypfb'){
    document.getElementById('tubCodo_14').className = '';
    document.getElementById('codo_14').innerHTML = codo14;
    //////////////////////////////////////////////////
    document.getElementById('tubCodo_14Copia').className = '';
    document.getElementById('codo_14Copia').innerHTML = codo14;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('tubCodo_14').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('tubCodo_14Copia').className = 'none';
  }

  if(cupla12 > 0){
    document.getElementById('titCupla12').className = '';
    document.getElementById('cupla12').innerHTML = cupla12;
    //////////////////////////////////////////////////
    document.getElementById('titCupla12Copia').className = '';
    document.getElementById('cupla12Copia').innerHTML = cupla12;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titCupla12').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titCupla12Copia').className = 'none';
  }

  if(cupla34 > 0){
    document.getElementById('titCupla34').className = '';
    document.getElementById('cupla34').innerHTML = cupla34;
    //////////////////////////////////////////////////
    document.getElementById('titCupla34Copia').className = '';
    document.getElementById('cupla34Copia').innerHTML = cupla34;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titCupla34').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titCupla34Copia').className = 'none';
  }
  if(cupla01 > 0 && modo != 'ypfb'){
    document.getElementById('titCupla01').className = '';
    document.getElementById('cupla01').innerHTML = cupla01;
    //////////////////////////////////////////////////
    document.getElementById('titCupla01Copia').className = '';
    document.getElementById('cupla01Copia').innerHTML = cupla01;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titCupla01').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titCupla01Copia').className = 'none';
  }
  if(cupla14 > 0 && modo != 'ypfb'){
    document.getElementById('titCupla14').className = '';
    document.getElementById('cupla14').innerHTML = cupla14;
    //////////////////////////////////////////////////
    document.getElementById('titCupla14Copia').className = '';
    document.getElementById('cupla14Copia').innerHTML = cupla14;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titCupla14').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titCupla14Copia').className = 'none';
  }

  if(te12 > 0){
    document.getElementById('titTe_12').className = '';
    document.getElementById('te_12').innerHTML = te12;
    //////////////////////////////////////////////////
    document.getElementById('titTe_12Copia').className = '';
    document.getElementById('te_12Copia').innerHTML = te12;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titTe_12').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titTe_12Copia').className = 'none';
  }

  if(te34 > 0){
    document.getElementById('titTe_34').className = '';
    document.getElementById('te_34').innerHTML = te34;
    //////////////////////////////////////////////////
    document.getElementById('titTe_34Copia').className = '';
    document.getElementById('te_34Copia').innerHTML = te34;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titTe_34').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titTe_34Copia').className = 'none';
  }

  if(te01 > 0 && modo != 'ypfb'){
    document.getElementById('titTe_01').className = '';
    document.getElementById('te_01').innerHTML = te01;
    //////////////////////////////////////////////////
    document.getElementById('titTe_01Copia').className = '';
    document.getElementById('te_01Copia').innerHTML = te01;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titTe_01').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titTe_01Copia').className = 'none';
  }

  if(te14 > 0 && modo != 'ypfb'){
    document.getElementById('titTe_14').className = '';
    document.getElementById('te_14').innerHTML = te14;
    //////////////////////////////////////////////////
    document.getElementById('titTe_14Copia').className = '';
    document.getElementById('te_14Copia').innerHTML = te14;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titTe_14').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titTe_14Copia').className = 'none';
  }


  if(tapon12 > 0){
    document.getElementById('titTapon12').className = '';
    document.getElementById('tapon12').innerHTML = tapon12;
    //////////////////////////////////////////////////
    document.getElementById('titTapon12Copia').className = '';
    document.getElementById('tapon12Copia').innerHTML = tapon12;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titTapon12').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titTapon12Copia').className = 'none';
  }

  if(tapon34 > 0){
    document.getElementById('titTapon34').className = '';
    document.getElementById('tapon34').innerHTML = tapon34;
    //////////////////////////////////////////////////
    document.getElementById('titTapon34Copia').className = '';
    document.getElementById('tapon34Copia').innerHTML = tapon34;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titTapon34').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titTapon34Copia').className = 'none';
  }

  if(tapon01 > 0){
    document.getElementById('titTapon01').className = '';
    document.getElementById('tapon01').innerHTML = tapon01;
    //////////////////////////////////////////////////
    document.getElementById('titTapon01Copia').className = '';
    document.getElementById('tapon01Copia').innerHTML = tapon01;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titTapon01').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titTapon01Copia').className = 'none';
  }

  if(tapon14 > 0){
    document.getElementById('titTapon14').className = '';
    document.getElementById('tapon14').innerHTML = tapon14;
    //////////////////////////////////////////////////
    document.getElementById('titTapon14Copia').className = '';
    document.getElementById('tapon14Copia').innerHTML = tapon14;
    miTop = miTop - 15;
  }
  else{
    document.getElementById('titTapon14').className = 'none';
    //////////////////////////////////////////////////
    document.getElementById('titTapon14Copia').className = 'none';
  }

  if(reductorDe14a01 > 0){
    document.getElementById('titReduccion14a01').className = '';
    document.getElementById('reduccion14a01').innerHTML = reductorDe14a01;
    //////////////////////////////////////////////////
    document.getElementById('titReduccion14a01Copia').className = '';
    document.getElementById('reduccion14a01Copia').innerHTML = reductorDe14a01;
    miTop = miTop - 15;
  }else{
    document.getElementById('titReduccion14a01').className = 'none';
    document.getElementById('titReduccion14a01Copia').className = 'none';
  }
  if(reductorDe01a34 > 0){
    document.getElementById('titReduccion01a34').className = '';
    document.getElementById('reduccion01a34').innerHTML = reductorDe01a34;
    //////////////////////////////////////////////////
    document.getElementById('titReduccion01a34Copia').className = '';
    document.getElementById('reduccion01a34Copia').innerHTML = reductorDe01a34;
    miTop = miTop - 15;
  }else{
    document.getElementById('titReduccion01a34').className = 'none';
    document.getElementById('titReduccion01a34Copia').className = 'none';
  }
  if(reductorDe34a12 > 0){
    document.getElementById('titReduccion34a12').className = '';
    document.getElementById('reduccion34a12').innerHTML = reductorDe34a12;
    //////////////////////////////////////////////////
    document.getElementById('titReduccion34a12Copia').className = '';
    document.getElementById('reduccion34a12Copia').innerHTML = reductorDe34a12;
    miTop = miTop - 15;
  }else{
    document.getElementById('titReduccion34a12').className = 'none';
    document.getElementById('titReduccion34a12Copia').className = 'none';
  }

  if(valvula12 > 0){
    document.getElementById('titValvula12').className = '';
    document.getElementById('valvula12').innerHTML = valvula12;
    //////////////////////////////////////////////////
    document.getElementById('titValvula12Copia').className = '';
    document.getElementById('valvula12Copia').innerHTML = valvula12;
    miTop = miTop - 15;
  }else{
    document.getElementById('titValvula12').className = 'none';
    document.getElementById('titValvula12Copia').className = 'none';
  }

  if(valvula34 > 0){
    document.getElementById('titValvula34').className = '';
    document.getElementById('valvula34').innerHTML = valvula34;
    //////////////////////////////////////////////////
    document.getElementById('titValvula34Copia').className = '';
    document.getElementById('valvula34Copia').innerHTML = valvula34;
    miTop = miTop - 15;
  }else{
    document.getElementById('titValvula34').className = 'none';
    document.getElementById('titValvula34Copia').className = 'none';
  }

  if(valvula01 > 0){
    document.getElementById('titValvula01').className = '';
    document.getElementById('valvula01').innerHTML = valvula01;
    //////////////////////////////////////////////////
    document.getElementById('titValvula01Copia').className = '';
    document.getElementById('valvula01Copia').innerHTML = valvula01;
    miTop = miTop - 15;
  }else{
    document.getElementById('titValvula01').className = 'none';
    document.getElementById('titValvula01Copia').className = 'none';
  }

  if(valvula14 > 0){
    document.getElementById('titValvula14').className = '';
    document.getElementById('valvula14').innerHTML = valvula14;
    //////////////////////////////////////////////////
    document.getElementById('titValvula14Copia').className = '';
    document.getElementById('valvula14Copia').innerHTML = valvula14;
    miTop = miTop - 15;
  }else{
    document.getElementById('titValvula14').className = 'none';
    document.getElementById('titValvula14Copia').className = 'none';
  }

  sumTotal = sum14 + sum1 + sum34 + sum12;
  document.getElementById('tablasAccesorios').style.top = miTop+'px';
  document.getElementById('suma_total').innerHTML = Math.round(sumTotal*100)/100;
  ///////////////////////////////////////////////////
  document.getElementById('tablasAccesoriosCopia').style.top = miTop+'px';
  document.getElementById('suma_totalCopia').innerHTML = Math.round(sumTotal*100)/100;


}


function dibujarEnLienzoEspejo(numeroDeLienzo){

  limpiarLienzo();
  for(pivoteGrafo = 0; pivoteGrafo < grafoEspejo.length; pivoteGrafo++){
    //console.log(grafo[pivoteGrafo]);
    dibujarRuta(numeroDeLienzo, grafoEspejo[pivoteGrafo]);
  }
  marcarTrozoComponentesEspejo(trozoParaMover);
  dibujarTagsExtra(numeroDeLienzo);
  dibujarCirculosExtraEspejo(numeroDeLienzo);

  document.getElementById('indexPageCanvas').value = numberPageData[numeroDeLienzo];

}


function dibujarCodoSiguiente(miPunto, miSeparacion){

  var px1 = miSeparacion * Math.cos((miPunto.angulo-35) * Math.PI/180) + miPunto.x;
  var py1 = -miSeparacion * Math.sin((miPunto.angulo-35) * Math.PI/180) + miPunto.y;

  var px2 = miSeparacion * Math.cos((miPunto.angulo+35) * Math.PI/180) + miPunto.x;
  var py2 = -miSeparacion * Math.sin((miPunto.angulo+35) * Math.PI/180) + miPunto.y;

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

}

function dibujarCodoSiguienteAngulo(miPunto, miSeparacion, miAngulo){

  var ox = (miSeparacion*37.79527559055/escala) * Math.cos((miPunto.angulo) * Math.PI/180) + miPunto.x;
  var oy = -(miSeparacion*37.79527559055/escala) * Math.sin((miPunto.angulo) * Math.PI/180) + miPunto.y;

  var px1 = ((miSeparacion/1.5)*37.79527559055/escala) * Math.cos((miAngulo) * Math.PI/180) + ox;
  var py1 = -((miSeparacion/1.5)*37.79527559055/escala) * Math.sin((miAngulo) * Math.PI/180) + oy;

  var px2 = ((miSeparacion/1.5)*37.79527559055/escala) * Math.cos((miAngulo-180) * Math.PI/180) + ox;
  var py2 = -((miSeparacion/1.5)*37.79527559055/escala) * Math.sin((miAngulo-180) * Math.PI/180) + oy;

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

}

function dibujarCodoAnterior(miPunto, miPuntoAnterior, miSeparacion){


  var px1 = -miSeparacion * Math.cos((miPuntoAnterior.angulo-35) * Math.PI/180) + miPunto.x;
  var py1 = miSeparacion * Math.sin((miPuntoAnterior.angulo-35) * Math.PI/180) + miPunto.y;

  var px2 = -miSeparacion * Math.cos((miPuntoAnterior.angulo+35) * Math.PI/180) + miPunto.x;
  var py2 = miSeparacion * Math.sin((miPuntoAnterior.angulo+35) * Math.PI/180) + miPunto.y;

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

}

function dibujarCodoAnteriorAngulo(miPunto, miSeparacion, miAngulo){

  /*
  var ox = (miSeparacion*37.79527559055/escala) * Math.cos((miPunto.angulo) * Math.PI/180) + miPunto.x;
  var oy = -(miSeparacion*37.79527559055/escala) * Math.sin((miPunto.angulo) * Math.PI/180) + miPunto.y;

  var px1 = (miSeparacion*37.79527559055/escala) * Math.cos((miAngulo) * Math.PI/180) + ox;
  var py1 = -(miSeparacion*37.79527559055/escala) * Math.sin((miAngulo) * Math.PI/180) + oy;

  var px2 = (miSeparacion*37.79527559055/escala) * Math.cos((miAngulo-180) * Math.PI/180) + ox;
  var py2 = -(miSeparacion*37.79527559055/escala) * Math.sin((miAngulo-180) * Math.PI/180) + oy;
  */

  var ox = (miSeparacion*37.79527559055/escala) * Math.cos((miAngulo-180) * Math.PI/180) + miPunto.x;
  var oy = -(miSeparacion*37.79527559055/escala) * Math.sin((miAngulo-180) * Math.PI/180) + miPunto.y;

  var px1 = -((miSeparacion/2)*37.79527559055/escala) * Math.cos((miPunto.angulo-180) * Math.PI/180) + ox;
  var py1 = ((miSeparacion/2)*37.79527559055/escala) * Math.sin((miPunto.angulo-180) * Math.PI/180) + oy;

  var px2 = -((miSeparacion/2)*37.79527559055/escala) * Math.cos((miPunto.angulo) * Math.PI/180) + ox;
  var py2 = ((miSeparacion/2)*37.79527559055/escala) * Math.sin((miPunto.angulo) * Math.PI/180) + oy;

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

}

function dibujarCodoAnteriorAnguloAlone(miPunto, miSeparacion, miAngulo, miNextPoint){

  var ox = (miSeparacion*37.79527559055/escala) * Math.cos((miAngulo-180) * Math.PI/180) + miPunto.x;
  var oy = -(miSeparacion*37.79527559055/escala) * Math.sin((miAngulo-180) * Math.PI/180) + miPunto.y;

  var px1 = -((miSeparacion/2)*37.79527559055/escala) * Math.cos((miNextPoint.angulo-180) * Math.PI/180) + ox;
  var py1 = ((miSeparacion/2)*37.79527559055/escala) * Math.sin((miNextPoint.angulo-180) * Math.PI/180) + oy;

  var px2 = -((miSeparacion/2)*37.79527559055/escala) * Math.cos((miNextPoint.angulo) * Math.PI/180) + ox;
  var py2 = ((miSeparacion/2)*37.79527559055/escala) * Math.sin((miNextPoint.angulo) * Math.PI/180) + oy;

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

}

function dibujarCupla(miPunto, miSeparacion){

  var px1 = miSeparacion * Math.cos((miPunto.angulo-90) * Math.PI/180) + miPunto.x;
  var py1 = -miSeparacion * Math.sin((miPunto.angulo-90) * Math.PI/180) + miPunto.y;

  var px2 = miSeparacion * Math.cos((miPunto.angulo+90) * Math.PI/180) + miPunto.x;
  var py2 = -miSeparacion * Math.sin((miPunto.angulo+90) * Math.PI/180) + miPunto.y;



  var px3 = 5 * Math.cos((miPunto.angulo-180) * Math.PI/180) + px1;
  var py3 = -5 * Math.sin((miPunto.angulo-180) * Math.PI/180) + py1;

  var px4 = 5 * Math.cos((miPunto.angulo+180) * Math.PI/180) + px2;
  var py4 = -5 * Math.sin((miPunto.angulo+180) * Math.PI/180) + py2;

  if(miPunto.angulo == 150 || miPunto.angulo == 210 || miPunto.angulo == 90){
    px3 = 5 * Math.cos((miPunto.angulo-360) * Math.PI/180) + px1;
    py3 = -5 * Math.sin((miPunto.angulo-360) * Math.PI/180) + py1;

    px4 = 5 * Math.cos((miPunto.angulo+360) * Math.PI/180) + px2;
    py4 = -5 * Math.sin((miPunto.angulo+360) * Math.PI/180) + py2;
  }

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px3);
  myLine.setAttribute('y1', py3);
  myLine.setAttribute('x2', px1);
  myLine.setAttribute('y2', py1);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px4);
  myLine.setAttribute('y1', py4);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);


}

function dibujarCuplaEspecial(miPunto, miSeparacion, miAngulo){

  var px1 = miSeparacion * Math.cos((miAngulo-90) * Math.PI/180) + miPunto.x;
  var py1 = -miSeparacion * Math.sin((miAngulo-90) * Math.PI/180) + miPunto.y;

  var px2 = miSeparacion * Math.cos((miAngulo+90) * Math.PI/180) + miPunto.x;
  var py2 = -miSeparacion * Math.sin((miAngulo+90) * Math.PI/180) + miPunto.y;



  var px3 = 5 * Math.cos((miAngulo-180) * Math.PI/180) + px1;
  var py3 = -5 * Math.sin((miAngulo-180) * Math.PI/180) + py1;

  var px4 = 5 * Math.cos((miAngulo+180) * Math.PI/180) + px2;
  var py4 = -5 * Math.sin((miAngulo+180) * Math.PI/180) + py2;

  if(miPunto.angulo == 150 || miAngulo == 210 || miAngulo == 90){
    px3 = 5 * Math.cos((miAngulo-360) * Math.PI/180) + px1;
    py3 = -5 * Math.sin((miAngulo-360) * Math.PI/180) + py1;

    px4 = 5 * Math.cos((miAngulo+360) * Math.PI/180) + px2;
    py4 = -5 * Math.sin((miAngulo+360) * Math.PI/180) + py2;
  }

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px3);
  myLine.setAttribute('y1', py3);
  myLine.setAttribute('x2', px1);
  myLine.setAttribute('y2', py1);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px4);
  myLine.setAttribute('y1', py4);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);


}

function dibujarTuberiaForro(miPunto, miPuntoSiguiente, miSeparacion){

  var miDistancia = distanciaPuntoPunto(miPunto.x, miPunto.y, miPuntoSiguiente);

  var px1 = miSeparacion * Math.cos((miPunto.angulo-45) * Math.PI/180) + miPunto.x;
  var py1 = -miSeparacion * Math.sin((miPunto.angulo-45) * Math.PI/180) + miPunto.y;

  var px2 = (miDistancia-(miSeparacion*2)) * Math.cos(miPunto.angulo * Math.PI/180) + px1;
  var py2 = -(miDistancia-(miSeparacion*2)) * Math.sin(miPunto.angulo * Math.PI/180) + py1;

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  px1 = miSeparacion * Math.cos((miPunto.angulo+45) * Math.PI/180) + miPunto.x;
  py1 = -miSeparacion * Math.sin((miPunto.angulo+45) * Math.PI/180) + miPunto.y;
  px2 = (miDistancia-(miSeparacion*2)) * Math.cos(miPunto.angulo * Math.PI/180) + px1;
  py2 = -(miDistancia-(miSeparacion*2)) * Math.sin(miPunto.angulo * Math.PI/180) + py1;

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

}

//////////////////////////////////////////
// MEDIDOR CARA IZQUIERDA
//////////////////////////////////////////

function dibujarMedidorCaraIzquierdaDerecha(origen_x, origen_y){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 90;
  var caja = [];
  var g_caja = [210, 270, 30, 90, 150, 210, 270, 330, 90, 150];
  var d_caja = [profundidad, altura, profundidad, altura, anchura, profundidad, altura, anchura, altura, anchura];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (altura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(altura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos((inclinacion-30) * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin((inclinacion-30) * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }
  //console.log(altura-30)
  var miHeight = altura/2;
  svg_lienzo.innerHTML+= '<image xlink:href="images/M.svg" x="'+(caja[14])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarMedidorCaraIzquierdaIzquierda(origen_x, origen_y){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 90;
  var caja = [];
  var g_caja = [330, 270, 150, 90, 30, 330, 270, 210, 90, 30];
  var d_caja = [anchura, altura, anchura, altura, profundidad, anchura, altura, profundidad, altura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (altura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(altura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos((inclinacion+120) * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin((inclinacion+120) * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }
  //console.log(altura-30)
  var miHeight = altura/2;
  svg_lienzo.innerHTML+= '<image xlink:href="images/M.svg" x="'+(caja[0])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarMedidorCaraIzquierdaAbajo(origen_x, origen_y){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 330;
  var caja = [];
  var g_caja = [90, 150, 270, 330, 30, 90, 150, 210, 330, 30];
  var d_caja = [altura, anchura, altura, anchura, profundidad, altura, anchura, profundidad, anchura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (anchura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(anchura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos((inclinacion-120) * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin((inclinacion-120) * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }
  //console.log(altura-30)
  var miHeight = altura/2;
  svg_lienzo.innerHTML+= '<image xlink:href="images/M.svg" x="'+(caja[6])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarMedidorCaraIzquierdaArriba(origen_x, origen_y){

  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }
  //console.log(altura-30)
  var miHeight = altura/2;
  svg_lienzo.innerHTML+= '<image xlink:href="images/M.svg" x="'+(caja[0])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarMedidorCaraIzquierda(origen_x, origen_y){

  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(15*equivalencia)/miEscala;
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }
  //console.log(altura-30)
  var miHeight = altura/2;
  svg_lienzo.innerHTML+= '<image xlink:href="images/M.svg" x="'+(caja[0])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

  /*var imagen = new Image();
  imagen.src ='images/M.svg';
  imagen.height = 45;
  imagen.width = 45;
  svg_lienzo.appendChild(imagen);*/
  /*imagen.onload = function(){
    svg_lienzo.drawImage(imagen, ox-anchura/2, oy+altura/2, (imagen.width*equivalencia)/escala, (imagen.height*equivalencia)/escala);
  }*/

}

//////////////////////////////////////////
// MEDIDOR CARA DERECHA
//////////////////////////////////////////

function dibujarMedidorCaraDerechaDerecha(origen_x, origen_y){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 90;
  var caja = [];
  var g_caja = [270, 210, 90, 30, 150, 210, 270, 330, 90, 150];
  var d_caja = [altura, anchura, altura, anchura, profundidad, anchura, altura, profundidad, altura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (altura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(altura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos(330 * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin(330 * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
    var myLine = document.createElementNS(svgNS, 'line');

    myLine.setAttribute('x1', caja[l]);
    myLine.setAttribute('y1', caja[l+1]);
    myLine.setAttribute('x2', caja[l+2]);
    myLine.setAttribute('y2', caja[l+3]);
    myLine.setAttribute('stroke-linecap', 'round');
    myLine.setAttribute('class', 'path');

    svg_lienzo.appendChild(myLine);
  }

  var miHeight = altura/2;
  svg_lienzo.innerHTML+= '<image xlink:href="images/MO.svg" x="'+(caja[6])+'" y="'+(caja[7])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarMedidorCaraDerechaIzquierda(origen_x, origen_y){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 270;
  var caja = [];
  var g_caja = [90, 30, 270, 210, 150, 90, 30, 330, 210, 150];
  var d_caja = [altura, anchura, altura, anchura, profundidad, altura, anchura, profundidad, anchura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (altura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(altura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos(330 * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin(330 * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }

  var miHeight = altura/2;
  svg_lienzo.innerHTML+= '<image xlink:href="images/MO.svg" x="'+(caja[2])+'" y="'+(caja[3])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarMedidorCaraDerechaAbajo(origen_x, origen_y){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 210;
  var caja = [];
  var g_caja = [90, 30, 270, 210, 150, 90, 30, 330, 210, 150];
  var d_caja = [altura, anchura, altura, anchura, profundidad, altura, anchura, profundidad, anchura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (anchura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(anchura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos(330 * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin(330 * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }
  var miHeight = altura/2;
  svg_lienzo.innerHTML+= '<image xlink:href="images/MO.svg" x="'+(caja[2])+'" y="'+(caja[3])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarMedidorCaraDerechaArriba(origen_x, origen_y){

  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;

  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 210;//150;
  var caja = [];
  var g_caja = [30, 270, 210, 90, 150, 30, 330, 210, 150, 270, 330];
  var d_caja = [anchura, altura, anchura, altura, profundidad, anchura, profundidad, anchura, profundidad, altura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (anchura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(anchura/2) * Math.sin(inclinacion * Math.PI/180) + oy;

  var px1 = (profundidad/2) * Math.cos((inclinacion+120) * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin((inclinacion+120) * Math.PI/180) + ppy1;


  for(t = 0; t < 24; t = t+2){
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);

  for(l = 0; l < caja.length-2; l = l+2){
  //for(l = 0; l < 12; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }

  //console.log(altura-30)
  var miHeight = altura/2;
  //svg_lienzo.innerHTML+= '<image xlink:href="images/MO.svg" x="'+(caja[0])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/escala+'px"/>';
  svg_lienzo.innerHTML+= '<image xlink:href="images/MO.svg" x="'+(caja[0])+'" y="'+(caja[1])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';
}

function dibujarMedidorCaraDerecha(origen_x, origen_y){

  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(15*equivalencia)/miEscala;

  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 210;//150;
  var caja = [];
  var g_caja = [30, 270, 210, 90, 150, 30, 330, 210, 150, 270, 330];
  var d_caja = [anchura, altura, anchura, altura, profundidad, anchura, profundidad, anchura, profundidad, altura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (anchura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(anchura/2) * Math.sin(inclinacion * Math.PI/180) + oy;

  var px1 = (profundidad/2) * Math.cos((inclinacion+120) * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin((inclinacion+120) * Math.PI/180) + ppy1;


  for(t = 0; t < 24; t = t+2){
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  //var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  //for(l = 0; l < 12; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }

  //console.log(altura-30)
  var miHeight = altura/2;
  //svg_lienzo.innerHTML+= '<image xlink:href="images/MO.svg" x="'+(caja[0])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/escala+'px"/>';
  svg_lienzo.innerHTML+= '<image xlink:href="images/MO.svg" x="'+(caja[0])+'" y="'+(caja[1])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';


}

//////////////////////////////////////////
//REGULADOR
/////////////////////////////////////////
function dibujarReguladorCaraIzquierdaDerecha(origen_x, origen_y, miSIM){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 90;
  var caja = [];
  var g_caja = [210, 270, 30, 90, 150, 210, 270, 330, 90, 150];
  var d_caja = [profundidad, altura, profundidad, altura, anchura, profundidad, altura, anchura, altura, anchura];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (altura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(altura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos((inclinacion-30) * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin((inclinacion-30) * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }
  //console.log(altura-30)
  var miHeight = altura/2;
  if(miSIM == 'SIM')
    svg_lienzo.innerHTML+= '<image xlink:href="images/RSIM.svg" x="'+(caja[14])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';
  else
    svg_lienzo.innerHTML+= '<image xlink:href="images/R.svg" x="'+(caja[14])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarReguladorCaraIzquierdaIzquierda(origen_x, origen_y, miSIM){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 90;
  var caja = [];
  var g_caja = [330, 270, 150, 90, 30, 330, 270, 210, 90, 30];
  var d_caja = [anchura, altura, anchura, altura, profundidad, anchura, altura, profundidad, altura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (altura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(altura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos((inclinacion+120) * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin((inclinacion+120) * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }
  //console.log(altura-30)
  var miHeight = altura/2;
  if(miSIM == 'SIM')
    svg_lienzo.innerHTML+= '<image xlink:href="images/RSIM.svg" x="'+(caja[0])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';
  else
    svg_lienzo.innerHTML+= '<image xlink:href="images/R.svg" x="'+(caja[0])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarReguladorCaraIzquierdaAbajo(origen_x, origen_y, miSIM){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 330;
  var caja = [];
  var g_caja = [90, 150, 270, 330, 30, 90, 150, 210, 330, 30];
  var d_caja = [altura, anchura, altura, anchura, profundidad, altura, anchura, profundidad, anchura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (anchura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(anchura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos((inclinacion-120) * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin((inclinacion-120) * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }
  //console.log(altura-30)
  var miHeight = altura/2;
  if(miSIM == 'SIM')
    svg_lienzo.innerHTML+= '<image xlink:href="images/RSIM.svg" x="'+(caja[6])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';
  else
    svg_lienzo.innerHTML+= '<image xlink:href="images/R.svg" x="'+(caja[6])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarReguladorCaraIzquierdaArriba(origen_x, origen_y, miSIM){

  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }
  //console.log(altura-30)
  var miHeight = altura/2;
  if(miSIM == 'SIM')
    svg_lienzo.innerHTML+= '<image xlink:href="images/RSIM.svg" x="'+(caja[0])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';
  else
    svg_lienzo.innerHTML+= '<image xlink:href="images/R.svg" x="'+(caja[0])+'" y="'+(caja[3]+(altura-miHeight)/2-miHeight/2)+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

///////////////////////////////////////////////////

function dibujarReguladorCaraDerechaDerecha(origen_x, origen_y, miSIM){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 90;
  var caja = [];
  var g_caja = [270, 210, 90, 30, 150, 210, 270, 330, 90, 150];
  var d_caja = [altura, anchura, altura, anchura, profundidad, anchura, altura, profundidad, altura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (altura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(altura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos(330 * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin(330 * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }

  var miHeight = altura/2;
  if(miSIM == 'SIM')
    svg_lienzo.innerHTML+= '<image xlink:href="images/ROSIM.svg" x="'+(caja[6])+'" y="'+(caja[7])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';
  else
    svg_lienzo.innerHTML+= '<image xlink:href="images/RO.svg" x="'+(caja[6])+'" y="'+(caja[7])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarReguladorCaraDerechaIzquierda(origen_x, origen_y, miSIM){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 270;
  var caja = [];
  var g_caja = [90, 30, 270, 210, 150, 90, 30, 330, 210, 150];
  var d_caja = [altura, anchura, altura, anchura, profundidad, altura, anchura, profundidad, anchura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (altura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(altura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos(330 * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin(330 * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }

  var miHeight = altura/2;
  if(miSIM == 'SIM')
    svg_lienzo.innerHTML+= '<image xlink:href="images/ROSIM.svg" x="'+(caja[2])+'" y="'+(caja[3])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';
  else
    svg_lienzo.innerHTML+= '<image xlink:href="images/RO.svg" x="'+(caja[2])+'" y="'+(caja[3])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarReguladorCaraDerechaAbajo(origen_x, origen_y, miSIM){
  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;//En el origen
  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 210;
  var caja = [];
  var g_caja = [90, 30, 270, 210, 150, 90, 30, 330, 210, 150];
  var d_caja = [altura, anchura, altura, anchura, profundidad, altura, anchura, profundidad, anchura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (anchura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(anchura/2) * Math.sin(inclinacion * Math.PI/180) + oy;
  var px1 = (profundidad/2) * Math.cos(330 * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin(330 * Math.PI/180) + ppy1;
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);


  var myPath = document.createElementNS(svgNS, 'path');


  for(l = 0; l < caja.length-2; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }
  var miHeight = altura/2;

  if(miSIM == 'SIM')
    svg_lienzo.innerHTML+= '<image xlink:href="images/ROSIM.svg" x="'+(caja[2])+'" y="'+(caja[3])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';
  else
    svg_lienzo.innerHTML+= '<image xlink:href="images/RO.svg" x="'+(caja[2])+'" y="'+(caja[3])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';

}

function dibujarReguladorCaraDerechaArriba(origen_x, origen_y, miSIM){

  var ix = origen_x;//100;//origen en x
  var iy = origen_y;//300;//origen en y
  //distance = (distance * 37.79527559055)/50
  var miEscala = escala;//25;//esca//
  var equivalencia = 37.79527559055;//equiv;//
  var ox = ix;
  var oy = iy+(0*equivalencia)/miEscala;

  var altura = (50 * equivalencia)/miEscala;
  var anchura = (36 * equivalencia)/miEscala;
  var profundidad = (20 * equivalencia)/miEscala;

  var inclinacion = 210;//150;
  var caja = [];
  var g_caja = [30, 270, 210, 90, 150, 30, 330, 210, 150, 270, 330];
  var d_caja = [anchura, altura, anchura, altura, profundidad, anchura, profundidad, anchura, profundidad, altura, profundidad];
  //[36, 50, 36, 50, 20, 36, 50, 20, 50, 20];
  var j = 0;

  var ppx1 = (anchura/2) * Math.cos(inclinacion * Math.PI/180) + ox;
  var ppy1 = -(anchura/2) * Math.sin(inclinacion * Math.PI/180) + oy;

  var px1 = (profundidad/2) * Math.cos((inclinacion+120) * Math.PI/180) + ppx1;
  var py1 = -(profundidad/2) * Math.sin((inclinacion+120) * Math.PI/180) + ppy1;


  for(t = 0; t < 24; t = t+2){
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

  var miLinea = document.createElementNS(svgNS, 'line');

  miLinea.setAttribute('x1', ix);
  miLinea.setAttribute('y1', iy);
  miLinea.setAttribute('x2', ox);
  miLinea.setAttribute('y2', oy);
  miLinea.setAttribute('stroke-linecap', 'round');
  miLinea.setAttribute('class', 'path');

  svg_lienzo.appendChild(miLinea);

  for(l = 0; l < caja.length-2; l = l+2){
  //for(l = 0; l < 12; l = l+2){
  var myLine = document.createElementNS(svgNS, 'line');

  myLine.setAttribute('x1', caja[l]);
  myLine.setAttribute('y1', caja[l+1]);
  myLine.setAttribute('x2', caja[l+2]);
  myLine.setAttribute('y2', caja[l+3]);
  myLine.setAttribute('stroke-linecap', 'round');
  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);
  }

  //console.log(altura-30)
  var miHeight = altura/2;

  if(miSIM == 'SIM')
    svg_lienzo.innerHTML+= '<image xlink:href="images/ROSIM.svg" x="'+(caja[0])+'" y="'+(caja[1])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';
  else
    svg_lienzo.innerHTML+= '<image xlink:href="images/RO.svg" x="'+(caja[0])+'" y="'+(caja[1])+'" height="'+miHeight+'px" width="'+(30*equivalencia)/miEscala+'px"/>';
}

//FIN REGULADOR
////////////////////////////////////////////////////

function dibujarValvulaLargoEspecifico(miPunto, miSiguientePunto, miSeparacion){
  var neoX = (miPunto.x + miSiguientePunto.x)/2;
  var neoY = (miPunto.y + miSiguientePunto.y)/2;

  var px1 = miSeparacion * Math.cos((miPunto.angulo-35) * Math.PI/180) + neoX/*miPunto.x*/;
  var py1 = -miSeparacion * Math.sin((miPunto.angulo-35) * Math.PI/180) + neoY/*miPunto.y*/;

  var px2 = miSeparacion * Math.cos((miPunto.angulo+35) * Math.PI/180) + neoX/*miPunto.x*/;
  var py2 = -miSeparacion * Math.sin((miPunto.angulo+35) * Math.PI/180) + neoY/*miPunto.y*/;

  var myTriangle = document.createElementNS(svgNS, 'polygon');
  myTriangle.setAttribute('class', 'poligono');
  myTriangle.setAttribute('points', px1 + ',' + py1 + ' ' + px2 + ',' + py2 + ' ' + neoX + ',' + neoY);
  svg_lienzo.appendChild(myTriangle);

  var px3 = -miSeparacion * Math.cos((miPunto.angulo-325) * Math.PI/180) + neoX/*miPunto.x*/;
  var py3 = miSeparacion * Math.sin((miPunto.angulo-325) * Math.PI/180) + neoY/*miPunto.y*/;

  var px4 = -miSeparacion * Math.cos((miPunto.angulo+325) * Math.PI/180) + neoX/*miPunto.x*/;
  var py4 = miSeparacion * Math.sin((miPunto.angulo+325) * Math.PI/180) + neoY/*miPunto.y*/;

  myTriangle = document.createElementNS(svgNS, 'polygon');
  myTriangle.setAttribute('class', 'poligono');
  myTriangle.setAttribute('points', px3 + ',' + py3 + ' ' + px4 + ',' + py4 + ' ' + neoX + ',' + neoY);
  svg_lienzo.appendChild(myTriangle);
}

function dibujarValvulaLargo(miPunto, miSeparacion){

  var px1 = miSeparacion * Math.cos((miPunto.angulo-35) * Math.PI/180) + miPunto.x;
  var py1 = -miSeparacion * Math.sin((miPunto.angulo-35) * Math.PI/180) + miPunto.y;

  var px2 = miSeparacion * Math.cos((miPunto.angulo+35) * Math.PI/180) + miPunto.x;
  var py2 = -miSeparacion * Math.sin((miPunto.angulo+35) * Math.PI/180) + miPunto.y;

  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', miPunto.x);
  myLine.setAttribute('y1', miPunto.y);
  myLine.setAttribute('x2', px1);
  myLine.setAttribute('y2', py1);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', miPunto.x);
  myLine.setAttribute('y1', miPunto.y);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  var px3 = -miSeparacion * Math.cos((miPunto.angulo-325) * Math.PI/180) + miPunto.x;
  var py3 = miSeparacion * Math.sin((miPunto.angulo-325) * Math.PI/180) + miPunto.y;

  var px4 = -miSeparacion * Math.cos((miPunto.angulo+325) * Math.PI/180) + miPunto.x;
  var py4 = miSeparacion * Math.sin((miPunto.angulo+325) * Math.PI/180) + miPunto.y;

  myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px3);
  myLine.setAttribute('y1', py3);
  myLine.setAttribute('x2', px4);
  myLine.setAttribute('y2', py4);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', miPunto.x);
  myLine.setAttribute('y1', miPunto.y);
  myLine.setAttribute('x2', px3);
  myLine.setAttribute('y2', py3);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', miPunto.x);
  myLine.setAttribute('y1', miPunto.y);
  myLine.setAttribute('x2', px4);
  myLine.setAttribute('y2', py4);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

}

function dibujarValvula(miPunto, miSeparacion){

  var px1 = miSeparacion * Math.cos((miPunto.angulo-35) * Math.PI/180) + miPunto.x;
  var py1 = -miSeparacion * Math.sin((miPunto.angulo-35) * Math.PI/180) + miPunto.y;

  var px2 = miSeparacion * Math.cos((miPunto.angulo+35) * Math.PI/180) + miPunto.x;
  var py2 = -miSeparacion * Math.sin((miPunto.angulo+35) * Math.PI/180) + miPunto.y;

  var myPoligon = document.createElementNS(svgNS, 'polygon')
  //myPoligon.setAttribute('points', px1+','+py1+' '+px2+','+py2+' '+miPunto.x+','+miPunto.y);


  //myPoligon.setAttribute('class', 'poligono');
  //svg_lienzo.appendChild(myPoligon);

  var px3 = -miSeparacion * Math.cos((miPunto.angulo-325) * Math.PI/180) + miPunto.x;
  var py3 = miSeparacion * Math.sin((miPunto.angulo-325) * Math.PI/180) + miPunto.y;

  var px4 = -miSeparacion * Math.cos((miPunto.angulo+325) * Math.PI/180) + miPunto.x;
  var py4 = miSeparacion * Math.sin((miPunto.angulo+325) * Math.PI/180) + miPunto.y;

  myPoligon = document.createElementNS(svgNS, 'polygon')
  //myPoligon.setAttribute('points', px3+','+py3+' '+px4+','+py4+' '+miPunto.x+','+miPunto.y);
  myPoligon.setAttribute('points', px3+','+py3+' '+px4+','+py4+' '+px1+','+py1+' '+px2+','+py2);

  myPoligon.setAttribute('class', 'poligono');
  svg_lienzo.appendChild(myPoligon);

}

function dibujarCuplaN(miPunto, miSeparacion){

  var px1 = miSeparacion * Math.cos((miPunto.angulo-35) * Math.PI/180) + miPunto.x;
  var py1 = -miSeparacion * Math.sin((miPunto.angulo-35) * Math.PI/180) + miPunto.y;

  var px2 = miSeparacion * Math.cos((miPunto.angulo+35) * Math.PI/180) + miPunto.x;
  var py2 = -miSeparacion * Math.sin((miPunto.angulo+35) * Math.PI/180) + miPunto.y;

  var myPoligon = document.createElementNS(svgNS, 'polygon')
  //myPoligon.setAttribute('points', px1+','+py1+' '+px2+','+py2+' '+miPunto.x+','+miPunto.y);


  //myPoligon.setAttribute('class', 'poligono');
  //svg_lienzo.appendChild(myPoligon);

  var px3 = -miSeparacion * Math.cos((miPunto.angulo-320) * Math.PI/180) + miPunto.x;
  var py3 = miSeparacion * Math.sin((miPunto.angulo-320) * Math.PI/180) + miPunto.y;

  var px4 = -miSeparacion * Math.cos((miPunto.angulo+320) * Math.PI/180) + miPunto.x;
  var py4 = miSeparacion * Math.sin((miPunto.angulo+320) * Math.PI/180) + miPunto.y;

  //var px5 = -16 * Math.cos((miPunto.angulo) * Math.PI/180) + miPunto.x;
  //var py5 = 16 * Math.sin((miPunto.angulo) * Math.PI/180) + miPunto.y;

  //var px6 = 16 * Math.cos((miPunto.angulo) * Math.PI/180) + miPunto.x;
  //var py6 = -16 * Math.sin((miPunto.angulo) * Math.PI/180) + miPunto.y;
  var px5 = -12 * Math.cos((miPunto.angulo) * Math.PI/180) + miPunto.x;
  var py5 = 12 * Math.sin((miPunto.angulo) * Math.PI/180) + miPunto.y;

  var px6 = 12 * Math.cos((miPunto.angulo) * Math.PI/180) + miPunto.x;
  var py6 = -12 * Math.sin((miPunto.angulo) * Math.PI/180) + miPunto.y;


  myPoligon = document.createElementNS(svgNS, 'polygon')
  //myPoligon.setAttribute('points', px3+','+py3+' '+px4+','+py4+' '+miPunto.x+','+miPunto.y);
  myPoligon.setAttribute('points', px1+','+py1+' '+px2+','+py2+' '+px6+','+py6)

  myPoligon.setAttribute('class', 'poligonoN');
  svg_lienzo.appendChild(myPoligon);

  myPoligon = document.createElementNS(svgNS, 'polygon')
  //myPoligon.setAttribute('points', px3+','+py3+' '+px4+','+py4+' '+miPunto.x+','+miPunto.y);
  myPoligon.setAttribute('points', px3+','+py3+' '+px4+','+py4+' '+px5+','+py5)

  myPoligon.setAttribute('class', 'poligonoN');
  svg_lienzo.appendChild(myPoligon);

}

function dibujarCuplaNEspecial(miPunto, miSeparacion, miAngulo){

  var px1 = miSeparacion * Math.cos((miAngulo-35) * Math.PI/180) + miPunto.x;
  var py1 = -miSeparacion * Math.sin((miAngulo-35) * Math.PI/180) + miPunto.y;

  var px2 = miSeparacion * Math.cos((miAngulo+35) * Math.PI/180) + miPunto.x;
  var py2 = -miSeparacion * Math.sin((miAngulo+35) * Math.PI/180) + miPunto.y;

  var myPoligon = document.createElementNS(svgNS, 'polygon')
  //myPoligon.setAttribute('points', px1+','+py1+' '+px2+','+py2+' '+miPunto.x+','+miPunto.y);


  //myPoligon.setAttribute('class', 'poligono');
  //svg_lienzo.appendChild(myPoligon);

  var px3 = -miSeparacion * Math.cos((miAngulo-320) * Math.PI/180) + miPunto.x;
  var py3 = miSeparacion * Math.sin((miAngulo-320) * Math.PI/180) + miPunto.y;

  var px4 = -miSeparacion * Math.cos((miAngulo+320) * Math.PI/180) + miPunto.x;
  var py4 = miSeparacion * Math.sin((miAngulo+320) * Math.PI/180) + miPunto.y;

  //var px5 = -16 * Math.cos((miAngulo) * Math.PI/180) + miPunto.x;
  //var py5 = 16 * Math.sin((miAngulo) * Math.PI/180) + miPunto.y;
  //
  //var px6 = 16 * Math.cos((miAngulo) * Math.PI/180) + miPunto.x;
  //var py6 = -16 * Math.sin((miAngulo) * Math.PI/180) + miPunto.y;

  var px5 = -12 * Math.cos((miAngulo) * Math.PI/180) + miPunto.x;
  var py5 = 12 * Math.sin((miAngulo) * Math.PI/180) + miPunto.y;

  var px6 = 12 * Math.cos((miAngulo) * Math.PI/180) + miPunto.x;
  var py6 = -12 * Math.sin((miAngulo) * Math.PI/180) + miPunto.y;


  myPoligon = document.createElementNS(svgNS, 'polygon')
  //myPoligon.setAttribute('points', px3+','+py3+' '+px4+','+py4+' '+miPunto.x+','+miPunto.y);
  myPoligon.setAttribute('points', px1+','+py1+' '+px2+','+py2+' '+px6+','+py6)

  myPoligon.setAttribute('class', 'poligonoN');
  svg_lienzo.appendChild(myPoligon);

  myPoligon = document.createElementNS(svgNS, 'polygon')
  //myPoligon.setAttribute('points', px3+','+py3+' '+px4+','+py4+' '+miPunto.x+','+miPunto.y);
  myPoligon.setAttribute('points', px3+','+py3+' '+px4+','+py4+' '+px5+','+py5)

  myPoligon.setAttribute('class', 'poligonoN');
  svg_lienzo.appendChild(myPoligon);

}

function dibujarReduccion(miPunto, miSeparacion){
  //var miSeparacion = (miSeparacionInput*escala/100)

  var px1 = miSeparacion * Math.cos((miPunto.angulo-35) * Math.PI/180) + miPunto.x;
  var py1 = -miSeparacion * Math.sin((miPunto.angulo-35) * Math.PI/180) + miPunto.y;

  var px2 = miSeparacion * Math.cos((miPunto.angulo+35) * Math.PI/180) + miPunto.x;
  var py2 = -miSeparacion * Math.sin((miPunto.angulo+35) * Math.PI/180) + miPunto.y;

  var myPoligon = document.createElementNS(svgNS, 'polygon')

  //myPoligon.setAttribute('points', px1+','+py1+' '+px2+','+py2+' '+miPunto.x+','+miPunto.y);


  //myPoligon.setAttribute('class', 'poligono');
  //svg_lienzo.appendChild(myPoligon);


  //var px3 = (miSeparacion+10) * Math.cos((miPunto.angulo) * Math.PI/180) + miPunto.x;
  //var py3 = -(miSeparacion+10) * Math.sin((miPunto.angulo) * Math.PI/180) + miPunto.y;
  var px3 = (miSeparacion+8) * Math.cos((miPunto.angulo) * Math.PI/180) + miPunto.x;
  var py3 = -(miSeparacion+8) * Math.sin((miPunto.angulo) * Math.PI/180) + miPunto.y;



  myPoligon = document.createElementNS(svgNS, 'polygon')
  //myPoligon.setAttribute('points', px3+','+py3+' '+px4+','+py4+' '+miPunto.x+','+miPunto.y);
  //myPoligon.setAttribute('points', px3+','+py3+' '+px4+','+py4+' '+px1+','+py1+' '+px2+','+py2);
  myPoligon.setAttribute('points', px1+','+py1+' '+px2+','+py2+' '+px3+','+py3);

  myPoligon.setAttribute('class', 'poligono');
  svg_lienzo.appendChild(myPoligon);

  var px4 = (miSeparacion+12/*15*/) * Math.cos((miPunto.angulo) * Math.PI/180) + miPunto.x;
  var py4 = -(miSeparacion+12/*15*/) * Math.sin((miPunto.angulo) * Math.PI/180) + miPunto.y;
  //circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red"
  var myCircle = document.createElementNS(svgNS, 'circle')

  myCircle.setAttribute('cx', px4);
  myCircle.setAttribute('cy', py4);
  myCircle.setAttribute('r', 3);//5);
  myCircle.setAttribute('class', 'circle-marker-back');
  svg_lienzo.appendChild(myCircle);
}

function dibujarTe(miPunto, angulo){
  var miSeparacion = 10;
  var px1 = miSeparacion * Math.cos((angulo) * Math.PI/180) + miPunto.x;
  var py1 = -miSeparacion * Math.sin((angulo) * Math.PI/180) + miPunto.y;


  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', miPunto.x);
  myLine.setAttribute('y1', miPunto.y);
  myLine.setAttribute('x2', px1);
  myLine.setAttribute('y2', py1);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  var px2 = (miSeparacion/2) * Math.cos((angulo+90) * Math.PI/180) + px1;
  var py2 = -(miSeparacion/2) * Math.sin((angulo+90) * Math.PI/180) + py1;

  myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  var px3 = (miSeparacion/2) * Math.cos((angulo+270) * Math.PI/180) + px1;
  var py3 = -(miSeparacion/2) * Math.sin((angulo+270) * Math.PI/180) + py1;

  myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px2);
  myLine.setAttribute('y1', py2);
  myLine.setAttribute('x2', px3);
  myLine.setAttribute('y2', py3);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

}

function dibujarTeAntiguo(miPunto, angulo){
  var miSeparacion = 10;
  var px1 = miSeparacion * Math.cos((miPunto.angulo+angulo) * Math.PI/180) + miPunto.x;
  var py1 = -miSeparacion * Math.sin((miPunto.angulo+angulo) * Math.PI/180) + miPunto.y;


  var myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', miPunto.x);
  myLine.setAttribute('y1', miPunto.y);
  myLine.setAttribute('x2', px1);
  myLine.setAttribute('y2', py1);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  var px2 = (miSeparacion/2) * Math.cos((miPunto.angulo+angulo+90) * Math.PI/180) + px1;
  var py2 = -(miSeparacion/2) * Math.sin((miPunto.angulo+angulo+90) * Math.PI/180) + py1;

  myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px1);
  myLine.setAttribute('y1', py1);
  myLine.setAttribute('x2', px2);
  myLine.setAttribute('y2', py2);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

  var px3 = (miSeparacion/2) * Math.cos((miPunto.angulo+angulo+270) * Math.PI/180) + px1;
  var py3 = -(miSeparacion/2) * Math.sin((miPunto.angulo+angulo+270) * Math.PI/180) + py1;

  myLine = document.createElementNS(svgNS, 'line');
  myLine.setAttribute('x1', px2);
  myLine.setAttribute('y1', py2);
  myLine.setAttribute('x2', px3);
  myLine.setAttribute('y2', py3);
  myLine.setAttribute('stroke-linecap', 'round');

  myLine.setAttribute('class', 'path');

  svg_lienzo.appendChild(myLine);

}

function cambiarTagExtra(miId){

  var miIndex = miId.substring(7, miId.length)
  //alert(miIndex)
  if(document.getElementById('tgE_txt'+miIndex).value.length > 0)
    tagsExtra[miIndex].content = document.getElementById('tgE_txt'+miIndex).value;

  if(parseInt(document.getElementById('tgEs_txt'+miIndex).value) > 5 )
    tagsExtra[miIndex].size = document.getElementById('tgEs_txt'+miIndex).value;

  var myAngle = 0;

  if(document.getElementById('tgSe_0'+miIndex).className == 'tagAngle tg-0 clicked'){
    myAngle = 0;
  }
  else if(document.getElementById('tgSe_30'+miIndex).className == 'tagAngle tg-30 clicked'){
    myAngle = 30;
  }
  else if(document.getElementById('tgSe_90'+miIndex).className == 'tagAngle tg-90 clicked'){
    myAngle = 90;
  }
  else if(document.getElementById('tgSe_150'+miIndex).className == 'tagAngle tg-150 clicked'){
    myAngle = 150;
  }
  else if(document.getElementById('tgSe_210'+miIndex).className == 'tagAngle tg-210 clicked'){
    myAngle = 210;
  }
  else if(document.getElementById('tgSe_270'+miIndex).className == 'tagAngle tg-270 clicked'){
    myAngle = 270;
  }
  else if(document.getElementById('tgSe_330'+miIndex).className == 'tagAngle tg-330 clicked'){
    myAngle = 330;
  }

  tagsExtra[miIndex].inclinacion = myAngle;

  var miLienzo = obtenerPosicionLienzoMarcado();
  dibujarEnLienzo(miLienzo);
  //var s = 'tgE_txt'+miId[miId.length-1];
  //alert(s)
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
}

function eliminarTagExtra(miId){

  var miIndex = parseInt(miId.substring(7, miId.length));
  //alert(miIndex);
  var rec = new Array();
  for(dp = miIndex+1; dp < tagsExtra.length; dp++){
    //console.log(tagsExtra[dp]);
    rec.push(JSON.parse(JSON.stringify(tagsExtra[dp])));
  }
  //console.log(rec);
  //var maxi = tagsExtra.length-1;
  var miPos = miIndex;
  for(dp = 0; dp < rec.length; dp++){
    tagsExtra[miPos] = JSON.parse(JSON.stringify(rec[dp]));
    miPos++;
  }
  tagsExtra.pop()
  var miLienzo = obtenerPosicionLienzoMarcado();
  dibujarEnLienzo(miLienzo)
  //console.log(tagsExtra)
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////

}

function verTagExtra(miId){

  var miIndex = parseInt(miId.substring(7, miId.length));

  //marcarTagExtra(tagExtraParaMover)
  var myCircle = document.createElementNS(svgNS, 'circle');
  myCircle.setAttribute('cx', tagsExtra[miIndex].x);
  myCircle.setAttribute('cy', tagsExtra[miIndex].y);

  myCircle.setAttribute('class', 'circle-marker-markMode');

  myCircle.setAttribute('r', 3);//5);
  svg_lienzo.appendChild(myCircle);

  setValueRange(controlRange.value);
  setControlRange(valueRange.value);
  /*var miLienzo = obtenerPosicionLienzoMarcado();
  dibujarEnLienzo(miLienzo)*/
}

function adicionarTagExtra(miId){

  var miIndex = parseInt(miId.substring(7, miId.length));

  var miLienzo = obtenerPosicionLienzoMarcado();
  //console.log(miIndex)
  //console.log(tagsExtra[miIndex]);
  if(miId.substring(7, miId.length) !='__1'){
    var rec = new Array();

    for(dp = miIndex+1; dp < tagsExtra.length; dp++){
      //console.log(tagsExtra[dp]);
      rec.push(JSON.parse(JSON.stringify(tagsExtra[dp])));
    }
    //console.log(rec)

    tagsExtra[miIndex+1] = new Object();
    tagsExtra[miIndex+1].content = 'Cota nueva';//'Mi Tag';
    tagsExtra[miIndex+1].x = 200;
    tagsExtra[miIndex+1].y = 200;
    tagsExtra[miIndex+1].size = 25;//100;
    tagsExtra[miIndex+1].inclinacion = 0;
    tagsExtra[miIndex+1].hoja = miLienzo;
    console.log(tagsExtra)
    var miPos = miIndex+2;
    for(dp = 0; dp < rec.length; dp++){
      tagsExtra[miPos] = JSON.parse(JSON.stringify(rec[dp]));
      miPos++;
    }
  }
  else{
    var miPos = tagsExtra.length;
    tagsExtra[miPos] = new Object();
    tagsExtra[miPos].content = 'Cota nueva';//'Mi Tag';
    tagsExtra[miPos].x = 200;
    tagsExtra[miPos].y = 200;
    tagsExtra[miPos].size = 25;//100;
    tagsExtra[miPos].inclinacion = 0;
    tagsExtra[miPos].hoja = miLienzo;
  }

  dibujarEnLienzo(miLienzo);
  //console.log(tagsExtra)
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
}

function dibujarCirculosExtra(miHoja){

  // getAllBoundsInGraphData(grafo, x, y, zoomRadioLupa/2)
  // console.log(circulosExtra);

  for(ti = 0; ti < circulosExtra.length; ti++){
    // console.log(circulosExtra[ti]);
    if(circulosExtra[ti].hoja == miHoja && circulosExtra[ti].activo == false){
      var tmpCircle = document.createElementNS(svgNS, 'circle')
      tmpCircle.setAttribute('cx', circulosExtra[ti].x);
      tmpCircle.setAttribute('cy', circulosExtra[ti].y);
      tmpCircle.setAttribute('r', circulosExtra[ti].r);
      tmpCircle.setAttribute('stroke', 'black')
      tmpCircle.setAttribute('stroke-width', '1')
      tmpCircle.setAttribute('fill', 'none')

      if(circulosExtra[ti].dataLines != undefined && circulosExtra[ti].dataLines.length > 0){
        // console.log(circulosExtra[ti].dataLines.length);
        var tmpMiniData = circulosExtra[ti].dataLines
        for(tmd = 0; tmd < tmpMiniData.length;tmd++){
          var tmpLine = document.createElementNS(svgNS, 'line')
          tmpLine.setAttribute('x1', (tmpMiniData[tmd].minimo.x))//*miEscala) - xR + tX)
          tmpLine.setAttribute('y1', (tmpMiniData[tmd].minimo.y))//*miEscala) - yR + tY)
          tmpLine.setAttribute('x2', (tmpMiniData[tmd].maximo.x))//*miEscala) - xR + tX)
          tmpLine.setAttribute('y2', (tmpMiniData[tmd].maximo.y))//*miEscala) - yR + tY)
          tmpLine.setAttribute('stroke-linecap', 'round')
          tmpLine.setAttribute('class', 'path')

          if(tmpMiniData[tmd].typeTub == 'vt'){
            tmpLine.setAttribute('class', 'path');
          }
          else{
            tmpLine.setAttribute('class', 'path-dash');
          }
          svg_lienzo.appendChild(tmpLine)
        }


      }
      svg_lienzo.appendChild(tmpCircle);

      // if(circulosExtra[ti].type == 'big' && circulosExtra[ti].recalcular == true){
      //   bData = getAllBoundsInGraphData(grafo, circulosExtra[ti-1].x, circulosExtra[ti-1].y, circulosExtra[ti-1].r)
      //   circulosExtra[ti].content = bData
      //   circulosExtra[ti].recalcular = false
      // }
      //
      // if(circulosExtra[ti].content.length > 0){
      //
      //   // nX = (x+zoomRadioLupa)*zoomEscala - zoomRadioLupa
      //   // nY = (y+zoomRadioLupa)*zoomEscala - zoomRadioLupa

      //   miEscala = circulosExtra[ti].escala//zoomEscala
      //   xR = circulosExtra[ti-1].x*miEscala - circulosExtra[ti-1].x
      //   yR = circulosExtra[ti-1].y*miEscala - circulosExtra[ti-1].y
      //
      //   tX = circulosExtra[ti].x - circulosExtra[ti-1].x//circulosExtra[ti].x - xR //10
      //   tY = circulosExtra[ti].y - circulosExtra[ti-1].y//circulosExtra[ti].y - yR //10
      //   // console.log("=====================yiyi "+ circulosExtra[ti].x);
      //   // console.log("=====================yiyi "+ circulosExtra[ti-1].x);
      //   for(td = 0; td < circulosExtra[ti].content.length; td++){
      //     dline = new Object()
      //     dLine = circulosExtra[ti].content[td]
      //     var tmpLine = document.createElementNS(svgNS, 'line')
      //     tmpLine.setAttribute('x1', (dLine.minimo[0]*miEscala) - xR + tX)
      //     tmpLine.setAttribute('y1', (dLine.minimo[1]*miEscala) - yR + tY)
      //     tmpLine.setAttribute('x2', (dLine.maximo[0]*miEscala) - xR + tX)
      //     tmpLine.setAttribute('y2', (dLine.maximo[1]*miEscala) - yR + tY)
      //     tmpLine.setAttribute('stroke-linecap', 'round')
      //     tmpLine.setAttribute('class', 'path')
      //
      //     if(dLine.typeTub == 'vt'){
      //       tmpLine.setAttribute('class', 'path');
      //     }
      //     else{
      //       tmpLine.setAttribute('class', 'path-dash');
      //     }
      //     svg_lienzo.appendChild(tmpLine)
      //   }
      // }

    }
  }
}

function dibujarCirculosExtraEspejo(miHoja){
  for(ti = 0; ti < circulosExtraEspejo.length; ti ++){
    if(circulosExtraEspejo[ti].hoja == miHoja && circulosExtraEspejo[ti].activo == false){
      var tmpCircle = document.createElementNS(svgNS, 'circle')
      tmpCircle.setAttribute('cx', circulosExtraEspejo[ti].x);
      tmpCircle.setAttribute('cy', circulosExtraEspejo[ti].y);
      tmpCircle.setAttribute('r', circulosExtraEspejo[ti].r);
      tmpCircle.setAttribute('stroke', 'black')
      tmpCircle.setAttribute('stroke-width', '1')
      tmpCircle.setAttribute('fill', 'none')


      if(circulosExtra[ti].dataLines != undefined && circulosExtra[ti].dataLines.length > 0){
        // console.log(circulosExtra[ti].dataLines.length);
        var tmpMiniData = circulosExtraEspejo[ti].dataLines
        for(tmd = 0; tmd < tmpMiniData.length;tmd++){
          var tmpLine = document.createElementNS(svgNS, 'line')
          tmpLine.setAttribute('x1', (tmpMiniData[tmd].minimo.x))//*miEscala) - xR + tX)
          tmpLine.setAttribute('y1', (tmpMiniData[tmd].minimo.y))//*miEscala) - yR + tY)
          tmpLine.setAttribute('x2', (tmpMiniData[tmd].maximo.x))//*miEscala) - xR + tX)
          tmpLine.setAttribute('y2', (tmpMiniData[tmd].maximo.y))//*miEscala) - yR + tY)
          tmpLine.setAttribute('stroke-linecap', 'round')
          tmpLine.setAttribute('class', 'path')

          if(tmpMiniData[tmd].typeTub == 'vt'){
            tmpLine.setAttribute('class', 'path');
          }
          else{
            tmpLine.setAttribute('class', 'path-dash');
          }
          svg_lienzo.appendChild(tmpLine)
        }


      }

      svg_lienzo.appendChild(tmpCircle);
    }
  }
}


function cambiarAnguloTagExtra(miId){
  //tgSe_90

  if(miId.substring(0, 6) == 'tgSe_0'){

    var myId = miId.substring(6, miId.length)

    document.getElementById('tgSe_0'+myId).className = 'tagAngle tg-0 clicked';
    document.getElementById('tgSe_30'+myId).className = 'tagAngle tg-30';
    document.getElementById('tgSe_90'+myId).className = 'tagAngle tg-90';
    document.getElementById('tgSe_150'+myId).className = 'tagAngle tg-150';
    document.getElementById('tgSe_210'+myId).className = 'tagAngle tg-210';
    document.getElementById('tgSe_270'+myId).className = 'tagAngle tg-270';
    document.getElementById('tgSe_330'+myId).className = 'tagAngle tg-330';

    //alert(myId)
  }else if(miId.substring(0, 7) == 'tgSe_30'){

    var myId = miId.substring(7, miId.length)

    document.getElementById('tgSe_0'+myId).className = 'tagAngle tg-0';
    document.getElementById('tgSe_30'+myId).className = 'tagAngle tg-30 clicked';
    document.getElementById('tgSe_90'+myId).className = 'tagAngle tg-90';
    document.getElementById('tgSe_150'+myId).className = 'tagAngle tg-150';
    document.getElementById('tgSe_210'+myId).className = 'tagAngle tg-210';
    document.getElementById('tgSe_270'+myId).className = 'tagAngle tg-270';
    document.getElementById('tgSe_330'+myId).className = 'tagAngle tg-330';
  }else if(miId.substring(0, 7) == 'tgSe_90'){

    var myId = miId.substring(7, miId.length)

    document.getElementById('tgSe_0'+myId).className = 'tagAngle tg-0';
    document.getElementById('tgSe_30'+myId).className = 'tagAngle tg-30';
    document.getElementById('tgSe_90'+myId).className = 'tagAngle tg-90 clicked';
    document.getElementById('tgSe_150'+myId).className = 'tagAngle tg-150';
    document.getElementById('tgSe_210'+myId).className = 'tagAngle tg-210';
    document.getElementById('tgSe_270'+myId).className = 'tagAngle tg-270';
    document.getElementById('tgSe_330'+myId).className = 'tagAngle tg-330';
  }else if(miId.substring(0, 8) == 'tgSe_150'){

    var myId = miId.substring(8, miId.length)

    document.getElementById('tgSe_0'+myId).className = 'tagAngle tg-0';
    document.getElementById('tgSe_30'+myId).className = 'tagAngle tg-30';
    document.getElementById('tgSe_90'+myId).className = 'tagAngle tg-90';
    document.getElementById('tgSe_150'+myId).className = 'tagAngle tg-150 clicked';
    document.getElementById('tgSe_210'+myId).className = 'tagAngle tg-210';
    document.getElementById('tgSe_270'+myId).className = 'tagAngle tg-270';
    document.getElementById('tgSe_330'+myId).className = 'tagAngle tg-330';
  }else if(miId.substring(0, 8) == 'tgSe_210'){

    var myId = miId.substring(8, miId.length)

    document.getElementById('tgSe_0'+myId).className = 'tagAngle tg-0';
    document.getElementById('tgSe_30'+myId).className = 'tagAngle tg-30';
    document.getElementById('tgSe_90'+myId).className = 'tagAngle tg-90';
    document.getElementById('tgSe_150'+myId).className = 'tagAngle tg-150';
    document.getElementById('tgSe_210'+myId).className = 'tagAngle tg-210 clicked';
    document.getElementById('tgSe_270'+myId).className = 'tagAngle tg-270';
    document.getElementById('tgSe_330'+myId).className = 'tagAngle tg-330';
  }else if(miId.substring(0, 8) == 'tgSe_270'){

    var myId = miId.substring(8, miId.length)

    document.getElementById('tgSe_0'+myId).className = 'tagAngle tg-0';
    document.getElementById('tgSe_30'+myId).className = 'tagAngle tg-30';
    document.getElementById('tgSe_90'+myId).className = 'tagAngle tg-90';
    document.getElementById('tgSe_150'+myId).className = 'tagAngle tg-150';
    document.getElementById('tgSe_210'+myId).className = 'tagAngle tg-210';
    document.getElementById('tgSe_270'+myId).className = 'tagAngle tg-270 clicked';
    document.getElementById('tgSe_330'+myId).className = 'tagAngle tg-330';
  }else if(miId.substring(0, 8) == 'tgSe_330'){

    var myId = miId.substring(8, miId.length)

    document.getElementById('tgSe_0'+myId).className = 'tagAngle tg-0';
    document.getElementById('tgSe_30'+myId).className = 'tagAngle tg-30';
    document.getElementById('tgSe_90'+myId).className = 'tagAngle tg-90';
    document.getElementById('tgSe_150'+myId).className = 'tagAngle tg-150';
    document.getElementById('tgSe_210'+myId).className = 'tagAngle tg-210';
    document.getElementById('tgSe_270'+myId).className = 'tagAngle tg-270';
    document.getElementById('tgSe_330'+myId).className = 'tagAngle tg-330 clicked';
  }
}

function dibujarTagsExtra(miHoja){
  /*var miLienzoMarcado = obtenerPosicionLienzoMarcado();*/

  //tgS_listModifier.appendChild(myTxtDiv);
  tgS_listModifier.style.display = 'block'
  while(tgS_listModifier.children.length > 0)
    tgS_listModifier.removeChild(tgS_listModifier.childNodes[0])
  //dibujaba el titulo
  //var swTG = 0;
  for(ti = 0; ti < tagsExtra.length; ti++){
    if(tagsExtra[ti].hoja == miHoja){

      /*if(swTG == 0 ){
        var myTxtDivL = document.createElement('div');
        myTxtDivL.className = 'label';

        var myLabel = document.createElement('label');
        myLabel.innerHTML = 'Lista de Tags Extra';

        myTxtDivL.appendChild(myLabel);
        tgS_listModifier.appendChild(myTxtDivL);
        swTG++
      }*/

      //console.log(miHoja)
      var myTagExtraContainer = document.createElement('div');
      myTagExtraContainer.className = 'myTagExtraContainer';

      var miTagExtra = document.createElementNS(svgNS, 'text');
      miTagExtra.setAttribute('x', 0);
      miTagExtra.setAttribute('y', 0);
      miTagExtra.innerHTML = tagsExtra[ti].content;

      //comentado por el zoom
      // miTagExtra.style.fontSize = tagsExtra[ti].size;

      var myG = document.createElementNS(svgNS, 'g');
      myG.setAttribute('transform', 'translate('+tagsExtra[ti].x+','+tagsExtra[ti].y+'), rotate(-'+tagsExtra[ti].inclinacion+')');

      myG.setAttribute('class', 'text-tag');
      //adicionado por el zoom
      myG.style.fontSize = tagsExtra[ti].size;

      myG.appendChild(miTagExtra);
      svg_lienzo.appendChild(myG);

      var myTxtDiv = document.createElement('div');
      myTxtDiv.className = 'text';
      var myInputText = document.createElement('input');
      myInputText.id = 'tgE_txt'+ti;
      myInputText.type = 'text';
      myInputText.value = tagsExtra[ti].content;

      myTxtDiv.appendChild(myInputText);

      //tgS_listModifier.appendChild(myTxtDiv);
      myTagExtraContainer.appendChild(myTxtDiv);

      myTxtDiv = document.createElement('div');
      myTxtDiv.className = 'text';
      myInputText = document.createElement('input');
      myInputText.id = 'tgEs_txt'+ti;
      myInputText.type = 'number';
      myInputText.value = tagsExtra[ti].size;
      myInputText.min = '5';
      myInputText.step = '1';

      //myInputText.setAttribute('oninput', '');
      //oninput = 'setValueRange(this.value)' onchange = 'setValueRange(this.value)'

      myTxtDiv.appendChild(myInputText);
      //tgS_listModifier.appendChild(myTxtDiv);
      myTagExtraContainer.appendChild(myTxtDiv);

      myTxtDiv = document.createElement('div');
      myTxtDiv.className = 'textOrientation';

      var myTagAngle = document.createElement('div');
      myTagAngle.id = 'tgSe_0'+ti;
      myTagAngle.setAttribute('onclick', 'cambiarAnguloTagExtra(this.id)')
      if(tagsExtra[ti].inclinacion == 0)
        myTagAngle.className = 'tagAngle tg-0 clicked';
      else
        myTagAngle.className = 'tagAngle tg-0';

      myTxtDiv.appendChild(myTagAngle);

      myTagAngle = document.createElement('div');
      myTagAngle.id = 'tgSe_30'+ti;
      myTagAngle.setAttribute('onclick', 'cambiarAnguloTagExtra(this.id)')
      if(tagsExtra[ti].inclinacion == 30)
        myTagAngle.className = 'tagAngle tg-30 clicked';
      else
        myTagAngle.className = 'tagAngle tg-30';

      myTxtDiv.appendChild(myTagAngle);

      myTagAngle = document.createElement('div');
      myTagAngle.id = 'tgSe_90'+ti;
      myTagAngle.setAttribute('onclick', 'cambiarAnguloTagExtra(this.id)')
      if(tagsExtra[ti].inclinacion == 90)
        myTagAngle.className = 'tagAngle tg-90 clicked';
      else
        myTagAngle.className = 'tagAngle tg-90';

      myTxtDiv.appendChild(myTagAngle);

      myTagAngle = document.createElement('div');
      myTagAngle.id = 'tgSe_150'+ti;
      myTagAngle.setAttribute('onclick', 'cambiarAnguloTagExtra(this.id)')
      if(tagsExtra[ti].inclinacion == 150)
        myTagAngle.className = 'tagAngle tg-150 clicked';
      else
        myTagAngle.className = 'tagAngle tg-150';

      myTxtDiv.appendChild(myTagAngle);

      myTagAngle = document.createElement('div');
      myTagAngle.id = 'tgSe_210'+ti;
      myTagAngle.setAttribute('onclick', 'cambiarAnguloTagExtra(this.id)')
      if(tagsExtra[ti].inclinacion == 210)
        myTagAngle.className = 'tagAngle tg-210 clicked';
      else
        myTagAngle.className = 'tagAngle tg-210';

      myTxtDiv.appendChild(myTagAngle);

      myTagAngle = document.createElement('div');
      myTagAngle.id = 'tgSe_270'+ti;
      myTagAngle.setAttribute('onclick', 'cambiarAnguloTagExtra(this.id)')
      if(tagsExtra[ti].inclinacion == 270)
        myTagAngle.className = 'tagAngle tg-270 clicked';
      else
        myTagAngle.className = 'tagAngle tg-270';

      myTxtDiv.appendChild(myTagAngle);

      myTagAngle = document.createElement('div');
      myTagAngle.id = 'tgSe_330'+ti;
      myTagAngle.setAttribute('onclick', 'cambiarAnguloTagExtra(this.id)')
      if(tagsExtra[ti].inclinacion == 330)
        myTagAngle.className = 'tagAngle tg-330 clicked';
      else
        myTagAngle.className = 'tagAngle tg-330';

      myTxtDiv.appendChild(myTagAngle);

      //tgS_listModifier.appendChild(myTxtDiv);
      myTagExtraContainer.appendChild(myTxtDiv);

      myTxtDiv = document.createElement('div');
      myTxtDiv.className = 'textControls';

      myTagAngle = document.createElement('div');
      myTagAngle.className = 'textAdd';
      myTagAngle.id = 'textAdd' + ti;
      myTagAngle.setAttribute('onclick', 'adicionarTagExtra(this.id)')

      myTxtDiv.appendChild(myTagAngle);

      myTagAngle = document.createElement('div');
      myTagAngle.className = 'textDel';
      myTagAngle.id = 'textDel' + ti;
      myTagAngle.setAttribute('onclick', 'eliminarTagExtra(this.id)')

      myTxtDiv.appendChild(myTagAngle);

      myTagAngle = document.createElement('div');
      myTagAngle.className = 'textSel';
      myTagAngle.id = 'textSel' + ti;
      myTagAngle.setAttribute('onclick', 'cambiarTagExtra(this.id)')

      myTxtDiv.appendChild(myTagAngle);

      myTagAngle = document.createElement('div');
      myTagAngle.className = 'textVer';
      myTagAngle.id = 'textVer' + ti;
      myTagAngle.setAttribute('onclick', 'verTagExtra(this.id)')

      myTxtDiv.appendChild(myTagAngle);

      //tgS_listModifier.appendChild(myTxtDiv);
      myTagExtraContainer.appendChild(myTxtDiv);
      tgS_listModifier.appendChild(myTagExtraContainer);

    }
  }
  //console.log(tgS_listModifier.childNodes)
  //console.log(tgS_listModifier.children.length)

  if(tgS_listModifier.children.length == 0){

    var myTagExtraContainer = document.createElement('div');
    myTagExtraContainer.className = 'myTagExtraContainer';

    var myTxtDivL = document.createElement('div');
    myTxtDivL.className = 'label';

    var myLabel = document.createElement('label');
    myLabel.innerHTML = 'Añade nuevas cotas extra';

    myTxtDivL.appendChild(myLabel);
    myTagExtraContainer.appendChild(myTxtDivL);
    //tgS_listModifier.appendChild(myTxtDivL);

    //console.log('hola')
    var myTxtDiv = document.createElement('div');
    myTxtDiv.className = 'textControls';

    var myTagAngle = document.createElement('div');
    myTagAngle.className = 'textAdd';
    myTagAngle.id = 'textAdd' + '__1';
    myTagAngle.setAttribute('onclick', 'adicionarTagExtra(this.id)')

    myTxtDiv.appendChild(myTagAngle);

    //tgS_listModifier.appendChild(myTxtDiv);
    myTagExtraContainer.appendChild(myTxtDiv);
    tgS_listModifier.appendChild(myTagExtraContainer);

  }
}

function getTagSeparation(separacion, grado, miPunto){
  var myPx1 = separacion * Math.cos((miPunto.angulo+45) * Math.PI/180) + miPunto.x;
  var myPy1 = -separacion * Math.sin((miPunto.angulo+45) * Math.PI/180) + miPunto.y;
  return [myPx1, myPy1];
}

function getTagSeparationDefault(miPunto){
  var myPx1 = 20 * Math.cos((miPunto.angulo+45) * Math.PI/180) + miPunto.x;
  var myPy1 = -20 * Math.sin((miPunto.angulo+45) * Math.PI/180) + miPunto.y;
  return [myPx1, myPy1];
}

function dibujarTag(miPunto, miAnteriorPunto){

  /*<g transform="translate(190,75),rotate(60)">
   <rect x="-40" y="-40" width="80" height="80" fill="orange"/>
   <text x="-20" y="0" style="font: bold 0.8em arial; fill: purple;">
     Rotate</text>
     </g>*/

  //console.log(grafo)

  var myText = document.createElementNS(svgNS, 'text');
  myText.setAttribute('x', 0);//miPunto.x);
  myText.setAttribute('y', 0);//miPunto.y);

  //console.log('-----------------------------------------------------------')
  //console.log(textoCorto)
  //console.log('-----------------------------------------------------------')
  if(textoCorto == false){
    //console.log(miPunto.distancia-parseInt(miPunto.distancia));
    //console.log((miPunto.distancia-parseInt(miPunto.distancia)).toString().length);

    //console.log('-----------------------------------------------------------')
    //console.log(miPunto.distancia)
    //console.log(parseInt(miPunto.distancia))
    //console.log(Math.round((miPunto.distancia-parseInt(miPunto.distancia))*100)/100 )
    //console.log((Math.round((miPunto.distancia-parseInt(miPunto.distancia))*100)/100).toString())
    //console.log((Math.round((miPunto.distancia-parseInt(miPunto.distancia))*100)/100).toString().length)
    //console.log('-----------------------------------------------------------')
    var distanciaTag = '';
    if((miPunto.distancia-parseInt(miPunto.distancia)).toString().length == 1)
      distanciaTag = miPunto.distancia + '.00';
    else if((Math.round((miPunto.distancia-parseInt(miPunto.distancia))*100)/100).toString().length == 3)
      distanciaTag = miPunto.distancia + '0';
    else
      distanciaTag = miPunto.distancia;

    if(miPunto.diametro && miPunto.diametro.length > 1 && miPunto.diametro != '14'){
      if(modo == 'ypfb' && (miPunto.diametro == '14' || miPunto.diametro == '1'))
        myText.innerHTML = 'L='+distanciaTag+' '+'3/4'+'/'+miPunto.diametro[1]+'\'\' AG ';
      else
        myText.innerHTML = 'L='+distanciaTag+' '+miPunto.diametro[0]+'/'+miPunto.diametro[1]+'\'\' AG '; //+miPunto.typeTub;
    }
    else if(miPunto.diametro && miPunto.diametro == '14'){
      if(modo == 'ypfb')
        myText.innerHTML = 'L='+distanciaTag+' 3/4\'\' AG ';
      else
        myText.innerHTML = 'L='+distanciaTag+' 1 '+miPunto.diametro[0]+'/'+miPunto.diametro[1]+'\'\' AG ';
    }
    else{
      if(modo == 'ypfb' && (miPunto.diametro == '14' || miPunto.diametro == '1'))
        myText.innerHTML = 'L='+distanciaTag+' '+'3/4'+'\'\' AG ';//+miPunto.typeTub;
      else
        myText.innerHTML = 'L='+distanciaTag+' '+miPunto.diametro+'\'\' AG ';//+miPunto.typeTub;
    }

  }
  else{
    //console.log('ES VERDAD')
    var distanciaTag = '';
    if((miPunto.distancia-parseInt(miPunto.distancia)).toString().length == 1)
      distanciaTag = miPunto.distancia + '.00';
    else if((Math.round((miPunto.distancia-parseInt(miPunto.distancia))*100)/100).toString().length == 3)
      distanciaTag = miPunto.distancia + '0';
    else
      distanciaTag = miPunto.distancia;

    myText.innerHTML = 'L='+distanciaTag;//+miPunto.typeTub;
    /*if(miAnteriorPunto.type == 'P' && miAnteriorPunto.diametro == miPunto.diametro){
      if(miPunto.diametro && miPunto.diametro.length > 1)
        myText.innerHTML = 'L='+distanciaTag;
      else
        myText.innerHTML = 'L='+distanciaTag;
    }
    else{
      if(miPunto.diametro && miPunto.diametro.length > 1)
      myText.innerHTML = 'L='+distanciaTag+' '+miPunto.diametro[0]+'/'+miPunto.diametro[1]+'\'\' AG ';//+miPunto.typeTub;
    else
      myText.innerHTML = 'L='+distanciaTag+' '+miPunto.diametro+'\'\' AG ';//+miPunto.typeTub;
    }*/
    if(miAnteriorPunto.type != 'P'|| (miAnteriorPunto.type == 'P' && miAnteriorPunto.diametro != miPunto.diametro && modo !='ypfb')){
      if(miPunto.diametro && miPunto.diametro.length > 1) //Este if filtra los casos cuando los diametros son 1/2 y 3/4
        if(modo == 'ypfb' && (miPunto.diametro == '14' || miPunto.diametro == '1'))
          //myText.innerHTML = 'L='+'3/4'+' '+miPunto.diametro[0]+'/'+miPunto.diametro[1]+'\'\' AG ';
          myText.innerHTML = 'L='+distanciaTag+' 3/4'+'\'\' AG ';
        else
          myText.innerHTML = 'L='+distanciaTag+' '+miPunto.diametro[0]+'/'+miPunto.diametro[1]+'\'\' AG ';

      if(miPunto.diametro && miPunto.diametro == '14')
        if(modo == 'ypfb')
          myText.innerHTML = 'L='+distanciaTag+' 3/4'+'\'\' AG ';
        else
          myText.innerHTML = 'L='+distanciaTag+' 1 '+miPunto.diametro[0]+'/'+miPunto.diametro[1]+'\'\' AG ';

      else
        if(modo == 'ypfb' && (miPunto.diametro == '14' || miPunto.diametro == '1'))
          myText.innerHTML = 'L='+distanciaTag+' 3/4\'\' AG ';
        //else
          //myText.innerHTML = 'L='+distanciaTag+' '+miPunto.diametro+'\'\' AG ';
    }
    else if(modo == 'ypfb' && miAnteriorPunto.type == 'P' && (miAnteriorPunto.diametro == '14' || miAnteriorPunto.diametro == '1') && (miPunto.diametro == '34' )){
      myText.innerHTML = 'L='+distanciaTag;
    }
    else if(miAnteriorPunto.type == 'P' && miAnteriorPunto.diametro == '34'&& miPunto.diametro == '12' ){
      myText.innerHTML = 'L='+distanciaTag +' '+miPunto.diametro[0]+'/'+miPunto.diametro[1]+'\'\' AG ';;
    }
  }

  var myG = document.createElementNS(svgNS, 'g');

  //if(miPunto.x ==  || miPunto.y == )
  //console.log('*/*/*/*////////////////////*/*/*/*/');
  //console.log(miPunto.tagAngulo)
  if(miPunto.tagX && miPunto.tagY && miPunto.tagAngulo){
    //console.log(miPunto.tagAngulo)
    myG.setAttribute('transform', 'translate('+miPunto.tagX+','+miPunto.tagY+'), rotate(-'+miPunto.tagAngulo+')');
  }
  else if(miPunto.tagX && miPunto.tagY && !miPunto.tagAngulo){
    //console.log('*/*/*/*////////////////////*/*/*/*/');
    //console.log(miPunto.tagAngulo)
    myG.setAttribute('transform', 'translate('+miPunto.tagX+','+miPunto.tagY+'), rotate(0)');
  }


  myG.setAttribute('class', 'text-tag');
  myG.style.fontSize = tamanoFuenteGrafo+'px';

  myG.appendChild(myText)
  svg_lienzo.appendChild(myG);

  //text-tag
}

function sumarRuta(numeroDeLienzo, ruta){
  var miSum14 = 0;
  var miSum1 = 0;
  var miSum34 = 0;
  var miSum12 = 0;
  var contadorPosiciones = -1;
  var posicionLienzo = -1;

  var miSumCodo14 = 0;
  var miSumCodo1 = 0;
  var miSumCodo34 = 0;
  var miSumCodo12 = 0;

  var miSumCupla14 = 0;
  var miSumCupla1 = 0;
  var miSumCupla34 = 0;
  var miSumCupla12 = 0;

  var miSumTe14 = 0;
  var miSumTe01 = 0;
  var miSumTe34 = 0;
  var miSumTe12 = 0;

  var miSumTapon14 = 0;
  var miSumTapon01 = 0;
  var miSumTapon34 = 0;
  var miSumTapon12 = 0;
  /////////////////////////////////////////////////////////
  //LAST EDITION
  /////////////////////////////////////////////////////////
  var miSumValvula14 = 0;
  var miSumValvula01 = 0;
  var miSumValvula34 = 0;
  var miSumValvula12 = 0;

  var miSumReduccion14a01 = 0;
  var miSumReduccion01a34 = 0;
  var miSumReduccion34a12 = 0;

  for(ps = 0; ps < ruta.length; ps++){
    if(ruta[ps].type == 'H')
      contadorPosiciones++;
    if(numeroDeLienzo == contadorPosiciones){
      posicionLienzo = ps;
      break;
    }
  }

  for(ps = posicionLienzo + 1; ps < ruta.length; ps++){
    if(ruta[ps].type == 'H')
      break;
    if(ruta[ps].type == 'P' && ruta[ps+1] && ruta[ps+1].type == 'P'){
      switch(ruta[ps].diametro){
        case '12':
          miSum12 = miSum12 + ruta[ps].distancia;
          break;
        case '34':
          miSum34 = miSum34 + ruta[ps].distancia;
          break;
        case '1':
          miSum1 = miSum1 + ruta[ps].distancia;
          break;
        case '14':
          miSum14 = miSum14 + ruta[ps].distancia;
          break;
      }
    }


    //////////////////////////////////////////
    ////VALVULAS////
    if(ruta[ps].type == 'P' && ruta[ps+1] && ruta[ps+1].type == 'P'){
      switch(ruta[ps].diametro){
        case '12':
          if(ruta[ps].valvula) miSumValvula12++;
          if(ruta[ps].valvulaPunto) miSumValvula12++;
          break;
        case '34':
          if(ruta[ps].valvula) miSumValvula34++;
          if(ruta[ps].valvulaPunto) miSumValvula34++;
          break;
        case '1':
          if(ruta[ps].valvula) miSumValvula01++;
          if(ruta[ps].valvulaPunto) miSumValvula01++;
          break;
        case '14':
          if(ruta[ps].valvula) miSumValvula14++;
          if(ruta[ps].valvulaPunto) miSumValvula14++;
          break;
      }

    }


    //////////////////////////////////////////
    //SUMA DE CODOS
    // console.log(ruta[ps])
    //console.log(ruta[ps+1])

    if(ruta[ps].type == 'P' && ruta[ps-1] && ruta[ps-1].type == 'P' && ruta[ps+1] && ruta[ps+1].type == 'P'){

      if(ruta[ps-1].diametro == ruta[ps].diametro && ruta[ps-1].angulo - ruta[ps].angulo != 0 && !ruta[ps].instalacion){
        switch(ruta[ps].diametro){
          case '12':
            if(ruta[ps].te_30 || ruta[ps].te_90 || ruta[ps].te_150 || ruta[ps].te_210 || ruta[ps].te_270 || ruta[ps].te_330){
              miSumTe12++;
              miSumTapon12++;
            }
            else
              miSumCodo12++;

            break;
          case '34':
            if(ruta[ps].te_30 || ruta[ps].te_90 || ruta[ps].te_150 || ruta[ps].te_210 || ruta[ps].te_270 || ruta[ps].te_330){
              miSumTe34++;
              miSumTapon34++;
            }
            else
              miSumCodo34++;

            break;
          case '1':
            if(ruta[ps].te_30 || ruta[ps].te_90 || ruta[ps].te_150 || ruta[ps].te_210 || ruta[ps].te_270 || ruta[ps].te_330){
              miSumTe01++;
              miSumTapon01++;
            }
            else
              miSumCodo1++;

            break;
          case '14':
            if(ruta[ps].te_30 || ruta[ps].te_90 || ruta[ps].te_150 || ruta[ps].te_210 || ruta[ps].te_270 || ruta[ps].te_330){
              miSumTe14++;
              miSumTapon14++;
            }
            else
              miSumCodo14++;

            break;
        }
      }
      ///////////
      //REDUCCIONES
      //////////
      else if(ruta[ps-1].diametro =='14' && ruta[ps].diametro == '1' && ruta[ps-1].angulo - ruta[ps].angulo != 0 && !ruta[ps].instalacion){
        miSumReduccion14a01++;
      }
      else if(ruta[ps-1].diametro =='1' && ruta[ps].diametro == '34' && ruta[ps-1].angulo - ruta[ps].angulo != 0 && !ruta[ps].instalacion){
        miSumReduccion01a34++;
      }
      else if(ruta[ps-1].diametro =='34' && ruta[ps].diametro == '12' && ruta[ps-1].angulo - ruta[ps].angulo != 0 && !ruta[ps].instalacion){
        miSumReduccion34a12++;
      }
    }else if(ruta[ps].type == 'P' && ruta[ps-1] && ruta[ps-1].type == 'P' && ruta[ps+1] && ruta[ps+1].type != 'P'){
      var sit = -1;
      for(bp = ps+1; bp < ruta.length; bp++){
        if(ruta[bp].type == 'P'){
          sit = bp;
          break;
        }
      }
      if(sit > -1 && ruta[ps-1].diametro == ruta[sit].diametro && ruta[ps-1].angulo - ruta[sit].angulo != 0 && !ruta[ps].instalacion && !ruta[sit].instalacion){
        switch(ruta[sit].diametro){
          case '12':
            if(ruta[ps].te_30 || ruta[ps].te_90 || ruta[ps].te_150 || ruta[ps].te_210 || ruta[ps].te_270 || ruta[ps].te_330 || ruta[sit].te_30 || ruta[sit].te_90 || ruta[sit].te_150 || ruta[sit].te_210 || ruta[sit].te_270 || ruta[sit].te_330){
              miSumTe12++;
              miSumTapon12++;
            }
            else
              miSumCodo12++;
            break;
          case '34':
            if(ruta[ps].te_30 || ruta[ps].te_90 || ruta[ps].te_150 || ruta[ps].te_210 || ruta[ps].te_270 || ruta[ps].te_330 || ruta[sit].te_30 || ruta[sit].te_90 || ruta[sit].te_150 || ruta[sit].te_210 || ruta[sit].te_270 || ruta[sit].te_330){
              miSumTe34++;
              miSumTapon34++;
            }
            else
              miSumCodo34++;
            break;
          case '1':
            if(ruta[ps].te_30 || ruta[ps].te_90 || ruta[ps].te_150 || ruta[ps].te_210 || ruta[ps].te_270 || ruta[ps].te_330 || ruta[sit].te_30 || ruta[sit].te_90 || ruta[sit].te_150 || ruta[sit].te_210 || ruta[sit].te_270 || ruta[sit].te_330){
              miSumTe01++;
              miSumTapon01++;
            }
            else
              miSumCodo1++;
            break;
          case '14':
            if(ruta[ps].te_30 || ruta[ps].te_90 || ruta[ps].te_150 || ruta[ps].te_210 || ruta[ps].te_270 || ruta[ps].te_330 || ruta[sit].te_30 || ruta[sit].te_90 || ruta[sit].te_150 || ruta[sit].te_210 || ruta[sit].te_270 || ruta[sit].te_330){
              miSumTe14++;
              miSumTapon14++;
            }
            else
              miSumCodo14++;
            break;
        }
      }
      else if(sit > -1 && ruta[ps-1].diametro == '14' && ruta[sit].diametro == '1' && ruta[ps-1].angulo - ruta[sit].angulo != 0 && !ruta[ps].instalacion && !ruta[sit].instalacion){
        miSumReduccion14a01++;
      }
      else if(sit > -1 && ruta[ps-1].diametro == '1' && ruta[sit].diametro == '34' && ruta[ps-1].angulo - ruta[sit].angulo != 0 && !ruta[ps].instalacion && !ruta[sit].instalacion){
        miSumReduccion01a34++;
      }
      else if(sit > -1 && ruta[ps-1].diametro == '34' && ruta[sit].diametro == '12' && ruta[ps-1].angulo - ruta[sit].angulo != 0 && !ruta[ps].instalacion && !ruta[sit].instalacion){
        miSumReduccion34a12++;
      }
      if(sit == -1){
        switch(ruta[ps-1].diametro){
          case '12':
            miSumTapon12++;
            break;
          case '34':
            miSumTapon34++;
            break;
          case '1':
            miSumTapon01++;
            break;
          case '14':
            miSumTapon14++;
            break;
        }
      }
    }
    else if(ruta[ps].type == 'P' && ruta[ps-1] && ruta[ps-1].type == 'S' && !ruta[ps-1].padre && ruta[ps-2] && ruta[ps-2].type == 'H'){
      var miSearch = -1;
      for(bb = ps - 1; bb > 0; bb--){
        if(ruta[bb].type == 'P'){
          miSearch = bb;
          break;
        }
      }
      if(miSearch == -1){
        switch(ruta[ps].diametro){
          case '12':
            miSumCodo12++;
            break;
          case '34':
            miSumCodo34++;
            break;
          case '1':
            miSumCodo1++;
            break;
          case '14':
            miSumCodo14++;
            break;
        }
      }
    }
    if(!ruta[ps+1] && ruta[ps-1] && ruta[ps-1].type && ruta[ps-1].type == 'P'){
      switch(ruta[ps-1].diametro){
        case '12':
          miSumTapon12++;
          break;
        case '34':
          miSumTapon34++;
          break;
        case '1':
          miSumTapon01++;
          break;
        case '14':
          miSumTapon14++;
          break;
        }
    }
    //////////////////////////////////////////
    //SUMA DE CUPLAS
    if(ruta[ps].type == 'P' && ruta[ps-1] && ruta[ps-1].type == 'P' && ruta[ps+1] && ruta[ps+1].type == 'P'){

      if(ruta[ps-1].diametro == ruta[ps].diametro && ruta[ps-1].angulo - ruta[ps].angulo == 0 && !ruta[ps].instalacion){
        switch(ruta[ps].diametro){
          case '12':
            miSumCupla12++;
            break;
          case '34':
            miSumCupla34++;
            break;
          case '1':
            miSumCupla1++;
            break;
          case '14':
            miSumCupla14++;
            break;
        }
      }
    }else if(ruta[ps].type == 'P' && ruta[ps-1] && ruta[ps-1].type == 'P' && ruta[ps+1] && ruta[ps+1].type == 'H'){
      var sit = -1;
      for(bp = ps+1; bp < ruta.length; bp++){
        if(ruta[bp].type == 'P'){
          sit = bp;
          break;
        }
      }
      if(sit > -1 && ruta[ps-1].diametro == ruta[sit].diametro && ruta[ps-1].angulo - ruta[sit].angulo == 0 && !ruta[ps].instalacion && !ruta[sit].instalacion){
        switch(ruta[sit].diametro){
          case '12':
            miSumCupla12++;
            break;
          case '34':
            miSumCupla34++;
            break;
          case '1':
            miSumCupla1++;
            break;
          case '14':
            miSumCupla14++;
            break;
        }
      }
    }



  }
  var sumaParcial = new Array();
  sumaParcial[0] = miSum12;
  sumaParcial[1] = miSum34;
  sumaParcial[2] = miSum1;
  sumaParcial[3] = miSum14;

  sumaParcial[4] = miSumCodo12;
  sumaParcial[5] = miSumCodo34;
  sumaParcial[6] = miSumCodo1;
  sumaParcial[7] = miSumCodo14;

  sumaParcial[8] = miSumCupla12;
  sumaParcial[9] = miSumCupla34;
  sumaParcial[10] = miSumCupla1;
  sumaParcial[11] = miSumCupla14;
  sumaParcial[12] = miSumTe12;
  sumaParcial[13] = miSumTe34;
  sumaParcial[14] = miSumTe01;
  sumaParcial[15] = miSumTe14;
  sumaParcial[16] = miSumTapon12;
  sumaParcial[17] = miSumTapon34;
  sumaParcial[18] = miSumTapon01;
  sumaParcial[19] = miSumTapon14;
  sumaParcial[20] = miSumReduccion14a01;
  sumaParcial[21] = miSumReduccion01a34;
  sumaParcial[22] = miSumReduccion34a12;
  sumaParcial[23] = miSumValvula12;
  sumaParcial[24] = miSumValvula34;
  sumaParcial[25] = miSumValvula01;
  sumaParcial[26] = miSumValvula14;
  return sumaParcial;
  //console.log('-----------------------------------');
  //console.log(miSum12)
  //console.log(miSum34)
  //console.log(miSum1)
  //console.log(miSum14)
  //console.log('-----------------------------------');
}


function dibujarRuta(numeroDeLienzo, ruta){

  //dibujarMedidorCaraIzquierda(400, 400);
  //dibujarMedidorCaraDerecha(300, 300);

  var contadorPosiciones = -1;
  var posicionLienzo = -1;

  for(ps = 0; ps < ruta.length; ps++){
    if(ruta[ps].type == 'H')
      contadorPosiciones++;
    if(numeroDeLienzo == contadorPosiciones){
      posicionLienzo = ps;
      break;
    }
  }

  //ruta
  /*console.log(grafo)
  if(ruta[posicionLienzo] && ruta[posicionLienzo].numberPage){
    console.log(ruta[posicionLienzo].numberPage)
    document.getElementById('indexPageCanvas').value = ruta[posicionLienzo].numberPage;
  }*/

  for(ps = posicionLienzo + 1; ps < ruta.length; ps++){
    if(ruta[ps].type == 'H')
      break;
    if(ruta[ps].type == 'P'){
      // console.log(ruta);
      if(ruta[ps+1] && ruta[ps+1].type == 'P')
        dibujarTag(ruta[ps], ruta[ps-1])

      if(ruta[ps].tubForro && ruta[ps+1].type == 'P')
        dibujarTuberiaForro(ruta[ps], ruta[ps+1], 10);

      if(ruta[ps].medidorIzquierda)
        dibujarMedidorCaraIzquierda(ruta[ps].x, ruta[ps].y);

      if(ruta[ps].medidorDerecha)
        dibujarMedidorCaraDerecha(ruta[ps].x, ruta[ps].y);

      if(ruta[ps].medidorIzquierdaArriba || ruta[ps].medidorIzquierdaIzquierda || ruta[ps].medidorIzquierdaDerecha || ruta[ps].medidorIzquierdaAbajo){
        if(ruta[ps].medidorIzquierdaArriba) dibujarMedidorCaraIzquierdaArriba(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].medidorIzquierdaAbajo) dibujarMedidorCaraIzquierdaAbajo(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].medidorIzquierdaIzquierda) dibujarMedidorCaraIzquierdaIzquierda(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].medidorIzquierdaDerecha) dibujarMedidorCaraIzquierdaDerecha(ruta[ps].x, ruta[ps].y);
      }

      if(ruta[ps].medidorDerechaArriba || ruta[ps].medidorDerechaIzquierda || ruta[ps].medidorDerechaDerecha || ruta[ps].medidorDerechaAbajo){
        if(ruta[ps].medidorDerechaArriba) dibujarMedidorCaraDerechaArriba(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].medidorDerechaAbajo) dibujarMedidorCaraDerechaAbajo(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].medidorDerechaIzquierda) dibujarMedidorCaraDerechaIzquierda(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].medidorDerechaDerecha) dibujarMedidorCaraDerechaDerecha(ruta[ps].x, ruta[ps].y);
      }

      if(ruta[ps].reguladorIzquierdaArriba || ruta[ps].reguladorIzquierdaIzquierda || ruta[ps].reguladorIzquierdaDerecha || ruta[ps].reguladorIzquierdaAbajo){
        if(ruta[ps].reguladorIzquierdaArriba) dibujarReguladorCaraIzquierdaArriba(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].reguladorIzquierdaAbajo) dibujarReguladorCaraIzquierdaAbajo(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].reguladorIzquierdaIzquierda) dibujarReguladorCaraIzquierdaIzquierda(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].reguladorIzquierdaDerecha) dibujarReguladorCaraIzquierdaDerecha(ruta[ps].x, ruta[ps].y);
      }

      if(ruta[ps].reguladorIzquierdaArribaSIM || ruta[ps].reguladorIzquierdaIzquierdaSIM || ruta[ps].reguladorIzquierdaDerechaSIM || ruta[ps].reguladorIzquierdaAbajoSIM){
        if(ruta[ps].reguladorIzquierdaArribaSIM) dibujarReguladorCaraIzquierdaArriba(ruta[ps].x, ruta[ps].y, 'SIM');
        else if(ruta[ps].reguladorIzquierdaAbajoSIM) dibujarReguladorCaraIzquierdaAbajo(ruta[ps].x, ruta[ps].y, 'SIM');
        else if(ruta[ps].reguladorIzquierdaIzquierdaSIM) dibujarReguladorCaraIzquierdaIzquierda(ruta[ps].x, ruta[ps].y, 'SIM');
        else if(ruta[ps].reguladorIzquierdaDerechaSIM) dibujarReguladorCaraIzquierdaDerecha(ruta[ps].x, ruta[ps].y, 'SIM');
      }

      if(ruta[ps].reguladorDerechaArriba || ruta[ps].reguladorDerechaIzquierda || ruta[ps].reguladorDerechaDerecha || ruta[ps].reguladorDerechaAbajo){
        if(ruta[ps].reguladorDerechaArriba) dibujarReguladorCaraDerechaArriba(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].reguladorDerechaAbajo) dibujarReguladorCaraDerechaAbajo(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].reguladorDerechaIzquierda) dibujarReguladorCaraDerechaIzquierda(ruta[ps].x, ruta[ps].y);
        else if(ruta[ps].reguladorDerechaDerecha) dibujarReguladorCaraDerechaDerecha(ruta[ps].x, ruta[ps].y);
      }

      if(ruta[ps].reguladorDerechaArribaSIM || ruta[ps].reguladorDerechaIzquierdaSIM || ruta[ps].reguladorDerechaDerechaSIM || ruta[ps].reguladorDerechaAbajoSIM){
        if(ruta[ps].reguladorDerechaArribaSIM) dibujarReguladorCaraDerechaArriba(ruta[ps].x, ruta[ps].y, 'SIM');
        else if(ruta[ps].reguladorDerechaAbajoSIM) dibujarReguladorCaraDerechaAbajo(ruta[ps].x, ruta[ps].y, 'SIM');
        else if(ruta[ps].reguladorDerechaIzquierdaSIM) dibujarReguladorCaraDerechaIzquierda(ruta[ps].x, ruta[ps].y, 'SIM');
        else if(ruta[ps].reguladorDerechaDerechaSIM) dibujarReguladorCaraDerechaDerecha(ruta[ps].x, ruta[ps].y, 'SIM');
      }

      if(ruta[ps].te_30)
        dibujarTe(ruta[ps], 30);
      if(ruta[ps].te_90)
        dibujarTe(ruta[ps], 90);
      if(ruta[ps].te_150)
        dibujarTe(ruta[ps], 150);
      if(ruta[ps].te_210)
        dibujarTe(ruta[ps], 210);
      if(ruta[ps].te_270)
        dibujarTe(ruta[ps], 270);
      if(ruta[ps].te_330)
        dibujarTe(ruta[ps], 330);

      //if(ruta[ps].valvula)
        //dibujarValvulaLargoEspecifico(ruta[ps], ruta[ps+1], (10*escala/100))
        //dibujarValvulaLargo(ruta[ps], (10*escala/100))
      //if(ruta[ps+1].type && ruta[ps+1].type == 'P')
      //  dibujarTuberiaForro(ruta[ps], ruta[ps+1], 6);

      //dibujarValvula(ruta[ps], 8)
      //dibujarReduccion(ruta[ps], 8)
      //dibujarTe(ruta[ps], 90)
      //dibujarTe(ruta[ps], 120)
      //dibujarTe(ruta[ps], 90)

      if(ruta[ps-1].angulo == ruta[ps].angulo && ruta[ps-1].typeTub == 'vt' && ruta[ps].typeTub == 'vt'){
        //console.log(ruta[ps-1])
        dibujarCupla(ruta[ps], 6);
        //dibujarCuplaN(ruta[ps], 10);
      }
      else if(ruta[ps-1].angulo == ruta[ps].angulo && (ruta[ps-1].typeTub == 'et' && ruta[ps].typeTub == 'et' || ruta[ps-1].typeTub == 'ep' && ruta[ps].typeTub == 'ep' || ruta[ps-1].typeTub == 'et' && ruta[ps].typeTub == 'ep' || ruta[ps-1].typeTub == 'ep' && ruta[ps].typeTub == 'et')){
        //dibujarCuplaN(ruta[ps], 8);
        dibujarCuplaN(ruta[ps], 6);
      }
      else if(ruta[ps+1] && ruta[ps+1].type!= 'P'){

        var miNextPiv = -1;
        for(ca = ps + 1; ca < ruta.length ; ca++)
          if(ruta[ca] && ruta[ca].type == 'P'){
            miNextPiv = ca;
            break;
          }
        if(miNextPiv > -1){
          if(ruta[ps-1].angulo == ruta[miNextPiv].angulo && ruta[ps-1].typeTub == 'vt' && ruta[miNextPiv].typeTub == 'vt'){
            dibujarCuplaEspecial(ruta[ps], 6, ruta[ps-1].angulo);
          }
          else if(ruta[ps-1].angulo == ruta[miNextPiv].angulo && (ruta[ps-1].typeTub == 'et' && ruta[miNextPiv].typeTub == 'et' || ruta[ps-1].typeTub == 'ep' && ruta[miNextPiv].typeTub == 'ep' || ruta[ps-1].typeTub == 'et' && ruta[miNextPiv].typeTub == 'ep' || ruta[ps-1].typeTub == 'ep' && ruta[miNextPiv].typeTub == 'et')){
            dibujarCuplaNEspecial(ruta[ps], 6, ruta[ps-1].angulo);
          }
          else if(permitirCodos){
            //console.log('ULTIMO CODO');
            //console.log(ruta[ps]);
            //console.log(ruta[miNextPiv]);
            //console.log('********************************')
            dibujarCodoAnteriorAnguloAlone(ruta[ps], 5, ruta[ps-1].angulo, ruta[miNextPiv]);
          }
        }
        /////////////////////////////////////////////////////////////////////////////////
        //PARA LA CUPLA DISPAREJA
        /////////////////////////////////////////////////////////////////////////////////
      }
      else{
        if(permitirCodos){
          //if(ruta[ps+1] && ruta[ps+1].type == 'P');
            //dibujarCodoSiguiente(ruta[ps], 6);

          //console.log('/*/*/*/*/*/*/*/*//*/*/*////*/*/*//*/*')
          //console.log(ruta[ps]);
          //console.log('/*/*/*/*/*/*/*/*//*/*/*////*/*/*//*/*')

          if(ruta[ps+1] && ruta[ps+1].type == 'P'){
            if(ruta[ps-1] && ruta[ps-1].type != 'P')
              dibujarCodoSiguienteAngulo(ruta[ps], 5, ruta[ps].angulo-90);
            else if(ruta[ps-1] && ruta[ps-1].type == 'P'){
              dibujarCodoSiguienteAngulo(ruta[ps], 5, ruta[ps-1].angulo);
              dibujarCodoAnteriorAngulo(ruta[ps], 5, ruta[ps-1].angulo);
            }
          }
          /*else if(ruta[ps+1] && ruta[ps+1].type != 'P'){
            console.log('CODO END')
            var miCod = -1;
            for(ccod = ps+1; ccod < ruta.length; ccod ++){
              if(ruta[ccod].type == 'P'){
                miCod = ccod;
                break;
              }
            }
            if(miCod > -1){
              dibujarCodoAnteriorAngulo(ruta[ps], 5, ruta[miCod].angulo);
            }
          }*/

          /*if(ruta[ps-1] && ruta[ps-1].type == 'P' && ruta[ps-1].diametro == ruta[ps].diametro)
            dibujarCodoSiguiente(ruta[ps], 6);

          else if(ruta[ps-3] && ruta[ps-2] && ruta[ps-1] && ruta[ps-1].type == 'S' && ruta[ps-3].type == 'P' && ruta[ps-2].type == 'P' && ruta[ps-3].diametro == ruta[ps].diametro)
            dibujarCodoSiguiente(ruta[ps], 6);

          else if(ruta[ps-4] && ruta[ps-3] && ruta[ps-2] && ruta[ps-1] && ruta[ps-1].type == 'S' && ruta[ps-2].type == 'H' && ruta[ps-3].type == 'P' && ruta[ps-4].type == 'P' && ruta[ps-4].diametro == ruta[ps].diametro)
            dibujarCodoSiguiente(ruta[ps], 6);


          if(ruta[ps-1].type == 'P'){
            var last = false;
            for(rc = ps+1; rc < ruta.length; rc++){
              if(ruta[rc].type == 'P'){
                last = true;
                break;
              }
            }
            if(last)
              dibujarCodoAnterior(ruta[ps], ruta[ps-1], 6);
          }*/
        }
      }

      if(ruta[ps-1].type =='P'){
        var myLine = document.createElementNS(svgNS, 'line');
        myLine.setAttribute('x1', ruta[ps-1].x);
        myLine.setAttribute('y1', ruta[ps-1].y);
        myLine.setAttribute('x2', ruta[ps].x);
        myLine.setAttribute('y2', ruta[ps].y);
        myLine.setAttribute('stroke-linecap', 'round');

        if(ruta[ps-1].typeTub == 'vt'){
          myLine.setAttribute('class', 'path');
        }
        else{
          myLine.setAttribute('class', 'path-dash');
        }
        svg_lienzo.appendChild(myLine);
      }
    }
  }

  for(ps = posicionLienzo + 1; ps < ruta.length; ps++){
    if(ruta[ps].type == 'H')
      break;
    if(ruta[ps].type == 'P' && ruta[ps+1] && ruta[ps+1].type == 'P'){
      //dibujarValvula(ruta[ps], 8)
      if(ruta[ps-1] && ruta[ps-1].type == 'P' && (ruta[ps-1].diametro == '14' && ruta[ps].diametro == '1') && modo != 'ypfb')
        dibujarReduccion(ruta[ps], 8)
      else if(ruta[ps-1] && ruta[ps-1].type == 'P' && (ruta[ps-1].diametro == '1' && ruta[ps].diametro == '34') && modo != 'ypfb')
        dibujarReduccion(ruta[ps], 8)
      else if(ruta[ps-1] && ruta[ps-1].type == 'P' && (ruta[ps-1].diametro == '34' && ruta[ps].diametro == '12'))
        dibujarReduccion(ruta[ps], 8)
      else if(ruta[ps-1] && ruta[ps-1].type != 'P'){
        var miPivB = -1;
        for(fb = ps-1; fb > 1; fb--)
          if(ruta[fb].type == 'P' && ruta[fb-1].type == 'P'){
            miPivB = fb-1;
            break;
          }
        if(miPivB > -1){
          if(ruta[miPivB].diametro == '14' && ruta[ps].diametro == '1' && modo != 'ypfb')
            dibujarReduccion(ruta[ps], 8)
          else if(ruta[miPivB].diametro == '1' && ruta[ps].diametro == '34' && modo != 'ypfb')
            dibujarReduccion(ruta[ps], 8)
          else if(ruta[miPivB].diametro == '34' && ruta[ps].diametro == '12')
            dibujarReduccion(ruta[ps], 8)
        }
      }

      ////////////////////////////////
      //PAST REDUCCION
      ////////////////////////////////
      /*if(ruta[ps-1] && ruta[ps-1].type == 'P' && ruta[ps-1].diametro != ruta[ps].diametro)
        dibujarReduccion(ruta[ps], 8)
      else if(ruta[ps-3] && ruta[ps-2] && ruta[ps-1] && ruta[ps-1].type == 'S' && ruta[ps-3].type == 'P' && ruta[ps-2].type == 'P' && ruta[ps-3].diametro != ruta[ps].diametro)
        dibujarReduccion(ruta[ps], 8)
      else if(ruta[ps-4] && ruta[ps-3] && ruta[ps-2] && ruta[ps-1] && ruta[ps-1].type == 'S' && ruta[ps-2].type == 'H' && ruta[ps-3].type == 'P' && ruta[ps-4].type == 'P' && ruta[ps-4].diametro != ruta[ps].diametro)
        dibujarReduccion(ruta[ps], 8)*/

      if(ruta[ps].valvula)
        dibujarValvulaLargoEspecifico(ruta[ps], ruta[ps+1], (10*escala/100))
      if(ruta[ps].valvulaPunto)
        dibujarValvulaLargo(ruta[ps], (10*escala/100))
    }
  }
  cambiarGrosorLinea(grosorLinea);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function dibujarRutaAntiguo(numeroDeLienzo, ruta){

  //console.log('***********************************');
  //console.log(ruta);
  //console.log('***********************************');
  var positionCounter = -1;
  var pv = 0;

  //var permitirPrimerCodo

  while(positionCounter <= numeroDeLienzo && pv < ruta.length){
    if(ruta[pv].type == 'H'){
      positionCounter++;
      //console.log(ruta[pv])
      //console.log(positionCounter)
    }
    else if(ruta[pv].type == 'S'){
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


}

function limpiarEnLienzo(){
  var miLienzo = obtenerPosicionLienzoMarcado();

  var miId = ctl_lienzoBotonera.children[miLienzo].id;
  var miNombre = ctl_lienzoBotonera.children[miLienzo].innerHTML;
  ponerAlerta(miLienzo, miId+' '+miNombre);

  for(cls = 0; cls < grafo.length; cls++){
    var pivoteInicial = -1;
    var pivoteFinal = -1;
    for(grC = 0; grC < grafo[cls].length; grC++){
      if(grafo[cls][grC].id == miId){
        pivoteInicial = grC;
        break;
      }
    }
    if(pivoteInicial > -1){
      for(grC = pivoteInicial+1; grC < grafo[cls].length; grC++){
        if(grafo[cls][grC].type == 'H'){
          pivoteFinal = grC;
          break;
        }
      }
    }
    if(pivoteFinal == -1)
      pivoteFinal = grafo[cls].length;

    if(pivoteInicial > -1){
      var recorrido = pivoteFinal-pivoteInicial-1;
      for(grC = pivoteInicial+1; grC < grafo[cls].length-recorrido; grC++){
        grafo[cls][grC] = JSON.parse(JSON.stringify(grafo[cls][grC+recorrido]));
      }
      for(grC = 0; grC < recorrido; grC++){
        grafo[cls].pop();
      }
    }
    ponerAlerta('grafo '+ cls, pivoteInicial +' '+ pivoteFinal);
  }
  console.log(grafo);
  dibujarEnLienzo(miLienzo);
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
  //if(ctl_adviceErrors.children.length > 0)
    //setTimeout(limpiarAlertas, 10000);
}

function ponerAccionEjecutada(titulo, contenido){

  var myAlert = document.createElement('h2');
  myAlert.innerHTML = titulo;
  var myAlertContent = document.createElement('p');
  myAlertContent.innerHTML = contenido;
  ctl_adviceErrors.insertBefore(myAlertContent, ctl_adviceErrors.children[0]);
  ctl_adviceErrors.insertBefore(myAlert, ctl_adviceErrors.children[0]);
  //if(ctl_adviceErrors.children.length > 0)
    //setTimeout(limpiarAlertas, 10000);
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

function calcularNuevoPunto(pOrigen, distancia, angulo, miEscala){
  //console.log(tipoTuberia);
  //console.log(diametro);
  var miPunto = new Object();
  miPunto.type = 'P';
  var miDistancia = ((distancia * 100) * 37.95)/miEscala;
  miPunto.x = parseFloat((miDistancia * Math.cos(angulo * Math.PI/180) + pOrigen.x).toFixed(2));
  miPunto.y = parseFloat((-miDistancia * Math.sin(angulo * Math.PI/180) + pOrigen.y).toFixed(2));

  //console.log(miPunto.x - pOrigen.x);
  //console.log(miPunto.y - pOrigen.y);
  //console.log(pOrigen.y);
  //console.log(miPunto.y);
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
  console.log(lastVector)
  //reacomodamos todos los segmentos que se veran afectados


  //fin
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

function insertarPuntoEnTrazo(miTrazoR, punto, recorridoX, recorridoY, miPuntero, tipoTuberia){

  //console.log(miNuevoPunto.x - miPunto[0]);
  //console.log(miNuevoPunto.y - miPunto[1]);
  //console.log(grafo[miPuntero[0]][miPuntero[8]]);
  //console.log(miPuntero[0]);
  //console.log(miPuntero[8]);
  var miAnteriorPunto = new Object();
  miAnteriorPunto =JSON.parse(JSON.stringify(grafo[miPuntero[0]][miPuntero[8]]));
  miAnteriorPunto.typeTub = tipoTuberia;

  for(hSc = 0; hSc < miTrazoR.length; hSc++){
    //console.log(grafo[hSc][miHanoiSegmentos[hSc][6]])
    if(miTrazoR[hSc].length > 0){//OBS
      var miPivT = 0;

      if(miTrazoR[hSc].length == 10)
        miPivT = miTrazoR[hSc][8];
      else
        miPivT = miTrazoR[hSc][4]+1;

      for(mkT = miPivT; mkT < grafo[hSc].length; mkT++){
        //console.log(grafo[hSc][mkT])
        if(grafo[hSc][mkT].type == 'P'){
          //console.log(grafo[hSc][mkT].x + recorridoX)
          //console.log(grafo[hSc][mkT].y + recorridoY)

          grafo[hSc][mkT].x = grafo[hSc][mkT].x + recorridoX;
          grafo[hSc][mkT].y = grafo[hSc][mkT].y + recorridoY;

          //var myCircle = document.createElementNS(svgNS, 'circle');
          //myCircle.setAttribute('cx', grafo[hSc][mkT].x);
          //myCircle.setAttribute('cy', grafo[hSc][mkT].y);
          //myCircle.setAttribute('class', 'circle-marker-drawMode');
          //myCircle.setAttribute('r', 5);
          //svg_lienzo.appendChild(myCircle);
        }
        if(grafo[hSc][mkT].type == 'H')
          break;
        if(grafo[hSc][mkT].type == 'S')
          break;
      }

    }
  }

  var cDown = grafo[miPuntero[0]].length;
  for(rp = grafo[miPuntero[0]].length-1; rp >= miPuntero[8]; rp--){

    //console.log(grafo[miPuntero[0]][rp])
    if(grafo[miPuntero[0]][rp].type == 'H'){
      var miHoja = new Array();
      miHoja = JSON.parse(JSON.stringify(grafo[miPuntero[0]][rp]));
      grafo[miPuntero[0]][cDown] = miHoja;
    }
    if(grafo[miPuntero[0]][rp].type == 'P'){
      var miPunto= new Array();
      miPunto = JSON.parse(JSON.stringify(grafo[miPuntero[0]][rp]));
      grafo[miPuntero[0]][cDown] = miPunto;
    }
    if(grafo[miPuntero[0]][rp].type == 'S'){
      var miSegmento= new Array();
      miSegmento = JSON.parse(JSON.stringify(grafo[miPuntero[0]][rp]));
      grafo[miPuntero[0]][cDown] = miSegmento;//'S';
    }
    cDown--;
  }
  grafo[miPuntero[0]][miPuntero[8]] = miAnteriorPunto;
}

function insertarPuntoEnTrazoComponentes(miTrazoR, punto, recorridoX, recorridoY, miPuntero, tipoTuberia, miGrado, miDiametro, miDistancia){

  var miAnteriorPunto = new Object();
  miAnteriorPunto = JSON.parse(JSON.stringify(grafo[miPuntero[0]][miPuntero[8]]));
  //miAnteriorPunto.typeTub = tipoTuberia;
  //console.log(miAnteriorPunto)
  for(hSc = 0; hSc < miTrazoR.length; hSc++){

    for(mkT = miTrazoR[hSc][1]+1; mkT < grafo[miTrazoR[hSc][0]].length; mkT++){
      //console.log(grafo[miTrazoR[hSc][0]][mkT])
      if(grafo[miTrazoR[hSc][0]][mkT].type == 'P'){
        grafo[miTrazoR[hSc][0]][mkT].x = grafo[miTrazoR[hSc][0]][mkT].x + recorridoX;
        grafo[miTrazoR[hSc][0]][mkT].y = grafo[miTrazoR[hSc][0]][mkT].y + recorridoY;
        grafo[miTrazoR[hSc][0]][mkT].tagX = grafo[miTrazoR[hSc][0]][mkT].tagX + recorridoX;
        grafo[miTrazoR[hSc][0]][mkT].tagY = grafo[miTrazoR[hSc][0]][mkT].tagY + recorridoY;
      }
      if(grafo[miTrazoR[hSc][0]][mkT].type == 'H' || grafo[miTrazoR[hSc][0]][mkT].type == 'S')
        break;
    }

  }

  var cDown = grafo[miPuntero[0]].length;
  for(rp = grafo[miPuntero[0]].length-1; rp >= miPuntero[8]; rp--){

    var miObjeto = new Object();
    miObjeto = JSON.parse(JSON.stringify(grafo[miPuntero[0]][rp]));
    grafo[miPuntero[0]][cDown] = miObjeto;

    cDown--;
  }

  delete grafo[miPuntero[0]][miPuntero[8]].instalacion;
  delete grafo[miPuntero[0]][miPuntero[8]].tubForro;
  delete grafo[miPuntero[0]][miPuntero[8]].medidorIzquierda;
  delete grafo[miPuntero[0]][miPuntero[8]].medidorDerecha;
  grafo[miPuntero[0]][miPuntero[8]].angulo = miGrado;
  grafo[miPuntero[0]][miPuntero[8]].typeTub = tipoTuberia;
  grafo[miPuntero[0]][miPuntero[8]].diametro = miDiametro;
  grafo[miPuntero[0]][miPuntero[8]].distancia = miDistancia;
  var mySeparationDefault = new Array();
  mySeparationDefault = getTagSeparationDefault(grafo[miPuntero[0]][miPuntero[8]]);
  console.log(mySeparationDefault)
  grafo[miPuntero[0]][miPuntero[8]].tagX = mySeparationDefault[0];
  grafo[miPuntero[0]][miPuntero[8]].tagY = mySeparationDefault[1];
  grafo[miPuntero[0]][miPuntero[8]].tagAngulo = miGrado;

  grafo[miPuntero[0]][miPuntero[8]+1] = miAnteriorPunto;
  grafo[miPuntero[0]][miPuntero[8]+1].x = punto.x;
  grafo[miPuntero[0]][miPuntero[8]+1].y = punto.y;
  grafo[miPuntero[0]][miPuntero[8]+1].tagX = grafo[miPuntero[0]][miPuntero[8]+1].tagX + recorridoX;
  grafo[miPuntero[0]][miPuntero[8]+1].tagY = grafo[miPuntero[0]][miPuntero[8]+1].tagY + recorridoY;
  //console.log(grafo[miPuntero[0]])
}

function quebrarSegmento(){
  if(modo == 'dibujo' && punteroDeDibujo.length > 0){
    console.log(punteroDeDibujo);
  }
}

function longitudDeSegmento(miGrafo, miPosicion){
  //console.log(grafo[miGrafo][miPosicion]);
  var miCounter = 0;
  for(p = miPosicion + 1; p < grafo[miGrafo].length; p++){

    //miCounter++;
    if(grafo[miGrafo][p].type == 'P')
      miCounter++;
    else
      break;
    //console.log(miCounter);
    //console.log(grafo[miGrafo][p]);

  }
  //console.log('-------------------')
  //console.log(miCounter)
  return miCounter;
}

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
    // console.log('listos para dibujar en el lienzo '+ markedPositionLienzo)//markedButton.className = 'boton';
    // console.log(punteroDeDibujo);
    // console.log(grafo);
    switch(modo){
      case 'dibujo':
        if(punteroDeDibujo.length > 0){
          distancia = parseFloat(txt_distancia.value);

          if(distancia > 0 && distancia <= limiteDistanciaTubo){
            var miPunto = new Array();
            miPunto[0] = grafo[punteroDeDibujo[0]][punteroDeDibujo[8]].x;
            miPunto[1] = grafo[punteroDeDibujo[0]][punteroDeDibujo[8]].y;
            var miTrazoParaInsertar = obtenerDatosTrozoComponentesAPartirDe(punteroDeDibujo);

            var miNuevoPunto = calcularNuevoPunto(grafo[punteroDeDibujo[0]][punteroDeDibujo[8]], distancia, grado, escala);

            insertarPuntoEnTrazoComponentes(miTrazoParaInsertar, miNuevoPunto, miNuevoPunto.x - miPunto[0], miNuevoPunto.y - miPunto[1], punteroDeDibujo, typeTub, grado, diametro, distancia);

            punteroDeDibujo[8] = punteroDeDibujo[8]+1;

            copiarGrafo(grafo, grafoEspejo);
            ponerAccionEjecutada('Trazo dibujado', 'El trazo se ha dibujado correctamente');
          }
          else if(distancia > limiteDistanciaTubo){
            ponerAlerta('Trazo mayor al límite', 'El trazo se ha partido en pedazos y se ha puesto una cupla de forma automática');

            var iteraciones = parseInt(distancia/limiteDistanciaTubo);

            for(it = 0; it <iteraciones+1; it++){
              // console.log(distancia);
              var miPunto2 = new Array();
              miPunto2[0] = grafo[punteroDeDibujo[0]][punteroDeDibujo[8]].x;
              miPunto2[1] = grafo[punteroDeDibujo[0]][punteroDeDibujo[8]].y;
              var miTrazoParaInsertar2 = obtenerDatosTrozoComponentesAPartirDe(punteroDeDibujo);
              var miNuevoPunto2 = new Object();

              if(distancia > limiteDistanciaTubo){
                miNuevoPunto2 = calcularNuevoPunto(grafo[punteroDeDibujo[0]][punteroDeDibujo[8]], limiteDistanciaTubo, grado, escala);
                insertarPuntoEnTrazoComponentes(miTrazoParaInsertar2, miNuevoPunto2, miNuevoPunto2.x - miPunto2[0], miNuevoPunto2.y - miPunto2[1], punteroDeDibujo, typeTub, grado, diametro, limiteDistanciaTubo);
              }
              else{
                miNuevoPunto2 = calcularNuevoPunto(grafo[punteroDeDibujo[0]][punteroDeDibujo[8]], distancia, grado, escala);
                insertarPuntoEnTrazoComponentes(miTrazoParaInsertar2, miNuevoPunto2, miNuevoPunto2.x - miPunto2[0], miNuevoPunto2.y - miPunto2[1], punteroDeDibujo, typeTub, grado, diametro, distancia);
              }

              //insertarPuntoEnTrazoComponentes(miTrazoParaInsertar2, miNuevoPunto2, miNuevoPunto2.x - miPunto2[0], miNuevoPunto2.y - miPunto2[1], punteroDeDibujo, typeTub, grado, diametro, distancia);

              punteroDeDibujo[8] = punteroDeDibujo[8]+1;


              copiarGrafo(grafo, grafoEspejo);

              distancia =  Math.round((distancia - limiteDistanciaTubo)*100)/100;
            }

          }


          dibujarEnLienzo(markedPositionLienzo);

          marcarPunto(punteroDeDibujo[1], punteroDeDibujo[0], punteroDeDibujo[8], modo);
        }
        else
          ponerAlerta('Error de dibujo', 'Debes marcar un punto de partida para dibujar');
        break;
      case 'edicion':
        if(punteroDeEdicion.length > 0){
          //console.log('hola editor')

          distancia = parseFloat(txt_distancia.value);
          if(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1] && grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1].type == 'P' && distancia > 0 && distancia <= limiteDistanciaTubo ){
            var miEdicionElemento = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]];
            var miPuntoRecalculado = calcularNuevoPunto(miEdicionElemento, distancia, grado, escala);


            var miTrozoARecorrer = obtenerInstalaciones([punteroDeEdicion[0], punteroDeEdicion[8]]);


            var movX = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1].x - miPuntoRecalculado.x;;
            var movY = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1].y - miPuntoRecalculado.y;;

            for(tc = 0; tc < miTrozoARecorrer.length; tc++){
              var miGrafo = miTrozoARecorrer[tc][0];
              var miPivote = miTrozoARecorrer[tc][1] + 1;

              for(gs = miPivote; gs < grafo[miGrafo].length; gs++){
                if(grafo[miGrafo][gs].type == 'H' || grafo[miGrafo][gs].type == 'S')
                  break;

                grafo[miGrafo][gs].x = grafoEspejo[miGrafo][gs].x - movX;
                grafo[miGrafo][gs].y = grafoEspejo[miGrafo][gs].y - movY;
                grafo[miGrafo][gs].tagX = grafoEspejo[miGrafo][gs].tagX - movX;
                grafo[miGrafo][gs].tagY = grafoEspejo[miGrafo][gs].tagY - movY;

              }
            }
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].typeTub = typeTub;
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].diametro = diametro;
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].angulo = grado;
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].distancia = distancia;
            ponerAccionEjecutada('Edición exitosa', 'Se ha editado el punto correctamente.')
          }
          else if(distancia == 0 && longitudDeSegmento(punteroDeEdicion[0], punteroDeEdicion[4]) > 2/*grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1] && grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1].type == 'P' && grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+2] && grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+2].type == 'P'*/){

            ///////////////////////////////////////////////////
            //longitudDeSegmento(punteroDeEdicion[0], punteroDeEdicion[4]);

            var miEdicionElemento = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]];
            var miPuntoRecalculado = calcularNuevoPunto(miEdicionElemento, distancia, grado, escala);

            var miTrozoARecorrer = obtenerInstalaciones([punteroDeEdicion[0], punteroDeEdicion[8]]);

            var movX = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1].x - miPuntoRecalculado.x;;
            var movY = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]+1].y - miPuntoRecalculado.y;;

            for(tc = 0; tc < miTrozoARecorrer.length; tc++){
              var miGrafo = miTrozoARecorrer[tc][0];
              var miPivote = miTrozoARecorrer[tc][1] + 1;

              for(gs = miPivote; gs < grafo[miGrafo].length; gs++){
                if(grafo[miGrafo][gs].type == 'H' || grafo[miGrafo][gs].type == 'S')
                  break;

                grafo[miGrafo][gs].x = grafoEspejo[miGrafo][gs].x - movX;
                grafo[miGrafo][gs].y = grafoEspejo[miGrafo][gs].y - movY;
                grafo[miGrafo][gs].tagX = grafoEspejo[miGrafo][gs].tagX - movX;
                grafo[miGrafo][gs].tagY = grafoEspejo[miGrafo][gs].tagY - movY;

              }
            }
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].typeTub = typeTub;
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].diametro = diametro;
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].angulo = grado;
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].distancia = distancia;
            grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].tagAngulo = grado;
            //console.log('hola sons')
            //console.log(miTrozoARecorrer)


            var ancestro = new Array();
            var miTrozoAEliminar = new Array();
            if(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].instalacion){
              //console.log(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].instalacion)
              ancestro[0] = parseInt(grafo[punteroDeEdicion[0]][punteroDeEdicion[8]].instalacion);
              for(ra = 0; ra < grafo[ancestro[0]].length; ra++){
                //console.log(grafo[ancestro[0]][ra]);
                if(grafo[ancestro[0]][ra].padre){
                  ancestro[1] = ra;
                  break;
                }

              }
            }
              //console.log('ancestro')
              //console.log(ancestro)
            if(ancestro.length == 2)
              miTrozoAEliminar = obtenerInstalacionesHojas(ancestro);

            for(rlg = punteroDeEdicion[8]; rlg < grafo[punteroDeEdicion[0]].length-1; rlg++){
              grafo[punteroDeEdicion[0]][rlg] = JSON.parse(JSON.stringify(grafo[punteroDeEdicion[0]][rlg+1]));
            }
            grafo[punteroDeEdicion[0]].pop();

            //console.log(miTrozoAEliminar);
            ordenarTrozoAEliminar(miTrozoAEliminar);
            for(dr = 0 ; dr < miTrozoAEliminar.length; dr++){
              delGraph('instDel'+miTrozoAEliminar[dr][0]);
            }
            //console.log(miTrozoAEliminar);

            ponerAccionEjecutada('Punto eliminado', 'Se ha eliminado el punto correctamente.')
          }

          grafoEspejo = new Array();
          copiarGrafo(grafo, grafoEspejo);

          //console.log(grafo)
          //console.log(grafoEspejo);

          dibujarEnLienzo(markedPositionLienzo);
          marcarPuntoEdicion(punteroDeEdicion[1], punteroDeEdicion[0], punteroDeEdicion[8], modo);
        }
        break;
      default :
        punteroDeDibujo = new Array();
        punteroDeEdicion = new Array();
        ponerAlerta('Cambia el modo', 'Cambia el modo del menu de la derecha, debe estar en modo dibujo.');
        break;

    }

    ///////////////////////////////////////////////////////////////
    document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
    document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
    ///////////////////////////////////////////////////////////////


    /*if(punteroDeDibujo.length > 0){
      if(modo == 'dibujo'){


      }
      else{
        punteroDeDibujo = new Array();
        ponerAlerta('Cambia el modo', 'Cambia el modo del menu de la derecha, debe estar en modo dibujo.');
      }
    }*/


  }
  else{
    ponerAlerta('Error de trazado', 'Debes marcar una pestaña del lienzo');
  }

}

function ordenarTrozoAEliminar(trozoAEliminar){

  for(t = 0; t < trozoAEliminar.length-1; t++){

    var maxi = trozoAEliminar[t][0];
    //console.log(maxi);
    //console.log('---------------------------');
    var posIni = t;
    var posFin = t;
    for(u = t + 1; u < trozoAEliminar.length; u++){
      //console.log(trozoAEliminar[u][0]);
      //console.log('**************************');
      if(trozoAEliminar[u][0] > maxi){
        maxi = trozoAEliminar[u][0];
        posFin = u;
        var tempArray = new Array();
        tempArray = trozoAEliminar[posIni];
        trozoAEliminar[posIni] = trozoAEliminar[posFin].slice();
        trozoAEliminar[posFin] = tempArray;

      }
    }
  }
  //console.log(trozoAEliminar);
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

function verificarSiExisteSiguienteSegmento(miGrafo, miPosicion){
  for(vc = miPosicion; vc < grafo[miGrafo].length; vc++){
    if(grafo[miGrafo][vc].type == 'H')
      return false;
    if(grafo[miGrafo][vc].type == 'S')
      return true;
  }
  return false;
}

function verificarSeleccionExtremo(px, py, tolerancia, p1){
  var distanciaPuntoPunto = Math.sqrt(Math.pow((p1.x-px),2)+Math.pow((p1.y-py), 2));

  if(distanciaPuntoPunto < tolerancia)
    return true;

  return false;

}

function verificarSeleccionTag(px, py, toleranciaTag, p1){
  var distanciaPuntoPunto = Math.sqrt(Math.pow((p1.tagX-px),2)+Math.pow((p1.tagY-py), 2));

  if(distanciaPuntoPunto < toleranciaTag)
    return true;

  return false;

}

function verificarSeleccionTagExtra(px, py, miTolerancia, px1, py1){
  var distanciaPuntoPunto = Math.sqrt(Math.pow((px1-px),2)+Math.pow((py1-py), 2));

  if(distanciaPuntoPunto < miTolerancia)
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



function obtenerPositionExtremo(numHoja, tolerancia, px, py){
  var positionData = new Array();
  for(pg = 0; pg < grafo.length; pg++){
    //console.log(grafo[pg]);
    var hCounter = -1;
    var sCounter = -1;
    for(pl = 0; pl < grafo[pg].length; pl++){
      //console.log(grafo[pg][pl]);
      if(grafo[pg][pl].type == 'H'){
        hCounter++;
        sCounter = -1;
      }

      if(grafo[pg][pl] == 'S')
        sCounter++;

      if(hCounter == numHoja){
        if(grafo[pg][pl].type == 'P')
          if(verificarSeleccionExtremo(px, py, tolerancia, grafo[pg][pl])){
            console.log('interseccion grafo: '+pg);
            console.log('segmento: '+ sCounter);
            console.log('posicion: '+ pl);
            positionData[0] = pg;
            positionData[1] = sCounter;
            positionData[2] = pl;
            return positionData;
          }

      }
      if(hCounter > numHoja)
        break;
    }
  }
  return positionData;
}

function obtenerPosicionRecta(numHoja, tolerancia, px, py){
  var positionData = new Array();
  for(pg = 0; pg < grafo.length; pg++){
    //console.log(grafo[pg]);
    var hCounter = -1;
    var sCounter = -1;
    for(pl = 0; pl < grafo[pg].length-1; pl++){
      //console.log(grafo[pg][pl]);
      if(grafo[pg][pl].type == 'H'){
        hCounter++;
        sCounter = -1;
      }

      if(grafo[pg][pl] == 'S')
        sCounter++;

      if(hCounter == numHoja){
        if(grafo[pg][pl].type == 'P' && grafo[pg][pl+1].type == 'P')
          if(verificarInterseccionPuntoRecta(px, py, tolerancia, grafo[pg][pl], grafo[pg][pl+1])){
            console.log('interseccion grafo: '+pg);
            console.log('segmento: '+ sCounter);
            console.log('posicion: '+ pl);
            positionData[0] = pg;
            positionData[1] = sCounter;
            positionData[2] = pl;
            return positionData;
          }

      }
      if(hCounter > numHoja)
        break;
    }
  }
  return positionData;
}

function obtenerPosicionSegmento(numHoja, tolerancia, px, py){
  //console.log('hoola')
  var positionData = new Array();
  for(pg = 0; pg < grafo.length; pg++){
    var hCounter = -1;
    var sCounter = -1;
    var sp = -1;
    for(pl = 0; pl < grafo[pg].length-1; pl++){
      if(grafo[pg][pl].type == 'H'){
        hCounter++;
        sCounter = -1;
      }

      if(grafo[pg][pl] == 'S'){
        sCounter++;
        sp = pl;
      }


      if(hCounter == numHoja){
        if(grafo[pg][pl].type == 'P' && grafo[pg][pl+1].type == 'P')
          if(verificarInterseccionPuntoRecta(px, py, tolerancia, grafo[pg][pl], grafo[pg][pl+1])){
            console.log('interseccion grafo: '+pg);
            console.log('segmento: '+ sCounter);
            console.log('posicion: '+ pl);
            positionData[0] = pg;
            positionData[1] = sp;
            positionData[2] = pl;
            return positionData;
          }

      }
      if(hCounter > numHoja)
        break;
    }
  }
  return positionData;
}

function obtenerPosicionGrafo(numHoja, tolerancia, px, py){
  //console.log('hoola')
  var positionData = new Array();
  for(pg = 0; pg < grafo.length; pg++){
    var hCounter = -1;
    var sCounter = -1;
    var sp = -1;
    var gp = -1;

    for(pl = 0; pl < grafo[pg].length-1; pl++){
      if(grafo[pg][pl].type == 'H'){
        hCounter++;
        gp = pl;
        sCounter = -1;
      }

      if(grafo[pg][pl] == 'S'){
        sCounter++;
        sp = pl;
      }


      if(hCounter == numHoja){
        if(grafo[pg][pl].type == 'P' && grafo[pg][pl+1].type == 'P')
          if(verificarInterseccionPuntoRecta(px, py, tolerancia, grafo[pg][pl], grafo[pg][pl+1])){
            console.log('interseccion grafo: '+ pg);
            console.log('segmento: '+ sp);
            console.log('posicion: '+ pl);
            positionData[0] = pg;
            positionData[1] = gp+1;
            positionData[2] = pl;
            return positionData;
          }

      }
      if(hCounter > numHoja)
        break;
    }
  }
  return positionData;
}

function obtenerPosicionesCirculosGrandesExtra(numHoja, miTolerancia, px, py){
  for(cge = 1; cge < circulosExtra.length; cge = cge + 2){
    // console.log(circulosExtra[cge]);
    // console.log(numHoja);
    // console.log(px);
    // console.log(py);
    if(circulosExtra[cge].hoja == numHoja && Math.sqrt(Math.pow(Math.abs(px-circulosExtra[cge].x), 2)+Math.pow(Math.abs(py-circulosExtra[cge].y), 2)) < circulosExtra[cge].r)
    // {
      // console.log("@@@@@");
      // console.log(cge);
      return [cge];
    //   break;
    // }
  }
  return new Array();
}

function obtenerPosicionesTagExtra(numHoja, miTolerancia, px, py){
  for(rte = 0; rte < tagsExtra.length; rte++){
    if(tagsExtra[rte].hoja == numHoja && verificarSeleccionTagExtra(px, py, miTolerancia, tagsExtra[rte].x, tagsExtra[rte].y)){

      return [rte];
      break;
    }
  }
  return new Array();
}

function obtenerPosicionesTag(numHoja, miTolerancia, px, py){
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

      if(grafo[pg][pl].type == 'S'){
        sCounter++;
        posSegmento = pl;
      }


      if(hCounter == numHoja){
        if(grafo[pg][pl].type == 'P' && grafo[pg][pl+1].type == 'P'){

          pCounter++;
          posPoint = pl;

          rCounter++;
          posRecta = pl;




          if(verificarSeleccionTag(px, py, miTolerancia, grafo[pg][pl])){
            positionData[0] = pg;
            positionData[1] = hCounter;
            positionData[2] = posHoja;
            positionData[3] = sCounter;
            positionData[4] = posSegmento;
            positionData[5] = rCounter;
            positionData[6] = posRecta;
            positionData[7] = pCounter;
            positionData[8] = posPoint;
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

function obtenerPosiciones(numHoja, miTolerancia, px, py){
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

      if(grafo[pg][pl].type == 'S'){
        sCounter++;
        posSegmento = pl;
      }


      if(hCounter == numHoja){
        if(grafo[pg][pl].type == 'P' && grafo[pg][pl+1].type == 'P'){

          pCounter++;
          posPoint = pl;

          rCounter++;
          posRecta = pl;

          if(verificarInterseccionPuntoRecta(px, py, miTolerancia, grafo[pg][pl], grafo[pg][pl+1])){
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

            if(verificarSeleccionExtremo(px, py, miTolerancia, grafo[pg][pl])){
              positionData[7] = pCounter;
              positionData[8] = posPoint;
            }
            else if(verificarSeleccionExtremo(px, py, miTolerancia, grafo[pg][pl+1])){
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

function obtenerPosicionesEnGrafo(numHoja, numGrafo, tolerancia, px, py){
  //console.log(numHoja);
  var positionData = new Array();
  for(pg = numGrafo; pg < numGrafo+1; pg++){
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
                  var miSearch = obtenerPosicionesHanoi_4(miLienzo, 0.5, hanoi_5[ch2][ch5].x, hanoi_5[ch2][ch5].y, hanoi_4);
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

function buscarPosicionEnPadre(miGrafo, miInstalacion){
  for(i = 0; i < grafo[miGrafo].length; i++){
    if(grafo[miGrafo][i].instalacion == miInstalacion)
      return i;
  }
  return -1;
}

function buscarPosicionEnInstalacion(miGrafo, miPadre){
  for(i = 0; i < grafo[miGrafo].length; i++){
    if(grafo[miGrafo][i].padre == miPadre)
      return i;
  }
  return -1;
}

function obtenerMayorAncestro(miGrafo, miPosicion){
  var miMayorAncestro = new Array();
  var j = miPosicion;
  do{
    if(grafo[miGrafo][j].type =='S'){
      if(!grafo[miGrafo][j].padre)
        break;
      else{
        var miNuevoGrafo = parseInt(grafo[miGrafo][j].padre);
        j = buscarPosicionEnPadre(miNuevoGrafo, miGrafo);
        miGrafo = miNuevoGrafo;
      }
    }
    j--;
  }while(j >= 0);
  miMayorAncestro[0] = miGrafo;
  miMayorAncestro[1] = j;

  return miMayorAncestro;
}

function obtenerPosicionInstalacion(miGrafo, miInstalacion){
  for(k = 0; k < grafo[miGrafo].length; k++){
    if(grafo[miGrafo][k].padre == miInstalacion)
      return k;
  }
  return -1;
}

function obtenerPosicionPadre(miGrafo, miPadre){
  for(k = 0; k < grafo[miGrafo].length; k++){
    if(grafo[miGrafo][k].instalacion == miPadre)
      return k;
  }
  return -1;
}

function obtenerInstalacionesDeUnAncestro(miAncestro){
  var misInstalaciones = new Array();
  for(i = miAncestro[1]+1; i < grafo[miAncestro[0]].length; i++){
    if(grafo[miAncestro[0]][i].type == 'S' || grafo[miAncestro[0]][i].type == 'H')
      break;
    else{
      if(grafo[miAncestro[0]][i].instalacion){
        var miIndiceInstalacion = parseInt(grafo[miAncestro[0]][i].instalacion);
        var miPar = new Array();
        miPar[0] = miIndiceInstalacion
        miPar[1] = obtenerPosicionInstalacion(miIndiceInstalacion, miAncestro[0]);
        misInstalaciones.push(miPar);
      }
    }
  }
  return misInstalaciones;
}

function obtenerInstalacionesDeUnAncestroHojas(miAncestro){
  var misInstalaciones = new Array();
  for(i = 0/*miAncestro[1]+1*/; i < grafo[miAncestro[0]].length; i++){
    //if(grafo[miAncestro[0]][i].type == 'S' || grafo[miAncestro[0]][i].type == 'H')
      //break;
    //else{
      if(grafo[miAncestro[0]][i].instalacion){
        console.log(miAncestro)
        var miIndiceInstalacion = parseInt(grafo[miAncestro[0]][i].instalacion);
        var miPar = new Array();
        miPar[0] = miIndiceInstalacion
        miPar[1] = obtenerPosicionInstalacion(miIndiceInstalacion, miAncestro[0]);
        misInstalaciones.push(miPar);
      }
    //}
  }
  return misInstalaciones;
}

function obtenerInstalaciones(miAncestro){
  var instalacionesTotales = new Array();
  var instalacionesParciales = new Array();
  instalacionesParciales = obtenerInstalacionesDeUnAncestro(miAncestro);
  instalacionesTotales.push(miAncestro);
  while(instalacionesParciales.length > 0){

    var parAnalisis = instalacionesParciales.pop();
    instalacionesParciales = instalacionesParciales.concat(obtenerInstalacionesDeUnAncestro(parAnalisis));
    instalacionesTotales.push(parAnalisis);

  }
  return instalacionesTotales;
  //console.log(instalacionesTotales)
}

function obtenerInstalacionesHojas(miAncestro){
  var instalacionesTotales = new Array();
  var instalacionesParciales = new Array();
  instalacionesParciales = obtenerInstalacionesDeUnAncestroHojas(miAncestro);
  //console.log(obtenerInstalacionesDeUnAncestroHojas(miAncestro));
  instalacionesTotales.push(miAncestro);
  while(instalacionesParciales.length > 0){

    var parAnalisis = instalacionesParciales.pop();
    instalacionesParciales = instalacionesParciales.concat(obtenerInstalacionesDeUnAncestroHojas(parAnalisis));
    instalacionesTotales.push(parAnalisis);
    //console.log(instalacionesTotales)
  }
  //console.log(instalacionesTotales)
  return instalacionesTotales;

}

function obtenerTagComponentes(misCoordenadas){
  var miLienzo = obtenerPosicionLienzoMarcado();
  var miPosicionTag = obtenerPosicionesTag(miLienzo, toleranciaTag, misCoordenadas[0], misCoordenadas[1]);
  if(miPosicionTag.length > 0)
    return miPosicionTag;
  return new Array();
}

function obtenerCirculosGrandesExtra(misCoordenadas){
  // console.log('iniciando busqueda en circulos extra grandes')
  // console.log(misCoordenadas);
  var miLienzo = obtenerPosicionLienzoMarcado();
  var miPosicionCirculosGrandeExtra = obtenerPosicionesCirculosGrandesExtra(miLienzo, tolerancia, misCoordenadas[0], misCoordenadas[1]);
  // console.log(miPosicionCirculosGrandeExtra);
  if(miPosicionCirculosGrandeExtra.length > 0)
    return miPosicionCirculosGrandeExtra;
  return new Array();
}


function obtenerTagExtra(misCoordenadas){
  //console.log('iniciando busqueda')
  var miLienzo = obtenerPosicionLienzoMarcado();
  var miPosicionTag = obtenerPosicionesTagExtra(miLienzo, toleranciaTag, misCoordenadas[0], misCoordenadas[1]);
  if(miPosicionTag.length > 0)
    return miPosicionTag;
  return new Array();
}

function obtenerTrozoPorComponentes(misCoordenadas){
  var miLienzo = obtenerPosicionLienzoMarcado();
  //numHoja, tolerancia, px, py
  var miPosicion = obtenerPosiciones(miLienzo, tolerancia, misCoordenadas[0], misCoordenadas[1]);
  //console.log(miPosicion);
  if(miPosicion.length > 0){
    var my = obtenerMayorAncestro(miPosicion[0], miPosicion[8]);
    var sons = obtenerInstalaciones(my);
    return sons;
    //marcarTrozoComponentes(sons);
  }
  return new Array();
}

function obtenerDatosTrozoAPartirDe(miPuntero){

  //var misCoordenadas = punto;//obtenerCoordenadasLienzo(e);
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

  var miPosicion = miPuntero;//obtenerPosicionesHanoi_4(miLienzo, 5, misCoordenadas[0], misCoordenadas[1], hanoi_4);
  console.log(miPosicion)

  if(miPosicion.length > 0){

    hanoi_2[miPosicion[0]] = miPosicion;
    hanoi_2[miPosicion[0]][9] = 'origen';
    hanoi_4[miPosicion[0]] = new Array();
    //console.log(hanoi_4)
    //console.log(hanoi_2)
    //console.log('-----------------------')
    //console.log(hanoi_2)
    //console.log(hanoi_4)

    var ini = true;//variable creada
    var iniPiv = 0;//variable creada

    var encontrado = false;
    do{
      encontrado = false;
      for(ch2 = 0; ch2 < hanoi_2.length; ch2++){
        //console.log(hanoi_2[ch2])
        if(hanoi_2[ch2].length > 0){
          //console.log(hanoi_4[ch2].length);
          //console.log(hanoi_2[ch2][0]);
          //console.log(hanoi_2[ch2][8]);
          //console.log(hanoi_4[hanoi_2[ch2][0]].length);


          if(ini){
            iniPiv = hanoi_2[ch2][8]+1;
            ini = false;
          }
          else{
            iniPiv = hanoi_2[ch2][4]+1;
          }

          for(ch5 = iniPiv; ch5 < hanoi_5[ch2].length; ch5++){

            if(hanoi_5[ch2][ch5].type == 'P'){
              //console.log(hanoi_5[ch2][ch5])
              //console.log('***********')
              for(ch4 = 0; ch4 < hanoi_4.length; ch4++){
                //console.log(hanoi_4[ch4])
                //console.log(hanoi_5[ch])
                if(hanoi_4[ch4].length > 0){
                  var miSearch = obtenerPosicionesHanoi_4(miLienzo, 0.2, hanoi_5[ch2][ch5].x, hanoi_5[ch2][ch5].y, hanoi_4);
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

function obtenerDatosTrozoComponentesAPartirDe(miPuntero){

  var trozoParaRecorrer = new Array();
  trozoParaRecorrer[0] = [miPuntero[0], miPuntero[8]]
  var miLienzo = obtenerPosicionLienzoMarcado();

  for(rc = miPuntero[8]; rc < grafo[miPuntero[0]].length; rc++){

    if(grafo[miPuntero[0]][rc].type == 'S' || grafo[miPuntero[0]][rc].type == 'H')
      break;
    else{
      if(grafo[miPuntero[0]][rc].instalacion){
        var gIns = parseInt(grafo[miPuntero[0]][rc].instalacion);

        var gPos = buscarPosicionEnInstalacion(gIns, miPuntero[0]);

        trozoParaRecorrer = trozoParaRecorrer.concat(obtenerInstalaciones([gIns, gPos]))
      }
    }

  }
  //console.log(trozoParaRecorrer)
  return trozoParaRecorrer;
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

  myCircle.setAttribute('r', 3);//5);
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


  myCircle.setAttribute('r', 4);
  svg_lienzo.appendChild(myCircle);

  var myCircle = document.createElementNS(svgNS, 'circle');
  myCircle.setAttribute('cx', grafo[miGrafo][miPosicion+1].x);
  myCircle.setAttribute('cy', grafo[miGrafo][miPosicion+1].y);
  switch(modo){
    case 'dibujo':
      myCircle.setAttribute('class', 'circle-marker-drawMode');
      break;
    case 'edicion':
      myCircle.setAttribute('class', 'circle-marker-back');
      break;
    case 'mover':
      myCircle.setAttribute('class', 'circle-marker-moveMode');
    break;
  }


  myCircle.setAttribute('r', 4);
  svg_lienzo.appendChild(myCircle);

  setValueRange(controlRange.value);
  setControlRange(valueRange.value);

}

function marcarRectaEdicion(miLienzo, miGrafo, miPosicion, miPosicionMarca, miModo){
  limpiarLienzo();
  dibujarEnLienzo(miLienzo);

  var myCircle = document.createElementNS(svgNS, 'circle');
  myCircle.setAttribute('cx', grafo[miGrafo][miPosicion].x);
  myCircle.setAttribute('cy', grafo[miGrafo][miPosicion].y);
  switch(miModo){
    case 'dibujo':
      myCircle.setAttribute('class', 'circle-marker-drawMode');
      break;
    case 'edicion':
      myCircle.setAttribute('class', 'circle-marker-back');
      break;
    case 'mover':
      myCircle.setAttribute('class', 'circle-marker-moveMode');
    break;
  }


  myCircle.setAttribute('r', 3);
  svg_lienzo.appendChild(myCircle);

  var myCircle = document.createElementNS(svgNS, 'circle');
  myCircle.setAttribute('cx', grafo[miGrafo][miPosicionMarca].x);
  myCircle.setAttribute('cy', grafo[miGrafo][miPosicionMarca].y);
  switch(miModo){
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


  myCircle.setAttribute('r', 3);
  svg_lienzo.appendChild(myCircle);

  setValueRange(controlRange.value);
  setControlRange(valueRange.value);

}

function marcarPuntoEdicion(miLienzo, miGrafo, miPosicion, miModo){
  limpiarLienzo();
  dibujarEnLienzo(miLienzo);

  var myCircle = document.createElementNS(svgNS, 'circle');
  myCircle.setAttribute('cx', grafo[miGrafo][miPosicion].x);
  myCircle.setAttribute('cy', grafo[miGrafo][miPosicion].y);
  switch(miModo){
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


  myCircle.setAttribute('r', 4);
  svg_lienzo.appendChild(myCircle);

  setValueRange(controlRange.value);
  setControlRange(valueRange.value);

}


function marcarSegmento(miLienzo, miGrafo, miSegmentoPosicion, miModo){

  limpiarLienzo();
  dibujarEnLienzo(miLienzo);

  var hCounter = -1;
  var sCounter = -1;
  //console.log(grafo[miGrafo].length);
  for(pl = miSegmentoPosicion+1; pl < grafo[miGrafo].length; pl++){

    if(grafo[miGrafo][pl].type == 'P'){
      var myCircle = document.createElementNS(svgNS, 'circle');
      myCircle.setAttribute('cx', grafo[miGrafo][pl].x);
      myCircle.setAttribute('cy', grafo[miGrafo][pl].y);
      switch(miModo){
        case 'ver':
          myCircle.setAttribute('class', 'circle-marker-verSegMode');
          break;
      }
      //myCircle.setAttribute('class', 'circle-marker-drawMode');
      myCircle.setAttribute('r', 4);
      svg_lienzo.appendChild(myCircle);
    }
    else
      break;
  }

}

function marcarSegmentos(miLienzo, miGrafo, miSegmentoPosicion, miSegmentoSiguientePosicion, miModo){

  limpiarLienzo();
  dibujarEnLienzo(miLienzo);

  var hCounter = -1;
  var sCounter = -1;

  for(pl = miSegmentoPosicion+1; pl < grafo[miGrafo].length; pl++){

    if(grafo[miGrafo][pl].type == 'P'){
      var myCircle = document.createElementNS(svgNS, 'circle');
      myCircle.setAttribute('cx', grafo[miGrafo][pl].x);
      myCircle.setAttribute('cy', grafo[miGrafo][pl].y);
      switch(miModo){
        case 'ver':
          if(grafo[miGrafo][pl+1].type == 'H' || grafo[miGrafo][pl+1].type == 'S'){
            myCircle.setAttribute('class', 'circle-marker-verSegMode');
          }
          else{
            myCircle.setAttribute('class', 'circle-marker-back');
          }
          break;
      }
      myCircle.setAttribute('r', 4);
      svg_lienzo.appendChild(myCircle);
    }
    else
      break;
  }

  var my = obtenerMayorAncestro(linkSegmentWaiting[1], linkSegmentWaiting[3]);//(miPosicion[0], miPosicion[8]);
  var sons = obtenerInstalaciones(my);
  var miSaveMode = modo;
  //setMode('union');
  modo = 'union';
  marcarTrozoComponentes(sons);
  console.log(miSaveMode);
  setMode(miSaveMode);


  var myCircle = document.createElementNS(svgNS, 'circle');
  myCircle.setAttribute('cx', grafo[linkSegmentWaiting[1]][linkSegmentWaiting[3]+1].x);
  myCircle.setAttribute('cy', grafo[linkSegmentWaiting[1]][linkSegmentWaiting[3]+1].y);
  myCircle.setAttribute('class', 'circle-marker-unitSegMode');
  myCircle.setAttribute('r', 4);
  svg_lienzo.appendChild(myCircle);

  //console.log(sons);

  /*for(pl = miSegmentoSiguientePosicion+1; pl < grafo[miGrafo].length; pl++){

    if(grafo[miGrafo][pl].type == 'P'){
      var myCircle = document.createElementNS(svgNS, 'circle');
      myCircle.setAttribute('cx', grafo[miGrafo][pl].x);
      myCircle.setAttribute('cy', grafo[miGrafo][pl].y);
      switch(modo){
        case 'ver':
          if(grafo[miGrafo][pl-1].type == 'S'){
            myCircle.setAttribute('class', 'circle-marker-unitSegMode');//myCircle.setAttribute('class', 'circle-marker-verSegMode');
          }
          else{
            myCircle.setAttribute('class', 'circle-marker-back');
          }
          break;
      }
      myCircle.setAttribute('r', 4);
      svg_lienzo.appendChild(myCircle);
    }
    else
      break;
  }*/

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
      switch(modo){
        case 'ver':
          myCircle.setAttribute('class', 'circle-marker-verMode');
          break;
      }

      myCircle.setAttribute('r', 4);
      svg_lienzo.appendChild(myCircle);
    }
    if(grafo[pg][pl].type == 'H')
      break;
  }

}

function marcarTrozoComponentes(misCoordenadasTrozo){
  for(l = 0; l < misCoordenadasTrozo.length; l++){
    var gf = misCoordenadasTrozo[l][0];
    var pGf = misCoordenadasTrozo[l][1];

    for(m = pGf+1; m < grafo[gf].length; m++){

      //console.log(grafo[gf][m]);
      if(grafo[gf][m].type == 'P'){
        var myCircle = document.createElementNS(svgNS, 'circle');
        myCircle.setAttribute('cx', grafo[gf][m].x);
        myCircle.setAttribute('cy', grafo[gf][m].y);
        switch(modo){
          case 'dibujo':
            myCircle.setAttribute('class', 'circle-marker-drawMode');
            break;
          case 'edicion':
            break;
          case 'mover':
            myCircle.setAttribute('class', 'circle-marker-moveMode');
            break;
          case 'union':
            myCircle.setAttribute('class', 'circle-marker-back');//unitSegMode');
            break;
        }

        myCircle.setAttribute('r', 4);//5);
        svg_lienzo.appendChild(myCircle);
      }
      else
        break;
    }
    //console.log(misCoordenadasTrozo[l]);
  }
}

function marcarTagComponentes(miTagParaMover){

  if(miTagParaMover.length > 0){
    //limpiarLienzo();
    //dibujarEnLienzo(miTagParaMover[1]);

    var myCircle = document.createElementNS(svgNS, 'circle');
    myCircle.setAttribute('cx', grafo[miTagParaMover[0]][miTagParaMover[8]].tagX);
    myCircle.setAttribute('cy', grafo[miTagParaMover[0]][miTagParaMover[8]].tagY);

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

    myCircle.setAttribute('r', 3);//5);
    svg_lienzo.appendChild(myCircle);

    myCircle = document.createElementNS(svgNS, 'circle');
    myCircle.setAttribute('cx', grafo[miTagParaMover[0]][miTagParaMover[8]].x);
    myCircle.setAttribute('cy', grafo[miTagParaMover[0]][miTagParaMover[8]].y);

    switch(modo){
      case 'dibujo':
        myCircle.setAttribute('class', 'circle-marker-drawMode');
        break;
      case 'edicion':
        myCircle.setAttribute('class', 'circle-marker-editMode');
        break;
      case 'mover':
        myCircle.setAttribute('class', 'circle-marker-back');
        break;
    }

    //myCircle.setAttribute('class', 'circle-marker-drawMode');

    myCircle.setAttribute('r', 3);//5);
    svg_lienzo.appendChild(myCircle);

    setValueRange(controlRange.value);
    setControlRange(valueRange.value);
  }


}

function marcarTagExtra(miTagParaMover){

  if(miTagParaMover.length > 0){
    console.log(miTagParaMover)
    console.log(miTagParaMover)

    var myCircle = document.createElementNS(svgNS, 'circle');
    myCircle.setAttribute('cx', tagsExtra[miTagParaMover[0]].x);
    myCircle.setAttribute('cy', tagsExtra[miTagParaMover[0]].y);

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


    myCircle.setAttribute('r', 3);//5);
    svg_lienzo.appendChild(myCircle);

    setValueRange(controlRange.value);
    setControlRange(valueRange.value);
  }

}



function marcarTagComponentesEspejo(miTagParaMover){

  if(miTagParaMover.length > 0){
    //limpiarLienzo();
    //dibujarEnLienzo(miTagParaMover[1]);

    var myCircle = document.createElementNS(svgNS, 'circle');
    myCircle.setAttribute('cx', grafoEspejo[miTagParaMover[0]][miTagParaMover[8]].tagX);
    myCircle.setAttribute('cy', grafoEspejo[miTagParaMover[0]][miTagParaMover[8]].tagY);

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

    myCircle.setAttribute('r', 3);//5);
    svg_lienzo.appendChild(myCircle);

    myCircle = document.createElementNS(svgNS, 'circle');
    myCircle.setAttribute('cx', grafoEspejo[miTagParaMover[0]][miTagParaMover[8]].x);
    myCircle.setAttribute('cy', grafoEspejo[miTagParaMover[0]][miTagParaMover[8]].y);

    switch(modo){
      case 'dibujo':
        myCircle.setAttribute('class', 'circle-marker-drawMode');
        break;
      case 'edicion':
        myCircle.setAttribute('class', 'circle-marker-editMode');
        break;
      case 'mover':
        myCircle.setAttribute('class', 'circle-marker-back');
        break;
    }

    //myCircle.setAttribute('class', 'circle-marker-drawMode');

    myCircle.setAttribute('r', 3);//5);
    svg_lienzo.appendChild(myCircle);

    setValueRange(controlRange.value);
    setControlRange(valueRange.value);
  }


}

function marcarTrozoComponentesEspejo(misCoordenadasTrozo){
  for(l = 0; l < misCoordenadasTrozo.length; l++){
    var gf = misCoordenadasTrozo[l][0];
    var pGf = misCoordenadasTrozo[l][1];

    for(m = pGf+1; m < grafoEspejo[gf].length; m++){

      //console.log(grafo[gf][m]);
      if(grafoEspejo[gf][m].type == 'P'){
        var myCircle = document.createElementNS(svgNS, 'circle');
        myCircle.setAttribute('cx', grafoEspejo[gf][m].x);
        myCircle.setAttribute('cy', grafoEspejo[gf][m].y);
        switch(modo){
          case 'dibujo':
            myCircle.setAttribute('class', 'circle-marker-drawMode');
            break;
          case 'edicion':
            break;
          case 'mover':
            myCircle.setAttribute('class', 'circle-marker-moveMode');
            break;
        }

        myCircle.setAttribute('r', 3);//5);
        svg_lienzo.appendChild(myCircle);
      }
      else
        break;
    }
    //console.log(misCoordenadasTrozo[l]);
  }
  cambiarGrosorLinea(grosorLinea)
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
          switch(modo){
            case 'dibujo':
              myCircle.setAttribute('class', 'circle-marker-drawMode');
              break;
            case 'edicion':
              break;
            case 'mover':
              myCircle.setAttribute('class', 'circle-marker-moveMode');
              break;
          }

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



function marcarGrafoDeLaLista(numeroGrafo){
  var miGrafoPos = numeroGrafo.substring(7);
  var miNumeroLienzo = obtenerPosicionLienzoMarcado();
  var hCounter = -1;
  var misAutoCoords = new Array();
  for(grl = 0; grl < grafo[miGrafoPos].length; grl++){
    if(grafo[miGrafoPos][grl].type == 'H')
      hCounter++;
    if(hCounter > miNumeroLienzo)
      break;
    else if(hCounter == miNumeroLienzo){
      if(grafo[miGrafoPos][grl].type == 'P'){
        misAutoCoords[0] = grafo[miGrafoPos][grl].x;
        misAutoCoords[1] = grafo[miGrafoPos][grl].y;
        break;
      }
    }
  }
  if(misAutoCoords.length == 2){
    var miPosicion = obtenerPosicionesEnGrafo(miNumeroLienzo, miGrafoPos, 5, misAutoCoords[0], misAutoCoords[1]);
    console.log(miPosicion[2])
    //marcarGrafo(miPosicion[1], miPosicion[0], miPosicion[2], modo);
    //modo ver especial solo para esta instancia
    marcarGrafo(miNumeroLienzo, miGrafoPos, miPosicion[2], 'ver')
  }
  else{
    dibujarEnLienzo(miNumeroLienzo)
    ponerAlerta('Instalación no encontrada', 'La instalación no se encuentra en esta hoja.')
  }

}

function romperSegmento(e){
  var misCoordenadas = obtenerCoordenadasLienzo(e);
  //console.log(brokenSegmentWaiting);
  for(sb = brokenSegmentWaiting[2]+1; sb < grafo[brokenSegmentWaiting[1]].length; sb++){

    if(grafo[brokenSegmentWaiting[1]][sb].type == 'S')
      break;
    //unto
    //console.log(grafo[brokenSegmentWaiting[1]][sb]);

    if(distanciaPuntoPunto(misCoordenadas[0], misCoordenadas[1], grafo[brokenSegmentWaiting[1]][sb]) < tolerancia){
      //console.log(grafo[brokenSegmentWaiting[1]][sb]);
      if(grafo[brokenSegmentWaiting[1]][sb-1].type != 'P' || grafo[brokenSegmentWaiting[1]][sb+1].type != 'P')
        ponerAlerta('Imposible romper', 'Se ha seleccionado un extremo, no se puede romper un segmento por los extremos.');
      else{
        var grafoAuxiliar = new Array();
        var recAux = 0;
        for(gas = sb; gas < grafo[brokenSegmentWaiting[1]].length; gas++){
          //console.log(grafo[brokenSegmentWaiting[1]][gas]);
          grafoAuxiliar[recAux] = JSON.parse(JSON.stringify(grafo[brokenSegmentWaiting[1]][gas]));
          recAux++
        }
        //console.log(grafoAuxiliar);
        var miObject = new Object();
        miObject.type = grafo[brokenSegmentWaiting[1]][sb].type;
        miObject.x = grafo[brokenSegmentWaiting[1]][sb].x;
        miObject.y = grafo[brokenSegmentWaiting[1]][sb].y;

        grafo[brokenSegmentWaiting[1]][sb] = new Object();
        grafo[brokenSegmentWaiting[1]][sb] = miObject;

        var miSeg = new Object();
        miSeg.type = 'S';
        grafo[brokenSegmentWaiting[1]][sb+1] = new Object();
        grafo[brokenSegmentWaiting[1]][sb+1] = miSeg;

        var grafoRecorrer = sb+1;

        recAux = sb+2;
        for(gas = 0; gas < grafoAuxiliar.length; gas++){
          grafo[brokenSegmentWaiting[1]][recAux] = JSON.parse(JSON.stringify(grafoAuxiliar[gas]));
          recAux++;
          //grafo[brokenSegmentWaiting[1]][recAux] = JSON.parse(JSON.stringify(grafoAuxiliar[gas]));
        }


        inicializarLista();
        copiarGrafo(grafo, grafoEspejo);
        ponerAccionEjecutada('Segmento roto', 'Se ha roto el segmento, para separarlo active la opción mover');

        ///////////////////////////////////////////////////////////////
        //Recorre el trozo cortado y lo separa(metodo nuevo)

        //console.log(grafo[brokenSegmentWaiting[2]][brokenSegmentWaiting[3]])
        console.log(grafo[brokenSegmentWaiting[1]][grafoRecorrer+1]);
        var miAncestro = obtenerMayorAncestro(brokenSegmentWaiting[1], grafoRecorrer);//(miPosicion[0], miPosicion[8]);
        var descendientes = obtenerInstalaciones(miAncestro);

        console.log(descendientes);
        for(sc = 0; sc < descendientes.length; sc++){
          //console.log(descendientes[sc])
          for(grc = descendientes[sc][1] + 1; grc < grafo[descendientes[sc][0]].length; grc++){

            if(grafo[descendientes[sc][0]][grc].type == 'H' || grafo[descendientes[sc][0]][grc].type == 'S')
              break;
            //console.log(grafoEspejo[descendientes[sc][0]][grc]);
            grafo[descendientes[sc][0]][grc].x = grafoEspejo[descendientes[sc][0]][grc].x + 20;//- movX;
            grafo[descendientes[sc][0]][grc].y = grafoEspejo[descendientes[sc][0]][grc].y + 20;//- movY;
            grafo[descendientes[sc][0]][grc].tagX = grafoEspejo[descendientes[sc][0]][grc].tagX + 20;//- movX;
            grafo[descendientes[sc][0]][grc].tagY = grafoEspejo[descendientes[sc][0]][grc].tagY + 20;//- movY;
          }
        }


        ///////////////////////////////////////////////////////////////
        copiarGrafo(grafo, grafoEspejo);
        var miLienzo = obtenerPosicionLienzoMarcado();
        dibujarEnLienzo(miLienzo);
        break;
      }
      /*grafo[brokenSegmentWaiting[1]][sb-1].type == 'P' && grafo[brokenSegmentWaiting[1]][sb+1].type == 'P'){
      &&*/
    }
  }

}

function unirSegmento(e){
  var misCoordenadas = obtenerCoordenadasLienzo(e);
  //console.log(linkSegmentWaiting);
  if(linkSegmentWaiting[3] > -1){

    if(distanciaPuntoPunto(misCoordenadas[0], misCoordenadas[1], grafo[linkSegmentWaiting[1]][linkSegmentWaiting[3]+1]) < tolerancia){
      var movX = grafo[linkSegmentWaiting[1]][linkSegmentWaiting[3]+1].x - grafo[linkSegmentWaiting[1]][linkSegmentWaiting[3]-1].x;
      var movY = grafo[linkSegmentWaiting[1]][linkSegmentWaiting[3]+1].y - grafo[linkSegmentWaiting[1]][linkSegmentWaiting[3]-1].y;
      //console.log('SE UNIRA');
      //console.log(movX+ '   '+movY);

      var miAncestro = obtenerMayorAncestro(linkSegmentWaiting[1], linkSegmentWaiting[3]);//(miPosicion[0], miPosicion[8]);
      var descendientes = obtenerInstalaciones(miAncestro);

      //console.log(descendientes);
      for(sc = 0; sc < descendientes.length; sc++){
        //console.log(descendientes[sc])
        for(grc = descendientes[sc][1] + 1; grc < grafo[descendientes[sc][0]].length; grc++){

          if(grafo[descendientes[sc][0]][grc].type == 'H' || grafo[descendientes[sc][0]][grc].type == 'S')
            break;
          //console.log(grafoEspejo[descendientes[sc][0]][grc]);
          grafo[descendientes[sc][0]][grc].x = grafoEspejo[descendientes[sc][0]][grc].x - movX;
          grafo[descendientes[sc][0]][grc].y = grafoEspejo[descendientes[sc][0]][grc].y - movY;
          grafo[descendientes[sc][0]][grc].tagX = grafoEspejo[descendientes[sc][0]][grc].tagX - movX;
          grafo[descendientes[sc][0]][grc].tagY = grafoEspejo[descendientes[sc][0]][grc].tagY - movY;
        }
      }


      //console.log(grafo[linkSegmentWaiting[1]][linkSegmentWaiting[3]-1])
      for(uc = linkSegmentWaiting[3]-1; uc < grafo[linkSegmentWaiting[1]].length-2; uc++){
        var miObject = new Object();
        miObject = JSON.parse(JSON.stringify(grafo[linkSegmentWaiting[1]][uc+2]));
        grafo[linkSegmentWaiting[1]][uc] = miObject;
      }
      grafo[linkSegmentWaiting[1]].pop();
      grafo[linkSegmentWaiting[1]].pop();

      copiarGrafo(grafo, grafoEspejo);
      var miLienzo = obtenerPosicionLienzoMarcado();
      dibujarEnLienzo(miLienzo);
      inicializarLista();
      ponerAccionEjecutada('Segmentos unidos', 'El segmento se ha unido correctamente a su consecutivo')

    }
  }


  /*for(sb = brokenSegmentWaiting[2]+1; sb < grafo[brokenSegmentWaiting[1]].length; sb++){

    if(grafo[brokenSegmentWaiting[1]][sb].type == 'S')
      break;
    //console.log(grafo[brokenSegmentWaiting[1]][sb]);

    if(distanciaPuntoPunto(misCoordenadas[0], misCoordenadas[1], grafo[brokenSegmentWaiting[1]][sb]) < tolerancia){
      //console.log(grafo[brokenSegmentWaiting[1]][sb]);
      if(grafo[brokenSegmentWaiting[1]][sb-1].type != 'P' || grafo[brokenSegmentWaiting[1]][sb+1].type != 'P')
        ponerAlerta('Imposible romper', 'Se ha seleccionado un extremo, no se puede romper un segmento por los extremos.');
      else{
        var grafoAuxiliar = new Array();
        var recAux = 0;
        for(gas = sb; gas < grafo[brokenSegmentWaiting[1]].length; gas++){
          //console.log(grafo[brokenSegmentWaiting[1]][gas]);
          grafoAuxiliar[recAux] = JSON.parse(JSON.stringify(grafo[brokenSegmentWaiting[1]][gas]));
          recAux++
        }
        //console.log(grafoAuxiliar);
        var miObject = new Object();
        miObject.type = grafo[brokenSegmentWaiting[1]][sb].type;
        miObject.x = grafo[brokenSegmentWaiting[1]][sb].x;
        miObject.y = grafo[brokenSegmentWaiting[1]][sb].y;

        grafo[brokenSegmentWaiting[1]][sb] = new Object();
        grafo[brokenSegmentWaiting[1]][sb] = miObject;

        var miSeg = new Object();
        miSeg.type = 'S';
        grafo[brokenSegmentWaiting[1]][sb+1] = new Object();
        grafo[brokenSegmentWaiting[1]][sb+1] = miSeg;

        recAux = sb+2;
        for(gas = 0; gas < grafoAuxiliar.length; gas++){
          grafo[brokenSegmentWaiting[1]][recAux] = JSON.parse(JSON.stringify(grafoAuxiliar[gas]));
          recAux++;
          //grafo[brokenSegmentWaiting[1]][recAux] = JSON.parse(JSON.stringify(grafoAuxiliar[gas]));
        }
        inicializarLista();
        copiarGrafo(grafo, grafoEspejo);
        ponerAccionEjecutada('Segmento roto', 'Se ha roto el segmento, para separarlo active la opción mover');
        break;
      }
    }
  }*/

}


function seleccionarTrozo(e){
  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miTrozo = obtenerDatosTrozo(misCoordenadas);
  //marcarTrozo(miTrozo);
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

function obtenerPosicionParaDibujarTutorial(coordenadas){//e){
  console.log(coordenadas);
  // var misCoordenadas = obtenerCoordenadasLienzo(e);
  var misCoordenadas = coordenadas;
  var miLienzo = obtenerPosicionLienzoMarcado();
  punteroDeDibujo = obtenerPosiciones(miLienzo, tolerancia, misCoordenadas[0], misCoordenadas[1])
  console.log(grafo);
  console.log(punteroDeDibujo);
  if(punteroDeDibujo.length > 0)
    marcarPunto(punteroDeDibujo[1], punteroDeDibujo[0], punteroDeDibujo[8], modo);
  else
    dibujarEnLienzo(miLienzo);

}

function obtenerPosicionParaDibujar(e){
  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miLienzo = obtenerPosicionLienzoMarcado();
  punteroDeDibujo = obtenerPosiciones(miLienzo, tolerancia, misCoordenadas[0], misCoordenadas[1])


  if(punteroDeDibujo.length > 0)
    marcarPunto(punteroDeDibujo[1], punteroDeDibujo[0], punteroDeDibujo[8], modo);
  else
    dibujarEnLienzo(miLienzo);

}

function obtenerPosicionParaDibujarConZoom(puntoX, puntoY){
  var misCoordenadas = [puntoX, puntoY]
  var miLienzo = obtenerPosicionLienzoMarcado();
  punteroDeDibujo = obtenerPosiciones(miLienzo, tolerancia, misCoordenadas[0], misCoordenadas[1])


  if(punteroDeDibujo.length > 0)
    marcarPunto(punteroDeDibujo[1], punteroDeDibujo[0], punteroDeDibujo[8], modo);
  else
    dibujarEnLienzo(miLienzo);

}

function obtenerPosicionParaEditar(e){
  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miLienzo = obtenerPosicionLienzoMarcado();
  punteroDeEdicion = obtenerPosiciones(miLienzo, 5, misCoordenadas[0], misCoordenadas[1])
  //puntoPartida = obtenerCoordenadasLienzo(e);
  //console.log(misCoordenadas)
  //console.log(miLienzo)

  // console.log(punteroDeEdicion);
  //document.getElementById('cmp_Controls').style.display = 'block'

  if(punteroDeEdicion.length > 0){
    document.getElementById('cmp_Controls').style.display = 'block';

    marcarPuntoEdicion(punteroDeEdicion[1], punteroDeEdicion[0], punteroDeEdicion[8], modo);
    marcarCaracteristicas(punteroDeEdicion[8]);

    var miElemento = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]];

    var miAnguloMarcado = 30;
    if(miElemento.angulo)
      miAnguloMarcado = miElemento.angulo;
    //console.log(miAnguloMarcado);
    markGrade(miAnguloMarcado);

    var miTypeTub = 'vt';
    var miDiametro = '1';

    if(miElemento.typeTub)
      miTypeTub = miElemento.typeTub;

    if(miElemento.diametro)
      miDiametro = miElemento.diametro;
    setTub(miTypeTub, miDiametro);
    if(miElemento.distancia)
      txt_distancia.value = miElemento.distancia;
    //console.log(miTypeTub);
  }
  else
    document.getElementById('cmp_Controls').style.display = 'none'


}

function obtenerPosicionParaEditarConZoom(puntoX, puntoY){
  var misCoordenadas = [puntoX, puntoY]
  var miLienzo = obtenerPosicionLienzoMarcado();
  punteroDeEdicion = obtenerPosiciones(miLienzo, 5, misCoordenadas[0], misCoordenadas[1])

  if(punteroDeEdicion.length > 0){
    document.getElementById('cmp_Controls').style.display = 'block';

    marcarPuntoEdicion(punteroDeEdicion[1], punteroDeEdicion[0], punteroDeEdicion[8], modo);
    marcarCaracteristicas(punteroDeEdicion[8]);

    var miElemento = grafo[punteroDeEdicion[0]][punteroDeEdicion[8]];

    var miAnguloMarcado = 30;
    if(miElemento.angulo)
      miAnguloMarcado = miElemento.angulo;

    markGrade(miAnguloMarcado);

    var miTypeTub = 'vt';
    var miDiametro = '1';

    if(miElemento.typeTub)
      miTypeTub = miElemento.typeTub;

    if(miElemento.diametro)
      miDiametro = miElemento.diametro;
    setTub(miTypeTub, miDiametro);
    if(miElemento.distancia)
      txt_distancia.value = miElemento.distancia

  }
  else
    document.getElementById('cmp_Controls').style.display = 'none'

}


function marcarCaracteristicas(miPosicionMarca){
  var miElemento = grafo[punteroDeEdicion[0]][miPosicionMarca];
  //console.log(miElemento)
  if(punteroDeEdicion.length > 0 && miElemento){
    if(miElemento.instalacion){
      //console.log('hola ins')
      document.getElementById('componenteTePorInstalacion').className = 'instalacion clicked';
    }
    else{
      document.getElementById('componenteTePorInstalacion').className = 'instalacion';
    }
    if(miElemento.tubForro){
      //console.log('hola ins')
      document.getElementById('tubForro').className = 'tubForro clicked';
    }
    else{
      document.getElementById('tubForro').className = 'tubForro';
    }
    /*if(miElemento.medidorDerecha){
      //console.log('hola ins')
      document.getElementById('medidorDerecha').className = 'medidorDerecha clicked';
    }
    else{
      document.getElementById('medidorDerecha').className = 'medidorDerecha';
    }
    if(miElemento.medidorIzquierda){
      //console.log('hola ins')
      document.getElementById('medidorIzquierda').className = 'medidorIzquierda clicked';
    }
    else{
      document.getElementById('medidorIzquierda').className = 'medidorIzquierda';
    }*/
    if(miElemento.te_30){
      document.getElementById('te_30').className = 'te_30 clicked';
    }else{
      document.getElementById('te_30').className = 'te_30'
    }
    if(miElemento.te_90){
      document.getElementById('te_90').className = 'te_90 clicked';
    }else{
      document.getElementById('te_90').className = 'te_90'
    }
    if(miElemento.te_150){
      document.getElementById('te_150').className = 'te_150 clicked';
    }else{
      document.getElementById('te_150').className = 'te_150'
    }
    if(miElemento.te_210){
      document.getElementById('te_210').className = 'te_210 clicked';
    }else{
      document.getElementById('te_210').className = 'te_210'
    }
    if(miElemento.te_270){
      document.getElementById('te_270').className = 'te_270 clicked';
    }else{
      document.getElementById('te_270').className = 'te_270'
    }
    if(miElemento.te_330){
      document.getElementById('te_330').className = 'te_330 clicked';
    }else{
      document.getElementById('te_330').className = 'te_330'
    }

    if(miElemento.valvula){
      document.getElementById('valvula').className = 'valvula clicked';
    }else{
      document.getElementById('valvula').className = 'valvula'
    }

    if(miElemento.valvulaPunto){
      document.getElementById('valvulaPunto').className = 'valvulaPunto clicked';
    }else{
      document.getElementById('valvulaPunto').className = 'valvulaPunto'
    }

  }
}

function marcarTagPartida(e){
  puntoPartida = obtenerCoordenadasLienzo(e);
  tagParaMover = obtenerTagComponentes(puntoPartida);
  console.log(tagParaMover);

  marcarTagComponentes(tagParaMover);
  //if(tagParaMover.length > 0)
  //  ;
  //else

}

function marcarTagPartidaConZoom(puntoX, puntoY){
  puntoPartida = [puntoX, puntoY]
  tagParaMover = obtenerTagComponentes(puntoPartida);
  // console.log(tagParaMover);

  marcarTagComponentes(tagParaMover);

}

function marcarCirculosGrandesZoomPartidaConZoom(puntoX, puntoY){
  // copiarCirculosExtra();
  puntoPartida = [puntoX, puntoY];
  circulosGrandesExtraParaMover = obtenerCirculosGrandesExtra(puntoPartida);
  console.log(circulosGrandesExtraParaMover);
  // marcarTagExtra(tagExtraParaMover);
}

function marcarCirculosGrandesZoomPartida(e){
  // copiarCirculosExtra();
  puntoPartida = obtenerCoordenadasLienzo(e);
  circulosGrandesExtraParaMover = obtenerCirculosGrandesExtra(puntoPartida);
  console.log(circulosGrandesExtraParaMover);
  // marcarTagExtra(tagExtraParaMover);
}

function marcarTagExtraPartida(e){
  copiarCirculosExtra()
  puntoPartida = obtenerCoordenadasLienzo(e);
  tagExtraParaMover = obtenerTagExtra(puntoPartida);
  // console.log(tagExtraParaMover);

  marcarTagExtra(tagExtraParaMover);

}

function marcarTagExtraPartidaConZoom(puntoX, puntoY){
  puntoPartida = [puntoX, puntoY]
  tagExtraParaMover = obtenerTagExtra(puntoPartida);
  // console.log(tagExtraParaMover);

  marcarTagExtra(tagExtraParaMover);

}

function marcarPuntoPartida(e){
  puntoPartida = obtenerCoordenadasLienzo(e);
  trozoParaMover = obtenerTrozoPorComponentes(puntoPartida);
  console.log(trozoParaMover)
  marcarTrozoComponentes(trozoParaMover);
  //marcarTrozo(trozoParaMover);
  //trozoParaMover = obtenerDatosTrozo(puntoPartida);
  //marcarTrozo(trozoParaMover);

}

function marcarPuntoPartidaConZoom(puntoX, puntoY){
  puntoPartida = [puntoX, puntoY]
  trozoParaMover = obtenerTrozoPorComponentes(puntoPartida);
  marcarTrozoComponentes(trozoParaMover);

}

function moverTagComponentes(e){

  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miLienzo = obtenerPosicionLienzoMarcado();

  if(puntoPartida.length > 0 && tagParaMover.length > 0){
    var movX = (misCoordenadas[0] - puntoPartida[0]);
    var movY = (misCoordenadas[1] - puntoPartida[1]);

    //console.log(grafoEspejo[tagParaMover[0]][tagParaMover[8]])
    if(grafoEspejo[tagParaMover[0]][tagParaMover[8]].type == 'P'){

      var myObject = JSON.parse(JSON.stringify(grafo[tagParaMover[0]][tagParaMover[8]]));

      myObject.tagX = grafo[tagParaMover[0]][tagParaMover[8]].tagX + movX;
      myObject.tagY = grafo[tagParaMover[0]][tagParaMover[8]].tagY + movY;

      grafoEspejo[tagParaMover[0]][tagParaMover[8]] = JSON.parse(JSON.stringify(myObject));

    }

    dibujarEnLienzoEspejo(miLienzo);
    marcarTagComponentesEspejo(tagParaMover);
  }
}

function moverTagComponentesConZoom(puntoX, puntoY){

  var misCoordenadas = [puntoX, puntoY]
  var miLienzo = obtenerPosicionLienzoMarcado();

  if(puntoPartida.length > 0 && tagParaMover.length > 0){
    var movX = (misCoordenadas[0] - puntoPartida[0]);
    var movY = (misCoordenadas[1] - puntoPartida[1]);

    if(grafoEspejo[tagParaMover[0]][tagParaMover[8]].type == 'P'){

      var myObject = JSON.parse(JSON.stringify(grafo[tagParaMover[0]][tagParaMover[8]]));

      myObject.tagX = grafo[tagParaMover[0]][tagParaMover[8]].tagX + movX;
      myObject.tagY = grafo[tagParaMover[0]][tagParaMover[8]].tagY + movY;

      grafoEspejo[tagParaMover[0]][tagParaMover[8]] = JSON.parse(JSON.stringify(myObject));

    }
    dibujarEnLienzoEspejo(miLienzo);
    marcarTagComponentesEspejo(tagParaMover);
  }
}

function moverCirculosGrandesExtra(e){
  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miLienzo = obtenerPosicionLienzoMarcado();
  //
  if(puntoPartida.length > 0 && circulosGrandesExtraParaMover.length > 0){
    var movX = (misCoordenadas[0] - circulosExtra[circulosGrandesExtraParaMover[0]].x);
    var movY = (misCoordenadas[1] - circulosExtra[circulosGrandesExtraParaMover[0]].y);

    circulosExtraEspejo[circulosGrandesExtraParaMover[0]].x = circulosExtra[circulosGrandesExtraParaMover[0]].x + movX;
    circulosExtraEspejo[circulosGrandesExtraParaMover[0]].y = circulosExtra[circulosGrandesExtraParaMover[0]].y + movY;
    for(cem = 0; cem < circulosExtraEspejo[circulosGrandesExtraParaMover[0]].dataLines.length; cem++){
      circulosExtraEspejo[circulosGrandesExtraParaMover[0]].dataLines[cem].maximo.x = circulosExtra[circulosGrandesExtraParaMover[0]].dataLines[cem].maximo.x + movX;
      circulosExtraEspejo[circulosGrandesExtraParaMover[0]].dataLines[cem].maximo.y = circulosExtra[circulosGrandesExtraParaMover[0]].dataLines[cem].maximo.y + movY;
      circulosExtraEspejo[circulosGrandesExtraParaMover[0]].dataLines[cem].minimo.x = circulosExtra[circulosGrandesExtraParaMover[0]].dataLines[cem].minimo.x + movX;
      circulosExtraEspejo[circulosGrandesExtraParaMover[0]].dataLines[cem].minimo.y = circulosExtra[circulosGrandesExtraParaMover[0]].dataLines[cem].minimo.y + movY;
    }

    // circulosExtra[circulosGrandesExtraParaMover[0]].x = circulosExtraEspejo[circulosGrandesExtraParaMover[0]].x + movX;
    // circulosExtra[circulosGrandesExtraParaMover[0]].y = circulosExtra[circulosGrandesExtraParaMover[0]].y + movY;
    console.log(circulosExtraEspejo);
    // dibujarCirculosExtraEspejo(miLienzo);
    dibujarEnLienzoEspejo(miLienzo);
    // marcarTagExtra(tagExtraParaMover);
  }
}

function moverCirculosGrandesExtraConZoom(puntoX, puntoY){
  // var misCoordenadas = obtenerCoordenadasLienzo(e);
  // var miLienzo = obtenerPosicionLienzoMarcado();
  //
  // if(puntoPartida.length > 0 && tagExtraParaMover.length > 0){
  //   var movX = (misCoordenadas[0] - tagsExtraEspejo[0]);
  //   var movY = (misCoordenadas[1] - tagsExtraEspejo[1]);
  //
  //   tagsExtra[tagExtraParaMover[0]].x = tagsExtraEspejo[0] + movX;
  //   tagsExtra[tagExtraParaMover[0]].y = tagsExtraEspejo[1] + movY;
  //
  //   dibujarEnLienzoEspejo(miLienzo);
  //   marcarTagExtra(tagExtraParaMover);
  // }
}

function moverTagExtra(e){

  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miLienzo = obtenerPosicionLienzoMarcado();

  if(puntoPartida.length > 0 && tagExtraParaMover.length > 0){
    var movX = (misCoordenadas[0] - tagsExtraEspejo[0]);
    var movY = (misCoordenadas[1] - tagsExtraEspejo[1]);
    // console.log(movX)
    // console.log(movY)
    //console.log(tagExtraParaMover[0])
    tagsExtra[tagExtraParaMover[0]].x = tagsExtraEspejo[0] + movX;
    tagsExtra[tagExtraParaMover[0]].y = tagsExtraEspejo[1] + movY;

    dibujarEnLienzoEspejo(miLienzo);
    marcarTagExtra(tagExtraParaMover);
  }
}

function moverTagExtraConZoom(puntoX, puntoY){

  var misCoordenadas = [puntoX, puntoY]
  var miLienzo = obtenerPosicionLienzoMarcado();
  if(puntoPartida.length > 0 && tagExtraParaMover.length > 0){
    var movX = (misCoordenadas[0] - tagsExtraEspejo[0]);
    var movY = (misCoordenadas[1] - tagsExtraEspejo[1]);

    tagsExtra[tagExtraParaMover[0]].x = tagsExtraEspejo[0] + movX;
    tagsExtra[tagExtraParaMover[0]].y = tagsExtraEspejo[1] + movY;

    dibujarEnLienzoEspejo(miLienzo);
    marcarTagExtra(tagExtraParaMover);
  }
}

function moverTrozoComponentesConZoom(puntoX, puntoY){

  var misCoordenadas = [puntoX, puntoY]
  var miLienzo = obtenerPosicionLienzoMarcado();

  if(puntoPartida.length > 0 && trozoParaMover.length > 0){
    var movX = (misCoordenadas[0] - puntoPartida[0]);
    var movY = (misCoordenadas[1] - puntoPartida[1]);

    if(limitadorDeMargen){
      var movement = true;

      for(mc = 0; mc < trozoParaMover.length; mc++){
        var mcv = trozoParaMover[mc][0];

        for(msg = trozoParaMover[mc][1]+1; msg < grafoEspejo[mcv].length; msg++){

          if(grafoEspejo[mcv][msg].type == 'P'){

            if(grafoEspejo[mcv][msg].x < 20 || grafoEspejo[mcv][msg].x > 681-20){
              movement = false;
              if(grafoEspejo[mcv][msg].x < 20 && grafoEspejo[mcv][msg].x < minX)
                minX = grafoEspejo[mcv][msg].x;
              if(grafoEspejo[mcv][msg].x > 681-20 && grafoEspejo[mcv][msg].x > maxX)
                maxX = grafoEspejo[mcv][msg].x
            }

            if(grafoEspejo[mcv][msg].y < 20 || grafoEspejo[mcv][msg].y > 718-20){
              movement = false;
              if(grafoEspejo[mcv][msg].y < 20 && grafoEspejo[mcv][msg].y < minY)
                minY = grafoEspejo[mcv][msg].y;
              if(grafoEspejo[mcv][msg].y > 718-20 && grafoEspejo[mcv][msg].y > maxY)
                maxY = grafoEspejo[mcv][msg].y;
            }

          }
          if(grafoEspejo[mcv][msg].type == 'H' || grafoEspejo[mcv][msg].type == 'S')
            break;

        }

      }

      if(movement){
        for(mc = 0; mc < trozoParaMover.length; mc++){
          var mcv = trozoParaMover[mc][0];
          for(msg = trozoParaMover[mc][1]+1; msg < grafoEspejo[mcv].length; msg++){

            if(grafoEspejo[mcv][msg].type == 'P'){

              var myObject = JSON.parse(JSON.stringify(grafoEspejo[mcv][msg]));

              myObject.x = grafo[mcv][msg].x + movX;
              myObject.y = grafo[mcv][msg].y + movY;
              if(myObject.tagX)
                myObject.tagX = grafo[mcv][msg].tagX + movX;
              if(myObject.tagY)
                myObject.tagY = grafo[mcv][msg].tagY + movY;
              myObject.marca = 'move';

              grafoEspejo[mcv][msg] = JSON.parse(JSON.stringify(myObject));

            }
            if(grafoEspejo[mcv][msg].type == 'H' || grafoEspejo[mcv][msg].type == 'S')
              break;

          }

        }

      }
    }
    else{
      for(mc = 0; mc < trozoParaMover.length; mc++){

        var mcv = trozoParaMover[mc][0];

        for(msg = trozoParaMover[mc][1]+1; msg < grafoEspejo[mcv].length; msg++){

          //console.log(grafo[mcv][msg])
          if(grafoEspejo[mcv][msg].type == 'P'){

            var myObject = JSON.parse(JSON.stringify(grafo[mcv][msg]));

            myObject.x = grafo[mcv][msg].x + movX;
            myObject.y = grafo[mcv][msg].y + movY;
            if(myObject.tagX)
              myObject.tagX = grafo[mcv][msg].tagX + movX;
            if(myObject.tagY)
              myObject.tagY = grafo[mcv][msg].tagY + movY;
            myObject.marca = 'move';

            grafoEspejo[mcv][msg] = JSON.parse(JSON.stringify(myObject));

          }
          if(grafoEspejo[mcv][msg].type == 'H' || grafoEspejo[mcv][msg].type == 'S')
            break;

        }

      }
    }

    dibujarEnLienzoEspejo(miLienzo);

  }
}

function moverTrozoComponentes(e){
  // console.log(trozoParaMover);

  var misCoordenadas = obtenerCoordenadasLienzo(e);
  var miLienzo = obtenerPosicionLienzoMarcado();

  if(puntoPartida.length > 0 && trozoParaMover.length > 0){
    var movX = (misCoordenadas[0] - puntoPartida[0]);
    var movY = (misCoordenadas[1] - puntoPartida[1]);


    //console.log('***********');
    if(limitadorDeMargen){
      var movement = true;

      for(mc = 0; mc < trozoParaMover.length; mc++){
        var mcv = trozoParaMover[mc][0];

        for(msg = trozoParaMover[mc][1]+1; msg < grafoEspejo[mcv].length; msg++){

          if(grafoEspejo[mcv][msg].type == 'P'){

            if(grafoEspejo[mcv][msg].x < 20 || grafoEspejo[mcv][msg].x > 681-20){
              movement = false;
              if(grafoEspejo[mcv][msg].x < 20 && grafoEspejo[mcv][msg].x < minX)
                minX = grafoEspejo[mcv][msg].x;
              if(grafoEspejo[mcv][msg].x > 681-20 && grafoEspejo[mcv][msg].x > maxX)
                maxX = grafoEspejo[mcv][msg].x
            }

            if(grafoEspejo[mcv][msg].y < 20 || grafoEspejo[mcv][msg].y > 718-20){
              movement = false;
              if(grafoEspejo[mcv][msg].y < 20 && grafoEspejo[mcv][msg].y < minY)
                minY = grafoEspejo[mcv][msg].y;
              if(grafoEspejo[mcv][msg].y > 718-20 && grafoEspejo[mcv][msg].y > maxY)
                maxY = grafoEspejo[mcv][msg].y;
            }

          }
          if(grafoEspejo[mcv][msg].type == 'H' || grafoEspejo[mcv][msg].type == 'S')
            break;

        }

      }

      if(movement){
        console.log("?????????????????????????????????");
        console.log(movX);
        console.log(movY);
        console.log(trozoParaMover);
        console.log("?????????????????????????????????");
        for(mc = 0; mc < trozoParaMover.length; mc++){
          console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
          var numberSegment = getNumberSegmentInPage(trozoParaMover[mc][0], trozoParaMover[mc][1])
          console.log(numberSegment);
          moveCirclesBase(movX, movY, trozoParaMover[mc][0], numberSegment)
          console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
          var mcv = trozoParaMover[mc][0];
          for(msg = trozoParaMover[mc][1]+1; msg < grafoEspejo[mcv].length; msg++){

            if(grafoEspejo[mcv][msg].type == 'P'){

              var myObject = JSON.parse(JSON.stringify(grafoEspejo[mcv][msg]));

              myObject.x = grafo[mcv][msg].x + movX;
              myObject.y = grafo[mcv][msg].y + movY;
              if(myObject.tagX)
                myObject.tagX = grafo[mcv][msg].tagX + movX;
              if(myObject.tagY)
                myObject.tagY = grafo[mcv][msg].tagY + movY;
              myObject.marca = 'move';

              grafoEspejo[mcv][msg] = JSON.parse(JSON.stringify(myObject));

            }
            if(grafoEspejo[mcv][msg].type == 'H' || grafoEspejo[mcv][msg].type == 'S')
              break;

          }

        }

      }
    }
    else{
      console.log("?????????????????????????????????");
      console.log(movX);
      console.log(movY);
      console.log(trozoParaMover);
      console.log("?????????????????????????????????");
      for(mc = 0; mc < trozoParaMover.length; mc++){
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        var numberSegment = getNumberSegmentInPage(trozoParaMover[mc][0], trozoParaMover[mc][1])
        console.log(numberSegment);
        moveCirclesBase(movX, movY, trozoParaMover[mc][0], numberSegment)
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        var mcv = trozoParaMover[mc][0];
        for(msg = trozoParaMover[mc][1]+1; msg < grafoEspejo[mcv].length; msg++){
          //console.log(grafo[mcv][msg])
          if(grafoEspejo[mcv][msg].type == 'P'){

            var myObject = JSON.parse(JSON.stringify(grafo[mcv][msg]));

            myObject.x = grafo[mcv][msg].x + movX;
            myObject.y = grafo[mcv][msg].y + movY;
            if(myObject.tagX)
              myObject.tagX = grafo[mcv][msg].tagX + movX;
            if(myObject.tagY)
              myObject.tagY = grafo[mcv][msg].tagY + movY;
            myObject.marca = 'move';

            grafoEspejo[mcv][msg] = JSON.parse(JSON.stringify(myObject));

          }
          if(grafoEspejo[mcv][msg].type == 'H' || grafoEspejo[mcv][msg].type == 'S')
            break;

        }

      }
    }

    dibujarEnLienzoEspejo(miLienzo);

  }


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

function desmarcarPuntoPartidaComponentes(e){

  var miLienzo = obtenerPosicionLienzoMarcado();
  if(limitadorDeMargen){

    if(minX < 20){

      for(mc = 0; mc < trozoParaMover.length; mc++){
        var mcv = trozoParaMover[mc][0];
        for(msg = trozoParaMover[mc][1]+1; msg < grafoEspejo[mcv].length; msg++){

          if(grafoEspejo[mcv][msg].type == 'P'){

            var myObject = JSON.parse(JSON.stringify(grafo[mcv][msg]));

            myObject.x = grafoEspejo[mcv][msg].x + 21 - minX;
            myObject.y = grafoEspejo[mcv][msg].y;

            if(myObject.tagX)
              myObject.tagX = grafoEspejo[mcv][msg].tagX + 21 - minX;
            if(myObject.tagY)
              myObject.tagY = grafoEspejo[mcv][msg].tagY;

            grafoEspejo[mcv][msg] = JSON.parse(JSON.stringify(myObject));

          }
          if(grafoEspejo[mcv][msg].type == 'H' || grafoEspejo[mcv][msg].type == 'S')
            break;

        }
      }
    }

    if(maxX > 681-20){

      for(mc = 0; mc < trozoParaMover.length; mc++){
        var mcv = trozoParaMover[mc][0];
        for(msg = trozoParaMover[mc][1]+1; msg < grafoEspejo[mcv].length; msg++){

          if(grafoEspejo[mcv][msg].type == 'P'){

            var myObject = JSON.parse(JSON.stringify(grafoEspejo[mcv][msg]));

            myObject.x = grafoEspejo[mcv][msg].x - maxX + 661;
            myObject.y = grafoEspejo[mcv][msg].y;

            if(myObject.tagX)
              myObject.tagX = grafoEspejo[mcv][msg].tagX + 661 - maxX;
            if(myObject.tagY)
              myObject.tagY = grafoEspejo[mcv][msg].tagY;


            grafoEspejo[mcv][msg] = JSON.parse(JSON.stringify(myObject));

          }
          if(grafoEspejo[mcv][msg].type == 'H' || grafoEspejo[mcv][msg].type == 'S')
            break;

        }

      }
    }

    if(minY < 20){

      for(mc = 0; mc < trozoParaMover.length; mc++){
        var mcv = trozoParaMover[mc][0];
        for(msg = trozoParaMover[mc][1]+1; msg < grafo[mcv].length; msg++){

          if(grafoEspejo[mcv][msg].type == 'P'){
            var myObject = JSON.parse(JSON.stringify(grafo[mcv][msg]));

            myObject.x = grafoEspejo[mcv][msg].x;
            myObject.y = grafoEspejo[mcv][msg].y + 20 - minY;

            if(myObject.tagX)
              myObject.tagX = grafoEspejo[mcv][msg].tagX;
            if(myObject.tagY)
              myObject.tagY = grafoEspejo[mcv][msg].tagY +20 - minY;


            grafoEspejo[mcv][msg] = JSON.parse(JSON.stringify(myObject));

          }
          if(grafoEspejo[mcv][msg].type == 'H' || grafoEspejo[mcv][msg].type == 'S')
            break;

        }

      }
    }

    if(maxY > 718-20){

      for(mc = 0; mc < trozoParaMover.length; mc++){
        var mcv = trozoParaMover[mc][0];
        for(msg = trozoParaMover[mc][1]+1; msg < grafoEspejo[mcv].length; msg++){

            if(grafoEspejo[mcv][msg].type == 'P'){

              var myObject = JSON.parse(JSON.stringify(grafo[mcv][msg]));

              myObject.x = grafoEspejo[mcv][msg].x;
              myObject.y = grafoEspejo[mcv][msg].y - maxY + 698;

              if(myObject.tagX)
                myObject.tagX = grafoEspejo[mcv][msg].tagX;
              if(myObject.tagY)
                myObject.tagY = grafoEspejo[mcv][msg].tagY - maxY + 698;;


              grafoEspejo[mcv][msg] = JSON.parse(JSON.stringify(myObject));

            }
            if(grafoEspejo[mcv][msg].type == 'H' || grafoEspejo[mcv][msg].type == 'S')
              break;

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
      var myObject = JSON.parse(JSON.stringify(grafoEspejo[gec][gec2]));
      grafo[gec][gec2] = JSON.parse(JSON.stringify(myObject));
    }
  }

  //punteroDeDibujo = new Array();
  //grafoEspejo = new Array();
  //copiarGrafo(grafo, grafoEspejo);
  restaurarCirculosExtra()
  dibujarEnLienzo(miLienzo);
  marcarTrozoComponentes(trozoParaMover);
  trozoParaMover = new Array();

}

function desmarcarTagComponentes(e){

  var miLienzo = obtenerPosicionLienzoMarcado();

  puntoPartida = new Array();
  minX= 1000;
  maxX= -1000;
  minY= 1000;
  maxY= -1000;

  for(gec = 0; gec < grafo.length; gec++){

    for(gec2 = 0; gec2 < grafo[gec].length; gec2++){
      var myObject = JSON.parse(JSON.stringify(grafoEspejo[gec][gec2]));
      grafo[gec][gec2] = JSON.parse(JSON.stringify(myObject));
    }
  }

  //punteroDeDibujo = new Array();
  //grafoEspejo = new Array();
  //copiarGrafo(grafo, grafoEspejo);

  dibujarEnLienzo(miLienzo);
  //marcarTrozoComponentes(trozoParaMover);
  marcarTagComponentes(tagParaMover);
  tagParaMover = new Array();

}

function desmarcarTagExtra(e){

  var miLienzo = obtenerPosicionLienzoMarcado();

  dibujarEnLienzo(miLienzo);

  marcarTagExtra(tagExtraParaMover);
  tagsExtraEspejo = new Array();
  tagExtraParaMover = new Array();
}

document.getElementById("lienzo-hoja").addEventListener('mousedown', function(e) {
  // console.log("se activa el evento mousedown");
  if(!e){e = window.event;}

  svgContent = document.getElementById('miSVGLienzo')
  svgZoomContent =  document.getElementById('zoomContentSvg')
  eX = e.clientX-this.getBoundingClientRect().left-this.clientLeft;//-el.offsetWidth/2;
  eY = e.clientY-this.getBoundingClientRect().top-this.clientTop;//-el.offsetHeight/2;

  // x = e.clientX-this.getBoundingClientRect().left-this.clientLeft-el.offsetWidth/2;
  // y = e.clientY-this.getBoundingClientRect().top-this.clientTop-el.offsetHeight/2;
  // el.style.left = Math.min(Math.max(-zoomRadioLupa,x),this.clietWidth-el.offsetWidth+zoomRadioLupa) +"px";
  // el.style.top = Math.min(Math.max(-zoomRadioLupa,y),this.clientHeight-el.offsetHeight+zoomRadioLupa) +"px";
  // svgChild.style.left = -x*zoomEscala-zoomRadioLupa +"px";
  // svgChild.style.top = -y*zoomEscala-zoomRadioLupa +"px";
  // console.log(zoomActive);

  if(zoomCapturaActiva){
    console.log("Intentando capturar");
    var ultimaPosisionCirclesExtra = getLastPositionInPage();
    console.log(ultimaPosisionCirclesExtra);

    // sila posicion es diferente de -1 quiere decir que existe existe una
    // posicion aceptable creada en la cual se puede crear un circulo extra
    // entonces se le adicionaran los atributos necesarios
    if(ultimaPosisionCirclesExtra != -1){
      // console.log(ultimaPosisionCirclesExtra);
      // console.log(circulosExtra);
      var radioCapturaSvgBase = zoomRadioLupa / zoomEscala
      hoja = obtenerPosicionLienzoMarcado()
      var circleExtraBase = circulosExtra[ultimaPosisionCirclesExtra]
      circleExtraBase.content = []
      circleExtraBase.x = eX
      circleExtraBase.y = eY
      circleExtraBase.r = radioCapturaSvgBase
      circleExtraBase.escalaBase = escala
      circleExtraBase.hoja = hoja
      // circleExtraBase.grafo = 0
      // circleExtraBase.segmento = 0
      circleExtraBase.activo = false
      // circulosExtra.push(circleExtraBase)

      var circleExtraRepresentate = circulosExtra[ultimaPosisionCirclesExtra+1]

      circleExtraRepresentate.content = getAllBoundsInGraphData(grafo, eX, eY, radioCapturaSvgBase)
      circleExtraRepresentate.dataLines = new Array()

      circleExtraRepresentate.x = eX
      circleExtraRepresentate.y = eY
      circleExtraRepresentate.r = zoomRadioLupa
      circleExtraRepresentate.escala = zoomEscala
      circleExtraRepresentate.hoja = hoja
      // circleExtraRepresentate.grafo = 0
      // circleExtraRepresentate.segmento = 0
      circleExtraRepresentate.activo = false

      ///////
      xR = circleExtraBase.x*circleExtraRepresentate.escala - circleExtraBase.x
      yR = circleExtraBase.y*circleExtraRepresentate.escala - circleExtraBase.y

      tX = circleExtraRepresentate.x - circleExtraBase.x
      tY = circleExtraRepresentate.y - circleExtraBase.y
      var tmpDataCircle = circleExtraRepresentate.content

      for(td = 0; td < tmpDataCircle.length; td++){
       var lineData = new Object()
       lineData.minimo = new Object()
       lineData.maximo = new Object()
       lineData.minimo.x = (tmpDataCircle[td].minimo[0]*circleExtraRepresentate.escala) - xR + tX
       lineData.minimo.y = (tmpDataCircle[td].minimo[1]*circleExtraRepresentate.escala) - yR + tY
       lineData.maximo.x = (tmpDataCircle[td].maximo[0]*circleExtraRepresentate.escala) - xR + tX
       lineData.maximo.y = (tmpDataCircle[td].maximo[1]*circleExtraRepresentate.escala) - yR + tY
       lineData.typeTub = tmpDataCircle[td].typeTub
       circleExtraRepresentate.dataLines.push(lineData)

      }
      ///////
      // circulosExtra.push(circleExtraRepresentate)
      var miLienzo = obtenerPosicionLienzoMarcado();
      dibujarEnLienzo(miLienzo);
      drawCirclesList()
      copiarCirculosExtra()
    }

    // var radioCapturaSvgBase = zoomRadioLupa / zoomEscala
    // hoja = obtenerPosicionLienzoMarcado()
    // var circleExtraBase = new Object()
    // circleExtraBase.content = []
    //
    // circleExtraBase.x = eX
    // circleExtraBase.y = eY
    // circleExtraBase.r = radioCapturaSvgBase
    // circleExtraBase.escalaBase = escala
    // circleExtraBase.hoja = hoja
    // circleExtraBase.grafo = 0
    // circleExtraBase.segmento = 0
    // circulosExtra.push(circleExtraBase)

    // circulo mayor

    // var circleExtraRepresentate = new Object()
    //
    // circleExtraRepresentate.content = getAllBoundsInGraphData(grafo, eX, eY, radioCapturaSvgBase)
    // circleExtraRepresentate.dataLines = new Array()
    //
    // circleExtraRepresentate.x = eX
    // circleExtraRepresentate.y = eY
    // circleExtraRepresentate.r = zoomRadioLupa
    // circleExtraRepresentate.escala = zoomEscala
    // circleExtraRepresentate.hoja = hoja
    // circleExtraRepresentate.grafo = 0
    // circleExtraRepresentate.segmento = 0

    // ///////
    // xR = circleExtraBase.x*circleExtraRepresentate.escala - circleExtraBase.x
    // yR = circleExtraBase.y*circleExtraRepresentate.escala - circleExtraBase.y
    //
    // tX = circleExtraRepresentate.x - circleExtraBase.x
    // tY = circleExtraRepresentate.y - circleExtraBase.y
    // var tmpDataCircle = circleExtraRepresentate.content
    //
    // for(td = 0; td < tmpDataCircle.length; td++){
    //  var lineData = new Object()
    //  lineData.minimo = new Object()
    //  lineData.maximo = new Object()
    //  lineData.minimo.x = (tmpDataCircle[td].minimo[0]*circleExtraRepresentate.escala) - xR + tX
    //  lineData.minimo.y = (tmpDataCircle[td].minimo[1]*circleExtraRepresentate.escala) - yR + tY
    //  lineData.maximo.x = (tmpDataCircle[td].maximo[0]*circleExtraRepresentate.escala) - xR + tX
    //  lineData.maximo.y = (tmpDataCircle[td].maximo[1]*circleExtraRepresentate.escala) - yR + tY
    //  lineData.typeTub = tmpDataCircle[td].typeTub
    //  circleExtraRepresentate.dataLines.push(lineData)
    // }
    // ///////
    // circulosExtra.push(circleExtraRepresentate)
    //
    // var miLienzo = obtenerPosicionLienzoMarcado();
    // dibujarEnLienzo(miLienzo);

  }
  // console.log(brokenSegmentWaiting);


  if(brokenSegmentWaiting.length > 0){
    romperSegmento(e);
  }
  else if(linkSegmentWaiting.length > 0){
    unirSegmento(e);
  }
  else{
    switch(modo){
      case 'dibujo':
        obtenerPosicionParaDibujarConZoom(eX, eY)
        if(zoomActive){
          while (svgZoomContent.firstChild) {
              svgZoomContent.removeChild(svgZoomContent.firstChild);
          }
          loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
        }
        break;
      case 'edicion':
        obtenerPosicionParaEditarConZoom(eX, eY)
        if(zoomActive){
          while (svgZoomContent.firstChild) {
              svgZoomContent.removeChild(svgZoomContent.firstChild);
          }
          loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
        }
        // MOUSE DOWN PARA ADD COMPONENTES
        // switch (addComponent) {
        //   case 'tForro':
        //     setTubForro()
        //     break;
        //   default:
        // }
        break;
      case 'mover':
        marcarCirculosGrandesZoomPartidaConZoom(eX, eY);

        marcarTagExtraPartidaConZoom(eX, eY)
        if(tagExtraParaMover.length > 0){
          tagsExtraEspejo[0] = tagsExtra[tagExtraParaMover[0]].x;
          tagsExtraEspejo[1] = tagsExtra[tagExtraParaMover[0]].y;
        }
        else{
          marcarTagPartidaConZoom(eX, eY)
        }
        if(tagParaMover.length > 0){
          var p = grafo[tagParaMover[0]][tagParaMover[8]];
          txt_tagSeleccionado.value = 'L='+p.distancia+' '+p.diametro+'\'\' AG'
          tagEditable = [tagParaMover[0], tagParaMover[8]]
          setTagGrade(p.tagAngulo)
        }
        else{
          marcarPuntoPartidaConZoom(eX, eY)
        }
        if(zoomActive){
          while (svgZoomContent.firstChild) {
              svgZoomContent.removeChild(svgZoomContent.firstChild);
          }
          loadSvgLienzo(svgContent, svgZoomContent, zoomEscala, zoomRadioLupa)
        }

        break;
    }
  }

});

svg_lienzo.addEventListener('mousedown', function(e){
  if(brokenSegmentWaiting.length > 0){
    romperSegmento(e);
  }
  else if(linkSegmentWaiting.length > 0){
    unirSegmento(e);
  }
  else{
    switch(modo){
      case 'dibujo':
        obtenerPosicionParaDibujar(e);
        break;
      case 'edicion':
        //copiarGrafo(grafo, grafoEspejo);
        obtenerPosicionParaEditar(e);
        break;
      case 'mover':
        // console.log(grafo)
        marcarCirculosGrandesZoomPartida(e);
        marcarTagExtraPartida(e);
        if(tagExtraParaMover.length > 0){
          tagsExtraEspejo[0] = tagsExtra[tagExtraParaMover[0]].x;
          tagsExtraEspejo[1] = tagsExtra[tagExtraParaMover[0]].y;
        }
        else{
          marcarTagPartida(e);
        }
        //marcarTagPartida(e);
        if(tagParaMover.length > 0){
          var p = grafo[tagParaMover[0]][tagParaMover[8]];
          txt_tagSeleccionado.value = 'L='+p.distancia+' '+p.diametro+'\'\' AG'
          tagEditable = [tagParaMover[0], tagParaMover[8]]
          setTagGrade(p.tagAngulo)
        }
        else{
          marcarPuntoPartida(e);
          //txt_tagSeleccionado.value = 'Ninguno';
          //tagEditable = new Array();
        }

        break;
    }
  }


}, false);

document.getElementById("lienzo-hoja").addEventListener('mousemove', function(e) {
  // console.log("se activa el evento mousemove");
  if(!e){e = window.event;}
  var el = document.getElementById('zoomContainer');//contenedor del svgZoom
  var svgChild = document.getElementById('zoomContentSvg');

  x = e.clientX-this.getBoundingClientRect().left-this.clientLeft-el.offsetWidth/2;
  y = e.clientY-this.getBoundingClientRect().top-this.clientTop-el.offsetHeight/2;

  // console.log(x+zoomRadioLupa);
  // console.log(y+zoomRadioLupa);

  nX = (x+zoomRadioLupa)*zoomEscala - zoomRadioLupa
  nY = (y+zoomRadioLupa)*zoomEscala - zoomRadioLupa

  if(x < -zoomRadioLupa || x > 677 - zoomRadioLupa)
    el.style.display = 'none'
  if(y < -zoomRadioLupa || y > 718 - zoomRadioLupa)
    el.style.display = 'none'

  el.style.left = Math.min(Math.max(-zoomRadioLupa,x),this.clientWidth-el.offsetWidth+zoomRadioLupa) +"px";
  el.style.top = Math.min(Math.max(-zoomRadioLupa,y),this.clientHeight-el.offsetHeight+zoomRadioLupa) +"px";
  svgChild.style.left = -nX//-x*zoomEscala-(zoomRadioLupa/2)*zoomEscala +"px";
  svgChild.style.top = -nY//-y*zoomEscala-(zoomRadioLupa/2)*zoomEscala +"px";

  if(brokenSegmentWaiting.length == 0 && linkSegmentWaiting.length == 0){
    switch(modo){
      case 'dibujo':
        break;
      case 'edicion':
        break;
      case 'mover':
        if(circulosGrandesExtraParaMover.length > 0){
          console.log("moviendo Circulos Grandes");
          moverCirculosGrandesExtra(e);
        }
        else if(tagExtraParaMover.length > 0){
          moverTagExtra(e);
        }
        else if(tagParaMover.length > 0){
          moverTagComponentes(e);
        }
        else if(trozoParaMover.length > 0){
          moverTrozoComponentes(e);
        }
        if(zoomActive){
          if(svgChild!=null){
            while (svgChild.firstChild) {
                svgChild.removeChild(svgChild.firstChild);
            }
          }
          loadSvgLienzo(svgContent, svgChild, zoomEscala, zoomRadioLupa)
        }
        break;
    }
  }

});

svg_lienzo.addEventListener('mousemove', function(e){
  if(zoomActive){
    var el = document.getElementById('zoomContainer');//contenedor del svgZoom
    el.style.display = 'block'
  }
  if(brokenSegmentWaiting.length == 0 && linkSegmentWaiting.length == 0){
    switch(modo){
      case 'dibujo':

        break;
      case 'edicion':
        break;
      case 'mover':
        //moverTrozo(e)
        if(tagExtraParaMover.length > 0){
          moverTagExtra(e);
        }
        else if(tagParaMover.length > 0){
          moverTagComponentes(e);
        }
        else if(trozoParaMover.length > 0){
          moverTrozoComponentes(e);
        }
        /*if(tagParaMover.length == 0)
          moverTrozoComponentes(e);
        else
          moverTagComponentes(e);*/
        break;
    }

  }

  // console.log("mousemove");
  // activarZoom();
}, false);

document.getElementById("lienzo-hoja").addEventListener('mouseup', function(e) {
  if(!e){e = window.event;}
  var el = document.getElementById('zoomContainer');
  var svgChild = document.getElementById('zoomContentSvg');

  x = e.clientX-this.getBoundingClientRect().left-this.clientLeft-el.offsetWidth/2;
  y = e.clientY-this.getBoundingClientRect().top-this.clientTop-el.offsetHeight/2;
  nX = (x+zoomRadioLupa)*zoomEscala - zoomRadioLupa
  nY = (y+zoomRadioLupa)*zoomEscala - zoomRadioLupa
  el.style.left = Math.min(Math.max(-zoomRadioLupa,x),this.clientWidth-el.offsetWidth+zoomRadioLupa) +"px";
  el.style.top = Math.min(Math.max(-zoomRadioLupa,y),this.clientHeight-el.offsetHeight+zoomRadioLupa) +"px";
  svgChild.style.left = -nX//-x*zoomEscala-zoomRadioLupa +"px";
  svgChild.style.top = -nY//-y*zoomEscala-zoomRadioLupa +"px";


  if(brokenSegmentWaiting.length == 0 && linkSegmentWaiting.length == 0){
    switch(modo){
      case 'dibujo':
        break;
      case 'edicion':
        break;
      case 'mover':
        if(tagExtraParaMover.length > 0){
          desmarcarTagExtra(e)
        }
        else if(tagParaMover.length > 0){
          desmarcarTagComponentes(e)
        }
        else{
          desmarcarPuntoPartidaComponentes(e)
        }
        break;
    }
  }
  else{
    brokenSegmentWaiting = new Array();
    linkSegmentWaiting = new Array();
  }
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';

});

svg_lienzo.addEventListener('mouseup', function(e){
  if(brokenSegmentWaiting.length == 0 && linkSegmentWaiting.length == 0){
    switch(modo){
      case 'dibujo':
        //punteroDeDibujo = new Array();
        break;
      case 'edicion':
        //punteroDeEdicion = new Array();
        break;
      case 'mover':
        //desmarcarPuntoPartida(e)
        if(tagExtraParaMover.length > 0){
          desmarcarTagExtra(e)
        }
        else if(tagParaMover.length > 0){
          desmarcarTagComponentes(e);
        }
        else{

          desmarcarPuntoPartidaComponentes(e);
        }
        /*if(tagParaMover.length == 0)
          desmarcarPuntoPartidaComponentes(e);
        else
          desmarcarTagComponentes(e);*/

        break;
    }
  }
  else{
    brokenSegmentWaiting = new Array();
    linkSegmentWaiting = new Array();
  }
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
  // console.log("mouseup");
}, false);

document.getElementById("lienzo-hoja").addEventListener('mouseleave', function(e) {
  if(!e){e = window.event;}
  var el = document.getElementById('zoomContainer');
  var svgChild = document.getElementById('zoomContentSvg');

  x = e.clientX-this.getBoundingClientRect().left-this.clientLeft-el.offsetWidth/2;
  y = e.clientY-this.getBoundingClientRect().top-this.clientTop-el.offsetHeight/2;
  nX = (x+zoomRadioLupa)*zoomEscala - zoomRadioLupa
  nY = (y+zoomRadioLupa)*zoomEscala - zoomRadioLupa
  el.style.left = Math.min(Math.max(-zoomRadioLupa,x),this.clientWidth-el.offsetWidth+zoomRadioLupa) +"px";
  el.style.top = Math.min(Math.max(-zoomRadioLupa,y),this.clientHeight-el.offsetHeight+zoomRadioLupa) +"px";
  svgChild.style.left = -nX//-x*zoomEscala-zoomRadioLupa +"px";
  svgChild.style.top = -nY//-y*zoomEscala-zoomRadioLupa +"px";


  if(brokenSegmentWaiting.length == 0 && linkSegmentWaiting.length == 0){
    switch(modo){
      case 'dibujo':
        break;
      case 'edicion':

        break;
      case 'mover':

        if(tagExtraParaMover.length > 0){
          desmarcarTagExtra(e)
        }
        else if(tagParaMover.length > 0){
          desmarcarTagComponentes(e);
        }
        else{
          desmarcarPuntoPartidaComponentes(e);
        }
        break;
    }
  }
  else{
    brokenSegmentWaiting = new Array();
    linkSegmentWaiting = new Array();
  }
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';

});

svg_lienzo.addEventListener('mouseleave', function(e){

  if(brokenSegmentWaiting.length == 0 && linkSegmentWaiting.length == 0){
    switch(modo){
      case 'dibujo':
        //punteroDeDibujo = new Array();
        break;
      case 'edicion':
        //punteroDeEdicion = new Array();
        break;
      case 'mover':
        //desmarcarPuntoPartida(e)

        if(tagExtraParaMover.length > 0){
          desmarcarTagExtra(e)
        }
        else if(tagParaMover.length > 0){
          desmarcarTagComponentes(e);
        }
        else{
          desmarcarPuntoPartidaComponentes(e);
        }
        /*if(tagParaMover.length == 0)
          desmarcarPuntoPartidaComponentes(e);
        else
          desmarcarTagComponentes(e);*/

        break;
    }
  }
  else{
    brokenSegmentWaiting = new Array();
    linkSegmentWaiting = new Array();
  }
  /*switch(modo){
    case 'dibujo':
      break;
    case 'edicion':
      break;
    case 'mover':
      //desmarcarPuntoPartida(e)
      //desmarcarPuntoPartidaComponentes(e);
      break;
  }*/
  ///////////////////////////////////////////////////////////////
  document.getElementById('graphData').value = JSON.stringify(grafo) || '[]';
  document.getElementById('tagsExtra').value = JSON.stringify(tagsExtra) || '[]';
  ///////////////////////////////////////////////////////////////
  // console.log("mouseleave")
}, false);

function closeTuto(){
  document.getElementById('first-draw').style.display = 'none';
}

function tNext(){

  if(document.getElementById('tDiv_1').className == 'content'){
    document.getElementById('tDiv_1').className = 'content none'
    document.getElementById('tDiv_2').className = 'content'
  }
  else if(document.getElementById('tDiv_2').className == 'content'){
    document.getElementById('tDiv_2').className = 'content none'
    document.getElementById('tDiv_3').className = 'content'
  }
  else if(document.getElementById('tDiv_3').className == 'content'){
    document.getElementById('tDiv_3').className = 'content none'
    document.getElementById('tDiv_4').className = 'content'
  }
  else if(document.getElementById('tDiv_4').className == 'content'){
    document.getElementById('tDiv_4').className = 'content none'
    document.getElementById('tDiv_5').className = 'content'
  }
  else if(document.getElementById('tDiv_5').className == 'content'){
    document.getElementById('tDiv_5').className = 'content none'
    document.getElementById('tDiv_6').className = 'content'
  }
  else if(document.getElementById('tDiv_6').className == 'content'){
    document.getElementById('tDiv_6').className = 'content none'
    document.getElementById('tDiv_7').className = 'content'
  }
}
function tBack(){
  if(document.getElementById('tDiv_6').className == 'content'){
    document.getElementById('tDiv_6').className = 'content none'
    document.getElementById('tDiv_5').className = 'content'
  }
  else if(document.getElementById('tDiv_5').className == 'content'){
    document.getElementById('tDiv_5').className = 'content none'
    document.getElementById('tDiv_4').className = 'content'
  }
  else if(document.getElementById('tDiv_4').className == 'content'){
    document.getElementById('tDiv_4').className = 'content none'
    document.getElementById('tDiv_3').className = 'content'
  }
  else if(document.getElementById('tDiv_3').className == 'content'){
    document.getElementById('tDiv_3').className = 'content none'
    document.getElementById('tDiv_2').className = 'content'
  }
  else if(document.getElementById('tDiv_2').className == 'content'){
    document.getElementById('tDiv_2').className = 'content none'
    document.getElementById('tDiv_1').className = 'content'
  }
}
function selectT(miId, type, disA, disB){

  if(type == 'med'){
    document.getElementById('btn-medT_1').className = 'btn-itm med1'
    document.getElementById('btn-medT_2').className = 'btn-itm med2'
    // document.getElementById('btn-medT_3').className = 'btn-itm med3'
    document.getElementById('btn-medT_4').className = 'btn-itm med4'
    document.getElementById('btn-medT_5').className = 'btn-itm med5'
    document.getElementById('btn-medT_6').className = 'btn-itm med6'
    // document.getElementById('btn-medT_7').className = 'btn-itm med7'
    document.getElementById('btn-medT_8').className = 'btn-itm med8'

    document.getElementById('btn-regT_1').className = 'btn-itm reg1'
    document.getElementById('btn-regT_2').className = 'btn-itm reg2'
    document.getElementById('btn-regT_3').className = 'btn-itm reg3'
    document.getElementById('btn-regT_4').className = 'btn-itm reg4'
    document.getElementById('btn-regT_5').className = 'btn-itm reg5'
    document.getElementById('btn-regT_6').className = 'btn-itm reg6'
    document.getElementById('btn-regT_7').className = 'btn-itm reg7'
    document.getElementById('btn-regT_8').className = 'btn-itm reg8'

    document.getElementById('btn-rgsT_1').className = 'btn-itm rgs1'
    document.getElementById('btn-rgsT_2').className = 'btn-itm rgs2'
    document.getElementById('btn-rgsT_3').className = 'btn-itm rgs3'
    document.getElementById('btn-rgsT_4').className = 'btn-itm rgs4'
    document.getElementById('btn-rgsT_5').className = 'btn-itm rgs5'
    document.getElementById('btn-rgsT_6').className = 'btn-itm rgs6'
    document.getElementById('btn-rgsT_7').className = 'btn-itm rgs7'
    document.getElementById('btn-rgsT_8').className = 'btn-itm rgs8'
  }
  else if(type == 'ttub'){
    document.getElementById('btn-ttbT_1').className = 'btn-itm ttb';
    document.getElementById('btn-ttbT_2').className = 'btn-itm ttb';
    document.getElementById('btn-ttbT_3').className = 'btn-itm ttb';
  }
  else if(type == 'dia'){
    document.getElementById('btn-diaT_1').className = 'btn-itm dia';
    document.getElementById('btn-diaT_2').className = 'btn-itm dia';
    document.getElementById('btn-diaT_3').className = 'btn-itm dia';
    document.getElementById('btn-diaT_4').className = 'btn-itm dia';
  }
  else if(type == 'dir'){
    document.getElementById('btn-angT_1').className = 'btn-itm tg-30';
    document.getElementById('btn-angT_2').className = 'btn-itm tg-90';
    document.getElementById('btn-angT_3').className = 'btn-itm tg-150';
    document.getElementById('btn-angT_4').className = 'btn-itm tg-210';
    document.getElementById('btn-angT_5').className = 'btn-itm tg-270';
    document.getElementById('btn-angT_6').className = 'btn-itm tg-330';
  }


  document.getElementById(miId).className = document.getElementById(miId).className + ' select';

  if(type == 'med'){
    document.getElementById(disA).className = 'btn-nxt full';
    document.getElementById(disB).disabled = false;
    tutorialArray[0] = miId;
    // console.log(document.getElementById(miId).className);
    switch (document.getElementById(miId).className) {
      case 'btn-itm med1 select': document.getElementById("btn-medGT").className = 'btn-itm med11'; document.getElementById("g_medidor").className = 'angle g-medidor11'; break;
      case 'btn-itm med2 select': document.getElementById("btn-medGT").className = 'btn-itm med12'; document.getElementById("g_medidor").className = 'angle g-medidor12'; break;
      case 'btn-itm med4 select': document.getElementById("btn-medGT").className = 'btn-itm med14'; document.getElementById("g_medidor").className = 'angle g-medidor14'; break;
      case 'btn-itm med5 select': document.getElementById("btn-medGT").className = 'btn-itm med15'; document.getElementById("g_medidor").className = 'angle g-medidor15'; break;
      case 'btn-itm med6 select': document.getElementById("btn-medGT").className = 'btn-itm med16'; document.getElementById("g_medidor").className = 'angle g-medidor16'; break;
      case 'btn-itm med8 select': document.getElementById("btn-medGT").className = 'btn-itm med18'; document.getElementById("g_medidor").className = 'angle g-medidor18'; break;

      case 'btn-itm reg1 select': document.getElementById('btn-medGT').className = 'btn-itm reg11'; document.getElementById("g_medidor").className = 'angle g-regulador11'; break;
      case 'btn-itm reg2 select': document.getElementById('btn-medGT').className = 'btn-itm reg12'; document.getElementById("g_medidor").className = 'angle g-regulador12'; break;
      case 'btn-itm reg3 select': document.getElementById('btn-medGT').className = 'btn-itm reg13'; document.getElementById("g_medidor").className = 'angle g-regulador13'; break;
      case 'btn-itm reg4 select': document.getElementById('btn-medGT').className = 'btn-itm reg14'; document.getElementById("g_medidor").className = 'angle g-regulador14'; break;
      case 'btn-itm reg5 select': document.getElementById('btn-medGT').className = 'btn-itm reg15'; document.getElementById("g_medidor").className = 'angle g-regulador15'; break;
      case 'btn-itm reg6 select': document.getElementById('btn-medGT').className = 'btn-itm reg16'; document.getElementById("g_medidor").className = 'angle g-regulador16'; break;
      case 'btn-itm reg7 select': document.getElementById('btn-medGT').className = 'btn-itm reg17'; document.getElementById("g_medidor").className = 'angle g-regulador17'; break;
      case 'btn-itm reg8 select': document.getElementById('btn-medGT').className = 'btn-itm reg18'; document.getElementById("g_medidor").className = 'angle g-regulador18'; break;

      case 'btn-itm rgs1 select': document.getElementById('btn-medGT').className = 'btn-itm rgs11'; document.getElementById("g_medidor").className = 'angle g-s-regulador11'; break;
      case 'btn-itm rgs2 select': document.getElementById('btn-medGT').className = 'btn-itm rgs12'; document.getElementById("g_medidor").className = 'angle g-s-regulador12'; break;
      case 'btn-itm rgs3 select': document.getElementById('btn-medGT').className = 'btn-itm rgs13'; document.getElementById("g_medidor").className = 'angle g-s-regulador13'; break;
      case 'btn-itm rgs4 select': document.getElementById('btn-medGT').className = 'btn-itm rgs14'; document.getElementById("g_medidor").className = 'angle g-s-regulador14'; break;
      case 'btn-itm rgs5 select': document.getElementById('btn-medGT').className = 'btn-itm rgs15'; document.getElementById("g_medidor").className = 'angle g-s-regulador15'; break;
      case 'btn-itm rgs6 select': document.getElementById('btn-medGT').className = 'btn-itm rgs16'; document.getElementById("g_medidor").className = 'angle g-s-regulador16'; break;
      case 'btn-itm rgs7 select': document.getElementById('btn-medGT').className = 'btn-itm rgs17'; document.getElementById("g_medidor").className = 'angle g-s-regulador17'; break;
      case 'btn-itm rgs8 select': document.getElementById('btn-medGT').className = 'btn-itm rgs18'; document.getElementById("g_medidor").className = 'angle g-s-regulador18'; break;

      default: document.getElementById("btn-medGT").className = 'btn-itm med11'; break;

    }
    // document.getElementById("btn-medGT").className = 'btn-itm'
  }
  else if(type == 'ttub'){
    document.getElementById(disA).className = 'btn-nxt';
    document.getElementById(disB).disabled = false;
    tutorialArray[1] = miId;
  }
  else if(type == 'dia'){
    document.getElementById(disA).className = 'btn-nxt';
    document.getElementById(disB).disabled = false;
    tutorialArray[2] = miId;
  }
  else if(type == 'dis'){

    var a = Math.round(parseFloat(document.getElementById('ipt-dis').value)*100)/100;
    document.getElementById('ipt-dis').className = '';

    if(isNaN(a) || a <= 0){
      document.getElementById('ipt-dis').value = '0';
      document.getElementById(disA).className = 'btn-nxtDis';
      document.getElementById(disB).disabled = true;
      tutorialArray[3] = 0;
    }
    else{
      document.getElementById('ipt-dis').value = a;
      document.getElementById(disA).className = 'btn-nxt';
      document.getElementById(disB).disabled = false;
      tutorialArray[3] = a;
    }

  }
  else{
    document.getElementById(disA).className = 'btn-nxt';
    document.getElementById(disB).disabled = false;
    tutorialArray[4] = miId;
  }
  // console.log(tutorialArray);
}

function tHecho(){
  //console.log('hecho')
  //console.log(tutorialArray)

  //typeTub = 'vt';
  //diametro = '1';
  //distancia = 1;
  //grado = 30;

  //init()
  //dibujar()
  //addThisSegment('segAdd0__1');
  //addThisSegmentTuto();

  //addThisSegmentTuto(0, 1, tTypeTub, tDiametro, tDistancia, tAngulo){

  var mT = 1;
  switch (tutorialArray[0]) {
    case 'btn-medT_1': mT = 1; break;
    case 'btn-medT_2': mT = 2; break;
    case 'btn-medT_3': mT = 3; break;
    case 'btn-medT_4': mT = 4; break;
    case 'btn-medT_5': mT = 5; break;
    case 'btn-medT_6': mT = 6; break;
    case 'btn-medT_7': mT = 7; break;
    case 'btn-medT_8': mT = 8; break;
    case 'btn-regT_1': mT = 9; break;
    case 'btn-regT_2': mT = 10; break;
    case 'btn-regT_3': mT = 11; break;
    case 'btn-regT_4': mT = 12; break;
    case 'btn-regT_5': mT = 13; break;
    case 'btn-regT_6': mT = 14; break;
    case 'btn-regT_7': mT = 15; break;
    case 'btn-regT_8': mT = 16; break;
    case 'btn-rgsT_1': mT = 17; break;
    case 'btn-rgsT_2': mT = 18; break;
    case 'btn-rgsT_3': mT = 19; break;
    case 'btn-rgsT_4': mT = 20; break;
    case 'btn-rgsT_5': mT = 21; break;
    case 'btn-rgsT_6': mT = 22; break;
    case 'btn-rgsT_7': mT = 23; break;
    case 'btn-rgsT_8': mT = 24; break;
    default: mT = 1; break;

  }
  // var mT = parseInt(tutorialArray[0].substring(9))

  var tT = parseInt(tutorialArray[1].substring(9))

  switch(tT){
    case 1:
      tT = 'et';
      break;
    case 2:
      tT = 'ep';
      break;
    case 3:
      tT = 'vt';
      break;
  }

  var dT = parseInt(tutorialArray[2].substring(9))

  switch(dT){
    case 1:
      dT = '12';
      break;
    case 2:
      dT = '34';
      break;
    case 3:
      dT = '1';
      break;
    case 4:
      dT = '14';
      break;
  }

  var aT = parseInt(tutorialArray[4].substring(9))

  switch(aT){
    case 1:
      aT = 30;
      break;
    case 2:
      aT = 90;
      break;
    case 3:
      aT = 150;
      break;
    case 4:
      aT = 210;
      break;
    case 5:
      aT = 270;
      break;
    case 6:
      aT = 330;
      break;
  }

  addThisSegmentTuto(0, 1, mT,tT, dT, tutorialArray[3], aT)

  document.getElementById('first-draw').style.display = 'none';
  document.getElementById('distancia').value = tutorialArray[3];
  setTub(tT, dT);
  obtenerPosicionParaDibujarTutorial([grafo[0][3].x, grafo[0][3].y]);
  // alert("Empiece a dibujar")
}

window.onload = init();
