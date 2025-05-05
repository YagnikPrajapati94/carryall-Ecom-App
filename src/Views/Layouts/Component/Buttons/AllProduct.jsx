import React from 'react'
import { Link } from 'react-router-dom'

const AllProduct = ({title,path}) => {
  return (
    <>
     <Link to={"/shop"} className='btn btn-product px-4 text-uppercase'>{title}<i className="fa-solid ms-2 fa-angles-right"></i></Link> 
    </>
  )
}

export default AllProduct
