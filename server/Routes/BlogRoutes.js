import express from "express"
import multer from"multer"
import fs  from 'fs'
import path  from 'path'
import Auth, { Admin_check }  from "../Middlewares/Authmiddleware.js"
import { get_data_from_cetagory } from "../Controllers/Cetagory.js"
import { create_blog, delete_blog, draft_blog, get_draft, get_single_blog, getblog, like, premium_blogs, search, update_blog } from "../Controllers/Blog.js"
import { create_comment, delete_comment } from "../Controllers/Comment.js"
let blog_routes=express.Router()
let storage=multer.memoryStorage()
const upload = multer({ storage: storage }); 
  
blog_routes.post('/create',Auth,upload.fields([{name:"images"},{name:"image"}]),Auth,Admin_check,create_blog)
blog_routes.put("/update/:id",upload.fields([{name:"images"},{name:"image"}]),Auth,Admin_check,update_blog)
blog_routes.delete("/delete/:id",Auth,Admin_check,delete_blog)
blog_routes.get('/single/blog/:id',get_single_blog)
blog_routes.put('/like/:id',Auth,like)
blog_routes.get('/blogs/:current_page',getblog)
blog_routes.post('/blogs/premium/:current_page',premium_blogs)
blog_routes.post('/get/blogs/cetagory',upload.array("cetagory_name"),get_data_from_cetagory)
blog_routes.post('/create/comments/:id',Auth,create_comment)    
 blog_routes.put('/blog/draft/:id',Auth,draft_blog)
 blog_routes.get('/search/:title',search)
 blog_routes.delete('/delete/comment/:id',delete_comment)
 blog_routes.get('/get_draft/:id',get_draft)
 
export default blog_routes