const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use("/", require("./routes/userAuthRoutes"));
app.use("/", require("./routes/appointmentRoutes"));

const port = 8000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
