import React, {FC, useRef} from 'react';

type InputProps = {
    title: string
    setTitle: (text: string) => void
    addTodo: () => void
}

const Input: FC<InputProps> = (props) => {
    const {title, setTitle, addTodo} = props
    const inputRef = useRef<HTMLInputElement>(null)
    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        addTodo()
        setTitle('')
    }

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value)
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <input
                value={title}
                onChange={handleOnChange}
                ref={inputRef}
                placeholder={'add text...'}
            />
            <button>add</button>
        </form>
    );
};

export default Input;