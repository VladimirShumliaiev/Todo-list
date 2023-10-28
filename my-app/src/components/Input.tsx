import React, {FC} from 'react';

type TodoInput = {
    title: string
    setTitle: (str: string) => void
    addTodo: () => void
}

const Input:FC<TodoInput> = (props) => {

    const {title,setTitle, addTodo} = props

    const handleOnChange:  React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value)
    }

    const onSubmitHandle:  React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        addTodo()
        setTitle('')
    }


    return (
        <div>
            <form onSubmit={onSubmitHandle}>
                <input value={title} onChange={handleOnChange}/>
                <button>add Todos</button>
            </form>
        </div>
    );
};

export default Input;