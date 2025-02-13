
 import { create_cetagory, delete_cetagory, update_subcetagory,update_cetagory, get_cetagory, create_subcetagory, one_cetagory_get, delete_subcetagory }  from "../Controllers/Cetagory.js"
import express from "express"
import  multer from "multer"
 let Cetagory_routes=express.Router()
let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
    cb(null,'uploads/') 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
      }
});
const upload = multer({ storage: storage });

Cetagory_routes.post('/create/cetagory',create_cetagory) 
Cetagory_routes.delete('/delete/cetagory/:cetagory',delete_cetagory)
Cetagory_routes.delete('/delete/subcetagory/:cetagory',delete_subcetagory)
Cetagory_routes.put('/update/subcetagory',update_subcetagory)
Cetagory_routes.put('/update/cetagory',update_cetagory) 
Cetagory_routes.get('/cetagory/',get_cetagory)
Cetagory_routes.post('/create/subcetagory',create_subcetagory)
Cetagory_routes.post('/single/cetagory',one_cetagory_get)
 
   
export default Cetagory_routes