import React from 'react'
import './savings.scss'
import Savings_goals from '../../components/savings_goals/Savings_goals'
import CreateIcon from '@mui/icons-material/Create';
// import BorderColorIcon from '@mui/icons-material/BorderColor';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import Footer from '../../components/footer/Footer';

// Let me shut down the 
// i want to create a new file where?

const Savings = () => {
  return (
    <div className='savings' >
      <div className='savings_pad'>
        <a href='/users' className='arrow_back'>❰</a>
        <div className="savtitle">
            
            <h2 className="savingshead">Savings</h2>
            <p className="discipline">Save with discipline towards a specific goal</p>
        </div>
        <div style={{marginBottom:'10%', marginTop:'8%'}} >
          <Savings_goals background='#0fa957b4' title='PTA Fees' balance='100,000' days='20' per='50' />
          <Savings_goals background='#85a1deb4' title='PTA Fees' balance='100,000' days='20' per='10' />
          <Savings_goals background='#cd6254b4' title='PTA Fees' balance='100,000' days='20' per='89' />
        </div>
        <CreateIcon className='create' />
        <ModeCommentIcon className='chat' />
        
      </div>
      <div className="footer_save"><Footer home='/users' pay='' save='' set='settings' wid='' /></div>
    </div>
  )
}

export default Savings
