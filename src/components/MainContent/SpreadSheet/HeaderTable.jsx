import React from 'react'
import ImgCheckbox from '../../images/ImgCheckbox'

const HeaderTable = ({ checked, handleCheckbox }) => {
  return (
    <div className='spreadsheet-header'>
      <div style={checked ? { opacity: '1' } : null} className='spreadsheet-item zero-type zero'>
        <ImgCheckbox id='0' handleCheckbox={handleCheckbox} checked={checked} />
      </div>
      <div className='spreadsheet-item one'>Тип</div>
      <div className='spreadsheet-item two'>Время</div>
      <div className='spreadsheet-item three'>Сотрудник</div>
      <div className='spreadsheet-item four'></div>
      <div className='spreadsheet-item five'>Звонок</div>
      <div className='spreadsheet-item six'>Источник</div>
      <div className='spreadsheet-item seven'>Оценка</div>
      <div className='spreadsheet-item eight'>Длительность</div>
    </div>
  )
}

export default HeaderTable
