import React from 'react'
import ImgInfoSmall from '../../../../images/ImgInfoSmall'

const Score = ({ score }) => {
  let text = 'Отлично'
  let styleDots = {
    backgroundColor: '#28a879',
  }

  let styleText = {
    color: '#28a879',
    borderColor: '#28a879',
    backgroundColor: '#dbf8ef',
  }
  let number = 3

  switch (score) {
    case 'perfect':
      break
    case 'good':
      text = 'Хорошо'
      number = 2
      styleDots = {
        backgroundColor: '#ADBFDF',
      }
      styleText = {
        color: '#122945',
        borderColor: '#ADBFDF',
        backgroundColor: '#D8E4FB',
      }
      break
    case 'bad':
      text = 'Плохо'
      number = 1
      styleDots = {
        backgroundColor: '#EA1A4F',
      }
      styleText = {
        color: '#EA1A4F',
        borderColor: '#EA1A4F',
        backgroundColor: '#FEE9EF',
      }
      break
    default:
      break
  }

  const getDotes = (number) => {
    let dotes = []
    for (let i = 0; i < number; i++) {
      dotes.push(<div key={i} style={styleDots} className='block-dots__dot'></div>)
    }
    return dotes
  }

  return (
    <div className='score-block'>
      <div className='block-dots'>{getDotes(number)}</div>
      <div style={styleText} className='block-text'>
        {text}
      </div>
      <ImgInfoSmall />
    </div>
  )
}

export default Score
