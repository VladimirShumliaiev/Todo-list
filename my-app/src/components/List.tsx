import React from 'react';
import {useAppSelector} from "../hooks/hooks";
import Item from "./Item";

const List = () => {
    const todoListSelector = useAppSelector(state => state.todo.list)
    return (
        <div>
            {
                todoListSelector.map(e => <Item key={e.id} {...e}/>)
            }
        </div>
    );
};

export default List;