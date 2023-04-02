import React from 'react'
import './settings.scss'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Footer from '../../components/footer/Footer';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, backdropClasses } from '@mui/material'
import logoimg from '../../images/romero.jpg'
import Setinfo from '../../components/setinfo/Setinfo';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const style = {
  background: 'white',
  borderRadius: '50%',
  color: '#A83567',
  fontSize: '25px'
}

const Settings = () => {
  return (
    <div className='settings' >
      <div className="set">
        <div className="top">
          <a href='/users' className='arrow_back'>❰</a>
          <h3 className="your">Your Account</h3>
          <a href=""><NotificationsNoneIcon id='bell' /></a>
        </div>
        <div className="tab">
          <h3 className="tabpoint act">Profile</h3>
          <h3 className="tabpoint">Cards</h3>
          <h3 className="tabpoint">Support</h3>
          <h3 className="tabpoint">Info</h3>
        </div>
        <div className="prof">
          <Avatar
            alt="Profile picture"
            src={logoimg}
            sx={{ width: 70, height: 70 }}
            className='avatar'
          />
          <BorderColorIcon className='edit' />
          <h3 className='name'>Cristian Romero</h3>
        </div>
        <div>
          <Setinfo icon=<LocalPhoneIcon style={style} /> title='Phone' detail='+234 918 280 8961' />
          <Setinfo icon=<EmailIcon style={style} /> title='E-mail' detail='cristianoremoro@gmail.com' />
          <Setinfo icon=<PlaceIcon style={style} /> title='Address' detail='12 Ake Street, Jos. Nigeria' />
        </div>
        <br />
        <br />
        <a href='/welcome/login' className="out">
          <NorthEastIcon style={style} className="signouticon"/><span>Sign Out</span>
        </a>
      </div>
      <div className="footer_save"><Footer home='/users' pay='' save='savings' set='settings' wid='' /></div>
    </div>
  )
}

export default Settings