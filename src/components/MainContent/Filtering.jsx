import React, { useState } from 'react'
import ImgArrow from '../images/ImgArrow'
import Search from '../commonUI/Search'
import FilterMenu from './Filtering/FilterMenu'
import ImgClose from '../images/ImgClose'
import filters from '../../services/constants'
import FilterMenuCustomEmployees from './Filtering/FilterMenuCustomEmployees'
import FilterMenuEmpty from './Filtering/FilterMenuEmpty'
import FilterMenuCustomScore from './Filtering/FilterMenuCustomScore'

const Filtering = ({
  getSearchValue,
  getFilterByInOutCalls,
  filterByInOutCalls,
  getFilterByTypeCalls,
  filterByTypeCalls,
  getFilterByEmployees,
  filterByEmployees,
  employeesData,
  getFilterBySource,
  filterBySource,
  getFilterByErrors,
  filterByErrors,
}) => {
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

  const resetFilters = () => {
    getFilterByInOutCalls('')
    getFilterByTypeCalls('')
    getFilterByEmployees('')
    getFilterBySource('')
    getFilterByErrors('')
  }

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
      <div className='filters'>
        {filterByInOutCalls ||
        filterByEmployees ||
        filterByTypeCalls ||
        filterBySource ||
        filterByErrors ? (
          <div onClick={resetFilters} className='filter'>
            <div className='filter-item'>
              <div className='filter-item__text'>Сбросить фильтры</div>
            </div>
            <div className='filter-item__close'>
              <ImgClose />
            </div>
          </div>
        ) : null}

        <FilterMenu
          getFilter={getFilterByInOutCalls}
          filter={filterByInOutCalls}
          menuItems={filters.types}
        />
        <FilterMenuCustomEmployees
          getFilter={getFilterByEmployees}
          filter={filterByEmployees}
          employeesData={employeesData}
        />
        <FilterMenu
          getFilter={getFilterByTypeCalls}
          filter={filterByTypeCalls}
          menuItems={filters.calls}
        />
        <FilterMenu
          getFilter={getFilterBySource}
          filter={filterBySource}
          menuItems={filters.sources}
        />
        <FilterMenuCustomScore
          getFilter={getFilterByErrors}
          filter={filterByErrors}
          menuItems={filters.results}
        />
        <FilterMenuEmpty menuItems={filters.errors} />
      </div>
    </div>
  )
}

export default Filtering

// document.getElementById('phone').addEventListener('input', function (e) {
//   var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
//   e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
// });
