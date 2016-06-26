// ------------------- ExpressServer1 start --------------------------------
exports.index = function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello from customers index page....');
}

exports.contacts = function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello from customers contacts page....');
}

// ------------------- ExpressServer2 start --------------------------------
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('customers.html');
});

router.get('/contacts', function(req, res, next) {
    res.render('customerContacts.html');
});
module.exports = router;
// ------------------- ExpressServer3 start --------------------------------
