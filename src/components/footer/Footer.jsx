import React from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets';
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import SavingsIcon from '@mui/icons-material/Savings';
import './footer.scss'

const footer_style = {
    color: '#A83567',
    margin: '10px 42px'
}

const Footer = ({home, pay, save, set, wid}) => {
    
  return (
    <div className="foot">
        <a href={home}><HomeIcon style={footer_style}/></a>
        <a href={pay}><PaymentIcon style={footer_style}/></a>
        <a href={save}><SavingsIcon style={footer_style}/></a>
        <a href={set}><SettingsIcon style={footer_style}/></a>
        <a href={wid}><WidgetsIcon style={footer_style}/></a>
    </div>
  )
}

export default Footer