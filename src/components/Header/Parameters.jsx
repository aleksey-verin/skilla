import React from 'react'

const Parameters = () => {
  return (
    <div className="parameters">
      <div className="parameter">
        <div className="parameter-main">
          <div className="parameter-main__text">Новые звонки</div>
          <div className="parameter-main__digits green">20 из 30 шт</div>
        </div>
        <div className="parameter-chart green"></div>
      </div>
      <div className="parameter">
        <div className="parameter-main">
          <div className="parameter-main__text">Качество разговоров</div>
          <div className="parameter-main__digits yellow">40%</div>
        </div>
        <div className="parameter-chart yellow"></div>
      </div>
      <div className="parameter">
        <div className="parameter-main">
          <div className="parameter-main__text">Конверсия в заказ</div>
          <div className="parameter-main__digits red">67%</div>
        </div>
        <div className="parameter-chart red"></div>
      </div>
    </div>
  )
}

export default Parameters
