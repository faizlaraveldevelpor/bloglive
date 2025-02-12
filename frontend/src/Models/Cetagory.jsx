import { useEffect, useState } from "react";
import {  useGet_cetagoryQuery } from "../Redux/Api"
import { Link } from "react-router-dom";
import { cetagory_toggle_fnc } from "../Redux/ALL_moduls._Slice";
import { useDispatch } from "react-redux";

 function Cetagory() {
  let dispatch=useDispatch()
  let {data}=useGet_cetagoryQuery()
 let [index,setindex]=useState(1)
 let [filter_array,setfilter_array]=useState()




useEffect(()=>{
if (data) {
  setfilter_array(data.getCetagory[index])
}
},[index])

  
  return (
   
 <div className="bg-black text-white flex flex-col">
      <div className="flex  bg-black text-white gap-x-3  px-3    "  onMouseLeave={()=>{
      setfilter_array(null),
      setindex(null)
    }} >
      <div  onMouseDown={()=>{
      setfilter_array(null),
      setindex(null)
    }}   >
        {
          data&&
          data.getCetagory.map((data,i)=>{
            return(<>
           <Link to={`/blogs/${data.cetagory}`}>
           <span className="flex flex-col mb-3 pt-1 cursor-pointer " onMouseEnter={()=>setindex(i)} onClick={()=>dispatch(cetagory_toggle_fnc(false))} >
              {data.cetagory}
            </span>
           </Link>
            
            </>)
          })
        }
      </div>
      <div className="flex flex-col  "  >
      {
        filter_array&&
        filter_array.subCetagory.map((data,i)=>{
          return(
            <>
           <Link to={`/blogs/subcetagory/sub.${data}`}> <span className="flex flex-col mb-3 pt-1 cursor-pointer" key={i} onClick={()=>dispatch(cetagory_toggle_fnc(false))}>{data}</span></Link>
           
            </>
          )
         
        })
      }
     
      </div>
      
   </div>
   <div className="flex flex-col gap-6 mt-5 px-3 pb-3 text-[13px]">
<Link to={'/about'}><span className="cursor-pointer" onClick={()=>dispatch(cetagory_toggle_fnc(false))}>About us</span></Link>
    <Link to={'/privacy'}><span className="cursor-pointer" onClick={()=>dispatch(cetagory_toggle_fnc(false))}>Privacy policy</span></Link>
<Link to={"disclamer"}><span className="cursor-pointer" onClick={()=>dispatch(cetagory_toggle_fnc(false))}>Disclamer</span></Link>
<Link to={'/term'}><span className="cursor-pointer" onClick={()=>dispatch(cetagory_toggle_fnc(false))}>Terms condition</span></Link>
   </div>
 </div>
  )
}

export default Cetagory