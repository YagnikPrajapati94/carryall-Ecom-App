import React from 'react'

const ProductModal = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content bg-off-body color-one ">
                        <div class="modal-header bg-card border-0 ">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Product</h1>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body admin-modal">
                            <form action="" className='form-control bg-transparent border-0 color-one'>
                                <div className="mb-3">
                                    <label className="form-label">Enter Product Name</label>
                                    <input type="text" className="form-control bg-transparent shadow-none" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Product Brand</label>
                                    <input type="text" className="form-control bg-transparent shadow-none" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Product IMG</label>
                                    <input type="file"  className="form-control bg-transparent shadow-none" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Product Type / Category</label>
                                    <input type="text" className="form-control bg-transparent shadow-none" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Product Description</label>
                                    <input type="text" className="form-control bg-transparent shadow-none" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Product Color</label>
                                    <input type="text" className="form-control bg-transparent shadow-none" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Product Size</label>
                                    <input type="text" className="form-control bg-transparent shadow-none" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Product MRP</label>
                                    <input type="text" className="form-control bg-transparent shadow-none"  required/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Enter Product Selling Price</label>
                                    <input type="text" className="form-control bg-transparent shadow-none" required />
                                </div>
                                <div className="mb-3">
                                   <button className='btn btn-outline-info form-control shadow-none '>Submit</button>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductModal
