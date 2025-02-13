import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { comment_fnc } from "../Redux/ALL_moduls._Slice";
import { useCommentMutation, useDelete_commMutation } from "../Redux/Api";
import {useParams} from 'react-router-dom'
import {  useState } from "react";
import {toast} from 'react-toastify'
function Comment() {
  let local_storage_data=JSON.parse(localStorage.getItem("user"))||[]
  let [comment_del]=useDelete_commMutation()
    let disptach=useDispatch()
    let single_blog_data=useSelector((state)=>state.Api_data_slice.single_blog_data)
    let [comment_data,setcomment_data]=useState("")
    let {id}=useParams()
     let [fnc]=useCommentMutation()
     
   let create_comment=()=>{
    if (local_storage_data) {
      if (local_storage_data.length==0) {
        toast.error("please login first")
      }
    }
     fnc({id,comment_data})
   
    setcomment_data({"text":""})
    
   }



// useEffect(()=>{
//     if (data) {
//         if (data.success==true) {
//             console.log("faiz");
//             return setcomment_data(null)
            
//         }
//     }
// },[isSuccess])

let delete_comment=(id,blog_id)=>{
  comment_del(id,blog_id)
}


 
  return (
    <div className="w-full flex justify-center h-full   ">
        <div className="border rounded-md bg-slate-50 h-full md:w-[800px] w-[90%] flex justify-center relative ">
        <div className="absolute md:left-[96%] left-[92%] top-1">
           <span className="text-[28px] cursor-pointer" onClick={()=>disptach(comment_fnc(false))}>
           <IoClose/>
           </span>
        </div>
            <div className="md:px-4">
                <h3 className="text-center mt-5 font-bold text-[25px]  font-semibold]">Comments</h3>
           <div className="flex items-center flex-wrap justify-center  ">
           <span>
                <input type="text" className="md:w-[500px] w-[90%] border outline-none m-5 h-[45px] px-3 rounded-md text-[20px] font-semibold" placeholder="Enter your comment"  value={comment_data.text}  onChange={(e)=>setcomment_data({"text":e.target.value})} />
              </span>
              <span>
              <button className="bg-black text-white h-[40px] px-2 rounded-md text-[17px]" onClick={()=>create_comment()}>Add your comment</button>
              </span>
              <div className="w-full md:h-[120px] h-[200px] px-10 mt-2 overflow-y-scroll cusSc    ">
               {
                single_blog_data &&
                single_blog_data?.blog_get?.comments.map((data)=>{
                  console.log(data);
                  
                    return(
                        <>
              
                       <div className="mb-6">

                       <div className=" flex  items-center justify-between w-full ">
                         <div className="flex items-center gap-2">
                         <span><img src={local_storage_data?.image} alt="img" className="w-[40px] h-[40px] rounded-full object-cover" /></span>
                         <span><h3>{data?.user?.name}</h3></span>
                         </div>
                         <div className={`${data.user._id==local_storage_data.id?"block":"hidden"}`} onClick={()=>delete_comment(data._id,data.blog)}>
                          <button className="w-[100px] bg-black text-white rounded-lg">Delete</button>
                         </div>
                      </div>
                     
                      <div className="mt-3">
                      <span>
                          <h3>{data?.text}</h3>
                      </span>
                      </div>

                       </div>
                        
                        </>
                    )
                })
            
               }
            </div>
           </div>
            </div>
            
        </div>
    </div>
  )
}

export default Comment