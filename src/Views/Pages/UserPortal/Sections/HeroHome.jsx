import React from 'react'
import HeroSwiper from '../../../Layouts/Component/Swiper/HeroSwiper'

const HeroHome = () => {
  return (
    <>
      <section>
        <div className="container-fluid bg-hero-home ">
            <div className="container hero-content align-content-center  ">
               <div className="row justify-content-center text-center">
                <div className="col-lg-6">
                <HeroSwiper/>
                </div>
               </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default HeroHome
