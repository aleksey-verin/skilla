import React, { useEffect, useState } from 'react'
import ImgCall from '../../../images/ImgCall'
import ImgCheckbox from '../../../images/ImgCheckbox'
import ImgPhone from '../../../images/ImgPhone'
import ImgWeb from '../../../images/ImgWeb'
import ImgDownload from '../../../images/ImgDownload'
import ImgPlay from '../../../images/ImgPlay'
// import Score from './Content/Score'
import employee from '../../../../assets/images/employee.png'
import Score from './Score/Score'
import { format, parseISO, secondsToMilliseconds } from 'date-fns'
import { formatPhoneNumber, getImageCall } from '../../../../services/helpers'
import noavatar from '../../../../assets/images/noavatar.jpg'
import MessageError from './Score/MessageError'
import Recognize from './Score/Recognize'
import ImgClose from '../../../images/ImgClose'
import fetchAudio from '../../../../services/fetchAudio'

const ContentItem = ({
  id,
  in_out,
  date,
  person_id,
  person_avatar,
  from_number,
  to_number,
  contact_name,
  contact_company,
  from_site,
  source,
  status,
  errors,
  results,
  time,
  allChecked,
  record,
  partnership_id,
}) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(allChecked)
  }, [allChecked])

  const handleCheckbox = () => {
    setChecked((checked) => !checked)
  }

  const timeCall = format(parseISO(date), 'kk:mm')
  const durationCall = time ? format(secondsToMilliseconds(time), 'mm:ss') : null
  const avatarScr = person_avatar ? person_avatar : noavatar
  const phoneNumber = in_out ? from_number : to_number
  const newPhoneCall = formatPhoneNumber(phoneNumber)
  // console.log(durationCall, record)

  let audioPlayer = null
  const getAudio = async () => {
    if (!audioPlayer) {
      const audioUrl = await fetchAudio()
      audioPlayer = new Audio(audioUrl)
      audioPlayer.play()
      // playButton.textContent = 'Pause';
    } else if (audioPlayer.paused) {
      audioPlayer.play()
      // playButton.textContent = 'Pause';
    } else {
      audioPlayer.pause()
      // playButton.textContent = 'Play';
    }
  }

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
      <div className='content-item__call five'>
        <div className='content-item__first'>{contact_name ? contact_name : newPhoneCall}</div>
        <div className='content-item__second'>
          {contact_company ? contact_company : contact_name ? newPhoneCall : null}
        </div>
      </div>
      <div className='content-item__source six'>{source}</div>
      <div className='content-item__score seven'>
        {errors && !time ? <MessageError errors={errors} /> : null}
        {time ? <Recognize /> : null}
        {/* <Score score='perfect' /> */}
      </div>
      <div className='content-item__duration eight duration-open '>
        {durationCall && record ? (
          <div className='content-item__duration-block'>
            <div className='content-item__duration-digits'>{durationCall}</div>
            <div className='content-item__duration-play' onClick={getAudio}>
              <ImgPlay />
            </div>
            <div className='content-item__duration-stripe'></div>
            <div className='content-item__duration-download'>
              <ImgDownload />
            </div>
            <div className='content-item__duration-close search-open__close'>
              <ImgClose />
            </div>
          </div>
        ) : null}
      </div>
      <div className='content-item__duration eight duration-close'>{durationCall}</div>
    </div>
  )
}

export default ContentItem

function handleSound() {
  console.log(phonetics)
  if (phonetics.length) {
    const sound = phonetics[0]
    if (sound.audio) {
      new Audio(sound.audio).play()
    }
  }
}
