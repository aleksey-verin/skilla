import { format, isYesterday } from 'date-fns'
import ru from 'date-fns/locale/ru'
import React from 'react'

const ContentDate = ({ date, sumNext }) => {
  const yesterday = isYesterday(new Date(date))
  const dateForRender = format(new Date(date), 'dd MMMM', { locale: ru })

  return (
    <div className='content-date'>
      <div className='content-date__sum'>{sumNext}</div>
      <div className='content-date__text'>{yesterday ? 'Вчера' : dateForRender}</div>
    </div>
  )
}

export default ContentDate
