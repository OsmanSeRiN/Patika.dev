import React from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

const TodoApp = () => {

  return (
    <div className="todo-app">
      <TodoHeader/>
      <TodoInput/>
      <TodoList/>
      <TodoFilter/>
    </div>
  );
};

export default TodoApp;
