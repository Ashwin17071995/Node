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
        var sql = "insert into friends (id,name,location) values ?"
        var records = [
            [3,'aa','aaaa'],
            [4,'bb','bbbb'],
            [5,'cc','cccc'],
            [6,'dd','dddd'],

        ]

        connection.query(sql,[records],function(err,suc){
           if(err)
           {
               throw err;
           }
           else{
               console.log("Values inserted");
           }
        })
    }
})