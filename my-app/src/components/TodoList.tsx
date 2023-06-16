import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../Hooks/hooks";
import TodoItem from "./TodoItem";
import Paginate from "./Paginate";

const TodoList = () => {
    const todoList = useAppSelector(state => state.todo.list)
    const [currentItems, setCurrentItems] = useState(todoList)
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 10


    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(todoList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(todoList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, todoList]);


    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % todoList.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            {
                currentItems.map(todo => <TodoItem key={todo.id} {...todo}/>)
            }
            <Paginate pageCount={pageCount} handlePageClick={handlePageClick}/>
        </div>
    );
};

export default TodoList;