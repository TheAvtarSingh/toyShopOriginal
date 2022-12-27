var express = require("express");
var router = express.Router();
// var mongoose = require('mongoose');
const admin = require("../models/admins");
const bcrypt = require("bcrypt");

router.post("/login", function (req, res, next) {
  // console.log(mongoose.connection.readyState)
 /*  bcrypt.compare('mypassword', hash, function(err, result) {
    if (err) { throw (err); }
    console.log(result);
}); */

  admin
    .find({ username: req.body.username })
    .exec()
    .then((result) => {
      if (result.length < 1) {
        return res.json({ success: false, message: "User Not Found" });
      }
      const admin = result[0];
      bcrypt.compare(req.body.password,admin.password,function(err,ret){
        if(ret===true){
            /* console.log(ret);
            console.log(err);
            console.log(req.body.password);
            console.log(admin.password); */
            return res.json({success:true,message:"Login Successful."});
           
        }else{
            /* console.log(ret);
            console.log(err);
            console.log(req.body.password);
            console.log(admin.password); */
            return res.json({success:false,message:"Password Not match!!"})
        }
      })
    })
    .catch(err=> {
        res.json({ success: false, message: "Authentication Failed" })
    })
    
  //   res.json("Login Works");
   } )

router.post("/register", function (req, res, next) {
  // console.log(mongoose.connection.readyState)
  bcrypt.hash(req.body.password, 10, function (err, hash) {
    if (err) {
      return res.json({ success: "false", message: "Hash Error" });
    } else {
      let adminObj = new admin({
        username: req.body.username,
        password: hash,
      });
      adminObj
        .save()
        .then((_) => {
          res.json({ success: true, message: "Admin created" });
        })
        .catch((err) => {
          if (err.code === 11000) {
            return res.json({
              success: false,
              message: "Email Already Exists",
            });
          }
          res.json({ success: false, message: err });
        });
    }
    // Store hash in your password DB.
  });

  /* 
  let adminObj = new admin({
    username:req.body.username,
    password:req.body.password
  }); */

  /* adminObj.save(function(err,adminObj){
    if(err){
        res.send({ status:500, message: "Authentication Failed",AdminStatus:adminObj });
    }else{
        res.send({ status:200, message: "Admin Created" });
    }
  }) */
  //   res.json("Login Works");

  /* adminObj.save()
.then((_) => {
    res.json({ success: true, message: "Admin created" });
  }).catch((err)=>{
    if(err.code===11000){
        return res.json({success:false,message:"Email Already Exists"})
    }
    res.json({success:false,message:err})
  }); */
});

module.exports = router;
