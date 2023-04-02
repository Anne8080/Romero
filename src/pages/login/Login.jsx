import React, {useState, useEffect} from 'react';
// import axios from 'axios'
import EmailIcon from '@mui/icons-material/Email';
import Input from '../../components/input/Input'
import LockIcon from '@mui/icons-material/Lock';
import Log_options from '../../components/log_options/Log_options';
import logoimg from '../../images/Romero-written-logo.png'
import './login.scss'


// export default function login() { 
//   const [rows, setRows] = useState([]);
//   const [name, setName] = useState('');
 

//   useEffect(() => {
//       axios.get('/login/get')
//           .then(res => {
//               setRows(res.data);
//           }).catch(err => {
//           console.log(err);
//     });
      
//   });
// }



const Login = () => {
  
  return (
    <div >
      <div className='login'>
        <img src={logoimg} className="logoimg"></img>
        <Input title='Email or Phone Number' icon = <EmailIcon/> type='text' value='Enter Your Mail or Phone Number' />
        <Input title='Password' icon = <LockIcon/> type='password' value='Enter Your Password' />
        <a className="forgot">Forgot Password?</a>
        <Log_options submit='Login' have_account="Don't Have An Account?" sign_log='Sign Up' link='register' loglink='/users' />
      </div>
    </div>
  );
}

export default Login