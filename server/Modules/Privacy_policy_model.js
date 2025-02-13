import Mongoose from'mongoose'
export let Privacy_policy=new Mongoose.Schema({
    content:{
        type:Array,
    }
})
export let  Privacy_policy_model= Mongoose.model('privacy',Privacy_policy)
