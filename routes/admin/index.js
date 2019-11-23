var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', { title: 'Express' });
});

router.get('/products', function(req, res, next) {
    res.render('admin/products', { title: 'Express' });
  });
  
  router.get('/addproduct', function(req, res, next) {
    //console.log('Inside te add product');
    res.render('admin/addproductform', { title: 'Express' });
  });
  
  
  router.post('/addproduct-submit', function(req, res, next) {
    console.log('Inside the add product',req.body);
    //res.render('admin/addproductform', { title: 'Express' });
  });


router.get("/home", function(req, res, next) {
    res.render('admin/index', { title: 'Express' });
  });

  router.get("/home", function(req, res, next) {
    res.render('admin/index', { title: 'Express' });
  });

router.post('/checklogin', function(req, res, next) {
    var email = req.body.email;
    var pass = req.body.pass;
    if(email=="mohan@gmail.com" && pass=="12345"){
        res.redirect("/admin/home");
    }
    else{
        res.render('admin/login', { title: 'Express' });
    }
  });
module.exports = router;
