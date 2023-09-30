import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';
import { blog } from '../assets/data/data';
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom';

const Posts = () => {
   return (
      <div className='blogs pb-5'>
         <Container fluid className='px-4'>
            <div className='text-center'>
               <h2>LATEST BLOG POSTS</h2>
               <p className='text-white-50 fw-meduim'>
                  Latest marketplace news, success stories and tutorials.
               </p>
            </div>
            <Row className='justify-content-center py-3'>
               {
                  blog.map((post) => {
                     return (
                        <Col xs={12} sm={6}  lg={4} className='' key={post.id}>
                           <div className='blog' style={{backgroundImage:`url(${post.cover})`}}>
                              <Link to='/shop' className='btn main-btn rounded-pill'>{post.category}</Link>
                              <div className='details'>
                                 <p className='date text-white-50 fw-semibold'>Post Date : <span className='special'>{post.date}</span></p>
                                 <h5>{post.title}</h5>
                              </div>
                           </div>
                        </Col>

                     )
                  })
               }
            </Row>
         </Container>
      </div>
   )
}

export default Posts