var http = require('http');
var server = http.createServer(function(request, response){
console.log("Request received.");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello World");
response.end();
});

server.listen(3000);
console.log("Node.js web server at port 3000 is running.");