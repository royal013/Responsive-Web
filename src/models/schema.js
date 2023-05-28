const mongoose=require("mongoose");
const validator=require("validator");


const userSchema= mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email.");
            }
        }
    },
    phone:{
        type:Number,
        require:true
    },
    message:{
        type:String,
        require:true
    }
    

})

const User=mongoose.model("User",userSchema);
module.exports=User;