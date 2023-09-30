import React from 'react'
import Hero from '../components/Hero'
import CategoryCards from '../components/CategoryCards'
import TrendingProducts from '../components/TrendingProducts'
import Banner from '../components/Banner'
import TopProducts from '../components/TopProducts'
import Plans from '../components/Plans'
import Testimonials from '../components/Testimonials'
import Posts from '../components/Posts'

const Hompe = () => {
   return (
      <div className='home-page'>
         <Hero />
         <CategoryCards />
         <TrendingProducts />
         <Banner />
         <TopProducts />
         <Plans />
         <Testimonials />
         <Posts />
      </div>
   )
}

export default Hompe