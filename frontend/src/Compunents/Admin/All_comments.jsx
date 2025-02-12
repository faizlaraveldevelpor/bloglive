import { useBlogsQuery, useDelete_commMutation } from "../../Redux/Api";
import {toast} from 'react-toastify'
import { useEffect } from "react";

function All_comments() {
    let {data}=useBlogsQuery()
     let [fnc,{data:delete_comment_data}]=useDelete_commMutation()
    let filter_commnets=data?.get_blog.filter((data)=>data.comments)
    
    useEffect(()=>{
    if (delete_comment_data) {
      if (delete_comment_data.success==false) {
        toast.error(delete_comment_data.message)
      }
      if (delete_comment_data.success==true) {
        toast.success(delete_comment_data.message)
      }
    }
    },[delete_comment_data])
  return (

    <div className="flex ml-20 pt-12 px-2 flex-col items-center ">
            <h3 className="text-center mb-7 font-bold text-[23px] ">All comments</h3>     
        <div className="flex flex-wrap gap-10 justify-center ">
        {filter_commnets&&
        filter_commnets.map((data)=>(

          data.comments.map((data2)=>{
            console.log(data2.text);
            
            return(
              <>
              <div className="flex flex-col items-center mb-10">  
                       
                  <div className=" px-10 ml-9 w-[280px] flex flex-col  ">
                  <div className=" mb-3 flex">
                      <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="" className="w-[30px] rounded-full h-[30px]" />
                    <div className="flex flex-col  flex-wrap">
                    <span className="font-bold ml-3">
                          {data2?.user?.name}
                      </span>
                    
                      
                    </div>
                  
                  </div>
                  <div className=" flex flex-col  ">
                      
                    <span className="w-full">
                    {data2?.text}
                    </span>
                      
                      </div>
              </div>
              <button className="mt-4 bg-black text-white w-[100px] rounded-lg font-bold " onClick={()=>{
                fnc(data2?._id,data?.blog)
              }}>delete</button>
              </div>

              </>
          )
          })

          
          
        
        ))}
        </div>
    </div>
  )
}

export default All_comments