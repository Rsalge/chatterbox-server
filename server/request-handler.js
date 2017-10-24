var results = [];
var qs = require('querystring');
var requestHandler = function(request, response) {
  
  if (request.method === 'POST') {
    var body = '';
    request.on('data', function(data) {
      //var bigData = qs.parse(data);
      console.log('Data coming in: ', data);
      body += data;
      var bigData = qs.parse(body);
      console.log('This is the request object data', bigData);
      results.push(bigData);
    });
  }
  
 
  var statusCode = 201;
  var headers = defaultCorsHeaders;

  headers['Content-Type'] = 'application/JSON';

  response.writeHead(statusCode, headers);

  response.end(JSON.stringify({results:results}));

};


var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};




exports.requestHandler = requestHandler;