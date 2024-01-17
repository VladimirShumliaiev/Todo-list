import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../hooks/hooks";
import Item from "./Item";
import ReactPaginate from "react-paginate";
import style from './List.module.css'


const List = () => {
    const list = useAppSelector(state => state.todo.todoList)

    const [currentItems, setCurrentItems] = useState(list);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(list.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(list.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,list]);

    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % list.length;
        setItemOffset(newOffset);
        }
        return (
        <div>
            {
                currentItems.map(e => <Item key={e.id} {...e}/>)
            }
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={style.Pagination}
                pageLinkClassName={style.pageNum}
                previousLinkClassName={style.pageNum}
                nextLinkClassName={style.pageNum}
                activeLinkClassName={style.active}
            />
        </div>
    );
};

export default List;