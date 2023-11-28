const express = require("express");
const router = express.Router();
const User=require("../models/User");
const {body,validationResult}=require('express-validator');

router.post("/loginuser",[body('email').isEmail(),body('password','Incorrect Password').isLength({min:1})],async(req,res)=>{
    // res.json({success:true});
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    let email=req.body.email;
    try{
        
        let userData=await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors:"User not found"});
        }
        if(req.body.password!==userData.password){
            return res.status(400).json({errors:"Try Logging with corretct credentials"});
        }
        res.json({success:true});
    }catch(error){
        console.log(error);
        res.json({success:false});
    }

})
module.exports=router;