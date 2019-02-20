const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hw1',function (req,res) {
  str = JSON.stringify({
    name:"Joey",
    words:"hello world",
    date:"Feb.19"
  })
  res.send(JSON.parse(str));
});

router.post('/hw1',function(req,res){
  var user_id=req.body.id;
  var token =req.body.token;
  res.send(user_id+' '+token);
});



module.exports = router;
