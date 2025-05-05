import React from 'react'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssessmentIcon from '@mui/icons-material/Assessment';


const AdminMenu = () => {
    return (
        <>
            <div className="offcanvas  offcanvas-start bg-black" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header bg-main-color  offcanvas-menu border-bottom border-secondary">
                    <Link to={"/admin/dashboard"}>
                        <img src="/logo.png" className='img-fluid ' alt="" />
                    </Link>
                    <button type="button" className="btn-close   btn-close-white shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body bg-off-body">
                    <ul className="navbar-nav gap-4 small admin-nav me-auto ps-1 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link nav-color  d-flex align-items-center" to="/admin/dashboard">
                                <DashboardIcon fontSize="small" className="me-2" />
                                DashBoard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-color  d-flex align-items-center" to="/admin/products">
                                <BusinessCenterIcon fontSize="small" className="me-2" />
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-color  d-flex align-items-center" to="/admin/orders">
                                <Inventory2Icon fontSize="small" className="me-2" />
                                Orders
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-color  d-flex align-items-center" to="/admin/users">
                                <AccountBoxIcon fontSize="small" className="me-2" />
                                Users
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-color  d-flex align-items-center" to="/admin/reports">
                                <AssessmentIcon fontSize="small" className="me-2" />
                                Reports
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default AdminMenu
