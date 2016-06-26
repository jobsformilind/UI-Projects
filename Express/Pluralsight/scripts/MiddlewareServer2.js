var connect = require('connect');
var serveStatic = require('serve-static');


var server = connect()
    .use(serveStatic('docs'))
    .use(requestListener)
    .listen(3030);


function requestListener(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello from middleware server....');
};
