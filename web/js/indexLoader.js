var misProyectos = document.getElementById('myProjects');


var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  
  var tdy = '';
  
  switch(d.getDay()){
    case 0: tdy = 'Domingo'; break;
    case 1: tdy = 'Lunes'; break;
    case 2: tdy = 'Martes'; break;
    case 3: tdy = 'Miércoles'; break;
    case 4: tdy = 'Jueves'; break;
    case 5: tdy = 'Viernes'; break;
    case 6: tdy = 'Sábado'; break;
  }
    
  document.getElementById('dDay').innerHTML = tdy;
  
  var tm = ''
  
  switch(d.getMonth()){
    case 0: tm = 'enero'; break;
    case 1: tm = 'febrero'; break;
    case 2: tm = 'marzo'; break;
    case 3: tm = 'abril'; break;
    case 4: tm = 'mayo'; break;
    case 5: tm = 'junio'; break;
    case 6: tm = 'julio'; break;
    case 7: tm = 'agosto'; break;
    case 8: tm = 'septiembre'; break;
    case 9: tm = 'octubre'; break;
    case 10: tm = 'noviembre'; break;
    case 11: tm = 'diciembre'; break;
  }
  
  var tfc = '';
  
  tfc = d.getDate() + ' de ' + tm + ' de ' + d.getFullYear();
  
  document.getElementById('dDat').innerHTML = tfc;
  
  var td = '';
  
  if(d.getHours()<10)
    td = '0' + d.getHours();
  else
    td = d.getHours();
  
  if(d.getMinutes()<10)
    td = td+':0' + d.getMinutes();
  else
    td = td+':'+d.getMinutes();
  
  if(d.getSeconds()<10)
    td = td+'<span id = "dSeg" class = "dash-seg">0' + d.getSeconds() + '</span>';
  else
    td = td+'<span id = "dSeg" class = "dash-seg">' + d.getSeconds() + '</span>';
  
  document.getElementById('dTim').innerHTML = td;
  
}


function cargar(){
  
  var d = new Date();
  
  var tdy = '';
  
  switch(d.getDay()){
    case 0: tdy = 'Domingo'; break;
    case 1: tdy = 'Lunes'; break;
    case 2: tdy = 'Martes'; break;
    case 3: tdy = 'Miércoles'; break;
    case 4: tdy = 'Jueves'; break;
    case 5: tdy = 'Viernes'; break;
    case 6: tdy = 'Sábado'; break;
  }
    
  document.getElementById('dDay').innerHTML = tdy;
  
  var tm = ''
  
  switch(d.getMonth()){
    case 0: tm = 'enero'; break;
    case 1: tm = 'febrero'; break;
    case 2: tm = 'marzo'; break;
    case 3: tm = 'abril'; break;
    case 4: tm = 'mayo'; break;
    case 5: tm = 'junio'; break;
    case 6: tm = 'julio'; break;
    case 7: tm = 'agosto'; break;
    case 8: tm = 'septiembre'; break;
    case 9: tm = 'octubre'; break;
    case 10: tm = 'noviembre'; break;
    case 11: tm = 'diciembre'; break;
  }
  
  var tfc = '';
  
  tfc = d.getDate() + ' de ' + tm + ' de ' + d.getFullYear();
  
  document.getElementById('dDat').innerHTML = tfc;
  
  var td = '';
  
  if(d.getHours()<10)
    td = '0' + d.getHours();
  else
    td = d.getHours();
  
  if(d.getMinutes()<10)
    td = td+':0' + d.getMinutes();
  else
    td = td+':'+d.getMinutes();
  
  if(d.getSeconds()<10)
    td = td+'<span id = "dSeg" class = "dash-seg">0' + d.getSeconds() + '</span>';
  else
    td = td+'<span id = "dSeg" class = "dash-seg">' + d.getSeconds() + '</span>';
  
  document.getElementById('dTim').innerHTML = td;
  /////////////////////////////////////
  
  
  
  var myVector = document.getElementById('myJsonProyects');
  var myJSONValue = JSON.parse(myVector.value);
    
  //for(mv = 0; mv < myJSONValue.length; mv++){
  for(mv = 0; mv < 8; mv++){
    
    try{
      var myform = document.createElement('form');
      myform.setAttribute('action', '/asignacion/editor');
      myform.setAttribute('method', 'post');
      myform.className = 'list-style proyect-body proyect-element';


      var myProyectoinput = document.createElement('input');
      myProyectoinput.setAttribute('type', 'text');
      myProyectoinput.setAttribute('value', myJSONValue[mv].proyecto);
      myProyectoinput.setAttribute('name', 'nProyecto');
      myProyectoinput.setAttribute('readonly', 'readonly');
      myProyectoinput.className = 'proyect-body';
      


      var myModeinput = document.createElement('input');
      myModeinput.setAttribute('type', 'text');
      myModeinput.setAttribute('value', 'editable');
      myModeinput.setAttribute('name', 'mode');
      myModeinput.className = 'none';

      var mySubmit = document.createElement('button');
      mySubmit.setAttribute('type', 'submit');
      //mySubmit.setAttribute('value', 'Editar');
      mySubmit.className = 'proyect-body';// proyect-element';
      
      var mySpan = document.createElement('span');
      mySubmit.appendChild(mySpan);

      myform.appendChild(myProyectoinput);
      myform.appendChild(myModeinput);
      myform.appendChild(mySubmit);

      misProyectos.appendChild(myform);
    }
    catch(exception){
      var element = document.createElement('a');
      element.href = '/asignacion/nuevo';
      element.className = 'list-style proyect-body proyect-element';
      element.innerHTML = 'Crear'
      misProyectos.appendChild(element);
    }
    
  }
  
  var element = document.createElement('a');
  element.href = '/asignacion/nuevo';
  element.className = 'list-style proyect-body proyect-element';
  element.innerHTML = 'Crear'
  misProyectos.appendChild(element);
  
  var element = document.createElement('a');
  element.href = '/asignacion';
  element.className = 'list-style proyect-body proyect-element';
  element.innerHTML = 'Ver más...';
  misProyectos.appendChild(element);
  
}

window.onload = cargar();