import React from 'react'
import ImgArrow from '../images/ImgArrow'

const Company = ({ dataForHeader }) => {
  return (
    <div className='company'>
      <div className='company-name'>{dataForHeader}</div>
      <ImgArrow />
    </div>
  )
}

export default Company
