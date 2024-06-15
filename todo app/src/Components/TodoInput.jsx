import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/Todos/dataset';
import { nanoid } from '@reduxjs/toolkit';

const TodoInput = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch()

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
