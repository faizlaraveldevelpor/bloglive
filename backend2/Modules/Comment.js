import mongoose from "mongoose"
let comment_schema= new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
   blog:{ 
    type:mongoose.Schema.Types.ObjectId,
    ref:'blog'
}
})
 export let coment_model=mongoose.model("comment",comment_schema)
