import React from 'react'
import { useDispatch } from 'react-redux'
import { hide } from '../controller/slices/ImgSlice'
import { FaTimes } from "react-icons/fa";
const ImgModel = ({ imgSrc }) => {
   const dispatch = useDispatch()
   return (
      <div className='modelOpen'>
         <img src={imgSrc} alt='pro' />
         <button
            className='delete-imgmodel btn rounded-pill'
            onClick={()=>{dispatch(hide())}}>
            <FaTimes /></button>
      </div>
   )
}

export default ImgModel