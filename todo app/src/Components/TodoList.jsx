import React, { useMemo } from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const items = useSelector(state => state.todos.items);
    const activeFilter = useSelector(state => state.todos.activeFilter); // Filtre parametresi doğru şekilde alınmalı

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
        <ul className="todo-list">
            {filterItems.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
