import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
function Breaking_news() {
  
  
    
 let bloga_data=useSelector((state)=>state.Api_data_slice.blogs_data)
    
    let [value,setvalue]=useState(0)
    
 if (bloga_data) {
  if(bloga_data.get_blog?.length<10) return 
 }
 

    let increament=()=>{
        if(value<bloga_data.get_blog.length*130){
          setvalue((perv)=>perv+260)
        }else{
          setvalue(0)
        }
    }
    let decriment=()=>{
     value!==0? setvalue((perv)=>perv-150):""
    }
  
   
    
    
  return (
    <div className="border-b pl-1   pr-10 w-[800px] lg:w-[1100px] flex flex-col justify-center    ">
         
    <div className="pt-3 overflow-hidden ">
   
    <span className="text-[12px] text-white bg-red-700 w-fit px-2 select-none py-[0.5px]  ">Breaking</span>
   <div className="flex gap-x-12 my-5 items-center overflow-hidden relative  ">
  <div className="flex      ">
  <span className="w-8 h-8 cursor-pointer active:bg-slate-500 rounded-full bg-gray-400 text-white text-[15px] flex items-center justify-center shadow-inner shadow-black absolute  z-10 bottom-4 left-[2%]   
  " onClick={()=>decriment()}><IoMdArrowBack/></span>
  <span  className="w-8 cursor-pointer active:bg-gray-500 h-8 rounded-full bg-gray-400 text-white text-[15px] flex items-center justify-center shadow-inner shadow-black absolute left-[93%] bottom-4 z-10
  " onClick={()=>increament()}><IoMdArrowForward/></span>
  </div>
  <div className="w-[100px] flex gap-x-3 md:gap-0 duration-300 md:ml-0 ml-10 " style={{
    translate:`-${value}%`
  }}>
  {
        bloga_data&&
        bloga_data?.get_blog.map((data,i)=>{
        
        let d=new Date(data.createdAt).toDateString()
            
            return(
                <>
          <Link to={`/single/blog/${data._id}/${data?.Slug?data?.Slug:"Slug"}`}>
          <div className="flex flex-col min-w-[170px] border-l pl-2" key={i} >
                
                <p className="text-[10px] text-gray-500 select-none">{d}</p>
                <h4 className="text-[10px] font-bold cursor-pointer hover:underline">{data.title.substring(0,80)}</h4>
                            </div>
          
          </Link>
                </>
            )
        })
    }
  </div>
    </div>
    </div>
</div>
  )
}

export default Breaking_news