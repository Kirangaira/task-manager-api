// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

//Destructing can be used
const { MongoClient, ObjectID } = require("mongodb")

const connectionURL = "mongodb://127.0.0.1/27017"
const databaseName = "task-manager"

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect")
  }

  const db = client.db(databaseName)

  // db.collection("users")
  //   .deleteMany({ age: 27 })
  //   .then(result => console.log(result))
  //   .catch(error => console.log(error))

  db.collection("tasks")
    .deleteOne({
      description: "Buy groceries"
    })
    .then(result => console.log(result))
    .catch(error => console.log(error))
})

//Initial code for insert operations in collections (Create)

// db.collection("users").insertOne(
//   {
//     name: "Jennifer",
//     age: 27
//   },
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert user")
//     }

//     console.log(result.ops)
//   }
// )

// db.collection("users").insertMany(
//   [
//     {
//       name: "Jen",
//       age: 28
//     },
//     {
//       name: "Mike",
//       age: 27
//     }
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert documents!")
//     }

//     console.log(result.ops)
//   }
// )

// db.collection("tasks").insertMany(
//   [
//     {
//       description: "Buy groceries",
//       completed: true
//     },
//     {
//       description: "Buy veggies",
//       completed: false
//     },
//     {
//       description: "Read newspapers",
//       completed: false
//     }
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert documents!")
//     }
//     console.log(result.ops)
//   }
// )

//Code for find operations (Reading data)

// db.collection("users").findOne({ name: "Jen" }, (error, user) => {
//   if (error) {
//     return console.log("Unable to fetch data!")
//   }

//   console.log(user)
// })

// db.collection("users").findOne({ _id: new ObjectID("5ee3239f36081c0458d12912") }, (error, user) => {
//   if (error) {
//     return console.log("Unable to fetch data!")
//   }

//   console.log(user)
// })

// db.collection("users")
//   .find({ age: 27 })
//   .toArray((error, users) => {
//     console.log(users)
//   })

// db.collection("users")
//   .find({ age: 27 })
//   .count((error, count) => {
//     console.log(count)
//   })

// db.collection("tasks").findOne({ _id: new ObjectID("5ee328d321759924c42515df") }, (error, task) => {
//   if (error) {
//     return console.log("Unable to fetch data!")
//   }
//   console.log(task)
// })

// db.collection("tasks")
//   .find({ completed: false })
//   .toArray((error, tasks) => {
//     console.log(tasks)
//   })

//Code for update operation (Updating documents)

// db.collection("users")
//   .updateOne(
//     { _id: new ObjectID("5ee32624d2db1e15048304b8") },
//     {
//       $inc: {
//         age: 1
//       }
//     }
//   )
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => {
//     console.log(error)
//   })

// db.collection("tasks")
//   .updateMany(
//     { completed: false },
//     {
//       $set: {
//         completed: true
//       }
//     }
//   )
//   .then(result => {
//     console.log(result)
//   })
//   .catch(error => {
//     console.log(errors)
//   })
