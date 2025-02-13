 import express from "express"
import {connect_DB}  from"./Config/DB.js"
import cookie_parser from"cookie-parser"
import cors from"cors"
import dotenv from"dotenv"
import {User_routes } from"./Routes/UserRoutes.js"
import blog_routes  from"./Routes/BlogRoutes.js"
import Cetagory_routes from './Routes/cetagory_routes.js'
import {Basicpages_routes}  from "./Routes/Basic_pagesRoutes.js"
import cluster from 'node:cluster'
import os from 'os'

let app=express()
app.use(cors({
    origin:true,
    credentials:true
})) 
app.use(cookie_parser())
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
dotenv.config({path:"./Config/SC.env"})
app.use('/api/v1',User_routes)
     app.use("/api/v1",blog_routes)
 app.use("/api/v1",Cetagory_routes)
 app.use("/api/v1",Basicpages_routes)


 let cpu=os.cpus().length
 

 
if (cluster.isPrimary) {
    for (let i = 0; i < cpu; i++) {
        cluster.fork()
        
    }
}else{
    app.listen(process.env.PORT,()=>{
        console.log("server chall gaya hai");
        connect_DB()
    })     
}

  

  