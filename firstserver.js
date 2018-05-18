var httpVariable = require('http');

var server = httpVariable.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/html'})
    response.write("Hello from server")
    response.end();
})


server.listen(8888);