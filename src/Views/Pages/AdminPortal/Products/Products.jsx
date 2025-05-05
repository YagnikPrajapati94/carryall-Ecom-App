import React from 'react'
import AdminLayout from '../AdminLayout'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ProductModal from '../../../Layouts/Component/Modal/ProductModal';

const Products = () => {
    return (
        <>
            <AdminLayout>
                <div className="container-fluid py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-4 align-content-center">
                                <p className='color-one m-0'>Products</p>
                            </div>

                            <div className="col-8 text-end">
                                <button className='btn btn btn-outline-info shadow-none  ' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><span className='d-md-inline-block d-none'>Add New Product</span><i class="fa-solid d-md-none d-block  ms-md-2 ms-0 fa-plus"></i></button>
                            </div>
                        </div>
                        <div className="row mt-3 justify-content-center ">
                            <div className="col-12 ">
                            <div className="table-responsive admin-table  rounded-2 overflow-hidden overflow-scroll">
                            <table   className="table m-0  text-center table-borderless   align-middle text-nowrap">
                                    <thead className="table-info">
                                        <tr className="text-uppercase small">
                                            <th>Id</th>
                                            <th>Image</th>
                                            <th>Brand</th>
                                            <th>Product</th>
                                            <th>Category</th>
                                            <th>Description</th>
                                            <th>Color</th>
                                            <th>Size</th>
                                            <th>MRP</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        <tr className="text-uppercase small">
                                            <td>1</td>
                                            <td>
                                                <img
                                                    src="https://carryall-workdo.myshopify.com/cdn/shop/products/2_1a501081-b408-41f0-9a4d-cc2ff787edd6_800x-removebg-preview_306x203.png?v=1674800308"
                                                    className="img-fluid"
                                                    style={{ maxWidth: "100px", height: "auto" }}
                                                    alt="Product"
                                                />
                                            </td>
                                            <td>Brand</td>
                                            <td>Product</td>
                                            <td>Category</td>
                                            <td>Description</td>
                                            <td>Color</td>
                                            <td>Size</td>
                                            <td>$100</td>
                                            <td>$80</td>
                                            <td>
                                                <button className="btn btn-sm btn-primary">Edit</button>
                                                <button className="btn btn-sm btn-danger ms-1">Delete</button>
                                            </td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </AdminLayout>
            <ProductModal/>
        </>
    )
}

export default Products
