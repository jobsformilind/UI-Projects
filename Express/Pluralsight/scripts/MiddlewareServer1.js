var connect = require('connect');
var util = require('util');

var interceptorFunction = function(req, res, next) {
    console.log(req.method + ' ' + req.url);
    next();
};


var server = connect()
    .use('/rest', interceptorFunction)
    .use(requestListener)
    .listen(3030);


function requestListener(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello from middleware server....');
    res.end();
};
