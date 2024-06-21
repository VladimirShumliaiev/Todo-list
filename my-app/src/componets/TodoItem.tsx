import React, { FC } from 'react'

import { Todo, deleteTodo, toggleTodo } from '../Redux/slices/todoSlice'
import { useAppDispatch } from '../hooks/hooks'


const TodoItem: FC<Todo> = (props) => {
  const {id, title, completed} = props
  const dispatch = useAppDispatch()

  const onChangeHandle = () => {
    dispatch(toggleTodo(id))
  }

  const onClickHandle = () => {
    if (window.confirm('Delete todo?')) {
      dispatch(deleteTodo(id))
    }
  }
  return (
    <div>
      <input type='checkbox' checked={completed} onChange={onChangeHandle}/>
      {title}
      <button onClick={onClickHandle}> delete </button>
    </div>
  )
}

export default TodoItem
