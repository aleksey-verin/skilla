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
        const myItem = (
          <ContentItem
            key={item.id}
            id={item.id}
            in_out={item.in_out}
            date={item.date}
            person_id={item.person_id}
            person_avatar={item.person_avatar}
            from_number={item.from_number}
            to_number={item.to_number}
            contact_name={item.contact_name}
            contact_company={item.contact_company}
            from_site={item.from_site}
            source={item.source}
            status={item.status}
            errors={item.errors}
            results={item.results}
            time={item.time}
            allChecked={allChecked}
            record={item.record}
            partnership_id={item.partnership_id}
          />
        )

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
