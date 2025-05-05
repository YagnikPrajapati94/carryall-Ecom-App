import React  from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import {  Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
const LogoSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        speed={2000}
        effect='fade'
        loop={true}
        autoplay={{
            delay:500
            }}
        pagination={{
          clickable: true,
        }}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Link to={"/"} className='text-decoration-none text-light logo-effect'>CARRYALL</Link></SwiperSlide>
        <SwiperSlide><Link to={"/"} className='text-decoration-none text-light logo-effect'>CARRYALL</Link></SwiperSlide>
        <SwiperSlide><Link to={"/"} className='text-decoration-none text-light logo-effect'>CARRYALL</Link></SwiperSlide>
        <SwiperSlide><Link to={"/"} className='text-decoration-none text-light logo-effect'>CARRYALL</Link></SwiperSlide>
        <SwiperSlide><Link to={"/"} className='text-decoration-none text-light logo-effect'>CARRYALL</Link></SwiperSlide>
        <SwiperSlide><Link to={"/"} className='text-decoration-none text-light logo-effect'>CARRYALL</Link></SwiperSlide>
        <SwiperSlide><Link to={"/"} className='text-decoration-none text-light logo-effect'>CARRYALL</Link></SwiperSlide>
        <SwiperSlide><Link to={"/"} className='text-decoration-none text-light logo-effect'>CARRYALL</Link></SwiperSlide>
        <SwiperSlide><Link to={"/"} className='text-decoration-none text-light logo-effect'>CARRYALL</Link></SwiperSlide>
      </Swiper>
    </>
  )
}

export default LogoSwiper
