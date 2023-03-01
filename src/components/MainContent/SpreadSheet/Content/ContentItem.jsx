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
import ImgLoader from '../../../images/ImgLoader'

const ContentItem = ({ data, allChecked }) => {
  const {
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
    record,
    partnership_id,
  } = data

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

  const [audioPlayer, setAudioPlayer] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [loadingAudio, setLoadingAudio] = useState(false)

  const [styleForPlaying, setStyleForPlaying] = useState({ width: '0%' })
  const [duration, setDuration] = useState(null)
  const [currentTime, setCurrentTime] = useState(0)

  const getAudio = async () => {
    if (!audioPlayer) {
      setLoadingAudio(true)
      const audioUrl = await fetchAudio(record, partnership_id)
      setLoadingAudio(false)
      setAudioPlayer(new Audio(audioUrl))
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Math.floor(audioPlayer.currentTime))
    }, 1000)
    if (!playing) clearInterval(timer)
  }, [playing])

  useEffect(() => {
    const percent = ((currentTime / duration) * 100).toFixed(0)
    setStyleForPlaying({ width: `${percent}%` })
  }, [currentTime])

  const playAudio = () => {
    if (!audioPlayer) return
    if (audioPlayer.paused) {
      audioPlayer.play()
      setDuration(Math.floor(audioPlayer.duration))
      setCurrentTime(Math.floor(audioPlayer.currentTime))
      setPlaying(true)
    } else {
      audioPlayer.pause()
      setPlaying(false)
    }
  }

  const clearAudio = () => {
    audioPlayer.pause()
    setAudioPlayer(null)
    setPlaying(false)
    setStyleForPlaying({ width: '0%' })
    setDuration(null)
    setCurrentTime(0)
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
      <div
        className='content-item__duration eight duration-open'
        style={audioPlayer ? { display: 'block' } : {}}
      >
        {durationCall && record ? (
          <div className='content-item__duration-block'>
            <div className='content-item__duration-digits'>{durationCall}</div>
            <div className='content-item__duration-play' onClick={playAudio}>
              <ImgPlay playing={playing} audioPlayer={audioPlayer} />
            </div>
            <div className={`content-item__duration-stripe ${audioPlayer ? 'full' : null}`}>
              <div style={styleForPlaying} className='content-item__duration-stripe__going'></div>
            </div>
            <div className='content-item__duration-download' onClick={getAudio}>
              {loadingAudio ? (
                <div className='loader-image'>
                  <ImgLoader />
                </div>
              ) : !audioPlayer ? (
                <ImgDownload />
              ) : null}
            </div>
            <div onClick={clearAudio} className='content-item__duration-close search-open__close'>
              <ImgClose />
            </div>
          </div>
        ) : null}
      </div>
      <div
        className='content-item__duration eight duration-close'
        style={audioPlayer ? { display: 'none' } : {}}
      >
        {durationCall}
      </div>
    </div>
  )
}

export default ContentItem
