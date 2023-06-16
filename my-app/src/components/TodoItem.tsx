import React, {FC} from 'react';
import {useAppDispatch} from "../Hooks/hooks";
import {removeTodo, toggleTodo} from "../Redux/Slice/todoSlice";

type TodoItemProps = {
    id: string
    title: string
    completed: boolean
}

const TodoItem: FC<TodoItemProps> = (props) => {
    const {id, completed, title} = props
    const dispatch = useAppDispatch()

    const handleOneChange = () => {
        if (!completed) {
            console.log('toggle')
        } else {
            console.log('remove toggle')
        }

        dispatch(toggleTodo(id))
    }

    const handleOnClick = () => {
        if (window.confirm('remove todo?')){
            dispatch(removeTodo(id))
        }
    }
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleOneChange}
            />
            {title}
            <button onClick={handleOnClick}>x</button>
        </li>
    );
};

export default TodoItem;