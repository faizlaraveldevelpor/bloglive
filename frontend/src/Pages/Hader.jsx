import { IoMenuSharp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { LuSparkles } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { ImCross } from "react-icons/im";
import { Auth_moduls_fnc, cetagory_toggle_fnc, register_toggle, user_profile } from "../Redux/ALL_moduls._Slice";
import { Link } from "react-router-dom";
function Hader() {
     let disptach=useDispatch()
     let user_data_local_storage=useSelector((state)=>state.Api_data_slice.login_user)
     console.log(user_data_local_storage);
     
   let cetagory_toggle_useslactor=useSelector((state)=>state.All_moduls.cetagory_module_state)
  return (
    
    <header className="">
        <div className='bg-black h-[50px] text-white flex justify-between  items-center  border-b-2  border-white sticky top-0 left-0    px-2'>
            <div className='flex items-center gap-x-2 text-[20px] merriweather-bold '>
              {
                cetagory_toggle_useslactor?<><ImCross className="text-[25px] md:ml-4  cursor-pointer " onClick={()=>disptach(cetagory_toggle_fnc(false))}/></>:<IoMenuSharp className='text-[25px] md:ml-4  cursor-pointer' onClick={()=>disptach(cetagory_toggle_fnc(true))}/>
              }
               {/* <div className="md:hidden block  " >
               <Link to={'/'}>  <span className="md:text-[30px] cursor-pointer ">Forbes</span></Link>
               </div> */}
            </div>
            <div className="md:text-[30px] text-[18px]" >
               <Link to={'/'}>  <span className=" cursor-pointer md:ml-24 font-bold  ">Thoughtlab360</span></Link>
               </div>
         {
          user_data_local_storage.length!==0?<>
          
          <div className="flex gap-3  items-center">
           <div className="flex gap-3  items-center cursor-pointer" onClick={()=>disptach(user_profile())} >
           <span><img src={user_data_local_storage?.image} alt="img" className="md:w-[30px] w-[25px] h-[25px] md:h-[30px] rounded-full md:block hidden " /></span>
           <span className="text-[17px] font-semibold">{user_data_local_storage?.name}</span>
           </div>
            {
              user_data_local_storage.role=="admin"?<Link to={'/admin'}><span className="ml-3 bg-red-600 rounded-md px-3 py-[2px] font-semibold"><button>Dashboard</button></span></Link>:""
            }
             <div className="flex relative">
         <Link to={'/search'}><span className="text-[24px] cursor-pointer"><IoIosSearch/></span></Link>
         <span><LuSparkles className="text-[14px] relative bottom-2 right-2 -rotate-12"/></span>
         </div>
          </div>
          
          </>:   <div className='flex  gap-x-2 items-center' >
          <span className="mr-3 font-normal cursor-pointer" onClick={()=>disptach(register_toggle(true))} >Register</span>
          <span className="mr-3 font-normal cursor-pointer" onClick={()=>disptach(Auth_moduls_fnc(true))}>Sing in</span>
         <div className="flex relative">
         <Link to={'/search'}><span className="text-[24px] cursor-pointer"><IoIosSearch/></span></Link>
         <span><LuSparkles className="text-[14px] relative bottom-2 right-2 -rotate-12"/></span>
         </div>
          </div>
         }
            
        </div>
    </header>
  )
}

export default Hader