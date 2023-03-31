import React from 'react'
import Logo from '../../components/logo/Logo'
import EmailIcon from '@mui/icons-material/Email';
import Input from '../../components/input/Input'
import LockIcon from '@mui/icons-material/Lock';
import Log_options from '../../components/log_options/Log_options';
import './login.scss'


const Login = () => {
  
  return (
    <div >
      <div className='login'>
        <Logo/>
        <Input title='Email or Phone Number' icon = <EmailIcon/> type='text' value='Enter Your Mail or Phone Number' />
        <Input title='Password' icon = <LockIcon/> type='password' value='Enter Your Password' />
        <p className="forgot">Forgot Password?</p>
        <Log_options submit='Login' have_account="Don't Have An Account?" sign_log='Sign Up' link='register'/>
      </div>
    </div>
  );
}

export default Login