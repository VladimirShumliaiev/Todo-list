import React, { useEffect, useState} from 'react';
import {useAppSelector} from "../Hooks/hooks";
import TodoItem from "./TodoItem";
import ReactPaginate from "react-paginate";

const TodoList = () => {
const selector = useAppSelector(state => state.todo.list)

    const [currentItems, setCurrentItems] = useState(selector);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;

        setCurrentItems(selector.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(selector.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,selector]);


    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % selector.length;
        setItemOffset(newOffset);
    };
    return (
        <div>
            {
                currentItems.map(e => <TodoItem key={e.id} {...e}/>)
            }
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={'Pagination'}
                pageLinkClassName={'pageNum'}
                previousLinkClassName={'pageNum'}
                nextLinkClassName={'pageNum'}
                activeLinkClassName={'active'}
            />
        </div>
    );
};

export default TodoList;