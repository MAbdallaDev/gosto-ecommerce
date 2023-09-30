import React from 'react'
import { Link } from 'react-router-dom';
const BannerCard = ({product}) => {
   // console.log(product);
   return (
      <div className='banner-card' style={{backgroundImage:`url(${product.cover})`}}>
         <h4>
            {product.title1}
            <span className='my-2 d-block'></span>
            {product.title2}
         </h4>
         <p className='text-white-50 fw-meduim pt-2'>{product.desc}</p>
         <Link to='/shop' className='btn main-btn rounded-pill'>Shop Now</Link >
      </div>
   )
}

export default BannerCard