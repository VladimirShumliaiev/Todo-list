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

    const onChangeHandle = () => {
       dispatch(toggleTodo(id))
    }

    const onClickHandle = () => {
       if (window.confirm('remove todo?')){
           dispatch(removeTodo(id))
       }
    }

    return (
        <div>
            <input
                type="checkbox"
                checked={completed}
                onChange={onChangeHandle}
            />
            {title}
            <button onClick={onClickHandle}>x</button>
        </div>
    );
};

export default TodoItem;