import React from 'react'
import ImgArrow from '../images/ImgArrow'
import Search from '../commonUI/Search'

const Filtering = () => {
  return (
    <div className="filtering">
      <div className="search-calls">
        <Search type="calls" text="Поиск по звонкам" />
      </div>
      <div className="filter">
        <div className="filter-item">
          <div className="filter-item__text">Все типы</div>
          <ImgArrow />
        </div>
        <div className="filter-item">
          <div className="filter-item__text">Все сотрудники</div>
          <ImgArrow />
        </div>
        <div className="filter-item">
          <div className="filter-item__text">Все звонки</div>
          <ImgArrow />
        </div>
        <div className="filter-item">
          <div className="filter-item__text">Все источники</div>
          <ImgArrow />
        </div>
        <div className="filter-item">
          <div className="filter-item__text">Все оценки</div>
          <ImgArrow />
        </div>
        <div className="filter-item">
          <div className="filter-item__text">Все ошибки</div>
          <ImgArrow />
        </div>
      </div>
    </div>
  )
}

export default Filtering
