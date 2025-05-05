import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminMenu from '../Component/Offcanvas/AdminMenu';


const AdminNav = () => {
    return (
        <>
            <div className="container-fluid bg-main-color py-lg-0 py-2  ">
                <div className="container">
                    <div className="row">
                        <div className="col-12 p-0 ">
                            <nav className="navbar  navbar-expand-lg">
                                <div className="container-fluid  ">
                                    <Link to={"/admin/dashboard"} className="navbar-brand "><img src="/logo.png" className='img-fluid' alt="logo" /></Link>
                                    <ul className='list-unstyled  ms-auto me-lg-0 me-3  m-0 '>
                                        <li className="nav-item d-flex align-items-center gap-3  list-unstyled dropdown">
                                            <img src="/me.png" className='img-fluid myprofile-2 rounded-circle' alt="" />
                                            <Link
                                                className="nav-link dropdown-toggle  text-info text-uppercase  me-auto fs-6  justify-content-center"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {/* <i className="fa-regular fa-user"></i> */}
                                                {/* <FaRegUserCircle /> */}
                                                Admin
                                            </Link>
                                            <ul className="dropdown-menu rounded-4 menu-profile bg-main-color dropdown-menu-end">
                                                <li><Link to={"/admin/profile"} className="dropdown-item text-light bg-transparent"><AccountBoxIcon fontSize="small" className="me-2" />Profile</Link></li>
                                                <li><Link to={"/"} className="dropdown-item text-danger bg-transparent " ><LogoutIcon fontSize="small" className="me-2" />Logout</Link></li>
                                            </ul>
                                        </li>

                                    </ul>
                                    <button
                                        className="navbar-toggler p-0 mt-1 text-light shadow-none "
                                        type="button"
                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
                                    >
                                        <i className="fa-solid fa-bars"></i>
                                    </button>

                                </div>
                            </nav>
                        </div>
                        <div className="col-12 p-0">
                            <nav className='navbar d-lg-block d-none  navbar-expand-lg'>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                                        {/* <li className="nav-item">
                                            <Link className="nav-link logout  d-flex align-items-center" to="/logout">
                                                <LogoutIcon fontSize="small" className="me-2" />
                                                Logout
                                            </Link>
                                        </li> */}
                                    </ul>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <AdminMenu/>
        </>
    )
}

export default AdminNav
