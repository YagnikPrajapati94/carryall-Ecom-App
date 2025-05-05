import React from 'react'
import AdminLayout from '../AdminLayout'

const MyProfile = () => {
    return (
        <>
            <AdminLayout>
                <div className="container-fluid py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className='color-one'>Profile</p>
                            </div>
                            <div className="col-12 rounded-3">
                                <div className='d-flex bg-card p-4 rounded-3 align-items-center gap-3'>
                                    <img src="/me.png" className='img-fluid myprofile rounded-circle' alt="" />
                                    <div>
                                        <p className='color-two m-0'>Admin</p>
                                        <p className='color-one m-0'>admin@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* chnage user name  */}
                        <div className="row mt-3">
                            <div className="col-12">
                                <p className='color-one'>Chnage User Name</p>
                            </div>
                            <div className="col-12 rounded-3">
                                <div className=' bg-card p-4  rounded-3'>
                                   <form action="" className='form-control admin-profile text-center border-0 bg-transparent'>
                                    <input type="text" placeholder='Admin'  className='form-control shadow-none color-one bg-transparent' required />
                                    <button className='btn btn-admin  mt-4'>Edit User Name</button>
                                   </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        </>
    )
}

export default MyProfile
