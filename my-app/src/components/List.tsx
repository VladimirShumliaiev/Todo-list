import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../hooks/hooks";
import Item from "./Item";
import ReactPaginate from "react-paginate";
import styles from './List.module.css';


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
                containerClassName={styles.Pagination}
                pageLinkClassName={styles.pageNum}
                previousLinkClassName={styles.pageNum}
                nextLinkClassName={styles.pageNum}
                activeLinkClassName={styles.active}
            />
        </div>
    );
};

export default List;