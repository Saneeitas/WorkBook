/** @format */
require("dotenv").config();
const cors = require("cors")
const express = require("express");
const mongoose = require('mongoose')
const userRoutes = require("./routes/user")


const app = express();

app.use(cors())
app.use(express.json())

app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));



mongoose.set("strictQuery", true);
mongoose.connect("mongodb://localhost:27017/userDB");



//Routes
app.use("/api",userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
