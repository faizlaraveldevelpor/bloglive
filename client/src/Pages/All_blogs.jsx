import { Link, useParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useBlogsQuery } from "../Redux/Api";
import { useState } from "react";
function All_blogs() {
    let {id}=useParams()
    let [current_page,setcurrent_page]=useState(1)
    let {data}=useBlogsQuery(current_page)
    // console.log(data);
    
    let spilit=id.split(".")
    console.log(spilit);
    
    
    let filter_data;
if (data) {
     filter_data=data.get_blog.filter((data)=>spilit[0]!=="sub"?data.cetagory==id:data?.subcetagory==spilit[1])
}
console.log(filter_data);


let slice
 if (filter_data) {
  if(filter_data?.length>4){
   slice=filter_data.slice(7)}

 }else{
  return
 }
   console.log(slice);
   
if (spilit[0]!=="sub") {
    return (
    <div className="">
 
        <div className="border-[1px] flex  gap-x-2 my-4 items-center pl-6 py-1">
      <Link to={'/'}>
      <span className="text-gray-400 text-[12px] cursor-pointer">
        FORBES
        </span>
      </Link>
        <span>
            <MdKeyboardArrowRight/>
        </span>
        <span className="uppercase text-gray-600 text-[12px] cursor-pointer" >
            {id}
        </span>
        </div>

        <div className="mt-10 px-10 border-b-2">
                {
                 filter_data&&
                      <>
                      <div>
                        <h3 className="border-b border-black pb-2 font-bold text-[25px]   pt-5">{filter_data[0]?.cetagory}</h3>
                      <div className="md:flex  mt-7">
                      <div className="md:w-[65%] mb-10 ">
                       <Link to={`/single/blog/${filter_data[0]?._id}/${filter_data[0]?.Slug?filter_data[0]?.Slug:"Slug"}`}>
                       <img src={filter_data[0]?.image} alt="" className="w-full" />
                        <span>
                          <h3 className="mt-5 font-bold text-[15px] pl-2 mb-5 border-b-2 pb-5">{filter_data[0]?.title}</h3>
                         </span>
                       </Link>
                         {/* <div className="md:block hidden">
                          <div className="flex mb-8  ">
                        <Link to={`/single/blog/${filter_data[3]?._id}`}>  <div className="flex w-[50%] ">
                              <span> <img src={filter_data[3]?.image} alt="" className="w-[150px] h-[90px] object-cover" /></span>
                              <h3 className=" ml-4 text-[16px] font-normal">{filter_data[3]?.title.substring(0,40)}</h3>
                            </div></Link>
                          <Link to={`/single/blog/${filter_data[4]?._id}`}>
                          <div className="flex w-[50%]">
                              <span> <img src={filter_data[4]?.image} alt="" className="w-[150px] h-[90px] object-cover" /></span>
                              <h3 className=" ml-4 text-[16px] font-normal ">{filter_data[4]?.title.substring(0,40)}</h3>
                            </div>
                          </Link>
                          </div>
                          <div>
                          <div className="flex  ">
                           <Link to={`/single/blog/${filter_data[5]?._id}`}>
                           <div className="flex w-[50%]  ">
                              <span> <img src={filter_data[5]?.image} alt="" className="w-[150px] h-[90px] object-cover" /></span>
                              <h3 className=" ml-4 text-[16px] font-normal">{filter_data[5]?.title.substring(0,40)}</h3>
                            </div>
                           </Link>
                           <Link to={`/single/blog/${filter_data[6]?._id}`}> <div className="flex w-[50%]">
                              <span> <img src={filter_data[6]?.image} alt="" className="w-[150px] h-[90px] object-cover" /></span>
                              <h3 className="  ml-4 text-[16px] font-normal">{filter_data[6]?.title.substring(0,40)}</h3>
                            </div></Link>
                          </div>
                          </div>
                         </div> */}
                           {/* <div className="md:block hidden">
                          <div className="flex gap-10   mb-40 ">
                        <Link to={`/single/blog/${filter_data[3]?._id}`}>  <div className=" border w-[300px] h-[200px] ">
                              <span className="break-all"> <img src={filter_data?.[3]?.image} alt="" className="  w-full h-full " /></span>
                              <h3 className=" ml-4 text-[16px] font-normal break-all">{filter_data?.[3]?.title}</h3>
                            </div></Link>
                          <Link to={`/single/blog/${filter_data?.[4]?._id}`}>
                          <div className="w-[300px] h-[200px] border ">
                              <span className="break-all"> <img src={filter_data?.[4]?.image} alt="" className="   w-full h-full" /></span>
                              <h3 className=" ml-4 text-[16px] font-normal break-all ">{filter_data?.[4]?.title}</h3>
                            </div>
                          </Link>
                          </div>
                          <div>
                          <div className="flex gap-x-9 mb-24 ">
                           <Link to={`/single/blog/${filter_data[5]?._id}`}>
                           <div className="w-[300px] h-[200px]  ">
                              <span className="break-all"> <img src={filter_data[5]?.image} alt="" className="    h-full w-full" /></span>
                              <h3 className=" ml-4 text-[16px] font-normal break-all">{filter_data[5]?.title}</h3>
                            </div>
                           </Link>
                           <Link to={`/single/blog/${filter_data[6]?._id}`}> <div className=" w-[300px] h-[200px]">
                              <span className="break-all"> <img src={filter_data[6]?.image} alt="" className="  h-full w-full" /></span>
                              <h3 className="  ml-4 text-[16px] font-normal break-all">{filter_data[6]?.title}</h3>
                            </div></Link>
                          </div>
                          </div>
                         </div> */}
                          <div className="md:block hidden">
                          <div className="flex gap-12  mb-20  ">
                        <Link to={`/single/blog/${filter_data[3]?._id}/${filter_data[3]?.Slug?filter_data[3]?.Slug:"Slug"}`}>  <div className=" border lg:w-[300px] md:w-[150px] lg:h-[200px]  md:h-[100px] ">
                              <span className="break-all"> <img src={filter_data[3]?.image} alt="" className="  w-full h-full " /></span>
                              <h3 className=" ml-4 text-[16px] font-semibold">{filter_data[3]?.title.substring(0,50)}</h3>
                            </div></Link>
                          <Link to={`/single/blog/${filter_data[4]?._id}/${filter_data[4]?.Slug?filter_data[4]?.Slug:"Slug"}`}>
                          <div className="lg:w-[300px] md:w-[150px] lg:h-[200px]  md:h-[100px] border ">
                              <span className="break-all"> <img src={filter_data[4]?.image} alt="" className="   w-full h-full" /></span>
                              <h3 className=" ml-4 text-[16px] font-semibold ">{filter_data[4]?.title.substring(0,50)}</h3>
                            </div>
                          </Link>
                          </div>
                          <div>
                          <div className="flex gap-x-9 mt-28 mb-20 ">
                           <Link to={`/single/blog/${filter_data[5]?._id}/${filter_data[5]?.Slug?filter_data[5]?.Slug:"Slug"}`}>
                           <div className="lg:w-[300px] md:w-[150px] lg:h-[200px]  md:h-[100px]  ">
                              <span className="break-all"> <img src={filter_data[5]?.image} alt="" className="    h-full w-full" /></span>
                              <h3 className=" ml-4 text-[16px] font-semibold">{filter_data[5]?.title.substring(0,50)}</h3>
                            </div>
                           </Link>
                           <Link to={`/single/blog/${filter_data[6]?._id}/${filter_data[6]?.Slug?filter_data[6]?.Slug:"Slug"}`}> <div className=" lg:w-[300px] md:w-[150px] lg:h-[200px]  md:h-[100px]">
                              <span className="break-all"> <img src={filter_data[6]?.image} alt="" className="  h-full w-full" /></span>
                              <h3 className="  ml-4 text-[16px] font-semibold">{filter_data[6]?.title.substring(0,50)}</h3>
                            </div></Link>
                          </div>
                          </div>
                         </div>
                        </div>
                        {/* <div className="md:border-l-2  md:ml-2 md:pl-2  md:w-[30%]">
                       <Link to={`/single/blog/${filter_data[1]?._id}`}>  <img src={filter_data[1]?.image} alt="" className="md:ml-2" />
                         <span>
                          <h3 className="mt-5 font-bold text-[15px] pl-2 mb-5">{filter_data[1]?.title}</h3>
                         </span></Link>
                       <Link to={`/single/blog/${filter_data[2]?._id}`}>  <img src={filter_data[2]?.image} alt="" className="md:ml-2" />
                         <span>
                          <h3 className="mt-5 font-bold text-[15px] pl-2 mb-5">{filter_data[2]?.title}</h3>
                         </span></Link>
                        </div> */}
                          <div className="md:border-l-2  md:ml-2 md:pl-2  md:w-[40%] break-all ">
                       <Link to={`/single/blog/${filter_data[1]?._id}/${filter_data[1]?.Slug?filter_data[1]?.Slug:"Slug"}`}>  <img src={filter_data[1]?.image} alt="" className="md:ml-2 lg:w-[500px] md:w-[300px] w-[300px]" />
                         <span>
                          <h3 className="mt-5 font-semibold text-[15px] pl-2 mb-5">{filter_data[1]?.title}</h3>
                         </span></Link>
                       <Link to={`/single/blog/${filter_data[2]?._id}/${filter_data[2]?.Slug?filter_data[2]?.Slug:"Slug"}`}>  <img src={filter_data[2]?.image} alt="" className="md:ml-2 lg:w-[500px] md:w-[300px] w-[300px]" />
                         <span>
                          <h3 className="mt-5 font-semibold text-[15px] pl-2 mb-5">{filter_data[2]?.title}</h3>
                         </span></Link>
                        </div>
                      </div>
                      </div>
                      
                      </>
              
                }
              </div>
<div className="flex md:flex-wrap md:justify-center md:items-center md:gap-x-10 items-center mt-12 px-10    overflow-scroll md:overflow-hidden">

{
  
  slice&&
  slice.map((data,i)=>{
    return(
      <>
      <div key={i} className="  ">
       
      <div className="  mt-7   ">
      <div className=" mb-10 pr-2   ">
       <Link to={`/single/blog/${data._id}/${data?.Slug?data?.Slug:"Slug"}`}>
       <span className="">
       <img src={data.image[0]} alt="" className="max-w-[200px] max-h-[100px]  " />
       </span>
        <span>
          <h3 className="mt-5 font-bold text-[15px]  mb-5 border-b-2 pb-5 ">{data.title.substring(0,50)+".."}</h3>
         </span>
       </Link>
       
        </div>
      
      </div>
      
      </div>
      
      </>
    )
  })
 }

</div>
<div className="flex justify-center"><button className="bg-black text-white w-[120px] my-3 h-8 rounded-md cursor-pointer" onClick={()=>setcurrent_page((perv)=>perv+1)}>Show more</button></div>
    </div>
  )
}else{
  return (
    <div className="">
        <div className="border-[1px] flex  gap-x-2 my-4 items-center pl-6 py-1">
        <span className="text-gray-400 text-[12px] cursor-pointer">
        FORBES
        </span>
        <span>
            <MdKeyboardArrowRight/>
        </span>
        <span className="uppercase text-gray-600 text-[12px] cursor-pointer" >
            {id}
        </span>
        </div>

        <div className="mt-10 px-10 border-b-2">
                {
                 filter_data&&
                      <>
                      <div>
                        
                        <h3 className="border-b border-black pb-2 font-bold text-[25px]   pt-5">{filter_data[0].subcetagory}</h3>
                      <div className="md:flex  mt-7">
                      <div className="md:w-[65%] mb-10 ">
                       <Link to={`/single/blog/${filter_data[0]?._id}/${filter_data[0]?.Slug?filter_data[0]?.Slug:"Slug"}`}>
                       <img src={filter_data[0]?.image} alt="" className="w-[500px] h-[400px]" />
                        <span>
                          <h3 className="mt-5 font-bold text-[15px] pl-2 mb-5 border-b-2 pb-5">{filter_data[0]?.title}</h3>
                         </span>
                       </Link>
                       <div className="md:block hidden">
                          <div className="flex gap-12  mb-20  ">
                        <Link to={`/single/blog/${filter_data[3]?._id}/${filter_data[3]?.Slug?filter_data[3]?.Slug:"Slug"}`}>  <div className=" border lg:w-[300px] md:w-[150px] lg:h-[200px]  md:h-[100px] ">
                              <span className="break-all"> <img src={filter_data[3]?.image} alt="" className="  w-full h-full " /></span>
                              <h3 className=" ml-4 text-[16px] font-semibold">{filter_data[3]?.title.substring(0,50)}</h3>
                            </div></Link>
                          <Link to={`/single/blog/${filter_data[4]?._id}/${filter_data[4]?.Slug?filter_data[4]?.Slug:"Slug"}`}>
                          <div className="lg:w-[300px] md:w-[150px] lg:h-[200px]  md:h-[100px] border ">
                              <span className="break-all"> <img src={filter_data[4]?.image} alt="" className="   w-full h-full" /></span>
                              <h3 className=" ml-4 text-[16px] font-semibold ">{filter_data[4]?.title.substring(0,50)}</h3>
                            </div>
                          </Link>
                          </div>
                          <div>
                          <div className="flex gap-x-9 mt-28 mb-20 ">
                           <Link to={`/single/blog/${filter_data[5]?._id}/${filter_data[5]?.Slug?filter_data[5]?.Slug:"Slug"}`}>
                           <div className="lg:w-[300px] md:w-[150px] lg:h-[200px]  md:h-[100px]  ">
                              <span className="break-all"> <img src={filter_data[5]?.image} alt="" className="    h-full w-full" /></span>
                              <h3 className=" ml-4 text-[16px] font-semibold">{filter_data[5]?.title.substring(0,50)}</h3>
                            </div>
                           </Link>
                           <Link to={`/single/blog/${filter_data[6]?._id}/${filter_data[6]?.Slug?filter_data[6]?.Slug:"Slug"}`}> <div className=" lg:w-[300px] md:w-[150px] lg:h-[200px]   md:h-[100px]">
                              <span className="break-all"> <img src={filter_data[6]?.image} alt="" className="  h-full w-full" /></span>
                              <h3 className="  ml-4 text-[16px] font-semibold ">{filter_data[6]?.title.substring(0,50)}</h3>
                            </div></Link>
                          </div>
                          </div>
                         </div>
                        </div>
                        <div className="md:border-l-2  md:ml-2 md:pl-2  md:w-[40%] break-all ">
                       <Link to={`/single/blog/${filter_data[1]?._id}/${filter_data[1]?.Slug?filter_data[1]?.Slug:"Slug"}`}>  <img src={filter_data[1]?.image} alt="" className="md:ml-2 lg:w-[500px] md:w-[300px] w-[300px]" />
                         <span>
                          <h3 className="mt-5 font-semibold text-[15px] pl-2 mb-5">{filter_data[1]?.title}</h3>
                         </span></Link>
                       <Link to={`/single/blog/${filter_data[2]?._id}/${filter_data[2]?.Slug?filter_data[2]?.Slug:"Slug"}`}>  <img src={filter_data[2]?.image} alt="" className="md:ml-2 lg:w-[500px] md:w-[300px] w-[300px]" />
                         <span>
                          <h3 className="mt-5 font-semibold text-[15px] pl-2 mb-5">{filter_data[2]?.title}</h3>
                         </span></Link>
                        </div>
                      </div>
                    
                      </div>
                      
                      </>
              
                }
              </div>
<div className="flex md:flex-wrap md:justify-center md:items-center md:gap-x-10 items-center mt-12 px-10    overflow-scroll md:overflow-hidden">
{
  slice&&
  slice.map((data,i)=>{
    return(
      <>
      <div key={i} className="  ">
       
      <div className="  mt-7   ">
      <div className=" mb-10 pr-2   ">
       <Link to={`/single/blog/${data._id}/${data?.Slug?data?.Slug:"Slug"}`}>
       <span className="">
        
       <img src={data.image[0]} alt="" className="max-w-[200px] max-h-[100px]  " />
       </span>
        <span>
          <h3 className="mt-5 font-bold text-[15px]  mb-5 border-b-2 pb-5 ">{data.title.substring(0,50)+".."}</h3>
         </span>
       </Link>
       
        </div>
      
      </div>
      
      </div>
      
      </>
    )
  })
  
 }

</div>
<div className="flex justify-center "><button className="bg-black text-white w-[120px] my-3 h-8 rounded-md cursor-pointer" onClick={()=>setcurrent_page((perv)=>perv+1)}>Show more</button></div>

    </div>
  )
}
}

export default All_blogs