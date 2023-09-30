import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import { banner } from '../assets/data/data';
import BannerCard from './BannerCard';

const Banner = () => {
   return (
      <div className='banner py-5'>
         <Container fluid className='px-4'>
            <Row className='px-lg-3'>
               {
                  banner.map((product) => {
                     return (<BannerCard product={product} key={product.id} />)
                  })
               }
            </Row>
         </Container>
      </div>
   )
}

export default Banner