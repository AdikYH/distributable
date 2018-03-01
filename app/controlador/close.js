var express = require('express');
var router = express.Router();

router.route('/')
.get(function(req, res, next){
  //req.session.destroy();
  //delete req.cache;//[hello_file]
  //res.redirect('/');
  res.send('close');
})

module.exports = router;