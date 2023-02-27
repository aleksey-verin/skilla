import React from 'react'
import ImgAttention from '../images/ImgAttention'
import ImgPlus from '../images/ImgPlus'

const SidebarBtn = ({ text, pic = <ImgAttention /> }) => {
  return (
    <button className="sidebar-btn">
      <div
        style={text === 'Оплата' ? { marginRight: 40 } : {}}
        className="sidebar-btn__text"
      >
        {text}
      </div>
      {pic === 'plus' ? <ImgPlus /> : <ImgAttention />}
    </button>
  )
}

export default SidebarBtn
