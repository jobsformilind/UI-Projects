var http = require('http');

var server = http.createServer(requestListener).listen(3030);

function requestListener(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is response from server...');
    res.end();
};
