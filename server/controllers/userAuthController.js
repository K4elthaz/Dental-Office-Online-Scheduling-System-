const User = require("../models/users");
const { hashPassword, comparePassword } = require("../helpers/userAuth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("Hello World!");
};
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("Received Data:", req.body);

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: "Email is already in use" });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json( user );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const loggedInUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const match = await comparePassword(password, user.password);
      if (match) {
        jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET,{}, (err,token) => {
            if(err) throw err;
            res.cookie("token", token).json(user)
        })
      }
      if(!match){
        res.json({
            error: "Password is incorrect"
        })
      }

    } catch (error) {
      console.error(error);
      
    }
  };
  


const getProfile = (req, res) => {
  const { token } = req.cookies
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  test,
  registerUser,
  loggedInUser,
  getProfile,
};
