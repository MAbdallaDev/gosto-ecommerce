import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCard from './ProductCard';
import { products } from '../assets/data/data'
const TrendingProducts = () => {
   return (
      <div className='trending text-center mt-5 mb-4'>
         <Container fluid className="px-4">
         <h2>Trendings Products</h2>
         <p className='text-p'>Check the hottest designs of the week. These rising stars are worth your attention.</p>
            <Row className='justify-content-center py-3'>
               {
                  products.map((product) => {
                     return (
                        <Col xs={12} sm={6} md={4} lg={3} className='my-2' key={product.id}>
                           <ProductCard product={product} qty={'d-none'}/> 
                        </Col>
                     )
                  })
               }
            </Row>
         </Container>
      </div>
   )
}

export default TrendingProducts