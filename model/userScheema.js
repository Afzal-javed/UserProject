const mongoose=require('mongoose');
const userScheema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number,

    },
    profession:{
        type:String,
        required:true
    }
},{timestamps:true})

const User=mongoose.model('User',userScheema)
module.exports=User 