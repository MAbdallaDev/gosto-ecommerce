import React from 'react'
import { navlist } from '../assets/data/data';
import { Link } from 'react-router-dom';
import { FaBagShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Sidbar = () => {
   const cart = useSelector(state => state.cart)
   return (
      <div className='sidbar'>
         {navlist.map((el) => {
            return <Link className='nav-link ' to={el.path} key={el.text}>{el.text}</Link>
         })}
            <Link className='btn main-btn rounded-pill d-flex justify-content-center  mt-4'
            to='/cart'>
               <FaBagShopping />
               My Cart({cart.length})
            </Link>

      </div>
   )
}

export default Sidbar;