import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import book1 from '../assets/banner-books/book1.png';
import book2 from '../assets/banner-books/book2.png';
import book3 from '../assets/banner-books/book3.png';
import book4 from '../assets/banner-books/book4.png';
import book5 from '../assets/banner-books/book5.png';

const BannerCard = () => {
  return (
    <div className='banner'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={book1} alt="Book 1" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={book2} alt="Book 2" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={book3} alt="Book 3" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={book4} alt="Book 4" />
        </SwiperSlide>

        <SwiperSlide>
        <img src={book5} alt="Book 5" />
        </SwiperSlide>
        
      </Swiper>
        
      </Swiper>
      </div>
  )
}

export default BannerCard
