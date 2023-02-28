import { format, sub } from 'date-fns'
import React, { useEffect, useRef, useState } from 'react'
import Loader from '../commonUI/Loader'
import ImgArrow from '../images/ImgArrow'
import ImgCalendar from '../images/ImgCalendar'
import ImgPlus from '../images/ImgPlus'

const Info = ({ getPeriodForRequest, loading, clearOffset }) => {
  const menuItems = ['3 дня', 'Неделя', 'Месяц', 'Год', 'Период']
  const menuItemsLength = menuItems.length
  const [three, week, month, year, custom] = menuItems

  const [menuOpen, setMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(three)

  const [valueStart, setValueStart] = useState(null)
  const [valueEnd, setValueEnd] = useState(null)

  const [inputStart, setInputStart] = useState(null)
  const [inputEnd, setInputEnd] = useState(null)

  const menu = useRef(null)

  const handleClick = (e) => {
    if (e.target.textContent !== activeItem) {
      console.log(e.target.textContent)
      clearOffset()
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

  const clickRight = () => {
    const currentItemIndex = menuItems.indexOf(activeItem)
    if (currentItemIndex === menuItemsLength - 2) return
    setActiveItem(menuItems[currentItemIndex + 1])
  }

  const clickLeft = () => {
    const currentItemIndex = menuItems.indexOf(activeItem)
    if (currentItemIndex === 0) return
    setActiveItem(menuItems[currentItemIndex - 1])
  }

  useEffect(() => {
    if (activeItem === custom) {
      setValueStart(inputStart)
      setValueEnd(inputEnd)
      getPeriodForRequest(inputStart, inputEnd)
      return
    }

    let period = {}
    switch (activeItem) {
      case three:
        period = { days: 3 }
        break
      case week:
        period = { weeks: 1 }
        break
      case month:
        period = { months: 1 }
        break
      case year:
        period = { years: 1 }
        break
      default:
        break
    }
    const start = format(sub(new Date(), period), 'yyyy-MM-dd')
    const end = format(new Date(), 'yyyy-MM-dd')
    setValueStart(start)
    setValueEnd(end)
    setInputStart(valueStart)
    setInputEnd(valueEnd)
    getPeriodForRequest(start, end)
  }, [activeItem])

  useEffect(() => {
    setInputStart(valueStart)
    setInputEnd(valueEnd)
  }, [valueStart])

  const getCustomPeriod = (e) => {
    e.preventDefault()
    setValueStart(inputStart)
    setValueEnd(inputEnd)
    setActiveItem(custom)
    setMenuOpen(false)
  }

  const loader = loading ? <Loader /> : null

  return (
    <div className='info'>
      {loader}
      <div className='balance'>
        <div className='balance-text'>
          Баланс: <span>272 ₽</span>
        </div>
        <ImgPlus fill='#005FF8' opacity='1' />
      </div>
      <div ref={menu} className='period'>
        <button onClick={clickLeft} className='btn-arrow'>
          <ImgArrow direction='btn-left' />
        </button>
        <div onClick={() => setMenuOpen(!menuOpen)} className='period-days'>
          <ImgCalendar direction='btn-left' />
          <div className='period-days__text'>{activeItem}</div>
        </div>
        <button onClick={clickRight} className='btn-arrow'>
          <ImgArrow direction='btn-right' />
        </button>
        {menuOpen && (
          <div className='period-menu'>
            <div className='period-menu__menu' onClick={handleClick}>
              <div className={`period-menu__item ${activeItem === three ? 'active' : ''}`}>
                {three}
              </div>
              <div className={`period-menu__item ${activeItem === week ? 'active' : ''}`}>
                {week}
              </div>
              <div className={`period-menu__item ${activeItem === month ? 'active' : ''}`}>
                {month}
              </div>
              <div className={`period-menu__item ${activeItem === year ? 'active' : ''}`}>
                {year}
              </div>
            </div>
            <div className='period-menu__calendar'>
              <div className='period-menu__text'>Указать даты</div>
              <form onSubmit={getCustomPeriod} className='period-menu__dates'>
                <div className='period-menu__inputs'>
                  <input
                    onChange={(e) => setInputStart(e.target.value)}
                    className='inputPeriod'
                    value={inputStart}
                    type='date'
                  />
                  <div>-</div>
                  <input
                    onChange={(e) => setInputEnd(e.target.value)}
                    className='inputPeriod'
                    value={inputEnd}
                    type='date'
                  />
                </div>
                <button type='submit' onClick={getCustomPeriod} className='period-menu__button'>
                  <ImgCalendar />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Info
