var client = require("mongodb")

dburl = "mongodb://localhost:27017/"



client.connect(dburl, function (err, db) {
    if (err) {
        throw err
    }else
    {
    console.log("Database created")
    }
    var database = db.db("nodemongo")

    var jsonobj = [
        {"gender":"male","name":"Aaaa","location":"CSK"},
        {"gender":"female","name":"Bbbb","location":"SRH"},
        {"gender":"male","name":"Cccc","location":"KKR"},
        {"gender":"male","name":"Dddd","location":"RR"}
    ]

    database.collection("tutorial").insertMany(jsonobj, function (err, res) {
        if (err) {
            throw err;
        }
        else {
            console.log("One document created")
        }
        db.close()
    })

})