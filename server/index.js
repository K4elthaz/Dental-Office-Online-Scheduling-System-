const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

var routeruser = require("./routes/user");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL);

app.use("/user", routeruser);

app.listen(8080, () => {
  console.log("server is running");
});
