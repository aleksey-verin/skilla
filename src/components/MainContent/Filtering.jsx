import React, { useState } from 'react'
import ImgArrow from '../images/ImgArrow'
import Search from '../commonUI/Search'
import FilterMenu from '../commonUI/FilterMenu'

const Filtering = ({ getSearchValue }) => {
  // const [inputValue, setInputValue] = useState('')
  // const [valueForSearch, setValueForSearch] = useState('')

  // const handleInput = (e) => {
  //   let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
  //   e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
  //   setInputValue(e.target.value)
  //   setValueForSearch(x[0])
  //   console.log(x[0])
  //   // ======================================
  // }

  return (
    <div className='filtering'>
      <div className='search-calls'>
        <Search getSearchValue={getSearchValue} type='calls' text='Поиск по звонкам' />
      </div>
      {/* <input
        onInput={handleInput}
        type='text'
        id='phone'
        placeholder='Введите номер..'
        value={inputValue}
      /> */}
      <FilterMenu />
      <div className='filter'>
        <div className='filter-item'>
          <div className='filter-item__text'>Все типы</div>
          <ImgArrow />
        </div>
        <div className='filter-item'>
          <div className='filter-item__text'>Все сотрудники</div>
          <ImgArrow />
        </div>
        <div className='filter-item'>
          <div className='filter-item__text'>Все звонки</div>
          <ImgArrow />
        </div>
        <div className='filter-item'>
          <div className='filter-item__text'>Все источники</div>
          <ImgArrow />
        </div>
        <div className='filter-item'>
          <div className='filter-item__text'>Все оценки</div>
          <ImgArrow />
        </div>
        <div className='filter-item'>
          <div className='filter-item__text'>Все ошибки</div>
          <ImgArrow />
        </div>
      </div>
    </div>
  )
}

export default Filtering

// document.getElementById('phone').addEventListener('input', function (e) {
//   var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//   e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
// });
