var http = require('http')
var url = require('url')

var server = http.createServer(queryparam).listen(8888)

function queryparam(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("url queryparam")

    var myquery = url.parse(req.url,true).query

    var queryText1 = myquery.name1
    var queryText2 = myquery.loc
    
res.write("<br>")
res.write(queryText1+" "+queryText2)
res.end()
}