import React from 'react'

const ImgCall = ({ call }) => {
  let color = 'black'
  let transform = { transform: 'none' }

  switch (call) {
    case 'income':
      color = '#28A879'
      transform = {
        transform: 'rotate(180deg)',
        // transform: 'translate(-1px, -1px)',
      }
      break
    case 'outcome':
      color = '#005FF8'
      break
    case 'inc-missed':
      color = '#EA1A4F'
      transform = { transform: 'rotate(180deg)' }
      break
    case 'out-missed':
      color = '#EA1A4F'
      break
    default:
      break
  }

  // const style = {
  //   transform:
  // }

  return (
    <div className='type-arrow' style={transform}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.99999 17.3447L7.17703 18.5217L16.8522 8.8466V14.3478H18.5217V5.99999L10.1739 5.99999V7.66955L15.6751 7.66955L5.99999 17.3447Z'
          fill={color}
        />
      </svg>
    </div>
  )
}

export default ImgCall
