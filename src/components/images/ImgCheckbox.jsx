import React from 'react'

const ImgCheckbox = ({ id, checked, handleCheckbox }) => {
  return (
    <form className='formCheckbox'>
      <input
        className='inputCheckbox'
        checked={checked}
        onChange={handleCheckbox}
        type='checkbox'
        id={id}
      />
      <label className='labelCheckbox' htmlFor={id}></label>
    </form>
  )
}

export default ImgCheckbox
