import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavMenu from '../Component/Offcanvas/NavMenu';
import { FaRegUserCircle } from "react-icons/fa";





const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

const Navbar = () => {
    return (
        <>
            <div className="container-fluid  bg-black  border-bottom border-secondary">
                <div className="container  px-0  py-2 border-secondary">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="container-fluid">
                            <Link className="" >
                                <img src="logo.png" className='img-fluid' alt="" />
                            </Link>
                           
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav ms-5 gap-3 navbar-list me-auto  mb-lg-0">
                                    <li className="nav-item">
                                        <Link to={"/"} className="nav-link active" aria-current="page" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/shop"} className="nav-link" >Shop</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/about"} className="nav-link" >About us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/contact"} className="nav-link" >Contact With Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/privacy"} className="nav-link " >Privacy Policy</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={"/admin"} className="text-decoration-none   nav-link  text-danger" >Control panel</Link>
                                    </li>
                                </ul>
                            </div>
                            <ul className="nav d-flex align-items-center  ms-auto me-lg-0 me-4 ">
                                    {/* User Dropdown */}
                                    <li className="nav-item list-unstyled dropdown">
                                        <Link
                                            className="nav-link text-light fs-5 d-flex align-items-center justify-content-center"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            {/* <i className="fa-regular fa-user"></i> */}
                                            <FaRegUserCircle />
                                        </Link>
                                        <ul className="dropdown-menu rounded-0 menu-profile dropdown-menu-end">
                                            <li><Link className="dropdown-item">Login</Link></li>
                                            {/* <li><Link className="dropdown-item">Register</Link></li> */}
                                            <li><Link to="/order" className="dropdown-item">My Orders</Link></li>
                                            <li><Link className="dropdown-item text-danger" >Logout</Link></li>
                                        </ul>
                                    </li>

                                    {/* Cart Icon */}
                                    <li className="nav-item list-unstyled">
                                        <Link>
                                            <IconButton className="text-light fs-5 d-flex align-items-center justify-content-center" aria-label="cart">
                                                <StyledBadge badgeContent={0} color="secondary">
                                                    <ShoppingCartIcon />
                                                </StyledBadge>
                                            </IconButton>
                                        </Link>
                                    </li>
                                </ul>
                                <button
                                className="navbar-toggler p-0 text-light shadow-none "
                                type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"
                            >
                                <i className="fa-solid fa-bars"></i>
                            </button>

                        </div>
                    </nav>
                </div>
            </div>
            <NavMenu />
        </>
    )
}

export default Navbar
