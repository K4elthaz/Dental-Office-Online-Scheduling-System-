const express = require("express");
const router = express.Router();
const cors = require("cors");
const { test, registerUser, loggedInUser, getProfile,logoutUser } = require("../controllers/userAuthController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", test)
router.post("/register", registerUser)
router.post("/login", loggedInUser)
router.get("/user", getProfile)
router.post("/logout", logoutUser)
module.exports = router;
