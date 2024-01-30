import React from 'react';
import {useAppSelector} from "../hooks";
import {todoSelector} from "../../redux/Slice/todoSlice";
import Item from "./Item";

const List = () => {

    const list = useAppSelector(todoSelector)
    return (
        <div>
            {
                list.map(e =>  <Item key={e.title} {...e}/>)
            }
        </div>
    );
};

export default List;