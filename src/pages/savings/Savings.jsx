import React from 'react'
import './savings.scss'
import Savings_goals from '../../components/savings_goals/Savings_goals'
import introone from '../../images/Intro-1.png'
import CreateIcon from '@mui/icons-material/Create';
import BorderColorIcon from '@mui/icons-material/BorderColor';

// Let me shut down the 
// i want to create a new file where?

const Savings = () => {
  return (
    <div className='savings'>
        <div className="savtitle">
            <a href='/users' className='arrow_back'>❰</a>
            <h2 className="savingshead">Savings</h2>
            <p className="discipline">Save with discipline towards a specific goal</p>
        </div>
        <Savings_goals background='#0fa957b4' image= <img src={introone} /> title='PTA Fees' balance='100,000' days='20'/>
        <Savings_goals background='#85a1deb4' image= <img src={introone} /> title='PTA Fees' balance='100,000' days='20'/>
        <Savings_goals background='#cd6254b4' image= <img src={introone} /> title='PTA Fees' balance='100,000' days='20'/>
        <CreateIcon/>
        <BorderColorIcon/>
    </div>
  )
}

export default Savings
