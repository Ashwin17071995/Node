var client = require("mongodb")

dburl = "mongodb://localhost:27017/"



client.connect(dburl, function(err,db){
if(err)
{
    throw err
}
console.log("Database created")

var database = db.db("nodemongo")

database.createCollection("tutorial",function(err,res){
    if(err)
    {
        throw err;
    }
    else{
    console.log("collection created")
    }
    db.close()
})

})