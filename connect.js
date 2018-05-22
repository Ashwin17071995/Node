var client = require("mongodb")

dburl = "mongodb://localhost:27017/nodemongo"

client.connect(dburl, function(err,db){
if(err)
{
    throw err
}
console.log("Database creted")
db.close()

})