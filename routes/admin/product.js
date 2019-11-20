var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/product', { title: 'Express' });
});

router.get('/addproduct', function(req, res, next) {
  //console.log('Inside te add product');
  res.render('admin/addproductform', { title: 'Express' });
});


router.post('/addproduct-submit', function(req, res, next) {
  console.log('Inside the add product',req.body);
  //res.render('admin/addproductform', { title: 'Express' });
});


module.exports = router;
