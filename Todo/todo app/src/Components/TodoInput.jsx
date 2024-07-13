import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAsync } from '../Redux/Todos/dataset';


const TodoInput = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addTodoAsync(
      {
        title:value,
      }
    ))
    setValue("")
  };



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodoInput;
