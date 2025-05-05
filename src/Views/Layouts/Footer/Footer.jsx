import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-black py-3 border-top border-secondary">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <Link to={"/"} className="text-decoration-none text-light">© 2025, Carryall , Powered by Yagnik.</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
