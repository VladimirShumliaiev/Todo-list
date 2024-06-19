import React, { useEffect, useState } from 'react'
import { useAppSelector} from '../hooks/hooks';
import ReactPaginate from 'react-paginate'
import TodoItem from './TodoItem'
import style from './Todo.module.css'


const TodoList = () => {
  const todoList = useAppSelector(state => state.todo.list)


   const [currentItems, setCurrentItems] = useState(todoList);
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
  )
}

export default TodoList

