import React, { useEffect, useLayoutEffect, useState } from 'react'

import HeaderTable from './SpreadSheet/HeaderTable'
import Content from './SpreadSheet/Content'

const SpreadSheet = ({ data, loading }) => {
  const [allChecked, setAllChecked] = useState(false)

  const handleCheckbox = () => {
    setAllChecked(!allChecked)
  }

  return (
    <div className='spreadsheet'>
      <HeaderTable handleCheckbox={handleCheckbox} checked={allChecked} />
      <Content allChecked={allChecked} data={data} loading={loading} />
    </div>
  )
}

export default SpreadSheet
