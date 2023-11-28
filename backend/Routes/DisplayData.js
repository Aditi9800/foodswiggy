const express = require("express");
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try {
        // console.log(global.food_items);  //giving array on hitting this api on thunder
        res.send([global.food_items,global.foodCategory]);
    } catch (error) {
        console.error(error.message);
        res.send("Server Error from Aditi in displaying card data")
    }
})


module.exports=router;