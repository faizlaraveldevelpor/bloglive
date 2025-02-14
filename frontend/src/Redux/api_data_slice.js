import { createSlice } from "@reduxjs/toolkit";

let Api_data_slice=createSlice({
    name:"api data slice",
    initialState:{
        blogs_data:null,
        cetagory:null,
        cetagory_selected:"",
        update_blog:null,
        single_blog_data:null,
        search:null,
        update_problem:null,
        login_user:[]
    },
    reducers:{
       blogs_api_data:(state,actions)=>{
        state.blogs_data=actions.payload
        console.log(state.blogs_data);
        
       },
       cetagory_api_data:(state,actions)=>{
        state.cetagory=actions.payload
        
        
       },
       cetagory_selected:(state,actions)=>{
        state.cetagory_selected=actions.payload
       },
       update_blog:(state,actions)=>{
        state.update_blog=actions.payload
        
        
       },
       single_blog_data_fnc:(state,actions)=>{
             state.single_blog_data=actions.payload
             
       },
       Search_fnc:(state,actions)=>{
       state.search=actions.payload
       },
       update_problem:(state,action)=>{
         state.update_problem=action.payload
       },
       login_user_sl_fn:(state,action)=>{
        state.login_user=action.payload
        console.log(action.payload);
        
      }
    }
})
export default Api_data_slice.reducer
export const {blogs_api_data,cetagory_api_data,cetagory_selected,update_blog,single_blog_data_fnc,Search_fnc,update_problem,login_user_sl_fn}=Api_data_slice.actions