require("../src/db/mongoose")
const User = require("../src/models/user")

// User.findByIdAndUpdate("5ee37ce640f73e1dd89ebcb3", { age: 1 })
//   .then(user => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
//   })
//   .then(count => {
//     console.log(result)
//   })
//   .catch(e => console.log(e))

const updateAgeandCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
  return count
}

updateAgeandCount("5ee37a8b628c8e3a142d43b2", 3)
  .then(count => console.log(count))
  .catch(e => console.log(e))
