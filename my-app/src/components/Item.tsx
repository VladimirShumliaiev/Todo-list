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

    const onchangeHandle = () => {
        dispatch(toggleTodo(id))
    }

    const onClickHandle = () => {
        if (window.confirm('delete todo?')) {
            dispatch(removeTodo(id))
        }
    }

    return (
        <div>
            <input type="checkbox" checked={completed} onChange={onchangeHandle}/>
            {title}
            <button onClick={onClickHandle}>delete</button>
        </div>
    );
};

export default Item;