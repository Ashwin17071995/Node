var mysqldb = require('mysql')

var connection = mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:''
})

connection.connect(function(err){
    if(err)
    {
        throw err
    }
    else{
        console.log("Connected to Mysql server");
        connection.query("Create database fromnode", function(err,suc){
            if(err)
            {
                throw err
            }
            else{
                console.log("Database created")
            }
        })
    }
})