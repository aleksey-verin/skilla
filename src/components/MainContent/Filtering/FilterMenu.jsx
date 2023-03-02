import React, { useEffect, useRef, useState } from 'react'
import ImgArrow from '../../images/ImgArrow'
// import filters from '../../services/constants'

const FilterMenu = ({ getFilter, filter, menuItems }) => {
  // const menuItems = ['Все типы', 'Входящие', 'Исходящие']
  // const menuItems = [
  //   { name: 'Все типы', request: '' },
  //   { name: 'Входящие', request: '1' },
  //   { name: 'Исходящие', request: '0' },
  // ]
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(menuItems[0].name)

  useEffect(() => {
    if (filter === '') {
      setActiveItem(menuItems[0].name)
    }
  }, [filter])

  useEffect(() => {
    const request = menuItems.find((item) => item.name === activeItem)
    if (request) {
      getFilter(request.request)
    }
  }, [activeItem])

  const menu = useRef(null)

  const handleClick = (e) => {
    if (e.target.textContent !== activeItem) {
      console.log(e.target.textContent)
      setActiveItem(e.target.textContent)
      setMenuOpen(false)
    }
  }

  const hideForm = (e) => {
    if (menu.current && !menu.current.contains(e.target)) {
      setMenuOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('click', hideForm)
    return () => {
      document.removeEventListener('click', hideForm)
    }
  }, [menu])

  const openMenu = () => {
    setMenuOpen(true)
  }

  return (
    <div ref={menu} className='filter' onClick={() => setMenuOpen(!menuOpen)}>
      <div className='filter-item'>
        <div
          className='filter-item__text'
          style={activeItem !== menuItems[0].name ? { color: '#005FF8' } : {}}
        >
          {activeItem}
        </div>
      </div>
      <button onClick={openMenu} className='btn-arrow'>
        {menuOpen ? <ImgArrow direction='btn-up' /> : <ImgArrow direction='btn-down' />}
      </button>
      {menuOpen && (
        <div className='filter-menu'>
          <div className='filter-menu__menu' onClick={handleClick}>
            {menuItems.map((item) => {
              return (
                <div
                  key={item.name}
                  className={`filter-menu__item ${activeItem === item.name ? 'active' : ''}`}
                >
                  {item.name}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterMenu
