import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeFilter } from '../Redux/Todos/dataset'

const TodoFilter = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.todos.items)
    const itemLeft = items.filter(item => !item.isSelected).length
    const paramFilter = useSelector(state => state.todos.filter) // Filtre parametresi doğru şekilde alınmalı

    const selectedFilter = (name) => {
        return () => {
            dispatch(changeFilter(name))
        }
    }

    useEffect(()=>{
      console.log(paramFilter)
    }, [paramFilter])

  return (
    <div style={{textAlign: 'right'}}>
        <button style={{margin: "5px"}} onClick={selectedFilter("All")}> All </button>
        <button style={{margin: "5px"}} onClick={selectedFilter("Active")}> Active </button>
        <button style={{margin: "5px", marginRight: "40px"}} onClick={selectedFilter("Passive")}> Passive </button>
        <span style={{margin: "5px", fontSize: "11px"}}>{itemLeft + " Active Items"}</span>
    </div>
  )
}

export default TodoFilter;

