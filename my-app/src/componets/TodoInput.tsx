import React, { FC, useRef } from 'react'
import style from './Todo.module.css'

type TodoInputTipe = {
  text: string
  setText: (text: string) => void
  addTodo: () => void
}

const TodoInput: FC<TodoInputTipe> = (props) => {
  const {text, setText, addTodo} = props

  const inputRef = useRef<HTMLInputElement>(null)

  const handleOneSubmit:  React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    addTodo()
    setText('')
  }

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setText(event.target.value)
  }

  return (
    <form onSubmit={handleOneSubmit}>
      <input
       type="text"
       value={text}
       onChange={handleOnChange}
       ref={inputRef}
       placeholder={'add title...'}
        />
      <button className={style.item}> add </button>
      <pre/>
    </form>
  )
}

export default TodoInput
