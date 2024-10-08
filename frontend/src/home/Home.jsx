import React from 'react'
import Banner from '../components/Banner' 
import BestsellerBooks from './BestsellerBooks'
import FavoriteBooks from './FavoriteBooks'
import BannerPromo from './BannerPromo'
import OtherBooks from './OtherBooks'
import Review from './Review'


const Home = () => {
  return (
    <div>
      <Banner/>
      <BestsellerBooks/>
      <FavoriteBooks/>
      <BannerPromo/>
      <OtherBooks/>
      <Review/>
    </div>
  )
}

export default Home