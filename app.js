var http = require("http");
var port = process.env.PORT || 1337; // Sets the port to whatever the env var is, if there isn't one then set to 1337

http.createServer(function (request, response) {
    response.end('Hello World!');
}).listen(port, function() {
    console.log("Server running at http://sitename" + ':' + port + '/');
});
