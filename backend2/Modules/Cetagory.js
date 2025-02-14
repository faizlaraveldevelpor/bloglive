import mongoose from "mongoose"
let cetagory_Schema=new mongoose.Schema({
    cetagory:{
        type:String,
        required:true,
        unique:true
    },
    subCetagory:[{
        type:String, 
        required:true,
    }],
blogs:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"blog"
}]

})
export let cetagory_model=mongoose.model("cetagory",cetagory_Schema)
