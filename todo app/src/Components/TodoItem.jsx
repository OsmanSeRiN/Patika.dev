import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle,destroy } from '../Redux/Todos/dataset';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const onTodo = () => {
    dispatch(toggle({ id: todo.id }));
  };

  const Delete = () =>{
    if(window.confirm("Are you sure?")){
      dispatch(destroy({id: todo.id}))
    }
  }

  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px',
        borderBottom: '1px solid #eaeaea',
        cursor: 'pointer',
        textDecoration: todo.isSelected ? 'line-through' : 'none',
        color: todo.isSelected ? '#d9d9d9' : 'inherit'
      }}
      onClick={onTodo}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="checkbox"
          checked={todo.isSelected}
          style={{
            marginRight: '10px',
          }}
        />
        {todo.title}
      </div>
      <button
        type="button"
        style={{
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = 'white')}
        onMouseOut={(e) => (e.target.style.backgroundColor = 'red')}
        onClick={Delete}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
