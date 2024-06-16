import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosAsync } from '../Redux/Todos/dataset';
import LoadingPage from './Loading/LoadingPage';


const TodoList = () => {
    const items = useSelector(state => state.todos.items);
    const activeFilter = useSelector(state => state.todos.activeFilter);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getTodosAsync())
    },[dispatch])

    const busy = useSelector((state) => state.todos.busy)

    console.log("Active Filter " + activeFilter)

    let filterItems =[]


    if (activeFilter !== "All") {
      filterItems = items.filter((todo) => (activeFilter === "Active" ? todo.isSelected === false && todo : todo.isSelected === true && todo));
    }else {
      filterItems = items
    }

    console.log("Items:", items);
    console.log("Filter:", filterItems);

    return (
        <>
          {
            busy ? <LoadingPage/> :
            <ul className="todo-list">
            {filterItems.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
          }
        </>
    );
};

export default TodoList;
