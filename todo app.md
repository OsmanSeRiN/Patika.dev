# TODO APP

### 1- Add Mission

I defined a reducer called addItem to add tasks to your todo.

![new mission image](./todo%20app/Image/newMission.png)


dataset.js
```javascript
...
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
...
```

todoInput.jsx
```javascript
const handleSubmit = (e) => {
    e.preventDefault();
    const ID = nanoid(5)

    dispatch(addItem(
      {
        title:value,
      }
    ))
    setValue("")
  };
```

### 2- Mission Completion

In the same way, I created an action named toggle in my store

![toggle image](./todo%20app/Image/toggle.png)

dataset.js
```javascript
...
 toggle: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.isSelected = !item.isSelected;
      }
    },
...
```
TodoItemjsx
```javascript
 const onTodo = () => {
    dispatch(toggle({ id: todo.id }));
  };
```

### 3- Mission Delete

I created delete function for the item in todolist.

![delete image](./todo%20app/Image/delete.png)

dataset.js
```javascript
...
destroy: (state,action) =>{
        const {id} = action.payload;
        const filtered = state.items.filter((item) => item.id !==id)
        state.items = filtered
    },
...
```
TodoItem.jsx
```javascript
const Delete = () =>{
    if(window.confirm("Are you sure?")){
      dispatch(destroy({id: todo.id}))
    }
  }
```

### Items Filtered

I created a filter function for filtering.

![filter image](./todo%20app/Image/filter.png)

dataset.js

```javascript
...
    changeFilter: (state,action) => {
      state.activeFilter = action.payload
    }
  },
});

export const { addItem, toggle, destroy, changeFilter } = dataset.actions;
export default dataset.reducer;
```

TodoList.jsx
```javascript
    const items = useSelector(state => state.todos.items);
    const activeFilter = useSelector(state => state.todos.activeFilter);

    console.log("Active Filter " + activeFilter)

    let filterItems =[]


    if (activeFilter !== "All") {
      filterItems = items.filter((todo) => (activeFilter === "Active" ? todo.isSelected === false && todo : todo.isSelected === true && todo));
    }else {
      filterItems = items
    }
```