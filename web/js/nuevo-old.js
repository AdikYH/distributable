var myTabla = document.getElementById('miTablaXLS');
var myCreateButton = document.getElementById('saveCont');
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
    var xlf = document.getElementById('xlf');
    var out = document.getElementById('out');

    function handleFile(e) {
      var files = e.target.files;
      var i,f;
      for (i = 0, f = files[i]; i != files.length; ++i) {
        var reader = new FileReader();
        var name = f.name;
        reader.onload = function(e) {
          var data = e.target.result;

          var workbook = XLSX.read(data, {type: 'binary'});

          //if(out.innerText === undefined) out.textContent = to_csv(workbook);//JSON.stringify(to_json(workbook), 2, 2);
          //else out.innerText = to_csv(workbook);//JSON.stringify(to_json(workbook), 2, 2);
          
          /*workbook.SheetNames.forEach(function(sheetName) {
            var rObjArr = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);
            if(rObjArr.length > 0){
              result.push("SHEET: " + sheetName);
              result.push("");
              result.push(rObjArr);
              console.log(rObjArr[01]);
            }
          });*/
          
          //console.log(XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]));
          
          workbook.SheetNames.forEach(function(sheetName) {
            var rObjArr = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
            if(rObjArr.length > 0){
              for(ja = 0; ja < rObjArr.length; ja++){
                //console.log(rObjArr[ja]);
                insertar_fila(rObjArr[ja], ja);
              }
              //console.log(rObjArr.length);
              //console.log(rObjArr[0]);
              
              //var myArray = Object.keys(rObjArr[0]).map(function(k) { return rObjArr[0][k] });
              //console.log(myArray);
              
              //genera_tabla();
            }
          });
          
          console.log(workbook.SheetNames.length)
          console.log(data)
          
        };
        reader.readAsBinaryString(f);
      }
      
      myTabla.style.display = 'block';  
      myCreateButton.disabled = false;
      myCreateButton.style.color = 'white';
      myCreateButton.style.backgroundColor = 'rgba(58, 50, 113, 0.9)';
      
    }
    
    function insertar_fila(myJSON, p){
      //console.log(myJSON)
      //var row = myTabla.insertRow(p);
      var row = document.createElement('tr');
      
      for(rw = 0; rw < 13; rw++){
      
        var cell = row.insertCell(rw);
        
        switch(rw){
          case 0: 
            cell.innerHTML = myJSON['Nro.'] || '';
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
    
    function genera_tabla() {
      // Obtener la referencia del elemento body
      var body = document.getElementsByTagName("body")[0];

      // Crea un elemento <table> y un elemento <tbody>
      var tabla   = document.createElement("table");
      var tblBody = document.createElement("tbody");

      // Crea las celdas
      for (var i = 0; i < 2; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < 2; j++) {
          // Crea un elemento <td> y un nodo de texto, haz que el nodo de
          // texto sea el contenido de <td>, ubica el elemento <td> al final
          // de la hilera de la tabla
          var celda = document.createElement("td");
          var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
          celda.appendChild(textoCelda);
          hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
      }

      // posiciona el <tbody> debajo del elemento <table>
      tabla.appendChild(tblBody);
      // appends <table> into <body>
      body.appendChild(tabla);
      // modifica el atributo "border" de la tabla y lo fija a "2";
      tabla.setAttribute("border", "2");
      //alert('finish')
    }

    if(xlf.addEventListener) xlf.addEventListener('change', handleFile, false);
    