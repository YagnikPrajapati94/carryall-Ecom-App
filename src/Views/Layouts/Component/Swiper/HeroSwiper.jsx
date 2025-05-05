import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AllProduct from '../Buttons/AllProduct';

const HeroSwiper = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            // navigation={true}
            // pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="slide-content">
                    <h1 className='text-light'>Explore Our Versatile Carryall Bag Collection</h1>
                    <p className='text-light'>A two-piece suit is the most basic type of suit, consisting of a suit jacket and matching trousers. The two-piece is the type of suit you might wear to a job interview. Our carryall is the ultimate companion for those all their essentials and more.</p>
                    {/* <button className='btn btn-warning'>All Products</button> */}
                    <AllProduct  title={"All Products"}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-content">
                    <h1 className='text-light'>Leather Tote Bag Perfect for Work or Play</h1>
                    <p className='text-light'>When creating a bag slider title, it is important to keep the target audience in mind. For example, a title that is appropriate for a business-to-business audience may not be appropriate for a business-to-consumer audience.</p>
                    <AllProduct title={"All Products"}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide-content">
                    <h1 className='text-light'>Woven Straw Beach Bag Perfect for Summer</h1>
                    <p className='text-light'>A bag slider title is a short, descriptive title that is used to identify a bag in an online store. It is typically displayed next to the bag's image and price, and it is used to help customers quickly identify the bag they are interested in.</p>
                    <AllProduct title={"All Products"}/>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroSwiper;
