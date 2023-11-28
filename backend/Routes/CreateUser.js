const express = require("express");
const router = express.Router();
const User=require("../models/User");
const {body,validationResult}=require('express-validator');
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtSecret="Mynameisudontknow#";

router.post("/createuser",[body('email').isEmail(),body('password','Incorrect Password').isLength({min:1})],async(req,res)=>{
    // res.json({success:true});
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const salt=await bcrypt.genSalt(10);
    let secPassword=await bcrypt.hash(req.body.password,salt);
    try{
        await User.create({
            name:req.body.name,
            password:secPassword,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true});
    }catch(error){
        console.log(error);
        res.json({success:false});
    }

})
module.exports=router;