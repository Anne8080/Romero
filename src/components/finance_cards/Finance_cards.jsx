import React from 'react'
import './finance_cards.scss'

const Finance_cards = ({icon, title, link}) => {
  return (
    <div className='cards' >
            {icon}
            <a href={link} className="title">
                {title}
            </a>
    </div>
  )
}

export default Finance_cards