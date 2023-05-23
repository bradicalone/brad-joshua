var express = require('express');
var router = express.Router();
const path = require('path')
// let User = require('../models/user.model.js');


/* This route wont get hit due to: app.use(express.static(path.join(__dirname, 'public'))); 
* in app.js
*/
router.get('/', (req, res, next) => {
  console.log('ROOT')
  // Will be all new portfolio stuff here
  res.send(__dirname + '/public/index.html')
});

router.get('/old-portfolio', (req, res, next) => {
  // In the views folder
    res.render("old-portfolio")
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact' });
});

/* GET sitemap page. */
router.get('/sitemap.xml', (req, res) => {
  res.sendFile(path.resolve('sitemap.xml'));
});


module.exports = router;
