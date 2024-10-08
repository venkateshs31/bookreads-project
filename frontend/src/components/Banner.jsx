import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='lg:px-24 px-24 flex items-center bg-teal-200'> 
    <div className='flex-col md:flex-row flex w-full items-center justify-between py-40 gap-12'>
        {/* left side */}
        <div className='md:w-1/2 space-y-7 h-full'>
            <h2 className='font-bold leading-snug text-5xl text-black'>Buy and Sell your Books <span className='text-blue-500'> for the best prices</span></h2>
            <p className='md:w-4/5'>You're in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</p>
        <div>
           <input type="Search" name="Search" id="search" placeholder='Search a book' className='px-2 py-2 rounded-s-sm outline-none'/>
           <button className='px-5 py-2 text-white bg-blue-500 hover:bg-black font-medium transition-all duration-200 ease-in'>Search</button>
        </div>
        </div>

        {/* right side */}
        <div>
            <BannerCard/>
        </div>

    </div>
    </div>
  )
}

export default Banner