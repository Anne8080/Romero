import React from 'react'
import './finance_cards.scss'

const Finance_cards = ({icon, title}) => {
  return (
    <div className='cards' >
            {icon}
            <a href="" className="title">
                {title}
            </a>
    </div>
  )
}

export default Finance_cards