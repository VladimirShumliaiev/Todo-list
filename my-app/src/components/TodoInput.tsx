import React, {FC, useRef} from 'react';

type Todo = {
    title: string
    setTitle: (text: string) => void
    addTodo: () => void
}

const TodoInput: FC<Todo> = (props) => {
    const {title, setTitle, addTodo} = props
    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
        setTitle(e.target.value)
    }

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        addTodo()
        setTitle('')
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input
                value={title}
                onChange={handleOnChange}
                placeholder={'Text...'}
                ref={inputRef}
            />
            <button>add</button>
        </form>
    );
};

export default TodoInput;