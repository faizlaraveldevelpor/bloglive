import { useGet_cetagoryQuery } from "../Redux/Api"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";
function Footer() {
    let {data}=useGet_cetagoryQuery()

  return (
    <div className="bg-[#F0F0F0] w-full py-4">
    <div className="mx-[4%] ">
        <div className="md:flex  gap-8 border-b-2 pb-1 border-black md:flex-nowrap flex-wrap">
         <span className="text-[27px] font-semibold cursor-pointer   ">Thoughtlab360</span>
         <span className="text-[15px] font-bold flex gap-x-6 mt-2 flex-wrap">
         {
          data&&
          data.getCetagory.map((data,i)=>{
            return(<>
            <span className="flex flex-col mb-3 pt-1 cursor-pointer " key={i} >
              {data.cetagory}
            </span>
          
            
            </>)
          })
        }
        
         </span>
        </div>
       <div className="flex md:justify-between justify-center md:pb-0 md:px-0 pb-4 px-2 flex-wrap">
 
     <div className="w-[350px] mt-5 md:block hidden">
     <span className="max-w-[100px] break-all">
     ThoughLab360 offers in-depth coverage on science, politics, current affairs, world events, and history. We also provide a platform for individuals to publish their articles and share their insights with a wider audience.
    </span>
     </div>
         <div>
     <span className="">
      <h3 className="mt-5 font-bold text-[17px]">Quick Links</h3>
    <div className="flex flex-col font-semibold mt-3 gap-y-4 ">
<Link to={'/'}><span className="cursor-pointer">Home</span></Link>
<Link to={'/about'}><span className="cursor-pointer">About us</span></Link>
    <Link to={'/privacy'}><span className="cursor-pointer">Privacy policy</span></Link>
<Link to={"disclamer"}><span className="cursor-pointer">Disclamer</span></Link>
<Link to={'/term'}><span className="cursor-pointer">Terms condition</span></Link>
    </div>
    </span>
     </div>
     <div className="items-center  lg:w-[40%]  w-full md:flex-none flex-col ">
   <div className="flex mt-5 gap-x-7 text-[25px] justify-center ">
<FaFacebook className="cursor-pointer"/>
<FaSquareInstagram className="cursor-pointer"/>
<CiLinkedin className="cursor-pointer"/>
<FaPinterest className="cursor-pointer"/>
<FaYoutube className="cursor-pointer"/>
<FaReddit className="cursor-pointer"/>
   </div>
   <span className="flex flex-col items-center  w-full">
    <input type="text" className="md:w-[400px] w-[100%] h-[40px] px-5 mt-8 outline-none" placeholder="Enter your email" /><br />
    <button className="bg-black text-white w-[100%] md:w-[50%] mt-1 h-9 font-bold">Sign up</button>
   </span>
     </div>
       </div>
    </div>    
   
    </div>
  )
}

export default Footer