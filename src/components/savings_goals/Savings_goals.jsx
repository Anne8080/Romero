import React from 'react'
import './savings_goals.scss'

const Savings_goals = ({background, image, title, balance, days}) => {
  return (
    <div className='savings_goals' style={{backgroundColor: {background}}} >
        {image}
        <div className="goals">
          <h3>{title}</h3>
          <p className="my">My Balance</p>
          <h4>N{balance}</h4>
          <p className="days">{days} Days Left</p>
        </div>
    </div>
  )
}

export default Savings_goals