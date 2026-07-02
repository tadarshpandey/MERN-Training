

find()

sort()

limit()

db.student.find().skip().limit()


db.student.countDocuments()
db.student.distinct("marks")

db.student.aggregate([
    {
        $group: {
            _id: "",
            totalMarks: {$sum: "$marks"}
        }
    }
])

db.student.aggregate([
    {
        $group: {
            _id: null,
            average: {$avg: "$marks"}
        }
    }
])

db.student.aggregate([
    {
        $sort: {$marks: -1}
    },
    {
        $limit: 2
    }
])

 db.student.aggregate([
    {
        $sort: {marks: -1}
    },
    {
        $limit: 2
    }
])



db.students.countDocument() //total document in collection 

db.students.insertOne({name:"jyotika" , rollno :101}) //COLLECTIN "students created" 


db.createCollection("students", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "rollno"],
      properties: {
        name: { 
          bsonType: "string" 
        },
        rollno: { 
          bsonType: "int", 
          minimum: 1 
        },
        marks: { 
          bsonType: "double" 
        }
      }
    }
  }
})

