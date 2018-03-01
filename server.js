var express = require('express'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    localStrategy = require('passport-local').Strategy,
    ceLogin = require('connect-ensure-login'),
    flash = require('connect-flash'),
    path = require('path'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    favicon = require('serve-favicon'),
    cloudinary = require('cloudinary'),
    fs = require('fs'),
    multer = require('multer'),
    app = express();

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './app/imaData/');
  },

  filename: function (req, file, callback) {
    //callback(null, file.fieldname + '-' + Date.now());
    callback(null, file.originalname);
  }
});

//var upload = multer({ storage : storage }).array('upload',2);
var upload = multer({ storage : storage }).any();

cloudinary.config({
  cloud_name: 'aru',
  api_key : '683976914316314',
  api_secret: 'r_rWMD4h6sjrQtPxucbjcwYiYrM'
});

var usuario_db = require('./app/modelo/usuario');
var proyecto_db = require('./app/modelo/proyecto');
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(favicon(path.join(__dirname , 'web', 'favicon.ico')));
app.set('views', path.join(__dirname, 'app', 'vista'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'web')));
app.use(session({secret: 'miIsometricsSecret', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.serializeUser(function(usuario, done){
  done(null, usuario.id);
});

passport.deserializeUser(function(id, done){
  usuario_db.findById(id, function(err, usuario){
    done(err, usuario);
  });
});

passport.use('local-login', new localStrategy({
  usernameField: 'usuario',
  passwordField: 'password',
  passReqToCallback: true,
  session: false
},
  function(req, usuario, password, done){
    usuario_db.findOne({usuario: usuario}, function (err, user) {
      if (err){return done(err);}
      if (!user){return done(null, false, req.flash('loginMessage', 'Usuario no encontrado.'));}
      if (!user.validPassword(password)){return done(null, false, req.flash('loginMessage', 'Contraseña incorrecta.'));}
      //if (user.validPassword(password)){return done(null, false, req.flash('loginMessage', 'Contraseña incorrecta.'));}
      var h = new Date().getTime();
      console.log(h)
      console.log(user.tiempo)
      console.log(user.limite)
      var lt = user.limite;
      console.log(user.update.getTime())
      var u = user.update.getTime();

      console.log(Math.round(Math.abs((u - h)/1000)));

      var dif = Math.round(Math.abs((u - h)/1000));

      //console.log(dif)
      if(user.tiempo == 'limitado' && lt - dif < 0){return done(null, false, req.flash('loginMessage', 'Tiempo Excedido'));}
      return done(null, user);
    });
  }
));

passport.use('local-signup', new localStrategy({
  usernameField: 'usuarioC',
  passwordField: 'passwordC',
  passReqToCallback: true,
  session: false

},
  function(req, usuario, password, done){
    // console.log(usuario);
    usuario_db.findOne({usuario: usuario}, function(err, user){
      if(err){return done(err);}
      if(user){return done(null, false, req.flash('signupMessage', 'Elige otro nombre de usuario'));}
      else{
        var userNew = new usuario_db();
        userNew.usuario = usuario;
        userNew.password = userNew.generatedHash(password);
        userNew.role = 'simpleUser';
        userNew.tiempo = 'limitado';
        userNew.creado = new Date();
        userNew.update = new Date();
        userNew.limite = 30000;
        userNew.save(function(err){
          if(err) throw err;
          return done(null, userNew);
        });
      }
    });
  }
));

app.get('/', ceLogin.ensureLoggedIn(), function(req, res){

  var myList = [];
  usuario_db.findOne({usuario: req.user.usuario}, function(err, myQuery) {
    if (err)
		  res.send(err);
    proyecto_db.find({usuario: req.user._id}, null, {sort: {creacion:-1}}, function(err, myNewQuery){
      if (err)
        res.send(err);

      var isoTot = 0;

      for(mq = 0; mq < myNewQuery.length; mq++){
        myList[mq] = {proyecto: myNewQuery[mq].proyecto};
        //console.log(myNewQuery[mq].proyecto.length);
        isoTot = isoTot + myNewQuery[mq].proyecto.length;
      }

      //console.log(myList);
      console.log(req.user.role);
      if(req.user.role == 'superAdmin')
        res.render('index', { us : req.user.usuario, proyectos: myList, nAs: mq, nIs: isoTot, ulink: '/administrador', direccion:'Administrador'});
      else
        res.render('index', { us : req.user.usuario, proyectos: myList, nAs: mq, nIs: isoTot});
    });

  });

});

app.get('/administrador', function(req, res){
  //console.log(req.user)
  try{

    var myList = [];
    if(req.user.role && req.user.role == 'superAdmin'){
      //var lUsuarios = [];
      usuario_db.find({}, null, function(err, myNewQuery){
        if (err)
          res.send(err);

        //var isoTot = 0;
        //console.log(myNewQuery.length)
        for(mq = 0; mq < myNewQuery.length; mq++){
          //console.log(myNewQuery[mq]);
          //myList[mq].usuario = myNewQuery[mq].usuario;
          //myList[mq].role = myNewQuery[mq].role;
          //myList[mq].tiempo = myNewQuery[mq].tiempo;

          myList[mq]= myNewQuery[mq];

          //isoTot = isoTot + myNewQuery[mq].proyecto.length;
        }

        //console.log(req.user.role);
        //if(req.user.role == 'superAdmin')
        //  res.render('index', { us : req.user.usuario, proyectos: myList, nAs: mq, nIs: isoTot, ulink: '/administrador', direccion:'Administrador'});
        //else
        //  res.render('index', { us : req.user.usuario, proyectos: myList, nAs: mq, nIs: isoTot});
        res.render('administrador', {us : req.user.usuario, ulink: '/administrador', direccion:'Administrador', misUsuarios: myNewQuery});
      });


      //res.render('administrador', {us : req.user.usuario, proyectos: myList, nAs: mq, nIs: isoTot, ulink: '/administrador', direccion:'Administrador'});
      //res.send('admin');
    }
    else
      res.redirect('/');
      //res.render('index', { us : req.user.usuario, proyectos: myList, nAs: mq, nIs: isoTot});
  }
  catch(err){
    res.redirect('/');
  }
})

app.post('/administrador', function(req, res){

  console.log(req.body);

  try{

    var myList = [];

    if(req.user.role && req.user.role == 'superAdmin'){
      //var lUsuarios = [];

      if(req.body.newTime.length > 0){

        var cti = req.body.newTime;
        var cps = req.body.newTime.length-1;

        var ld = 0;
        var lh = 0;
        var lm = 0;
        var ls = 0;

        var sw = 0;
        var ss = '';

        for(j = cps; j >= 0; j--){
          if(cti[j] != ':' && sw <=3){
            ss = cti[j].concat(ss);
          }
          else
            if(sw == 0){
              ls = parseInt(ss);
              sw = 1;
              ss = '';
            }
            else if(sw == 1){
              lm = parseInt(ss) * 60;
              sw = 2;
              ss = '';
            }
            else if(sw == 2){
              lh = parseInt(ss) * 3600;
              sw = 3;
              ss = '';
            }
            else if(sw == 3){
              ld = parseInt(ss) * 86400;
              sw = 4;
              //ss = '';
            }
          //console.log(j)
        }
        //console.log(ss);
        if(sw == 0){
          ls = parseInt(ss);
          sw = 1;
          ss = '';
        }
        else if(sw == 1){
          lm = parseInt(ss) * 60;
          sw = 2;
          ss = '';
        }
        else if(sw == 2){
          lh = parseInt(ss) * 3600;
          sw = 3;
          ss = '';
        }
        else if(sw == 3){
          ld = parseInt(ss) * 86400;
          sw = 4;
          //ss = '';
        }
        //console.log(ls);
        //console.log(lm);
        //console.log(lh);
        //console.log(ld);

        var nuevoTiempo = ld+lh+lm+ls;

        if( nuevoTiempo > 0)
          usuario_db.findOneAndUpdate({usuario : req.body.usuario}, {$set:{limite: ld+lh+lm+ls, update : new Date()}}, {new:true}, function(err, myRes){
            if (err)
              res.send(err);
          })

      }



      usuario_db.findOne({usuario : req.body.usuario}, function(err, myQueryRole){
        if (err)
          res.send(err);

        //console.log(myQueryRole.role);
        if(myQueryRole.role != req.body.newRole && req.body.newRole == 'superAdmin')
          usuario_db.findOneAndUpdate({usuario : req.body.usuario}, {$set:{tiempo: 'indefinido', role: req.body.newRole}}, {new:true}, function(err, myRes){
            if (err)
              res.send(err);
          })
        else if(myQueryRole.role != req.body.newRole && req.body.newRole == 'simpleUser')
          usuario_db.findOneAndUpdate({usuario : req.body.usuario}, {$set:{tiempo: 'limitado', role: req.body.newRole}}, {new:true}, function(err, myRes){
            if (err)
              res.send(err);
          })
        //console.log(req.body.newRole);

      });

      //console.log('exito');

      //usuario_db.save(function(err) {
      //  if (err)
      //    res.send(err);
      //});

      //console.log(req.body.eliminar);
      if(req.body.eliminar == 'true' && req.body.usuario != 'admin'){

        //console.log(req.body.eliminar);
        usuario_db.findOneAndRemove({usuario : req.body.usuario}, function(err, myRes){
          if (err)
            res.send(err);
          //res.redirect('/administrador')
        })
      }



      usuario_db.find({}, null, function(err, myNewQuery){
        if (err)
          res.send(err);
        //console.log(myNewQuery)
        //for(mq = 0; mq < myNewQuery.length; mq++)
          //myList[mq]= myNewQuery[mq];
        res.redirect('/administrador')
        //res.render('administrador', {us : req.user.usuario, ulink: '/administrador', direccion:'Administrador', misUsuarios: myNewQuery});
      });

    }
    else
      res.redirect('/');
      //res.render('index', { us : req.user.usuario, proyectos: myList, nAs: mq, nIs: isoTot});
  }
  catch(err){
    res.redirect('/');
  }
})

app.get('/asignacion', ceLogin.ensureLoggedIn(), function(req, res){

  //db.proyectos.find().sort({creacion:-1});


  proyecto_db.find({usuario: req.user._id}, null, {sort: {creacion:-1}}, function(err, myQuery){
    if(err)
      res.send(err);
    //var myList = {};
    var myList = [];
    //var myDates = [];
    for(mq = 0; mq < myQuery.length; mq++){
      myList[mq] = {proyecto: myQuery[mq].proyecto, creacion: myQuery[mq].creacion};
    }
    //console.log(myList);
    //console.log(JSON.parse( JSON.stringify(myList, null, 0)));

    if(req.user.role == 'superAdmin')
      res.render('proyecto', {us : req.user.usuario, proyectos: myList, tam: myList.length, ulink: '/administrador', direccion:'Administrador'});
    else
      res.render('proyecto', {us : req.user.usuario, proyectos: myList, tam: myList.length});

    //res.render('proyecto', {us : req.user.usuario, proyectos: myList, tam: myList.length});
  });
  //res.render('proyecto', {us : req.user.usuario});
});

app.get('/asignacion/nuevo', ceLogin.ensureLoggedIn(), function(req, res){

  if(req.user.role == 'superAdmin')
    res.render('nuevo',  { xlsMessage: req.flash('excelMessage'), us : req.user.usuario, ulink: '/administrador', direccion:'Administrador'});
  else
    res.render('nuevo',  { xlsMessage: req.flash('excelMessage'), us : req.user.usuario});

  //res.render('nuevo',  { xlsMessage: req.flash('excelMessage'), us : req.user.usuario});
});

/*app.get('/proyecto/editor', ceLogin.ensureLoggedIn(),  function(req, res, next){
  res.render('editor');
})*/

/*app.get('/xls', ceLogin.ensureLoggedIn(), function(req, res){
  res.render('xls');
});*/

/*app.get('/canvas', ceLogin.ensureLoggedIn(), function(req, res){
  res.render('canvas');
});*/

// app.get('/neoCanvas', ceLogin.ensureLoggedIn(), function(req, res){
//   res.render('neoCanvas', {us : req.user.usuario});
// });
app.get('/neoCanvas', ceLogin.ensureLoggedIn(), function(req, res){
  res.render('definitiveCanvas', {us : req.user.usuario});
})

app.get('/login', function(req, res){
  res.render('login', {message: req.flash('loginMessage') });
});

app.get('/asignacion/editar', ceLogin.ensureLoggedIn(), function(req, res, next){
  res.render('editar', {us : req.user.usuario});
});

app.get('/asignacion/eliminar', ceLogin.ensureLoggedIn(), function(req, res, next){
  res.render('eliminar', {us : req.user.usuario, dltMessage: req.flash('deleteMessage') });
});

app.post('/login', passport.authenticate('local-login', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash : true
}));

app.post('/register', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash : true
}));

app.post('/myDrawer', function(req, res, next){
  //console.log(req);
  //console.log(JSON.parse(req.body.myJson));
  //res.render('myCanvas', {myBody: req.body, myJson: JSON.parse(req.body.myJson)});
  if(!req.user)
    res.redirect('/');
  else{
    //console.log('--------------------------')
    //console.log(req.body.vCaneria)
    console.log(req.body)
    //console.log(req.body)
    //console.log(req.body)
    res.render('neoCanvas'/*'miCanvas'*/, {us : req.user.usuario, myBody: req.body, myJson: JSON.parse(req.body.myJson), myVCaneria: req.body.vCaneria});
  }

});

app.post('/idc', function(req, res, next){
  if(!req.user)
    res.redirect('/');
  else{
    console.log('*****************************************')
    console.log(req.body)
    //console.log(req.body.myJson)
    res.render('form01', {us : req.user.usuario, myBody: req.body, myJson: JSON.parse(req.body.myJson)});
  }

});

app.post('/memoria', function(req, res, next){
  if(!req.user)
    res.redirect('/');
  else
    res.render('memoria', {us : req.user.usuario, myBody: req.body, myJson: JSON.parse(req.body.myJson)});

});

app.post('/asignacion/editor/antiguo', function(req, res, next){

  /*upload(req,res,function(err) {
    console.log('USUARIO')
    console.log(req.user)
    cloudinary.uploader.upload(req.files[0].path, function(result) {
      miLink = result.url;
      fs.unlink(__dirname + '/' + req.files[0].path);
    });

    if(err) {
      return res.end("Error uploading file.");
    }
      res.end("File is uploaded");
  });*/


  if(req.user == undefined)
    res.redirect('/');
  else{
    usuario_db.findOne({usuario: req.user.usuario}, function(err, myRes){
      if(err)
        res.send(err);
      proyecto_db.findOne({proyecto: req.body.nProyecto}, function(err, project){
        if(err) res.send(err);

        switch(req.body.mode){
          case 'saveDocument':
            //console.log(req.body.mode);
            var myOwnJSON = project.excel;

            var myMkTam = Object.keys(myOwnJSON).length;

            for(mk = 0; mk < myMkTam; mk++){
              var myMkTag = Object.keys(myOwnJSON)[mk];

              for(mok = 0; mok < myOwnJSON[myMkTag].length; mok ++){

                if(myOwnJSON[myMkTag][mok].Nro == JSON.parse(req.body.myJsonAdress).Nro &&
                   myOwnJSON[myMkTag][mok].DIST == JSON.parse(req.body.myJsonAdress).DIST &&
                   myOwnJSON[myMkTag][mok].ZONA == JSON.parse(req.body.myJsonAdress).ZONA &&
                   myOwnJSON[myMkTag][mok].MANZ == JSON.parse(req.body.myJsonAdress).MANZ &&
                   myOwnJSON[myMkTag][mok].PREDIO == JSON.parse(req.body.myJsonAdress).PREDIO &&
                   myOwnJSON[myMkTag][mok]['PISO/DPTO'] == JSON.parse(req.body.myJsonAdress)['PISO/DPTO'] &&
                   myOwnJSON[myMkTag][mok]['APELLIDO PATERNO'] == JSON.parse(req.body.myJsonAdress)['APELLIDO PATERNO'] &&
                   myOwnJSON[myMkTag][mok]['APELLIDO MATERNO'] == JSON.parse(req.body.myJsonAdress)['APELLIDO MATERNO'] &&
                   myOwnJSON[myMkTag][mok].NOMBRES == JSON.parse(req.body.myJsonAdress).NOMBRES &&
                   myOwnJSON[myMkTag][mok].CARNET == JSON.parse(req.body.myJsonAdress).CARNET &&
                   myOwnJSON[myMkTag][mok]['AVDA/ CALLE'] == JSON.parse(req.body.myJsonAdress)['AVDA/ CALLE'] &&
                   myOwnJSON[myMkTag][mok]['TEL/CEL'] == JSON.parse(req.body.myJsonAdress)['TEL/CEL'] &&
                   myOwnJSON[myMkTag][mok].OBSERVACIONES == JSON.parse(req.body.myJsonAdress).OBSERVACIONES){
                  //console.log('Cambiando ISO');
                  myOwnJSON[myMkTag][mok].Nro = req.body.edNro || '';
                  myOwnJSON[myMkTag][mok].DIST = req.body.edDst || '';
                  myOwnJSON[myMkTag][mok].ZONA = req.body.edZna || '';
                  myOwnJSON[myMkTag][mok].MANZ = req.body.edMnz || '';
                  myOwnJSON[myMkTag][mok].PREDIO = req.body.edPrd || '';
                  myOwnJSON[myMkTag][mok]['PISO/DPTO'] = req.body.edPDo || '';
                  myOwnJSON[myMkTag][mok]['APELLIDO PATERNO'] = req.body.edPat || '';
                  myOwnJSON[myMkTag][mok]['APELLIDO MATERNO'] = req.body.edMat || '';
                  myOwnJSON[myMkTag][mok].NOMBRES = req.body.edNmb || '';
                  myOwnJSON[myMkTag][mok].CARNET = req.body.edCnt || '';
                  myOwnJSON[myMkTag][mok]['AVDA/ CALLE'] = req.body.edAvC || '';
                  myOwnJSON[myMkTag][mok]['TEL/CEL'] = req.body.edTCl || '';
                  myOwnJSON[myMkTag][mok].OBSERVACIONES = req.body.edObs || '';




                  myOwnJSON[myMkTag][mok].ISOMETRICO = {
                    myPointData: req.body.myPointData,
                    myGradosData: req.body.myGradosData,
                    myDistanciaData: req.body.myDistanciaData,
                    myTubData: req.body.myTubData,
                    myTagData: req.body.myTagData,
                    myComponentesData: req.body.myComponentesData,
                    graphData: req.body.graphData,
                    tagsExtra: req.body.tagsExtra,
                    configuraciones: req.body.configuraciones,
                    numberPageData: req.body.numberPageData
                  };

                }
              }

            }
            //console.log('SOME CHANGE')

            project.excel = '';
            project.excel = myOwnJSON;

            project.save(function(err) {
              if (err)
                res.send(err);
            });


            res.render('editor', {proyecto: req.body.nProyecto, autor: project.autor,

                                          ////////////////////////////////////////
                                          eRazonSocial : project.eRazonSocial,

                                          eImagenLogo : project.eImagenLogo,
                                          eTextoLogo : project.eTextoLogo,

                                          eResolucion : project.eResolucion,
                                          eDireccion : project.eDireccion,
                                          eTelefono : project.eTelefono,
                                          eProyectista : project.eProyectista,
                                          eRegistroP : project.eRegistroP,
                                          eInstalador : project.eInstalador,
                                          eRegistroI : project.eRegistroI,
                                          pNumero : project.pNumero,
                                          pLocalidad : project.pLocalidad,
                                          pDepartamento : project.pDepartamento,
                                          pLocalidadC : project.pLocalidadC,
                                          pDepartamentoC : project.pDepartamentoC,
                                          ////////////////////////////////////////

                                          json:  JSON.stringify((project.excel), null, 0), us : req.user.usuario,
                                          vCaneria: project.vCaneria,
                                          vCodoPipa34: project.vCodoPipa34,
                                          vHexagonal34: project.vHexagonal34,
                                          vCarburo1K: project.vCarburo1K,
                                          vMaterialExcedente: project.vMaterialExcedente,

                                          vPrecioMateriales: project.vPrecioMateriales,
                                          vPagoYPFB: JSON.stringify(project.vPagoYPFB),
                                          pNombreZona: project.pNombreZona,

                                          vSueldo12: project.vSueldo12,
                                          vSueldo34: project.vSueldo34,
                                          vSueldo01: project.vSueldo01,
                                          vSueldo14: project.vSueldo14,
                                          vCostoIn12: project.vCostoIn12,
                                          vCostoOu12: project.vCostoOu12,
                                          vCostoIn34: project.vCostoIn34,
                                          vCostoOu34: project.vCostoOu34,
                                          vCostoIn01: project.vCostoIn01,
                                          vCostoOu01: project.vCostoOu01,
                                          vCostoIn14: project.vCostoIn14,
                                          vCostoOu14: project.vCostoOu14
                                         })
            /*res.render('editor', {proyecto: req.body.nProyecto, autor: project.autor,
                                  json:  JSON.stringify((project.excel), null, 0), us : req.user.usuario,
                      vCaneria: project.vCaneria,
                      vCodoPipa34: project.vCodoPipa34,
                      vHexagonal34: project.vHexagonal34,
                      vCarburo1K: project.vCarburo1K,
                      vMaterialExcedente: project.vMaterialExcedente,

                      vPrecioMateriales: project.vPrecioMateriales,
                      vPagoYPFB: JSON.stringify(project.vPagoYPFB),
                      pNombreZona: project.pNombreZona,

                      vSueldo12: project.vSueldo12,
                      vSueldo34: project.vSueldo34,
                      vSueldo01: project.vSueldo01,
                      vSueldo14: project.vSueldo14,
                      vCostoIn12: project.vCostoIn12,
                      vCostoOu12: project.vCostoOu12,
                      vCostoIn34: project.vCostoIn34,
                      vCostoOu34: project.vCostoOu34,
                      vCostoIn01: project.vCostoIn01,
                      vCostoOu01: project.vCostoOu01,
                      vCostoIn14: project.vCostoIn14,
                      vCostoOu14: project.vCostoOu14
                                 })*/


            break;
          case 'saveIso':
            //console.log(req.body.mode);
            var myOwnJSON = project.excel;
            var myMkTam = Object.keys(myOwnJSON).length;

            for(mk = 0; mk < myMkTam; mk++){
              var myMkTag = Object.keys(myOwnJSON)[mk];

              for(mok = 0; mok < myOwnJSON[myMkTag].length; mok ++){

                if(myOwnJSON[myMkTag][mok].Nro == JSON.parse(req.body.myJsonAdress).Nro &&
                   myOwnJSON[myMkTag][mok].DIST == JSON.parse(req.body.myJsonAdress).DIST &&
                   myOwnJSON[myMkTag][mok].ZONA == JSON.parse(req.body.myJsonAdress).ZONA &&
                   myOwnJSON[myMkTag][mok].MANZ == JSON.parse(req.body.myJsonAdress).MANZ &&
                   myOwnJSON[myMkTag][mok].PREDIO == JSON.parse(req.body.myJsonAdress).PREDIO &&
                   myOwnJSON[myMkTag][mok]['PISO/DPTO'] == JSON.parse(req.body.myJsonAdress)['PISO/DPTO'] &&
                   myOwnJSON[myMkTag][mok]['APELLIDO PATERNO'] == JSON.parse(req.body.myJsonAdress)['APELLIDO PATERNO'] &&
                   myOwnJSON[myMkTag][mok]['APELLIDO MATERNO'] == JSON.parse(req.body.myJsonAdress)['APELLIDO MATERNO'] &&
                   myOwnJSON[myMkTag][mok].NOMBRES == JSON.parse(req.body.myJsonAdress).NOMBRES &&
                   myOwnJSON[myMkTag][mok].CARNET == JSON.parse(req.body.myJsonAdress).CARNET &&
                   myOwnJSON[myMkTag][mok]['AVDA/ CALLE'] == JSON.parse(req.body.myJsonAdress)['AVDA/ CALLE'] &&
                   myOwnJSON[myMkTag][mok]['TEL/CEL'] == JSON.parse(req.body.myJsonAdress)['TEL/CEL'] &&
                   myOwnJSON[myMkTag][mok].OBSERVACIONES == JSON.parse(req.body.myJsonAdress).OBSERVACIONES){
                  //console.log('Cambiando ISO');

                  myOwnJSON[myMkTag][mok].ISOMETRICO = {
                    myPointData: req.body.myPointData,
                    myGradosData: req.body.myGradosData,
                    myDistanciaData: req.body.myDistanciaData,
                    myTubData: req.body.myTubData,
                    myTagData: req.body.myTagData,
                    myComponentesData: req.body.myComponentesData,
                    graphData: req.body.graphData,
                    tagsExtra: req.body.tagsExtra,
                    configuraciones: req.body.configuraciones,
                    numberPageData: req.body.numberPageData
                  };

                }
              }
            }

            project.excel = '';
            project.excel = myOwnJSON;

            project.save(function(err) {
              if (err)
                res.send(err);
            });

            res.render('editor', {proyecto: req.body.nProyecto, autor: project.autor, json:  JSON.stringify((project.excel), null, 0), us : req.user.usuario,
                      vCaneria: project.vCaneria,
                      vCodoPipa34: project.vCodoPipa34,
                      vHexagonal34: project.vHexagonal34,
                      vCarburo1K: project.vCarburo1K,
                      vMaterialExcedente: project.vMaterialExcedente,

                      vPrecioMateriales: project.vPrecioMateriales,
                      vPagoYPFB: JSON.stringify(project.vPagoYPFB),
                      pNombreZona: project.pNombreZona,

                      vSueldo12: project.vSueldo12,
                      vSueldo34: project.vSueldo34,
                      vSueldo01: project.vSueldo01,
                      vSueldo14: project.vSueldo14,
                      vCostoIn12: project.vCostoIn12,
                      vCostoOu12: project.vCostoOu12,
                      vCostoIn34: project.vCostoIn34,
                      vCostoOu34: project.vCostoOu34,
                      vCostoIn01: project.vCostoIn01,
                      vCostoOu01: project.vCostoOu01,
                      vCostoIn14: project.vCostoIn14,
                      vCostoOu14: project.vCostoOu14
                                 })

            break;
          case 'create':
            var miLink = '';

            /*upload(req,res,function(err) {

            cloudinary.uploader.upload(req.files[0].path, function(result) {
              miLink = result.url;
              fs.unlink(__dirname + '/' + req.files[0].path);
            });

            if(err) {
              return res.end("Error uploading file.");
            }
            res.end("File is uploaded");
          });*/


            if(project){
              //req.flash('excelMessage', 'Este proyecto ya existe, puede crear un nuevo proyecto si lo desea');
              req.flash('excelMessage', 'Esta asignación ya existe, puede crear una nueva asignación si lo desea');
              res.redirect('/asignacion/nuevo');
            }
            else{
              var projectNew = new proyecto_db();
              projectNew.proyecto = req.body.nProyecto;
              projectNew.autor = req.body.pAutor;

              /////////////////////////////////////////
              projectNew.eRazonSocial = req.body.eRazonSocial;

              projectNew.eImagenLogo = miLink;
              projectNew.eTextoLogo = req.body.eTextoLogo;


              projectNew.eResolucion = req.body.eResolucion;
              projectNew.eDireccion = req.body.eDireccion;
              projectNew.eTelefono = req.body.eTelefono;
              projectNew.eProyectista = req.body.eProyectista;
              projectNew.eRegistroP = req.body.eRegistroP;
              projectNew.eInstalador = req.body.eInstalador;
              projectNew.eRegistroI = req.body.eRegistroI;
              projectNew.pNumero = req.body.pNumero;
              projectNew.pLocalidad = req.body.pLocalidad;
              projectNew.pDepartamento = req.body.pDepartamento;
              projectNew.pLocalidadC = req.body.pLocalidadC;
              projectNew.pDepartamentoC = req.body.pDepartamentoC;

              projectNew.pNombreZona = req.body.pNombreZona;



              projectNew.vCaneria = '5.8';

              projectNew.vCodoPipa34 = [];
              projectNew.vHexagonal34 = [];
              projectNew.vCarburo1K = [];

              projectNew.vPrecioMateriales = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
              projectNew.vPagoYPFB = {

                distancia : [4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 9.0, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11.0, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12.0, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13.0, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 14.0, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15.0, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7, 15.8, 15.9, 16.0, 16.1, 16.2, 16.3, 16.4, 16.5, 16.6, 16.7, 16.8, 16.9, 17.0, 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8, 17.9, 18.0, 18.1, 18.2, 18.3, 18.4, 18.5, 18.6, 18.7, 18.8, 18.9, 19.0, 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.7, 19.8, 19.9, 20.0, 20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21.0, 21.1, 21.2, 21.3, 21.4, 21.5, 21.6, 21.7, 21.8, 21.9, 22.0 ],

                costo : [713.8, 722.7, 731.5, 740.4, 749.3, 758.2, 767.1, 776, 784.9, 793.8, 802.7, 811.6, 820.5, 829.4, 838.3, 847.2, 856.1, 865, 873.9, 882.7, 891.6, 900.5, 909.4, 918.3, 927.2, 936.1, 945, 953.9, 962.8, 971.7, 980.6, 989.5, 998.4, 1007.3, 1016.2, 1025.1, 1033.9, 1042.8, 1051.7, 1060.6, 1069.5, 1078.4, 1087.3, 1096.2, 1105.1, 1114, 1122.9, 1131.8, 1140.7, 1149.6, 1158.5, 1167.4, 1176.2, 1185.1, 1194, 1202.9, 1211.8, 1220.7, 1229.6, 1238.5, 1247.4, 1256.3, 1265.2, 1274.1, 1283, 1291.9, 1300.8, 1309.7, 1318.6, 1327.4, 1336.3, 1345.2, 1354.1, 1363, 1371.9, 1380.8, 1389.7, 1398.6, 1407.5, 1416.4, 1425.3, 1434.2, 1443.1, 1452, 1460.9, 1469.8, 1478.6, 1487.5, 1496.4, 1505.3, 1514.2, 1523.1, 1532, 1540.9, 1549.8, 1558.7, 1567.6, 1576.5, 1585.4, 1594.3, 1603.2, 1612.1, 1620.9, 1629.8, 1638.7, 1647.6, 1656.5, 1665.4, 1674.3, 1683.2, 1692.1, 1701, 1709.9, 1718.8, 1727.7, 1736.6, 1745.5, 1754.4, 1763.3, 1772.1, 1781, 1789.9, 1789.8, 1807.7, 1816.6, 1825.5, 1834.4, 1843.3, 1852.2, 1861, 1870, 1878.9, 1887.8, 1896.7, 1905.6, 1914.5, 1923.3, 1932.2, 1941.1, 1950, 1958.9, 1967.8, 1976.7, 1985.6, 1994.5, 2003.4, 2012.3, 2021.2, 2030.1, 2039, 2047.9, 2056.8, 2065.6, 2074.5, 2083.4, 2092.3, 2101.2, 2110.1, 2119, 2127.9, 2136.8, 2145.7, 2154.6, 2163.5, 2172.4, 2181.3, 2190.2, 2199.1, 2208, 2216.8, 2225.7, 2234.6, 2243.5, 2252.4, 2261.3, 2270, 2279.1, 2288, 2296.9, 2305.8, 2314.7 ]

                };

              var a = [];
              //var p = [];
              for(la = 0; la< 39; la++)
                a[la] = 0;

              projectNew.vMaterialExcedente = a;//[];
              projectNew.vSueldo12 = '26';
              projectNew.vSueldo34 = '24';
              projectNew.vSueldo01 = '22';
              projectNew.vSueldo14 = '22';
              projectNew.vCostoIn12 = '0';
              projectNew.vCostoOu12 = '105';
              projectNew.vCostoIn34 = '0';
              projectNew.vCostoOu34 = '105';
              projectNew.vCostoIn01 = '55';
              projectNew.vCostoOu01 = '160';
              projectNew.vCostoIn14 = '55';
              projectNew.vCostoOu14 = '160';
              /////////////////////////////////////////


              projectNew.excel = JSON.parse(req.body.jsonData);

              projectNew.creacion = new Date();

              projectNew.usuario = req.user._id;
              var myMkTam = Object.keys(projectNew.excel).length;
              for(mk = 0; mk < myMkTam; mk++){
                var myMkTag = Object.keys(projectNew.excel)[mk];



                for(mok = 0; mok < projectNew.excel[myMkTag].length; mok ++){
                  ///////////////////////////////////////////////
                  if(projectNew.excel[myMkTag][mok].Dpto == undefined){ projectNew.excel[myMkTag][mok].Dpto = req.body.pDepartamentoC || ''}
                  if(projectNew.excel[myMkTag][mok].Loc == undefined){ projectNew.excel[myMkTag][mok].Loc = req.body.pLocalidadC || ''}
                  ///////////////////////////////////////////////

                  if(projectNew.excel[myMkTag][mok].Nro == undefined){ projectNew.excel[myMkTag][mok].Nro = ''}
                  if(projectNew.excel[myMkTag][mok].DIST == undefined){ projectNew.excel[myMkTag][mok].DIST = ''}
                  if(projectNew.excel[myMkTag][mok].ZONA == undefined){ projectNew.excel[myMkTag][mok].ZONA = ''}
                  if(projectNew.excel[myMkTag][mok].MANZ == undefined){ projectNew.excel[myMkTag][mok].MANZ = ''}
                  if(projectNew.excel[myMkTag][mok].PREDIO == undefined){ projectNew.excel[myMkTag][mok].PREDIO = ''}
                  if(projectNew.excel[myMkTag][mok]['PISO/DPTO'] == undefined){ projectNew.excel[myMkTag][mok]['PISO/DPTO'] = ''}
                  if(projectNew.excel[myMkTag][mok]['APELLIDO PATERNO'] == undefined){ projectNew.excel[myMkTag][mok]['APELLIDO PATERNO'] = ''}
                  if(projectNew.excel[myMkTag][mok]['APELLIDO MATERNO'] == undefined){ projectNew.excel[myMkTag][mok]['APELLIDO MATERNO'] = ''}
                  if(projectNew.excel[myMkTag][mok].NOMBRES == undefined){ projectNew.excel[myMkTag][mok].NOMBRES = ''}
                  if(projectNew.excel[myMkTag][mok].CARNET == undefined){ projectNew.excel[myMkTag][mok].CARNET = ''}
                  if(projectNew.excel[myMkTag][mok]['AVDA/ CALLE'] == undefined){ projectNew.excel[myMkTag][mok]['AVDA/ CALLE'] = ''}
                  if(projectNew.excel[myMkTag][mok]['TEL/CEL'] == undefined){ projectNew.excel[myMkTag][mok]['TEL/CEL'] = ''}
                  if(projectNew.excel[myMkTag][mok].OBSERVACIONES == undefined){ projectNew.excel[myMkTag][mok].OBSERVACIONES = ''}
                  if(projectNew.excel[myMkTag][mok].ISOMETRICO == undefined){ projectNew.excel[myMkTag][mok].ISOMETRICO = { 'myPointData': '[100, 300]', 'myGradosData': '[]', 'myDistanciaData': '[]', 'myTubData': '[]', 'myTagData': '[]', 'myComponentesData': '[]', 'graphData': '[]', 'tagsExtra': '[]', 'configuraciones': '[]', 'numberPageData': '[]'};}

                  projectNew.vCodoPipa34[mok] = 0;
                  projectNew.vHexagonal34[mok] = 0;
                  projectNew.vCarburo1K[mok] = 0;

                }
              }


              /*projectNew.vCodoPipa34 = [];
              projectNew.vHexagonal34 = [];
              projectNew.vCarburo1K = [];*/

              projectNew.save(function(err){
                if(err) throw err;
                res.render('editor', {proyecto: req.body.nProyecto, autor: req.body.pAutor,
                                      ////////////////////////////////////////
                                      eRazonSocial : req.body.eRazonSocial,
                                      eResolucion : req.body.eResolucion,
                                      eDireccion : req.body.eDireccion,
                                      eTelefono : req.body.eTelefono,
                                      eProyectista : req.body.eProyectista,
                                      eRegistroP : req.body.eRegistroP,
                                      eInstalador : req.body.eInstalador,
                                      eRegistroI : req.body.eRegistroI,
                                      pNumero : req.body.pNumero,
                                      pLocalidad : req.body.pLocalidad,
                                      pDepartamento : req.body.pDepartamento,
                                      pLocalidadC : req.body.pLocalidadC,
                                      pDepartamentoC : req.body.pDepartamentoC,
                                      ////////////////////////////////////////
                                      json: JSON.stringify((projectNew.excel), null, 0), us : req.user.usuario,
                                      ////////////////////////////////////////
                                      vCaneria: projectNew.vCaneria,
                                      vCodoPipa34: projectNew.vCodoPipa34,
                                      vHexagonal34: projectNew.vHexagonal34,
                                      vCarburo1K: projectNew.vCarburo1K,
                                      vMaterialExcedente: projectNew.vMaterialExcedente,

                                      vPrecioMateriales: projectNew.vPrecioMateriales,
                                      vPagoYPFB: JSON.stringify(projectNew.vPagoYPFB),
                                      pNombreZona: projectNew.pNombreZona,

                                      vSueldo12: projectNew.vSueldo12,
                                      vSueldo34: projectNew.vSueldo34,
                                      vSueldo01: projectNew.vSueldo01,
                                      vSueldo14: projectNew.vSueldo14,
                                      vCostoIn12: projectNew.vCostoIn12,
                                      vCostoOu12: projectNew.vCostoOu12,
                                      vCostoIn34: projectNew.vCostoIn34,
                                      vCostoOu34: projectNew.vCostoOu34,
                                      vCostoIn01: projectNew.vCostoIn01,
                                      vCostoOu01: projectNew.vCostoOu01,
                                      vCostoIn14: projectNew.vCostoIn14,
                                      vCostoOu14: projectNew.vCostoOu14
                                     });//req.body.jsonData});
              });
            }
            break;
          case 'editable':
            //console.log(req.body.mode);
            if(project){
              if(project.usuario == myRes._id.toString()){
                res.render('editor', {proyecto: project.proyecto, autor: project.autor,
                                      ////////////////////////////////////////
                                      eRazonSocial : project.eRazonSocial,
                                      eResolucion : project.eResolucion,
                                      eDireccion : project.eDireccion,
                                      eTelefono : project.eTelefono,
                                      eProyectista : project.eProyectista,
                                      eRegistroP : project.eRegistroP,
                                      eInstalador : project.eInstalador,
                                      eRegistroI : project.eRegistroI,
                                      pNumero : project.pNumero,
                                      pLocalidad : project.pLocalidad,
                                      pDepartamento : project.pDepartamento,
                                      pLocalidadC : project.pLocalidadC,
                                      pDepartamentoC : project.pDepartamentoC,
                                      ////////////////////////////////////////


                                      json:  JSON.stringify((project.excel), null, 0), us : req.user.usuario,
                                      ////////////////////////////////////////
                                      vCaneria: project.vCaneria,
                                      vCodoPipa34: project.vCodoPipa34,
                                      vHexagonal34: project.vHexagonal34,
                                      vCarburo1K: project.vCarburo1K,
                                      vMaterialExcedente: project.vMaterialExcedente,

                                      vPrecioMateriales: project.vPrecioMateriales,
                                      vPagoYPFB: JSON.stringify(project.vPagoYPFB),
                                      pNombreZona: project.pNombreZona,

                                      vSueldo12: project.vSueldo12,
                                      vSueldo34: project.vSueldo34,
                                      vSueldo01: project.vSueldo01,
                                      vSueldo14: project.vSueldo14,
                                      vCostoIn12: project.vCostoIn12,
                                      vCostoOu12: project.vCostoOu12,
                                      vCostoIn34: project.vCostoIn34,
                                      vCostoOu34: project.vCostoOu34,
                                      vCostoIn01: project.vCostoIn01,
                                      vCostoOu01: project.vCostoOu01,
                                      vCostoIn14: project.vCostoIn14,
                                      vCostoOu14: project.vCostoOu14
                                     })
              }
              else{
                req.flash('excelMessage', 'Este proyecto existe pero no para su usuario, puede crear un nuevo proyecto si lo desea');
                res.redirect('/asignacion/nuevo');
              }

            }
            else{
              req.flash('excelMessage', 'Este proyecto no existe, usted puede crear uno nuevo');
              res.redirect('/asignacion/nuevo');
            }

            break;
          case 'delete':
            if(project){
              if(project.usuario == myRes._id.toString()){
                proyecto_db.remove({proyecto: req.body.nProyecto}, function(err, removed){
                  if(err) res.send(err);
                  req.flash('excelMessage', 'Proyecto eliminado');
                  res.redirect('/asignacion/nuevo');
                });
              }
              else{
                //req.flash('excelMessage', 'Usted no esta autorizado para eliminar este proyecto');
                req.flash('deleteMessage', 'Usted no esta autorizado para eliminar este proyecto');
                //res.redirect('/proyecto/nuevo');
                res.redirect('/asignacion/eliminar');
              }

            }
            else{
              req.flash('excelMessage', 'No puede eliminar un proyecto que  no existe');
              res.redirect('/asignacion/nuevo');
            }

            break;
          case 'saveVars':

            console.log(req.body.vCaneria)
            var myOwnJSONV = project;

            //myOwnJSONV.vCaneria = req.body.varCan;

            myOwnJSONV.vCaneria = req.body.vCaneria;

            myOwnJSONV.vCodoPipa34 = JSON.parse('['+req.body.vCodoPipa34+']');
            myOwnJSONV.vHexagonal34 = JSON.parse('['+req.body.vHexagonal34+']');
            myOwnJSONV.vCarburo1K = JSON.parse('['+req.body.vCarburo1K+']');

            myOwnJSONV.vMaterialExcedente = JSON.parse('['+req.body.vMaterialExcedente+']');

            myOwnJSONV.vPrecioMateriales = JSON.parse('['+req.body.vPrecioMateriales+']');
            myOwnJSONV.vPagoYPFB = JSON.parse(req.body.vPagoYPFB);
            myOwnJSONV.pNombreZona = req.body.pNombreZona;

            myOwnJSONV.vSueldo12 = req.body.vSueldo12;
            myOwnJSONV.vSueldo34 = req.body.vSueldo34;
            myOwnJSONV.vSueldo01 = req.body.vSueldo01;
            myOwnJSONV.vSueldo14 = req.body.vSueldo14;
            myOwnJSONV.vCostoIn12 = req.body.vCostoIn12;
            myOwnJSONV.vCostoOu12 = req.body.vCostoOu12;
            myOwnJSONV.vCostoIn34 = req.body.vCostoIn34;
            myOwnJSONV.vCostoOu34 = req.body.vCostoOu34;
            myOwnJSONV.vCostoIn01 = req.body.vCostoIn01;
            myOwnJSONV.vCostoOu01 = req.body.vCostoOu01;
            myOwnJSONV.vCostoIn14 = req.body.vCostoIn14;
            myOwnJSONV.vCostoOu14 = req.body.vCostoOu14;

            project = '';
            project = myOwnJSONV;

            project.save(function(err) {
              if (err)
                res.send(err);
            });
            //res.redirect('/')
            res.render('editor', {proyecto: req.body.nProyecto, autor: project.autor, json:  JSON.stringify((project.excel), null, 0), us : req.user.usuario,
                                  vCaneria: project.vCaneria,
                                  vCodoPipa34: project.vCodoPipa34,
                                  vHexagonal34: project.vHexagonal34,
                                  vCarburo1K: project.vCarburo1K,
                                  vMaterialExcedente: project.vMaterialExcedente,

                                  vPrecioMateriales: project.vPrecioMateriales,
                                  vPagoYPFB: JSON.stringify(project.vPagoYPFB),
                                  pNombreZona: project.pNombreZona,

                                  vSueldo12: project.vSueldo12,
                                  vSueldo34: project.vSueldo34,
                                  vSueldo01: project.vSueldo01,
                                  vSueldo14: project.vSueldo14,
                                  vCostoIn12: project.vCostoIn12,
                                  vCostoOu12: project.vCostoOu12,
                                  vCostoIn34: project.vCostoIn34,
                                  vCostoOu34: project.vCostoOu34,
                                  vCostoIn01: project.vCostoIn01,
                                  vCostoOu01: project.vCostoOu01,
                                  vCostoIn14: project.vCostoIn14,
                                  vCostoOu14: project.vCostoOu14
                                 })
            break;

        }


      })

    })

  }
});


app.post('/asignacion/editor', function(req, res, next){

  upload(req,res,function(err) {
    //console.log(req)

    //console.log(req.user)

    if(req.user == undefined)
      res.redirect('/');
    else{
      usuario_db.findOne({usuario: req.user.usuario}, function(err, myRes){
        if(err)
          res.send(err);
        proyecto_db.findOne({proyecto: req.body.nProyecto}, function(err, project){
          if(err) res.send(err);

          switch(req.body.mode){
            case 'saveDocument':
              //console.log(req.body.mode);
              var myOwnJSON = project.excel;

              var myMkTam = Object.keys(myOwnJSON).length;

              for(mk = 0; mk < myMkTam; mk++){
                var myMkTag = Object.keys(myOwnJSON)[mk];

                for(mok = 0; mok < myOwnJSON[myMkTag].length; mok ++){

                  if(myOwnJSON[myMkTag][mok].Nro == JSON.parse(req.body.myJsonAdress).Nro &&
                     myOwnJSON[myMkTag][mok].DIST == JSON.parse(req.body.myJsonAdress).DIST &&
                     myOwnJSON[myMkTag][mok].ZONA == JSON.parse(req.body.myJsonAdress).ZONA &&
                     myOwnJSON[myMkTag][mok].MANZ == JSON.parse(req.body.myJsonAdress).MANZ &&
                     myOwnJSON[myMkTag][mok].PREDIO == JSON.parse(req.body.myJsonAdress).PREDIO &&
                     myOwnJSON[myMkTag][mok]['PISO/DPTO'] == JSON.parse(req.body.myJsonAdress)['PISO/DPTO'] &&
                     myOwnJSON[myMkTag][mok]['APELLIDO PATERNO'] == JSON.parse(req.body.myJsonAdress)['APELLIDO PATERNO'] &&
                     myOwnJSON[myMkTag][mok]['APELLIDO MATERNO'] == JSON.parse(req.body.myJsonAdress)['APELLIDO MATERNO'] &&
                     myOwnJSON[myMkTag][mok].NOMBRES == JSON.parse(req.body.myJsonAdress).NOMBRES &&
                     myOwnJSON[myMkTag][mok].CARNET == JSON.parse(req.body.myJsonAdress).CARNET &&
                     myOwnJSON[myMkTag][mok]['AVDA/ CALLE'] == JSON.parse(req.body.myJsonAdress)['AVDA/ CALLE'] &&
                     myOwnJSON[myMkTag][mok]['TEL/CEL'] == JSON.parse(req.body.myJsonAdress)['TEL/CEL'] &&
                     myOwnJSON[myMkTag][mok].OBSERVACIONES == JSON.parse(req.body.myJsonAdress).OBSERVACIONES){
                    //console.log('Cambiando ISO');
                    myOwnJSON[myMkTag][mok].Nro = req.body.edNro || '';
                    myOwnJSON[myMkTag][mok].DIST = req.body.edDst || '';
                    myOwnJSON[myMkTag][mok].ZONA = req.body.edZna || '';
                    myOwnJSON[myMkTag][mok].MANZ = req.body.edMnz || '';
                    myOwnJSON[myMkTag][mok].PREDIO = req.body.edPrd || '';
                    myOwnJSON[myMkTag][mok]['PISO/DPTO'] = req.body.edPDo || '';
                    myOwnJSON[myMkTag][mok]['APELLIDO PATERNO'] = req.body.edPat || '';
                    myOwnJSON[myMkTag][mok]['APELLIDO MATERNO'] = req.body.edMat || '';
                    myOwnJSON[myMkTag][mok].NOMBRES = req.body.edNmb || '';
                    myOwnJSON[myMkTag][mok].CARNET = req.body.edCnt || '';
                    myOwnJSON[myMkTag][mok]['AVDA/ CALLE'] = req.body.edAvC || '';
                    myOwnJSON[myMkTag][mok]['TEL/CEL'] = req.body.edTCl || '';
                    myOwnJSON[myMkTag][mok].OBSERVACIONES = req.body.edObs || '';




                    myOwnJSON[myMkTag][mok].ISOMETRICO = {
                      myPointData: req.body.myPointData,
                      myGradosData: req.body.myGradosData,
                      myDistanciaData: req.body.myDistanciaData,
                      myTubData: req.body.myTubData,
                      myTagData: req.body.myTagData,
                      myComponentesData: req.body.myComponentesData,
                      graphData: req.body.graphData,
                      tagsExtra: req.body.tagsExtra,
                      configuraciones: req.body.configuraciones,
                      numberPageData: req.body.numberPageData
                    };

                  }
                }

              }
              //console.log('SOME CHANGE')

              project.excel = '';
              project.excel = myOwnJSON;

              project.save(function(err) {
                if (err)
                  res.send(err);
              });


              var mL = '';
              var mD = '';

              //console.log(req.user)
              if(req.user.role == 'superAdmin'){
                mL = '/administrador';
                mD = 'Administrador';
              }

              res.render('editor', {ulink: mL, direccion: mD, proyecto: req.body.nProyecto, autor: project.autor,

                                    ////////////////////////////////////////
                                    eRazonSocial : project.eRazonSocial,

                                    eImagenLogo : project.eImagenLogo,
                                    eTextoLogo : project.eTextoLogo,

                                    eResolucion : project.eResolucion,
                                    eDireccion : project.eDireccion,
                                    eTelefono : project.eTelefono,
                                    eProyectista : project.eProyectista,
                                    eRegistroP : project.eRegistroP,
                                    eInstalador : project.eInstalador,
                                    eRegistroI : project.eRegistroI,
                                    pNumero : project.pNumero,
                                    pLocalidad : project.pLocalidad,
                                    pDepartamento : project.pDepartamento,
                                    pLocalidadC : project.pLocalidadC,
                                    pDepartamentoC : project.pDepartamentoC,
                                    ////////////////////////////////////////

                                    json:  JSON.stringify((project.excel), null, 0), us : req.user.usuario,
                                    vCaneria: project.vCaneria,
                                    vCodoPipa34: project.vCodoPipa34,
                                    vHexagonal34: project.vHexagonal34,
                                    vCarburo1K: project.vCarburo1K,
                                    vMaterialExcedente: project.vMaterialExcedente,

                                    vPrecioMateriales: project.vPrecioMateriales,
                                    vPagoYPFB: JSON.stringify(project.vPagoYPFB),
                                    pNombreZona: project.pNombreZona,

                                    vSueldo12: project.vSueldo12,
                                    vSueldo34: project.vSueldo34,
                                    vSueldo01: project.vSueldo01,
                                    vSueldo14: project.vSueldo14,
                                    vCostoIn12: project.vCostoIn12,
                                    vCostoOu12: project.vCostoOu12,
                                    vCostoIn34: project.vCostoIn34,
                                    vCostoOu34: project.vCostoOu34,
                                    vCostoIn01: project.vCostoIn01,
                                    vCostoOu01: project.vCostoOu01,
                                    vCostoIn14: project.vCostoIn14,
                                    vCostoOu14: project.vCostoOu14
                                   })


              break;
            case 'saveIso':
              //console.log(req.body.mode);
              var myOwnJSON = project.excel;
              var myMkTam = Object.keys(myOwnJSON).length;

              for(mk = 0; mk < myMkTam; mk++){
                var myMkTag = Object.keys(myOwnJSON)[mk];

                for(mok = 0; mok < myOwnJSON[myMkTag].length; mok ++){

                  if(myOwnJSON[myMkTag][mok].Nro == JSON.parse(req.body.myJsonAdress).Nro &&
                     myOwnJSON[myMkTag][mok].DIST == JSON.parse(req.body.myJsonAdress).DIST &&
                     myOwnJSON[myMkTag][mok].ZONA == JSON.parse(req.body.myJsonAdress).ZONA &&
                     myOwnJSON[myMkTag][mok].MANZ == JSON.parse(req.body.myJsonAdress).MANZ &&
                     myOwnJSON[myMkTag][mok].PREDIO == JSON.parse(req.body.myJsonAdress).PREDIO &&
                     myOwnJSON[myMkTag][mok]['PISO/DPTO'] == JSON.parse(req.body.myJsonAdress)['PISO/DPTO'] &&
                     myOwnJSON[myMkTag][mok]['APELLIDO PATERNO'] == JSON.parse(req.body.myJsonAdress)['APELLIDO PATERNO'] &&
                     myOwnJSON[myMkTag][mok]['APELLIDO MATERNO'] == JSON.parse(req.body.myJsonAdress)['APELLIDO MATERNO'] &&
                     myOwnJSON[myMkTag][mok].NOMBRES == JSON.parse(req.body.myJsonAdress).NOMBRES &&
                     myOwnJSON[myMkTag][mok].CARNET == JSON.parse(req.body.myJsonAdress).CARNET &&
                     myOwnJSON[myMkTag][mok]['AVDA/ CALLE'] == JSON.parse(req.body.myJsonAdress)['AVDA/ CALLE'] &&
                     myOwnJSON[myMkTag][mok]['TEL/CEL'] == JSON.parse(req.body.myJsonAdress)['TEL/CEL'] &&
                     myOwnJSON[myMkTag][mok].OBSERVACIONES == JSON.parse(req.body.myJsonAdress).OBSERVACIONES){
                    //console.log('Cambiando ISO');

                    myOwnJSON[myMkTag][mok].ISOMETRICO = {
                      myPointData: req.body.myPointData,
                      myGradosData: req.body.myGradosData,
                      myDistanciaData: req.body.myDistanciaData,
                      myTubData: req.body.myTubData,
                      myTagData: req.body.myTagData,
                      myComponentesData: req.body.myComponentesData,
                      graphData: req.body.graphData,
                      tagsExtra: req.body.tagsExtra,
                      configuraciones: req.body.configuraciones,
                      numberPageData: req.body.numberPageData
                    };

                  }
                }
              }

              project.excel = '';
              project.excel = myOwnJSON;

              project.save(function(err) {
                if (err)
                  res.send(err);
              });

              var mL = '';
              var mD = '';

              //console.log(req.user)
              if(req.user.role == 'superAdmin'){
                mL = '/administrador';
                mD = 'Administrador';
              }


              res.render('editor', {ulink: mL, direccion: mD, proyecto: req.body.nProyecto, autor: project.autor, json:  JSON.stringify((project.excel), null, 0), us : req.user.usuario,
                        vCaneria: project.vCaneria,
                        vCodoPipa34: project.vCodoPipa34,
                        vHexagonal34: project.vHexagonal34,
                        vCarburo1K: project.vCarburo1K,
                        vMaterialExcedente: project.vMaterialExcedente,

                        vPrecioMateriales: project.vPrecioMateriales,
                        vPagoYPFB: JSON.stringify(project.vPagoYPFB),
                        pNombreZona: project.pNombreZona,

                        vSueldo12: project.vSueldo12,
                        vSueldo34: project.vSueldo34,
                        vSueldo01: project.vSueldo01,
                        vSueldo14: project.vSueldo14,
                        vCostoIn12: project.vCostoIn12,
                        vCostoOu12: project.vCostoOu12,
                        vCostoIn34: project.vCostoIn34,
                        vCostoOu34: project.vCostoOu34,
                        vCostoIn01: project.vCostoIn01,
                        vCostoOu01: project.vCostoOu01,
                        vCostoIn14: project.vCostoIn14,
                        vCostoOu14: project.vCostoOu14
                                   })

              break;
            case 'create':
              //var miLink = '';
              console.log('creando');
              console.log(req.files);
              cloudinary.uploader.upload(req.files[0].path, function(result) {
                //miLink = result.url;
                //console.log('RUTA');
                //console.log(result.url.toString());
                //console.log(result);

                if(project){
                  //req.flash('excelMessage', 'Este proyecto ya existe, puede crear un nuevo proyecto si lo desea');
                  req.flash('excelMessage', 'Esta asignación ya existe, puede crear una nueva asignación si lo desea');
                  res.redirect('/asignacion/nuevo');
                }
                else{

                  var projectNew = new proyecto_db();
                  projectNew.proyecto = req.body.nProyecto;
                  projectNew.autor = req.body.pAutor;

                  /////////////////////////////////////////
                  projectNew.eRazonSocial = req.body.eRazonSocial;

                  projectNew.eImagenLogo = result.url;//miLink;
                  //projectNew.eImagenLogoId = result.url;//miLink;

                  projectNew.eTextoLogo = req.body.eTextoLogo;


                  projectNew.eResolucion = req.body.eResolucion;
                  projectNew.eDireccion = req.body.eDireccion;
                  projectNew.eTelefono = req.body.eTelefono;
                  projectNew.eProyectista = req.body.eProyectista;
                  projectNew.eRegistroP = req.body.eRegistroP;
                  projectNew.eInstalador = req.body.eInstalador;
                  projectNew.eRegistroI = req.body.eRegistroI;
                  projectNew.pNumero = req.body.pNumero;
                  projectNew.pLocalidad = req.body.pLocalidad;
                  projectNew.pDepartamento = req.body.pDepartamento;
                  projectNew.pLocalidadC = req.body.pLocalidadC;
                  projectNew.pDepartamentoC = req.body.pDepartamentoC;

                  projectNew.pNombreZona = req.body.pNombreZona;



                  projectNew.vCaneria = '5.8';

                  projectNew.vCodoPipa34 = [];
                  projectNew.vHexagonal34 = [];
                  projectNew.vCarburo1K = [];

                  projectNew.vPrecioMateriales = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
                  projectNew.vPagoYPFB = {

                    distancia : [4, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5, 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 6, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 8, 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 9.0, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 10, 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 11.0, 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 12.0, 12.1, 12.2, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 12.9, 13.0, 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 13.7, 13.8, 13.9, 14.0, 14.1, 14.2, 14.3, 14.4, 14.5, 14.6, 14.7, 14.8, 14.9, 15.0, 15.1, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7, 15.8, 15.9, 16.0, 16.1, 16.2, 16.3, 16.4, 16.5, 16.6, 16.7, 16.8, 16.9, 17.0, 17.1, 17.2, 17.3, 17.4, 17.5, 17.6, 17.7, 17.8, 17.9, 18.0, 18.1, 18.2, 18.3, 18.4, 18.5, 18.6, 18.7, 18.8, 18.9, 19.0, 19.1, 19.2, 19.3, 19.4, 19.5, 19.6, 19.7, 19.8, 19.9, 20.0, 20.1, 20.2, 20.3, 20.4, 20.5, 20.6, 20.7, 20.8, 20.9, 21.0, 21.1, 21.2, 21.3, 21.4, 21.5, 21.6, 21.7, 21.8, 21.9, 22.0 ],

                    costo : [713.8, 722.7, 731.5, 740.4, 749.3, 758.2, 767.1, 776, 784.9, 793.8, 802.7, 811.6, 820.5, 829.4, 838.3, 847.2, 856.1, 865, 873.9, 882.7, 891.6, 900.5, 909.4, 918.3, 927.2, 936.1, 945, 953.9, 962.8, 971.7, 980.6, 989.5, 998.4, 1007.3, 1016.2, 1025.1, 1033.9, 1042.8, 1051.7, 1060.6, 1069.5, 1078.4, 1087.3, 1096.2, 1105.1, 1114, 1122.9, 1131.8, 1140.7, 1149.6, 1158.5, 1167.4, 1176.2, 1185.1, 1194, 1202.9, 1211.8, 1220.7, 1229.6, 1238.5, 1247.4, 1256.3, 1265.2, 1274.1, 1283, 1291.9, 1300.8, 1309.7, 1318.6, 1327.4, 1336.3, 1345.2, 1354.1, 1363, 1371.9, 1380.8, 1389.7, 1398.6, 1407.5, 1416.4, 1425.3, 1434.2, 1443.1, 1452, 1460.9, 1469.8, 1478.6, 1487.5, 1496.4, 1505.3, 1514.2, 1523.1, 1532, 1540.9, 1549.8, 1558.7, 1567.6, 1576.5, 1585.4, 1594.3, 1603.2, 1612.1, 1620.9, 1629.8, 1638.7, 1647.6, 1656.5, 1665.4, 1674.3, 1683.2, 1692.1, 1701, 1709.9, 1718.8, 1727.7, 1736.6, 1745.5, 1754.4, 1763.3, 1772.1, 1781, 1789.9, 1789.8, 1807.7, 1816.6, 1825.5, 1834.4, 1843.3, 1852.2, 1861, 1870, 1878.9, 1887.8, 1896.7, 1905.6, 1914.5, 1923.3, 1932.2, 1941.1, 1950, 1958.9, 1967.8, 1976.7, 1985.6, 1994.5, 2003.4, 2012.3, 2021.2, 2030.1, 2039, 2047.9, 2056.8, 2065.6, 2074.5, 2083.4, 2092.3, 2101.2, 2110.1, 2119, 2127.9, 2136.8, 2145.7, 2154.6, 2163.5, 2172.4, 2181.3, 2190.2, 2199.1, 2208, 2216.8, 2225.7, 2234.6, 2243.5, 2252.4, 2261.3, 2270, 2279.1, 2288, 2296.9, 2305.8, 2314.7 ]

                    };

                  var a = [];
                  //var p = [];
                  for(la = 0; la< 39; la++)
                    a[la] = 0;

                  projectNew.vMaterialExcedente = a;//[];
                  projectNew.vSueldo12 = '26';
                  projectNew.vSueldo34 = '24';
                  projectNew.vSueldo01 = '22';
                  projectNew.vSueldo14 = '22';
                  projectNew.vCostoIn12 = '0';
                  projectNew.vCostoOu12 = '105';
                  projectNew.vCostoIn34 = '0';
                  projectNew.vCostoOu34 = '105';
                  projectNew.vCostoIn01 = '55';
                  projectNew.vCostoOu01 = '160';
                  projectNew.vCostoIn14 = '55';
                  projectNew.vCostoOu14 = '160';
                  /////////////////////////////////////////


                  projectNew.excel = JSON.parse(req.body.jsonData);

                  projectNew.creacion = new Date();

                  projectNew.usuario = req.user._id;
                  var myMkTam = Object.keys(projectNew.excel).length;
                  for(mk = 0; mk < myMkTam; mk++){
                    var myMkTag = Object.keys(projectNew.excel)[mk];



                    for(mok = 0; mok < projectNew.excel[myMkTag].length; mok ++){
                      ///////////////////////////////////////////////
                      if(projectNew.excel[myMkTag][mok].Dpto == undefined){ projectNew.excel[myMkTag][mok].Dpto = req.body.pDepartamentoC || ''}
                      if(projectNew.excel[myMkTag][mok].Loc == undefined){ projectNew.excel[myMkTag][mok].Loc = req.body.pLocalidadC || ''}
                      ///////////////////////////////////////////////

                      if(projectNew.excel[myMkTag][mok].Nro == undefined){ projectNew.excel[myMkTag][mok].Nro = ''}
                      if(projectNew.excel[myMkTag][mok].DIST == undefined){ projectNew.excel[myMkTag][mok].DIST = ''}
                      if(projectNew.excel[myMkTag][mok].ZONA == undefined){ projectNew.excel[myMkTag][mok].ZONA = ''}
                      if(projectNew.excel[myMkTag][mok].MANZ == undefined){ projectNew.excel[myMkTag][mok].MANZ = ''}
                      if(projectNew.excel[myMkTag][mok].PREDIO == undefined){ projectNew.excel[myMkTag][mok].PREDIO = ''}
                      if(projectNew.excel[myMkTag][mok]['PISO/DPTO'] == undefined){ projectNew.excel[myMkTag][mok]['PISO/DPTO'] = ''}
                      if(projectNew.excel[myMkTag][mok]['APELLIDO PATERNO'] == undefined){ projectNew.excel[myMkTag][mok]['APELLIDO PATERNO'] = ''}
                      if(projectNew.excel[myMkTag][mok]['APELLIDO MATERNO'] == undefined){ projectNew.excel[myMkTag][mok]['APELLIDO MATERNO'] = ''}
                      if(projectNew.excel[myMkTag][mok].NOMBRES == undefined){ projectNew.excel[myMkTag][mok].NOMBRES = ''}
                      if(projectNew.excel[myMkTag][mok].CARNET == undefined){ projectNew.excel[myMkTag][mok].CARNET = ''}
                      if(projectNew.excel[myMkTag][mok]['AVDA/ CALLE'] == undefined){ projectNew.excel[myMkTag][mok]['AVDA/ CALLE'] = ''}
                      if(projectNew.excel[myMkTag][mok]['TEL/CEL'] == undefined){ projectNew.excel[myMkTag][mok]['TEL/CEL'] = ''}
                      if(projectNew.excel[myMkTag][mok].OBSERVACIONES == undefined){ projectNew.excel[myMkTag][mok].OBSERVACIONES = ''}
                      if(projectNew.excel[myMkTag][mok].ISOMETRICO == undefined){ projectNew.excel[myMkTag][mok].ISOMETRICO = { 'myPointData': '[100, 300]', 'myGradosData': '[]', 'myDistanciaData': '[]', 'myTubData': '[]', 'myTagData': '[]', 'myComponentesData': '[]', 'graphData': '[]', 'tagsExtra': '[]', 'configuraciones': '[]', 'numberPageData': '[]'};}

                      projectNew.vCodoPipa34[mok] = 0;
                      projectNew.vHexagonal34[mok] = 0;
                      projectNew.vCarburo1K[mok] = 0;

                    }
                  }


                  /*projectNew.vCodoPipa34 = [];
                  projectNew.vHexagonal34 = [];
                  projectNew.vCarburo1K = [];*/

                  projectNew.save(function(err){

                    var mL = '';
                    var mD = '';

                    //console.log(req.user)
                    if(req.user.role == 'superAdmin'){
                      mL = '/administrador';
                      mD = 'Administrador';
                    }

                    if(err) throw err;
                    res.render('editor', {ulink: mL, direccion: mD, proyecto: req.body.nProyecto, autor: req.body.pAutor,
                                          ////////////////////////////////////////
                                          eRazonSocial : req.body.eRazonSocial,

                                          eImagenLogo : result.url,//miLink,
                                          eTextoLogo : req.body.eTextoLogo,

                                          ////////////////////////////////////////

                                          eResolucion : req.body.eResolucion,
                                          eDireccion : req.body.eDireccion,
                                          eTelefono : req.body.eTelefono,
                                          eProyectista : req.body.eProyectista,
                                          eRegistroP : req.body.eRegistroP,
                                          eInstalador : req.body.eInstalador,
                                          eRegistroI : req.body.eRegistroI,
                                          pNumero : req.body.pNumero,
                                          pLocalidad : req.body.pLocalidad,
                                          pDepartamento : req.body.pDepartamento,
                                          pLocalidadC : req.body.pLocalidadC,
                                          pDepartamentoC : req.body.pDepartamentoC,
                                          ////////////////////////////////////////
                                          json: JSON.stringify((projectNew.excel), null, 0), us : req.user.usuario,
                                          ////////////////////////////////////////
                                          vCaneria: projectNew.vCaneria,
                                          vCodoPipa34: projectNew.vCodoPipa34,
                                          vHexagonal34: projectNew.vHexagonal34,
                                          vCarburo1K: projectNew.vCarburo1K,
                                          vMaterialExcedente: projectNew.vMaterialExcedente,

                                          vPrecioMateriales: projectNew.vPrecioMateriales,
                                          vPagoYPFB: JSON.stringify(projectNew.vPagoYPFB),
                                          pNombreZona: projectNew.pNombreZona,

                                          vSueldo12: projectNew.vSueldo12,
                                          vSueldo34: projectNew.vSueldo34,
                                          vSueldo01: projectNew.vSueldo01,
                                          vSueldo14: projectNew.vSueldo14,
                                          vCostoIn12: projectNew.vCostoIn12,
                                          vCostoOu12: projectNew.vCostoOu12,
                                          vCostoIn34: projectNew.vCostoIn34,
                                          vCostoOu34: projectNew.vCostoOu34,
                                          vCostoIn01: projectNew.vCostoIn01,
                                          vCostoOu01: projectNew.vCostoOu01,
                                          vCostoIn14: projectNew.vCostoIn14,
                                          vCostoOu14: projectNew.vCostoOu14
                                         });//req.body.jsonData});
                  });
                }


                fs.unlink(__dirname + '/' + req.files[0].path);
                fs.unlink(__dirname + '/' + req.files[1].path);


              });

              if(err) {
                //return res.end("Error uploading file.");
                console.log(err);
              }
              //res.end("File is uploaded");



              break;
            case 'editable':
              //console.log(req.body.mode);
              if(project){
                if(project.usuario == myRes._id.toString()){

                  var mL = '';
                  var mD = '';

                  //console.log(req.user)
                  if(req.user.role == 'superAdmin'){
                    mL = '/administrador';
                    mD = 'Administrador';
                  }



                  res.render('editor', {ulink: mL, direccion: mD, proyecto: project.proyecto, autor: project.autor,
                                        ////////////////////////////////////////
                                        eRazonSocial : project.eRazonSocial,

                                        eImagenLogo : project.eImagenLogo,
                                        eTextoLogo : project.eTextoLogo,

                                        eResolucion : project.eResolucion,
                                        eDireccion : project.eDireccion,
                                        eTelefono : project.eTelefono,
                                        eProyectista : project.eProyectista,
                                        eRegistroP : project.eRegistroP,
                                        eInstalador : project.eInstalador,
                                        eRegistroI : project.eRegistroI,
                                        pNumero : project.pNumero,
                                        pLocalidad : project.pLocalidad,
                                        pDepartamento : project.pDepartamento,
                                        pLocalidadC : project.pLocalidadC,
                                        pDepartamentoC : project.pDepartamentoC,
                                        ////////////////////////////////////////


                                        json:  JSON.stringify((project.excel), null, 0), us : req.user.usuario,
                                        ////////////////////////////////////////
                                        vCaneria: project.vCaneria,
                                        vCodoPipa34: project.vCodoPipa34,
                                        vHexagonal34: project.vHexagonal34,
                                        vCarburo1K: project.vCarburo1K,
                                        vMaterialExcedente: project.vMaterialExcedente,

                                        vPrecioMateriales: project.vPrecioMateriales,
                                        vPagoYPFB: JSON.stringify(project.vPagoYPFB),
                                        pNombreZona: project.pNombreZona,

                                        vSueldo12: project.vSueldo12,
                                        vSueldo34: project.vSueldo34,
                                        vSueldo01: project.vSueldo01,
                                        vSueldo14: project.vSueldo14,
                                        vCostoIn12: project.vCostoIn12,
                                        vCostoOu12: project.vCostoOu12,
                                        vCostoIn34: project.vCostoIn34,
                                        vCostoOu34: project.vCostoOu34,
                                        vCostoIn01: project.vCostoIn01,
                                        vCostoOu01: project.vCostoOu01,
                                        vCostoIn14: project.vCostoIn14,
                                        vCostoOu14: project.vCostoOu14
                                       })
                }
                else{
                  req.flash('excelMessage', 'Este proyecto existe pero no para su usuario, puede crear un nuevo proyecto si lo desea');
                  res.redirect('/asignacion/nuevo');
                }

              }
              else{
                req.flash('excelMessage', 'Este proyecto no existe, usted puede crear uno nuevo');
                res.redirect('/asignacion/nuevo');
              }

              break;
            case 'delete':
              if(project){
                if(project.usuario == myRes._id.toString()){
                  proyecto_db.remove({proyecto: req.body.nProyecto}, function(err, removed){
                    if(err) res.send(err);
                    req.flash('excelMessage', 'Proyecto eliminado');
                    res.redirect('/asignacion/nuevo');
                  });
                }
                else{
                  //req.flash('excelMessage', 'Usted no esta autorizado para eliminar este proyecto');
                  req.flash('deleteMessage', 'Usted no esta autorizado para eliminar este proyecto');
                  //res.redirect('/proyecto/nuevo');
                  res.redirect('/asignacion/eliminar');
                }

              }
              else{
                req.flash('excelMessage', 'No puede eliminar un proyecto que  no existe');
                res.redirect('/asignacion/nuevo');
              }

              break;
            case 'saveVars':

              console.log(req.user);
              if(req.files.length > 0){
                //console.log('SOME ERASE')
                if(req.files[0].mimetype.substring(0, 5) == 'image'){


                  var miPUrl= req.body.eImagenLogo;
                  var pOne = -1;
                  var pTwo = -1;
                  var pSw = 0;
                  for(p = miPUrl.length-1; p >0; p--){
                    if(miPUrl[p] == '.'){
                      pTwo = p;
                      pSw++;
                    }
                    if(miPUrl[p] == '/'){
                      pOne = p;
                      pSw++;
                    }
                    if(pSw == 2)
                      break;
                  }
                  //console.log(miPUrl)
                  //console.log(miPUrl.substring(pOne+1, pTwo))
                  var miIdIma = miPUrl.substring(pOne+1, pTwo);
                  cloudinary.uploader.destroy(miIdIma, function(result) { console.log(result) }, { invalidate: true });
                  //req.body.eImagenLogo
                  cloudinary.uploader.upload(req.files[0].path, function(result) {

                    var myOwnJSONV = project;

                    //myOwnJSONV.vCaneria = req.body.varCan;

                    myOwnJSONV.autor = project.autor;

                    ////////////////////////////////////////
                    myOwnJSONV.eRazonSocial = req.body.eRazonSocial;

                    myOwnJSONV.eImagenLogo = result.url;
                    myOwnJSONV.eTextoLogo = req.body.eTextoLogo;

                    myOwnJSONV.eResolucion = req.body.eResolucion;
                    myOwnJSONV.eDireccion = req.body.eDireccion;
                    myOwnJSONV.eTelefono = req.body.eTelefono;
                    myOwnJSONV.eProyectista = req.body.eProyectista;
                    myOwnJSONV.eRegistroP = req.body.eRegistroP;
                    myOwnJSONV.eInstalador = req.body.eInstalador;
                    myOwnJSONV.eRegistroI = req.body.eRegistroI;
                    myOwnJSONV.pNumero = req.body.pNumero;
                    myOwnJSONV.pLocalidad = req.body.pLocalidad;
                    myOwnJSONV.pDepartamento = req.body.pDepartamento;
                    myOwnJSONV.pLocalidadC = req.body.pLocalidadC;
                    myOwnJSONV.pDepartamentoC = req.body.pDepartamentoC;
                    ////////////////////////////////////////


                    myOwnJSONV.vCaneria = req.body.vCaneria;

                    myOwnJSONV.vCodoPipa34 = JSON.parse('['+req.body.vCodoPipa34+']');
                    myOwnJSONV.vHexagonal34 = JSON.parse('['+req.body.vHexagonal34+']');
                    myOwnJSONV.vCarburo1K = JSON.parse('['+req.body.vCarburo1K+']');

                    myOwnJSONV.vMaterialExcedente = JSON.parse('['+req.body.vMaterialExcedente+']');

                    myOwnJSONV.vPrecioMateriales = JSON.parse('['+req.body.vPrecioMateriales+']');
                    myOwnJSONV.vPagoYPFB = JSON.parse(req.body.vPagoYPFB);
                    myOwnJSONV.pNombreZona = req.body.pNombreZona;

                    myOwnJSONV.vSueldo12 = req.body.vSueldo12;
                    myOwnJSONV.vSueldo34 = req.body.vSueldo34;
                    myOwnJSONV.vSueldo01 = req.body.vSueldo01;
                    myOwnJSONV.vSueldo14 = req.body.vSueldo14;
                    myOwnJSONV.vCostoIn12 = req.body.vCostoIn12;
                    myOwnJSONV.vCostoOu12 = req.body.vCostoOu12;
                    myOwnJSONV.vCostoIn34 = req.body.vCostoIn34;
                    myOwnJSONV.vCostoOu34 = req.body.vCostoOu34;
                    myOwnJSONV.vCostoIn01 = req.body.vCostoIn01;
                    myOwnJSONV.vCostoOu01 = req.body.vCostoOu01;
                    myOwnJSONV.vCostoIn14 = req.body.vCostoIn14;
                    myOwnJSONV.vCostoOu14 = req.body.vCostoOu14;

                    project = '';
                    project = myOwnJSONV;

                    project.save(function(err) {
                      if (err)
                        res.send(err);
                    });
                    //res.redirect('/')

                    var mL = '';
                    var mD = '';

                    console.log(req.user)
                    if(req.user.role == 'superAdmin'){
                      mL = '/administrador';
                      mD = 'Administrador';
                    }


                    res.render('editor', {ulink: mL, direccion: mD, proyecto: req.body.nProyecto, autor: project.autor,

                                          ////////////////////////////////////////
                                          eRazonSocial : project.eRazonSocial,

                                          eImagenLogo : project.eImagenLogo,
                                          eTextoLogo : project.eTextoLogo,

                                          eResolucion : project.eResolucion,
                                          eDireccion : project.eDireccion,
                                          eTelefono : project.eTelefono,
                                          eProyectista : project.eProyectista,
                                          eRegistroP : project.eRegistroP,
                                          eInstalador : project.eInstalador,
                                          eRegistroI : project.eRegistroI,
                                          pNumero : project.pNumero,
                                          pLocalidad : project.pLocalidad,
                                          pDepartamento : project.pDepartamento,
                                          pLocalidadC : project.pLocalidadC,
                                          pDepartamentoC : project.pDepartamentoC,
                                          ////////////////////////////////////////

                                          json:  JSON.stringify((project.excel), null, 0), us : req.user.usuario,
                                          vCaneria: project.vCaneria,
                                          vCodoPipa34: project.vCodoPipa34,
                                          vHexagonal34: project.vHexagonal34,
                                          vCarburo1K: project.vCarburo1K,
                                          vMaterialExcedente: project.vMaterialExcedente,

                                          vPrecioMateriales: project.vPrecioMateriales,
                                          vPagoYPFB: JSON.stringify(project.vPagoYPFB),
                                          pNombreZona: project.pNombreZona,

                                          vSueldo12: project.vSueldo12,
                                          vSueldo34: project.vSueldo34,
                                          vSueldo01: project.vSueldo01,
                                          vSueldo14: project.vSueldo14,
                                          vCostoIn12: project.vCostoIn12,
                                          vCostoOu12: project.vCostoOu12,
                                          vCostoIn34: project.vCostoIn34,
                                          vCostoOu34: project.vCostoOu34,
                                          vCostoIn01: project.vCostoIn01,
                                          vCostoOu01: project.vCostoOu01,
                                          vCostoIn14: project.vCostoIn14,
                                          vCostoOu14: project.vCostoOu14
                                         })



                    fs.unlink(__dirname + '/' +req.files[0].path)
                  });


                  //console.log(cloudinary.image("s6huazxzq35fegogqxhi.jpg").getUID())
                  //cloudinary.uploader.destroy('wnsylwwmdjghpyrtcn8c', function(result) { console.log(result) }, { invalidate: true });

                  //cloudinary.image('wnsylwwmdjghpyrtcn8c.png')
                  //console.log('MMM')
                  //res.send('ready')
                  //res.redirect('http://res.cloudinary.com/aru/image/upload/v1475634739/wnsylwwmdjghpyrtcn8c.png')
                  //res.redirect(req.body.eImagenLogo)
                }
                else{
                  //console.log(req.body.vCaneria)
                  //console.log(req.files)
                  var myOwnJSONV = project;

                  //myOwnJSONV.vCaneria = req.body.varCan;

                  myOwnJSONV.autor = project.autor;

                  ////////////////////////////////////////
                  myOwnJSONV.eRazonSocial = req.body.eRazonSocial;

                  //myOwnJSONV.eImagenLogo = project.eImagenLogo;
                  myOwnJSONV.eTextoLogo = req.body.eTextoLogo;

                  myOwnJSONV.eResolucion = req.body.eResolucion;
                  myOwnJSONV.eDireccion = req.body.eDireccion;
                  myOwnJSONV.eTelefono = req.body.eTelefono;
                  myOwnJSONV.eProyectista = req.body.eProyectista;
                  myOwnJSONV.eRegistroP = req.body.eRegistroP;
                  myOwnJSONV.eInstalador = req.body.eInstalador;
                  myOwnJSONV.eRegistroI = req.body.eRegistroI;
                  myOwnJSONV.pNumero = req.body.pNumero;
                  myOwnJSONV.pLocalidad = req.body.pLocalidad;
                  myOwnJSONV.pDepartamento = req.body.pDepartamento;
                  myOwnJSONV.pLocalidadC = req.body.pLocalidadC;
                  myOwnJSONV.pDepartamentoC = req.body.pDepartamentoC;
                  ////////////////////////////////////////


                  myOwnJSONV.vCaneria = req.body.vCaneria;

                  myOwnJSONV.vCodoPipa34 = JSON.parse('['+req.body.vCodoPipa34+']');
                  myOwnJSONV.vHexagonal34 = JSON.parse('['+req.body.vHexagonal34+']');
                  myOwnJSONV.vCarburo1K = JSON.parse('['+req.body.vCarburo1K+']');

                  myOwnJSONV.vMaterialExcedente = JSON.parse('['+req.body.vMaterialExcedente+']');

                  myOwnJSONV.vPrecioMateriales = JSON.parse('['+req.body.vPrecioMateriales+']');
                  myOwnJSONV.vPagoYPFB = JSON.parse(req.body.vPagoYPFB);
                  myOwnJSONV.pNombreZona = req.body.pNombreZona;

                  myOwnJSONV.vSueldo12 = req.body.vSueldo12;
                  myOwnJSONV.vSueldo34 = req.body.vSueldo34;
                  myOwnJSONV.vSueldo01 = req.body.vSueldo01;
                  myOwnJSONV.vSueldo14 = req.body.vSueldo14;
                  myOwnJSONV.vCostoIn12 = req.body.vCostoIn12;
                  myOwnJSONV.vCostoOu12 = req.body.vCostoOu12;
                  myOwnJSONV.vCostoIn34 = req.body.vCostoIn34;
                  myOwnJSONV.vCostoOu34 = req.body.vCostoOu34;
                  myOwnJSONV.vCostoIn01 = req.body.vCostoIn01;
                  myOwnJSONV.vCostoOu01 = req.body.vCostoOu01;
                  myOwnJSONV.vCostoIn14 = req.body.vCostoIn14;
                  myOwnJSONV.vCostoOu14 = req.body.vCostoOu14;

                  project = '';
                  project = myOwnJSONV;

                  project.save(function(err) {
                    if (err)
                      res.send(err);
                  });
                  //res.redirect('/')

                  var mL = '';
                  var mD = '';

                  console.log(req.user)
                  if(req.user.role == 'superAdmin'){
                    mL = '/administrador';
                    mD = 'Administrador';
                  }


                  res.render('editor', {ulink: mL, direccion: mD, proyecto: req.body.nProyecto, autor: project.autor,

                                        ////////////////////////////////////////
                                        eRazonSocial : project.eRazonSocial,

                                        eImagenLogo : project.eImagenLogo,
                                        eTextoLogo : project.eTextoLogo,

                                        eResolucion : project.eResolucion,
                                        eDireccion : project.eDireccion,
                                        eTelefono : project.eTelefono,
                                        eProyectista : project.eProyectista,
                                        eRegistroP : project.eRegistroP,
                                        eInstalador : project.eInstalador,
                                        eRegistroI : project.eRegistroI,
                                        pNumero : project.pNumero,
                                        pLocalidad : project.pLocalidad,
                                        pDepartamento : project.pDepartamento,
                                        pLocalidadC : project.pLocalidadC,
                                        pDepartamentoC : project.pDepartamentoC,
                                        ////////////////////////////////////////

                                        json:  JSON.stringify((project.excel), null, 0), us : req.user.usuario,
                                        vCaneria: project.vCaneria,
                                        vCodoPipa34: project.vCodoPipa34,
                                        vHexagonal34: project.vHexagonal34,
                                        vCarburo1K: project.vCarburo1K,
                                        vMaterialExcedente: project.vMaterialExcedente,

                                        vPrecioMateriales: project.vPrecioMateriales,
                                        vPagoYPFB: JSON.stringify(project.vPagoYPFB),
                                        pNombreZona: project.pNombreZona,

                                        vSueldo12: project.vSueldo12,
                                        vSueldo34: project.vSueldo34,
                                        vSueldo01: project.vSueldo01,
                                        vSueldo14: project.vSueldo14,
                                        vCostoIn12: project.vCostoIn12,
                                        vCostoOu12: project.vCostoOu12,
                                        vCostoIn34: project.vCostoIn34,
                                        vCostoOu34: project.vCostoOu34,
                                        vCostoOu14: project.vCostoOu14
                                       })
                  fs.unlink(__dirname + '/' +req.files[0].path)

                }

              }
              else{
                //cloudinary.uploader.upload(req.files[0].path, function(result) {}

                //console.log(req.body.vCaneria)
                //console.log(req.files)
                var myOwnJSONV = project;

                //myOwnJSONV.vCaneria = req.body.varCan;

                myOwnJSONV.autor = project.autor;

                ////////////////////////////////////////
                myOwnJSONV.eRazonSocial = req.body.eRazonSocial;

                //myOwnJSONV.eImagenLogo = project.eImagenLogo;
                myOwnJSONV.eTextoLogo = req.body.eTextoLogo;

                myOwnJSONV.eResolucion = req.body.eResolucion;
                myOwnJSONV.eDireccion = req.body.eDireccion;
                myOwnJSONV.eTelefono = req.body.eTelefono;
                myOwnJSONV.eProyectista = req.body.eProyectista;
                myOwnJSONV.eRegistroP = req.body.eRegistroP;
                myOwnJSONV.eInstalador = req.body.eInstalador;
                myOwnJSONV.eRegistroI = req.body.eRegistroI;
                myOwnJSONV.pNumero = req.body.pNumero;
                myOwnJSONV.pLocalidad = req.body.pLocalidad;
                myOwnJSONV.pDepartamento = req.body.pDepartamento;
                myOwnJSONV.pLocalidadC = req.body.pLocalidadC;
                myOwnJSONV.pDepartamentoC = req.body.pDepartamentoC;
                ////////////////////////////////////////


                myOwnJSONV.vCaneria = req.body.vCaneria;

                myOwnJSONV.vCodoPipa34 = JSON.parse('['+req.body.vCodoPipa34+']');
                myOwnJSONV.vHexagonal34 = JSON.parse('['+req.body.vHexagonal34+']');
                myOwnJSONV.vCarburo1K = JSON.parse('['+req.body.vCarburo1K+']');

                myOwnJSONV.vMaterialExcedente = JSON.parse('['+req.body.vMaterialExcedente+']');

                myOwnJSONV.vPrecioMateriales = JSON.parse('['+req.body.vPrecioMateriales+']');
                myOwnJSONV.vPagoYPFB = JSON.parse(req.body.vPagoYPFB);
                myOwnJSONV.pNombreZona = req.body.pNombreZona;

                myOwnJSONV.vSueldo12 = req.body.vSueldo12;
                myOwnJSONV.vSueldo34 = req.body.vSueldo34;
                myOwnJSONV.vSueldo01 = req.body.vSueldo01;
                myOwnJSONV.vSueldo14 = req.body.vSueldo14;
                myOwnJSONV.vCostoIn12 = req.body.vCostoIn12;
                myOwnJSONV.vCostoOu12 = req.body.vCostoOu12;
                myOwnJSONV.vCostoIn34 = req.body.vCostoIn34;
                myOwnJSONV.vCostoOu34 = req.body.vCostoOu34;
                myOwnJSONV.vCostoIn01 = req.body.vCostoIn01;
                myOwnJSONV.vCostoOu01 = req.body.vCostoOu01;
                myOwnJSONV.vCostoIn14 = req.body.vCostoIn14;
                myOwnJSONV.vCostoOu14 = req.body.vCostoOu14;

                project = '';
                project = myOwnJSONV;

                project.save(function(err) {
                  if (err)
                    res.send(err);
                });
                //res.redirect('/')

                var mL = '';
                var mD = '';

                console.log(req.user)
                if(req.user.role == 'superAdmin'){
                  mL = '/administrador';
                  mD = 'Administrador';
                }


                res.render('editor', {ulink: mL, direccion: mD, proyecto: req.body.nProyecto, autor: project.autor,

                                      ////////////////////////////////////////
                                      eRazonSocial : project.eRazonSocial,

                                      eImagenLogo : project.eImagenLogo,
                                      eTextoLogo : project.eTextoLogo,

                                      eResolucion : project.eResolucion,
                                      eDireccion : project.eDireccion,
                                      eTelefono : project.eTelefono,
                                      eProyectista : project.eProyectista,
                                      eRegistroP : project.eRegistroP,
                                      eInstalador : project.eInstalador,
                                      eRegistroI : project.eRegistroI,
                                      pNumero : project.pNumero,
                                      pLocalidad : project.pLocalidad,
                                      pDepartamento : project.pDepartamento,
                                      pLocalidadC : project.pLocalidadC,
                                      pDepartamentoC : project.pDepartamentoC,
                                      ////////////////////////////////////////

                                      json:  JSON.stringify((project.excel), null, 0), us : req.user.usuario,
                                      vCaneria: project.vCaneria,
                                      vCodoPipa34: project.vCodoPipa34,
                                      vHexagonal34: project.vHexagonal34,
                                      vCarburo1K: project.vCarburo1K,
                                      vMaterialExcedente: project.vMaterialExcedente,

                                      vPrecioMateriales: project.vPrecioMateriales,
                                      vPagoYPFB: JSON.stringify(project.vPagoYPFB),
                                      pNombreZona: project.pNombreZona,

                                      vSueldo12: project.vSueldo12,
                                      vSueldo34: project.vSueldo34,
                                      vSueldo01: project.vSueldo01,
                                      vSueldo14: project.vSueldo14,
                                      vCostoIn12: project.vCostoIn12,
                                      vCostoOu12: project.vCostoOu12,
                                      vCostoIn34: project.vCostoIn34,
                                      vCostoOu34: project.vCostoOu34,
                                      vCostoIn01: project.vCostoIn01,
                                      vCostoOu01: project.vCostoOu01,
                                      vCostoIn14: project.vCostoIn14,
                                      vCostoOu14: project.vCostoOu14
                                     })
              }


              break;

          }


        })

      })

    }

  });

});

app.get('/close', function(req, res){
  req.logout();
  res.redirect('/');
});


//var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
/*var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.listen(port, ip);*/

app.listen(process.env.PORT ||3000);
