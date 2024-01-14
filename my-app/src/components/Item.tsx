import React, {FC} from 'react';
import {useAppDispatch} from "../hooks/hooks";
import {removeTodo, toggleTodo} from "../ReduxTK/slices/todoSlice";

type ItemProps = {
    title: string
    completed: boolean
    id: string
}

const Item:FC<ItemProps> = (props) => {
    const {title,completed,id} = props
    const dispatch = useAppDispatch()

    const onChangeHandle: React.ChangeEventHandler<HTMLInputElement> = () => {
        dispatch(toggleTodo(id))
    }

    const onClickHandle: React.MouseEventHandler<HTMLButtonElement> = () => {
        if (window.confirm('do you want to delete todo?')) {
            dispatch(removeTodo(id))
        }
    }

    return (
        <div>
            <input type={"checkbox"} checked={completed} onChange={onChangeHandle}/>
            {title}
            <button onClick={onClickHandle}>delete</button>
        </div>
    );
};

export default Item;