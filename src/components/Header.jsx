import React from 'react'
import ImgArrow from './images/ImgArrow'
import Search from './commonUI/Search'

import CurrentDate from './Header/CurrentDate'
import Parameters from './Header/Parameters'
import Company from './Header/Company'
import User from './Header/User'

const Header = ({ dataForHeader }) => {
  return (
    <header className='header'>
      <div className='wrapper'>
        <CurrentDate />
        <Parameters />
        <div className='search'>
          <Search />
        </div>
        <Company dataForHeader={dataForHeader} />
        <User />
      </div>
    </header>
  )
}

export default Header
