import React, {FC} from 'react';

type InputProps = {
    title: string
    setTitle: (str: string) => void
    addTodo: () => void
}

const Input:FC<InputProps> = (props) => {
    const {title, setTitle, addTodo} = props

    const onchangeHandle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value)
    }

    const onSubmitHandle:React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        addTodo()
        setTitle('')
    }

    return (
        <div>
            <form onSubmit={onSubmitHandle}>
                <input value={title} onChange={onchangeHandle} placeholder={'add...'}/>
                <button>add</button>
            </form>
        </div>
    );
};

export default Input;