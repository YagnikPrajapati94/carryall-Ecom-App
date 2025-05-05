import React from 'react'
import { Link } from 'react-router-dom'

const HeroCommon = ({title,desc}) => {
  return (
    <>
      <section>
        <div className="container-fluid py-5 bg-black">
            <div className="container  py-5">
                <div className="row">
                    <div className="col-lg-6 text-light">
                        <Link to={"/"} className='text-decoration-none back small text-light' ><span className='rounded-circle back-home me-2   '><i className="fa-solid small  fa-arrow-left"></i></span>Back To Home</Link>
                        <h1 className='mt-4 mb-3'>{title}</h1>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default HeroCommon
