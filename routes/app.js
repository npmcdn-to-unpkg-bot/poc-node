var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
  User.findOne({} , function(err, doc){
    var email = '';
    if(err) {
      return res.sender('Error');
    }
    if(doc) {
      email = doc.email;
    }
    res.render('node', {email: email});
  })

});

router.post('/', function(req, res, next){
   var email = req.body.email;
   var user = new User({
     firstName: 'Tiago',
     lastName: 'Ferreira',
     password: 'biruta',
     email: email,
   })
   user.save();
   res.redirect('/');
})

module.exports = router;
