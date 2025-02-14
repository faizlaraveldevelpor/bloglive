import Mongoose from'mongoose'
export let Disclamer=new Mongoose.Schema({
    content:{
        type:Array,
    }
})
export let  Disclamer_model= Mongoose.model('Disclamer',Disclamer)