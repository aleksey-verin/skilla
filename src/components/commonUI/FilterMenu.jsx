import React, { useEffect, useRef, useState } from 'react'
import ImgArrow from '../images/ImgArrow'

const FilterMenu = () => {
  const menuItems = [{ name: '3 дня' }, { name: 'Неделя' }, { name: 'Месяц' }, { name: 'Год' }]
  // const [three, week, month, year] = menuItems
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(menuItems[0].name)

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
    <div ref={menu} className='period'>
      <div onClick={() => setMenuOpen(!menuOpen)} className='period-days'>
        <div className='period-days__text'>{activeItem}</div>
      </div>
      <button onClick={openMenu} className='btn-arrow'>
        <ImgArrow direction='btn-down' />
      </button>
      {menuOpen && (
        <div className='period-menu'>
          <div className='period-menu__menu' onClick={handleClick}>
            {menuItems.map((item) => {
              return (
                <div
                  key={item.name}
                  className={`period-menu__item ${activeItem === item.name ? 'active' : ''}`}
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
