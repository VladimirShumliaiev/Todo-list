import React, { useEffect, useState } from 'react'
import {useAppDispatch} from '../hooks/hooks'
import { addTodo, fetchTodo } from '../Redux/slices/todoSlice'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const Todo = () => {
    const [title, setTitle] = useState('')
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchTodo())
    },[dispatch])

    const addTask = () => {
        dispatch(addTodo(title))
    }   

  return (
    <div>
        <TodoInput text={title} setText={setTitle} addTodo={addTask}/>
        <TodoList/>
    </div>
  )
}

export default Todo
