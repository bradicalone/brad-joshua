var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
  // res.render('contact', { layout: false });
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
