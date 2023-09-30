import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import { price } from '../assets/data/data';
import PlanCard from './PlanCard';
const Plans = () => {
   return (
      <div className='plans py-5 '>
         <Container className='py-5'>
            <div className='text-center'>
               <h2>Choose The Plans</h2>
               <p className='text-white-50 fw-meduim'>
                  Meet our newbies! The latest templates uploaded to the marketplace.
               </p>
            </div>
            <Row className='pt-5 justify-content-center'>
               {
                  price.map((plan) => <PlanCard plan={plan} key={plan.id}/>)
               }
            </Row>
         </Container>
      </div>
   )
}

export default Plans