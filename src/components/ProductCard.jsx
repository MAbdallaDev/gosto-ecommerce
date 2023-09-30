import React, { useState } from 'react'
import Image from 'react-bootstrap/Image';
import { FaMagnifyingGlass, FaBagShopping, FaHeart } from "react-icons/fa6";
import '../style/ProductCard.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../controller/slices/cartSlice';
import { Link } from 'react-router-dom';
import { show } from '../controller/slices/ImgSlice';
// import image01 from '../assets/images/product/1-1-1.jpg'
const ProductCard = ({ product, qty, link }) => {
   const dispatch = useDispatch();
   const [svgClick, setSvgClick] = useState(false);
   const handleSvgClick = () => {
      setSvgClick(!svgClick);
   }
   return (
      <div className='card'>
         <div>
            <div className='img-holder position-relative'>
               <Link to={link}>
                  <Image src={product.cover} />
               </Link>
               <div className='overlay'>
                  <button onClick={() => { dispatch(addToCart(product)) }}><FaBagShopping /></button>
                  <button
                     onClick={() => { handleSvgClick() }}
                  >
                     <FaHeart className={svgClick ? 'liked' : ''}
                     />
                  </button>
                  <button
                     onClick={() => { dispatch(show(product.cover)) }}><FaMagnifyingGlass /></button>
               </div>
            </div>
            <div className='details mt-3 px-1'>
               <h6>{product.title}</h6>
               <p className='text-p mb-2'>{product.author}</p>
               <p className='fw-medium mb-1'>Price: ${product.price}</p>
               <p className={qty} >Quantity: ${product.qty}</p>
            </div>
         </div>
      </div>
   )
}

export default ProductCard