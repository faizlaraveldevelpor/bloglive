import {  useEffect, useRef, useState } from "react"
import { CiMail } from "react-icons/ci";
import { useDispatch } from "react-redux";
import {  register_toggle } from "../Redux/ALL_moduls._Slice";
import { useRegisterMutation } from "../Redux/Api";
import {toast} from 'react-toastify'
 function Register() {
  let toast_ref=useRef()
let disptach=useDispatch()
    let [login,setlogin]=useState(1)
  
let image_ref=useRef()
  
    // signup state
    let [signupdata,setsignupdata]=useState({
      email:"",
      name:"",
      password:"",
      avtar:""
    })


  
    let [register_api_fnc,{data:api_data,isLoading}]=useRegisterMutation()


let form=new FormData()
form.append("email",signupdata.email)
form.append("password",signupdata.password)
form.append("name",signupdata.name)
form.append("avtar",signupdata.avtar)

    let handle_auth=async()=>{
    if(signupdata.password==""){
        return 
    }

await register_api_fnc(form)
      

      
    }
   
    useEffect(()=>{
      if (isLoading) {
       toast_ref.current= toast.loading("loading")
      }
      if (!isLoading) {
        toast.dismiss(toast_ref.current)
      }
      if (api_data) {
        
if (api_data.success==false) {
  toast.error(api_data.message)

}
if (api_data.success==true) {
  toast.success(api_data.message)

}
        if (api_data.success) {
            disptach(register_toggle(false))
            setsignupdata({
                email:"",
                name:"",
                password:"",
                avtar:""
              })
              setlogin(1)
           }
      }
    },[api_data,isLoading])

if (login==1) {
    return (
        <div className="md:w-[50%] e-[100%] relative h-fit overflow-hidden flex z-30  flex-wrap ">
            <div className=" flex  flex-col items-center pt-10 h-screen py-2 w-full">
          
            {/* Register */}
    <div className={`w-[100%]  border      rounded-2xl  text-white px-5 pt-4 pb-5 `}>
      
     
      
     <>
     <span className="flex flex-row justify-between">
     <h4 className=" text-black w-[75%] text-[22px] merriweather-bold "> create your account</h4>
     <span className="text-black    w-7 h-7 flex items-center justify-center bg-[#FCFCFC] rounded-full border font-semibold cursor-pointer" onClick={()=>disptach(register_toggle(false))}>X</span>
     </span>
      <span className="flex flex-row-reverse justify-end   mt-5 items-center">
     <span className="flex  flex-col w-full">
     <label htmlFor="" className="mb-2 font-bold text-[#737373] text-[13px]  relative right-12 " >Name</label>
     <input type="text" name="" id=""  className=" border outline-none h-12 w-[100%]  text-[#737373]  rounded-r-sm  font-semibold relative border-[#737373] px-4 " value={signupdata.name} onChange={(e)=>setsignupdata((perv)=>({...perv,name:e.target.value}))} placeholder="Enter your name"/>
     </span>
    
     <span className="text-[#737373]  mt-[27.5px]   h-12 w-12 flex justify-center items-center  p-2  sutom_border ">
    <CiMail className="text-[25px] "/>
     </span>
      </span>
      <span className="flex flex-row-reverse justify-end   mt-5 items-center">
     <span className="flex  flex-col w-full">
     <label htmlFor="" className="mb-2 font-bold text-[#737373] text-[13px]  relative right-12 " >Email</label>
     <input type="email" name="" id=""  className=" border outline-none h-12 w-[100%]  text-[#737373]  rounded-r-sm  font-semibold relative border-[#737373] px-4 " value={signupdata.email} onChange={(e)=>setsignupdata((perv)=>({...perv,email:e.target.value}))} placeholder="Enter your email"/>
     </span>
    
     <span className="text-[#737373]  mt-[27.5px]   h-12 w-12 flex justify-center items-center  p-2  sutom_border ">
    <CiMail className="text-[25px] "/>
     </span>
      </span>
      {/* <span className="flex flex-col my-2 mt-5">
      <label htmlFor="" className="mb-1 font-bold">Password</label>
      <input type="password" name="" id=""  className=" border border-white bg-black text-white  rounded-md px-2 font-semibold" value={login_data.password} onChange={(e)=>setlogindata((perv)=>({...perv,password:e.target.value}))}/>
      </span> */}
      <button className={`  rounded-md ${signupdata.email!==""?"bg-[#007AC8]":"bg-[#cccc]"} text-white w-[100%] h-[50px] font-bold text-[17px] mt-4 flex justify-center items-center` }onClick={()=>{signupdata.email!==""?setlogin(2):""}}>Continue</button>
      {/* <div className="flex pt-7 justify-center items-center gap-x-4">
       <span className="min-w-24 border border-[#dcdbdb] h-[1px]"></span>
       <span className="text-[#949494cc] font-semibold">OR USE</span>
       <span className="min-w-24 border border-[#dcdbdb] h-[1px]"></span>
      </div>
      <div className="flex justify-center gap-x-20 mt-3 items-center">
       <span className="border rounded-md w-12 h-12 flex items-center justify-center"><img src="/Google__G__logo.svg-removebg-preview.png" alt=""  className="w-6"/></span>
       <span className="border rounded-md w-12 h-12 flex items-center justify-center"><img src="../../public/download-removebg-preview.png" className="w-6" alt="" /></span>
      </div> */}
     
    
    
     </>
     
       
    </div>
    
    
            </div>
        </div>
      )
     
}if (login==2) {
   return(
    <>
    
    <div className="md:w-[50%] e-[100%] relative h-fit overflow-hidden flex z-30  flex-wrap ">
            <div className=" flex  flex-col items-center pt-10 h-screen py-2 w-full">
          
            {/* Register */}
    <div className={`w-[100%]  border      rounded-2xl  text-white px-5 pt-4 pb-5 `}>
      
     
      
     <>
     <span className="flex flex-row justify-between">
     <h4 className=" text-black w-[75%] text-[22px] merriweather-bold "> create your account</h4>
     <span className="text-black    w-7 h-7 flex items-center justify-center bg-[#FCFCFC] rounded-full border font-semibold cursor-pointer" onClick={()=>disptach(register_toggle(false))}>X</span>
     </span>
     <div className="flex items-center">
     <span className="flex flex-row-reverse justify-end   mt-5 items-center">
     <span className="flex  flex-col w-full">
     <label htmlFor="" className="mb-2 font-bold text-[#737373] text-[13px]  relative right-12 " >Name</label>
     <input type="text" name="" id=""  className=" border-y outline-none h-12 w-[100%]     text-[#737373] bg-[#E6E6E6]  font-semibold relative border-[#737373] px-4 " readOnly value={signupdata.name} onChange={(e)=>setsignupdata((perv)=>({...perv,name:e.target.value}))} placeholder="Enter your email"/>
     
     </span>
     
     <span className="text-[#737373]  mt-[27.5px]   h-12 w-12 flex justify-center items-center  p-2  sutom_border ">
    <CiMail className="text-[25px]  "/>
     </span>
     
      </span>
      
      <span className="text-[#535252] font-bold mt-[47.3px] cursor-pointer bg-[#E6E6E6] h-12 border-y w-full flex justify-end items-center pr-3 pb-1   rounded-r-sm border-r   relative border-[#737373] " onClick={()=>setlogin(1)}>Edit</span>
     </div>
     
     <div className="flex items-center">
     <span className="flex flex-row-reverse justify-end   mt-5 items-center">
     <span className="flex  flex-col w-full">
     <label htmlFor="" className="mb-2 font-bold text-[#737373] text-[13px]  relative right-12 " >Email</label>
     <input type="text" name="" id=""  className=" border-y outline-none h-12 w-[100%]     text-[#737373] bg-[#E6E6E6]  font-semibold relative border-[#737373] px-4 " readOnly value={signupdata.email} onChange={(e)=>setsignupdata((perv)=>({...perv,email:e.target.value}))} placeholder="Enter your email"/>
     
     </span>
     
     <span className="text-[#737373]  mt-[27.5px]   h-12 w-12 flex justify-center items-center  p-2  sutom_border ">
    <CiMail className="text-[25px]  "/>
     </span>
     
      </span>
      <span className="text-[#535252] font-bold mt-[47.3px] cursor-pointer bg-[#E6E6E6] h-12 border-y w-full flex justify-end items-center pr-3 pb-1   rounded-r-sm border-r   relative border-[#737373] " onClick={()=>setlogin(1)}>Edit</span>
     </div>
    
      <span className="flex flex-row-reverse justify-end   mt-5 items-center">
        
     <span className="flex  flex-col w-full">
     
     <label htmlFor="" className="mb-2 font-bold text-[#737373] text-[13px]  relative right-12 " >Password</label>
     <input type="password" name="" id=""  className=" border outline-none h-12 w-[100%]  text-[#737373]  rounded-r-sm  font-semibold relative border-[#737373] px-4 " value={signupdata.password} onChange={(e)=>setsignupdata((perv)=>({...perv,password:e.target.value}))} placeholder="Enter your password"/>
     </span>
    
     <span className="text-[#737373]  mt-[27.5px]   h-12 w-12 flex justify-center items-center  p-2  sutom_border ">
    <CiMail className="text-[25px] "/>
     </span>
     
      </span>
    <span className="">
    <input type="file" className=" hidden " ref={image_ref} onChange={(e)=>setsignupdata((perv)=>({...perv,avtar:e.target.files[0]}))} />
   {
    signupdata.avtar&&
  <>
  <span className="flex justify-center my-1"><img src={URL.createObjectURL(signupdata.avtar)} alt="" className="w-[50px] h-[50px] rounded-full" /></span>
    
  </>
   }
    <h3 className="bg-black text-white my-4 text-center text-[20px] cursor-pointer" onClick={()=>{
      image_ref.current.click()
    }}>Add Image</h3>
    
    </span>
      {/* <span className="flex flex-col my-2 mt-5">
      <label htmlFor="" className="mb-1 font-bold">Password</label>
      <input type="password" name="" id=""  className=" border border-white bg-black text-white  rounded-md px-2 font-semibold" value={login_data.password} onChange={(e)=>setlogindata((perv)=>({...perv,password:e.target.value}))}/>
      </span> */}
      <button className={`  rounded-md ${signupdata.password!==""?"bg-[#007AC8]":"bg-[#cccc]"} text-white w-[100%] h-[50px] font-bold text-[17px] mt-4 flex justify-center items-center` }onClick={()=>handle_auth()}>Continue</button>
      {/* <div className="flex pt-7 justify-center items-center gap-x-4">
       <span className="min-w-24 border border-[#dcdbdb] h-[1px]"></span>
       <span className="text-[#949494cc] font-semibold">OR USE</span>
       <span className="min-w-24 border border-[#dcdbdb] h-[1px]"></span>
      </div>
      <div className="flex justify-center gap-x-20 mt-3 items-center">
       <span className="border rounded-md w-12 h-12 flex items-center justify-center"><img src="/Google__G__logo.svg-removebg-preview.png" alt=""  className="w-6"/></span>
       <span className="border rounded-md w-12 h-12 flex items-center justify-center"><img src="../../public/download-removebg-preview.png" className="w-6" alt="" /></span>
      </div> */}
     
    
    
     </>
     
       
    </div>
    
    
            </div>
        </div>
    
    </>
   )
}
}

export default Register










