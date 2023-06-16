import React, {FC} from 'react';
import ReactPaginate from "react-paginate";

type PaginateProps = {
    pageCount: number
    handlePageClick: (event: any) => void
}

const Paginate: FC<PaginateProps> = (props) => {
    const {handlePageClick, pageCount} = props
    return (
        <div>
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

export default Paginate;