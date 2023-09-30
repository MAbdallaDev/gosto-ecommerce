import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import logo from '../assets/images/logo.svg';
import { navlist } from '../assets/data/data'
import { Link } from 'react-router-dom';
import { FaUser , FaHeart , FaBagShopping , FaMagnifyingGlass , FaBars} from "react-icons/fa6";
import '../style/NavbarCom.css'
import { useSelector } from 'react-redux';
import CartDropDown from './CartDropDown';
const NavbarCom = () => {
   // console.log(navlist);
   const cartList = useSelector(state => state.cart)
   useEffect(()=>{
      window.addEventListener("scroll",()=>{
         if (window.scrollY > 75) 
            document.querySelector("nav").classList.add("active");
         else 
            document.querySelector("nav").classList.remove("active");
      })
   },[])
   const cartToggler = () => {
      document.querySelector(".cart-dropdown").classList.toggle("active");
   }
   return (
      <Navbar expand="lg" className="fixed-top">
         <Container fluid className='mx-md-4 '>
            <button
               className='main-background sidbar-toggler d-lg-none'
               onClick={() => { document.querySelector(".sidbar").classList.toggle("active") }}
            >
               <FaBars />
            </button>
            <Link className="navbar-brand" to="/">
               <Image src={logo} />
            </Link>
            <Navbar.Collapse id="navbarScroll" className=' gap-4'>
               <Nav
                  className="m-auto my-2 my-lg-0 gap-3"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
               >
                  {
                     navlist.map((el) => {
                        return <Link className='nav-link' to={el.path} key={el.text}>{el.text}</Link>
                     })
                  }
               </Nav>
               <Form className="d-flex position-relative mobile-hidden">
                  <Form.Control
                     type="search"
                     placeholder="Search Products..."
                     className="me-2 rounded-pill"
                     aria-label="Search"
                  />
                  <FaMagnifyingGlass className='searchIcon' />
               </Form>
               <Nav className='right position-relative'>
                  <FaUser />
                  <FaHeart />
                  <button 
                     className='btn rounded-pill d-flex justify-content-center text-uppercase cart-button cart-toggler'
                     onClick={()=>{cartToggler()}}>
                     <FaBagShopping />
                     My Cart({cartList.length})
                  </button>
                  <CartDropDown />
               </Nav>
            </Navbar.Collapse>
            <FaMagnifyingGlass className='searchIcon d-lg-none' />
         </Container>
      </Navbar>
   )
}

export default NavbarCom