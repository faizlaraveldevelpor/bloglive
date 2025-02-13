import { useGetAbout_ApiQuery } from "../Redux/Api"

function About() {
    let {data}=useGetAbout_ApiQuery()
    console.log(data);
    
  return (
  <div className="flex flex-col items-center mb-4">
      <div className="md:w-[65%] px-5 ">
        <h3 className="text-center mt-8 font-bold text-[30px]">About</h3>
      <div className="  text-start flex flex-col items-center md:px-20 px-10 leading-8     mt-10    ">
  {data&&
 
 data?.find?.[0]?.content?.[0]?.blocks.map((data)=>{
        if (data.type=='header'&& data.data.level==1) {
         return(
         <>
          <span className="text-[30px] font-bold mt-10 line ">
          <h1 dangerouslySetInnerHTML={{__html:data.data.text}}>

          </h1>
        </span>
         
         </>
         )
        }  if(data.type=='header'&& data.data.level==2){
             return(
              <>
              <span className="text-[25px] font-bold mt-10">
              <h2 dangerouslySetInnerHTML={{__html:data.data.text}}>
    
              </h2>
            </span>
             
             </>
             )
        } if(data.type=='header'&& data.data.level==3){
          return(
           <>
           <span className="text-[20px] font-bold mt-10 ">
           <h2 dangerouslySetInnerHTML={{__html:data.data.text}}>
 
           </h2>
         </span>
          
          </>
          )
     } if(data.type=='header'&& data.data.level==4){
      return(
       <>
       <span className="text-[16px] font-bold mt-10">
       <h2 dangerouslySetInnerHTML={{__html:data.data.text}}>

       </h2>
     </span>
      
      </>
      )
 } 
 if(data.type=='header'&& data.data.level==5){
  return(
   <>
   <span className="text-[15px] font-bold mt-10">
   <h2 dangerouslySetInnerHTML={{__html:data.data.text}}>

   </h2>
 </span>
  
  </>
  )
} 
if(data.type=='header'&& data.data.level==6){
  return(
   <>
   <span className="text-[13px] font-bold mt-10">
   <h2 dangerouslySetInnerHTML={{__html:data.data.text}}>

   </h2>
 </span>
  
  </>
  )
} 
if(data.type=='header'&& data.data.level==7){
  return(
   <>
   <span className="text-[12px] font-bold mt-10">
   <h2 dangerouslySetInnerHTML={{__html:data.data.text}}>

   </h2>
 </span>
  
  </>
  )
} 
if(data.type=='paragraph'){
  return(
   <>
   <span className="text-[17px] mt-10 ">
   <h2 dangerouslySetInnerHTML={{__html:data.data.text}}>

   </h2>
 </span>
  
  </>
  )
} 
if(data.type=='Image'){
  return(
   <>
   <span className="text-[17px] mt-5 flex flex-col items-center ">
   <img src={data.data.file.url} alt="" className="min-w-[100%]"  />
 </span>
  
  </>
  )
} 
if(data.type=='List'|| data.data.style=="unordered"){
  return(
   <>
 
  <div>
  {
    
    data.data.items.map((data)=>{
    
      return(
        <>
        
        
       <div className="mb-5 mt-10">
       <li dangerouslySetInnerHTML={{__html:data.content}}></li>
       </div>
        
        </>
        )
     
    })
    
  }
  </div>
  
  </>
  )
} 
if(data.type=='List'|| data.data.style=="ordered"){
  return(
   <>
 <div>

 
  {
    data&&
    data.data.items.map((data,i)=>{
    
      return(
        <>
        
        <span>
         <span>{i}</span>
        <span dangerouslySetInnerHTML={{__html:data.content}}></span>
        </span>
        
        
        </>
        )
     
    })
    
  }

  </div>
  </>
  )
} 

if(data.type=='table'){
  return(
   <>
 <div>

 <table className="border-2 border-collapse">
  {
    
    // data.data.content.map((data,i)=>{
    
    //   return(
    //     <>
        
    //    <th>
    //     <tr dangerouslySetInnerHTML={{__html:data[0]}}></tr>
    //    </th>
        
        
    //     </>
    //     )
     
    // })

    
  }
</table>
  </div>
  </>
  )
} 
      })
} 
    
    
  </div>   
    </div>
  </div>
  )
}

export default About