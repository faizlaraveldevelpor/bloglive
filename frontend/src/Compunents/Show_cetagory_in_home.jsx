import { useEffect } from "react"
import { useShow_data_from_cetagoryMutation } from "../Redux/Api";
import { Link } from "react-router-dom";



function Show_cetagory_in_home() {

  
    // let form_data=new FormData()
    // form_data.append("cetagory_name","faiz")
let [fnc,{data}]=useShow_data_from_cetagoryMutation()



  let filter=data?.fin_data.slice(0,2)
console.log(filter);


let form_data=new FormData()
form_data.append("cetagory_name",'faiz')
form_data.append("cetagory_name",'fashion')

useEffect(()=>{
    fnc(form_data)
},[])



  return (
    <div className=" pt-2 md:px-20 px-4  mt-2 w-full  ">
        <div className="">
            <div>
              <div>
                {
                  data&&
                  filter.map((data,i)=>{
                    console.log(data);
                    
                    return(
                      <>
                      <div key={i}>
                        <h3 className="border-b border-black pb-2 font-bold text-[25px] border-t-4  pt-5">{data?.cetagory}</h3>
                      <div className="md:flex  mt-7">
                      <div className=" mb-10 md:w-[60%] break-all ">
                       <Link to={`/single/blog/${data?.blogs[0]?._id}/${data?.blogs[0]?.Slug?data?.blogs[0]?.Slug:"Slug"}`}>
                       <img src={data?.blogs[0]?.image} alt="" className="md:w-[360px] lg:w-[800px] w-[350px]" />
                        <span>
                          <h3 className="mt-5 font-semibold text-[15px] pl-2 mb-5 border-b-2 pb-5">{data?.blogs[0]?.title}</h3>
                         </span>
                       </Link>
                         <div className="md:block hidden">
                          <div className="flex gap-12  mb-20  ">
                        <Link to={`/single/blog/${data?.blogs[3]?._id}/${data?.blogs[3]?.Slug?data?.blogs[3]?.Slug:"Slug"}`}>  <div className=" border lg:w-[300px] md:w-[150px] lg:h-[200px]  md:h-[100px] ">
                              <span className="break-all"> <img src={data?.blogs[3]?.image} alt="" className="  w-full h-full " /></span>
                              <h3 className=" ml-4 text-[16px] font-semibold">{data?.blogs[3]?.title.substring(0,50)}</h3>
                            </div></Link>
                          <Link to={`/single/blog/${data?.blogs[4]?._id}/${data?.blogs[0]?.Slug?data?.blogs[4]?.Slug:"Slug"}`}>
                          <div className="lg:w-[300px] md:w-[150px] lg:h-[200px]  md:h-[100px] border ">
                              <span className="break-all"> <img src={data?.blogs[4]?.image} alt="" className="   w-full h-full" /></span>
                              <h3 className=" ml-4 text-[16px] font-semibold ">{data?.blogs[4]?.title.substring(0,50)}</h3>
                            </div>
                          </Link>
                          </div>
                          <div>
                          <div className="flex gap-x-9 mt-28 mb-20 ">
                           <Link to={`/single/blog/${data.blogs[5]?._id}/${data?.blogs[5]?.Slug?data?.blogs[4]?.Slug:"Slug"}`}>
                           <div className="lg:w-[300px] md:w-[150px] lg:h-[200px]  md:h-[100px]  ">
                              <span className="break-all"> <img src={data?.blogs[5]?.image} alt="" className="    h-full w-full" /></span>
                              <h3 className=" ml-4 text-[16px] font-semibold">{data?.blogs[5]?.title.substring(0,50)}</h3>
                            </div>
                           </Link>
                           <Link to={`/single/blog/${data?.blogs[6]?._id}/${data?.blogs[6]?.Slug?data?.blogs[4]?.Slug:"Slug"}`}> <div className=" lg:w-[300px] md:w-[150px] lg:h-[200px]  md:h-[100px]">
                              <span className="break-all"> <img src={data?.blogs[6]?.image} alt="" className="  h-full w-full" /></span>
                              <h3 className="  ml-4 text-[16px] font-semibold">{data?.blogs[6]?.title.substring(0,50)}</h3>
                            </div></Link>
                          </div>
                          </div>
                         </div>
                        </div>
                        <div className="md:border-l-2  md:ml-2 md:pl-2  md:w-[40%] break-all ">
                       <Link to={`/single/blog/${data?.blogs[1]?._id}/${data?.blogs[1]?.Slug?data?.blogs[4]?.Slug:"Slug"}`}>  <img src={data?.blogs[1]?.image} alt="" className="md:ml-2 lg:w-[500px] md:w-[300px] w-[300px]" />
                         <span>
                          <h3 className="mt-5 font-semibold text-[15px] pl-2 mb-5">{data?.blogs[1]?.title}</h3>
                         </span></Link>
                       <Link to={`/single/blog/${data?.blogs[2]?._id}/${data?.blogs[2]?.Slug?data?.blogs[4]?.Slug:"Slug"}`}>  <img src={data?.blogs[2]?.image} alt="" className="md:ml-2 lg:w-[500px] md:w-[300px] w-[300px]" />
                         <span>
                          <h3 className="mt-5 font-semibold text-[15px] pl-2 mb-5">{data?.blogs[2]?.title}</h3>
                         </span></Link>
                        </div>
                      </div>
                      </div>
                      
                      </>
                    )
                  })
                }
              </div>
            </div>
         
        </div>
    </div>
  )
}

export default Show_cetagory_in_home