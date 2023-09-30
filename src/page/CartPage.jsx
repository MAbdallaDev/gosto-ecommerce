import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';
import { FaRegTrashCan } from "react-icons/fa6";
import { deleteFromCrat } from '../controller/slices/cartSlice';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col'
import { useNavigate } from 'react-router-dom';
const CartPage = () => {
   const cartList = useSelector(state => state.cart);
   console.log(cartList);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [total, setTotal] = useState(0);
   useEffect(() => {
      calculatePrice();
   }, [cartList])
   const calculatePrice = () => {
      let total = 0;
      cartList.map((product) => total += product.qty * product.price)
      setTotal(total);
   }

   return (
      <div className='cart-page'>
         <Container className='py-5 px-3 p-lg-5'>
            <div className='head d-flex justify-content-between'>
               <h2>Products In Cart</h2>
               <h4>Total Price: {total}</h4>
            </div>
            <Row className='px-1 py-lg-4'>
               {
                  cartList.length > 0 
                  ?cartList.map((product) => {
                  return (
                     <Col lg={12}
                        className=' cart-wrapper d-flex justify-content-between align-items-center px-0 py-4'
                        key={product.id}>
                        <ProductCard product={product} key={product.id} link={`cart/${product.id}`} />
                        <button
                           className='delete '
                           onClick={() => { dispatch(deleteFromCrat(product)) }}>
                           <FaRegTrashCan />
                        </button>
                     </Col>
                  )
               })
               : <h4>The Cart Is Empty</h4>
               }
            </Row>
         </Container>
      </div>
   )
}

export default CartPage