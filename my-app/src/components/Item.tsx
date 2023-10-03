import React, {FC} from 'react';
import {useAppDispatch} from "../hooks/hooks";
import {removeTodo, toggleTodo} from "../ReduxTK/slices/todoSlice";

type ItemProps = {
    id: string,
    title: string,
    completed: boolean,

}

const Item: FC<ItemProps> = (props) => {
    const {title, completed, id} = props
    const dispatch = useAppDispatch()

    const handleDelete = () => {
        if (window.confirm(`delete todo? ${title}`)) {
            dispatch(removeTodo(id))
        }
    }

    return (
        <div>
            <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodo(id))}/>
            {title}
            <button onClick={handleDelete}>delete</button>
        </div>
    );
};

export default Item;