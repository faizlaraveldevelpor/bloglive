import { useEffect, useState } from "react";
import { useAll_usersQuery, useChange_roleMutation, useDelete_usersMutation } from "../../Redux/Api"

function All_users() {
    let {data}=useAll_usersQuery()
    let [fnc]=useChange_roleMutation()
    let [delete_fnc]=useDelete_usersMutation()
    console.log(data);
    let [roledata,setroledata]=useState({
        role:"",
        id:""
    })
    useEffect(()=>{
  fnc(roledata)
  
    },[roledata])
  return (
    <div className=" md:px-24 pl-10  pt-10">
        <div className="">
            <div className="w-full flex justify-center"><h3 className="border-b-4 text-[20px] font-semibold   pb-1 text-center">All users</h3></div>
            <div className="">
                {
                    data&&
                    data?.users.map((data,i)=>{
                        return(
                            <>
                                <div className="flex md:justify-between justify-center md:py-0 py-3  flex-wrap  mt-10 bg-black text-white px-10 items-center rounded-lg" key={i}>
                <span><img src={data?.image} alt="image" className="w-[40px] h-[40px] rounded-full md:mr-0 mr-5" /></span>
                <span><h4 className="font-bold w-[50px]">{data?.email}</h4></span>
                <span>
                    <select name="" id="" className="bg-black text-white cursor-pointer outline-none md:mr-0 mr-4" onChange={(e)=>setroledata((perv)=>({...perv,role:e.target.value,id:data?._id}))}>
                        
                        <option value={data?.role} className="cursor-pointer outline-none ">{data?.role}</option>
                        <option value={data?.role=='admin'?"user":"admin"} className="cursor-pointer outline-none">{data?.role=='admin'?"user":"admin"}</option>
                        
                      
                    </select>
                </span>
                <span className="">
                    <button className="bg-white text-black px-2 rounded-xl cursor-pointer h-6 md:mt-0 my-1" onClick={()=>delete_fnc(data._id)}>Delete</button>
                </span>
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

export default All_users