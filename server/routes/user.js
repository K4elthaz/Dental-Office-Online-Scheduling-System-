const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const UserModel = require("./models/UserModel");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL);

app.post("/register", (req, res) => {
  console.log("Received registration request:", req.body); // Add this line for logging

  UserModel.create(req.body)
    .then((users) => {
      console.log("User created:", users); // Add this line for logging
      res.json(users);
    })
    .catch((err) => {
      console.error("Error creating user:", err); // Add this line for logging
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Incorrect Credentials");
      }
    } else {
      res.json("No data existed");
    }
  });
});
