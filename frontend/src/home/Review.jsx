import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from 'react-icons/fa6'
import { Avatar } from "flowbite-react";
import profile from '../assets/profile.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; 

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our customers</h2>

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl py-8 px-4 bg-white md:m-5 rounded-lg border'>
            <div className='space-y-5'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-5'> 
                    <p className='mb-5'>
                    No matter what side of the political spectrum they are on, women in government have always fascinated me. Nancy's story of how she went from a 46-year-old mother of five to the most powerful legislative role in the United States, was nothing short of awe-inspiring.
                    </p>
                    <Avatar alt='avatar of Jese' img={profile} rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Summer</h5>

                    </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl py-8 px-4 bg-white md:m-5 rounded-lg border'>
            <div className='space-y-5'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-5'> 
                    <p className='mb-5'>
                    In 1933, the philosopher Bertrand Russell wrote that “the fundamental cause of the trouble is that in the modern world the stupid are cocksure while the intelligent are full of doubt.” While this is just as true today as it was in the early twentieth-century, the problem actually runs deeper;
                    </p>
                    <Avatar alt='avatar of Jese' img={profile} rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Ryan Boissonneault</h5>
                    </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl py-8 px-4 bg-white md:m-5 rounded-lg border'>
            <div className='space-y-5'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-5'> 
                    <p className='mb-5'>
                    If you are oh so certain you don't need to read this book: you do.

Outside of computer science and electronics answers are rarely binary. There are many answers and many truths. Try turning challenge into exploration by hearing and learning something new in criticism.
                    </p>
                    <Avatar alt='avatar of Jese' img={profile} rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>John peter</h5>
                    </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl py-8 px-4 bg-white md:m-5 rounded-lg border'>
            <div className='space-y-5'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-5'> 
                    <p className='mb-5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Nemo, veniam doloremque similique ab omnis corrupti incidunt hic corporis voluptates excepturi asperiores mollitia eligendi consectetur totam pariatur deserunt consequatur a libero.
                    </p>
                    <Avatar alt='avatar of Jese' img={profile} rounded className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>John peter</h5>
                    </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Review