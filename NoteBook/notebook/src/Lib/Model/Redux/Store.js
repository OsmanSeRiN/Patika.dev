import { configureStore } from "@reduxjs/toolkit";
import { list } from "./Reducer/List";


export const store = configureStore({
    reducer:{
        notes:list.reducer
    }
})