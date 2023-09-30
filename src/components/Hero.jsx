import React, { useState } from 'react'
import '../style/Hero.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import SearchResults from './SearchResults';

const Hero = () => {
   const [searchItem, SetSerachItem] = useState([]);
   return (
      <section className='hero'>
         <div className='wrapper'>
            <div className='text mb-5'>
               <h1 className='main-heading mb-3'>
                  Over <span className='special'>6,500</span> Curated Design
                  <br />
                  Resources, <span className='special'>Graphic & Website</span> Templates
               </h1>
               <p className='text-black-50 fw-medium'>
                  High-quality Design Themes for personal or commercial use contains 6k+ items in 100 categories.
               </p>
            </div>
            <div className='search-form mb-3 mt-4'>
               <form action="" >
                  <span>All Categories</span>
                  <input
                     type='test'
                     placeholder='Search For Products...'
                     name='searchItem'
                     onChange={(e) => { SetSerachItem(e.target.value) }} />
                  <button>
                     <FaMagnifyingGlass className='' />
                  </button>
               </form>
            </div>
            <p className='text-black-50 fw-medium'>Examples: Mockup, PSD, Theme Design, Image…</p>
         </div>
         <SearchResults searchItem={searchItem} />
      </section>
   )
}

export default Hero