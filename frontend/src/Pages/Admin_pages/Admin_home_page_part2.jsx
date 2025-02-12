import { TiMessage } from "react-icons/ti";
import { BiSolidLike } from "react-icons/bi";
import {  Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDelete_commMutation } from "../../Redux/Api";
function Admin_home_page_part2() {
    let [fnc]=useDelete_commMutation()
let blog_data_useslactor=useSelector((state)=>state.Api_data_slice.blogs_data)

let navifate=useNavigate()
    
let filter=blog_data_useslactor?.get_blog.slice(0,11)
let filter_commnets=blog_data_useslactor?.get_blog.find((data)=>data.comments.length>0)
   
   let delete_comment=(id,blog_id)=>{
    fnc(id,blog_id)
   }
    
  return (
    <div className="md:px-24 px-10 flex gap-[10%] md:flex-row flex-col pb-4 ">
        <div className='md:w-[50%] bg-white px-4 py-4 border-black border'>
        <div className="flex md:justify-between md:flex-row flex-col">
            <span className=" w-[150px] h-8 font-bold text-[20px] md:mb-0 mb-4">Recent Blogs</span>
            <span>
            <button className="bg-black text-white w-[150px] h-8 font-normal text-[20px]" onClick={()=>navifate("/create/blog")}>Create blog</button>
            </span>
        </div>
        <div>
            {
                filter&&
                filter.map((data)=>{
               return(
                <>
                <div className='mt-10'>
  <Link to={`/single/blog/${data._id}`}>
  <div className='flex md:flex-row flex-col break-all '>
          <span className='border h-fit rounded-md mr-4 w-fit'><img src={data?.image} alt="" className='w-[150px] mr-2 ' /></span>
          <div className=''><h4>{data?.title}</h4> <span className='flex items-center text-gray-400'><TiMessage className='text-[14px] mt-1'/><p className='text-[13px] ml-1'>{data?.comments?.length} comments</p> <BiSolidLike className='text-[12px] ml-4 '/><p className='text-[13px] ml-1'>{data?.likes?.length} like</p></span></div>
       </div>
  </Link>
     
   
     </div>
              
              </>
               )
                })
            }
        </div>
     
        </div>
        <div className='md:w-[30%] '>
        <div className="border   shadow-lg border-black mt-8 md:mt-0">
            <Link to={'/all/comments'}>
         <div className="flex md:flex-row flex-col items-center  justify-between px-2 my-2 mx-1 border-b-2 pb-4">
            <span className="font-bold text-[20px]">Comments</span>
            <span className="bg-black text-white px-3 py-1 font-semibold mt-3">See all comments</span>
         </div></Link>
         <div>
             <div className="w-full flex justify-center  h-full overflow-y-scroll cusSc    ">
                 <div className=" bg-slate-50 h-full md:w-[800px] w-[90%]  flex md:justify-start justify-center  ">
                 <div className="">
                    <span className="text-[28px] cursor-pointer">
                    
                    </span>
                 </div>
                     <div className="md:px-4 w-full">
                      
                    <div className="  ">
                 
                 
                       <div className="w-full h-[200px]  mt-2  ">
                   
                       
                        {
                         !filter_commnets?<><h3 className="font-semibold ">Not found</h3></>:
                     
                         filter_commnets.comments.map((data)=>{
                            
                            return(
                                <>
                      
                               <div className="mb-6 ">
        
                               <div className=" flex flex-row gap-2 md:items-center justify-between  w-full ">
                                <div className="flex gap-2 items-center">
                                <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_1j5EelHEOtoLagpQtbwPZdrztpEQL0sJLA&s" alt="img" className="w-[40px] h-[40px] rounded-full object-cover" /></span>
                                <span><h3>{data?.user?.name}</h3></span>
                                </div>
                               <div onClick={()=>delete_comment(data._id,data.blog)}>
                               <button className="bg-black text-white  px-2 rounded-md mt-5 md:mt-0" >Delete</button>
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
         </div>
        </div>
        </div>
    </div>
  )
}

export default Admin_home_page_part2