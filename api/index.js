const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const UserModel = require('./user');
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb+srv://saiprajoth:tXXQ040QOsOaUt16@cluster1.mpntdrl.mongodb.net/?retryWrites=true&w=majority"
);
const salt = bcrypt.genSaltSync(10);
const secret = "sjfkjdk998dfjdhf"

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const newUser = new UserModel.create({username,password:bcrypt.hash(password, salt)});
    res.status(200).json('Registration successfull, please try login')
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.username) {
      // 7c.
      // Duplicate key error (username already exists)
      res
        .status(400)
        .json({
          error: "Username already exists. Please choose a different one.",
        });
    } else {
      // Other errors
      console.error(error);
      res
        .status(500)
        .json({ error: "Registration failed. Please try again later." });
    }
  }
});

app.post('/login',(req,res)=>{
  const username= body.req.username;
  const password= body.req.password;
  const UserDoc = User.findOne({username:username})
  if(UserDoc==null){
    res.status(400).json("user doesn't exist, try registering")
  }else{
    if(bcrypt.compare(password, UserDoc.password)){
      jwt.sign({username:username,id:UserDoc._id},secret,{},(err,token)=>{
        if(err)throw err;
        res.status(200).cookie('token',token).json('login successfull');
      })
      // res.status(200).json('login successfull');
    }else{
      res.status(400).json('incorrect password, please try again')
    }
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// tXXQ040QOsOaUt16
// mongodb+srv://saiprajoth:<password>@cluster1.mpntdrl.mongodb.net/?retryWrites=true&w=majority
