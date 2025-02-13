import { Link } from "react-router-dom";
import { useBlogsQuery } from "../../Redux/Api";

function All_blogs_Admin() {
let {data}=useBlogsQuery()
  return (
    <div>
        <div>
            <h2 className="text-center py-10 text-[25px] font-bold">All blogs</h2>
            <div className="flex flex-col px-20  gap-10  flex-wrap ">
                {
                    data&&
                    data?.get_blog.map((data)=>{
                        return(
                            <>
                            <Link to={`/single/blog/${data?._id}`}>
                            <div className="flex items-center justify-between border-b">
                                <div className="flex items-center">
                                <span className="w-[100px]">
                                    <img src={data?.image} alt="" className="w-[200px] max-h-[100px] mb-4"/>
                                </span>
                                <span className="ml-5">{data?.title}</span>
                                </div>
                                <div>
                                    <Link to={`/update/blog/${data?._id}`}><button className="bg-black text-white w-[80px] rounded-xl">Edit</button></Link>
                                </div>
                            </div></Link>
                            </>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default All_blogs_Admin