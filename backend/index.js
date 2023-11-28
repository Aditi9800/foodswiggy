const express = require('express')
const app = express()
const port = 5000
const mongoDB=require("./db")
mongoDB();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept" 
    );
    next();
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// app.post("/api/createuser",async(req,res)=>{
//     // res.json({success:true});
//     try{
//         await User.create({
//             name:"Aditi",
//             password:"12",
//             email:"f@gmail.com",
//             location:"as"
//         })
//         res.json({success:true});
//     }catch(error){
//         console.log(error);
//         res.json({success:false});
//     }

// })


app.use(express.json());
app.use("/api",require("./Routes/CreateUser"));
app.use("/api",require("./Routes/LoginUser"));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})