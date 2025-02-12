import Mongoose from'mongoose'
let AboutSchema=new Mongoose.Schema({
    content:{
        type:Array,
    }
})
export let AboutModel= Mongoose.model('About',AboutSchema)