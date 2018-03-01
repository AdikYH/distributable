//var myContenido = document.getElementById('contenido');
var misProyectos = document.getElementById('contenido');

function confirmar(){
  var r = confirm('¿Realmente desea eliminar este proyecto?')
  return r;
}

function cargar(){
  
  var myVector = document.getElementById('myData');
  var myJSONValue = JSON.parse(myVector.value);
  
  var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
  var dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
  
  
  for(mv = 0; mv < myJSONValue.length; mv++){
    
    
    try{
      
      var ELDiv = document.createElement('div');
      ELDiv.className = 'element-line';
      
      var FrmTg = document.createElement('div');
      FrmTg.className = 'form-tag';
      var pySpn = document.createElement('span');
      pySpn.className = 'element-name';
      pySpn.innerHTML = myJSONValue[mv].proyecto;
      FrmTg.appendChild(pySpn);
      
      
      var myDate = new Date(myJSONValue[mv].creacion);
      var dtSpn = document.createElement('span');
      dtSpn.className = 'element-date';
      dtSpn.innerHTML = 'Creado el '+ dias[myDate.getDay()]+ ' '+ myDate.getDate()+ ' de '+ meses[myDate.getMonth()]+ ' de '+ myDate.getFullYear();
      FrmTg.appendChild(dtSpn);
      
      
      var FrmEd = document.createElement('div');
      FrmEd.className = 'form-edit';
      var tsFrm = document.createElement('form');
      tsFrm.setAttribute('action', '/asignacion/editor');
      tsFrm.setAttribute('method', 'post');
      var txImp = document.createElement('input');
      txImp.setAttribute('type', 'text');
      txImp.setAttribute('value', myJSONValue[mv].proyecto);
      txImp.setAttribute('name', 'nProyecto');
      txImp.setAttribute('readonly', 'readonly');
      var mdImp = document.createElement('input');
      mdImp.setAttribute('type', 'text');
      mdImp.setAttribute('value', 'editable');
      mdImp.setAttribute('name', 'mode');
      mdImp.setAttribute('readonly', 'readonly');
      var btnSm = document.createElement('button');
      btnSm.setAttribute('type', 'submit');
      btnSm.innerHTML = 'Editar'
      
      tsFrm.appendChild(txImp);
      tsFrm.appendChild(mdImp);
      tsFrm.appendChild(btnSm);
      
      FrmEd.appendChild(tsFrm);
      
      var FrmDt = document.createElement('div');
      FrmDt.className = 'form-delete';
      var tsFrm = document.createElement('form');
      tsFrm.setAttribute('action', '/asignacion/editor');
      tsFrm.setAttribute('method', 'post');
      tsFrm.setAttribute('onSubmit', 'return confirmar()');
      var txImp = document.createElement('input');
      txImp.setAttribute('type', 'text');
      txImp.setAttribute('value', myJSONValue[mv].proyecto);
      txImp.setAttribute('name', 'nProyecto');
      txImp.setAttribute('readonly', 'readonly');
      var mdImp = document.createElement('input');
      mdImp.setAttribute('type', 'text');
      mdImp.setAttribute('value', 'delete');//eliminacion
      mdImp.setAttribute('name', 'mode');
      mdImp.setAttribute('readonly', 'readonly');
      var btnSm = document.createElement('button');
      btnSm.setAttribute('type', 'submit');
      btnSm.innerHTML = 'Eliminar'
      
      tsFrm.appendChild(txImp);
      tsFrm.appendChild(mdImp);
      tsFrm.appendChild(btnSm);
      
      FrmDt.appendChild(tsFrm);
      
      ELDiv.appendChild(FrmTg);
      ELDiv.appendChild(FrmEd);
      ELDiv.appendChild(FrmDt);
      misProyectos.appendChild(ELDiv);
    }
    catch(exception){
      var element = document.createElement('a');
      element.href = '/asignacion/nuevo';
      element.className = 'list-style proyect-body proyect-element';
      element.innerHTML = 'Crear'
      misProyectos.appendChild(element);
    }
    
  }
  
}

window.onload = cargar();