import { useEffect, useRef } from "react"
import { useCreate_cetagoryMutation, useCreate_subcetagoryMutation } from "../../Redux/Api"
import {toast} from 'react-toastify'
function Create_cetagory() {
    let [create_cetagory_fnc,{data:cetagory_data}]=useCreate_cetagoryMutation()
    let [create_sub_cetagoryfnc,{data:subcetagorydata}]=useCreate_subcetagoryMutation()

    let create_cetagory=(cetagory)=>{
        
create_cetagory_fnc({"cetagory":cetagory})
    }
    let create_subcetagory=(cetagory,subcetagory)=>{
        create_sub_cetagoryfnc({"subCetagory":subcetagory,"cetagory":cetagory})
    }
    let cetagory_ref=useRef()
    let subCetagory_ref=useRef()
    let selected_Cetagoryref=useRef()

    useEffect(()=>{
    if (cetagory_data) {
        if (cetagory_data?.success==false) {
            toast.error(cetagory_data.message)
        }
        if (cetagory_data?.success==true) {
            toast.success(cetagory_data.message)
        }
     
     
    }
 
    },[cetagory_data])

    useEffect(()=>{
        if (subcetagorydata) {
            if (subcetagorydata?.success==true) {
                toast.success(subcetagorydata.message)
            }
            if (subcetagorydata?.success==false) {
                toast.error(subcetagorydata.message)
            }
        }
    },[subcetagorydata])
  return (
    <div className="flex justify-center items-center pt-10 gap-10 flex-col">
        <div className="flex flex-col items-center  pb-10">
            <h3 className="text-[20px] font-bold text-center">Create Cetagory</h3>
            <label htmlFor="" className="mt-16 mb-3 text-[18px] font-semibold text-center"> Cetagory Name</label>
            <input type="text" className="w-[300px] border outline-none  h-[30px] px-4" placeholder="Enter cetagory name" ref={cetagory_ref}/>
            <button className="mt-5 bg-black text-white w-[200px] py-1" onClick={()=>create_cetagory(cetagory_ref.current.value)}>Create cetagory</button>
        </div>
        <div className="flex flex-col items-center">
            <h3 className="text-[20px] font-bold text-center">Create Subcetagory</h3>
            <label htmlFor="" className="mt-16 mb-3 text-[18px] font-semibold text-center"> cetagory Name</label>
            <input type="text" className="w-[300px] border outline-none  h-[30px] px-4" placeholder="Enter cetagory name" ref={selected_Cetagoryref}/>
            <label htmlFor="" className="mt-16 mb-3 text-[18px] font-semibold text-center"> Subcetagory Name</label>
            <input type="text" className="w-[300px] border outline-none  h-[30px] px-4" placeholder="Enter subcetagory name" ref={subCetagory_ref}/>
            <button className="mt-5 bg-black text-white w-[200px] py-1" onClick={()=>create_subcetagory(selected_Cetagoryref.current.value,subCetagory_ref.current.value)} >Create subcetagory</button>
        </div>
    </div>
  )
}

export default Create_cetagory