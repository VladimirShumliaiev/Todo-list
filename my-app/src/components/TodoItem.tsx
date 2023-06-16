import React, {FC} from 'react';
import {useAppDispatch} from "../Hooks/hooks";
import {removeTodo, toggleTodo} from "../Redux/Slice/todoSlice";

type TodoItemProps = {
    id: string
    title: string
    completed: boolean
}

const TodoItem: FC<TodoItemProps> = (props) => {
    const {completed, title, id} = props
    const dispatch = useAppDispatch()

    const handleRemove = () => {
        if (window.confirm('remove todo?'))
        {
            dispatch(removeTodo(id))
        }
    }

    const handleToggle = () => {
      dispatch(toggleTodo(id))
    }


    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleToggle}
            />
            {title}

            <button onClick={handleRemove}>x</button>
        </div>
    );
};

export default TodoItem;