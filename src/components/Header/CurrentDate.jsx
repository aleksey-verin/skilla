import React from 'react'
import { format } from 'date-fns'
import { da, ru } from 'date-fns/locale'

const CurrentDate = () => {
  const date = format(new Date(), 'cccc, d MMM', { locale: ru })
  if (!date) return
  const currenDate = date[0].toUpperCase() + date.slice(1, -1)

  return <div className='current-date'>{currenDate}</div>
}

export default CurrentDate
