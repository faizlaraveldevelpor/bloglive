import  { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Compunents/Admin/Sidebar'
import {useSelector} from 'react-redux'
function Private() {
    let [hover,sethover]=useState(false)
    let user_data=useSelector((state)=>state.Api_data_slice.login_user)
    if(user_data){
if (user_data.role=='admin') {
    return (
        <div className='relative'>
            <div className='absolute z-30 top-4'>
               <Sidebar hover={hover} sethover={sethover}/> 
            </div>
           <div className={`${hover?"":""}`}>
           <Outlet/>
           </div>
        </div>
      )
}else{
    return(
        <div className='text-center pt-40 font-bold text-[40px] h-screen'>
      Not found
    </div>
    )
  
}
    }

}

export default Private