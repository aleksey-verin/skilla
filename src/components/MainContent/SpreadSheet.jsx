import React, { useEffect, useLayoutEffect, useState } from 'react'

import HeaderTable from './SpreadSheet/HeaderTable'
import Content from './SpreadSheet/Content'
import fetchRequest from '../../services/fetch'
import Search from '../commonUI/Search'
import Loader from '../commonUI/Loader'

const SpreadSheet = ({ data, loading }) => {
  console.log('render spreedsheet')

  const [allChecked, setAllChecked] = useState(false)

  const handleCheckbox = () => {
    setAllChecked(!allChecked)
  }

  console.log(data)
  return (
    <div className='spreadsheet'>
      <HeaderTable handleCheckbox={handleCheckbox} checked={allChecked} />
      <Content allChecked={allChecked} data={data} loading={loading} />
    </div>
  )
}

export default SpreadSheet
