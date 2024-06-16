import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk("todos/getTodosAsync", async () => {
  try {
    const res = await fetch("http://localhost:7000/todos");
    return await res.json();
  } catch (error) {
    console.log('Fetching todos failed: ' + error.message);
  }
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
            id: nanoid(4),
            isSelected: false,
            title: title,
          }
        }
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
      const filtered = state.items.filter((item) => item.id !== id)
      state.items = filtered;
    },
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.pending, (state, action) => {
        state.busy = true;
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.items = action.payload;
        state.busy = false;
      })
      .addCase(getTodosAsync.rejected, (state, action) => {
        state.busy = false;
        state.error = action.error.message;
      });
  }
});

export const { addItem, toggle, destroy, changeFilter } = dataset.actions;
export default dataset.reducer;
