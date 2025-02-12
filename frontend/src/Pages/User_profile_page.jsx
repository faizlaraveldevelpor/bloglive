import { useEffect, useRef, useState } from "react"
import { useUpdate_profileMutation } from "../Redux/Api"
import {toast} from 'react-toastify'
function User_profile_page() {
    let [update_fnc,{data}]=useUpdate_profileMutation()
    let user_data_local_storage=JSON.parse(localStorage.getItem('user'))||[]
    let img_ref=useRef()
    let [toggle_update,settoggle_update]=useState(null)
    let [updated_data,setupdated_data]=useState({
        name:"",
        email:"",
        password:"",
        img:""
    })
    console.log(updated_data);
    

    let form=new FormData()
    form.append("name",updated_data.name)
    form.append("email",updated_data.email)
    form.append("password",updated_data.password)
    form.append("avtar",updated_data.img)

useEffect(()=>{
if (data?.success==true) {
  toast.success(data?.message)
}if (data?.success==false) {
  toast.error(data?.message)
}
},[data])

  return (
    <div className=" ">
    <div className="flex flex-col items-center w-full h-fit pb-2 bg-black">
        <span className="mt-2"><img src={user_data_local_storage?.image} alt="image" className="w-[50px] h-[50px] rounded-full border"  /></span>
        <input type="file" ref={img_ref} className="hidden" onChange={(e)=>setupdated_data((perv)=>({...perv,img:e.target.files[0]}))} />
        <span className="flex flex-col gap-4"><button className="bg-white text-black mt-3 py-1 px-1 rounded-lg font-semibold" onClick={()=>{
            img_ref.current.click()
        }}>Chnage profile image</button>
        <button className="bg-white rounded-lg " onClick={()=>{
            update_fnc(form)
        }}>Upadte</button>
        </span>
    </div>
    <div className="bg-gray-100 w-full flex flex-col items-center py-24">
    <div className="border md:w-[50%] w-[90%] px-5 py-5  bg-white">
    <div className="border-b pb-3">
    <span className="font-bold text-[20px]  ">Account Information</span>
    </div>
  <div className="flex flex-col gap-4">
  <div className="flex justify-between h-16 items-center">
        <div className="text-[20px] font-semibold flex flex-col ">
            <span className="mt-5" >Name</span>
            <span className="text-[15px]  ">{user_data_local_storage?.name}</span>
        </div>
      
     <a href="#name">
     <span className="font-semibold text-[20px] cursor-pointer"  onClick={()=>{
            settoggle_update("name")
            
        }}>Update</span>
     </a>
    </div>
    <div className="flex justify-between h-16 items-center">
        <div className="text-[20px] font-semibold flex flex-col ">
            <span className="mt-5">Email</span>
         
          <span className="text-[15px]  ">{user_data_local_storage?.email}</span>
          
        </div>
      <a href="#email">
        <span className="font-semibold text-[20px] cursor-pointer"  onClick={()=>{
            settoggle_update("email")
            
        }}>Update</span></a>
    </div>
    <div className="flex justify-between h-16 items-center">
        <div className="text-[20px] font-semibold flex flex-col ">
            <span className="mt-5">Password</span>
            <span className="text-[15px]  ">.......................</span>
        </div>
      <a href="#password">
        <span className="font-semibold text-[20px] cursor-pointer"
        onClick={()=>{
            settoggle_update("password")
            
        }}
        >Update</span></a>
    </div>
    
  </div>

    </div>




    {/* update part 2 */}
    
 {
    toggle_update=="name"?<>
    
    <div className="border md:w-[50%] w-[90%] px-5 py-5  bg-white mt-16" id="name">
    <div className="border-b pb-3">
    <span className="font-bold text-[20px]  ">Update Information</span>
    </div>
  <div className="flex flex-col gap-4 ">
  <div className="">
        <div className="text-[20px] font-semibold flex flex-col ">
            <span className="mt-5">Name</span>
            <span><input type="text" className="outline-none border px-2 w-[80%] mt-3 h-[40px]" placeholder="Enter your name" onChange={(e)=>setupdated_data((perv)=>({...perv,name:e.target.value}))} /></span>
        </div>
      
        <div className="font-semibold text-[20px] cursor-pointer flex justify-center mt-4 mr-12 "><span className="bg-black text-white w-[40%] text-center" onClick={()=>{
            update_fnc(form)
        }}>Update</span></div>
    </div>
 
    
  </div>

    </div>
    
    </>:""
 }


{
    toggle_update=="email"?<>
    
    <div className="border md:w-[50%] w-[90%] px-5 py-5  bg-white mt-16" id="email">
    <div className="border-b pb-3">
    <span className="font-bold text-[20px]  ">Update Information</span>
    </div>
  <div className="flex flex-col gap-4 ">
  <div className="">
        <div className="text-[20px] font-semibold flex flex-col ">
            <span className="mt-5">Email</span>
            <span><input type="email" className="outline-none border px-2 w-[80%] mt-3 h-[40px]" placeholder="Enter your Email" onChange={(e)=>setupdated_data((perv)=>({...perv,email:e.target.value}))} /></span>
        </div>
      
        <div className="font-semibold text-[20px] cursor-pointer flex justify-center mt-4 mr-12 "><span className="bg-black text-white w-[40%] text-center" onClick={()=>{
            update_fnc(form)
        }}>Update</span></div>
    </div>
 
    
  </div>

    </div>
    </>:""
}
{
    toggle_update=="password"?<>
    
    <div className="border md:w-[50%] w-[90%] px-5 py-5  bg-white mt-16" id="password">
    <div className="border-b pb-3">
    <span className="font-bold text-[20px]  ">Update Information</span>
    </div>
  <div className="flex flex-col gap-4 ">
  <div className="">
        <div className="text-[20px] font-semibold flex flex-col ">
            <span className="mt-5">password</span>
            <span><input type="password" className="outline-none border px-2 w-[80%] mt-3 h-[40px]" placeholder="Enter your Email" onChange={(e)=>setupdated_data((perv)=>({...perv,password:e.target.value}))} /></span>
        </div>
      
        <div className="font-semibold text-[20px] cursor-pointer flex justify-center mt-4 mr-12 "><span className="bg-black text-white w-[40%] text-center" onClick={()=>{
            update_fnc(form)
        }}>Update</span></div>
    </div>
 
    
  </div>

    </div>
    </>:""
}
    </div>
    </div>
  )
}

export default User_profile_page