import React from 'react';
import {useAppSelector} from "../Hooks/hooks";
import TodoItem from "./TodoItem";

const TodoList = () => {
const selector = useAppSelector(state => state.todo.list)

    return (
        <div>
            {
                selector.map(e => <TodoItem key={e.id} {...e}/>)
            }
        </div>
    );
};

export default TodoList;