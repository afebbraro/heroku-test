var http = require("http");
var port = process.env.PORT || 1337; // Sets the port to whatever the env var is, if there isn't one then set to 1337
var hostname = '127.0.0.1';

http.createServer(function (request, response) {
    response.end('Hello World!');
}).listen(port, hostname, function() {
    console.log("Server running at http://" + hostname + ':' + port + '/');
});
