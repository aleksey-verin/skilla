import React from 'react'
import avatar from '../../assets/images/avatar.png'
import ImgArrow from '../images/ImgArrow'

const User = () => {
  return (
    <div className="user">
      <img src={avatar} alt="avatar" />
      <ImgArrow direction="btn-up" />
    </div>
  )
}

export default User
