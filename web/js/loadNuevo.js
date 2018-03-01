function confirmar(){
  console.log('confirmando');
  myCreateButton.classList.remove('activeButton');
  myCreateButton.disabled = true;
  document.getElementById('myAlertName').innerHTML = '';
  document.getElementById('myAlertAutor').innerHTML = '';

  if(document.forms['myCreateForm'].elements['nProyecto'].value == '' ||
  document.forms['myCreateForm'].elements['pAutor'].value == '' ||
  document.forms['myCreateForm'].elements['eRazonSocial'].value == '' ||
  document.forms['myCreateForm'].elements['eResolucion'].value == '' ||
  document.forms['myCreateForm'].elements['eDireccion'].value == '' ||
   /*document.forms['myCreateForm'].elements['eTelefono'].value == '' ||*/
  document.forms['myCreateForm'].elements['eProyectista'].value == '' ||
  document.forms['myCreateForm'].elements['eRegistroP'].value == '' ||
  document.forms['myCreateForm'].elements['eInstalador'].value == '' ||
  document.forms['myCreateForm'].elements['eRegistroI'].value == '' ||
  document.forms['myCreateForm'].elements['pNumero'].value == '' ||
  document.forms['myCreateForm'].elements['pLocalidad'].value == '' ||
  document.forms['myCreateForm'].elements['pDepartamento'].value == '' ||
  document.forms['myCreateForm'].elements['pLocalidadC'].value == '' ||
  document.forms['myCreateForm'].elements['pDepartamentoC'].value == ''||
  document.forms['myCreateForm'].elements['eImagenLogo'].value == ''||
  document.forms['myCreateForm'].elements['eTextoLogo'].value == ''||
  document.forms['myCreateForm'].elements['xlf'].value == ''||
  document.getElementById("miTablaXLS").rows.length <= 1){
    //console.log('falla')
    if(document.forms['myCreateForm'].elements['nProyecto'].value == '')
      document.getElementById('myAlertName').innerHTML = 'Por favor introduzca un nombre en el campo.';
    if(document.forms['myCreateForm'].elements['pAutor'].value == '')
      document.getElementById('myAlertAutor').innerHTML = 'Por favor ponle un autor a tu proyecto.';
    if(document.forms['myCreateForm'].elements['eRazonSocial'].value == '')
      document.getElementById('alerteRazonSocial').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['eResolucion'].value == '')
      document.getElementById('alerteResolucion').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['eDireccion'].value == '')
      document.getElementById('alerteDireccion').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['eProyectista'].value == '')
      document.getElementById('alerteProyectista').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['eRegistroP'].value == '')
      document.getElementById('alerteRegistroP').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['eInstalador'].value == '')
      document.getElementById('alerteInstalador').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['eRegistroI'].value == '')
      document.getElementById('alerteRegistroI').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['pNumero'].value == '')
      document.getElementById('alertpNumero').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['pLocalidad'].value == '')
      document.getElementById('alertpLocalidad').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['pDepartamento'].value == '')
      document.getElementById('alertpDepartamento').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['pLocalidadC'].value == '')
      document.getElementById('alertpLocalidadC').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['pDepartamentoC'].value == '')
      document.getElementById('alertpDepartamentoC').innerHTML = ' * ';

    if(document.forms['myCreateForm'].elements['eImagenLogo'].value == '')
      document.getElementById('alerteImagenLogo').innerHTML = ' * ';
    if(document.forms['myCreateForm'].elements['eTextoLogo'].value == '')
      document.getElementById('alerteTextoLogo').innerHTML = ' * ';

    document.getElementById('alertCampo').style.display = 'block';
    //document.getElementById('myAlertName').innerHTML = 'Por favor introduzca un nombre en el campo.';
    //if(document.forms['myCreateForm'].elements['pAutor'].value == '')
      //document.getElementById('myAlertAutor').innerHTML = 'Por favor ponle un autor a tu proyecto.';

    myCreateButton.classList.add('activeButton');
    myCreateButton.disabled = false;
    alert("Asegurese de rellenar todos los campos requeridos.")
    return false;

  }else{
    if(document.forms['myCreateForm'].elements['pAutor'].value == ''){
      document.getElementById('myAlertAutor').innerHTML = 'Por favor ponle un autor a tu proyecto.';

      myCreateButton.classList.add('activeButton');
      myCreateButton.disabled = false;
      alert("Asegurese de rellenar todos los campos requeridos.")
      return false;
    }
    else{
      myCreateButton.classList.remove('activeButton');
      myCreateButton.disabled = true;
      return true;
    }
    /*var r = confirm('Eliminará el elemento ' + document.forms['myDeleteForm'].elements['nProyecto'].value);
    return r;*/
  }
}

function Validar(miName){
  if(document.forms['myCreateForm'].elements[miName].value == ''){
    document.getElementById('alertCampo').style.display = 'block';
    document.getElementById('alert' + miName).innerHTML = ' * ';
  }
  else
    document.getElementById('alert' + miName).innerHTML = ' ';
}

function ValidarImagen(miName){

  //console.log('ima')
  //console.log(document.forms['myCreateForm'].elements[miName].value)
  if(document.forms['myCreateForm'].elements[miName].value == ''){
    //document.getElementById('alertCampo').style.display = 'block';
    document.getElementById('alert' + miName).innerHTML = ' * ';
  }
  else{
    //console.log(document.forms['myCreateForm'].elements[miName].files[0].type.substring(0, 5))
    if(document.forms['myCreateForm'].elements[miName].files[0].type.substring(0, 5) == 'image'){
      document.getElementById('alert' + miName).innerHTML = ' ';
      //console.log('es una imagen')
    }
    else{
      document.forms['myCreateForm'].elements[miName].value = '';
      document.getElementById('alert' + miName).innerHTML = ' * ';
    }
    //document.getElementById('alert' + miName).innerHTML = ' ';
  }
}

function ValidarP(){
  if(document.forms['myCreateForm'].elements['nProyecto'].value == '')
    document.getElementById('myAlertName').innerHTML = 'Campo requerido';
  else
    document.getElementById('myAlertName').innerHTML = '';
}

function ValidarA(){
  if(document.forms['myCreateForm'].elements['pAutor'].value == '')
    document.getElementById('myAlertAutor').innerHTML = 'Campo requerido';
  else
    document.getElementById('myAlertAutor').innerHTML = '';
}
