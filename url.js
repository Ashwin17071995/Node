var http = require('http');

var server1 = http.createServer(serverfunction)

function serverfunction (req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("working with url")
    res.write("<br>")
    res.write(req.url)
    res.end()
}

server1.listen(8889)