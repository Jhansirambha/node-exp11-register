// server11.js
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb+srv://jhansirambha:J05%407@collegetalenthub.47hm9a4.mongodb.net/student");

const User = mongoose.model("User", new mongoose.Schema({
  email: String,
  password: String
}));

const app = express();
app.use(express.json());

// Register
app.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);
  const user = await User.create({ email: req.body.email, password: hashed });
  res.json(user);
});

app.listen(3000, () => console.log("Register API running..."));
