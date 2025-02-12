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
import {toast} from 'react-toastify'
// import { blogs_api_data, cetagory_api_data, cetagory_selected } from '../../Redux/api_data_slice';
// import { useDispatch, useSelector } from 'react-redux';
import {  usePrivacy_ApiMutation } from '../../Redux/Api';
function Privacy() {
  let [AboutApifnc,{data}]=usePrivacy_ApiMutation()
    let editor_js_ref=useRef(null)

    let [editor_date,seteditor_date]=useState()
    console.log(editor_date);


    let form=new FormData()

    form.append("content",JSON.stringify(editor_date))

    {
      editor_date&&
      editor_date?.blocks.forEach((data)=>{
        
        if (data.type=="Image") {
          console.log(data?.data?.file?.image);

          
           form.append("images",data?.data?.file?.image)
          
          
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
    let Submit_About_data=()=>{
      AboutApifnc(form)
    }
    
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
    console.log(editor_date);
    
    useEffect(()=>{
      if (editor_js_ref.current==null) {
        editorJs_function()
       }
    },[])

    useEffect(()=>{
      if (data) {
        if(data.success==false){
          toast.error(data.message)
        }
        if(data.success==true){
          toast.success(data.message)
        }
      }
          },[data])

  return (
    <div className="pt-10 flex flex-col items-center">
        <div className="px-20 md:w-[65%] ">
          <div className='flex justify-between items-center'>
            <span><h3 className=" font-bold text-[24px] text-center ">Privacy</h3></span>
          <span className='ml-20 bg-black text-white w-[100px] text-center rounded-lg cursor-pointer' onClick={()=>Submit_About_data()}>Submit</span>
          </div>
       <div>
       <div className='w-full mt-10' id='editorjs' ></div>
       </div>
        </div>
    </div>
  )
}

export default Privacy