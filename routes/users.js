/*
File: users.js
Student's Name: Adinlewa Tawakalitu Eunice
Student ID: 301281523
Date: June 4, 2023
*/

let express = require('express');
let router = express.Router();

// Home page route
router.get('/home', function(req, res, next) {
// Render the home page with the title 'Home Page'
res.render('home', { title: 'Home Page' });
});

// About Me page route
router.get('/about', function(req, res, next) {
// Render the about page with the title 'About Me'
res.render('about', { title: 'About Me' });
});

// Contact page route
router.get('/contact', function(req, res, next) {
// Render the contact page with the title 'Contact Page'
res.render('contact', { title: 'Contact Page' });
});


// Default route
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  });
module.exports = router;