show dbs
use student
db.subjects.insert({"name":"AI"})

db.dropDatabase()

use cts
db.createCollection("location")
show dbs
show collections
db.createCollection("dept")
db.location.drop()

db.associates.insert({
  "id":1,
  "fname":"aaa",
  "age":22
})

db.associates.find()

db.associates.insert(
[{   
    "id" : 1, 
    "fname" : "aaa", 
    "age" : 22
},
{ 
    "id" : 2, 
    "fname" : "bbb", 
    "age" : 23
},
{ 
    "id" : 3, 
    "fname" : "ccc", 
    "age" : 24
}
]
)


show collections

db.associates.findOne() 

db.associates.find({
 "fname":"bbb" 
})

db.associates.find({
  "age":{$lt:23}
  })
  
  
  db.associates.find({
  "age":23,"fname":"bbb"
  })
  
  db.associates.find({
    "age":{$gt:22},  $or:	[{"age":23},{"fname":"aaa"}]
  })
  
  db.associates.update([
  {
  	"_id":"5b02690468d3a7692fe4f517",
  	"id":4,
  	"fname":"ddd",
  	"age":25,  
  	},
  	{
  	 "_id":"5b02692968d3a7692fe4f518",
  	"id":5,
  	"fname":"eee",
  	"age":26,
  	}
  	]
)

db.associates.update(
  {
  	"_id":ObjectId("5b02690468d3a7692fe4f517"),
  },
  {
    $set:{
  	  "id":4,
  	  "fname":"ddd",  
  	  "age":25
    }
  	}  	
)

db.associates.find()

db.associates.update(
  {
  	"fname":"eee",
  },
  {
    $set:{
  
  	  "id":"5.0"
    }
  	},
  	{multi:true}  	
)

db.associates.save({
    "_id" : ObjectId("5b02692968d3a7692fe4f518"), 
    "id" : "5.0", 
    "fname" : "eee", 
    "age" : 28
})

db.associates.remove({
  "fname":"aaa"
})

db.associates.remove({
	"age":{$gt:26}
},1
)

db.associates.find({},{"_id":0, "id":1, "fname":1}).skip(2).limit(3)

db.associates.find()

db.associates.find({},{"_id":0, "id":1, "fname":1}).sort({
  "id":1
})
db.associates.aggregate(
[
	{
	  $group:
	  	{"_id":"$gender",MaxAge:{$max:"$age"}
	  	}
	}
]
)


db.associates.save(
[
{
  	"_id":"5b02690468d3a7692fe4f517",
  	"id":1,
  	"fname":"aaa",
  	"age":25, 
  	"gender":"male" 
  	},
  	{
  	 "_id":"5b02692968d3a7692fe4f518",
  	"id":2,
  	"fname":"bbb",
  	"age":26,
  	"gender":"male"
  	}
  	{
  	"_id":"5b02690468d3a7692fe4f517",
  	"id":3,
  	"fname":"ccc",
  	"age":25, 
  	"gender":"female" 
  	},
  	{
  	 "_id":"5b02692968d3a7692fe4f518",
  	"id":4,
  	"fname":"ddd",
  	"age":26,
  	"gender":"female"
  	}
],
{multi:true}
)




use lottery

for(i=0;i<100000;++i)
{
  db.participants.insert({"id":i,"name":"aaaa"})  
}

db.participants.find()

db.dropDatabase()



Math.floor(Math.random()*100)
