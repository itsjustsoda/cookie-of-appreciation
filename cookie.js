var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  fs.readFile('cookie.html', function(err, content) {
    if (!err) {
      var token = new Buffer(Math.random() * 0xC00//KIE
                             + "Here's a cookie as my token of appreciation!" 
                             + new Date().getTime()).toString('base64');

      res.writeHead(201, {
        'Content-Length': content.length,
        'Content-Type': 'text/html',
        'Set-Cookie': 'appreciationToken="' + token + '"'
      });

      res.end(content);
    } else {
      res.writeHead(500);
      res.end();
    }
  });
}).listen('0xC00')//KIE
