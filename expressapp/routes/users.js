var express = require('express');
var router = express.Router();
var User = require('../models/user')

/* GET users listing. */
//router.get('/', function(req, res) {
 // res.send('respond with a resource');
//});

router.post('/register',function(req,res,next) {
  
addToDB(req,res);
console.log('i got here');
//next();
});

async function addToDB(req,res){
  var user = new User ({
    email:req.body.email,
    username: req.body.email,
    password : User.hashPassword(req.body.password),
    creation_dt: Date.now()

  });

  try {
    doc= await user.save();
    return res.status(201).json(doc);
  }
  catch(err){
    return res.satus(501).json(err);

  }
}


module.exports = router;
