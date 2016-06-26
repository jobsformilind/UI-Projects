// http://localhost:3030/sample.html
var http = require('http');
var fs = require('fs');
var path = require('path'); 
var url = require('url');

var server = http.createServer(onRequest).listen(3030);

function onRequest(req, res) {
    var urlParts = url.parse(req.url);
    var doc = './docs' + urlParts.pathname;
    console.log(doc);

    fs.exists(doc, function(exists) {
        if (exists) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream(doc).pipe(res);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    });
};
