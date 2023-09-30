import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import '../style/CartPage.css'
import { addToCart, decreaseQty } from '../controller/slices/cartSlice';
const CartDetails = () => {
   const { productId } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const cartList = useSelector((state) => state.cart);
   const product = cartList.find((item) => item.id === +productId);
   console.log(product);
   useEffect(() => {
      if (product === undefined)
         navigate('/');
   }, [product])
   return (
      <div className='cart-details py-5'>
         <Container fluid className='mx-4'>
            <h2 className='mb-4'>Product Details Pages</h2>
            {
               product !== undefined &&
               <div className='product-warpper'>
                  <img src={product.cover} alt={product.title} />
                  <div className="details">
                     <h4>{product.title}</h4>
                     <ul className='rating mb-4'>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li>
                           <span className='text-p ps-2'>(1 customer review)</span>
                        </li>
                     </ul>
                     <p className='fw-semibold mb-2'>${product.price * product.qty}</p>
                     <p className='text-p'>{product.author}</p>
                     <div className=' mb-5 mt-4 d-flex align-items-center gap-3'>
                        <span className='mb-0 fw-medium'>Quantity</span>
                        <div className='quantity '>
                           <button
                              className='fw-semibold'
                              onClick={() => { dispatch(addToCart(product)) }}
                           >+</button>
                           <p>{product.qty}</p>
                           <button
                              className='fw-semibold'
                              onClick={() => { dispatch(decreaseQty(product)) }}
                           >-</button>
                        </div>
                     </div>
                     <div className='dsc'>
                        <h6 className='mb-3'>PRODUCTS DESCRIPTION</h6>
                        <p className='text-p'>
                           Designed by Puik in 1949 as one of the first models created especially
                           for Carl Hansen & Son, and produced since 1950. The last of a series of
                           chairs wegner designed based on inspiration from antique chinese armchairs.
                        </p>
                     </div>
                     <div className='more'>
                        <h6 className='mb-3'>PRODUCT DETAILS</h6>
                        <div className='text-p'>
                           <p className='mb-1'>Material: Plastic, Wood</p>
                           <p className='mb-1'>Legs: Lacquered Oak And Black Painted Oak</p>
                           <p className='mb-1'>Dimensions And Weight: Height: 80 Cm, Weight 5.3 Kg</p>
                           <p className='mb-1'>Depth: 52 Cm</p>
                           <p className='mb-1'>Seat Height: 44 Cm </p>
                        </div>
                     </div>
                  </div>
               </div>
               // : <h2>Product #{productId} Not Found</h2>
               // : {handleNavigate}
            }
         </Container>
      </div>
   )
}

export default CartDetails