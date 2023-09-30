import React, { useEffect, useState } from 'react'
import { topProducts } from '../assets/data/data'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import ProductCard from './ProductCard';
import Col from 'react-bootstrap/esm/Col';
const TopProducts = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      // setProducts(topProducts)
      handleFilter('all') ;
   }, [])
   const handleFilter = (category) => {
      setProducts('');
      if (category === 'all') {
         setProducts(topProducts);
      }
      else {
         let list = [];
         for (const prod of topProducts) {
            if (prod.category === category) {
               list.push(prod)
            }
         }
         setProducts(list)
      }
   }
   // console.log(products);
   return (
      <div className='top-products  py-5'>
         <Container fluid className='text-center px-4'>
            <div className='heading'>
               <h2>Top Selling Products</h2>
               <p className='text-p'>
                  Meet our newbies! The latest templates uploaded to the marketplace.
               </p>
               <ul className='filter-wrapper py-4'>
                  <li>
                     <button
                        className='btn main-btn rounded-pill text-capitalize'
                        onClick={() => { handleFilter('all') }}
                     >
                        All</button>
                  </li>
                  <li>
                     <button
                        className='btn main-btn rounded-pill text-capitalize'
                        onClick={() => { handleFilter('icons') }}
                     >
                        icons</button>
                  </li>
                  <li>
                     <button
                        className='btn main-btn rounded-pill text-capitalize'
                        onClick={() => { handleFilter('web theme') }}
                     >
                        web theme</button>
                  </li>
                  <li>
                     <button
                        className='btn main-btn rounded-pill text-capitalize'
                        onClick={() => { handleFilter('images stocks') }}
                     >
                        images stocks</button>
                  </li>
                  <li>
                     <button
                        className='btn main-btn rounded-pill  text-capitalize'
                        onClick={() => { handleFilter('mockups') }}
                     >
                        mockups</button>
                  </li>
               </ul>
            </div>
            <Row className='justify-content-center py-2'>
               {
                  products.length > 0 ?
                  products.map((product) => {
                     return (
                        <Col xs={12} sm={6} md={4} lg={3} className='my-2' key={product.id}>
                           <ProductCard product={product} qty={'d-none'} />
                        </Col>
                     )
                  })
                  : <h1>no non </h1>
               }
            </Row>
         </Container>
      </div>
   )
}

export default TopProducts