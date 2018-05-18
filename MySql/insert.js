var mysqldb = require('mysql')

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
        var sql = "insert into friends (id,name,location) values (1,'Ashwin','chennai')";

        connection.query(sql, function(err,suc){
           if(err)
           {
               throw err;
           }
           else{
               console.log("Value inserted");
           }
        })
    }
})