var results = [{objectId:0}];
var messageCount = 1;
var qs = require('querystring');
var requestHandler = function(request, response) {
  var statusCode = 200;



  if (request.method === 'POST') {
    var body = '';
    statusCode = 201;
    request.on('data', function(data) {
      //var bigData = qs.parse(data);
      console.log('Data coming in: ', data);
      body += data;
      var bigData = qs.parse(body);
      console.log('This is the request object data', bigData);
      bigData.objectId = messageCount++;
      results.unshift(bigData);
    });
  }
  // else if (request.method === 'GET') {
    // statusCode = 200;
  // }
  else if (request.method === null) {
    statusCode = 404;
  }

  if (request.url !== '/classes/messages') {
    statusCode = 404;
  }

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
