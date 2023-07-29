import React from 'react';
import {useAppSelector} from "../hooks/hooks";
import Item from "./Item";

const List = () => {
    const listSelector = useAppSelector(state => state.todo.list)
    return (
        <div>
            {
                listSelector.map(todo => <Item key={todo.id} {...todo}/>)
            }
        </div>
    );
};

export default List;