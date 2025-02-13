import { useDispatch } from "react-redux"
import { user_profile } from "../Redux/ALL_moduls._Slice"
import { useLogout_ApiMutation } from "../Redux/Api"
import { Link} from "react-router-dom"
import {toast} from 'react-toastify'
function User_profile() {
    let [fnc]=useLogout_ApiMutation()
    let dispatch=useDispatch()

  return (
    <div className="w-full  bg-black text-white py-1 px-1 h-screen   " >
        <div className="flex flex-col px-4 gap-2 py-1">
          <Link to={'/User/profile'}><span className="cursor-pointer" onClick={()=>dispatch(user_profile())}>Profile</span></Link>
       <Link to={'/draft'}><span onClick={()=> dispatch(user_profile())}>Draft</span></Link>
            <span className="cursor-pointer" onClick={()=>{
                fnc()
                dispatch(user_profile())
                localStorage.clear("user")
                toast.success("logout successfully")
            }}>Logout</span>
        </div>
    </div>
  )
}

export default User_profile