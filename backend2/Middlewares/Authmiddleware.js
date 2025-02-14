import JWT from "jsonwebtoken"
import {user_model} from '../Modules/UserModel.js'
let Auth=async(req,res,next)=>{
    if(!req.cookies.Token)return res.status(400).json({success:false,"message":"please login first"})
    
    
    
  try {
    let verify=await JWT.verify(req.cookies.Token,process.env.TOKEN)
    
    
   req.user=verify.id
   
   
  } catch (error) {
    console.log(error);
    
  }
  next()

}


export let Admin_check=async(req,res,next)=>{
let check=await user_model.findById(req.user)
if (check.role=="user") {
  return res.status(200).json({success:false,"message":"you are not admin"})
}else{
  next()
}
}

export default Auth   