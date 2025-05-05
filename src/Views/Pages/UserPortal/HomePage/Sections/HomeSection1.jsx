import React from 'react'
import AllProduct from '../../../../Layouts/Component/Buttons/AllProduct'

const HomeSection1 = () => {
  return (
    <>
     <section>
        <div className="container-fluid bg-black py-5">
            <div className="container py-4">
                <div className="row justify-content-between">
                    <div className="col-lg-5 align-content-center">
                        <p className='small mb-2 ps-1 text-uppercase text-light fw-bold'>Bags</p>
                        <h1 className='fw-bold text-light mb-3'>Canvas Weekender Bag Durable and Stylish</h1>
                        <p className='text-light small my-4'>A bag also known regionally as a sack is a common tool in the form of a non-rigid container. The use of bags predates recorded history, with the earliest bags being lengths of animal skin, cotton, or woven plant fibers, folded up at the edges and secured in that shape with strings of the same material.</p>
                        <AllProduct title={"All PRoducts"}/>
                        
                    </div>
                    <div className="col-lg-6 text-lg-end text-center mt-lg-0 mt-5  align-content-center ">
                        <img src="https://carryall-workdo.myshopify.com/cdn/shop/files/best-seller-img.png?v=1674791983" className='img-fluid w-100' alt="" />
                    </div>
                </div>
            </div>
        </div>
        </section> 
    </>
  )
}

export default HomeSection1
