var myTabla = document.getElementById('miTablaXLS');


var myITabla_1 = document.getElementById('miTablaInforme_1');
var myITabla_2 = document.getElementById('miTablaInforme_2');
var myITabla_3 = document.getElementById('miTablaInforme_3');

var spProyecto = document.getElementById('spProyecto');
var spAutor = document.getElementById('spAutor');

var cDep = document.getElementById('cDepartamento');
var cLoc = document.getElementById('cLocalidad');

var myJsonData = document.getElementById('myJSON');

var rSp = document.getElementById('rSp');
var pSp = document.getElementById('pSp');
var tSp = document.getElementById('tSp');

var tot = 0;
var rdy = 0;
var pnd = 0;

///////////////////////////////////////////
var totSumD12 = 0;
var totSumD34 = 0;
var totSumD01 = 0;
var totSumD14 = 0;
///////////////////////////////////////////

function llenarTabla() {
  
  var myJson = JSON.parse(myJsonData.value);
  
  var tam = Object.keys(myJson).length;
  
  for(jc = 0; jc < tam; jc++){
    var tag = Object.keys(myJson)[jc];
    
    var tamDoc = myJson[tag].length;
    
    for(jdc = 0; jdc < tamDoc; jdc++){
      insertar_fila(myJson[tag][jdc], jdc);
      
      insertarITabla_1(myJson[tag][jdc], jdc, tamDoc);
      
      insertarITabla_2(myJson[tag][jdc], jdc);
      insertarITabla_3(myJson[tag][jdc], jdc);
      //tot++;
    }
    /////////////////////////////////////////////////////////////////
    //console.log(Math.round(totSumD12*100)/100)
    //console.log(Math.round(totSumD34*100)/100)
    //console.log(Math.round(totSumD01*100)/100)
    //console.log(Math.round(totSumD14*100)/100)
    var tamDocX = myJson[tag].length;
    //console.log(tamDocX)
    if(Math.round(totSumD12*100)/100 > 0.001){
      document.getElementById('sTub12H').style.display = 'table-cell';
      for(jdc = 0; jdc < tamDocX; jdc++)
        document.getElementById('sTub12_'+jdc).style.display = 'table-cell';
    }
    else{
      document.getElementById('sTub12H').style.display = 'none';
      for(jdc = 0; jdc < tamDocX; jdc++)
        document.getElementById('sTub12_'+jdc).style.display = 'none';
    }
    if(Math.round(totSumD34*100)/100 > 0.001){
      document.getElementById('sTub34H').style.display = 'table-cell';
      for(jdc = 0; jdc < tamDocX; jdc++)
        document.getElementById('sTub34_'+jdc).style.display = 'table-cell';
    }
    else{
      document.getElementById('sTub34H').style.display = 'none';
      for(jdc = 0; jdc < tamDocX; jdc++)
        document.getElementById('sTub34_'+jdc).style.display = 'none';
    }
    if(Math.round(totSumD01*100)/100 > 0.001){
      document.getElementById('sTub01H').style.display = 'table-cell';
      for(jdc = 0; jdc < tamDocX; jdc++)
        document.getElementById('sTub01_'+jdc).style.display = 'table-cell';
    }
    else{
      document.getElementById('sTub01H').style.display = 'none';
      for(jdc = 0; jdc < tamDocX; jdc++)
        document.getElementById('sTub01_'+jdc).style.display = 'none';
    }
    if(Math.round(totSumD14*100)/100 > 0.001){
      document.getElementById('sTub14H').style.display = 'table-cell';
      for(jdc = 0; jdc < tamDocX; jdc++)
        document.getElementById('sTub14_'+jdc).style.display = 'table-cell';
    }
    else{
      document.getElementById('sTub14H').style.display = 'none';
      for(jdc = 0; jdc < tamDocX; jdc++)
        document.getElementById('sTub14_'+jdc).style.display = 'none';
    }
    
    var row = document.createElement('tr');
    var cell = row.insertCell(0);
    cell.innerHTML = 'TOTAL';
    cell.setAttribute('colspan', '2');
    row.appendChild(cell);
    var cell = row.insertCell(1);
    cell.innerHTML = Math.round(totSumD12*100)/100;
    cell.id = 'sTotTub_12';
    row.appendChild(cell);
    var cell = row.insertCell(2);
    cell.innerHTML = Math.round(totSumD34*100)/100;
    cell.id = 'sTotTub_34';
    row.appendChild(cell);
    var cell = row.insertCell(3);
    cell.innerHTML = Math.round(totSumD01*100)/100;
    cell.id = 'sTotTub_01';
    row.appendChild(cell);
    var cell = row.insertCell(4);
    cell.innerHTML = Math.round(totSumD14*100)/100;
    cell.id = 'sTotTub_14';
    row.appendChild(cell);
    myITabla_1.appendChild(row);
    
    if(Math.round(totSumD12*100)/100 > 0.001)
      document.getElementById('sTotTub_12').style.display = 'table-cell';
    else
      document.getElementById('sTotTub_12').style.display = 'none';
    if(Math.round(totSumD34*100)/100 > 0.001)
      document.getElementById('sTotTub_34').style.display = 'table-cell';
    else
      document.getElementById('sTotTub_34').style.display = 'none';
    if(Math.round(totSumD01*100)/100 > 0.001)
      document.getElementById('sTotTub_01').style.display = 'table-cell';
    else
      document.getElementById('sTotTub_01').style.display = 'none';
    if(Math.round(totSumD14*100)/100 > 0.001)
      document.getElementById('sTotTub_14').style.display = 'table-cell';
    else
      document.getElementById('sTotTub_14').style.display = 'none';
    /////////////////////////////////////////////////////////////////
    
  }
  
  //tSp.innerHTML = tot;
  //rSp.innerHTML = rdy;
  //pSp.innerHTML = pnd;
  
}


function insertarITabla_1(myJSON, p, tP){
  //console.log(p)
  //console.log(tP)
  //totSumD12 = 2;
  var row = document.createElement('tr');
  //////////////////////////////////////////////////////////////
  //console.log(myJSON['ISOMETRICO'])
  var isISO = myJSON['ISOMETRICO'];
  //console.log(isISO.graphData);
  
  var graphData = JSON.parse(isISO.graphData);
  //console.log(graphData)
  var sumD12 = 0;
  var sumD34 = 0;
  var sumD01 = 0;
  var sumD14 = 0;
  
  var miSumCodo12 = 0;
  var miSumCodo34 = 0;
  var miSumCodo01 = 0;
  var miSumCodo14 = 0;
  for(gr = 0; gr < graphData.length; gr++){
    //console.log(graphData[gr]);
    for(grd = 0; grd < graphData[gr].length; grd++){
      //console.log(graphData[gr][grd]);
      if(graphData[gr][grd].type == 'P' && graphData[gr][grd+1] && graphData[gr][grd+1].type == 'P'){
        switch(graphData[gr][grd].diametro){
          case '12':
            sumD12 = sumD12 + graphData[gr][grd].distancia;
            break;
          case '34':
            sumD34 = sumD34 + graphData[gr][grd].distancia;
            break;
          case '1':
            sumD01 = sumD01 + graphData[gr][grd].distancia;
            break;
          case '14':
            sumD14 = sumD14 + graphData[gr][grd].distancia;
            break;
          default:
            break;
        }
      }
      //////////////////////////////////////////
      //SUMA DE CODOS
      if(graphData[gr][grd].type == 'P' && graphData[gr][grd-1] && graphData[gr][grd-1].type == 'P' && graphData[gr][grd+1] && graphData[gr][grd+1].type == 'P'){

        if(graphData[gr][grd-1].diametro == graphData[gr][grd].diametro && graphData[gr][grd-1].angulo - graphData[gr][grd].angulo != 0 && !graphData[gr][grd].instalacion){
          switch(graphData[gr][grd].diametro){
            case '12':
              miSumCodo12++;
              break;
            case '34':
              miSumCodo34++;
              break;
            case '1':
              miSumCodo01++;
              break;
            case '14':
              miSumCodo14++;
              break;
          }
        }
      }else if(graphData[gr][grd].type == 'P' && graphData[gr][grd-1] && graphData[gr][grd-1].type == 'P' && graphData[gr][grd+1] && graphData[gr][grd+1].type == 'H'){
        var sit = -1;
        for(bp = grd+1; bp < graphData[gr].length; bp++){
          if(graphData[gr][bp].type == 'P'){
            sit = bp;
            break;
          }
        }
        if(sit > -1 && graphData[gr][grd-1].diametro == graphData[gr][sit].diametro && graphData[gr][grd-1].angulo - graphData[gr][sit].angulo != 0 && !graphData[gr][grd].instalacion && !graphData[gr][sit].instalacion){
          switch(graphData[gr][sit].diametro){
            case '12':
              miSumCodo12++;
              break;
            case '34':
              miSumCodo34++;
              break;
            case '1':
              miSumCodo01++;
              break;
            case '14':
              miSumCodo14++;
              break;
          }
        }
      }

      //////////////////////////////////////////
    }
  }
  totSumD12 = totSumD12 + sumD12;
  totSumD34 = totSumD34 + sumD34;
  totSumD01 = totSumD01 + sumD01;
  totSumD14 = totSumD14 + sumD14;
  
  //////////////////////////////////////////////////////////////
  for(rw = 0; rw < 12; rw++){
    
    var cell = row.insertCell(rw);
    switch(rw){
      case 0:
        cell.innerHTML = myJSON['Nro'] || '';
        break;
      case 1:
        cell.innerHTML = myJSON['Dpto'] +'-'+ myJSON['Loc'] + '-' + myJSON['DIST'] + '-' + myJSON['ZONA'] + '-' + myJSON['MANZ'] + '-' + myJSON['PREDIO'] + '-' + myJSON['PISO/DPTO'];
        break;
      case 2:
        cell.innerHTML = Math.round(sumD12*100)/100;
        cell.id = 'sTub12_'+p
        break;
      case 3:
        cell.innerHTML = Math.round(sumD34*100)/100;
        cell.id = 'sTub34_'+p
        break;
      case 4:
        cell.innerHTML = Math.round(sumD01*100)/100;
        cell.id = 'sTub01_'+p
        break;
      case 5:
        cell.innerHTML = Math.round(sumD14*100)/100;
        cell.id = 'sTub14_'+p
        break;
      case 6:
        cell.innerHTML = miSumCodo12;
        break;
      case 7:
        cell.innerHTML = miSumCodo34;
        break;
      case 8:
        cell.innerHTML = miSumCodo01;
        break;
      case 9:
        cell.innerHTML = miSumCodo14;
        break;
      default:
        cell.innerHTML = '0';
        break
    }
  }
  myITabla_1.appendChild(row);
}
function insertarITabla_2(myJSON, p){
  var row = document.createElement('tr');
  for(rw = 0; rw < 29; rw++){
    var cell = row.insertCell(rw);
    switch(rw){
      case 0:
        cell.innerHTML = myJSON['Nro'] || '';
        break;
      case 1: 
        cell.innerHTML = myJSON['APELLIDO PATERNO'] || '';
      break;
      case 2: 
        cell.innerHTML = myJSON['APELLIDO MATERNO'] || '';
      break;
      case 3: 
        cell.innerHTML = myJSON['NOMBRES'] || '';
      break;
      default:
        cell.innerHTML = '0';
        break;
    }
  }
  myITabla_2.appendChild(row);
}
function insertarITabla_3(myJSON, p){
  var row = document.createElement('tr');
  for(rw = 0; rw < 12; rw++){
    var cell = row.insertCell(rw);
    switch(rw){
      case 0:
        cell.innerHTML = myJSON['Nro'] || '';
        break;
      case 1: 
        cell.innerHTML = myJSON['APELLIDO PATERNO'] || '';
      break;
      case 2: 
        cell.innerHTML = myJSON['APELLIDO MATERNO'] || '';
      break;
      case 3: 
        cell.innerHTML = myJSON['NOMBRES'] || '';
      break;
      default:
        cell.innerHTML = '0';
        break;
    }
  }
  myITabla_3.appendChild(row);
}


function insertar_fila(myJSON, p){
  var row = document.createElement('tr');
      
  for(rw = 0; rw < 19; rw++){
      
    var cell = row.insertCell(rw);
        
    switch(rw){
      case 0: 
        cell.innerHTML = myJSON['Nro'] || '';
      break;
      case 1: 
        cell.innerHTML = myJSON['Dpto'] || '';
      break;
      case 2: 
        cell.innerHTML = myJSON['Loc'] || '';
      break;
      case 3: 
        cell.innerHTML = myJSON['DIST'] || '';
      break;
      case 4: 
        cell.innerHTML = myJSON['ZONA'] || '';
      break;
      case 5: 
        cell.innerHTML = myJSON['MANZ'] || '';
      break;
      case 6: 
        cell.innerHTML = myJSON['PREDIO'] || '';
      break;
      case 7: 
        cell.innerHTML = myJSON['PISO/DPTO'] || '';
      break;
      case 8: 
        cell.innerHTML = myJSON['APELLIDO PATERNO'] || '';
      break;
      case 9: 
        cell.innerHTML = myJSON['APELLIDO MATERNO'] || '';
      break;
      case 10: 
        cell.innerHTML = myJSON['NOMBRES'] || '';
      break;
      case 11: 
        cell.innerHTML = myJSON['CARNET'] || '';
      break;
      case 12: 
        cell.innerHTML = myJSON['AVDA/ CALLE'] || '';
      break;
      case 13: 
        cell.innerHTML = myJSON['TEL/CEL'] || '';
      break;
      case 14: 
        cell.innerHTML = myJSON['OBSERVACIONES'] || '';
      break;
      case 15:
        var myform = document.createElement('form');
        myform.setAttribute('action', '/myDrawer');
        myform.setAttribute('method', 'post');
        
        var myJSONFullinput = document.createElement('input');
        myJSONFullinput.setAttribute('type', 'text');
        myJSONFullinput.setAttribute('value', myJsonData.value);
        myJSONFullinput.setAttribute('name', 'myFullJson');
        
        var myJSONinput = document.createElement('input');
        myJSONinput.setAttribute('type', 'text');
        myJSONinput.setAttribute('value', JSON.stringify(myJSON, null, 2));
        myJSONinput.setAttribute('name', 'myJson');
        
        var myProyectoinput = document.createElement('input');
        myProyectoinput.setAttribute('type', 'text');
        myProyectoinput.setAttribute('value', spProyecto.innerHTML);
        myProyectoinput.setAttribute('name', 'myProyecto');
        
        var myAutorinput = document.createElement('input');
        myAutorinput.setAttribute('type', 'text');
        myAutorinput.setAttribute('value', spAutor.innerHTML);
        myAutorinput.setAttribute('name', 'myAutor');
        
        
        
        var element = document.createElement('input');
        element.setAttribute('type', 'submit');
        
        /*if(myJSON.ISOMETRICO.myGradosData == '' || JSON.parse(myJSON.ISOMETRICO.myGradosData)[0] == undefined){
          element.setAttribute('value', 'CREAR');
          pnd++;
        }
        else{
          element.setAttribute('value', 'VER');
          element.className = 'exist';
          rdy++;
        }*/
        //console.log(JSON.parse(myJSON.ISOMETRICO.graphData).length)
        //console.log(JSON.parse(myJSON.ISOMETRICO.graphData))
        if(myJSON.ISOMETRICO.graphData == '' || JSON.parse(myJSON.ISOMETRICO.graphData)[0] == undefined || JSON.parse(myJSON.ISOMETRICO.graphData)[0].length <= 1){
          element.setAttribute('value', 'CREAR');
          //pnd++;
        }
        else{
          element.setAttribute('value', 'VER');
          element.className = 'exist';
          //rdy++;
        }
        
        //console.log(JSON.parse(myJSON.ISOMETRICO.myDistanciaData));
        
        myform.appendChild(myProyectoinput);
        myform.appendChild(myAutorinput);
        myform.appendChild(myJSONinput);
        myform.appendChild(myJSONFullinput);
        myform.appendChild(element);
        cell.appendChild(myform);
      break;
      case 16: 
        var myform = document.createElement('form');
        myform.setAttribute('action', '/form01');
        myform.setAttribute('method', 'post');
        
        var myJSONFullinput = document.createElement('input');
        myJSONFullinput.setAttribute('type', 'text');
        myJSONFullinput.setAttribute('value', myJsonData.value);
        myJSONFullinput.setAttribute('name', 'myFullJson');
        
        var myJSONinput = document.createElement('input');
        myJSONinput.setAttribute('type', 'text');
        myJSONinput.setAttribute('value', JSON.stringify(myJSON, null, 2));
        myJSONinput.setAttribute('name', 'myJson');
        
        var myProyectoinput = document.createElement('input');
        myProyectoinput.setAttribute('type', 'text');
        myProyectoinput.setAttribute('value', spProyecto.innerHTML);
        myProyectoinput.setAttribute('name', 'myProyecto');
        
        var myAutorinput = document.createElement('input');
        myAutorinput.setAttribute('type', 'text');
        myAutorinput.setAttribute('value', spAutor.innerHTML);
        myAutorinput.setAttribute('name', 'myAutor');
        
        var element = document.createElement('input');
        element.setAttribute('type', 'submit');
        
        if(myJSON.ISOMETRICO.graphData == '' || JSON.parse(myJSON.ISOMETRICO.graphData)[0] == undefined || JSON.parse(myJSON.ISOMETRICO.graphData)[0].length <= 1){
          element.setAttribute('value', 'CREAR');
          //pnd++;
        }
        else{
          element.setAttribute('value', 'VER');
          element.className = 'exist';
          //rdy++;
        }
        
        myform.appendChild(myProyectoinput);
        myform.appendChild(myAutorinput);
        myform.appendChild(myJSONinput);
        myform.appendChild(myJSONFullinput);
        myform.appendChild(element);
        cell.appendChild(myform);
      break;
      case 17: 
        //cell.innerHTML = myJSON['General'] || '';
        var myform = document.createElement('form');
        myform.setAttribute('action', '/memoria');
        myform.setAttribute('method', 'post');
        
        var myJSONFullinput = document.createElement('input');
        myJSONFullinput.setAttribute('type', 'text');
        myJSONFullinput.setAttribute('value', myJsonData.value);
        myJSONFullinput.setAttribute('name', 'myFullJson');
        
        var myJSONinput = document.createElement('input');
        myJSONinput.setAttribute('type', 'text');
        myJSONinput.setAttribute('value', JSON.stringify(myJSON, null, 2));
        myJSONinput.setAttribute('name', 'myJson');
        
        var myProyectoinput = document.createElement('input');
        myProyectoinput.setAttribute('type', 'text');
        myProyectoinput.setAttribute('value', spProyecto.innerHTML);
        myProyectoinput.setAttribute('name', 'myProyecto');
        
        var myAutorinput = document.createElement('input');
        myAutorinput.setAttribute('type', 'text');
        myAutorinput.setAttribute('value', spAutor.innerHTML);
        myAutorinput.setAttribute('name', 'myAutor');
        
        var element = document.createElement('input');
        element.setAttribute('type', 'submit');
        
        if(myJSON.ISOMETRICO.graphData == '' || JSON.parse(myJSON.ISOMETRICO.graphData)[0] == undefined || JSON.parse(myJSON.ISOMETRICO.graphData)[0].length <= 1){
          element.setAttribute('value', 'CREAR');
          //pnd++;
        }
        else{
          element.setAttribute('value', 'VER');
          element.className = 'exist';
          //rdy++;
        }
        
        myform.appendChild(myProyectoinput);
        myform.appendChild(myAutorinput);
        myform.appendChild(myJSONinput);
        myform.appendChild(myJSONFullinput);
        myform.appendChild(element);
        cell.appendChild(myform);
      break;
      case 18: 
        //cell.innerHTML = myJSON['General'] || '';
        var myform = document.createElement('form');
        myform.setAttribute('action', '/form01');
        myform.setAttribute('method', 'post');
        
        var myJSONFullinput = document.createElement('input');
        myJSONFullinput.setAttribute('type', 'text');
        myJSONFullinput.setAttribute('value', myJsonData.value);
        myJSONFullinput.setAttribute('name', 'myFullJson');
        
        var myJSONinput = document.createElement('input');
        myJSONinput.setAttribute('type', 'text');
        myJSONinput.setAttribute('value', JSON.stringify(myJSON, null, 2));
        myJSONinput.setAttribute('name', 'myJson');
        
        var myProyectoinput = document.createElement('input');
        myProyectoinput.setAttribute('type', 'text');
        myProyectoinput.setAttribute('value', spProyecto.innerHTML);
        myProyectoinput.setAttribute('name', 'myProyecto');
        
        var myAutorinput = document.createElement('input');
        myAutorinput.setAttribute('type', 'text');
        myAutorinput.setAttribute('value', spAutor.innerHTML);
        myAutorinput.setAttribute('name', 'myAutor');
        
        var element = document.createElement('input');
        element.setAttribute('type', 'submit');
        
        if(myJSON.ISOMETRICO.graphData == '' || JSON.parse(myJSON.ISOMETRICO.graphData)[0] == undefined || JSON.parse(myJSON.ISOMETRICO.graphData)[0].length <= 1){
          element.setAttribute('value', 'CREAR');
          //pnd++;
        }
        else{
          element.setAttribute('value', 'VER');
          element.className = 'exist';
          //rdy++;
        }
        
        myform.appendChild(myProyectoinput);
        myform.appendChild(myAutorinput);
        myform.appendChild(myJSONinput);
        myform.appendChild(myJSONFullinput);
        myform.appendChild(element);
        cell.appendChild(myform);
      break;
    }
  }
      myTabla.appendChild(row);
}


/*

function exportarEsto_Dos(){
  //alert('Exportando')
  //console.log('Exportandoooooooooooo')
  export_table_to_excel('tbl_excel');
  //export_table_to_excel('<table><tbody><tr><td>Some</td></tr></tbody></table>');
}
function exportar(miTabla){
  export_table_to_excel(miTabla);
}*/

window.onload = llenarTabla();
//window.onload(location.reload());