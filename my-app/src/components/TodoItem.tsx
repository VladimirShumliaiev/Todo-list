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
        dispatch(toggleTodo(id))
    }

    const handleOnClick = () => {
        dispatch(removeTodo(id))
    }
    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleOneChange}
            />
            {title}
            <button onClick={handleOnClick}>x</button>
        </div>
    );
};

export default TodoItem;