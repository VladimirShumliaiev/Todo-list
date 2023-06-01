import React from 'react';
import {useAppSelector} from "../Hooks/hooks";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todoSelector = useAppSelector(state => state.todo.list)
    return (
        <div>
            {
                todoSelector.map(todo => <TodoItem key={todo.id} {...todo}/>)
            }
        </div>
    );
};

export default TodoList;