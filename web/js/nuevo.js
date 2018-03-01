var myTabla = document.getElementById('miTablaXLS');
var myCreateButton = document.getElementById('saveCont');
var myDivSubButton = document.getElementById('form-submit');
var myJsonData = document.getElementById('myJsonData');
var xlf = document.getElementById('xlf');
var out = document.getElementById('out');
function get_radio_value( radioName ) {
  var radios = document.getElementsByName( radioName );
  for( var i = 0; i < radios.length; i++ ) {
    if( radios[i].checked ) {
      return radios[i].value;
    }
  }
}

function to_json(workbook) {
  var result = {};
  workbook.SheetNames.forEach(function(sheetName) {
    var rObjArr = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    if(rObjArr.length > 0){
      result[sheetName] = rObjArr;
    }
  });
  return result;
}

function to_csv(workbook) {
  var result = [];
  workbook.SheetNames.forEach(function(sheetName) {
    var rObjArr = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
    if(rObjArr.length > 0){
      result.push("SHEET: " + sheetName);
      result.push("");
      result.push(rObjArr);
    }
  });
  return result.join("\n");
}

function process_xlsx(xlsx) {
  var output = "";
  if(get_radio_value("format") === "json"){
    output = JSON.stringify(to_json(xlsx), 2, 2);
  } else {
    output = to_csv(xlsx);
  }
  if(out.innerText === undefined) out.textContent = output;
  else out.innerText = output;
}

function handleFile(e) {
  clearTable();
  var files = e.target.files;
  //console.log(files)
  var i,f;
  for (i = 0, f = files[i]; i != files.length; ++i) {
    var reader = new FileReader();
    var name = f.name;
    reader.onload = function(e) {
      var data = e.target.result;

      try{
        var workbook = XLSX.read(data, {type: 'binary'});

        /*var myTemporalJSON = to_json(workbook);

        var myTmpT = Object.keys(myTemporalJSON).length

        for(rv = 0; rv < myTmpT; rv++){
          var myTmpTg = Object.keys(myTemporalJSON)[rv];
          var myDocSize = myTemporalJSON[myTmpTg].length;
          for(orv = 0; orv < myDocSize; orv++){
            //console.log(myTemporalJSON[myTmpTg][orv]);
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
            myTemporalJSON[myTmpTg][orv].Nro;
          }
        }*/

        myJsonData.value = JSON.stringify(to_json(workbook), null, 0);

        //console.log(JSON.stringify(to_json(workbook)))

        //myJsonData.value = 'NADA'

        workbook.SheetNames.forEach(function(sheetName) {
          var rObjArr = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
          if(rObjArr.length > 0){
            for(ja = 0; ja < rObjArr.length; ja++){
              insertar_fila(rObjArr[ja], ja);
            }
          }
        });



        myTabla.style.display = 'block';



        // myCreateButton.classList.add('activeButton');
        // myCreateButton.disabled = false;
      }
      catch(exception){
        myTabla.style.display = 'none';

        // myCreateButton.classList.remove('activeButton');
        // myCreateButton.disabled = true;
      }
    };
    reader.readAsBinaryString(f);
  }
}

function clearTable(){
  var myTableTam = myTabla.rows.length;
  for(myTCount = 0; myTCount < myTableTam-1; myTCount++)
    myTabla.deleteRow(1);
}

function insertar_fila(myJSON, p){
  var row = document.createElement('tr');

  for(rw = 0; rw < 13; rw++){

    var cell = row.insertCell(rw);

    switch(rw){
      case 0:
        cell.innerHTML = myJSON['Nro'] || '';
      break;
      case 1:
        cell.innerHTML = myJSON['DIST'] || '';
      break;
      case 2:
        cell.innerHTML = myJSON['ZONA'] || '';
      break;
      case 3:
        cell.innerHTML = myJSON['MANZ'] || '';
      break;
      case 4:
        cell.innerHTML = myJSON['PREDIO'] || '';
      break;
      case 5:
        cell.innerHTML = myJSON['PISO/DPTO'] || '';
      break;
      case 6:
        cell.innerHTML = myJSON['APELLIDO PATERNO'] || '';
      break;
      case 7:
        cell.innerHTML = myJSON['APELLIDO MATERNO'] || '';
      break;
      case 8:
        cell.innerHTML = myJSON['NOMBRES'] || '';
      break;
      case 9:
        cell.innerHTML = myJSON['CARNET'] || '';
      break;
      case 10:
        cell.innerHTML = myJSON['AVDA/ CALLE'] || '';
      break;
      case 11:
        cell.innerHTML = myJSON['TEL/CEL'] || '';
      break;
      case 12:
        cell.innerHTML = myJSON['OBSERVACIONES'] || '';
      break;
      case 13:
        var element = document.createElement("input");
        element.type = "button";
        //element.name = 'Ir';
        element.value = 'Ir';
        element.onclick = function(){alert('select')};
        cell.appendChild(element);
      break;
    }
  }
      myTabla.appendChild(row);
}

if(xlf.addEventListener) xlf.addEventListener('change', handleFile, false);
