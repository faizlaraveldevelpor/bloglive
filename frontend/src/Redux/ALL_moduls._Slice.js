import { createSlice } from "@reduxjs/toolkit";
let All_moduls=createSlice({
    name:"moduls",
    initialState:{
        Auth_moduls_state:false,
        register_moduls_state:false,
        cetagory_module_state:false,
        login_user:JSON.parse(localStorage.getItem("user"))||[],
        like_state:null,
        comment_initial_state:false,
        user_profile_state:false
    },
    reducers:{
        Auth_moduls_fnc:(state,actions)=>{
            state.Auth_moduls_state=actions.payload
        },
        register_toggle:(state,actions)=>{
          state.register_moduls_state=actions.payload
        },
        cetagory_toggle_fnc:(state,actions)=>{
            state.cetagory_module_state=actions.payload
          },
          login_user_data:(state,actions)=>{
            localStorage.setItem("user",JSON.stringify(actions.payload))
           state.login_user=actions.payload
          },
          comment_fnc:(state,actions)=>{
          state.comment_initial_state=actions.payload
          console.log(state.comment_initial_state);
          
          },
          like:(state,actions)=>{
         state.like_state=actions.payload
         if (actions.payload) {
            state.like_state=true
         }
          },
          user_profile:(state)=>{
         state.user_profile_state=!state.user_profile_state
         console.log(state.user_profile_state);
         
          }
    }  
  
})
export default All_moduls.reducer
export const {Auth_moduls_fnc,register_toggle,cetagory_toggle_fnc,login_user_data,like,comment_fnc,user_profile}=All_moduls.actions