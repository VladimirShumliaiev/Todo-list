import React, {FC} from 'react';
import {useAppDispatch} from "../hooks/hooks";
import {removeTodo, toggleTodo} from "../ReduxTK/slices/todoSlice";

type ItemProps = {
    id: string
    title: string
    completed: boolean
}

const Item: FC<ItemProps> = (props) => {
    const {id, completed, title} = props
    const dispatch = useAppDispatch()

    const handleRemoveTodo = () => {
        dispatch(removeTodo(id))
    }

    const handleToggle = () => {
        dispatch(toggleTodo(id))
    }

    return (
        <div>
            <input type="checkbox" checked={completed} onChange={handleToggle} />
            {title}
            <button onClick={handleRemoveTodo}>x</button>
        </div>
    );
};

export default Item;