import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import Input from '../../components/input/Input'
import LockIcon from '@mui/icons-material/Lock';
import Log_options from '../../components/log_options/Log_options';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import logoimg from '../../images/Romero-written-logo.png'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <img src={logoimg} className="logoimg"></img>
      <Input title='Enter Your Name' icon = <PersonIcon/> type='text' value='Enter Your Full Name' />
      <Input title='Email' icon = <EmailIcon/> type='text' value='Enter Your Mail' />
      <Input title='Phone Number' icon = <LocalPhoneIcon/> type='tel' value='Enter Your Phone Number' />
      <Input title='Address' icon = <PlaceIcon/> type='text' value='Enter Your Address' />
      <Input title='Password' icon = <LockIcon/> type='password' value='Enter Your Password' />
      <Input title='Confirm Password' icon = <LockIcon/> type='password' value='Confirm Your Password' />
      <Log_options submit='Sign Up' have_account="Already Have An Account?" sign_log='Log In' link='login'/>
    </div>
  )
}

export default Register