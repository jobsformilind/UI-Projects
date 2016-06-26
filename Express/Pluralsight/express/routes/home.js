// ------------------- ExpressServer1 start --------------------------------
exports.index = function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello from home index ....');
}

// ------------------- ExpressServer2 start --------------------------------
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index.html');
});
module.exports = router;

// ------------------- ExpressServer3 start --------------------------------
