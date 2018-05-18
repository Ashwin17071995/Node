var http = require('http')
var file = require('fs')

var server = http.createServer(fileserver).listen(8888)

function fileserver(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("fs module")

    file.readFile('india.html',function(err,data)
{
    if(err)
    {
        console.log("error - "+err);
    }
    res.write("<br>")
    res.write(data)

   file.writeFile("bharat.html",data, function(err){
       console.log (err);
   })

    res.end()
})
    
}

