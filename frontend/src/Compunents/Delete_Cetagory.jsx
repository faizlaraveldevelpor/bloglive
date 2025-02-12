import { useEffect } from "react";
import { useDeletecetagoryMutation, useDeletesubcetagoryMutation, useGet_cetagoryQuery } from "../Redux/Api"
import {toast} from 'react-toastify'
function Delete_Cetagory() {
    let {data}=useGet_cetagoryQuery()
    console.log(data?.getCetagory);
    let [dele_cetagory_fnc,{data:cetagory_data}]=useDeletecetagoryMutation()
let [dele_sub_cetagory,{data:subcetagory_api_data}]=useDeletesubcetagoryMutation()

    let Delete_Cetagory=(cetagory)=>{
        dele_cetagory_fnc(cetagory)
    }

    let delete_subcetagory=(cetagory,subCetagory)=>{
       console.log(subCetagory);
       
        dele_sub_cetagory({"cetagory":cetagory,"subCetagory":subCetagory})
        
       
    }

    useEffect(()=>{
        if (subcetagory_api_data) {
            if (subcetagory_api_data?.success==false) {
                toast.error(subcetagory_api_data.message)
            }
            if (subcetagory_api_data?.success==true) {
                toast.success(subcetagory_api_data.message)
            }
        }
        if (cetagory_data) {
            if (cetagory_data?.success==false) {
                toast.error(cetagory_data.message)
            }
            if (cetagory_data?.success==true) {
                toast.success(cetagory_data.message)
            }
        }
        },[subcetagory_api_data])

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

  return (
    <div className="ml-20 pt-8 "> 
    <div>
     <span className="font-bold text-[30px] text-center w-full">
     All cetagories
     </span>
    <div className="flex flex-wrap gap-5 mt-5">
        {
            data?.getCetagory.map((data)=>{
                return(
                    <>
                    <div className="flex flex-col items-center flex-wrap gap-5 mt-5">

                    
                    <span className="bg-gray-300 w-fit px-10 text-center rounded-2xl">
                        {data.cetagory}
                    </span>
                    <span className="bg-black text-white w-[100px] text-center rounded-xl cursor-pointer" onClick={()=>Delete_Cetagory(data.cetagory)}>Delete</span>
                   
                    </div>
                    </>
                )
            })
        }
    </div>
    <div className="mt-16">
        <h3 className="font-bold text-[30px]">Sub cetagories</h3>
       <div className=" flex items-center flex-wrap mt-10">
       {
            data?.getCetagory.map((data_cetagory)=>(
                
                data_cetagory?.subCetagory.map((data)=>{
                    
                return(
                    <>
                  <div className="flex flex-col flex-wrap items-center mt-11 ">
                  <span className="bg-gray-300 text-[20px] px-20 mr-10 w-fit  rounded-2xl ">
                        {data}
                    </span>
                    <span className="bg-black text-white w-[100px] text-center rounded-xl mt-4 cursor-pointer " onClick={()=>delete_subcetagory(data_cetagory.cetagory,data)}>Delete</span>
                  </div>
              
                    </>
                )
             })
            ))
        }
       </div>
    </div>
    </div>
</div>
  )
}

export default Delete_Cetagory