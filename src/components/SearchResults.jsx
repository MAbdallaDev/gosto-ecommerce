import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import ProductCard from './ProductCard';
import { products } from '../assets/data/data'

const SearchResults = ({ searchItem }) => {
   // console.log(searchItem);
   const [searchResult, SetSerachResult] = useState([]);
   useEffect(() => {
      handleSearch();
   }, [searchItem])
   const handleSearch = () => {
      if (searchItem.includes('f')) {
         SetSerachResult(products)
      }
      else SetSerachResult([])
   }
   // console.log(searchResult);
   return (
      <>
         {
            searchResult.length > 0 &&
            <div className='serach-results my-4'>
               <Container fluid className='text-center'>
                  <Row className='justify-content-center py-2'>
                     {
                        searchResult.map((product) => {
                           return (
                              <Col xs={12} sm={6} md={4} lg={3} className='my-2' key={product.id}>
                                 <ProductCard product={product} qty={'d-none'} />
                              </Col>
                           )
                        })
                     }
                  </Row>
               </Container>
            </div>
         }
      </>
   )
}

export default SearchResults