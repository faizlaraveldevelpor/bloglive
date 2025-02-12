import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from 'react';
function  Most_like_post() {
    let blog_data_useslactor=useSelector((state)=>state.Api_data_slice.blogs_data)
    
let [value,setvalue]=useState(0)
let [index_check,setindex_check]=useState(1)
   
  let max=1
blog_data_useslactor?.get_blog.forEach(element => {
    if (element?.likes?.length>max) {
        max=element?.likes?.length
    }
 
});

let decriment=()=>{
   
 value>=300? setvalue((perv)=>perv-300):""
  
  
}

let increament=()=>{
   
    if (length?.length>index_check) {
       
        setvalue((perv)=>perv+300)
        setindex_check((perv)=>perv+1)
    }else{
        setindex_check(1)
        setvalue(0)
    }
    // length?.length>index_check?setvalue((perv)=>perv+350): setindex_check(1)
console.log(value);


}

let length= blog_data_useslactor?.get_blog.filter((data)=>data?.likes?.length==max)
console.log(length);
return(
    <div className=" mt-10 ml-5">
                            <h3 className="font-bold text-[18px]  pb-2  text-start ">Most like blog</h3>
    <div className='flex overflow-hidden   w-[300px]   relative pb-8' >
        <div className='' >
           <div className='absolute top-[3%] z-50 left-[200px] flex gap-9 items-center mt-2'>
           <span className='text-[28px] cursor-pointer' onClick={()=>decriment()}><IoIosArrowDropleft/></span>
           <span className='text-[28px] cursor-pointer' onClick={(()=>increament())}><IoIosArrowDropright/></span>
           </div>
        </div>
  <div style={{translate:`-${value}px`}} className='flex duration-300'>
  {
        length&&
        length?.map((data)=>{
          
            
            return(
                <>
                <div className=" pt-3    ">
                    <Link to={`/single/blog/${data._id}/${data?.Slug?data?.Slug:"Slug"}`}>
                 <div className="  py-2  break-all  w-[300px] pt-12 flex flex-col items-center   ">
                    
                 <span className="">
                  <img src={data?.image} alt="" className="  w-[200px] h-[200px]  " />
                  </span>
                  <span className='w-[300px]'>
                    {data?.title?.substring(0,150)}
                  </span>
                 </div></Link>
                </div>
                </>
            )
        })
    }
  </div>
    </div>
    </div>
)
}

export default Most_like_post