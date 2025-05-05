import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = () => {
    return (
        <>
            <div className="offcanvas  offcanvas-start bg-black" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header  offcanvas-menu border-bottom border-secondary">
                    <Link to={"/"}>
                        <img src="logo.png" className='img-fluid ' alt="" />
                    </Link>
                    <button type="button" className="btn-close   btn-close-white shadow-none border-0" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav ms-1 gap-3 navbar-list me-auto  mb-lg-0">
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
                            <Link to={"/privacy"} className="nav-link" >Privacy Policy</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/admin"} className="text-decoration-none   nav-link  text-danger" >Control panel</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavMenu
