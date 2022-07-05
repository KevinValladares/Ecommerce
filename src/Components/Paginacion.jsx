import React from 'react'
import Pagination from '@mui/material/Pagination';
import { logDOM } from '@testing-library/react';

const Paginacion = ({setPages,page}) => {


  const handleChangePage=(event,page)=>{
    setPages(page)
    window.scroll(0,0)
  }

  return (

    <Pagination  
      count={page}
      size="large"
      shape="rounded"
      color="primary"
      onChange={handleChangePage}
     
      
    />

  )
}

export default Paginacion