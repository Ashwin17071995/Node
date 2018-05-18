var mysqldb = require('mysql')
var data = null;
var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'fromnode'
})

connection.connect(function(err){
    if(err)
    {
        throw err
    }
    else{
        console.log("Connected to Mysql server");        
        var sql = "select * from friends";

        connection.query(sql, function(err,result,suc){
           if(err)
           {
               throw err;
           }
           else{
               console.log(JSON.stringify(result));
               data = JSON.stringify(result);
           }



           function serverFunction(req,res){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write("JSON from server");
            res.write("<br>");
            res.write(data);
            res.end();
            }
            
            server.listen(6565); 
            
        })
    }
})