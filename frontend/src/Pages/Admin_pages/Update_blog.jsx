import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'
// import List from '@editorjs/list'
import Embed from '@editorjs/embed';
import NestedList from '@editorjs/nested-list'
import { useEffect, useRef, useState } from 'react';
import Marker from '@editorjs/marker'
// import Code from '@editorjs/code'
import ImageTool from '@editorjs/image';
import DragDrop from "editorjs-drag-drop";
import Underline from '@editorjs/underline'
// import { blogs_api_data, cetagory_api_data, cetagory_selected } from '../../Redux/api_data_slice';
// import { useDispatch, useSelector } from 'react-redux';
import { MdArrowDropDown } from "react-icons/md";
import { useSingle_blogQuery, useUpdate_blogMutation} from '../../Redux/Api'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {toast} from 'react-toastify'

function Update_blog() {
  let toast_ref=useRef()
  let {id}=useParams()
  let {data}=useSingle_blogQuery(id)
  
  // let dispatch=useDispatch()
  let main_img_ref=useRef()
  let editor_js_ref=useRef(null)
  let [blog_data_state,setblog_data_state]=useState({
    title:data?.blog_get?.title,
    blog_thumbnail:data?.blog_get?.image,
    cetagory:data?.blog_get?.cetagory,
    subcetagory:data?.blog_get?.subcetagory
  })
  
  let [seo_content,setseo_content]=useState({
    metaTitle:"",
    metaDescription:"",
    slug:""
  })

  let [editor_date,seteditor_date]=useState(
    data?.blog_get?.content[0]
  )


  
 let ceatgory_state=useSelector((state)=>state.Api_data_slice.cetagory)
 let [cetagory_list,setcetagory_list]=useState(false)
//  let [subselected_cetagory,setsubsetselected_cetagory]=useState()
 let [subcetagory_list,setsubcetagory_list]=useState(false)
 






let editorJs_function=async()=>{
  
    const editor = editor_js_ref.current=  new EditorJS({
        holder:"editorjs",
        placeholder:"write something",
        data:editor_date,
        onReady:()=>{
          new DragDrop(editor);
          
        },
        tools: {
            header: {
                class: Header,
                config: {
                    placeholder: 'Enter a heading',
                    levels: [1,2, 3, 4,5,6],
                    defaultLevel: 3
                  }
              },
              List:{
                class:NestedList,
                inlineToolbar:true,
                config:{
                   defaultStyle: 'unordered'
                }
              },
              
           
              Underline:{
                class:Underline,
                shortcut: 'CMD+U'
              },
              Marker:{
                class:Marker,
                shortcut: 'CMD+M'
              },
              Embed:{
                class:Embed,
                inlineToolbar:true,
               
              },
              Image:{
                class:ImageTool,
                config:{
                  uploader:{
                    uploadByFile:async(image)=>{
                   return   {
                        success : 1,
                       file: {
                        url : URL.createObjectURL(image),
                          image,
                          
                            // ... and any additional fields you want to store, such as width, height, color, extension, etc
                        }
                    }
                    
                    }
                  }
                }
              }
              
          },
          onChange:async()=>{
         let data=await editor.save(editor_date)
          seteditor_date(data)
        // setdata_from_editor_js((perv)=>([{...perv},data]))
        // setblog_data_state((perv)=>([{...perv},{content:data}]))
         
      //  let Edior_data = data.blocks.map((data)=>{
      //   return data
      //  },
     
      //    )
     
      
          }
    }); 
   
}

useEffect(()=>{
  if (editor_js_ref.current==null) {
    editorJs_function()
   }
},[])


let form=new FormData()
form.append("title",blog_data_state.title)
form.append("cetagory",blog_data_state.cetagory)
form.append("subcetagory",blog_data_state.subcetagory)
form.append("image",blog_data_state.blog_thumbnail)
form.append("content",JSON.stringify(editor_date))
form.append("metaTitle",seo_content.metaTitle)
form.append("metaDescription",seo_content.metaDescription)
form.append("metaSlug",seo_content.slug)
{
  editor_date&&
  editor_date?.blocks.forEach((data)=>{
    
    if (data?.data?.file?.image) {
      form.append("images",data.data.file.image)
      
      
    }
         

  })
}

{
  editor_date&&
  editor_date?.blocks.forEach((data)=>{
  if (data.type=="Image") {
    // console.log(data?.data?.file?.public_id);
    form.append("public_id",data?.data?.file?.public_id)
  }
   
  })
}
  // editor_date.content.blocks.forEach((data)=>{
   
  // // if (data.type=="Image") {

  // // }
  
   
  
   
  
  
  // })


  



let  filter_subcetagories;
// let [fnc,{data}]=useGet_for_blog_premiumMutation()
 let [fnc,{data:blog_update_data,isLoading}]=useUpdate_blogMutation()

let post_data_of_api=()=>{


  
fnc({id,form})
  if (data.success==true) {
    toast.success(data.message)
  }
  if (data.success==false) {
    toast.error(data.message)
  }
  
  
}

  if(ceatgory_state) {
    filter_subcetagories =ceatgory_state.getCetagory.filter((data)=>data.cetagory==blog_data_state.cetagory)
     
     
   }


// local storage

// useEffect(()=>{

// },[selected_cetagory])



useEffect(()=>{
  if (isLoading) {
    toast_ref.current=toast.loading("loading")
  }
  if (!isLoading) {
    toast.dismiss(toast_ref.current)
  }
  if (blog_update_data) {
    if (blog_update_data.success==true) {
      toast.success(blog_data_state.message)
    }
    if (blog_update_data.success==false) {
      toast.error(blog_data_state.message)
    }
  }
},[blog_update_data,isLoading])



if (!data) {
  return
}


  return (
    <>   
     
    <div className='mt-5 font-bold px-10'>
      
    <span className=' text-[20px] md:w-[89%] flex  items-center justify-between px-20 md:flex-row flex-col-reverse gap-y-7 md:gap-y-0   '><h3 className=''>Update blog</h3>
    <button onClick={()=>post_data_of_api()} className='bg-black text-white px-2 h-9 text-[17px] font-semibold   '  >Submit blog</button>
    </span>
        <div className='flex md:flex-row flex-col justify-center mt-8 gap-x-5 gap-y-3 md:gap-y-0 '>
        <span className='flex flex-col '><input type="text" name="" id="" className='md:w-[500px] w-[100%] border h-fit px-4 outline-none   ' placeholder='Enter your Title' value={blog_data_state.title} onChange={(e)=>setblog_data_state((perv)=>({...perv,title:e.target.value}))}  />
       <div className='flex flex-col     my-6 '>
       <label htmlFor="" className='text-[15px] text-center mb-4'>Cetagory</label>
      <span className='flex w-full  justify-end ' onClick={()=>setcetagory_list(!cetagory_list)} >
      <input type="text" className='outline-none border w-[100%] relative cursor-pointer select-none px-3 font-semibold ' readOnly value={blog_data_state.cetagory}  />
      <MdArrowDropDown className='text-[30px]  absolute ' />
      </span>
     <div className={`mt-2 border ${cetagory_list?"block":"hidden"} `}>
     {
        ceatgory_state&&
        ceatgory_state.getCetagory.map((data)=>{
          return(
            <>
            <div onClick={()=>{
              setblog_data_state((perv)=>({...perv,cetagory:data.cetagory}))
              setcetagory_list(false)
            }} className='my-2 pl-4 active:bg-slate-500 cursor-pointer'>
              <span>{data.cetagory}</span>
            </div>
            
            </>
          )
        })
      }
     </div>
       </div>
       {/* sub cetagories */}
{


  <div className='flex flex-col     my-6 '>
  <label htmlFor="" className='text-[15px] text-center mb-4'>Subcetagory</label>
 <span className='flex w-full  justify-end ' onClick={()=>setsubcetagory_list(!subcetagory_list)} >
 <input type="text" className='outline-none border w-[100%] relative cursor-pointer select-none px-3 font-semibold ' readOnly value={blog_data_state.subcetagory}     />
 <MdArrowDropDown className='text-[30px]  absolute '/>
 </span>
 <div className={`${subcetagory_list?"block":"hidden"}`}>
 { filter_subcetagories &&
  filter_subcetagories[0]?.subCetagory.map((data)=>{
    
return(
  <>
  <div onClick={()=>{
    setblog_data_state((perv)=>({...perv,subcetagory:data}))
    setsubcetagory_list(false)
  }} className='my-2 pl-4 active:bg-slate-500 cursor-pointer'>
  <span>
    {data}
  </span>
</div>
  
  </>
)
  })
 }
 </div>
 <div className='flex flex-col mt-4'>
      <label htmlFor="" className='text-center mb-3'>Meta title</label>
      <input type="text" className='outline-none border px-3 font-semibold' placeholder='Enter your meta title' onChange={(e)=>setseo_content((perv)=>({...perv,metaTitle:e.target.value}))}/>
      <label htmlFor="" className='text-center mb-3 mt-2'>Meta Description</label>
      <input type="text" className='outline-none border px-3 font-semibold' placeholder='Enter your meta Description ' onChange={(e)=>setseo_content((perv)=>({...perv,metaDescription:e.target.value}))}/>
      <label htmlFor="" className='text-center mb-3 mt-2'>Slug</label>
      <input type="text" name="" id="" className='outline-none border px-3 font-semibold ' placeholder='Enter your Slug' onChange={(e)=>setseo_content((perv)=>({...perv,slug:e.target.value}))} />
    </div>
  </div>
}
        </span>
        <span><input type="file" name="" id="" ref={main_img_ref} className='hidden' onChange={(e)=>setblog_data_state((perv)=>({...perv,blog_thumbnail:e.target.files[0]}))} /></span>
<span className='flex flex-col items-center'>
<img src={blog_data_state.blog_thumbnail} alt="" className='w-[300px]' />
<button onClick={()=>main_img_ref.current.click()} className='bg-black text-white w-full h-9 mt-5'>Add blog thumbnil</button>

</span>
        </div>
    </div>
    <div className=' flex flex-col items-center mt-3 mx-10 w-[78%]   '>
    <div className='w-full' id='editorjs' ></div>
    </div>
    
    </>
  )
}

export default Update_blog


