import { FaRegSave } from "react-icons/fa";
import { useDraftMutation } from "../Redux/Api";
import { useParams } from "react-router-dom";
import {toast} from 'react-toastify'
import { useEffect } from "react";
function Draft() {
  let {id}=useParams()
  let [fnc,{data}]=useDraftMutation()
  let local_storage=JSON.parse(localStorage.getItem("user"))||[]
  let blog_draft=()=>{
    if (local_storage?.length==0) {
      return toast.error("please login first")
     } 
 
    fnc(id)
    console.log(data);
    
 
  }
  useEffect(()=>{
  if (data) {
   
    toast.success(data.message)
  }
  },[data])
  return (
    <div>
      <FaRegSave className="text-[23px] cursor-pointer"  onClick={()=>blog_draft()}/>
    </div>
  )
}

export default Draft