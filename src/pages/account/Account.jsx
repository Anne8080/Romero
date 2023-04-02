import React from 'react'
import logoimg from '../../images/romero.jpg'
import './account.scss'
import { Avatar, backdropClasses } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import SavingsIcon from '@mui/icons-material/Savings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import Finance_cards from '../../components/finance_cards/Finance_cards';
import Trans_cards from '../../components/trans_cards/Trans_cards';
import WifiIcon from '@mui/icons-material/Wifi';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import CircleIcon from '@mui/icons-material/Circle';
import Footer from '../../components/footer/Footer';



const Account = () => {
  return (
    <div className='account'>
      <div className='top'>
        <div className="user_info">
          <Avatar
            alt="Profile picture"
            src={logoimg}
            sx={{ width: 40, height: 40 }}
          />
          <div className='greet'>
            <p className='greeting'>Good Afternoon,</p>
            <h3 className='name'>Cristian Romero</h3>
            <a href=""><NotificationsNoneIcon id='bell' /></a>
          </div>
          
        </div>
        <div className="balance">
          <p className='greeting'>Your Balance</p>
          <h3 className='amount_balance'>N 70,000.00</h3>
          <a href=""><AddIcon id='add'/></a>
        </div>
        <div className='card'>
          <p className='credit_card'>Credit Card</p>
          <h3 className='amount_card'>N 70,000.00</h3>
          <p className="card_detail">**6917</p>
          <WifiIcon className='wifi'/>
          <CircleIcon className='circle'/>
          <CircleIcon className='circletwo'/>
        </div>
        <div className="finance">
          <h3 className="finance_name">Finance</h3>
          <div className="finance_cards">
            <Finance_cards icon=<RocketLaunchIcon style={{backgroundColor: '#A1376F', borderRadius: '50%', color: '#E2CADB', padding: '2px' }}/> title='My Investments' link='' /> 
            <Finance_cards icon=<ShowChartIcon style={{backgroundColor: '#9D3743', borderRadius: '50%', color: '#E2CADB', padding: '2px' }}/> title='Finance Analysis' link='' /> 
            <Finance_cards icon=<SavingsIcon style={{backgroundColor: '#0FA958', borderRadius: '50%', color: '#E2CADB', padding: '2px' }}/> title='Savings Plans' link='users/savings' /> 
          </div>
        </div>
        
      </div>
      <div className="transactions">
        <div className="title_trans">
          <h3 className="finance_name">Recent Transcations</h3>
          <a href='' className="view">View Transaction History</a>
        </div>
        <div className="trans_cards">
          <Trans_cards icon=<NorthEastIcon style={{backgroundColor: '#F4D5DA', color: '#C62B47', borderRadius: '5px', fontSize: '35px', padding: '5px'}}/> date='Mar 29, 2023' time='11:49AM' amount='N1000.00' dir='Airtime//2349138468948//MTN' Neg='true' />
          <Trans_cards icon=<SouthEastIcon style={{backgroundColor: '#CFEEDE', color: '#0FA958', borderRadius: '5px', fontSize: '35px', padding: '5px'}}/> date='Mar 23, 2023' time='01:23PM' amount='N7000.00' dir='NIP/GTB/ANASTASIA OTU/via GTWORLD ...' Neg='false' />
        </div>
      </div>
      <br />
      <div className="footer">
        <Footer home='' pay='' save='users/savings' set='users/settings' wid='' />
      </div>
    </div>
  )
}

export default Account