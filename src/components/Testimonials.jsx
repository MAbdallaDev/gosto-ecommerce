import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { customer } from '../assets/data/data'
import { FaQuoteLeft } from "react-icons/fa6";
const Testimonials = () => {
   // console.log(customer);
   return (
      <div className='testimonal py-5 text-center'>
         <Container fluid className='px-4'>
            <h2>Testimonials</h2>
            <p className='text-p'>
               See Some Of Customer Testimonials About Our Work
            </p>
            <Row className='justify-content-center pt-5'>
               {
                  customer !== '' ?
                     customer.map((cust) => {
                        return (
                           <Col lg={4} md={6} sm={12}  className='cust px-3 py-4' key={cust.id}>
                              <div className='wrapper'>
                                 <FaQuoteLeft className='quote'/>
                                 <p className='text-p mt-4'>{cust.desc}</p>
                                 <h5 className='name my-3'>{cust.name}</h5>
                                 <p className='text-p '>{cust.post}</p>
                              </div>
                           </Col>
                        )
                     })
                     : <h1>loading</h1>
               }
            </Row>
         </Container>
      </div>
   )
}

export default Testimonials