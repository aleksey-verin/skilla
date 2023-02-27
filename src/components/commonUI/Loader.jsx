import React from 'react'
import ImgLoader from '../images/ImgLoader'

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loader-image'>
        <ImgLoader />
      </div>
      <div className='loader-text'>Загружаем</div>
    </div>
  )
}

export default Loader
