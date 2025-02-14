import { useBlogsQuery, useDelete_blogMutation } from "../../Redux/Api";
import {toast} from 'react-toastify'
import { useEffect } from "react";
function Delete() {
let {data}=useBlogsQuery()
let [fnc,{data:dele_blog_data}]=useDelete_blogMutation()
let delete_blog=(id)=>{
    fnc(id)
  
}
useEffect(()=>{
    if (dele_blog_data) {
        if (dele_blog_data.success==false) {
            toast.error(dele_blog_data.message)
        }
        if (dele_blog_data.success==true) {
            toast.success(dele_blog_data.message)
        }
    }
},[dele_blog_data])
  return (
    <div>
        <div>
            <h2 className="text-center py-10 text-[25px] font-bold">Delete blogs</h2>
            <div className="flex flex-col px-20  gap-10  flex-wrap ">
                {
                    data&&
                    data?.get_blog.map((data)=>{
                        return(
                            <>
                            
                            <div className="flex items-center justify-between border-b">
                                <div className="flex items-center">
                                <span className="w-[100px]">
                                    <img src={data?.image} alt="" className="w-[200px] max-h-[100px] mb-4"/>
                                </span>
                                <span className="ml-5">{data?.title}</span>
                                </div>
                                <div>
                                     <button className="bg-black text-white w-[80px] rounded-xl" onClick={()=>delete_blog(data._id)}>Dekete</button>
                                </div>
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

export default Delete