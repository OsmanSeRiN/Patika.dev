import { createSlice, nanoid } from "@reduxjs/toolkit";

export const dataset = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        title: "redux",
        isSelected: true,
      },
      {
        id: 2,
        title: "type script",
        isSelected: false,
      },
      {
        id: 3,
        title: "react native",
        isSelected: false,
      }
    ],
    activeFilter:"All",
  },
  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload);
    },
    prepare: ({title}) => {
        return {
          payload:{
            id:nanoid(4),
            isSelected:false,
            title:title,
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
    destroy: (state,action) =>{
        const {id} = action.payload;
        const filtered = state.items.filter((item) => item.id !==id)
        state.items = filtered
    },
    changeFilter: (state,action) => {
      state.activeFilter = action.payload
    }
  },
});

export const { addItem, toggle, destroy, changeFilter } = dataset.actions;
export default dataset.reducer;
