import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../hooks/hooks";
import Item from "./Item";
import ReactPaginate from "react-paginate";
import '../App.css'

const List = () => {
    const ListSelector = useAppSelector(state => state.todo.list)
    const [currentItems, setCurrentItems] = useState(ListSelector);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(ListSelector.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(ListSelector.length / itemsPerPage));
    }, [itemOffset, itemsPerPage,ListSelector]);


    const handlePageClick = (event: any) => {
        const newOffset = event.selected * itemsPerPage % ListSelector.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            {
                currentItems.map(todo => <Item key={todo.id}{...todo}/>)
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

export default List;