import React from 'react'
import { Link } from 'react-router-dom'

const AdminFooter = () => {
    return (
        <>
            <div className="container-fluid bg-card py-3 ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <Link to={"/admin/dashboard"} className="text-decoration-none text-light">© 2025, Carryall , Powered by Yagnik.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminFooter
