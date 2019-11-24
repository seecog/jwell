var express = require('express');
var router = express.Router();
var Category = require("../../models/category.model");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', { layout: "login_layout", title: "Dashboard" });
});

//product operation start
router.get('/products', function (req, res, next) {
  res.render('admin/products', { layout: 'default', title: "Product List" });
});

router.get('/addproduct', function (req, res, next) {
  //console.log('Inside te add product');
  res.render('admin/addproductform', { layout: "default", title: 'Add Product' });
});


router.post('/addproduct-submit', function (req, res, next) {
  console.log('Inside the add product', req.body);
  //res.render('admin/addproductform', { title: 'Express' });
});
//product operation end

//category operation start
router.get('/categories', function (req, res, next) {
  Category.find({}, function (err, categories) {
    if (err) {
      throw new Error(err);
    }
    res.render('admin/categories', { layout: 'default', title: "Category List", data: categories });
  })

});

router.get('/addcategory', function (req, res, next) {
  res.render('admin/addcategoryform', { layout: "default", title: 'Add Category' });
});


router.post('/addcategory-submit', function (req, res, next) {
  console.log('The body is ', req.body);
  var category = new Category();
  category.name = req.body.name;
  category.image = req.body.image;
  category.description = req.body.description;
  category.save();
  res.redirect("/admin/categories");
});
//category operation end

router.get("/home", function (req, res, next) {
  res.render('admin/index', { layout: 'default' });
});



router.post('/checklogin', function (req, res, next) {
  var email = req.body.email;
  var pass = req.body.pass;
  if (email == "mohan@gmail.com" && pass == "12345") {
    res.redirect("/admin/home");
  }
  else {
    res.render('admin/login', { title: 'Express' });
  }
});
module.exports = router;
