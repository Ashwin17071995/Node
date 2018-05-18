var httpVariable = require('http')
var currentDate = require('./datelibrary')

var server = httpVariable.createServer(function(request,response){

    response.writeHead(200,{'Content-Type':'text/html'})
    response.write("Hello from server")
    response.write("<br>")
    var cd = currentDate.myDate()
    response.write(cd);
    response.end();
})


server.listen(8888);