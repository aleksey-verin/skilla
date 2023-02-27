import React, { useEffect, useState } from 'react'
import ImgCall from '../../../images/ImgCall'
import ImgCheckbox from '../../../images/ImgCheckbox'
import ImgPhone from '../../../images/ImgPhone'
import ImgWeb from '../../../images/ImgWeb'
// import Score from './Content/Score'
import employee from '../../../../assets/images/employee.png'
import Score from './Score/Score'
import { format, parseISO, secondsToMilliseconds } from 'date-fns'
import { formatPhoneNumber, getImageCall } from '../../../../services/helpers'
import noavatar from '../../../../assets/images/noavatar.jpg'
import MessageError from './Score/MessageError'
import Recognize from './Score/Recognize'

const ContentItem = ({
  id,
  in_out,
  date,
  person_id,
  person_avatar,
  from_number,
  to_number,
  from_site,
  source,
  status,
  errors,
  results,
  time,
  allChecked,
}) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(allChecked)
  }, [allChecked])

  const handleCheckbox = () => {
    setChecked((checked) => !checked)
  }

  const timeCall = format(parseISO(date), 'kk:mm')
  const durationCall = time ? format(secondsToMilliseconds(time), 'mm:ss') : ''
  const avatarScr = person_avatar ? person_avatar : noavatar
  const phoneNumber = in_out ? from_number : to_number
  const newPhoneCall = formatPhoneNumber(phoneNumber)
  // console.log(results)

  return (
    <div className='content-item'>
      <div style={checked ? { opacity: '1' } : null} className='content-item__checkbox zero'>
        <ImgCheckbox handleCheckbox={handleCheckbox} checked={checked} id={id} />
      </div>
      <div className='content-item__type one'>
        <ImgCall call={getImageCall(in_out, status)} />
      </div>
      <div className='content-item__time two'>{timeCall}</div>
      <div className='content-item__employee three'>
        <div className='employee-container'>
          <img src={avatarScr} alt='avatar' />
        </div>
      </div>
      <div className='content-item__call four'>
        {from_site ? (
          <div>
            <ImgWeb />
          </div>
        ) : null}
        {/* <div className='img-web'>
          <ImgWeb />
        </div> */}
        <div className='img-phone'>
          <ImgPhone />
        </div>
      </div>
      <div className='content-item__call five'>{newPhoneCall}</div>
      <div className='content-item__source six'>{source}</div>
      <div className='content-item__score seven'>
        {errors && !time ? <MessageError errors={errors} /> : null}
        {time ? <Recognize /> : null}
        {/* <Score score='perfect' /> */}
      </div>
      <div className='content-item__duration eight'>{durationCall}</div>
    </div>
  )
}

export default ContentItem
