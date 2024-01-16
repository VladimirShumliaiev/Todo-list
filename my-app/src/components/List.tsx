import React from 'react';
import {useAppSelector} from "../hooks/hooks";
import Item from "./Item";

const List = () => {
    const list = useAppSelector(state => state.todo.todoList)
    return (
        <div>
            {
                list.map(e => <Item key={e.id} {...e}/>)
            }
        </div>
    );
};

export default List;