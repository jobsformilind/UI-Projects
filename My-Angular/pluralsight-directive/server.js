// http://localhost:8080/dir1/index.html
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var port = 8080;

var server = http.createServer(onRequest).listen(port);
console.log('Server started on port : '+port);

function onRequest(req, res) {
    var urlParts = url.parse(req.url);
    var doc = "."+urlParts.pathname;
    if(doc === './') {
    	doc = './index.html';
    }
    console.log('Request : '+doc);

    fs.exists(doc, function(exists) {
        if (exists) {
            fs.createReadStream(doc).pipe(res);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    });
};
