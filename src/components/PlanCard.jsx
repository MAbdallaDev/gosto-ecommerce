import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import { Link } from 'react-router-dom'

const PlanCard = ({ plan }) => {
   return (
      <Col
         lg={4} md={6} sm={10}
         className='plan-wrapper position-relative my-3'
         plan={plan.name.split(" ")[0]}
      >
         <span className='special-offer'>{plan.special}</span>
         <div className='head '>
            <h3 className='mt-3 mb-3'>{plan.name}</h3>
            <p className='price'>
               {plan.price}
               <span>/user per month</span>
            </p>
            <p className='desc text-white-50 mb-2'>{plan.desc}</p>
         </div>
         <div className='py-4 text-center'>
            <Link to='/contact' className='btn main-btn text-uppercase rounded-pill ' >get started</Link>
         </div>
         <ul className='feature-list ps-0'>
            {
               plan.list.map(feat => {
                  return (
                     <li className='d-flex gap-2 py-3 align-items-center' key={feat.id}>
                        {feat.icon}
                        <p className='mb-0'>{feat.para}</p>
                     </li>
                  )
               })
            }
         </ul>
      </Col>
   )
}

export default PlanCard