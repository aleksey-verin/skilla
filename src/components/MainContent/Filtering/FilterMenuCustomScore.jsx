import React, { useEffect, useRef, useState } from 'react'
import ImgArrow from '../../images/ImgArrow'
import ScoreDots from '../SpreadSheet/Content/Score/ScoreDots'
import ScoreText from '../SpreadSheet/Content/Score/ScoreText'

const FilterMenuCustomScore = ({ getFilter, filter, menuItems }) => {
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
        {/* <ImgArrow direction='btn-down' /> */}
      </button>
      {menuOpen && (
        <div className='filter-menu'>
          <div className='filter-menu__menu' onClick={handleClick}>
            <div
              className={`filter-menu__item ${activeItem === menuItems[0].name ? 'active' : ''}`}
            >
              {menuItems[0].name}
            </div>
            <div
              className={`filter-menu__item ${activeItem === menuItems[1].name ? 'active' : ''}`}
            >
              {menuItems[1].name}
            </div>
            <div
              className={`filter-menu__item ${activeItem === menuItems[2].name ? 'active' : ''}`}
            >
              {menuItems[2].name}
            </div>
            <div
              className={`filter-menu__item ${activeItem === menuItems[3].name ? 'active' : ''}`}
            >
              <ScoreText score={'bad'} />
            </div>
            <div
              className={`filter-menu__item ${activeItem === menuItems[4].name ? 'active' : ''}`}
            >
              <ScoreText score={'good'} />
            </div>
            <div
              className={`filter-menu__item ${activeItem === menuItems[5].name ? 'active' : ''}`}
            >
              <ScoreText score={'perfect'} />
            </div>
            <div
              className={`filter-menu__item ${activeItem === menuItems[6].name ? 'active' : ''}`}
            >
              <ScoreDots score={'bad'} />
            </div>
            <div
              className={`filter-menu__item ${activeItem === menuItems[7].name ? 'active' : ''}`}
            >
              <ScoreDots score={'good'} />
            </div>
            <div
              className={`filter-menu__item ${activeItem === menuItems[8].name ? 'active' : ''}`}
            >
              <ScoreDots score={'perfect'} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterMenuCustomScore
