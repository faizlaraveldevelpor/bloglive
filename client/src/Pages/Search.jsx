import { IoSearchOutline } from "react-icons/io5";
import { useSearchQuery } from "../Redux/Api";
import {  useState } from "react";
import {Link} from 'react-router-dom'
function Search() {

  let [search_state,setsearch]=useState()
  let {data}=useSearchQuery(!search_state?"":search_state)
  
    console.log(data);
  let search_btn=()=>{
   
  }
  return (
    <>
  <section className="w-full px-2 flex flex-wrap ">
    <div className="flex  mt-7 items-center gap-x-5">
      <span className="text-[20px] font-semibold md:ml-[150px] ml-5">Search</span>
      <span className="w-full flex flex-wrap" >
        <input type="text" className="  md:w-[500px] lg:w-[600px]  xl:w-[700px] w-[87%] border outline-none h-[40px] rounded-md flex flex-wrap px-4 "  placeholder="what i can help you find tody"  onChange={(e)=>setsearch(e.target.value)}/>
        <IoSearchOutline className="  text-[20px] relative right-10 top-2  " onClick={()=>search_btn()}/>
      </span>
    </div>
   
  </section>
  <div className="min-h-screen w-full md:mx-36 ml-2 flex flex-col flex-wrap mt-10 overflow-y-scroll">
{data&&
  data?.find_blog.map((data)=>{
    return(
      <>
    <Link to={`/single/blog/${data._id}`}>
    <div className="flex items-center gap-4">
        <div className="mb-5">
          <img src={data?.image[0]} alt="" className="w-[150px] border" />
        </div>
        <div>
          {data?.title}
        </div>
      </div>
    </Link>
      </>
    )
  })
}
  </div>
  </>
  ) 
}

export default Search