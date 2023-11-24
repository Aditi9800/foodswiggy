const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://admin:test1234@cluster0.uvertd2.mongodb.net/swiggyDB";
// const mongoDB=async()=>{
//     await mongoose.connect(mongoURI,{useNewUrlParser:true},(err,result)=>{
//         if(err) console.log("---err");
//         else{
//             console.log("db connected")
//         }
//     })
// }
const mongoDB = async () => {
  await mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then((res) => {
      console.log("DB connected");
      const fetched_data = mongoose.connection.db.collection("food_items");
      const data = fetched_data.find({}).toArray();
      data.then(function (result) {
        // console.log(result); // "Some User token"    giving array
        //   console.log(data);       //giving object
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoDB;
