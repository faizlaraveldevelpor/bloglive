import Image from '../../assets/8cce5d86-5844-44ac-b2ba-dcdd7fa4173a-removebg-preview.png'
import Image2 from '../../assets/28d70ff8-8bcb-4dc9-9241-fb452697bb39-removebg-preview.png'
// import Image3 from '../../assets/7656fdb1-8b6c-49f8-9a3f-0b834b953bca-removebg-preview.png'
import Image4 from '../../assets/speech_bubble_001g_09-removebg-preview.png'
import Image5 from '../../assets/127-removebg-preview.png'
import Admin_home_page_part2 from "./Admin_home_page_part2";
import { useBlogsQuery } from "../../Redux/Api";
function Admin_Home_page() {
    let {data}=useBlogsQuery()  
    let comments=[]
    data?.get_blog&&
    data?.get_blog.forEach((data)=>{
if (data?.comments) {
  let collect=  data?.comments.length
   comments.push(collect)
 
}


    })

let push_inArray_comments= comments.filter((data)=>data>0)
let all_comments=0
for (let i = 0; i < push_inArray_comments.length; i++) {
 
    all_comments+=push_inArray_comments[i]
}



  return (
    <div>
        
        <div className="bg-[#F7F8FA]">
        <div className="pt-4 md:px-24 px-20 ">
        <div className="flex items-center justify-between">
       <div className="flex items-center">
       </div>
        <div>
     
        </div>
        </div>   
        <div className="mt-10 "><span className="font-semibold text-black text-[30px]  ">WELCOME BACK</span>
       
        </div>
        <div className="flex md:flex-row flex-col  mt-10">
            
        <div className="mb-20 md:w-[30%]  ">
            <div className="  flex flex-col-reverse    bg-slate-200 rounded-lg shadow-2xl border-2  pt-5 ">
            <span className=" w-[200px] h-[150px] ">
                <img src={Image} alt="img" />
            </span>
            <span className="font-bold md:text-[18px] text-[12px] text-gray-500  bg-slate-100 rounded-l-md min-w-full pl-2 text-center">Faiz ansari</span>
          
            </div>
        </div>
        <div>
        <div className="mb-20 md:ml-12">
            <div className="  flex flex-col-reverse  bg-slate-200 rounded-lg shadow-md border  pt-5 ">
            <span className=" w-[180px] h-[100px]  ">
                <img src={Image2} alt='' className="w-full h-fit" />
            </span>
            <span className="font-bold md:text-[18px] flex justify-between text-[12px] items-center text-gray-500 pr-8 bg-slate-100 rounded-l-md h-fit pl-2"><h3 >Total blogs</h3> <p className="text-[14px] ">({data?.get_blog?.length})</p></span>
          
            </div>
        </div>
        </div>
        <div>
        <div className="mb-20 md:ml-12 md:w-[240px]">
            <div className="  flex-col-reverse flex    bg-slate-200 rounded-lg  shadow-md border  pt-5   ">
            <span className=" w-[120px] h-[100px] flex justify-center ">
                <img src={Image4} alt='' className="w-full h-fit" />
            </span>
            <span className="font-bold md:text-[18px] flex justify-between text-[12px] items-center text-gray-500 pr-8 bg-slate-100 rounded-l-md h-fit pl-2"><h3 >Total comments</h3> <p className="text-[14px] ">{all_comments}</p></span>
          
            </div>
        </div>
        </div>
        <div>
        <div className="mb-20 md:ml-12 md:w-[240px]">
            <div className="  flex-col-reverse flex    bg-slate-200 rounded-lg shadow-md border  pt-5   ">
            <span className=" w-[120px] h-[100px] flex justify-center ">
             <span>
             <img src={Image5} alt='' className="w-full h-full" />
             </span>
            </span>
            <span className="font-bold md:text-[18px] flex justify-between items-center text-[12px] text-gray-500 pr-8 bg-slate-100 rounded-l-md h-fit pl-2"><h3>Total Like</h3> <p className="text-[14px] ml-5">10202</p></span>
          
            </div>
        </div>
        </div>
        <div>
     
        </div>
        </div> 
        </div> 
        <Admin_home_page_part2/>
        </div>
    </div>
  )
}

export default Admin_Home_page