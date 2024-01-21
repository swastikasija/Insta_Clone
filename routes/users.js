const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/instaclone");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  posts: [{ type:mongoose.Schema.Types.ObjectId, ref: "post" }]
});

console.log("Swastik Here");

userSchema.plugin(plm)

module.exports = mongoose.model("user", userSchema)