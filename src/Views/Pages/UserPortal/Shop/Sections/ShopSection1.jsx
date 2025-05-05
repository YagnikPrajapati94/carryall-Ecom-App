import React from 'react'
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';

const ShopSection1 = () => {
    return (
        <>
            <section>
                <div className="container-fluid py-3 bg-white">
                    <div className="container">
                        <div className="row">

                            {/* filter show  */}
                            <div className="collapse d-md-block col-lg-3 col-md-4 " id="collapseRow">
                                <div className="row filter-select ">
                                    <div className="col-12 d-flex justify-content-between   align-items-center border-bottom border-end border-secondary filter-header">
                                        <p className='m-0 fs-5 text-uppercase fw-bold'>Filter</p>
                                        <button
                                            className="btn me-md-auto d-md-none d-block btn-outline-dark"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseRow"
                                            aria-expanded="false"
                                            aria-controls="collapseRow"
                                        >
                                          <CloseIcon/>
                                        </button>
                                    </div>

                                    {/* ----------------Brand------------------------- */}
                                    <div className="col-12 py-3 border-bottom border-end border-secondary">
                                        <ul className='list-unstyled'>
                                            <li className='text-uppercase fw-bold'>Brand</li>
                                            <li>
                                                <select className='form-control  shadow-none rounded-2 mt-3' name="" id="">
                                                    <option disabled value="Select Brand">Select Brand</option>
                                                    <option value="Select Brand">Select Brand</option>
                                                    <option value="Select Brand">Select Brand</option>
                                                    <option value="Select Brand">Select Brand</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* ----------------------category-------------------------------- */}
                                    <div className="col-12 py-3 border-bottom border-end border-secondary">
                                        <ul className='list-unstyled'>
                                            <li className='text-uppercase fw-bold'>Product Type</li>
                                            <li>
                                                <select className='form-control  shadow-none rounded-2 mt-3' name="" id="">
                                                    <option disabled value="Select Product Type">Select Product Type</option>
                                                    <option value="Select Product Type">Select Product Type</option>
                                                    <option value="Select Product Type">Select Product Type</option>
                                                    <option value="Select Product Type">Select Product Type</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* ----------------------------size---------------------------------- */}
                                    <div className="col-12 py-3 border-bottom border-end border-secondary">
                                        <ul className='list-unstyled'>
                                            <li className='text-uppercase fw-bold'>Size</li>
                                            <li>
                                                <select className='form-control  shadow-none rounded-2 mt-3' name="" id="">
                                                    <option disabled value="Select Size">Select Size</option>
                                                    <option value="Select Size">Select Size</option>
                                                    <option value="Select Size">Select Size</option>
                                                    <option value="Select Size">Select Size</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* ----------------------color----------------------------------------------- */}
                                    <div className="col-12 py-3 border-bottom border-end border-secondary">
                                        <ul className='list-unstyled'>
                                            <li className='text-uppercase fw-bold'>Color</li>
                                            <li>
                                                <select className='form-control  shadow-none rounded-2 mt-3' name="" id="">
                                                    <option disabled value="Select Color">Select Color</option>
                                                    <option value="Select Color">Select Color</option>
                                                    <option value="Select Color">Select Color</option>
                                                    <option value="Select Color">Select Color</option>
                                                </select>
                                            </li>
                                        </ul>
                                    </div>


                                </div>
                            </div>

                            {/* product show  */}
                            <div className="col-lg-9 col-md-8">
                                <div className="row ">
                                    <div className="col-12  justify-content-end align-items-center d-flex filter-header border-bottom  border-secondary">
                                        <button
                                            className="btn me-auto  me-4 d-md-none d-block btn-outline-dark"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseRow"
                                            aria-expanded="false"
                                            aria-controls="collapseRow"
                                        >
                                          <ListIcon/>  
                                        </button>
                                        <p className='m-0 me-3    text-uppercase fw-bold'>Sort by:</p>
                                        <div className="row   ">
                                            <div className="col-12 ">
                                                <select className='form-control border border-black rounded-4 shadow-none  ' name="" id="">
                                                    <option value="Best Selling" disabled selected>Best Selling</option>
                                                    <option value="Price, Low to High" >Price, Low to High</option>
                                                    <option value="Price, High to Low" >Price, High to Low</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12   py-3">
                                        <input type="search" className='form-control rounded-3 shadow-none border border-black' placeholder="Search a Product.." />
                                    </div>

                                    {/* all product  */}
                                    <div className="row px-0  mx-auto ">
                                        <div className="col-lg-4 mb-3   col-md-6 ">
                                            <div className="card   overflow-hidden product-card rounded-3">
                                                <div className=' text-center position-relative'>
                                                    <img src="https://carryall-workdo.myshopify.com/cdn/shop/products/2_1a501081-b408-41f0-9a4d-cc2ff787edd6_800x-removebg-preview_306x203.png?v=1674800308" className='img-fluid w-75   mx-auto' alt="" />
                                                    <ul className='list-unstyled position-absolute top-0 end-0'>
                                                        <li className='border border-black btn px-2 m-3 p-1 btn-outline-dark  rounded-3 small'><i className="fa-solid fa-eye"></i></li>
                                                    </ul>
                                                </div>
                                                <div className="card-body">
                                                    <p className='text-uppercase mb-1 small'>brand : Satellite</p>
                                                    <p className='text-uppercase mb-1 fw-bold'>Solid Duffle Bag </p>
                                                    <p className='mb-1 text-secondary'>color : Red </p>
                                                    <p className='mb-1 text-secondary'>Size : Large</p>
                                                    <p className='mb-3 text-secondary'>Price : <span className='text-black fw-bold'>$1000.00</span></p>
                                                    <button className='addtocart btn form-control shadow-none  text-uppercase'>Add To Cart <i className="fa-solid ms-2 fa-angles-right"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopSection1
