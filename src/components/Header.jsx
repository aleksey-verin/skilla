import React from 'react'
import Search from './commonUI/Search'

import CurrentDate from './Header/CurrentDate'
import Parameters from './Header/Parameters'
import Company from './Header/Company'
import User from './Header/User'

const Header = ({ dataForHeader }) => {
  const getSearchValue = () => {}

  return (
    <header className='header'>
      <div className='wrapper'>
        <CurrentDate />
        <Parameters />
        <div className='search'>
          <Search getSearchValue={getSearchValue} />
        </div>
        <div className='user-block'>
          <Company dataForHeader={dataForHeader} />
          <User />
        </div>
      </div>
    </header>
  )
}

export default Header
