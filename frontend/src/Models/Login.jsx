import {  useEffect, useRef, useState } from "react"
import { CiMail } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { Auth_moduls_fnc, login_user_data } from "../Redux/ALL_moduls._Slice";
import { useCheck_otpMutation, useLoginMutation, useSendMailMutation } from "../Redux/Api";
import Create_new_password from "../Compunents/Create_new_password";
import {toast} from 'react-toastify'
 function Login() {
let disptach=useDispatch()
let [check_otp_fnc,{data:check_otp_data}]=useCheck_otpMutation()
let mail_ref=useRef()
let [otp,setotp]=useState()
let [reset_passwordToggle,setreset_passwordToggle]=useState(null)
let [send_mail_fnc,{data}]=useSendMailMutation()
    let [login,setlogin]=useState(1)
  let [forget_password,setforget_password]=useState(false)
let [backup_email,setbackup_email]=useState(mail_ref.current?.value)

// login state
    let [login_data,setlogindata]=useState({
      email:"",
      password:''
    })
  

let [login_api_fnc,login_api_data]=useLoginMutation()
  



let send_mail=()=>{
 send_mail_fnc(mail_ref.current.value)


}


    let handle_auth=async()=>{
    
      login_api_fnc(login_data)
      
    }

   
    useEffect(()=>{
  
      if (check_otp_data?.success==true) {
  
        
      setreset_passwordToggle(3)
    }
    },[check_otp_data])

    useEffect(()=>{
      if (data?.message=="opt send successfully") {
        setreset_passwordToggle(2)
        toast.success(data?.message)
      }
       
    },[data])

    useEffect(()=>{
      if (login_api_data.data) {
       if (login_api_data.data.success==false) {
        toast.error(login_api_data.data.message)
       }
       if (login_api_data.data.success==true) {
        toast.success(login_api_data.data.message)
       }
           if (login_api_data.data.success) {
            disptach(Auth_moduls_fnc(false))
            setlogindata({
                email:"",
                name:"",
                password:""
              })
              setlogin(1)
              setreset_passwordToggle(1)
              // disptach(login_user_data())
              disptach(login_user_data(login_api_data.data?.user_data))
           }
      }
    },[login_api_data.data])
    // console.log(login_api_data.data?.user_data);
   
    // create new passowrd

if (reset_passwordToggle==3) {
  return(<>
<Create_new_password mail={backup_email} logintoggle={setlogin}/>
  
  </>)
}
// login and otp genrate
    if (forget_password) {
      return(<>
   {reset_passwordToggle==2?<div className="md:w-[50%] e-[100%] relative h-fit overflow-hidden flex z-30  flex-wrap ">
        <div className=" flex  flex-col items-center pt-10 h-screen py-2 w-full">
      
        {/* login */}
<div className={`w-[100%]  border      rounded-2xl  text-white px-5 pt-4 pb-5 `}>
  
 {
  
 <>
  <span className="flex flex-row justify-between">
     <h4 className=" text-black w-[75%] text-[22px] merriweather-bold "> Forget Password</h4>
     <span className="text-black    w-7 h-7 flex items-center justify-center bg-[#FCFCFC] rounded-full border font-semibold cursor-pointer" onClick={()=>disptach(Auth_moduls_fnc(false))}>X</span>
     </span>
  <span className="flex flex-row-reverse justify-end   mt-5 items-center">
 <span className="flex  flex-col w-full">
 <label htmlFor="" className="mb-2 font-bold text-[#737373] text-[13px]  relative right-12 " >Enter Otp</label>
 <input type="number" name="" id=""  className=" border outline-none h-12 w-[100%]  text-[#737373]  rounded-r-sm  font-semibold relative border-[#737373] px-4 "   placeholder="Enter your otp" value={otp} onChange={(e)=>setotp(e.target.value)} />
 </span>

 <span className="text-[#737373]  mt-[27.5px]   h-12 w-12 flex justify-center items-center  p-2  sutom_border ">
<CiMail className="text-[25px] "/>
 </span>
 
  </span>
  <button className="w-[100%] bg-[#007AC8] rounded-md h-[50px] mt-3 font-semibold pb-1 text-[18px]" onClick={()=>{
    check_otp_fnc(otp)
setotp("")
}}>submit</button>
 

 </>
 }
   
</div>


        </div>
    </div>:       <div className="md:w-[50%] e-[100%] relative h-fit overflow-hidden flex z-30  flex-wrap ">
        <div className=" flex  flex-col items-center pt-10 h-screen py-2 w-full">
      
        {/* login */}
<div className={`w-[100%]  border      rounded-2xl  text-white px-5 pt-4 pb-5 `}>
  
 {
  
 <>
  <span className="flex flex-row justify-between">
     <h4 className=" text-black w-[75%] text-[22px] merriweather-bold "> Forget Password</h4>
     <span className="text-black    w-7 h-7 flex items-center justify-center bg-[#FCFCFC] rounded-full border font-semibold cursor-pointer" onClick={()=>disptach(Auth_moduls_fnc(false))}>X</span>
     </span>
  <span className="flex flex-row-reverse justify-end   mt-5 items-center">
 <span className="flex  flex-col w-full">
 <label htmlFor="" className="mb-2 font-bold text-[#737373] text-[13px]  relative right-12 " >Email</label>
 <input type="email" name="" id=""  className=" border outline-none h-12 w-[100%]  text-[#737373]  rounded-r-sm  font-semibold relative border-[#737373] px-4 " ref={mail_ref} placeholder="Enter your email" onChange={(e)=>setbackup_email(e.target.value)}/>
 </span>

 <span className="text-[#737373]  mt-[27.5px]   h-12 w-12 flex justify-center items-center  p-2  sutom_border ">
<CiMail className="text-[25px] "/>
 </span>
 
  </span>
  <button className="w-[100%] bg-[#007AC8] rounded-md h-[50px] mt-3 font-semibold pb-1 text-[18px]" onClick={()=>{
    send_mail()
  }}>submit</button>
 

 </>
 }
   
</div>


        </div>
    </div>}

      </>)
    }else{
  return (
   
    <div className="md:w-[50%] e-[100%] relative h-fit overflow-hidden flex z-30  flex-wrap ">
        <div className=" flex  flex-col items-center pt-10 h-screen py-2 w-full">
      
        {/* login */}
<div className={`w-[100%]  border      rounded-2xl  text-white px-5 pt-4 pb-5 `}>
  
 {
  login==1?
 <>
  <span className="flex flex-row justify-between">
     <h4 className=" text-black w-[75%] text-[22px] merriweather-bold "> signin your account</h4>
     <span className="text-black    w-7 h-7 flex items-center justify-center bg-[#FCFCFC] rounded-full border font-semibold cursor-pointer" onClick={()=>disptach(Auth_moduls_fnc(false))}>X</span>
     </span>
  <span className="flex flex-row-reverse justify-end   mt-5 items-center">
 <span className="flex  flex-col w-full">
 <label htmlFor="" className="mb-2 font-bold text-[#737373] text-[13px]  relative right-12 " >Email</label>
 <input type="text" name="" id=""  className=" border outline-none h-12 w-[100%]  text-[#737373]  rounded-r-sm  font-semibold relative border-[#737373] px-4 " value={login_data.email} onChange={(e)=>setlogindata((perv)=>({...perv,email:e.target.value}))} placeholder="Enter your email"/>
 </span>

 <span className="text-[#737373]  mt-[27.5px]   h-12 w-12 flex justify-center items-center  p-2  sutom_border ">
<CiMail className="text-[25px] "/>
 </span>
  </span>
  {/* <span className="flex flex-col my-2 mt-5">
  <label htmlFor="" className="mb-1 font-bold">Password</label>
  <input type="password" name="" id=""  className=" border border-white bg-black text-white  rounded-md px-2 font-semibold" value={login_data.password} onChange={(e)=>setlogindata((perv)=>({...perv,password:e.target.value}))}/>
  </span> */}
  <button className={`  rounded-md ${login_data.email!==""?"bg-[#007AC8]":"bg-[#cccc]"} text-white w-[100%] h-[50px] font-bold text-[17px] mt-4 flex justify-center items-center` }onClick={()=>{login_data.email!==""?setlogin(2):""}}>Continue</button>
  {/* <div className="flex pt-7 justify-center items-center gap-x-4">
   <span className="min-w-24 border border-[#dcdbdb] h-[1px]"></span>
   <span className="text-[#949494cc] font-semibold">OR USE</span>
   <span className="min-w-24 border border-[#dcdbdb] h-[1px]"></span>
  </div>
  <div className="flex justify-center gap-x-20 mt-3 items-center">
   <span className="border rounded-md w-12 h-12 flex items-center justify-center"><img src="/Google__G__logo.svg-removebg-preview.png" alt=""  className="w-6"/></span>
   <span className="border rounded-md w-12 h-12 flex items-center justify-center"><img src="../../public/download-removebg-preview.png" className="w-6" alt="" /></span>
  </div>
  */}
 </>:<>
 <span className="flex flex-row justify-between">
     <h4 className=" text-black w-[75%] text-[22px] merriweather-bold "> signin your account</h4>
     <span className="text-black    w-7 h-7 flex items-center justify-center bg-[#FCFCFC] rounded-full border font-semibold cursor-pointer" onClick={()=>disptach(Auth_moduls_fnc(false))}>X</span>
     </span>
 <div className="flex items-center">
     <span className="flex flex-row-reverse justify-end   mt-5 items-center">
     <span className="flex  flex-col w-full">
     <label htmlFor="" className="mb-2 font-bold text-[#737373] text-[13px]  relative right-12 " >Email</label>
     <input type="text" name="" id=""  className=" border-y outline-none h-12 w-[100%]     text-[#737373] bg-[#E6E6E6]  font-semibold relative border-[#737373] px-4 " readOnly value={login_data.email} onChange={(e)=>setlogindata((perv)=>({...perv,email:e.target.value}))} placeholder="Enter your email"/>
     
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
<span>
<input type="text" name="" id=""  className=" border outline-none h-12 w-[100%]  text-[#737373]  rounded-r-sm  font-semibold relative border-[#737373] px-4" value={login_data.password} onChange={(e)=>setlogindata((perv)=>({...perv,password:e.target.value}))} placeholder="Enter your email"/>

</span>
 </span>

 <span className="text-[#737373]  mt-[27.5px]   h-12 w-12 flex justify-center items-center  p-2  sutom_border ">
<CiMail className="text-[25px] "/>
 </span>

  </span>
  <span className="text-[#007AC8] mt-1 cursor-pointer" onClick={()=>setforget_password(true)}>Forget password</span>
  <button className="w-[100%] bg-[#007AC8] rounded-md h-[50px] mt-3 font-semibold pb-1 text-[18px]" onClick={()=>handle_auth()}>submit</button>
 </>
 }
   
</div>


        </div>
    </div>
  )}

}

export default Login