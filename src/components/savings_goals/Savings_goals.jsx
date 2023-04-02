import React from 'react'
import './savings_goals.scss'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Savings_goals = ({background, title, balance, days, per}) => {
  return (
    <div className='savings_goals' style={{backgroundColor: '#85a1deb4'}} >
        <AttachMoneyIcon className='money'/>
        <div className="goals">
          <h3 className='titlesave'>{title}</h3>
          <p className="my">My Balance</p>
          <h4>N{balance}</h4>
          <p className="days">{days} Days Left</p>
          <input type="range" min="0" max="100" value={per} id="progress-bar"/><span>  {per}%</span>
        </div>
    </div>
  )
}

export default Savings_goals