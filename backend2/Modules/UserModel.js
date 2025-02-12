import mongoose from 'mongoose'
let user_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        default:"user"
    },
    password:{
        type:String,
        required:true
    },
    image:{
     type:String,
    },
    public_id:{
    type:String
    },
    blogs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog"
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"comment"
    }],
    likes_blog:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog"
    }],
    draft:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog"
    }],
    otp:{
        type:String,
        
    },

})
export let user_model=mongoose.model("user",user_schema)