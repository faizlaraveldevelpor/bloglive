import { useGet_cetagoryQuery } from "../../Redux/Api";

function All_cetagories() {
let {data}=useGet_cetagoryQuery()

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
                        <div className="flex flex-wrap gap-5 mt-5">

                        
                        <span className="bg-gray-300 w-[200px] text-center rounded-2xl">
                            {data.cetagory}
                        </span>
                       
                        </div>
                        </>
                    )
                })
            }
        </div>
        <div className="mt-16">
            <h3 className="font-bold text-[30px]">Sub cetagories</h3>
           <div className="flex flex-wrap mt-10">
           {
                data?.getCetagory.map((data)=>(
                    
                 data?.subCetagory.map((data)=>{
                    return(
                        <>
                        <span className="bg-gray-300 text-[17px] px-20 mr-10  rounded-2xlz mt-11 rounded-2xl ">
                            {data}
                        </span>
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

export default All_cetagories