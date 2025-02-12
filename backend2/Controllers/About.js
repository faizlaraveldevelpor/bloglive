import cloudinary from '../Config/Coludinery.js'
import Cloudinery from '../Config/Coludinery.js'
import { AboutModel } from '../Modules/AboutModel.js'
import { Disclamer_model } from '../Modules/Create_Disclamer.js'
import { Privacy_policy_model } from '../Modules/Privacy_policy_model.js'
import { Term_Conditions } from '../Modules/Term_conditions.js'
// import { Privacy_policy_model } from '../Modules/AboutModel.js'
export let update_About=async(req,res)=>{


    
    
    try {
     
        let content
        if (req.body.content!=="undefined") {
          content =JSON.parse(req.body.content)
        }
       let {title,cetagory,subcetagory,public_id}=req.body 
     let file=req.files

let find=await AboutModel.find()

console.log(file);

if (find.length!==0) {
    find[0].content[0].blocks.forEach(async element => {
        try {
            if (element.type=="Image") {
                let backend_pub_ID=element 
                console.log(backend_pub_ID);
                
                  await Cloudinery.v2.uploader.destroy(backend_pub_ID)
              }    
        } catch (error) {
            console.log(error);
            
        }
        });  
}



let result;



let image_index=0 

if (file.length!==0) {
    for (let i = 0; i < content.blocks.length; i++) {
        let url=`data:image/jpg;base64,${file[image_index]?.buffer.toString("base64")}`
        result= await cloudinary.v2.uploader.upload(url)

if (content.blocks[i].type=="Image") {
  
    
    content.blocks[i].data.file={
        url:result.secure_url,
        public_id:result.public_id
    }
    

// console.log(content.blocks[i]);


image_index++

    
}


}
}


   
let find_About= await AboutModel.find()



      let create_About=await AboutModel.findByIdAndUpdate(find_About[0]._id,{content:content},{new:true})
     
   

 
  
   res.status(200).json({success:true,"message":"created About page"}) 
    } catch (error) {
       console.log(error);
       
    }
}
export let getAbout_data=async(req,res)=>{
let find=await AboutModel.find()
res.status(200).json({success:false,"message":"data get",find})
}





export let update_privacy_policy=async(req,res)=>{


    
    
    try {
     
        let content
        if (req.body.content!=="undefined") {
          content =JSON.parse(req.body.content)
        }
       let {title,cetagory,subcetagory,public_id}=req.body 
     let file=req.files

let find=await Privacy_policy_model.find()

console.log(file);

if (find.length!==0) {
    find[0].content[0].blocks.forEach(async element => {
        try {
            if (element.type=="Image") {
                let backend_pub_ID=element 
                console.log(backend_pub_ID);
                
                  await Cloudinery.v2.uploader.destroy(backend_pub_ID)
              }    
        } catch (error) {
            console.log(error);
            
        }
        });  
}



let result;



let image_index=0 

if (file.length!==0) {
    for (let i = 0; i < content.blocks.length; i++) {
        let url=`data:image/jpg;base64,${file[image_index]?.buffer.toString("base64")}`
        result= await cloudinary.v2.uploader.upload(url)

if (content.blocks[i].type=="Image") {
  
    
    content.blocks[i].data.file={
        url:result.secure_url,
        public_id:result.public_id
    }
    

// console.log(content.blocks[i]);


image_index++

    
}


}
}


   
let find_About= await Privacy_policy_model.find()



      let create_About=await Privacy_policy_model.findByIdAndUpdate(find_About[0]._id,{content:content},{new:true})
     
   

 
  
   res.status(200).json({success:true,"message":"created Privacy policy"}) 
    } catch (error) {
       console.log(error);
       
    }
}
export let getprivacy_policy=async(req,res)=>{
let find=await Privacy_policy_model.find()
res.status(200).json({success:false,"message":"data get",find})
}





export let Disclamer=async(req,res)=>{


    
    
    try {
     
        let content
        if (req.body.content!=="undefined") {
          content =JSON.parse(req.body.content)
        }
       let {title,cetagory,subcetagory,public_id}=req.body 
     let file=req.files

let find=await Disclamer_model.find()

console.log(file);

if (find.length!==0) {
    find[0].content[0].blocks.forEach(async element => {
        try {
            if (element.type=="Image") {
                let backend_pub_ID=element 
                console.log(backend_pub_ID);
                
                  await Cloudinery.v2.uploader.destroy(backend_pub_ID)
              }    
        } catch (error) {
            console.log(error);
            
        }
        });  
}



let result;



let image_index=0 

if (file.length!==0) {
    for (let i = 0; i < content.blocks.length; i++) {
        let url=`data:image/jpg;base64,${file[image_index]?.buffer.toString("base64")}`
        result= await cloudinary.v2.uploader.upload(url)

if (content.blocks[i].type=="Image") {
  
    
    content.blocks[i].data.file={
        url:result.secure_url,
        public_id:result.public_id
    }
    

// console.log(content.blocks[i]);


image_index++

    
}


}
}


   
let find_About= await Disclamer_model.find()



      let create_About=await Disclamer_model.findByIdAndUpdate(find_About[0]._id,{content:content},{new:true})
     
   

 
  
   res.status(200).json({success:true,"message":"created Disclamer"}) 
    } catch (error) {
       console.log(error);
       
    }
}
export let get_Disclamer=async(req,res)=>{
let find=await Disclamer_model.find()
res.status(200).json({success:false,"message":"data get disclamer",find})
}
export let term_create=async(req,res)=>{


    
    
    try {
     
        let content
        if (req.body.content!=="undefined") {
          content =JSON.parse(req.body.content)
        }
       let {title,cetagory,subcetagory,public_id}=req.body 
     let file=req.files

let find=await Term_Conditions.find()

console.log(file);

if (find.length!==0) {
    find[0].content[0].blocks.forEach(async element => {
        try {
            if (element.type=="Image") {
                let backend_pub_ID=element 
                console.log(backend_pub_ID);
                
                  await Cloudinery.v2.uploader.destroy(backend_pub_ID)
              }    
        } catch (error) {
            console.log(error);
            
        }
        });  
}



let result;



let image_index=0 

if (file.length!==0) {
    for (let i = 0; i < content.blocks.length; i++) {
        let url=`data:image/jpg;base64,${file[image_index]?.buffer.toString("base64")}`
        result= await cloudinary.v2.uploader.upload(url)

if (content.blocks[i].type=="Image") {
  
    
    content.blocks[i].data.file={
        url:result.secure_url,
        public_id:result.public_id
    }
    

// console.log(content.blocks[i]);


image_index++

    
}


}
}


   
let find_About= await Term_Conditions.find()



      let create_About=await Term_Conditions.findByIdAndUpdate(find_About[0]._id,{content:content},{new:true})
     
   

 
  
   res.status(200).json({success:true,"message":"created Terms and conditions"}) 
    } catch (error) {
       console.log(error);
       
    }
}
export let termsget=async(req,res)=>{
let find=await Term_Conditions.find()
res.status(200).json({success:false,"message":"data get disclamer",find})
}