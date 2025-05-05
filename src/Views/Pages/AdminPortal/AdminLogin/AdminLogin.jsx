import React from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
    return (
        <>
            <div className="container-fluid login-ui  align-content-center">
                <div className="row px-md-0 px-3  justify-content-center">
                <div className="col-md-8 p-0  justify-content-between d-flex align-items-center  text-center py-4">
                        <img src="/logo.png" className='img-fluid float-start ' alt="" />
                        <Link to={"/"} className='text-decoration-none float-end btn btn-outline-success'>Go Back</Link>
                    </div>
                </div>
                <div className="row px-md-0 px-3 justify-content-center">
                    <div className="col-lg-4 col-md-8 align-content-center  bg-card">
                        <form className='form-control bg-transparent border-0  p-md-5 p-4 color-one'>
                            <p className='m-0 fs-5 fw-medium'>Welcome Back !</p>
                            <p className='m-0 mb-4 color-two'>Sign in to continue to Carryall.</p>
                            <div className="mb-3">
                                <label  className="form-label">Email address</label>
                                <input type="email" className="form-control bg-transparent color-one " readOnly value="admin@gmail.com" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control bg-transparent color-one" value="admin@123" readOnly required/>
                            </div>
                            <Link to={"/admin/dashboard"} type="submit" className="btn btn-info form-control mt-3">Login</Link>
                        </form>
                    </div>
                    <div className="col-lg-4 admin-login-bg p-0 d-lg-block d-none  ">
                        
                    </div>
                    <div className="col-12 text-center py-4 ">
                        <Link to={"/"} className='text-decoration-none color-one '>© 2025 Carryall. Crafted with ❤️  by Yagnik</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin
