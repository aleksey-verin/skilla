import React from 'react'
import { groupDataByDate } from '../../../services/helpers'
import Loader from '../../commonUI/Loader'
import ContentDate from './Content/ContentDate'

import ContentItem from './Content/ContentItem'

const Content = ({ data, allChecked, loading }) => {
  const loader = loading ? <Loader /> : null
  return (
    <div className='spreadsheet-content'>
      {data.map((item, index) => {
        const myItem = <ContentItem key={item.id} data={item} allChecked={allChecked} />

        if (index < data.length - 1 && item.date_notime !== data[index + 1].date_notime) {
          const sumNext = data.filter((i) => i.date_notime === data[index + 1].date_notime).length
          return (
            <React.Fragment key={item.id}>
              <>{myItem}</>
              <ContentDate
                key={index}
                date={data[index + 1].date_notime}
                sumNext={sumNext}
                index={index}
                length={data.length}
              />
            </React.Fragment>
          )
        }
        return myItem
      })}
      {loader}
    </div>
  )
}

export default Content
