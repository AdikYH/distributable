var xls_btn = document.getElementById('xls_btn');
var in1_btn = document.getElementById('in1_btn');
var iso_btn = document.getElementById('iso_btn');
var mca_btn = document.getElementById('mca_btn');
var pln_btn = document.getElementById('pln_btn');
var dep_btn = document.getElementById('dep_btn');
var ins_btn = document.getElementById('ins_btn');
var deu_btn = document.getElementById('deu_btn');
var rec_btn = document.getElementById('rec_btn');
var gan_btn = document.getElementById('gan_btn');
var sol_btn = document.getElementById('sol_btn');
var gan_btn = document.getElementById('gan_btn');
var mat_btn = document.getElementById('mat_btn');
var ypf_btn = document.getElementById('ypf_btn');

var tbl_excel = document.getElementById('tbl_excel');
var tbl_in1 = document.getElementById('tbl_informe01');
var tbl_isometrico = document.getElementById('tbl_isometrico');
var tbl_memoria = document.getElementById('tbl_memoria');
var tbl_plano = document.getElementById('tbl_plano');
var tbl_matDeposito = document.getElementById('tbl_dep');
var tbl_ins = document.getElementById('tbl_ins');
var tbl_deu = document.getElementById('tbl_deu');
var tbl_rec = document.getElementById('tbl_rec');
var tbl_gan = document.getElementById('tbl_gan');
var tbl_sol = document.getElementById('tbl_sol');
var tbl_mat = document.getElementById('tbl_material');
var tbl_ypf = document.getElementById('tbl_ypfb');

var myJsonData = document.getElementById('myJSON');

var exp_btn = document.getElementById('exp_btn');

var vCaneria = 5.8;
var vCodoPipa34 = [];
var vHexagonal34 = [];
var vCarburo1K = [];
var vMaterialExcedente = [];

var vPrecioMateriales = [];

var vPagoYPFB = new Object();//[];

var vSueldo12 = 22;
var vSueldo34 = 22;
var vSueldo01 = 24;
var vSueldo14 = 26;

var vCostoIn12 = 0;
var vCostoOu12 = 105;
var vCostoIn34 = 0;
var vCostoOu34 = 105;
var vCostoIn01 = 55;
var vCostoOu01 = 160;
var vCostoIn14 = 55;
var vCostoOu14 = 160;

/////////////////////////////////////////////////////
var tSp = document.getElementById('tSp');
var pSp = document.getElementById('pSp');
var rSp = document.getElementById('rSp');

var tot = 0;
var pnd = 0;
var rdy = 0;
/////////////////////////////////////////////////////


function normalChange(miID){
  //alert('Cambiando')
  /*vCostoIn12
vCostoOu12
vCostoIn34
vCostoOu34
vCostoIn01
vCostoOu01
vCostoIn14
vCostoOu14*/
  switch(miID){

    case 'vCaneria':

      var miValor = document.getElementById(miID).value;

      if(miValor.length == 0 || !parseFloat(miValor) || parseFloat(miValor) == 0) {
        miValor = 5.8;
        document.getElementById(miID).value = 5.8;
      }
      vCaneria = miValor;
      actualizarMarcado();
      //console.log(obtenerMarcado())

      break;

    case 'vSueldo12':
      var miValor = document.getElementById(miID).value;
      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vSueldo12 = miValor;
      actualizarMarcado();
      break;
    case 'vSueldo34':
      var miValor = document.getElementById(miID).value;
      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vSueldo34 = miValor;
      actualizarMarcado();
      break;
    case 'vSueldo01':
      var miValor = document.getElementById(miID).value;
      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vSueldo01 = miValor;
      actualizarMarcado();
      break;
    case 'vSueldo14':
      var miValor = document.getElementById(miID).value;
      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vSueldo14 = miValor;
      actualizarMarcado();
      break;

    case 'vCostoIn12':
      var miValor = document.getElementById(miID).value;
      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vCostoIn12 = miValor;
      actualizarMarcado();
      break;
    case 'vCostoOu12':
      var miValor = document.getElementById(miID).value;
      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vCostoOu12 = miValor;
      actualizarMarcado();
      break;
    case 'vCostoIn34':
       var miValor = document.getElementById(miID).value;
      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vCostoIn34 = miValor;
      actualizarMarcado();
      break;
    case 'vCostoOu34':
       var miValor = document.getElementById(miID).value;
      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vCostoOu34 = miValor;
      actualizarMarcado();
      break;
    case 'vCostoIn01':
       var miValor = document.getElementById(miID).value;

      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vCostoIn01 = miValor;
      actualizarMarcado();
      break;
    case 'vCostoOu01':
       var miValor = document.getElementById(miID).value;

      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vCostoOu01 = miValor;
      actualizarMarcado();
      break;
    case 'vCostoIn14':
       var miValor = document.getElementById(miID).value;

      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vCostoIn14 = miValor;
      actualizarMarcado();
      break;
    case 'vCostoOu14':
       var miValor = document.getElementById(miID).value;

      if(miValor.length == 0 || !parseFloat(miValor)) {
        miValor = 0;
        document.getElementById(miID).value = 0;
      }
      vCostoOu14 = miValor;
      actualizarMarcado();
      break;
  }
}

function actualizarMarcado(){
  var miTUpdate = obtenerMarcado();

  switch(miTUpdate){
    case 0:
      vaciar(tbl_excel);
      llenarExcel();
      break;
    case 1:
      vaciar(tbl_in1);
      llenarInforme01();
      break;
    case 2:
      vaciar(tbl_isometrico);
      llenarIsometrico();
      break;
    case 3:
      vaciar(tbl_memoria);
      llenarMemoria();
      break;
    case 4:
      vaciar(tbl_plano);
      llenarPlano();
      break;
    case 5:
      vaciar(tbl_sol);
      llenarSolicitudYPFB();
      break;
    case 6:
      vaciar(tbl_matDeposito);
      llenarDeposito();
      break;
    case 7:
      vaciar(tbl_ins);
      llenarInstalacionPaga();
      break;
    case 8:
      vaciar(tbl_deu);
      llenarDeudaDueno();
      break;
    case 9:
      vaciar(tbl_rec);
      llenarRecepcion();
      break;
    case 10:
      vaciar(tbl_gan);
      llenarGanancia();
      break;


  }
}

function obtenerMarcado(){
  //console.log(document.getElementById('table-container-header').childNodes.length)
  for(idv = 0; idv < document.getElementById('table-container-header').childNodes.length; idv++){
    if(document.getElementById('table-container-header').childNodes[idv].className == 'title marked')
      return idv;//document.getElementById('table-container-header').childNodes[idv].innerHTML
    //console.log(document.getElementById('table-container-header').childNodes[idv].className)
    //console.log(document.getElementById('table-container-header').childNodes[idv].innerHTML)
  }
}

function initTabla(){

  var miCostoData = JSON.parse(document.getElementById('vPagoYPFB').value);

  var miTablaYPFB = document.getElementById('YPFBTable');
  vaciar(miTablaYPFB);
  llenarTablaYPFBCostosIns(miTablaYPFB, miCostoData['distancia'], miCostoData['costo'], miCostoData);
  /////////////////////////////////////////////////////////////////////////////////////////////////////

  //console.log(Math.round(parseFloat(document.getElementById('vCaneria').value)*100)/100);
  vCaneria = Math.round(parseFloat(document.getElementById('vCaneria').value)*100)/100;

  var miExVector = JSON.parse('['+document.getElementById('vMaterialExcedente').value+']');
  vMaterialExcedente = miExVector;

  var miExVector1 = JSON.parse('['+document.getElementById('vCodoPipa34').value+']');
  vCodoPipa34 = miExVector1;
  //console.log(vCodoPipa34)

  var miExVector2 = JSON.parse('['+document.getElementById('vHexagonal34').value+']');
  vHexagonal34 = miExVector2;

  var miExVector3 = JSON.parse('['+document.getElementById('vCarburo1K').value+']');
  vCarburo1K = miExVector3;

  var miExVector4 = JSON.parse('['+document.getElementById('vPrecioMateriales').value+']');
  vPrecioMateriales = miExVector4;

  var miExVector5 = JSON.parse(document.getElementById('vPagoYPFB').value);
  //console.log(miExVector5)
  vPagoYPFB = miExVector5;
  //console.log(vPagoYPFB[0]['costo']);
  //console.log(vPagoYPFB[0].costo);


  vSueldo12 = Math.round(parseFloat(document.getElementById('vSueldo12').value)*100)/100;
  vSueldo34 = Math.round(parseFloat(document.getElementById('vSueldo34').value)*100)/100;
  vSueldo01 = Math.round(parseFloat(document.getElementById('vSueldo01').value)*100)/100;
  vSueldo14 = Math.round(parseFloat(document.getElementById('vSueldo14').value)*100)/100;
  vCostoIn12 = Math.round(parseFloat(document.getElementById('vCostoIn12').value)*100)/100;
  vCostoOu12 = Math.round(parseFloat(document.getElementById('vCostoOu12').value)*100)/100;
  vCostoIn34 = Math.round(parseFloat(document.getElementById('vCostoIn34').value)*100)/100;
  vCostoOu34 = Math.round(parseFloat(document.getElementById('vCostoOu34').value)*100)/100;
  vCostoIn01 = Math.round(parseFloat(document.getElementById('vCostoIn01').value)*100)/100;
  vCostoOu01 = Math.round(parseFloat(document.getElementById('vCostoOu01').value)*100)/100;
  vCostoIn14 = Math.round(parseFloat(document.getElementById('vCostoIn14').value)*100)/100;
  vCostoOu14 = Math.round(parseFloat(document.getElementById('vCostoOu14').value)*100)/100;

  xls_btn.className = 'title marked';
  showTable('excel');
  //var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson)
  exp_btn.style.visibility = 'visible';
  llenarIndicadores();

}

function llenarIndicadores(){
  tot = 0;
  pnd = 0;
  rdy = 0;
  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson);
  var tam = Object.keys(myJson).length;



  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    for(jdc = 0; jdc < tamDoc; jdc++){
      tot++;
      if(myJson[tag][jdc].ISOMETRICO.graphData == '' || JSON.parse(myJson[tag][jdc].ISOMETRICO.graphData)[0] == undefined || JSON.parse(myJson[tag][jdc].ISOMETRICO.graphData)[0].length <= 1){
        pnd++;
      }
      else{
        rdy++;
      }
    }
  }
  tSp.innerHTML = tot;
  pSp.innerHTML = pnd;
  rSp.innerHTML = rdy;
}

function showTable(miTabla){
  switch(miTabla){
    case 'excel':
      //console.log('hola excel');
      //tbl_matDeposito.className = 'visible';

      xls_btn.className = 'title marked';
      in1_btn.className = 'title';
      iso_btn.className = 'title';
      mca_btn.className = 'title';
      pln_btn.className = 'title';
      dep_btn.className = 'title';
      ins_btn.className = 'title';
      deu_btn.className = 'title';
      rec_btn.className = 'title';
      gan_btn.className = 'title none';
      sol_btn.className = 'title';
      mat_btn.className = 'title';
      ypf_btn.className = 'title';

      tbl_excel.className = 'visible';
      tbl_in1.className = '';
      tbl_isometrico.className = '';
      tbl_memoria.className = '';
      tbl_plano.className = '';
      tbl_matDeposito.className = '';
      tbl_ins.className = '';
      tbl_deu.className = '';
      tbl_rec.className = '';
      tbl_gan.className = '';
      tbl_sol.className = '';
      tbl_mat.className = '';
      tbl_ypf.className = '';
      vaciar(tbl_excel);
      llenarExcel();
      exp_btn.style.visibility = 'visible';
      //exp_btn.value = 'Exportar excel'
      exp_btn.setAttribute('onclick', 'exportar("tbl_excel", "Excel YPFB.xlsx")');
      break;
    case 'in1':
      xls_btn.className = 'title';
      in1_btn.className = 'title marked';
      iso_btn.className = 'title';
      mca_btn.className = 'title';
      pln_btn.className = 'title';
      dep_btn.className = 'title';
      ins_btn.className = 'title';
      deu_btn.className = 'title';
      rec_btn.className = 'title';
      gan_btn.className = 'title none';
      sol_btn.className = 'title';
      mat_btn.className = 'title';
      ypf_btn.className = 'title';

      tbl_excel.className = '';
      tbl_in1.className = 'visible';
      tbl_isometrico.className = '';7
      tbl_memoria.className = '';
      tbl_plano.className = '';
      tbl_matDeposito.className = '';
      tbl_ins.className = '';
      tbl_deu.className = '';
      tbl_rec.className = '';
      tbl_gan.className = '';
      tbl_sol.className = '';
      tbl_mat.className = '';
      tbl_ypf.className = '';
      vaciar(tbl_in1);
      llenarInforme01();
      exp_btn.style.visibility = 'hidden';
      break;
    case 'iso':
      xls_btn.className = 'title';
      in1_btn.className = 'title';
      iso_btn.className = 'title marked';
      mca_btn.className = 'title';
      pln_btn.className = 'title';
      dep_btn.className = 'title';
      ins_btn.className = 'title';
      deu_btn.className = 'title';
      rec_btn.className = 'title';
      gan_btn.className = 'title none';
      sol_btn.className = 'title';
      mat_btn.className = 'title';
      ypf_btn.className = 'title';

      tbl_excel.className = '';
      tbl_in1.className = '';
      tbl_isometrico.className = 'visible';
      tbl_memoria.className = '';
      tbl_plano.className = '';
      tbl_matDeposito.className = '';
      tbl_ins.className = '';
      tbl_deu.className = '';
      tbl_rec.className = '';
      tbl_gan.className = '';
      tbl_sol.className = '';
      tbl_mat.className = '';
      tbl_ypf.className = '';
      vaciar(tbl_isometrico);
      llenarIsometrico();
      exp_btn.style.visibility = 'hidden';
      break;
    case 'mca':
      xls_btn.className = 'title';
      in1_btn.className = 'title';
      iso_btn.className = 'title';
      mca_btn.className = 'title marked';
      pln_btn.className = 'title';
      dep_btn.className = 'title';
      ins_btn.className = 'title';
      deu_btn.className = 'title';
      rec_btn.className = 'title';
      gan_btn.className = 'title none';
      sol_btn.className = 'title';
      mat_btn.className = 'title';
      ypf_btn.className = 'title';

      tbl_excel.className = '';
      tbl_in1.className = '';
      tbl_isometrico.className = '';
      tbl_memoria.className = 'visible';
      tbl_plano.className = '';
      tbl_matDeposito.className = '';
      tbl_ins.className = '';
      tbl_deu.className = '';
      tbl_rec.className = '';
      tbl_gan.className = '';
      tbl_sol.className = '';
      tbl_mat.className = '';
      tbl_ypf.className = '';
      vaciar(tbl_memoria);
      llenarMemoria();
      exp_btn.style.visibility = 'hidden';
      break;
    case 'pln':
      xls_btn.className = 'title';
      in1_btn.className = 'title';
      iso_btn.className = 'title';
      mca_btn.className = 'title';
      pln_btn.className = 'title marked';
      dep_btn.className = 'title';
      ins_btn.className = 'title';
      deu_btn.className = 'title';
      rec_btn.className = 'title';
      gan_btn.className = 'title none';
      sol_btn.className = 'title';
      mat_btn.className = 'title';
      ypf_btn.className = 'title';

      tbl_excel.className = '';
      tbl_in1.className = '';
      tbl_isometrico.className = '';
      tbl_memoria.className = '';
      tbl_plano.className = 'visible';
      tbl_matDeposito.className = '';
      tbl_ins.className = '';
      tbl_deu.className = '';
      tbl_rec.className = '';
      tbl_gan.className = '';
      tbl_sol.className = '';
      tbl_mat.className = '';
      tbl_ypf.className = '';
      vaciar(tbl_plano);
      llenarPlano();
      exp_btn.style.visibility = 'hidden';
      break;
    case 'dep':
      xls_btn.className = 'title';
      in1_btn.className = 'title';
      iso_btn.className = 'title';
      mca_btn.className = 'title';
      pln_btn.className = 'title';
      dep_btn.className = 'title marked';
      ins_btn.className = 'title';
      deu_btn.className = 'title';
      rec_btn.className = 'title';
      gan_btn.className = 'title none';
      sol_btn.className = 'title';
      mat_btn.className = 'title';
      ypf_btn.className = 'title';

      tbl_excel.className = '';
      tbl_in1.className = '';
      tbl_isometrico.className = '';
      tbl_memoria.className = '';
      tbl_plano.className = '';
      tbl_matDeposito.className = 'visible';
      tbl_ins.className = '';
      tbl_deu.className = '';
      tbl_rec.className = '';
      tbl_gan.className = '';
      tbl_sol.className = '';
      tbl_mat.className = '';
      tbl_ypf.className = '';
      vaciar(tbl_matDeposito);
      llenarDeposito();
      exp_btn.style.visibility = 'visible';
      //exp_btn.value = 'Exportar lista'
      exp_btn.setAttribute('onclick', 'exportar("tbl_dep", "Material para deposito.xlsx")');
      break;
    case 'ins':
      xls_btn.className = 'title';
      in1_btn.className = 'title';
      iso_btn.className = 'title';
      mca_btn.className = 'title';
      pln_btn.className = 'title';
      dep_btn.className = 'title';
      ins_btn.className = 'title marked';
      deu_btn.className = 'title';
      rec_btn.className = 'title';
      gan_btn.className = 'title none';
      sol_btn.className = 'title';
      mat_btn.className = 'title';
      ypf_btn.className = 'title';

      tbl_excel.className = '';
      tbl_in1.className = '';
      tbl_isometrico.className = '';
      tbl_memoria.className = '';
      tbl_plano.className = '';
      tbl_matDeposito.className = '';
      tbl_ins.className = 'visible';
      tbl_deu.className = '';
      tbl_rec.className = '';
      tbl_gan.className = '';
      tbl_sol.className = '';
      tbl_mat.className = '';
      tbl_ypf.className = '';
      vaciar(tbl_ins);
      llenarInstalacionPaga();
      exp_btn.style.visibility = 'visible';
      //exp_btn.value = 'Exportar lista'
      exp_btn.setAttribute('onclick', 'exportar("tbl_ins", "Sueldo instalador.xlsx")');
      break;
    case 'deu':
      xls_btn.className = 'title';
      in1_btn.className = 'title';
      iso_btn.className = 'title';
      mca_btn.className = 'title';
      pln_btn.className = 'title';
      dep_btn.className = 'title';
      ins_btn.className = 'title';
      deu_btn.className = 'title marked';
      rec_btn.className = 'title';
      gan_btn.className = 'title none';
      sol_btn.className = 'title';
      mat_btn.className = 'title';
      ypf_btn.className = 'title';

      tbl_excel.className = '';
      tbl_in1.className = '';
      tbl_isometrico.className = '';
      tbl_memoria.className = '';
      tbl_plano.className = '';
      tbl_matDeposito.className = '';
      tbl_ins.className = '';
      tbl_deu.className = 'visible';
      tbl_rec.className = '';
      tbl_gan.className = '';
      tbl_sol.className = '';
      tbl_mat.className = '';
      tbl_ypf.className = '';
      vaciar(tbl_deu);
      llenarDeudaDueno();
      exp_btn.style.visibility = 'visible';
      //exp_btn.value = 'Exportar lista'
      exp_btn.setAttribute('onclick', 'exportar("tbl_deu", "Deuda dueño.xlsx")');
      break;
    case 'rec':
      xls_btn.className = 'title';
      in1_btn.className = 'title';
      iso_btn.className = 'title';
      mca_btn.className = 'title';
      pln_btn.className = 'title';
      dep_btn.className = 'title';
      ins_btn.className = 'title';
      deu_btn.className = 'title';
      rec_btn.className = 'title marked';
      gan_btn.className = 'title none';
      sol_btn.className = 'title';
      mat_btn.className = 'title';
      ypf_btn.className = 'title';

      tbl_excel.className = '';
      tbl_in1.className = '';
      tbl_isometrico.className = '';
      tbl_memoria.className = '';
      tbl_plano.className = '';
      tbl_matDeposito.className = '';
      tbl_ins.className = '';
      tbl_deu.className = '';
      tbl_rec.className = 'visible';
      tbl_gan.className = '';
      tbl_sol.className = '';
      tbl_mat.className = '';
      tbl_ypf.className = '';
      vaciar(tbl_rec);
      llenarRecepcion();
      exp_btn.style.visibility = 'visible';
      //exp_btn.value = 'Exportar lista'
      exp_btn.setAttribute('onclick', 'exportar("tbl_rec", "Recepcion.xlsx")');
      break;
    case 'gan':
      xls_btn.className = 'title';
      in1_btn.className = 'title';
      iso_btn.className = 'title';
      mca_btn.className = 'title';
      pln_btn.className = 'title';
      dep_btn.className = 'title';
      ins_btn.className = 'title';
      deu_btn.className = 'title';
      rec_btn.className = 'title';
      gan_btn.className = 'title marked';
      sol_btn.className = 'title';
      mat_btn.className = 'title';
      ypf_btn.className = 'title';

      tbl_excel.className = '';
      tbl_in1.className = '';
      tbl_isometrico.className = '';
      tbl_memoria.className = '';
      tbl_plano.className = '';
      tbl_matDeposito.className = '';
      tbl_ins.className = '';
      tbl_deu.className = '';
      tbl_rec.className = '';
      tbl_gan.className = 'visible';
      tbl_sol.className = '';
      tbl_mat.className = '';
      tbl_ypf.className = '';
      vaciar(tbl_gan);
      llenarGanancia();
      exp_btn.style.visibility = 'visible';
      //exp_btn.value = 'Exportar lista'
      exp_btn.setAttribute('onclick', 'exportar("tbl_gan", "Ganancia proyectada.xlsx")');
      break;
    case 'sol':
      xls_btn.className = 'title';
      in1_btn.className = 'title';
      iso_btn.className = 'title';
      mca_btn.className = 'title';
      pln_btn.className = 'title';
      dep_btn.className = 'title';
      ins_btn.className = 'title';
      deu_btn.className = 'title';
      rec_btn.className = 'title';
      gan_btn.className = 'title none';
      sol_btn.className = 'title marked';
      mat_btn.className = 'title';
      ypf_btn.className = 'title';

      tbl_excel.className = '';
      tbl_in1.className = '';
      tbl_isometrico.className = '';
      tbl_memoria.className = '';
      tbl_plano.className = '';
      tbl_matDeposito.className = '';
      tbl_ins.className = '';
      tbl_deu.className = '';
      tbl_rec.className = '';
      tbl_gan.className = '';
      tbl_sol.className = 'visible';
      tbl_mat.className = '';
      tbl_ypf.className = '';
      vaciar(tbl_sol);
      llenarSolicitudYPFB();
      exp_btn.style.visibility = 'visible';
      //exp_btn.value = 'Exportar lista'
      exp_btn.setAttribute('onclick', 'exportar("tbl_sol", "Solicitud Tuberia YPFB.xlsx")');
      break;
    case 'mat':
      xls_btn.className = 'title';
      in1_btn.className = 'title';
      iso_btn.className = 'title';
      mca_btn.className = 'title';
      pln_btn.className = 'title';
      dep_btn.className = 'title';
      ins_btn.className = 'title';
      deu_btn.className = 'title';
      rec_btn.className = 'title';
      gan_btn.className = 'title none';
      sol_btn.className = 'title';
      mat_btn.className = 'title marked';
      ypf_btn.className = 'title';

      tbl_excel.className = '';
      tbl_in1.className = '';
      tbl_isometrico.className = '';
      tbl_memoria.className = '';
      tbl_plano.className = '';
      tbl_matDeposito.className = '';
      tbl_ins.className = '';
      tbl_deu.className = '';
      tbl_rec.className = '';
      tbl_gan.className = '';
      tbl_sol.className = '';
      tbl_mat.className = 'visible';
      tbl_ypf.className = '';
      vaciarMat(tbl_mat);
      llenarPrecioMaterial();
      exp_btn.style.visibility = 'visible';
      //exp_btn.value = 'Exportar lista'
      exp_btn.setAttribute('onclick', 'exportar("tbl_material", "Precio material.xlsx")');
      break;

    case 'ypf':
      xls_btn.className = 'title';
      in1_btn.className = 'title';
      iso_btn.className = 'title';
      mca_btn.className = 'title';
      pln_btn.className = 'title';
      dep_btn.className = 'title';
      ins_btn.className = 'title';
      deu_btn.className = 'title';
      rec_btn.className = 'title';
      gan_btn.className = 'title none';
      sol_btn.className = 'title';
      mat_btn.className = 'title';
      ypf_btn.className = 'title marked';

      tbl_excel.className = '';
      tbl_in1.className = '';
      tbl_isometrico.className = '';
      tbl_memoria.className = '';
      tbl_plano.className = '';
      tbl_matDeposito.className = '';
      tbl_ins.className = '';
      tbl_deu.className = '';
      tbl_rec.className = '';
      tbl_gan.className = '';
      tbl_sol.className = '';
      tbl_mat.className = '';
      tbl_ypf.className = 'visible';
      vaciar(tbl_ypf);

      llenarPagoYPFB();
      exp_btn.style.visibility = 'visible';
      //exp_btn.value = 'Exportar lista'
      exp_btn.setAttribute('onclick', 'exportar("tbl_ypfb", "Pago de YPFB.xlsx")');
      break;
  }
}

function vaciar(miTablaLlena){
  while(miTablaLlena.getElementsByTagName('tr').length > 1)
  miTablaLlena.deleteRow(1);
}

function vaciarMat(miTablaLlena){
  for(v = 1; v < 41; v++){
    var r = document.getElementById('matR_'+v);
    var rL = document.getElementById('matR_'+v).childNodes.length;
    for(dc = rL-1; dc > 1; dc--)
      r.deleteCell(dc)
  }

  var rN = document.getElementById('matR_40');
  var rLN = document.getElementById('matR_40').childNodes.length;
  for(dc = rLN-1; dc > 0; dc--)
    rN.deleteCell(dc)
}

function llenarExcel(){

  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson);
  var tam = Object.keys(myJson).length;

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    for(jdc = 0; jdc < tamDoc; jdc++){

      var row = document.createElement('tr');

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Dpto'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Loc'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['DIST'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['ZONA'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['MANZ'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['PREDIO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['PISO/DPTO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['CARNET'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['AVDA/ CALLE'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['TEL/CEL'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['OBSERVACIONES'];
      row.appendChild(cell);

      tbl_excel.appendChild(row);

    }


  }
}

function llenarInforme01(){

  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson);
  var tam = Object.keys(myJson).length;

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    for(jdc = 0; jdc < tamDoc; jdc++){

      var row = document.createElement('tr');

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Dpto'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Loc'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['DIST'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['ZONA'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['MANZ'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['PREDIO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['PISO/DPTO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);

      ////////////////////////////////////////////////////
      cell = document.createElement('td');

      var myform = document.createElement('form');
      myform.setAttribute('action', '/idc');
      myform.setAttribute('method', 'post');

      var myJSONFullinput = document.createElement('input');
      myJSONFullinput.setAttribute('type', 'text');
      myJSONFullinput.setAttribute('value', myJsonData.value);
      myJSONFullinput.setAttribute('name', 'myFullJson');

      var myJSONinput = document.createElement('input');
      myJSONinput.setAttribute('type', 'text');
      myJSONinput.setAttribute('value', JSON.stringify(myJson[tag][jdc], null, 2));
      myJSONinput.setAttribute('name', 'myJson');

      var myProyectoinput = document.createElement('input');
      myProyectoinput.setAttribute('type', 'text');
      myProyectoinput.setAttribute('value', document.getElementById('spProyecto').innerHTML);
      myProyectoinput.setAttribute('name', 'myProyecto');

      var myRSinput = document.createElement('input');
      myRSinput.setAttribute('type', 'text');
      myRSinput.setAttribute('value', document.getElementById('eRazonSocial').value);
      myRSinput.setAttribute('name', 'myRS');

      var myResinput = document.createElement('input');
      myResinput.setAttribute('type', 'text');
      myResinput.setAttribute('value', document.getElementById('eResolucion').value);
      myResinput.setAttribute('name', 'myRes');

      var myDirinput = document.createElement('input');
      myDirinput.setAttribute('type', 'text');
      myDirinput.setAttribute('value', document.getElementById('eDireccion').value);
      myDirinput.setAttribute('name', 'myDir');

      var myProyinput = document.createElement('input');
      myProyinput.setAttribute('type', 'text');
      myProyinput.setAttribute('value', document.getElementById('eProyectista').value);
      myProyinput.setAttribute('name', 'myProy');

      var myInsinput = document.createElement('input');
      myInsinput.setAttribute('type', 'text');
      myInsinput.setAttribute('value', document.getElementById('eInstalador').value);
      myInsinput.setAttribute('name', 'myIns');

      var myRegPinput = document.createElement('input');
      myRegPinput.setAttribute('type', 'text');
      myRegPinput.setAttribute('value', document.getElementById('eRegistroP').value);
      myRegPinput.setAttribute('name', 'myRegP');

      var myInsPinput = document.createElement('input');
      myInsPinput.setAttribute('type', 'text');
      myInsPinput.setAttribute('value', document.getElementById('eInstalador').value);
      myInsPinput.setAttribute('name', 'myInsP');

      var myTelinput = document.createElement('input');
      myTelinput.setAttribute('type', 'text');
      myTelinput.setAttribute('value', document.getElementById('eTelefono').value);
      myTelinput.setAttribute('name', 'myTel');

      var myLocinput = document.createElement('input');
      myLocinput.setAttribute('type', 'text');
      myLocinput.setAttribute('value', document.getElementById('pLocalidad').value);
      myLocinput.setAttribute('name', 'myLoc');

      var myZoninput = document.createElement('input');
      myZoninput.setAttribute('type', 'text');
      myZoninput.setAttribute('value', document.getElementById('pNombreZona').value);
      myZoninput.setAttribute('name', 'myZon');

      var myDptoinput = document.createElement('input');
      myDptoinput.setAttribute('type', 'text');
      myDptoinput.setAttribute('value', document.getElementById('pDepartamento').value);
      myDptoinput.setAttribute('name', 'myDpto');

      var myAutorinput = document.createElement('input');
      myAutorinput.setAttribute('type', 'text');
      myAutorinput.setAttribute('value', document.getElementById('spAutor').innerHTML);
      myAutorinput.setAttribute('name', 'myAutor');

      var element = document.createElement('input');
      element.setAttribute('type', 'submit');
      //element.style.background = 'rgb(12, 85, 55)';
      element.setAttribute('value', 'VER');

      //console.log(JSON.parse(myJSON.ISOMETRICO.myDistanciaData));

      myform.appendChild(myProyectoinput);

      myform.appendChild(myRSinput);
      myform.appendChild(myResinput);
      myform.appendChild(myDirinput);
      myform.appendChild(myProyinput);
      myform.appendChild(myInsinput);
      myform.appendChild(myRegPinput);
      myform.appendChild(myInsPinput);
      myform.appendChild(myTelinput);
      myform.appendChild(myLocinput);
      myform.appendChild(myZoninput);
      myform.appendChild(myDptoinput);

      myform.appendChild(myAutorinput);
      myform.appendChild(myJSONinput);
      myform.appendChild(myJSONFullinput);
      myform.appendChild(element);

      cell.appendChild(myform);
      row.appendChild(cell);


      tbl_in1.appendChild(row);

    }


  }
}

function llenarIsometrico(){

  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson);
  var tam = Object.keys(myJson).length;

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    for(jdc = 0; jdc < tamDoc; jdc++){
      var row = document.createElement('tr');

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Dpto'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Loc'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['DIST'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['ZONA'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['MANZ'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['PREDIO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['PISO/DPTO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);

      ////////////////////////////////////////////////////
      cell = document.createElement('td');

      var myform = document.createElement('form');
      myform.setAttribute('action', '/myDrawer');
      myform.setAttribute('method', 'post');

      var myJSONFullinput = document.createElement('input');
      myJSONFullinput.setAttribute('type', 'text');
      myJSONFullinput.setAttribute('value', myJsonData.value);
      myJSONFullinput.setAttribute('name', 'myFullJson');

      var myJSONinput = document.createElement('input');
      myJSONinput.setAttribute('type', 'text');
      myJSONinput.setAttribute('value', JSON.stringify(myJson[tag][jdc], null, 2));
      myJSONinput.setAttribute('name', 'myJson');
      ///////////////////////////////////////
      //var myeResolucioninput = document.createElement('input');
      //myeResolucioninput.setAttribute('type', 'text');
      //myeResolucioninput.setAttribute('value', vCaneria);
      //myeResolucioninput.setAttribute('name', 'vCaneria');
      ///////////////////////////////////////

      var myCaneriainput = document.createElement('input');
      myCaneriainput.setAttribute('type', 'text');
      myCaneriainput.setAttribute('value', vCaneria);
      myCaneriainput.setAttribute('name', 'vCaneria');

      var myProyectoinput = document.createElement('input');
      myProyectoinput.setAttribute('type', 'text');
      myProyectoinput.setAttribute('value', document.getElementById('spProyecto').innerHTML);
      myProyectoinput.setAttribute('name', 'myProyecto');

      var myAutorinput = document.createElement('input');
      myAutorinput.setAttribute('type', 'text');
      myAutorinput.setAttribute('value', document.getElementById('spAutor').innerHTML);
      myAutorinput.setAttribute('name', 'myAutor');

      var myEmpresainput = document.createElement('input');
      myEmpresainput.setAttribute('type', 'text');
      myEmpresainput.setAttribute('value', document.getElementById('eRazonSocial').value);
      myEmpresainput.setAttribute('name', 'myEmpresa');

      var myProyectistainput = document.createElement('input');
      myProyectistainput.setAttribute('type', 'text');
      myProyectistainput.setAttribute('value', document.getElementById('eProyectista').value);
      myProyectistainput.setAttribute('name', 'myProyectista');

      var myILogoinput = document.createElement('input');
      myILogoinput.setAttribute('type', 'text');
      myILogoinput.setAttribute('value', document.getElementById('eImagenLogo').value);
      myILogoinput.setAttribute('name', 'myImagenLogo');

      var myTLogoinput = document.createElement('input');
      myTLogoinput.setAttribute('type', 'text');
      myTLogoinput.setAttribute('value', document.getElementById('eTextoLogo').value);
      myTLogoinput.setAttribute('name', 'myTextoLogo');

      var myInstaladorinput = document.createElement('input');
      myInstaladorinput.setAttribute('type', 'text');
      myInstaladorinput.setAttribute('value', document.getElementById('eInstalador').value);
      myInstaladorinput.setAttribute('name', 'myInstalador');

      var element = document.createElement('input');
      element.setAttribute('type', 'submit');

      if(myJson[tag][jdc].ISOMETRICO.graphData == '' || JSON.parse(myJson[tag][jdc].ISOMETRICO.graphData)[0] == undefined || JSON.parse(myJson[tag][jdc].ISOMETRICO.graphData)[0].length <= 1){
        element.setAttribute('value', 'CREAR');
        element.className = 'existe';
      }
      else{
        element.setAttribute('value', 'VER');
      }

      //console.log(JSON.parse(myJSON.ISOMETRICO.myDistanciaData));

      myform.appendChild(myProyectoinput);
      myform.appendChild(myAutorinput);
      myform.appendChild(myCaneriainput);
      myform.appendChild(myEmpresainput);
      myform.appendChild(myProyectistainput);
      myform.appendChild(myILogoinput);
      myform.appendChild(myTLogoinput);
      myform.appendChild(myInstaladorinput);
      myform.appendChild(myJSONinput);
      myform.appendChild(myJSONFullinput);
      myform.appendChild(element);

      cell.appendChild(myform);
      row.appendChild(cell);



      tbl_isometrico.appendChild(row);

    }

  }

  llenarIndicadores()
}

function llenarMemoria(){

  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson);
  var tam = Object.keys(myJson).length;

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    for(jdc = 0; jdc < tamDoc; jdc++){

      var row = document.createElement('tr');

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Dpto'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Loc'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['DIST'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['ZONA'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['MANZ'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['PREDIO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['PISO/DPTO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);

      ////////////////////////////////////////////////////
      cell = document.createElement('td');

      var myform = document.createElement('form');
      myform.setAttribute('action', '/memoria');
      myform.setAttribute('method', 'post');

      var myJSONFullinput = document.createElement('input');
      myJSONFullinput.setAttribute('type', 'text');
      myJSONFullinput.setAttribute('value', myJsonData.value);
      myJSONFullinput.setAttribute('name', 'myFullJson');

      var myJSONinput = document.createElement('input');
      myJSONinput.setAttribute('type', 'text');
      myJSONinput.setAttribute('value', JSON.stringify(myJson[tag][jdc], null, 2));
      myJSONinput.setAttribute('name', 'myJson');

      var myProyectoinput = document.createElement('input');
      myProyectoinput.setAttribute('type', 'text');
      myProyectoinput.setAttribute('value', document.getElementById('spProyecto').innerHTML);
      myProyectoinput.setAttribute('name', 'myProyecto');

      var myAutorinput = document.createElement('input');
      myAutorinput.setAttribute('type', 'text');
      myAutorinput.setAttribute('value', document.getElementById('spAutor').innerHTML);
      myAutorinput.setAttribute('name', 'myAutor');

      var element = document.createElement('input');
      element.setAttribute('type', 'submit');
      //element.style.background = 'rgb(12, 85, 55)';
      element.setAttribute('value', 'VER');

      //console.log(JSON.parse(myJSON.ISOMETRICO.myDistanciaData));

      myform.appendChild(myProyectoinput);
      myform.appendChild(myAutorinput);
      myform.appendChild(myJSONinput);
      myform.appendChild(myJSONFullinput);
      myform.appendChild(element);

      cell.appendChild(myform);
      row.appendChild(cell);

      tbl_memoria.appendChild(row);

    }


  }
}

function llenarPlano(){

  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson);
  var tam = Object.keys(myJson).length;

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    for(jdc = 0; jdc < tamDoc; jdc++){

      var row = document.createElement('tr');

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Dpto'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Loc'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['DIST'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['ZONA'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['MANZ'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['PREDIO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['PISO/DPTO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);

      ////////////////////////////////////////////////////
      cell = document.createElement('td');

      var myform = document.createElement('form');
      myform.setAttribute('action', '/plano');
      myform.setAttribute('method', 'post');

      var myJSONFullinput = document.createElement('input');
      myJSONFullinput.setAttribute('type', 'text');
      myJSONFullinput.setAttribute('value', myJsonData.value);
      myJSONFullinput.setAttribute('name', 'myFullJson');

      var myJSONinput = document.createElement('input');
      myJSONinput.setAttribute('type', 'text');
      myJSONinput.setAttribute('value', JSON.stringify(myJson[tag][jdc], null, 2));
      myJSONinput.setAttribute('name', 'myJson');

      var myProyectoinput = document.createElement('input');
      myProyectoinput.setAttribute('type', 'text');
      myProyectoinput.setAttribute('value', document.getElementById('spProyecto').innerHTML);
      myProyectoinput.setAttribute('name', 'myProyecto');

      var myAutorinput = document.createElement('input');
      myAutorinput.setAttribute('type', 'text');
      myAutorinput.setAttribute('value', document.getElementById('spAutor').innerHTML);
      myAutorinput.setAttribute('name', 'myAutor');

      var element = document.createElement('input');
      element.setAttribute('type', 'submit');
      //element.style.background = 'rgb(12, 85, 55)';
      element.setAttribute('value', 'VER');

      //console.log(JSON.parse(myJSON.ISOMETRICO.myDistanciaData));

      myform.appendChild(myProyectoinput);
      myform.appendChild(myAutorinput);
      myform.appendChild(myJSONinput);
      myform.appendChild(myJSONFullinput);
      myform.appendChild(element);

      cell.appendChild(myform);
      row.appendChild(cell);

      tbl_plano.appendChild(row);

    }


  }
}

function llenarSolicitudYPFB(){

  var myJson = JSON.parse(myJsonData.value);

  var tam = Object.keys(myJson).length;

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    var sT12 = 0;
    var sT34 = 0;
    var sTu1 = 0;
    var sT14 = 0;
    var miTSumCodo12 = 0;
    var miTSumCodo34 = 0;
    var miTSumCodo01 = 0;
    var miTSumCodo14 = 0;

    var miTSumCupla12 = 0;
    var miTSumCupla34 = 0;
    var miTSumCupla01 = 0;
    var miTSumCupla14 = 0;

    var miTSumTe12 = 0;
    var miTSumTe34 = 0;
    var miTSumTe01 = 0;
    var miTSumTe14 = 0;

    var miTSumTapon12 = 0;
    var miTSumTapon34 = 0;
    var miTSumTapon01 = 0;
    var miTSumTapon14 = 0;

    var miTSumAbrazadera12 = 0;
    var miTSumAbrazadera34 = 0;
    var miTSumAbrazadera01 = 0;
    var miTSumAbrazadera14 = 0;

    var miTSumRejilla = 0;
    var miTSumTornillo = 0;

    var miTSumReductor14a01 = 0;
    var miTSumReductor01a34 = 0;
    var miTSumReductor34a12 = 0;

    var miTSumValvula12 = 0;
    var miTSumValvula34 = 0;
    var miTSumValvula01 = 0;
    var miTSumValvula14 = 0;

    var miTSumTerminal = 0;

    var miTSumTeflon = 0;
    var miTSumVarilla = 0;

    for(jdc = 0; jdc < tamDoc; jdc++){

      var row = document.createElement('tr');
      //row.className = 'sinNada';

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Dpto'] +'-'+ myJson[tag][jdc]['Loc'] +'-'+ myJson[tag][jdc]['DIST'] +'-'+ myJson[tag][jdc]['ZONA'] +'-'+ myJson[tag][jdc]['MANZ'] +'-'+ myJson[tag][jdc]['PREDIO'] +'-'+ myJson[tag][jdc]['PISO/DPTO'];
      row.appendChild(cell);

      //////////////////////////////////////////////////////
      //SUMA DE VALORES
      //////////////////////////////////////////////////////
      var s12 = 0;
      var s34 = 0;
      var su1 = 0;
      var s14 = 0;
      var miSumCodo12 = 0;
      var miSumCodo34 = 0;
      var miSumCodo01 = 0;
      var miSumCodo14 = 0;

      var miSumCupla12 = 0;
      var miSumCupla34 = 0;
      var miSumCupla01 = 0;
      var miSumCupla14 = 0;

      var miSumTe12 = 0;
      var miSumTe34 = 0;
      var miSumTe01 = 0;
      var miSumTe14 = 0;

      var miSumTapon12 = 0;
      var miSumTapon34 = 0;
      var miSumTapon01 = 0;
      var miSumTapon14 = 0;

      var miSumAbrazadera12 = 0;
      var miSumAbrazadera34 = 0;
      var miSumAbrazadera01 = 0;
      var miSumAbrazadera14 = 0;

      var miSumRejilla = 4;//CONSTANTE//
      var miSumTornillo = (miSumRejilla * 4);

      var miSumReductor14a01 = 0;
      var miSumReductor01a34 = 0;
      var miSumReductor34a12 = 0;

      var miSumValvula12 = 0;
      var miSumValvula34 = 0;
      var miSumValvula01 = 0;
      var miSumValvula14 = 0;

      var miSumTerminal = 0;

      var miSumTef12 = 0;
      var miSumTef34 = 0;
      var miSumTef01 = 0;
      var miSumTef14 = 0;
      var miSumTeflon = 0;

      var miSumVar12 = 0;
      var miSumVar34 = 0;
      var miSumVar01 = 0;
      var miSumVar14 = 0;
      var miSumVarilla = 0;

      var miGrafo = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData']);

      for(vrf = 0; vrf < miGrafo.length; vrf++){
        //console.log(JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData'])[vrf])
        var miInstalacion = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData'])[vrf];
        for(vrfI = 0; vrfI < miInstalacion.length; vrfI++){
          //console.log(miInstalacion[vrfI]);
          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type == 'P'){
            switch (miInstalacion[vrfI].diametro){
              case '12':
                s12 = s12 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera12 = miSumAbrazadera12 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe12++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon12++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula12++;
                break;
              case '34':
                s34 = s34 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera34 = miSumAbrazadera34 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe34++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon34++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula34++;
                break;
              case '1':
                su1 = su1 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera01 = miSumAbrazadera01 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe01++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon01++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula01++;
                break;
              case '14':
                s14 = s14 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera14 = miSumAbrazadera14 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe14++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon14++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula14++;
                break;
            }
            //console.log(miInstalacion[vrfI].diametro);
          }
          else if(miInstalacion[vrfI].type == 'P' && !miInstalacion[vrfI+1]){
            switch (miInstalacion[vrfI-1].diametro){
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
            miSumTerminal++;
          }
          /////////////////
          //CODOS Y CUPLAS
          /////////////////
          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI-1] && miInstalacion[vrfI-1].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type == 'P'){
            if(miInstalacion[vrfI-1].diametro == miInstalacion[vrfI].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 && !miInstalacion[vrfI].instalacion && !miInstalacion[vrfI].te_30 && !miInstalacion[vrfI].te_90 && !miInstalacion[vrfI].te_150 && !miInstalacion[vrfI].te_210 && !miInstalacion[vrfI].te_270 && !miInstalacion[vrfI].te_330){
              switch(miInstalacion[vrfI].diametro){
                case '12':
                  miSumCodo12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCodo34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCodo01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCodo14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
            else if(miInstalacion[vrfI-1].diametro == miInstalacion[vrfI].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo == 0 && !miInstalacion[vrfI].instalacion && !miInstalacion[vrfI].te_30 && !miInstalacion[vrfI].te_90 && !miInstalacion[vrfI].te_150 && !miInstalacion[vrfI].te_210 && !miInstalacion[vrfI].te_270 && !miInstalacion[vrfI].te_330){
              switch(miInstalacion[vrfI].diametro){
                case '12':
                  miSumCupla12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCupla34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCupla01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCupla14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
            //CODO REDUCTOR ¿HAY CUPLAS REDUCTORAS?
            else if(miInstalacion[vrfI-1].diametro == '14' && miInstalacion[vrfI].diametro == '1'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
              miSumReductor14a01++;
            }
            else if(miInstalacion[vrfI-1].diametro == '1' && miInstalacion[vrfI].diametro == '34'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
              miSumReductor01a34++;
            }
            else if(miInstalacion[vrfI-1].diametro == '34' && miInstalacion[vrfI].diametro == '12'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
              miSumReductor34a12++;
            }
          }
          else if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type != 'P'){
            var miSit = -1;
            for(bp = vrfI+1; bp < miInstalacion.length; bp++){
              if(miInstalacion[bp].type == 'P'){
                miSit = bp;
                break;
              }
            }
            if(miSit > -1 && miInstalacion[vrfI-1].diametro == miInstalacion[miSit].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[miSit].angulo != 0 && !miInstalacion[vrfI-1].instalacion && !miInstalacion[miSit].instalacion && !miInstalacion[vrfI-1].te_30 && !miInstalacion[vrfI-1].te_90 && !miInstalacion[vrfI-1].te_150 && !miInstalacion[vrfI-1].te_210 && !miInstalacion[vrfI-1].te_270 && !miInstalacion[vrfI-1].te_330 && !miInstalacion[miSit].te_30 && !miInstalacion[miSit].te_90 && !miInstalacion[miSit].te_150 && !miInstalacion[miSit].te_210 && !miInstalacion[miSit].te_270 && !miInstalacion[miSit].te_330){
              switch(miInstalacion[miSit].diametro){
                case '12':
                  miSumCodo12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCodo34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCodo01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCodo14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
            else if(miSit > -1 && miInstalacion[vrfI-1].diametro == miInstalacion[miSit].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[miSit].angulo == 0 && !miInstalacion[vrfI-1].instalacion && !miInstalacion[miSit].instalacion && !miInstalacion[vrfI-1].te_30 && !miInstalacion[vrfI-1].te_90 && !miInstalacion[vrfI-1].te_150 && !miInstalacion[vrfI-1].te_210 && !miInstalacion[vrfI-1].te_270 && !miInstalacion[vrfI-1].te_330 && !miInstalacion[miSit].te_30 && !miInstalacion[miSit].te_90 && !miInstalacion[miSit].te_150 && !miInstalacion[miSit].te_210 && !miInstalacion[miSit].te_270 && !miInstalacion[miSit].te_330){
              switch(miInstalacion[miSit].diametro){
                case '12':
                  miSumCupla12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCupla34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCupla01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCupla14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
          }
          else if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI-1] && miInstalacion[vrfI-1].type == 'S' && !miInstalacion[vrfI-1].padre && miInstalacion[vrfI-2] && miInstalacion[vrfI-2].type == 'H'){
            var miSit = -1;
            for(bp = vrfI-3; bp > 0; bp--){
              if(miInstalacion[bp].type == 'P'){
                miSit = bp;
                break;
              }
            }
            if(miSit == -1 && !miInstalacion[vrfI].instalacion && !miInstalacion[vrfI].te_30 && !miInstalacion[vrfI].te_90 && !miInstalacion[vrfI].te_150 && !miInstalacion[vrfI].te_210 && !miInstalacion[vrfI].te_270 && !miInstalacion[vrfI].te_330){
              switch(miInstalacion[vrfI].diametro){
                case '12':
                  miSumCodo12++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCodo34++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCodo01++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCodo14++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
          }

          /////////////////
          //REDUCCIONES INICIALES
          /////////////////
          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI-1] && miInstalacion[vrfI-1].type != 'P'){
            var miSit = -1;
            for(bp = vrfI-3; bp > 0; bp--){
              if(miInstalacion[bp].type == 'P'){
                miSit = bp;
                break;
              }
            }
            if(miSit > 0 && miSit -1 > 0){
              //CODO REDUCTOR ¿HAY CUPLAS REDUCTORAS?
              if(miInstalacion[miSit-1].diametro == '14' && miInstalacion[vrfI].diametro == '1'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
                miSumReductor14a01++;
              }
              if(miInstalacion[miSit-1].diametro == '1' && miInstalacion[vrfI].diametro == '34'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
                miSumReductor01a34++;
              }
              if(miInstalacion[miSit-1].diametro == '34' && miInstalacion[vrfI].diametro == '12'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
                miSumReductor34a12++;
              }
            }


          }

          miSumTeflon = Math.round((miSumTef12/3 + miSumTef34/2 + miSumTef01/2 + miSumTef14/1.5)*100)/100;
          miSumVarilla = Math.round((miSumVar12/3 + miSumVar34/2.5 + miSumVar01/1.5 + miSumVar14/1)*100)/100;
        }
      }


      miSumTornillo = miSumTornillo + (miSumAbrazadera34*2) + (miSumAbrazadera01*2);

      //////////////////////////////////////////////////
      //SUMAS TOTALES
      //////////////////////////////////////////////////
      s12 = Math.round(s12*100)/100;
      s34 = Math.round(s34*100)/100;
      su1 = Math.round(su1*100)/100;
      s14 = Math.round(s14*100)/100;

      sT12 = Math.round((sT12+s12)*100)/100;
      sT34 = Math.round((sT34+s34)*100)/100;
      sTu1 = Math.round((sTu1+su1)*100)/100;
      sT14 = Math.round((sT14+s14)*100)/100;

      miTSumCodo12 = Math.round((miTSumCodo12 + miSumCodo12)*100)/100;
      miTSumCodo34 = Math.round((miTSumCodo34 + miSumCodo34)*100)/100;
      miTSumCodo01 = Math.round((miTSumCodo01 + miSumCodo01)*100)/100;
      miTSumCodo14 = Math.round((miTSumCodo14 + miSumCodo14)*100)/100;
      miTSumCupla12 = Math.round((miTSumCupla12 + miSumCupla12)*100)/100;
      miTSumCupla34 = Math.round((miTSumCupla34 + miSumCupla34)*100)/100;
      miTSumCupla01 = Math.round((miTSumCupla01 + miSumCupla01)*100)/100;
      miTSumCupla14 = Math.round((miTSumCupla14 + miSumCupla14)*100)/100;

      miTSumTe12 = Math.round((miTSumTe12 + miSumTe12)*100)/100;
      miTSumTe34 = Math.round((miTSumTe34 + miSumTe34)*100)/100;
      miTSumTe01 = Math.round((miTSumTe01 + miSumTe01)*100)/100;
      miTSumTe14 = Math.round((miTSumTe14 + miSumTe14)*100)/100;

      miTSumTapon12 = Math.round((miTSumTapon12 + miSumTapon12)*100)/100;
      miTSumTapon34 = Math.round((miTSumTapon34 + miSumTapon34)*100)/100;
      miTSumTapon01 = Math.round((miTSumTapon01 + miSumTapon01)*100)/100;
      miTSumTapon14 = Math.round((miTSumTapon14 + miSumTapon14)*100)/100;

      miTSumAbrazadera12 = Math.round((miTSumAbrazadera12 + miSumAbrazadera12)*100)/100;
      miTSumAbrazadera34 = Math.round((miTSumAbrazadera34 + miSumAbrazadera34)*100)/100;
      miTSumAbrazadera12 = Math.round((miTSumAbrazadera01 + miSumAbrazadera01)*100)/100;
      miTSumAbrazadera14 = Math.round((miTSumAbrazadera14 + miSumAbrazadera14)*100)/100;

      miTSumRejilla = Math.round((miTSumRejilla + miSumRejilla)*100)/100;
      miTSumTornillo  = Math.round((miTSumTornillo + miSumTornillo)*100)/100;
      //miTSumTeflon  = Math.round((miTSumTeflon + miSumTeflon)*100)/100;

      miTSumReductor14a01 = Math.round((miTSumReductor14a01 + miSumReductor14a01)*100)/100;
      miTSumReductor01a34 = Math.round((miTSumReductor01a34 + miSumReductor01a34)*100)/100;
      miTSumReductor34a12 = Math.round((miTSumReductor34a12 + miSumReductor34a12)*100)/100;

      miTSumTeflon = Math.round((miTSumTeflon + miSumTeflon)*100)/100;
      miTSumVarilla = Math.round((miTSumVarilla + miSumVarilla)*100)/100;

      miTSumRejilla = Math.round((miTSumTerminal + miTSumTerminal)*100)/100;

      cell = document.createElement('td');
      cell.innerHTML = s14 + su1 + s34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = s12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTapon14 + miSumTapon01 + miSumTapon34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla14 + miSumCupla01 + miSumCupla34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTe14 + miSumTe01 + miSumTe34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo14 + miSumCodo01 + miSumCodo34 + miSumReductor14a01 + miSumReductor01a34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumReductor34a12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTapon12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTe12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumValvula12;
      row.appendChild(cell);

      tbl_sol.appendChild(row);
    }

  }
}

function llenarPrecioMaterial(){

  var myJson = JSON.parse(myJsonData.value);

  var tam = Object.keys(myJson).length;

  var vSumasTotales = [];
  var vExcedente = [];

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    var sT12 = 0;
    var sT34 = 0;
    var sTu1 = 0;
    var sT14 = 0;
    var miTSumCodo12 = 0;
    var miTSumCodo34 = 0;
    var miTSumCodo01 = 0;
    var miTSumCodo14 = 0;

    var miTSumCupla12 = 0;
    var miTSumCupla34 = 0;
    var miTSumCupla01 = 0;
    var miTSumCupla14 = 0;

    var miTSumTe12 = 0;
    var miTSumTe34 = 0;
    var miTSumTe01 = 0;
    var miTSumTe14 = 0;

    var miTSumTapon12 = 0;
    var miTSumTapon34 = 0;
    var miTSumTapon01 = 0;
    var miTSumTapon14 = 0;

    var miTSumAbrazadera12 = 0;
    var miTSumAbrazadera34 = 0;
    var miTSumAbrazadera01 = 0;
    var miTSumAbrazadera14 = 0;

    var miTSumRejilla = 0;
    var miTSumTornillo = 0;

    var miTSumReductor14a01 = 0;
    var miTSumReductor01a34 = 0;
    var miTSumReductor34a12 = 0;

    var miTSumValvula12 = 0;
    var miTSumValvula34 = 0;
    var miTSumValvula01 = 0;
    var miTSumValvula14 = 0;

    var miTSumTerminal = 0;

    var miTSumTeflon = 0;
    var miTSumVarilla = 0;

    for(jdc = 0; jdc < tamDoc; jdc++){

      /*var row = document.createElement('tr');

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);*/

      ///////////////////////////////////////////////////////
      //SUMA DE VALORES
      //////////////////////////////////////////////////////


      var s12 = 0;
      var s34 = 0;
      var su1 = 0;
      var s14 = 0;
      var miSumCodo12 = 0;
      var miSumCodo34 = 0;
      var miSumCodo01 = 0;
      var miSumCodo14 = 0;

      var miSumCupla12 = 0;
      var miSumCupla34 = 0;
      var miSumCupla01 = 0;
      var miSumCupla14 = 0;

      var miSumTe12 = 0;
      var miSumTe34 = 0;
      var miSumTe01 = 0;
      var miSumTe14 = 0;

      var miSumTapon12 = 0;
      var miSumTapon34 = 0;
      var miSumTapon01 = 0;
      var miSumTapon14 = 0;

      var miSumAbrazadera12 = 0;
      var miSumAbrazadera34 = 0;
      var miSumAbrazadera01 = 0;
      var miSumAbrazadera14 = 0;

      var miSumRejilla = 4;
      var miSumTornillo = (miSumRejilla * 4);

      var miSumReductor14a01 = 0;
      var miSumReductor01a34 = 0;
      var miSumReductor34a12 = 0;

      var miSumValvula12 = 0;
      var miSumValvula34 = 0;
      var miSumValvula01 = 0;
      var miSumValvula14 = 0;

      var miSumTerminal = 0;

      var miSumTef12 = 0;
      var miSumTef34 = 0;
      var miSumTef01 = 0;
      var miSumTef14 = 0;
      var miSumTeflon = 0;

      var miSumVar12 = 0;
      var miSumVar34 = 0;
      var miSumVar01 = 0;
      var miSumVar14 = 0;
      var miSumVarilla = 0;

      var miGrafo = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData']);

      //console.log('------------------------------------')

      for(vrf = 0; vrf < miGrafo.length; vrf++){
        //console.log(JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData'])[vrf])
        var miInstalacion = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData'])[vrf];
        for(vrfI = 0; vrfI < miInstalacion.length; vrfI++){
          //console.log(miInstalacion[vrfI]);
          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type == 'P'){
            switch (miInstalacion[vrfI].diametro){
              case '12':
                s12 = s12 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera12 = miSumAbrazadera12 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe12++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon12++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula12++;
                break;
              case '34':
                s34 = s34 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera34 = miSumAbrazadera34 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe34++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon34++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula34++;
                break;
              case '1':
                su1 = su1 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera01 = miSumAbrazadera01 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe01++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon01++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula01++;
                break;
              case '14':
                s14 = s14 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera14 = miSumAbrazadera14 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe14++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon14++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula14++;
                break;
            }
            //console.log(miInstalacion[vrfI].diametro);
          }
          else if(miInstalacion[vrfI].type == 'P' && !miInstalacion[vrfI+1]){
            switch (miInstalacion[vrfI-1].diametro){
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
            miSumTerminal++;
          }
          /////////////////
          //CODOS Y CUPLAS
          /////////////////
          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI-1] && miInstalacion[vrfI-1].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type == 'P'){
            if(miInstalacion[vrfI-1].diametro == miInstalacion[vrfI].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 && !miInstalacion[vrfI].instalacion && !miInstalacion[vrfI].te_30 && !miInstalacion[vrfI].te_90 && !miInstalacion[vrfI].te_150 && !miInstalacion[vrfI].te_210 && !miInstalacion[vrfI].te_270 && !miInstalacion[vrfI].te_330){
              switch(miInstalacion[vrfI].diametro){
                case '12':
                  miSumCodo12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCodo34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCodo01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCodo14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
            else if(miInstalacion[vrfI-1].diametro == miInstalacion[vrfI].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo == 0 && !miInstalacion[vrfI].instalacion && !miInstalacion[vrfI].te_30 && !miInstalacion[vrfI].te_90 && !miInstalacion[vrfI].te_150 && !miInstalacion[vrfI].te_210 && !miInstalacion[vrfI].te_270 && !miInstalacion[vrfI].te_330){
              switch(miInstalacion[vrfI].diametro){
                case '12':
                  miSumCupla12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCupla34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCupla01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCupla14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
            //CODO REDUCTOR ¿HAY CUPLAS REDUCTORAS?
            else if(miInstalacion[vrfI-1].diametro == '14' && miInstalacion[vrfI].diametro == '1'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
              miSumReductor14a01++;
            }
            else if(miInstalacion[vrfI-1].diametro == '1' && miInstalacion[vrfI].diametro == '34'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
              miSumReductor01a34++;
            }
            else if(miInstalacion[vrfI-1].diametro == '34' && miInstalacion[vrfI].diametro == '12'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
              miSumReductor34a12++;
            }
          }
          else if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type != 'P'){
            var miSit = -1;
            for(bp = vrfI+1; bp < miInstalacion.length; bp++){
              if(miInstalacion[bp].type == 'P'){
                miSit = bp;
                break;
              }
            }
            if(miSit > -1 && miInstalacion[vrfI-1].diametro == miInstalacion[miSit].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[miSit].angulo != 0 && !miInstalacion[vrfI-1].instalacion && !miInstalacion[miSit].instalacion && !miInstalacion[vrfI-1].te_30 && !miInstalacion[vrfI-1].te_90 && !miInstalacion[vrfI-1].te_150 && !miInstalacion[vrfI-1].te_210 && !miInstalacion[vrfI-1].te_270 && !miInstalacion[vrfI-1].te_330 && !miInstalacion[miSit].te_30 && !miInstalacion[miSit].te_90 && !miInstalacion[miSit].te_150 && !miInstalacion[miSit].te_210 && !miInstalacion[miSit].te_270 && !miInstalacion[miSit].te_330){
              switch(miInstalacion[miSit].diametro){
                case '12':
                  miSumCodo12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCodo34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCodo01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCodo14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
            else if(miSit > -1 && miInstalacion[vrfI-1].diametro == miInstalacion[miSit].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[miSit].angulo == 0 && !miInstalacion[vrfI-1].instalacion && !miInstalacion[miSit].instalacion && !miInstalacion[vrfI-1].te_30 && !miInstalacion[vrfI-1].te_90 && !miInstalacion[vrfI-1].te_150 && !miInstalacion[vrfI-1].te_210 && !miInstalacion[vrfI-1].te_270 && !miInstalacion[vrfI-1].te_330 && !miInstalacion[miSit].te_30 && !miInstalacion[miSit].te_90 && !miInstalacion[miSit].te_150 && !miInstalacion[miSit].te_210 && !miInstalacion[miSit].te_270 && !miInstalacion[miSit].te_330){
              switch(miInstalacion[miSit].diametro){
                case '12':
                  miSumCupla12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCupla34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCupla01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCupla14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
          }
          else if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI-1] && miInstalacion[vrfI-1].type == 'S' && !miInstalacion[vrfI-1].padre && miInstalacion[vrfI-2] && miInstalacion[vrfI-2].type == 'H'){
            var miSit = -1;
            for(bp = vrfI-3; bp > 0; bp--){
              if(miInstalacion[bp].type == 'P'){
                miSit = bp;
                break;
              }
            }
            if(miSit == -1 && !miInstalacion[vrfI].instalacion && !miInstalacion[vrfI].te_30 && !miInstalacion[vrfI].te_90 && !miInstalacion[vrfI].te_150 && !miInstalacion[vrfI].te_210 && !miInstalacion[vrfI].te_270 && !miInstalacion[vrfI].te_330){
              switch(miInstalacion[vrfI].diametro){
                case '12':
                  miSumCodo12++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCodo34++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCodo01++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCodo14++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
          }

          /////////////////
          //REDUCCIONES INICIALES
          /////////////////
          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI-1] && miInstalacion[vrfI-1].type != 'P'){
            var miSit = -1;
            for(bp = vrfI-3; bp > 0; bp--){
              if(miInstalacion[bp].type == 'P'){
                miSit = bp;
                break;
              }
            }
            if(miSit > 0 && miSit -1 > 0){
              //CODO REDUCTOR ¿HAY CUPLAS REDUCTORAS?
              if(miInstalacion[miSit-1].diametro == '14' && miInstalacion[vrfI].diametro == '1'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
                miSumReductor14a01++;
              }
              if(miInstalacion[miSit-1].diametro == '1' && miInstalacion[vrfI].diametro == '34'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
                miSumReductor01a34++;
              }
              if(miInstalacion[miSit-1].diametro == '34' && miInstalacion[vrfI].diametro == '12'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
                miSumReductor34a12++;
              }
            }


          }

          miSumTeflon = Math.round((miSumTef12/3 + miSumTef34/2 + miSumTef01/2 + miSumTef14/1.5)*100)/100;
          miSumVarilla = Math.round((miSumVar12/3 + miSumVar34/2.5 + miSumVar01/1.5 + miSumVar14/1)*100)/100;
        }
      }
      miSumTornillo = miSumTornillo + (miSumAbrazadera34*2) + (miSumAbrazadera01*2);

      /*if(miSumCodo12 % 3 == 0)
                      miSumTeflon++;
      if(miSumCodo34 % 2 == 0)
                            miSumTeflon++;
      if(miSumCodo01 % 2 == 0)
                            miSumTeflon++;
      if(miSumCodo01 % 1.5 == 0)
                      miSumTeflon++; */
      //////////////////////////////////////////////////
      //SUMAS TOTALES
      //////////////////////////////////////////////////
      s12 = Math.round(s12*100)/100;
      s34 = Math.round(s34*100)/100;
      su1 = Math.round(su1*100)/100;
      s14 = Math.round(s14*100)/100;

      sT12 = Math.round((sT12+s12)*100)/100;
      sT34 = Math.round((sT34+s34)*100)/100;
      sTu1 = Math.round((sTu1+su1)*100)/100;
      sT14 = Math.round((sT14+s14)*100)/100;

      miTSumCodo12 = Math.round((miTSumCodo12 + miSumCodo12)*100)/100;
      miTSumCodo34 = Math.round((miTSumCodo34 + miSumCodo34)*100)/100;
      miTSumCodo01 = Math.round((miTSumCodo01 + miSumCodo01)*100)/100;
      miTSumCodo14 = Math.round((miTSumCodo14 + miSumCodo14)*100)/100;
      miTSumCupla12 = Math.round((miTSumCupla12 + miSumCupla12)*100)/100;
      miTSumCupla34 = Math.round((miTSumCupla34 + miSumCupla34)*100)/100;
      miTSumCupla01 = Math.round((miTSumCupla01 + miSumCupla01)*100)/100;
      miTSumCupla14 = Math.round((miTSumCupla14 + miSumCupla14)*100)/100;

      miTSumTe12 = Math.round((miTSumTe12 + miSumTe12)*100)/100;
      miTSumTe34 = Math.round((miTSumTe34 + miSumTe34)*100)/100;
      miTSumTe01 = Math.round((miTSumTe01 + miSumTe01)*100)/100;
      miTSumTe14 = Math.round((miTSumTe14 + miSumTe14)*100)/100;

      miTSumTapon12 = Math.round((miTSumTapon12 + miSumTapon12)*100)/100;
      miTSumTapon34 = Math.round((miTSumTapon34 + miSumTapon34)*100)/100;
      miTSumTapon01 = Math.round((miTSumTapon01 + miSumTapon01)*100)/100;
      miTSumTapon14 = Math.round((miTSumTapon14 + miSumTapon14)*100)/100;

      miTSumAbrazadera12 = Math.round((miTSumAbrazadera12 + miSumAbrazadera12)*100)/100;
      miTSumAbrazadera34 = Math.round((miTSumAbrazadera34 + miSumAbrazadera34)*100)/100;
      miTSumAbrazadera12 = Math.round((miTSumAbrazadera01 + miSumAbrazadera01)*100)/100;
      miTSumAbrazadera14 = Math.round((miTSumAbrazadera14 + miSumAbrazadera14)*100)/100;

      miTSumRejilla = Math.round((miTSumRejilla + miSumRejilla)*100)/100;
      miTSumTornillo  = Math.round((miTSumTornillo + miSumTornillo)*100)/100;
      //miTSumTeflon  = Math.round((miTSumTeflon + miSumTeflon)*100)/100;

      miTSumReductor14a01 = Math.round((miTSumReductor14a01 + miSumReductor14a01)*100)/100;
      miTSumReductor01a34 = Math.round((miTSumReductor01a34 + miSumReductor01a34)*100)/100;
      miTSumReductor34a12 = Math.round((miTSumReductor34a12 + miSumReductor34a12)*100)/100;

      miTSumTeflon = Math.round((miTSumTeflon + miSumTeflon)*100)/100;
      miTSumVarilla = Math.round((miTSumVarilla + miSumVarilla)*100)/100;

      miTSumRejilla = Math.round((miTSumTerminal + miTSumTerminal)*100)/100;

      /*cell = document.createElement('td');
      cell.innerHTML = s12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = s34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = su1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = s14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTe12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTe34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTe01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTe14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTapon12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTapon34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTapon01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTapon14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTornillo;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumRejilla;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumReductor14a01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumReductor01a34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumReductor34a12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumValvula14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumValvula01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumValvula34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumValvula12;
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = '0'
      ///////////////////////////////////////////
      var miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      var miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', vCodoPipa34[jdc]);//'0');
      miIInput.setAttribute('id', 'i1_'+jdc);

      miIInput.setAttribute('onchange', 'cambiar("i1_'+jdc+'", "miTSumCodoPipa", "i1_", '+jdc+')');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = '0';
      ///////////////////////////////////////////
      miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', vHexagonal34[jdc]);//'0');
      miIInput.setAttribute('id', 'i2_'+jdc);
      //console.log('i1_'+jdc)
      miIInput.setAttribute('onchange', 'cambiar("i2_'+jdc+'", "miTSumHexagonal", "i2_", '+jdc+')');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = 1;
      ///////////////////////////////////////////
      miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', vCarburo1K[jdc]);//'0');
      miIInput.setAttribute('id', 'i3_'+jdc);
      //console.log('i1_'+jdc)
      miIInput.setAttribute('onchange', 'cambiar("i3_'+jdc+'", "miTSumCarburo", "i3_", '+jdc+')');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTerminal;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTeflon;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumVarilla;
      row.appendChild(cell);

      /*cell = document.createElement('td');
      cell.innerHTML = miSumCupla34;
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = '0'
      ///////////////////////////////////////////
      var miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      var miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', '0');
      miIInput.setAttribute('id', 'i1_'+jdc);
      //console.log('i1_'+jdc)
      miIInput.setAttribute('onchange', 'cambiar("i1_'+jdc+'", "miTSumCodoPipa", "i1_")');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = '0';
      ///////////////////////////////////////////
      miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', '0');
      miIInput.setAttribute('id', 'i2_'+jdc);
      //console.log('i1_'+jdc)
      miIInput.setAttribute('onchange', 'cambiar("i2_'+jdc+'", "miTSumHexagonal", "i2_")');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera34;//'0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera01;//'0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTornillo;//'0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTeflon;//'0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumRejilla;//4;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = '0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = '0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = '0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = 1;
      ///////////////////////////////////////////
      miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', '0');
      miIInput.setAttribute('id', 'i3_'+jdc);
      //console.log('i1_'+jdc)
      miIInput.setAttribute('onchange', 'cambiar("i3_'+jdc+'", "miTSumCarburo", "i3_")');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 2;
      row.appendChild(cell);

      tbl_matDeposito.appendChild(row);*/
    }
    ///////////////////////////////////////////////////
    //SUMA DE TOTALES
    ///////////////////////////////////////////////////

    //var row = document.createElement('tr');

    //cell = document.createElement('td');

    //cell.innerHTML = 'TOTAL';

    //cell.setAttribute('colspan', '4');

    //row.appendChild(cell);

    //console.log()

    //cell = document.createElement('td');
    //cell.innerHTML = sT12;
    vSumasTotales[0] = sT12;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = sT34;
    vSumasTotales[1] = sT34;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = sTu1;
    vSumasTotales[2] = sTu1;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = sT14;
    vSumasTotales[3] = sT14;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumCodo12;
    vSumasTotales[4] = miTSumCodo12;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumCodo34;
    vSumasTotales[5] = miTSumCodo34;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumCodo01;
    vSumasTotales[6] = miTSumCodo01;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumCodo14;
    vSumasTotales[7] = miTSumCodo14;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumCupla12;
    vSumasTotales[8] = miTSumCupla12;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumCupla34;
    vSumasTotales[9] = miTSumCupla34;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumCupla01;
    vSumasTotales[10] = miTSumCupla01;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumCupla14;
    vSumasTotales[11] = miTSumCupla14;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumTe12;
    vSumasTotales[12] = miTSumTe12;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumTe34;
    vSumasTotales[13] = miTSumTe34;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumTe01;
    vSumasTotales[14] = miTSumTe01;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumTe14;
    vSumasTotales[15] = miTSumTe14;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumTapon12;
    vSumasTotales[16] = miTSumTapon12;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumTapon34;
    vSumasTotales[17] = miTSumTapon34;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumTapon01;
    vSumasTotales[18] = miTSumTapon01;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumTapon14;
    vSumasTotales[19] = miTSumTapon14;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumAbrazadera12;
    vSumasTotales[20] = miTSumAbrazadera12;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumAbrazadera34;
    vSumasTotales[21] = miTSumAbrazadera34;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumAbrazadera01;
    vSumasTotales[22] = miTSumAbrazadera01;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumAbrazadera14;
    vSumasTotales[23] = miTSumAbrazadera14;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumTornillo;
    vSumasTotales[24] = miTSumTornillo;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumRejilla;
    vSumasTotales[25] = miTSumRejilla;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumReductor14a01;
    vSumasTotales[26] = miTSumReductor14a01;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumReductor01a34;
    vSumasTotales[27] = miTSumReductor01a34;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumReductor34a12;
    vSumasTotales[28] = miTSumReductor34a12;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumValvula14;
    vSumasTotales[29] = miTSumValvula14;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumValvula01;
    vSumasTotales[30] = miTSumValvula01;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumValvula34;
    vSumasTotales[31] = miTSumValvula34;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumValvula12;
    vSumasTotales[32] = miTSumValvula12;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //////////////////////////////////////////
    var miTSumCodoPipa = 0;
    for(miS = 0; miS< jdc; miS++){
      //console.log(document.getElementById('i1_'+miS).value);
      miTSumCodoPipa = miTSumCodoPipa + vCodoPipa34[miS];//parseInt(document.getElementById('i1_'+miS).value);
    }
    //cell.setAttribute('id', 'miTSumCodoPipa');
    //cell.innerHTML = miTSumCodoPipa;//'0';
    vSumasTotales[33] = miTSumCodoPipa;
    //////////////////////////////////////////
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //////////////////////////////////////////
    var miTSumHexagonal = 0;
    for(miS = 0; miS< jdc; miS++){
      //console.log(document.getElementById('i1_'+miS).value);
      miTSumCodoPipa = miTSumCodoPipa + vHexagonal34[miS];//parseInt(document.getElementById('i2_'+miS).value);
    }
    //cell.setAttribute('id', 'miTSumHexagonal');
    //cell.innerHTML = miTSumCodoPipa;//'0';
    vSumasTotales[34] = miTSumCodoPipa;
    //////////////////////////////////////////
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //////////////////////////////////////////
    var miTSumCarburo = 0;
    for(miS = 0; miS< jdc; miS++){
      //console.log(document.getElementById('i1_'+miS).value);
      miTSumCarburo = miTSumCarburo + vCarburo1K[miS];//parseInt(document.getElementById('i3_'+miS).value);
    }
    //cell.setAttribute('id', 'miTSumCarburo');
    //cell.innerHTML = miTSumCarburo ;//1*tamDoc;
    vSumasTotales[35] = miTSumCarburo;
    //////////////////////////////////////////
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumTerminal;
    vSumasTotales[36] = miTSumTerminal;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumTeflon;
    vSumasTotales[37] = miTSumTeflon;
    //row.appendChild(cell);

    //cell = document.createElement('td');
    //cell.innerHTML = miTSumVarilla;
    vSumasTotales[38] = miTSumVarilla;
    //row.appendChild(cell);


    //tbl_matDeposito.appendChild(row);

    ///////////////////////////////////////////////////
    //SUMA DE TOTALES
    ///////////////////////////////////////////////////
    //var row = document.createElement('tr');

    //cell = document.createElement('td');
    //cell.innerHTML = 'Material excedente';
    //cell.setAttribute('colspan', '4');

    //row.appendChild(cell);

    //for(cis = 0; cis < 39; cis++){
      //cell = document.createElement('td');
      ///////////////////////////////////////////
      //var miIDivT = document.createElement('div');
      //miIDivT.className = 'mostrarInCell';
      //var miIInputT = document.createElement('input');
      //miIInputT.setAttribute('type', 'text');
      //miIInputT.setAttribute('value', vMaterialExcedente[cis]);//'0');
      //miIInputT.setAttribute('id', 'excedente_' + cis);
      //miIInputT.setAttribute('onchange', 'sumarTresFinales("excedente_'+cis+'", "'+vSumasTotales[cis]+'", "total_'+cis+'", "'+ cis +'")');
      //miIDivT.appendChild(miIInputT);

      //cell.appendChild(miIDivT);
      ///////////////////////////////////////////
      //row.appendChild(cell);
    //}
    //tbl_matDeposito.appendChild(row);

    ///////////////////////////////////////////////////
    //SUMA DE TOTALES
    ///////////////////////////////////////////////////
    //var row = document.createElement('tr');

    //cell = document.createElement('td');
    //cell.innerHTML = 'Material llevado depósito';
    //cell.setAttribute('colspan', '4');

    //row.appendChild(cell);
    var miTOTALMAT = 0;
    for(cis = 1; cis < 40; cis++){
      var rw = document.getElementById('matR_'+cis);
      //console.log(rw)
      //var miCell = document.createElement('td');
      //cell.setAttribute('id', 'total_'+cis);
      //cell.innerHTML = Math.round((parseFloat(document.getElementById('excedente_'+cis).value) + parseFloat(vSumasTotales[cis]))*100)/100;

      //miCell.innerHTML = 'SOME';//Math.round((parseFloat(vExcedente[cis]) + parseFloat(vSumasTotales[cis]))*100)/100;

      //rw.appendChild(cell);
      var c2 = rw.insertCell(2);
      var c3 = rw.insertCell(3);
      var c4 = rw.insertCell(4);

      var cellShow = document.createElement('div');
      cellShow.setAttribute('class', 'mostrarInCell');

      var cellChan = document.createElement('input');
      cellChan.setAttribute('type', 'text');
      cellChan.setAttribute('value', vPrecioMateriales[cis-1]);
      cellChan.setAttribute('id', 'C2_'+cis);
      cellChan.setAttribute('onchange', 'cambiarMateriales('+(cis-1)+', "C2_'+cis+'")');
      //c2.innerHTML = vPrecioMateriales[cis-1];
      cellShow.appendChild(cellChan);
      c2.appendChild(cellShow);

      var cantidad = Math.round((parseFloat(vMaterialExcedente[cis-1]) + parseFloat(vSumasTotales[cis-1]))*100)/100;
      c3.innerHTML = cantidad;
      c4.innerHTML = cantidad * vPrecioMateriales[cis-1]; //cantidad;

      miTOTALMAT = miTOTALMAT + (cantidad * vPrecioMateriales[cis-1]);
    }

    var rw = document.getElementById('matR_40')
    var c5 = rw.insertCell(1)
    c5.innerHTML = Math.round(miTOTALMAT*100)/100;

  }
}

function llenarDeposito(){

  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson);
  var tam = Object.keys(myJson).length;

  var vSumasTotales = [];
  var vExcedente = [];

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    var sT12 = 0;
    var sT34 = 0;
    var sTu1 = 0;
    var sT14 = 0;
    var miTSumCodo12 = 0;
    var miTSumCodo34 = 0;
    var miTSumCodo01 = 0;
    var miTSumCodo14 = 0;

    var miTSumCupla12 = 0;
    var miTSumCupla34 = 0;
    var miTSumCupla01 = 0;
    var miTSumCupla14 = 0;

    var miTSumTe12 = 0;
    var miTSumTe34 = 0;
    var miTSumTe01 = 0;
    var miTSumTe14 = 0;

    var miTSumTapon12 = 0;
    var miTSumTapon34 = 0;
    var miTSumTapon01 = 0;
    var miTSumTapon14 = 0;

    var miTSumAbrazadera12 = 0;
    var miTSumAbrazadera34 = 0;
    var miTSumAbrazadera01 = 0;
    var miTSumAbrazadera14 = 0;

    var miTSumRejilla = 0;
    var miTSumTornillo = 0;

    var miTSumReductor14a01 = 0;
    var miTSumReductor01a34 = 0;
    var miTSumReductor34a12 = 0;

    var miTSumValvula12 = 0;
    var miTSumValvula34 = 0;
    var miTSumValvula01 = 0;
    var miTSumValvula14 = 0;

    var miTSumTerminal = 0;

    var miTSumTeflon = 0;
    var miTSumVarilla = 0;

    for(jdc = 0; jdc < tamDoc; jdc++){

      var row = document.createElement('tr');
      //row.className = 'sinNada';

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);

      ///////////////////////////////////////////////////////
      //SUMA DE VALORES
      //////////////////////////////////////////////////////


      var s12 = 0;
      var s34 = 0;
      var su1 = 0;
      var s14 = 0;
      var miSumCodo12 = 0;
      var miSumCodo34 = 0;
      var miSumCodo01 = 0;
      var miSumCodo14 = 0;

      var miSumCupla12 = 0;
      var miSumCupla34 = 0;
      var miSumCupla01 = 0;
      var miSumCupla14 = 0;

      var miSumTe12 = 0;
      var miSumTe34 = 0;
      var miSumTe01 = 0;
      var miSumTe14 = 0;

      var miSumTapon12 = 0;
      var miSumTapon34 = 0;
      var miSumTapon01 = 0;
      var miSumTapon14 = 0;

      var miSumAbrazadera12 = 0;
      var miSumAbrazadera34 = 0;
      var miSumAbrazadera01 = 0;
      var miSumAbrazadera14 = 0;

      var miSumRejilla = 4;//CONSTANTE//
      var miSumTornillo = (miSumRejilla * 4);

      var miSumReductor14a01 = 0;
      var miSumReductor01a34 = 0;
      var miSumReductor34a12 = 0;

      var miSumValvula12 = 0;
      var miSumValvula34 = 0;
      var miSumValvula01 = 0;
      var miSumValvula14 = 0;

      var miSumTerminal = 0;

      var miSumTef12 = 0;
      var miSumTef34 = 0;
      var miSumTef01 = 0;
      var miSumTef14 = 0;
      var miSumTeflon = 0;

      var miSumVar12 = 0;
      var miSumVar34 = 0;
      var miSumVar01 = 0;
      var miSumVar14 = 0;
      var miSumVarilla = 0;

      var miGrafo = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData']);

      //console.log('------------------------------------')

      for(vrf = 0; vrf < miGrafo.length; vrf++){
        //console.log(JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData'])[vrf])
        var miInstalacion = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData'])[vrf];
        for(vrfI = 0; vrfI < miInstalacion.length; vrfI++){
          //console.log(miInstalacion[vrfI]);
          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type == 'P'){
            switch (miInstalacion[vrfI].diametro){
              case '12':
                s12 = s12 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera12 = miSumAbrazadera12 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe12++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon12++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula12++;
                break;
              case '34':
                s34 = s34 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera34 = miSumAbrazadera34 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe34++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon34++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula34++;
                break;
              case '1':
                su1 = su1 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera01 = miSumAbrazadera01 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe01++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon01++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula01++;
                break;
              case '14':
                s14 = s14 + miInstalacion[vrfI].distancia;
                if(miInstalacion[vrfI].typeTub == 'vt')
                  miSumAbrazadera14 = miSumAbrazadera14 + parseInt((miInstalacion[vrfI].distancia *4)/vCaneria);
                if(miInstalacion[vrfI].instalacion || miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330)
                  miSumTe14++;
                if(!miInstalacion[vrfI].instalacion && (miInstalacion[vrfI].te_30 || miInstalacion[vrfI].te_90 || miInstalacion[vrfI].te_150 || miInstalacion[vrfI].te_210 || miInstalacion[vrfI].te_270|| miInstalacion[vrfI].te_330))
                  miSumTapon14++;
                if(miInstalacion[vrfI].valvula || miInstalacion[vrfI].valvulaPunto) miSumValvula14++;
                break;
            }
            //console.log(miInstalacion[vrfI].diametro);
          }
          else if(miInstalacion[vrfI].type == 'P' && !miInstalacion[vrfI+1]){
            switch (miInstalacion[vrfI-1].diametro){
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
            miSumTerminal++;
          }
          /////////////////
          //CODOS Y CUPLAS
          /////////////////
          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI-1] && miInstalacion[vrfI-1].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type == 'P'){
            if(miInstalacion[vrfI-1].diametro == miInstalacion[vrfI].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 && !miInstalacion[vrfI].instalacion && !miInstalacion[vrfI].te_30 && !miInstalacion[vrfI].te_90 && !miInstalacion[vrfI].te_150 && !miInstalacion[vrfI].te_210 && !miInstalacion[vrfI].te_270 && !miInstalacion[vrfI].te_330){
              switch(miInstalacion[vrfI].diametro){
                case '12':
                  miSumCodo12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCodo34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCodo01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCodo14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
            else if(miInstalacion[vrfI-1].diametro == miInstalacion[vrfI].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo == 0 && !miInstalacion[vrfI].instalacion && !miInstalacion[vrfI].te_30 && !miInstalacion[vrfI].te_90 && !miInstalacion[vrfI].te_150 && !miInstalacion[vrfI].te_210 && !miInstalacion[vrfI].te_270 && !miInstalacion[vrfI].te_330){
              switch(miInstalacion[vrfI].diametro){
                case '12':
                  miSumCupla12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCupla34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCupla01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCupla14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
            //CODO REDUCTOR ¿HAY CUPLAS REDUCTORAS?
            else if(miInstalacion[vrfI-1].diametro == '14' && miInstalacion[vrfI].diametro == '1'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
              miSumReductor14a01++;
            }
            else if(miInstalacion[vrfI-1].diametro == '1' && miInstalacion[vrfI].diametro == '34'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
              miSumReductor01a34++;
            }
            else if(miInstalacion[vrfI-1].diametro == '34' && miInstalacion[vrfI].diametro == '12'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
              miSumReductor34a12++;
            }
          }
          else if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type != 'P'){
            var miSit = -1;
            for(bp = vrfI+1; bp < miInstalacion.length; bp++){
              if(miInstalacion[bp].type == 'P'){
                miSit = bp;
                break;
              }
            }
            if(miSit > -1 && miInstalacion[vrfI-1].diametro == miInstalacion[miSit].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[miSit].angulo != 0 && !miInstalacion[vrfI-1].instalacion && !miInstalacion[miSit].instalacion && !miInstalacion[vrfI-1].te_30 && !miInstalacion[vrfI-1].te_90 && !miInstalacion[vrfI-1].te_150 && !miInstalacion[vrfI-1].te_210 && !miInstalacion[vrfI-1].te_270 && !miInstalacion[vrfI-1].te_330 && !miInstalacion[miSit].te_30 && !miInstalacion[miSit].te_90 && !miInstalacion[miSit].te_150 && !miInstalacion[miSit].te_210 && !miInstalacion[miSit].te_270 && !miInstalacion[miSit].te_330){
              switch(miInstalacion[miSit].diametro){
                case '12':
                  miSumCodo12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCodo34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCodo01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCodo14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
            else if(miSit > -1 && miInstalacion[vrfI-1].diametro == miInstalacion[miSit].diametro && miInstalacion[vrfI-1].angulo - miInstalacion[miSit].angulo == 0 && !miInstalacion[vrfI-1].instalacion && !miInstalacion[miSit].instalacion && !miInstalacion[vrfI-1].te_30 && !miInstalacion[vrfI-1].te_90 && !miInstalacion[vrfI-1].te_150 && !miInstalacion[vrfI-1].te_210 && !miInstalacion[vrfI-1].te_270 && !miInstalacion[vrfI-1].te_330 && !miInstalacion[miSit].te_30 && !miInstalacion[miSit].te_90 && !miInstalacion[miSit].te_150 && !miInstalacion[miSit].te_210 && !miInstalacion[miSit].te_270 && !miInstalacion[miSit].te_330){
              switch(miInstalacion[miSit].diametro){
                case '12':
                  miSumCupla12++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCupla34++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCupla01++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCupla14++;
                  if(miInstalacion[vrfI-1].typeTub == 'vt' && miInstalacion[miSit].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
          }
          else if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI-1] && miInstalacion[vrfI-1].type == 'S' && !miInstalacion[vrfI-1].padre && miInstalacion[vrfI-2] && miInstalacion[vrfI-2].type == 'H'){
            var miSit = -1;
            for(bp = vrfI-3; bp > 0; bp--){
              if(miInstalacion[bp].type == 'P'){
                miSit = bp;
                break;
              }
            }
            if(miSit == -1 && !miInstalacion[vrfI].instalacion && !miInstalacion[vrfI].te_30 && !miInstalacion[vrfI].te_90 && !miInstalacion[vrfI].te_150 && !miInstalacion[vrfI].te_210 && !miInstalacion[vrfI].te_270 && !miInstalacion[vrfI].te_330){
              switch(miInstalacion[vrfI].diametro){
                case '12':
                  miSumCodo12++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef12++;
                  else
                    miSumVar12++;
                  break;
                case '34':
                  miSumCodo34++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef34++;
                  else
                    miSumVar34++;
                  break;
                case '1':
                  miSumCodo01++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef01++;
                  else
                    miSumVar01++;
                  break;
                case '14':
                  miSumCodo14++;
                  if(miInstalacion[vrfI].typeTub == 'vt')
                    miSumTef14++;
                  else
                    miSumVar14++;
                  break;
              }
            }
          }

          /////////////////
          //REDUCCIONES INICIALES
          /////////////////
          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI-1] && miInstalacion[vrfI-1].type != 'P'){
            var miSit = -1;
            for(bp = vrfI-3; bp > 0; bp--){
              if(miInstalacion[bp].type == 'P'){
                miSit = bp;
                break;
              }
            }
            if(miSit > 0 && miSit -1 > 0){
              //CODO REDUCTOR ¿HAY CUPLAS REDUCTORAS?
              if(miInstalacion[miSit-1].diametro == '14' && miInstalacion[vrfI].diametro == '1'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
                miSumReductor14a01++;
              }
              if(miInstalacion[miSit-1].diametro == '1' && miInstalacion[vrfI].diametro == '34'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
                miSumReductor01a34++;
              }
              if(miInstalacion[miSit-1].diametro == '34' && miInstalacion[vrfI].diametro == '12'/*//PARA EXCLUIR CUPLAS//&& miInstalacion[vrfI-1].angulo - miInstalacion[vrfI].angulo != 0 */){
                miSumReductor34a12++;
              }
            }


          }

          miSumTeflon = Math.round((miSumTef12/3 + miSumTef34/2 + miSumTef01/2 + miSumTef14/1.5)*100)/100;
          miSumVarilla = Math.round((miSumVar12/3 + miSumVar34/2.5 + miSumVar01/1.5 + miSumVar14/1)*100)/100;
        }
      }
      miSumTornillo = miSumTornillo + (miSumAbrazadera34*2) + (miSumAbrazadera01*2);

      /*if(miSumCodo12 % 3 == 0)
                      miSumTeflon++;
      if(miSumCodo34 % 2 == 0)
                            miSumTeflon++;
      if(miSumCodo01 % 2 == 0)
                            miSumTeflon++;
      if(miSumCodo01 % 1.5 == 0)
                      miSumTeflon++; */
      //////////////////////////////////////////////////
      //SUMAS TOTALES
      //////////////////////////////////////////////////
      s12 = Math.round(s12*100)/100;
      s34 = Math.round(s34*100)/100;
      su1 = Math.round(su1*100)/100;
      s14 = Math.round(s14*100)/100;

      sT12 = Math.round((sT12+s12)*100)/100;
      sT34 = Math.round((sT34+s34)*100)/100;
      sTu1 = Math.round((sTu1+su1)*100)/100;
      sT14 = Math.round((sT14+s14)*100)/100;

      miTSumCodo12 = Math.round((miTSumCodo12 + miSumCodo12)*100)/100;
      miTSumCodo34 = Math.round((miTSumCodo34 + miSumCodo34)*100)/100;
      miTSumCodo01 = Math.round((miTSumCodo01 + miSumCodo01)*100)/100;
      miTSumCodo14 = Math.round((miTSumCodo14 + miSumCodo14)*100)/100;
      miTSumCupla12 = Math.round((miTSumCupla12 + miSumCupla12)*100)/100;
      miTSumCupla34 = Math.round((miTSumCupla34 + miSumCupla34)*100)/100;
      miTSumCupla01 = Math.round((miTSumCupla01 + miSumCupla01)*100)/100;
      miTSumCupla14 = Math.round((miTSumCupla14 + miSumCupla14)*100)/100;

      miTSumTe12 = Math.round((miTSumTe12 + miSumTe12)*100)/100;
      miTSumTe34 = Math.round((miTSumTe34 + miSumTe34)*100)/100;
      miTSumTe01 = Math.round((miTSumTe01 + miSumTe01)*100)/100;
      miTSumTe14 = Math.round((miTSumTe14 + miSumTe14)*100)/100;

      miTSumTapon12 = Math.round((miTSumTapon12 + miSumTapon12)*100)/100;
      miTSumTapon34 = Math.round((miTSumTapon34 + miSumTapon34)*100)/100;
      miTSumTapon01 = Math.round((miTSumTapon01 + miSumTapon01)*100)/100;
      miTSumTapon14 = Math.round((miTSumTapon14 + miSumTapon14)*100)/100;

      miTSumAbrazadera12 = Math.round((miTSumAbrazadera12 + miSumAbrazadera12)*100)/100;
      miTSumAbrazadera34 = Math.round((miTSumAbrazadera34 + miSumAbrazadera34)*100)/100;
      miTSumAbrazadera12 = Math.round((miTSumAbrazadera01 + miSumAbrazadera01)*100)/100;
      miTSumAbrazadera14 = Math.round((miTSumAbrazadera14 + miSumAbrazadera14)*100)/100;

      miTSumRejilla = Math.round((miTSumRejilla + miSumRejilla)*100)/100;
      miTSumTornillo  = Math.round((miTSumTornillo + miSumTornillo)*100)/100;
      //miTSumTeflon  = Math.round((miTSumTeflon + miSumTeflon)*100)/100;

      miTSumReductor14a01 = Math.round((miTSumReductor14a01 + miSumReductor14a01)*100)/100;
      miTSumReductor01a34 = Math.round((miTSumReductor01a34 + miSumReductor01a34)*100)/100;
      miTSumReductor34a12 = Math.round((miTSumReductor34a12 + miSumReductor34a12)*100)/100;

      miTSumTeflon = Math.round((miTSumTeflon + miSumTeflon)*100)/100;
      miTSumVarilla = Math.round((miTSumVarilla + miSumVarilla)*100)/100;

      miTSumRejilla = Math.round((miTSumTerminal + miTSumTerminal)*100)/100;

      cell = document.createElement('td');
      cell.innerHTML = s12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = s34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = su1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = s14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTe12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTe34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTe01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTe14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTapon12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTapon34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTapon01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTapon14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTornillo;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumRejilla;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumReductor14a01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumReductor01a34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumReductor34a12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumValvula14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumValvula01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumValvula34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumValvula12;
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = '0'
      ///////////////////////////////////////////
      var miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      var miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', vCodoPipa34[jdc]);//'0');
      miIInput.setAttribute('id', 'i1_'+jdc);
      //console.log('i1_'+jdc)
      miIInput.setAttribute('onchange', 'cambiar("i1_'+jdc+'", "miTSumCodoPipa", "i1_", '+jdc+')');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = '0';
      ///////////////////////////////////////////
      miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', vHexagonal34[jdc]);//'0');
      miIInput.setAttribute('id', 'i2_'+jdc);
      //console.log('i1_'+jdc)
      miIInput.setAttribute('onchange', 'cambiar("i2_'+jdc+'", "miTSumHexagonal", "i2_", '+jdc+')');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = 1;
      ///////////////////////////////////////////
      miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', vCarburo1K[jdc]);//'0');
      miIInput.setAttribute('id', 'i3_'+jdc);
      //console.log('i1_'+jdc)
      miIInput.setAttribute('onchange', 'cambiar("i3_'+jdc+'", "miTSumCarburo", "i3_", '+jdc+')');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTerminal;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTeflon;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumVarilla;
      row.appendChild(cell);

      /*cell = document.createElement('td');
      cell.innerHTML = miSumCupla34;
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = '0'
      ///////////////////////////////////////////
      var miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      var miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', '0');
      miIInput.setAttribute('id', 'i1_'+jdc);
      //console.log('i1_'+jdc)
      miIInput.setAttribute('onchange', 'cambiar("i1_'+jdc+'", "miTSumCodoPipa", "i1_")');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = '0';
      ///////////////////////////////////////////
      miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', '0');
      miIInput.setAttribute('id', 'i2_'+jdc);
      //console.log('i1_'+jdc)
      miIInput.setAttribute('onchange', 'cambiar("i2_'+jdc+'", "miTSumHexagonal", "i2_")');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera34;//'0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumAbrazadera01;//'0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTornillo;//'0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumTeflon;//'0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumRejilla;//4;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = '0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = '0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = '0';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCodo01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = miSumCupla01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 1;
      row.appendChild(cell);

      cell = document.createElement('td');
      //cell.innerHTML = 1;
      ///////////////////////////////////////////
      miIDiv = document.createElement('div');
      miIDiv.className = 'mostrarInCell';
      miIInput = document.createElement('input');
      miIInput.setAttribute('type', 'text');
      miIInput.setAttribute('value', '0');
      miIInput.setAttribute('id', 'i3_'+jdc);
      //console.log('i1_'+jdc)
      miIInput.setAttribute('onchange', 'cambiar("i3_'+jdc+'", "miTSumCarburo", "i3_")');
      miIDiv.appendChild(miIInput);

      cell.appendChild(miIDiv);
      ///////////////////////////////////////////
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 2;
      row.appendChild(cell);*/

      tbl_matDeposito.appendChild(row);
    }
    ///////////////////////////////////////////////////
    //SUMA DE TOTALES
    ///////////////////////////////////////////////////
    var row = document.createElement('tr');

    cell = document.createElement('td');

    /*var miInput = document.createElement('input');
    miInput.setAttribute('type', 'text');
    cell.appendChild(miInput);*/

    cell.innerHTML = 'TOTAL';// 'TOTAL <div class = "mostrarInCell"><input type="text" name="firstname" value = "nombre"></div>';
    cell.setAttribute('colspan', '4');

    row.appendChild(cell);

    console.log()

    cell = document.createElement('td');
    cell.innerHTML = sT12;
    vSumasTotales[0] = sT12;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = sT34;
    vSumasTotales[1] = sT34;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = sTu1;
    vSumasTotales[2] = sTu1;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = sT14;
    vSumasTotales[3] = sT14;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumCodo12;
    vSumasTotales[4] = miTSumCodo12;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumCodo34;
    vSumasTotales[5] = miTSumCodo34;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumCodo01;
    vSumasTotales[6] = miTSumCodo01;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumCodo14;
    vSumasTotales[7] = miTSumCodo14;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumCupla12;
    vSumasTotales[8] = miTSumCupla12;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumCupla34;
    vSumasTotales[9] = miTSumCupla34;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumCupla01;
    vSumasTotales[10] = miTSumCupla01;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumCupla14;
    vSumasTotales[11] = miTSumCupla14;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTe12;
    vSumasTotales[12] = miTSumTe12;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTe34;
    vSumasTotales[13] = miTSumTe34;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTe01;
    vSumasTotales[14] = miTSumTe01;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTe14;
    vSumasTotales[15] = miTSumTe14;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTapon12;
    vSumasTotales[16] = miTSumTapon12;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTapon34;
    vSumasTotales[17] = miTSumTapon34;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTapon01;
    vSumasTotales[18] = miTSumTapon01;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTapon14;
    vSumasTotales[19] = miTSumTapon14;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumAbrazadera12;
    vSumasTotales[20] = miTSumAbrazadera12;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumAbrazadera34;
    vSumasTotales[21] = miTSumAbrazadera34;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumAbrazadera01;
    vSumasTotales[22] = miTSumAbrazadera01;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumAbrazadera14;
    vSumasTotales[23] = miTSumAbrazadera14;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTornillo;
    vSumasTotales[24] = miTSumTornillo;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumRejilla;
    vSumasTotales[25] = miTSumRejilla;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumReductor14a01;
    vSumasTotales[26] = miTSumReductor14a01;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumReductor01a34;
    vSumasTotales[27] = miTSumReductor01a34;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumReductor34a12;
    vSumasTotales[28] = miTSumReductor34a12;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumValvula14;
    vSumasTotales[29] = miTSumValvula14;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumValvula01;
    vSumasTotales[30] = miTSumValvula01;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumValvula34;
    vSumasTotales[31] = miTSumValvula34;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumValvula12;
    vSumasTotales[32] = miTSumValvula12;
    row.appendChild(cell);

    cell = document.createElement('td');
    //////////////////////////////////////////
    var miTSumCodoPipa = 0;
    for(miS = 0; miS< jdc; miS++){
      //console.log(document.getElementById('i1_'+miS).value);
      miTSumCodoPipa = miTSumCodoPipa + parseInt(document.getElementById('i1_'+miS).value);
    }
    cell.setAttribute('id', 'miTSumCodoPipa');
    cell.innerHTML = miTSumCodoPipa;//'0';
    vSumasTotales[33] = miTSumCodoPipa;
    //////////////////////////////////////////
    row.appendChild(cell);

    cell = document.createElement('td');
    //////////////////////////////////////////
    var miTSumHexagonal = 0;
    for(miS = 0; miS< jdc; miS++){
      //console.log(document.getElementById('i1_'+miS).value);
      miTSumCodoPipa = miTSumCodoPipa + parseInt(document.getElementById('i2_'+miS).value);
    }
    cell.setAttribute('id', 'miTSumHexagonal');
    cell.innerHTML = miTSumCodoPipa;//'0';
    vSumasTotales[34] = miTSumCodoPipa;
    //////////////////////////////////////////
    row.appendChild(cell);

    cell = document.createElement('td');
    //////////////////////////////////////////
    var miTSumCarburo = 0;
    for(miS = 0; miS< jdc; miS++){
      //console.log(document.getElementById('i1_'+miS).value);
      miTSumCarburo = miTSumCarburo + parseInt(document.getElementById('i3_'+miS).value);
    }
    cell.setAttribute('id', 'miTSumCarburo');
    cell.innerHTML = miTSumCarburo ;//1*tamDoc;
    vSumasTotales[35] = miTSumCarburo;
    //////////////////////////////////////////
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTerminal;
    vSumasTotales[36] = miTSumTerminal;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTeflon;
    vSumasTotales[37] = miTSumTeflon;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumVarilla;
    vSumasTotales[38] = miTSumVarilla;
    row.appendChild(cell);




    /*cell = document.createElement('td');
    cell.innerHTML = miTSumCodo34;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumCupla34;
    row.appendChild(cell);

    cell = document.createElement('td');
    //////////////////////////////////////////
    var miTSumCodoPipa = 0;
    for(miS = 0; miS< jdc; miS++){
      //console.log(document.getElementById('i1_'+miS).value);
      miTSumCodoPipa = miTSumCodoPipa + parseInt(document.getElementById('i1_'+miS).value);
    }
    cell.setAttribute('id', 'miTSumCodoPipa');
    cell.innerHTML = miTSumCodoPipa;//'0';
    //////////////////////////////////////////
    row.appendChild(cell);

    cell = document.createElement('td');
    //////////////////////////////////////////
    var miTSumHexagonal = 0;
    for(miS = 0; miS< jdc; miS++){
      //console.log(document.getElementById('i1_'+miS).value);
      miTSumCodoPipa = miTSumCodoPipa + parseInt(document.getElementById('i2_'+miS).value);
    }
    cell.setAttribute('id', 'miTSumHexagonal');
    cell.innerHTML = miTSumCodoPipa;//'0';
    //////////////////////////////////////////
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumAbrazadera34;//'0';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumAbrazadera01;//'0';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTornillo;//'0';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumTeflon;//'0';
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = 1*tamDoc;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = 1*tamDoc;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumRejilla;//4*tamDoc;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = 0;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = 0;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = 0;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = 1*tamDoc;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumCodo01;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = miTSumCupla01;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = 1*tamDoc;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = 1*tamDoc;
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = 1*tamDoc;
    row.appendChild(cell);

    cell = document.createElement('td');
    //////////////////////////////////////////
    var miTSumCarburo = 0;
    for(miS = 0; miS< jdc; miS++){
      //console.log(document.getElementById('i1_'+miS).value);
      miTSumCarburo = miTSumCarburo + parseInt(document.getElementById('i3_'+miS).value);
    }
    cell.setAttribute('id', 'miTSumCarburo');
    cell.innerHTML = miTSumCarburo ;//1*tamDoc;
    //////////////////////////////////////////
    row.appendChild(cell);

    cell = document.createElement('td');
    cell.innerHTML = 2*tamDoc;
    row.appendChild(cell);*/

    tbl_matDeposito.appendChild(row);

    ///////////////////////////////////////////////////
    //SUMA DE TOTALES
    ///////////////////////////////////////////////////
    var row = document.createElement('tr');

    cell = document.createElement('td');
    cell.innerHTML = 'Material excedente';
    cell.setAttribute('colspan', '4');

    row.appendChild(cell);

    for(cis = 0; cis < 39; cis++){
      cell = document.createElement('td');
      ///////////////////////////////////////////
      var miIDivT = document.createElement('div');
      miIDivT.className = 'mostrarInCell';
      var miIInputT = document.createElement('input');
      miIInputT.setAttribute('type', 'text');
      miIInputT.setAttribute('value', vMaterialExcedente[cis]);//'0');
      miIInputT.setAttribute('id', 'excedente_' + cis);
      miIInputT.setAttribute('onchange', 'sumarTresFinales("excedente_'+cis+'", "'+vSumasTotales[cis]+'", "total_'+cis+'", "'+ cis +'")');
      miIDivT.appendChild(miIInputT);

      cell.appendChild(miIDivT);
      ///////////////////////////////////////////
      row.appendChild(cell);
    }
    tbl_matDeposito.appendChild(row);

    ///////////////////////////////////////////////////
    //SUMA DE TOTALES
    ///////////////////////////////////////////////////
    var row = document.createElement('tr');

    cell = document.createElement('td');
    cell.innerHTML = 'Material llevado depósito';
    cell.setAttribute('colspan', '4');

    row.appendChild(cell);

    for(cis = 0; cis < 39; cis++){
      cell = document.createElement('td');
      cell.setAttribute('id', 'total_'+cis);
      cell.innerHTML = Math.round((parseFloat(document.getElementById('excedente_'+cis).value) + parseFloat(vSumasTotales[cis]))*100)/100;
      ///////////////////////////////////////////
      //var miIDivT = document.createElement('div');
      //miIDivT.className = 'mostrarInCell';
      //var miIInputT = document.createElement('input');
      //miIInputT.setAttribute('type', 'text');
      //miIInputT.setAttribute('value', '0');
      //miIInputT.setAttribute('id', 'total_'+cis);
      ////miIInput.setAttribute('onchange', 'cambiar("i2_'+jdc+'", "miTSumHexagonal", "i2_")');
      //miIDivT.appendChild(miIInputT);

      //cell.appendChild(miIDivT);
      ///////////////////////////////////////////
      row.appendChild(cell);
    }
    tbl_matDeposito.appendChild(row);

    ///////////////////////////////////////////////////
    //SUMA DE TOTALES
    ///////////////////////////////////////////////////
    var row = document.createElement('tr');

    cell = document.createElement('td');
    cell.innerHTML = 'Total cañería';
    cell.setAttribute('colspan', '4');

    row.appendChild(cell);

    for(cis = 0; cis < 4; cis++){
      cell = document.createElement('td');
      cell.setAttribute('id', 'tubSac_'+cis);
      cell.innerHTML = Math.round((document.getElementById('total_'+cis).innerHTML/vCaneria)*100)/100;
      ///////////////////////////////////////////
      //var miIDivT = document.createElement('div');
      //miIDivT.className = 'mostrarInCell';
      //var miIInputT = document.createElement('input');
      //miIInputT.setAttribute('type', 'text');
      //miIInputT.setAttribute('value', '0');
      //miIInputT.setAttribute('id', 'excendente_' + cis);
      //miIInput.setAttribute('onchange', 'cambiar("excedente_'+cis+'", "miTSumHexagonal", "i2_")');
      //miIDivT.appendChild(miIInputT);

      //cell.appendChild(miIDivT);
      ///////////////////////////////////////////
      row.appendChild(cell);
    }
    tbl_matDeposito.appendChild(row);
  }
}

function llenarInstalacionPaga(){

  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson);
  var tam = Object.keys(myJson).length;

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    var total12 = 0;
    var total34 = 0;
    var total01 = 0;
    var total14 = 0;

    var totalPaga12 = 0;
    var totalPaga34 = 0;
    var totalPaga01 = 0;
    var totalPaga14 = 0;

    var totalPaga = 0;

    for(jdc = 0; jdc < tamDoc; jdc++){

      var row = document.createElement('tr');

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);

      ///////////////////////////////////////////////////////
      //SUMA DE VALORES
      //////////////////////////////////////////////////////


      var s12 = 0;
      var s34 = 0;
      var su1 = 0;
      var s14 = 0;

      var miGrafo = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData']);

      console.log('------------------------------------')

      for(vrf = 0; vrf < miGrafo.length; vrf++){
        //console.log(JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData'])[vrf])
        var miInstalacion = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData'])[vrf];
        for(vrfI = 0; vrfI < miInstalacion.length; vrfI++){
          //console.log(miInstalacion[vrfI]);
          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type == 'P'){
            switch (miInstalacion[vrfI].diametro){
              case '12':
                s12 = s12 + miInstalacion[vrfI].distancia;
                break;
              case '34':
                s34 = s34 + miInstalacion[vrfI].distancia;
                break;
              case '1':
                su1 = su1 + miInstalacion[vrfI].distancia;
                break;
              case '14':
                s14 = s14 + miInstalacion[vrfI].distancia;
                break;
            }

            //console.log(miInstalacion[vrfI].diametro);
          }
        }
      }

      s12 = Math.round(s12*100)/100;
      s34 = Math.round(s34*100)/100;
      su1 = Math.round(su1*100)/100;
      s14 = Math.round(s14*100)/100;

      var pS12 = Math.round(s12*vSueldo12/*20*/*100)/100;
      var pS34 = Math.round(s34*vSueldo34/*22*/*100)/100;
      var pSu1 = Math.round(su1*vSueldo01/*24*/*100)/100;
      var pS14 = Math.round(s14*vSueldo14/*26*/*100)/100;
      var pSTotal = Math.round((pS12 + pS34 + pSu1 + pS14)*100)/100;

      total12 = Math.round((total12 + s12)*100)/100;
      total34 = Math.round((total34 + s34)*100)/100;
      total01 = Math.round((total01 + su1)*100)/100;
      total14 = Math.round((total14 + s14)*100)/100;
      totalPaga12 = Math.round((totalPaga12 + pS12)*100)/100;
      totalPaga34 = Math.round((totalPaga34 + pS34)*100)/100;
      totalPaga01 = Math.round((totalPaga01 + pSu1)*100)/100;
      totalPaga14 = Math.round((totalPaga14 + pS14)*100)/100;
      totalPaga = Math.round((totalPaga+pSTotal)*100)/100;

      cell = document.createElement('td');
      cell.innerHTML = s12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = s34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = su1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = s14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = pS12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = pS34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = pSu1;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = pS14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = pSTotal;
      row.appendChild(cell);

      tbl_ins.appendChild(row);
    }

    var lRow = document.createElement('tr');

    var lCell = document.createElement('td');
    lCell.innerHTML = 'TOTAL';
    lCell.setAttribute('colspan', 4);//12);
    lRow.appendChild(lCell);

    var lCell = document.createElement('td');
    lCell.innerHTML = total12;
    lRow.appendChild(lCell);

    var lCell = document.createElement('td');
    lCell.innerHTML = total34;
    lRow.appendChild(lCell);

    var lCell = document.createElement('td');
    lCell.innerHTML = total01;
    lRow.appendChild(lCell);

    var lCell = document.createElement('td');
    lCell.innerHTML = total14;
    lRow.appendChild(lCell);

    var lCell = document.createElement('td');
    lCell.innerHTML = totalPaga12;
    lRow.appendChild(lCell);

    var lCell = document.createElement('td');
    lCell.innerHTML = totalPaga34;
    lRow.appendChild(lCell);

    var lCell = document.createElement('td');
    lCell.innerHTML = totalPaga01;
    lRow.appendChild(lCell);

    var lCell = document.createElement('td');
    lCell.innerHTML = totalPaga14;
    lRow.appendChild(lCell);

    var lCell = document.createElement('td');
    lCell.innerHTML = totalPaga;
    lRow.appendChild(lCell);


    tbl_ins.appendChild(lRow);
  }
}

function llenarDeudaDueno(){

  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson);
  var tam = Object.keys(myJson).length;

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    var totalPaga = 0;

    for(jdc = 0; jdc < tamDoc; jdc++){

      var row = document.createElement('tr');

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);

      ///////////////////////////////////////////////////////
      //SUMA DE VALORES
      //////////////////////////////////////////////////////

      var s12 = 0;
      var s34 = 0;
      var su1 = 0;
      var s14 = 0;

      var metraje = 22;

      var in12 = 0;
      var ex12 = 0;
      var in34 = 0;
      var ex34 = 0;
      var in01 = 0;
      var ex01 = 0;
      var in14 = 0;
      var ex14 = 0;


      var costoIn12 = vCostoIn12;//0;
      var costoEx12 = vCostoOu12;//105;
      var costoIn34 = vCostoIn34;//0;
      var costoEx34 = vCostoOu34;//105;
      var costoIn01 = vCostoIn01;//55;
      var costoEx01 = vCostoOu01;//160;
      var costoIn14 = vCostoIn14;//55;
      var costoEx14 = vCostoOu14;//160;

      var miGrafo = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData']);

      //console.log('------------------------------------')

      for(vrf = 0; vrf < miGrafo.length; vrf++){
        //console.log(JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData'])[vrf])
        var miInstalacion = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData'])[vrf];
        for(vrfI = 0; vrfI < miInstalacion.length; vrfI++){
          //console.log(miInstalacion[vrfI]);
          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type == 'P'){
            switch (miInstalacion[vrfI].diametro){
              case '12':
                s12 = s12 + miInstalacion[vrfI].distancia;
                break;
              case '34':
                s34 = s34 + miInstalacion[vrfI].distancia;
                break;
              case '1':
                su1 = su1 + miInstalacion[vrfI].distancia;
                break;
              case '14':
                s14 = s14 + miInstalacion[vrfI].distancia;
                break;
            }

            //console.log(miInstalacion[vrfI].diametro);
          }
        }
      }

      console.log(s12);
      console.log(s34);
      console.log(su1);
      console.log(s14);

      console.log(in14);
      console.log(in01);
      console.log(in34);
      console.log(in12);

      console.log(ex14);
      console.log(ex01);
      console.log(ex34);
      console.log(ex12);

      console.log('*******************************************');

      s12 = Math.round(s12*100)/100;
      s34 = Math.round(s34*100)/100;
      su1 = Math.round(su1*100)/100;
      s14 = Math.round(s14*100)/100;

      metraje = metraje - s14;

      if(s14 > 0){
        if(s14 > metraje){
          ex14 = s14 - metraje
          in14 = metraje;
          metraje = 0;
        }
        else{
          ex14 = 0;
          in14 = s14;
          metraje = metraje - s14;
        }
      }

      if(su1 > 0){
        if(su1 > metraje){
          ex01 = su1 - metraje
          in01 = metraje;
          metraje = 0;
        }
        else{
          ex01 = 0;
          in01 = su1;
          metraje = metraje - su1;
        }
      }

      if(s34 > 0){
        if(s34 > metraje){
          ex34 = s34 - metraje
          in34 = metraje;
          metraje = 0;
        }
        else{
          ex34 = 0;
          in34 = s34;
          metraje = metraje - s34;
        }
      }

      if(s12 > 0){
        if(s12 > metraje){
          ex12 = s12 - metraje
          in12 = metraje;
          metraje = 0;
        }
        else{
          ex12 = 0;
          in12 = s12;
          metraje = metraje - s12;
        }
      }

      in14 = Math.round(in14*100)/100;
      in01 = Math.round(in01*100)/100;
      in34 = Math.round(in34*100)/100;
      in12 = Math.round(in12*100)/100;

      ex14 = Math.round(ex14*100)/100;
      ex01 = Math.round(ex01*100)/100;
      ex34 = Math.round(ex34*100)/100;
      ex12 = Math.round(ex12*100)/100;

      console.log(in14)
      console.log(in01)
      console.log(in34)
      console.log(in12)

      cell = document.createElement('td');
      cell.innerHTML = in14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = in14 * costoIn14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = ex14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = ex14 * costoEx14;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = in01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = in01 * costoIn01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = ex01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = ex01 * costoEx01;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = in34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = in34 * costoIn34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = ex34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = ex34 * costoEx34;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = in12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = in12 * costoIn12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = ex12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = ex12 * costoEx12;
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = in14 * costoIn14 + ex14 * costoEx14 + in01 * costoIn01 + ex01 * costoEx01 + in34 * costoIn34 + ex34 * costoEx34 + in12 * costoIn12 + ex12 * costoEx12;
      row.appendChild(cell);

      tbl_deu.appendChild(row);
    }
  }
}

function llenarRecepcion(){

  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson);
  var tam = Object.keys(myJson).length;

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    var totalPaga = 0;

    for(jdc = 0; jdc < tamDoc; jdc++){

      var row = document.createElement('tr');

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['AVDA/ CALLE'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['CARNET'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['CARNET'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Dpto']+'-'+myJson[tag][jdc]['Loc']+'-'+myJson[tag][jdc]['DIST']+'-'+myJson[tag][jdc]['ZONA']+'-'+myJson[tag][jdc]['MANZ']+'-'+myJson[tag][jdc]['PREDIO']+'-'+myJson[tag][jdc]['PISO/DPTO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = 'VILLA HUAYNA POTOSI';
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = '';
      row.appendChild(cell);


      tbl_rec.appendChild(row);
    }

  }
}

function llenarPagoYPFB(){

  var myJson = JSON.parse(myJsonData.value);
  var tam = Object.keys(myJson).length;

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    var totalDistancia = 0;
    var totalPaga = 0;

    for(jdc = 0; jdc < tamDoc; jdc++){

      var row = document.createElement('tr');

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Dpto']+'-'+myJson[tag][jdc]['Loc']+'-'+myJson[tag][jdc]['DIST']+'-'+myJson[tag][jdc]['ZONA']+'-'+myJson[tag][jdc]['MANZ']+'-'+myJson[tag][jdc]['PREDIO']+'-'+myJson[tag][jdc]['PISO/DPTO'];
      row.appendChild(cell);

      var s12 = 0;
      var s34 = 0;
      var su1 = 0;
      var s14 = 0;

      var miGrafo = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData']);

      for(vrf = 0; vrf < miGrafo.length; vrf++){

        var miInstalacion = JSON.parse(myJson[tag][jdc]['ISOMETRICO']['graphData'])[vrf];
        for(vrfI = 0; vrfI < miInstalacion.length; vrfI++){

          if(miInstalacion[vrfI].type == 'P' && miInstalacion[vrfI+1] && miInstalacion[vrfI+1].type == 'P'){
            switch (miInstalacion[vrfI].diametro){
              case '12':
                s12 = s12 + miInstalacion[vrfI].distancia;
                break;
              case '34':
                s34 = s34 + miInstalacion[vrfI].distancia;
                break;
              case '1':
                su1 = su1 + miInstalacion[vrfI].distancia;
                break;
              case '14':
                s14 = s14 + miInstalacion[vrfI].distancia;
                break;
            }
          }
        }
      }

      cell = document.createElement('td');
      var miDistanciaF = Math.round((s12 + s34 + su1 + s14)*100)/100;
      cell.innerHTML = Math.round((s12 + s34 + su1 + s14)*100)/100;
      totalDistancia = totalDistancia + miDistanciaF;
      row.appendChild(cell);

      cell = document.createElement('td');

      var miPrecio = encontrarPrecio(miDistanciaF);

      cell.innerHTML = miPrecio;
      totalPaga = totalPaga + miPrecio;
      row.appendChild(cell);

      tbl_ypf.appendChild(row);
    }

    var row = document.createElement('tr');

    var cell = document.createElement('td');
    cell.innerHTML = 'TOTAL';
    cell.setAttribute('colspan', '5');
    row.appendChild(cell);

    var cell = document.createElement('td');
    cell.innerHTML = Math.round(totalDistancia*100)/100;
    row.appendChild(cell);
    var cell = document.createElement('td');

    cell.innerHTML = totalPaga;
    row.appendChild(cell);

    tbl_ypf.appendChild(row);

  }
}

function encontrarPrecio(miDistanciaFind){
  //vPagoYPFB[0].distancia
  //console.log(miDistanciaFind)
  if(miDistanciaFind < vPagoYPFB.distancia[0])
    return 0;
  //var df = 0;
  //while(miDistanciaFind < vPagoYPFB[0].distancia[df] && df < vPagoYPFB[0].distancia.length){
    //df++
  //}
  //console.log(vPagoYPFB[0].distancia[df]);
  var miPY = 0;
  for(df = 0; df < vPagoYPFB.distancia.length-1; df++){
    //console.log(vPagoYPFB[0].distancia[df]);
    if(miDistanciaFind >= vPagoYPFB.distancia[df] && miDistanciaFind < vPagoYPFB.distancia[df+1]){
      miPY = df;
      break;
    }
  }
  if(miDistanciaFind >= vPagoYPFB.distancia[vPagoYPFB.distancia.length-1])
    miPY = vPagoYPFB.distancia.length-1;
  //console.log(vPagoYPFB[0].distancia[miPY]);
  //console.log(vPagoYPFB[0].costo[miPY]);
  return vPagoYPFB.costo[miPY];
}

function llenarGanancia(){

  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson);
  var tam = Object.keys(myJson).length;

  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];

    var tamDoc = myJson[tag].length;

    var totalPaga = 0;

    for(jdc = 0; jdc < tamDoc; jdc++){

      var row = document.createElement('tr');

      var cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['Nro'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO PATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['APELLIDO MATERNO'];
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.innerHTML = myJson[tag][jdc]['NOMBRES'];
      row.appendChild(cell);




      tbl_gan.appendChild(row);
    }

  }
}

function cambiarMateriales(miPivote, miID){

  var miValor = document.getElementById(miID).value;

  if(miValor.length == 0 || !parseFloat(miValor)) {
    miValor = 0;
    document.getElementById(miID).value = 0;
  }
  document.getElementById(miID).setAttribute('value', miValor)
  document.getElementById(miID).value = Math.round(parseFloat(miValor)*100)/100;


  var miVPrecioMateriales = JSON.parse('['+ document.getElementById('vPrecioMateriales').value + ']');
  //console.log(miVPrecioMateriales)

  miVPrecioMateriales[miPivote] = Math.round(parseFloat(miValor)*100)/100;//document.getElementById(miID).value;
  vPrecioMateriales[miPivote] = Math.round(parseFloat(miValor)*100)/100;//document.getElementById(miID).value;
  //console.log(miVPrecioMateriales)
  //console.log(JSON.stringify(miVPrecioMateriales))
  var tam = JSON.stringify(miVPrecioMateriales).length-1;
  //console.log(JSON.stringify(miVPrecioMateriales).substring(1, tam))


  document.getElementById('vPrecioMateriales').value = JSON.stringify(miVPrecioMateriales).substring(1, tam);

  //console.log(JSON.stringify(miVPrecioMateriales).substring(1, miVPrecioMateriales.length))
  vaciarMat(tbl_mat)
  llenarPrecioMaterial()

}

function cambiar(miID, miIDTOT, miPref, miNumero){

  var miValor = document.getElementById(miID).value;

  if(miValor.length == 0 || !parseInt(miValor)) {
    miValor = 0;
    document.getElementById(miID).value = 0;
  }

  //console.log(parseInt(miValor))

  document.getElementById(miID).setAttribute('value', miValor)
  document.getElementById(miID).value = parseInt(miValor)
  //console.log(document.getElementById(miID).value)

  var myJson = JSON.parse(myJsonData.value);
  //console.log(myJson[Object.keys(myJson)[0]].length);
  var mJdc = myJson[Object.keys(myJson)[0]].length;

  var miTSumVariable = 0;
  for(miS = 0; miS< mJdc; miS++){
    //console.log(document.getElementById('i1_'+miS).value);
    miTSumVariable = miTSumVariable + parseInt(document.getElementById(miPref+miS).value);
  }
  document.getElementById(miIDTOT).innerHTML = miTSumVariable;
  //console.log(miPref)
  switch(miPref){
    case 'i1_':
      vCodoPipa34[miNumero] = miValor;
      document.getElementById('vCodoPipa34').value = vCodoPipa34.toString();
      break;
    case 'i2_':
      vHexagonal34[miNumero] = miValor;
      document.getElementById('vHexagonal34').value = vHexagonal34.toString();
      break;
    case 'i3_':
      vCarburo1K[miNumero] = miValor;
      document.getElementById('vCarburo1K').value = vCarburo1K.toString();
      break;
  }



}

function sumarTresFinales(miID, miVector, miIDTOT, number){

  var miValor = document.getElementById(miID).value;

  if(miValor.length == 0 || !parseFloat(miValor)) {
    miValor = 0;
    document.getElementById(miID).value = 0;
  }

  document.getElementById(miID).setAttribute('value', miValor)
  document.getElementById(miID).value = Math.round(parseFloat(miValor)*100)/100;

  //alert(Math.round(parseFloat(document.getElementById(miID).value)*100)/100 + Math.round(parseFloat(miVector)*100)/100);
  var miSuma = Math.round(parseFloat(document.getElementById(miID).value)*100)/100 + Math.round(parseFloat(miVector)*100)/100;
  document.getElementById(miIDTOT).innerHTML = Math.round(parseFloat(miSuma)*100)/100;

  vMaterialExcedente[number] = miValor;
  document.getElementById('vMaterialExcedente').value = vMaterialExcedente.toString();

  if(number < 4)
    document.getElementById('tubSac_' + number).innerHTML = Math.round((document.getElementById('total_'+number).innerHTML/vCaneria)*100)/100;
}

function exportar(miTabla, miNombre){
  export_table_to_excel(miTabla, miNombre);
}

function activarCambioImagen(){
  if(document.getElementById('eNewImagenLogoCambiar').value == 'Cambiar imagen'){
    document.getElementById('eNewImagenLogo').style.display = 'block';
    document.getElementById('eNewImagenLogoCambiar').value = 'Mejor no'
  }
  else{
    document.getElementById('eNewImagenLogo').style.display = 'none';
    document.getElementById('eNewImagenLogoCambiar').value = 'Cambiar imagen'
  }
}

function cambiarYPFBData(miId){

  var prePosicion = miId.substring(8, miId.length);
  var prePiv = -1;

  for(p = 0; p < prePosicion.length; p++){
    if(prePosicion[p] == '_'){
      prePiv = p
      break;
    }
  }

  var posicion = parseInt(prePosicion.substring(0, prePiv));

  //console.log(posicion)

  var tipo = parseInt(prePosicion.substring(prePiv+3, prePosicion.length));

  //console.log(tipo)
  var miCostoData = JSON.parse(document.getElementById('vPagoYPFB').value);

  if(tipo == 0)
    miCostoData['distancia'][posicion] = (Math.round(parseFloat(document.getElementById(miId).value)*100))/100;
  else
    miCostoData['costo'][posicion] = (Math.round(parseFloat(document.getElementById(miId).value)*100))/100;
  //console.log(document.getElementById('vPagoYPFB').value);
  //console.log(miCostoData['costo']);
  //console.log(miCostoData['distancia']);

  var miTablaYPFB = document.getElementById('YPFBTable');
  vaciar(miTablaYPFB);
  llenarTablaYPFBCostosIns(miTablaYPFB, miCostoData['distancia'], miCostoData['costo'], miCostoData);
  //alert('hola')
}

function removeFilaYPFB(miId){
  var prePosicion = miId.substring(8, miId.length);
  var prePiv = -1;

  for(p = 0; p < prePosicion.length; p++){
    if(prePosicion[p] == '_'){
      prePiv = p
      break;
    }
  }

  var posicion = parseInt(prePosicion.substring(0, prePiv));

  //console.log(posicion)

  var miCostoData = JSON.parse(document.getElementById('vPagoYPFB').value);
  var miCostoTam = miCostoData['costo'].length;

  //console.log(miCostoData['costo'])
  //console.log(miCostoTam)

  for(p = posicion; p < miCostoTam-1; p++){
    miCostoData['costo'][p] = miCostoData['costo'][p+1];
    miCostoData['distancia'][p] = miCostoData['distancia'][p+1];
  }
  //console.log(miCostoData['costo']);
  miCostoData['costo'] = miCostoData['costo'].splice(0, miCostoTam-1);
  miCostoData['distancia'] = miCostoData['distancia'].splice(0, miCostoTam-1);
  var miTablaYPFB = document.getElementById('YPFBTable');
  vaciar(miTablaYPFB);
  llenarTablaYPFBCostosIns(miTablaYPFB, miCostoData['distancia'], miCostoData['costo'], miCostoData);
}

function addFilaYPFB(miId){
  var prePosicion = miId.substring(8, miId.length);
  var prePiv = -1;

  for(p = 0; p < prePosicion.length; p++){
    if(prePosicion[p] == '_'){
      prePiv = p
      break;
    }
  }

  var posicion = parseInt(prePosicion.substring(0, prePiv));

  //console.log(posicion)

  var miCostoData = JSON.parse(document.getElementById('vPagoYPFB').value);
  var miCostoTam = miCostoData['costo'].length;

  //console.log(miCostoData)
  //console.log(miCostoTam)

  miCostoData['costo'][miCostoTam] = 0;
  miCostoData['distancia'][miCostoTam] = 0;

  miCostoTam++;
  //console.log(miCostoData);
  //console.log(miCostoTam);


  for(p = miCostoTam-1; p > posicion; p--){
    miCostoData['costo'][p] = miCostoData['costo'][p-1];
    miCostoData['distancia'][p] = miCostoData['distancia'][p-1];
  }
  //console.log(miCostoData);
  var miTablaYPFB = document.getElementById('YPFBTable');
  vaciar(miTablaYPFB);
  llenarTablaYPFBCostosIns(miTablaYPFB, miCostoData['distancia'], miCostoData['costo'], miCostoData);

}

function llenarTablaYPFBCostosIns(miTabla, miVectorDistancia, miVectorCosto, miJSON){

  for(p = 0; p < miVectorDistancia.length; p++){
    var miRow = document.createElement('tr');
    miRow.setAttribute('id', 'YPFBRow_'+p);

    var miTd = document.createElement('td');

    var miInput = document.createElement('input');
    miInput.setAttribute('type', 'text');
    miInput.setAttribute('id', 'YPFBRow_'+p+'_C_0');
    miInput.setAttribute('onchange', 'cambiarYPFBData(this.id)');
    miInput.setAttribute('value', miVectorDistancia[p]);
    miTd.appendChild(miInput);

    miRow.appendChild(miTd);

    miTd = document.createElement('td');

    miInput = document.createElement('input');
    miInput.setAttribute('type', 'text');
    miInput.setAttribute('id', 'YPFBRow_'+p+'_C_1');
    miInput.setAttribute('onchange', 'cambiarYPFBData(this.id)');
    miInput.setAttribute('value', miVectorCosto[p]);
    miTd.appendChild(miInput);

    miInput = document.createElement('input');
    miInput.setAttribute('type', 'button');
    miInput.setAttribute('id', 'YPFBRow_'+p+'_PC');
    miInput.setAttribute('value', '+');
    miInput.setAttribute('onclick', 'addFilaYPFB(this.id)');
    miTd.appendChild(miInput);

    miInput = document.createElement('input');
    miInput.setAttribute('type', 'button');
    miInput.setAttribute('id', 'YPFBRow_'+p+'_RC');
    miInput.setAttribute('value', '-');
    miInput.setAttribute('onclick', 'removeFilaYPFB(this.id)');
    miInput.setAttribute('class', 'removeBtn');
    miTd.appendChild(miInput);

    miRow.appendChild(miTd);
    miTabla.appendChild(miRow);
  }

  //document.getElementById('vPagoYPFB').value = JSON.stringify('{"costo": ['+miVectorCosto+'], "distancia": ['+miVectorDistancia+']}');
  document.getElementById('vPagoYPFB').value = JSON.stringify(miJSON);

}

function activarCambioInstalacion(){
  if(document.getElementById('ePagoInstalacionCambiar').value == 'Cambiar valores'){
    document.getElementById('ePagoInstalacionCambiar').value = 'Mejor no';
    document.getElementById('table-data').style.display = 'block'
  }
  else{
    document.getElementById('ePagoInstalacionCambiar').value = 'Cambiar valores';
    document.getElementById('table-data').style.display = 'none'
  //document.getElementById('table-data')
  }
}

window.onload = initTabla();
//window.onload(location.reload());
