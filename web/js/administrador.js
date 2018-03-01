function checado(esto, miId){
  //console.log(esto.checked)
  document.getElementById(miId).value = esto.checked;
}

function cambiarSelect(miId, miInId){
  //document.getElementById(miInId).setAttribute('value', 'hecho');
  document.getElementById(miInId).setAttribute('value', miId.value);

  //console.log(miId.value)
  //console.log(document.getElementById(miId).value)
  //console.log(miInId)
  //console.log(miId)
  //console.log(document.getElementById(miInId).value)
  //alert('hola')
}

function imprimir(){
  var l = document.getElementById('tblUsuarios').rows.length-1;
  for(i = 1; i <= l; i++){
    if(document.getElementById('miTiempo_'+i).innerText =='Indefinido')
      document.getElementById('restante_'+i).innerText = 'indefinido';
    else{
      var sIni = document.getElementById('miTiempo_'+i).innerText

      var sLimite = document.getElementById('miLimite_'+i).innerText

      //console.log(sLimite);

      var sNow = new Date();
      sNow = sNow.getTime();

      //console.log(sIni);
      //console.log(sNow);

      var res = Math.round(Math.abs(sIni-sNow)/1000);

      //console.log(res)

      //console.log(sLimite-res);
      if(sLimite - res > 0){
        var tRestante = sLimite-res;

        var s = tRestante % 60;
        tRestante = tRestante - s;
        var m = (tRestante / 60) % 60;

        tRestante = tRestante - m * 60;

        var h = tRestante / 3600;


        //document.getElementById('restante_'+i).innerText = tRestante+':'+h+':'+m+':'+s;
        document.getElementById('restante_'+i).innerText = h+' Hs. '+m+' m. '+s+' s.';
      }
      else {
        document.getElementById('restante_'+i).innerText = 'excedido';
      }


    }
    //console.log(document.getElementById('miTiempo_'+i).innerText);
    //console.log(document.getElementById('restante_'+i).innerText);

  }
}

//function imprimir(){
//  console.log('hi');
//}

function init(){

  setInterval(imprimir,1000);
}
window.init();
