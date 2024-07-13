import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Asenkron Thunk'lar
export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
  try {
    const res = await axios(`${process.env.REACT_APP_API_ENDPOINT}/todos`);
    return await res.data;
  } catch (error) {
    console.log('Fetching todos failed: ' + error.message);
  }
});

export const addTodoAsync = createAsyncThunk("todos/addTodoAsync", async (data) => {
  const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/todos`, data);
  return res.data;
});

export const toggleTodoAsync = createAsyncThunk("todos/toggleTodoAsync",async ({id,data}) => {
  const res = await axios.patch(`${process.env.REACT_APP_API_ENDPOINT}/todos/${id}`,data);
  return res.data;
})
export const removeTodoAsync = createAsyncThunk("todos/removeTodoAsync",async ({id}) => {
  const res = await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/todos/${id}`);
  return res.data;
})


export const dataset = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    busy: false,
    error: null,
    activeFilter: "All",
  },
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }) => {
        return {
          payload: {
            title: title,
          }
        };
      }
    },
    toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.isSelected = !item.isSelected;
      }
    },
    destroy: (state, action) => {
      const { id } = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // Get Items
      .addCase(getTodosAsync.pending, (state) => {
        state.busy = true;
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.items = action.payload;
        state.busy = false;
      })
      .addCase(getTodosAsync.rejected, (state, action) => {
        state.busy = false;
        state.error = action.error.message;
      })
      // Set Items
      .addCase(addTodoAsync.pending,(state,action)=>{
       state.busy = true;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.busy = false;
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.items.push(action.payload);
        state.busy = false;
        state.error = action.error.message;
      })
      // Toggle Todo
      .addCase(toggleTodoAsync.pending ,(state,action) =>{
        //state.busy =true
      })
      .addCase(toggleTodoAsync.fulfilled ,(state,action) =>{
        const value = action.payload;
        const index = state.items.findIndex((item) => item.id === value.id)
        state.items[index].isSelected = value.isSelected
        state.busy =false
      })
      .addCase(removeTodoAsync.pending ,(state,action) =>{
        state.busy = true;
      } )
      .addCase(removeTodoAsync.fulfilled ,(state,action) =>{
        state.items = action.payload;
        state.busy = false;
      } )




  }
});

export const { changeFilter } = dataset.actions;
export default dataset.reducer;
