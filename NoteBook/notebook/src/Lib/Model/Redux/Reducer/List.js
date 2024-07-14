import { filter } from "@chakra-ui/react";
import { createSlice } from "@reduxjs/toolkit";

export const list = createSlice({
    name:"list",
    initialState:{
        items:[],
        selectedItem:[],
        filterItems:[],
    },
    reducers:{
      addItem:(state,action)=>{
            state.items.push(action.payload);
      },
      selectedItem:(state,action)=>{
          state.selectedItem =action.payload
      },
      deleteItem:(state,action)=>{
        state.items = state.items.filter(item => item.title !== action.payload);
        state.filterItems = state.filterItems.filter(item => item.title !== action.payload);
      },
      filteItems:(state,action)=>{
        state.filterItems = action.payload !== "" ? state.items.filter(item => item.title === action.payload) : state.items
        console.log("Filtrelenmiş değer " + JSON.stringify(state.filterItems))
      }
    },
},)

export const {addItem,selectedItem,deleteItem,filteItems} = list.actions