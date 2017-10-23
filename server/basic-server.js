/* Import node's http module: */
var http = require('http');
var handler = require('./request-handler.js');

var port = 3000;

var ip = '127.0.0.1';

http.createServer(handler.requestHandler).listen(port, ip);

console.log('Server running at http://127.0.0.1:3000/');
