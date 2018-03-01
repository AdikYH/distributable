var express = require('express');
var router = express.Router();

router.route('/')
.get(function(req, res){  
  /*if(req.session.name!= undefined)
    res.render('proyecto', {user: req.session.name});
  else
    res.redirect('/');*/
  res.send('proyecto');
});
module.exports = router;