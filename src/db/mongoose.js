const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// const me = new User({
//   name: "   Mike  ",
//   email: "Mike@12345.COM",
//   password: "mike1234"
// })

// me.save()
//   .then(() => {
//     console.log(me)
//   })
//   .catch(error => {
//     console.log(error)
//   })

// const task = new Task({
//   description: "    Read newspapers    "
// })

// task
//   .save()
//   .then(() => {
//     console.log(task)
//   })
//   .catch(error => {
//     console.log(error)
//   })
