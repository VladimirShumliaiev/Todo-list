import React, {FC, useRef} from 'react';

type InputState = {
    title: string
    setTitle: (text: string) => void
    addTodo: () => void
}

const Input: FC<InputState> = (props) => {
    const {title, setTitle, addTodo} = props
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangeHandle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setTitle(event.target.value)
    }

    const onSubmitHandle = (event: any) => {
        event.preventDefault()
        addTodo()
        setTitle('')
    }

    return (
        <form onSubmit={onSubmitHandle}>
            <input value={title}
                   onChange={onChangeHandle}
                   ref={inputRef}
                   placeholder={'Todos...'}
            />
            <button>add todos</button>
        </form>
    );
};

export default Input;