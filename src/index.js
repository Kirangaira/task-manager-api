const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Get requests disabled")
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send("Service under maintenance, please try out sonn!")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const jwt = require("jsonwebtoken")

// const myFunction = async () => {
//   const token = jwt.sign({ _id: 12345 }, "thisismynodecourse", { expiresIn: "7 days" })
//   console.log(token)
//   const data = jwt.verify(token, "thisismynodecourse")
//   console.log(data)
// }
// myFunction()

// const pet = {
//   name: "Hal",
//   age: 20
// }

// pet.toJSON = function () {
//   // console.log(this)
//   return {}
// }
// console.log(JSON.stringify(pet))

/* File Uploads */

const multer = require("multer")
const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("Please upload a word document"))
    }
    cb(undefined, true)
  }
})

app.post(
  "/upload",
  upload.single("upload"),
  (req, res) => {
    res.send()
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  }
)

app.listen(port, () => {
  console.log("Server is running on " + port)
})

// const Task = require("./models/task")
// const User = require("./models/user")

// const main = async () => {
//   // const task = await Task.findById("5ee5c60ebb3ae82100816ded")
//   // await task.populate("owner").execPopulate()
//   // console.log(task.owner)

//   // const user = await User.findById("5ee5c603bb3ae82100816deb")

//   // await user.populate("tasks").execPopulate()
//   // console.log(user.tasks)
// }

// main()
