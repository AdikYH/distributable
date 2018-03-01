var express = require('express');
var router = express.Router();

router.route('/')

.get(function(req, res, next){
  res.render('index');
})
.post(function(req, res, next){
  res.render();
});

module.exports = router;

/*var cookieParser = require('cookie-parser'),
    session = require('express-session'),
    mongoStore = require('connect-mongo')(session);

var usuario = require('../modelo/usuario');

var router = express.Router();

router.use(cookieParser('mySecretCookie'));
router.use(session({
  secret: 'miSecreto',
  saveUninitialized: true,
  resave: false, *//*true,*/
  /*store: new mongoStore({
    url:'mongodb://localhost/isoMetrics',
    ttl: 60*60*/
    /*14 * 24 * 60 * 60,/* = 14 days. Default*/
    //autoRemove: 'interval',
    //autoRemoveInterval: 10
    /*10minutes default*/
  /*})
}));

router.route('/')
.get(function(req, res, next){
  res.redirect('login');
})
.post(function(req, res, next){
  us = req.body.user.toString();
  ps = req.body.password.toString();
  usuario.find({nombre : us, password: ps}, function(err, query){
    if(err) throw err;
    if(query.length==1){
      req.session.name = us;
      res.render('index');
    }
    else{
      req.session.destroy();
      res.render('login');
    }
  });
});

module.exports = router;*/