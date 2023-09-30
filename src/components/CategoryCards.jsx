import React from 'react'
import { hero } from '../assets/data/data'
// import {hero}
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../style/Home.css'
const CategoryCards = () => {
   // console.log(hero);
   return (
      <div className="cateories-wrapper">
         <Container fluid className='px-4'>
            <Row className='justify-content-center'>
               {
                  hero.map((cat) => {
                     return (
                        <Col xs={12} sm={6} md={4} lg key={cat.id} className='my-2'>
                           <div className='category-card'>
                              <Image src={cat.cover}  />
                              <div className='text flex-grow-1'>
                                 <h6 className='mb-2'> {cat.name} </h6>
                                 <p className='mb-0'>{cat.items} items</p>
                              </div>
                           </div>
                        </Col >

                     )
                  })
               }
            </Row>
         </Container>
      </div>
   )
}

export default CategoryCards