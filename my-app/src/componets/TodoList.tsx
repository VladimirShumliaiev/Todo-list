import React, { useEffect, useState } from 'react'
import { useAppSelector} from '../hooks/hooks';
import ReactPaginate from 'react-paginate'
import './Todo.css'
import TodoItem from './TodoItem'



const TodoList = () => {
  const todoList = useAppSelector(state => state.todo.list)

  return (
    <div>
        {
          todoList.map(todo => <TodoItem key={todo.id} {...todo}/>)
        }
    </div>
  )
}

export default TodoList

