import React from 'react'
import { Link } from 'react-router-dom'
import awardbooks from '../Assets/awardbooks.png'

const BannerPromo = () => {
  return (
    <div className='mt-16 py-12 lg:px-24 bg-teal-200'>
    <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold mb-6 leading-snug'>2024 National Book Awards for Biography Shortlist</h2>
            <Link to='/shop' className='block'><button className='px-5 py-2 text-white bg-blue-500 rounded font-semibold hover:bg-black transition-all duration-300'>Get Promo</button></Link>
        </div>
        <div>
            <img src={awardbooks} alt="" className='w-96' />
        </div>
    </div>
    </div>
  )
}

export default BannerPromo