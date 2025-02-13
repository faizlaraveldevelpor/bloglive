import Mongoose from'mongoose'
export let terms_Schema=new Mongoose.Schema({
    content:{
        type:Array,
    }
})
export let  Term_Conditions= Mongoose.model('terms',terms_Schema)