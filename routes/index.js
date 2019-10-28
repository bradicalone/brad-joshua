var express = require('express');
var router = express.Router();
let User = require('../models/user.model.js');


/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

router.get('/products', (req, res) => {
  if(!req.query.flannel){
    return res.send('not a search term')
  }
  res.send({
    products: []
  })
});


module.exports = router;
