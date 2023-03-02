import React from 'react'

const ScoreDots = ({ score }) => {
  let text = 'Отлично'
  let styleDots = {
    backgroundColor: '#28a879',
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
      break
    case 'bad':
      text = 'Плохо'
      number = 1
      styleDots = {
        backgroundColor: '#EA1A4F',
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
      {text}
    </div>
  )
}

export default ScoreDots
