require("../src/db/mongoose")
const Task = require("../src/models/task")

// Task.findByIdAndDelete("5ee3a8780d2e690f28572ad6")
//   .then(task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
//   })
//   .then(result => {
//     console.log(result)
//   })
//   .catch(e => console.log(e))

const deleteTaskAndCount = async id => {
  const user = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}

deleteTaskAndCount("5ee3a7b6dec6aa275cbc4c85")
  .then(count => console.log(count))
  .catch(e => console.log(e))
