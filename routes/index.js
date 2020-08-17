var express = require('express');
var router = express.Router();
const path = require('path')
// let User = require('../models/user.model.js');
console.log(path.resolve('/'))

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

/* GET sitemap page. */
router.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.resolve('sitemap.xml'));
});


module.exports = router;
