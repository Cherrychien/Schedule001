var http = require('http');
var Router = require('router');
var server;
var router = new Router();

server = http.createServer(function(req, resp) {
    router(req, resp, function(msg){
        if(!msg) {
            resp.writeHead(404);
        }
        else {
            console.log(msg.message, msg.stack);
            resp.writeHead(400);
        }
        resp.end('RESTful API Server is running!');
    });
});
server.listen(3000, function() {
    console.log('Listening on port 3000');
});