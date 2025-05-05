import React from 'react'
import AllProduct from '../Buttons/AllProduct'

const Category = ({src}) => {
  return (
    <>
      <div className="col-md-4 my-md-0 my-3">
        <div className="card border-0 card-main overflow-hidden rounded-4 position-relative">
            <img src={src} className='img-fluid' alt="" />
            <div className='position-absolute card-div bg-dark bg-opacity-50  w-100 h-100 align-content-center text-center'>
                <AllProduct path={"/shop"} title={"Show All Products"}/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Category
