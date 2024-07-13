import { createSlice } from "@reduxjs/toolkit";

export const list = createSlice({
    name:"list",
    initialState:{
        items:[],
    },
    reducers:{
      addItem:(state,action)=>{
            state.items.push(action.payload);
      }
    },
},)

export const {addItem} = list.actions