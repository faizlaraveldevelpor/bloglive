import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'
import Embed from '@editorjs/embed';
import NestedList from '@editorjs/nested-list'
import { useEffect, useRef, useState } from 'react';
import Marker from '@editorjs/marker'
import ImageTool from '@editorjs/image';
import DragDrop from "editorjs-drag-drop";
import Underline from '@editorjs/underline'
import {  cetagory_selected } from '../../Redux/api_data_slice';
import { useDispatch, useSelector } from 'react-redux';
import { MdArrowDropDown } from "react-icons/md";
import {useCreate_blogMutation, useGet_cetagoryQuery} from '../../Redux/Api'
import {toast} from 'react-toastify'
function Create_blog() {

  let [fnc,{data,isLoading}]=useCreate_blogMutation()
  let cetagory_selected_useslator=useSelector((state)=>state.Api_data_slice.cetagory_selected)
  let {data:cetagory_data}=useGet_cetagoryQuery()
  
  let dispatch=useDispatch()
  let main_img_ref=useRef()
  let toast_ref=useRef()
  let editor_js_ref=useRef(null)
  let [blog_data_state,setblog_data_state]=useState({
    title:"",
    blog_thumbnail:"",
    cetagory:"",
    subcetagory:""
  })
  
  let [seo_content,setseo_content]=useState({
    metaTitle:"",
    metaDescription:"",
    slug:""
  })
  let [editor_date,seteditor_date]=useState({
    content:""
  })


  
 let ceatgory_state=useSelector((state)=>state.Api_data_slice.cetagory)
let [cetagory_list,setcetagory_list]=useState(false)
 let [subselected_cetagory,setsubsetselected_cetagory]=useState()
let [subcetagory_list,setsubcetagory_list]=useState(false)
 


useEffect(()=>{
  setblog_data_state((perv)=>({...perv,subcetagory:subselected_cetagory}))
  setblog_data_state((perv)=>({...perv,cetagory:cetagory_selected_useslator}))
},[cetagory_selected_useslator,subselected_cetagory])

let editorJs_function=async()=>{
  
    const editor = editor_js_ref.current=  new EditorJS({
        holder:"editorjs",
        placeholder:"write something",
     
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
                          image
                            // ... and any additional fields you want to store, such as width, height, color, extension, etc
                        }
                    }
                    
                    }
                  }
                }
              }
              
          },
          onChange:async()=>{
         let data=await editor.save()
         
        // setdata_from_editor_js((perv)=>([{...perv},data]))
        // setblog_data_state((perv)=>([{...perv},{content:data}]))
         
      //  let Edior_data = data.blocks.map((data)=>{
      //   return data
      //  },
     
      //    )
     
      seteditor_date(data)
      
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
if(editor_date.blocks)
editor_date.blocks.forEach((data)=>{
if(data.data.file){
  form.append("images",data.data.file.image)
}

})


let  filter_subcetagories;
// let [fnc,{data}]=useGet_for_blog_premiumMutation()
let post_data_of_api=()=>{
  
  
  fnc(form)

  // if (data?.success==true) {
  //   toast.success(data.message)
  // }else if (data?.success==false||isError) {
  //   toast.error(data.message)
  // }

}


useEffect(()=>{
  if (isLoading) {
   toast_ref.current= toast.loading("loading")
  }
  if (!isLoading) {
    toast.dismiss(toast_ref.current)
  }

  if (data?.success==true) {
    toast.success(data.message)
  } if (data?.success==false) {
    toast.error(data.message)
  }
},[data,isLoading])

  if(ceatgory_state) {
    filter_subcetagories =ceatgory_state.getCetagory.filter((data)=>data.cetagory==cetagory_selected_useslator)
     
     
   }


// local storage

// useEffect(()=>{

// },[selected_cetagory])









  return (
    <>   
     
    <div className='mt-5 font-bold px-10'>
      
    <span className=' text-[20px] md:w-[89%] flex  items-center justify-between px-20 md:flex-row flex-col-reverse gap-y-7 md:gap-y-0   '><h3 className=''>Create blog</h3>
    <button onClick={()=>post_data_of_api()} className='bg-black text-white px-2 h-9 text-[17px] font-semibold    '  >Submit blog</button>
    </span>
        <div className='flex md:flex-row flex-col justify-center mt-8 gap-x-5 gap-y-3 md:gap-y-0 '>
        <div className='flex flex-col '><input type="text" name="" id="" className='md:w-[500px] w-[100%] border h-[40px] px-4 outline-none   ' placeholder='Enter your Title' value={blog_data_state.title} onChange={(e)=>setblog_data_state((perv)=>({...perv,title:e.target.value}))}  />
       <div className='flex flex-col     my-6 '>
       <label htmlFor="" className='text-[15px] text-center mb-4'>Cetagory</label>
      <span className='flex w-full  justify-end ' onClick={()=>setcetagory_list(!cetagory_list)}>
      <input type="text" className='outline-none border w-[100%] relative cursor-pointer select-none px-3 font-semibold ' readOnly value={!cetagory_selected_useslator?"cetagory":cetagory_selected_useslator} />
      <MdArrowDropDown className='text-[30px]  absolute '/>
      </span>
       <div className={`${cetagory_list?"block":"hidden"} overflow-scroll h-fit  overflow-x-hidden cusSc`}>
       {
        cetagory_data&&
        cetagory_data.
          getCetagory.map((data,i)=>{
            return(
              <>
             <div className={`${i===0?"mt-3":"mb-1 mt-5"} pl-2`} onClick={()=>dispatch(cetagory_selected(data.cetagory))}>
             <span className='cursor-pointer' onClick={()=>setcetagory_list(false)}>
                {data.cetagory}
              </span>
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
 <span className='flex w-full  justify-end ' onClick={()=>setsubcetagory_list(!subcetagory_list)}>
 <input type="text" className='outline-none border w-[100%] relative cursor-pointer select-none px-3 font-semibold ' readOnly value={subselected_cetagory?subselected_cetagory:"select subcetagory"}     />
 <MdArrowDropDown className='text-[30px]  absolute '/>
 </span>
  <div className={`${subcetagory_list?"block":"hidden"} overflow-scroll h-fit  overflow-x-hidden cusSc `}>
  {
   filter_subcetagories&&
   filter_subcetagories.map((data,i)=>{
     
     
       return(
         <>
        <div className={`${i===0?"mt-3":"mb-1 mt-5"}  pl-2`} >
        <span className='cursor-pointer flex flex-col ' onClick={()=>{
          setsubcetagory_list(false)
          
        }}>
           {data.subCetagory.map((data)=>{
            
            
             return(
               <>
              <span onClick={()=>{
                setsubsetselected_cetagory(data),
                setsubcetagory_list(false)
              }
              } className='mb-2 pl-1'>
              {data}
              </span>
               </>
             )
           })}
         </span>
        </div>
         
         </>
       )
     })
   }
  </div>
  <div className=''>
    <div className='flex flex-col mt-4'>
      <label htmlFor="" className='text-center mb-3'>Meta title</label>
      <input type="text" className='outline-none border px-3 font-semibold' placeholder='Enter your meta title' onChange={(e)=>setseo_content((perv)=>({...perv,metaTitle:e.target.value}))}/>
      <label htmlFor="" className='text-center mb-3 mt-2'>Meta Description</label>
      <input type="text" className='outline-none border px-3 font-semibold' placeholder='Enter your meta Description ' onChange={(e)=>setseo_content((perv)=>({...perv,metaDescription:e.target.value}))}/>
      <label htmlFor="" className='text-center mb-3 mt-2'>Slug</label>
      <input type="text" name="" id="" className='outline-none border px-3 font-semibold ' placeholder='Enter your Slug' onChange={(e)=>setseo_content((perv)=>({...perv,slug:e.target.value}))} />
    </div>
  </div>
  </div>
  
  
}
        </div>
        <span><input type="file" name="" id="" ref={main_img_ref} className='hidden' onChange={(e)=>setblog_data_state((perv)=>({...perv,blog_thumbnail:e.target.files[0]}))} /></span>
<span className='flex flex-col items-center'>
  {
    blog_data_state.blog_thumbnail&&
    <img src={URL.createObjectURL(blog_data_state.blog_thumbnail)} alt="" className='w-[300px]' />

  }
<button onClick={()=>main_img_ref.current.click()} className='bg-black text-white  h-9 mt-5 w-[300px]'>Add blog thumbnil</button>

</span>
        </div>
    </div>
    <div className=' flex flex-col items-center mt-3 mx-10 w-[78%]   '>
    <div className='w-full' id='editorjs' ></div>
    </div>
    
    </>
  )
}

export default Create_blog