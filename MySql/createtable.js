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
        var sql = "create table friends (name varchar(32),id int, location varchar(32))";

        connection.query(sql, function(err,suc){
           if(err)
           {
               throw err;
           }
           else{
               console.log("Table created");
           }
        })
    }
})