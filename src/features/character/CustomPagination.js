import React from 'react'

const CustomPagination = ({totalPages, currentPage, handlePrevPage, handleNextPage}) => {
  return (
    <div className='pagination-controls'>
      <span className={currentPage <= 1 ? 'disabled control' : 'control'} onClick={()=>handlePrevPage()}>prev</span>
      <span className='current-page'>{currentPage}</span>
      <span className={currentPage >= totalPages ? 'disabled control' : 'control'} onClick={()=>handleNextPage()}>next</span>
    </div>
  )
}

export default CustomPagination