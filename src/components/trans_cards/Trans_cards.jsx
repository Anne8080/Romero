import React from 'react'
import './trans_cards.scss'

const Trans_cards = ({icon, date, time, amount, dir, Neg}) => {
  let sign;
  let style
  if (Neg == 'true'){ 
    sign = '-' 
    style = 'neg'
  }else{
    sign = '+'
    style = 'pos'
  }
  return (
    <div className='trans'>
      {icon}
      <div>
        <p className="datetime">{date} {time}</p>
        <p className="dir">{dir}</p>
      </div>
      <div>
        <h3 className={style}>{sign}{amount}</h3>
        <p className="ok">**********</p>
      </div>
    </div>
  )
}

export default Trans_cards