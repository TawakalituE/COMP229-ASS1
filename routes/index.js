let express = require('express');
let router = express.Router();

// Render the home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Render the about page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Render the home page (alternative URL)
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
  });

// Render the projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

// Render the services page
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

// Render the contact page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// Export the router
module.exports = router;