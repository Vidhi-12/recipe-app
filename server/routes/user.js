const express = require("express");
const router = express.Router();
const { tokenGenerator } = require("../Bcrypt/token");
const bodyParser = require("body-parser");
const User = require("../models/User");
const authVerify = require("../Bcrypt/authVerify");
const { hashGenerate } = require("../Bcrypt/Hashing");
const { hashValidator } = require("../Bcrypt/Hashing");


router.post("/api/signup", async (req, res) => {
  try {
    console.log(req.body);
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      if(req.body.password === req.body.repeatPassword){
        const hashPassword = await hashGenerate(req.body.password);
        const user = await User.create({
        email: req.body.email,
        password: hashPassword,
      });
      res.status(200).json({
        status: "Success",
        user
      });
      }
      
      
    } else {
      res.status(400).json("Email id already exist");
    }
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});


router.get("/", (req, res) => {
  res.send("Working");
});


router.post("/api/signin", async (req, res) => {
  try {
    // console.log(req.body);
    // console.log(req.body);
    const existingUser = await User.findOne({ email: req.body.email });
    if (!existingUser) {
      res.status(400).json("Invalid Email id");
    } else {
      const checkUser = await hashValidator(
        req.body.password,
        existingUser.password
      );
      if (!checkUser) {
        res.status(400).json("Password is Invalid");
      } else {
        const token = tokenGenerator(existingUser.email);
        res.status(200)
          .json({
            status: "Success",
            details: {
              email: existingUser.email.split("@")[0],
            },token})
      }
    }
  } catch (e) {
    res.json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.get("/logout", async (req, res) => {
  res.clearCookie("jwt");
  // console.log("Logout successfully");
  res.redirect("/");
});


router.get("/protected", authVerify, (req, res) => {
  res.send("I am protected route");
});
module.exports = router;
