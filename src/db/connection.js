const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/good")
.then(()=>{
    console.log("Connection Successful.")
})
.catch((err)=>{
    console.log(err);
})