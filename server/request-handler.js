/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/

// console.log(app.app);
var results = [];
var qs = require('querystring');
var requestHandler = function(request, response) {
  
  if (request.method === 'POST') {
    request.on('data', function(data) {
      var bigData = qs.parse(data);
      console.log('This is the request object data', bigData);
      
    });
    results.push('Yay');
  }
  // console.log('Serving req~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~uest type ' + request.method + ' for url ' + request.url);
  var statusCode = 200;
  var headers = defaultCorsHeaders;

  // Tell the client we are sending them plain text.
  //

  // headers['Content-Type'] = 'text/plain';
  headers['Content-Type'] = 'application/JSON';
  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  response.writeHead(statusCode, headers);
  // response.write(JSON.stringify('tres'));
  

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows





  response.end(JSON.stringify({results:results}));
  
  
  
  // if (request.method === 'POST' && request.url === '/login') {
  //   var body = '';
  //   request.on('data', function(chunk) {
  //     body += chunk;
  //   });
  //   request.on('end', function() {
  //     var data = qs.parse(body);
  //     // now you can access `data.email` and `data.password`
  //     request.writeHead(200);
  //     request.end(JSON.stringify(data));
  //   });
  // } else {
  //   // request.writeHead(404);
  //   request.end();
  // }
};


var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};




exports.requestHandler = requestHandler;