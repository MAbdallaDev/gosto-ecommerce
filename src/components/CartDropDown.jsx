import React, { useEffect, useState } from 'react'
import cartImg from '../assets/images/cart.png'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { FaRegTrashCan } from "react-icons/fa6";
import { deleteFromCrat } from '../controller/slices/cartSlice';
const CartDropDown = () => {
   const cart = useSelector(state => state.cart);
   const dispatch = useDispatch();
   const [total , setTotal] = useState(0);
   useEffect(()=>{
      calculatePrice();
   },[cart])
   // console.log(cart);
   const calculatePrice =()=> {
      let total = 0;
       cart.map((product) => total += product.qty * product.price)
      // console.log(total);
      setTotal(total);
   }
   return (
      <div className='cart-dropdown'>
         {
            cart.length > 0
               ?
               <div className='cart-holder'>
                  <div className='header'>
                     <h5>Photo</h5>
                     <span className='text-p'>Product Name</span>
                  </div>
                  {cart.map((product) => {
                     return (
                        <div className='d-flex justify-content-between align-items-center py-2' key={product.id}>
                           <ProductCard product={product} key={product.id} link={`cart/${product.id}`}/>
                           <button 
                              className='delete '
                              onClick={()=>{dispatch(deleteFromCrat(product))}}>
                              <FaRegTrashCan />
                           </button>
                        </div>
                     )
                  })}
                  <h5 className='mt-3'>Total Price: ${total}</h5>
               </div>
               :
               <div className='show-in-empty'>
                  <p className='text-p mb-0'>Your cart is empty</p>
                  <img src={cartImg} alt="cart" />
               </div>
         }

      </div>
   )
}

export default CartDropDown