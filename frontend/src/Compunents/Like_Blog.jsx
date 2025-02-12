import {   useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { useLike_blogMutation } from "../Redux/Api";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {toast} from 'react-toastify'
function Like_Blog({data}) {
      let user_data=useSelector((state)=>state.All_moduls.login_user)
    let {id}=useParams()
    let [like_toggle,setlike_toggle]=useState(false)
    
     let [fnc,]=useLike_blogMutation()
    let like_functionality=()=>{  

      if (user_data) {
        if (user_data.length==0) {
         return toast.error("please login first")
        }
      
      }

      fnc(id)
      

    }


    let filter_like;
    if(data){
      filter_like=data?.blog_get?.likes.filter((data)=>{
       return data.includes(user_data?.id)
      })
    
    
      }
    

    
  return (
    <div>
        <span onClick={()=>setlike_toggle(!like_toggle)} className="flex">
        {filter_like&&
        !filter_like.length==1?<AiOutlineLike className="text-[23px] cursor-pointer    " onClick={()=>like_functionality()}/>:<AiFillLike className="text-[23px] cursor-pointer    " onClick={()=>like_functionality()}/>}
        {
          data&&
          <p>{data?.blog_get?.likes?.length}</p>
        }
        </span>
      
    </div>
  )
}

export default Like_Blog