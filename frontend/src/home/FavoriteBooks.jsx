import React from 'react'
import favoritebook from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavoriteBooks = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
      <img src={favoritebook} alt="" className='rounded md:w-10/12' />
      </div>

      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl my-5 font-bold md:w-3/4 leading-snug'>Find your Favorite <span className='text-blue-500'>Books Here!</span></h2>
      <p className='mb-10 text-lg md:w-5/6'>Chances are your friends are discussing their favorite (and least favorite) books on Bookreads.</p>      
      <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
      <div>
        <h3 className='text-3xl font-bold'>800+</h3>
        <p className='text-base'>Book Listing</p>
      </div>

      <div>
        <h3 className='text-3xl font-bold'>500+</h3>
        <p className='text-base'>Register users</p>
      </div>

      <div>
        <h3 className='text-3xl font-bold'>1000+</h3>
        <p className='text-base'>PDF Downloads</p>
      </div>

      </div>
      <Link to='/shop' className='block mt-12'><button className='px-5 py-2 text-white bg-blue-500 rounded font-semibold hover:bg-black transition-all duration-300'>Explore More</button></Link>
      </div>   
      </div>
  )
}
export default FavoriteBooks