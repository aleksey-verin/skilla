import React from 'react'

const ScoreText = ({ score }) => {
  let text = 'Отлично'

  let styleText = {
    color: '#28a879',
    borderColor: '#28a879',
    backgroundColor: '#dbf8ef',
  }

  switch (score) {
    case 'perfect':
      break
    case 'good':
      text = 'Хорошо'
      styleText = {
        color: '#122945',
        borderColor: '#ADBFDF',
        backgroundColor: '#D8E4FB',
      }
      break
    case 'bad':
      text = 'Плохо'
      styleText = {
        color: '#EA1A4F',
        borderColor: '#EA1A4F',
        backgroundColor: '#FEE9EF',
      }
      break
    default:
      break
  }

  return (
    <div className='score-block'>
      <div style={styleText} className='block-text'>
        {text}
      </div>
    </div>
  )
}

export default ScoreText
