var express = require('express');
var router = express.Router();
// let User = require('../models/user.model.js');


/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});


module.exports = router;
