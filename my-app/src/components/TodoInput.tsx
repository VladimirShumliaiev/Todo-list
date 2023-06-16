import React, {FC, useEffect, useRef} from 'react';

type TodoInputProps ={
    title: string
    setTitle: (e: string) => void
    addTodo: () => void
}

const TodoInput: FC<TodoInputProps> = (props) => {
    const {title, setTitle, addTodo} = props
    const inputRef = useRef<HTMLInputElement>(null)

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value)
    }

   const handleOnSubmit: React.FormEventHandler<HTMLFormElement>= (e) => {
        e.preventDefault()
       addTodo()
       setTitle('')
   }

   useEffect(() => {
       if (inputRef.current) {
           inputRef.current.focus()
       }
   },[])
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    value={title}
                    onChange={handleOnChange}
                    placeholder={'text...'}
                    ref={inputRef}
                />
                <button> add </button>
            </form>

        </div>
    );
};

export default TodoInput;