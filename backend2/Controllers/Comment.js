import { blog_model } from "../Modules/BlogModel.js"
import { coment_model } from "../Modules/Comment.js"
import { user_model } from "../Modules/UserModel.js"

export let create_comment=async(req,res)=>{
let {id}=req.params
let {text}=req.body
console.log(text);

console.log(req.body);
if (!text) {
    return res.status(401).json({success:false,"message":"enter text"})
}
let create_coment=await coment_model.create({text:text,blog:id,user:req.user})
await blog_model.findByIdAndUpdate(id,{$push:{comments:create_coment._id}})
await user_model.findByIdAndUpdate(req.user,{$push:{comments:create_coment._id}})
res.status(200).json({success:true,"message":"comment created",create_coment})
}
export let delete_comment=async(req,res)=>{
let {id}=req.params
let {blog_id}=req.body
let delete_comment=await coment_model.findByIdAndDelete(id)
await blog_model.findByIdAndUpdate(blog_id,{$pull:{comments:id}},{new:true})
await user_model.findByIdAndUpdate(req.user,{$pull:{comments:id}},{new:true})
res.status(200).json({success:true,"message":"comment created",delete_comment})
}