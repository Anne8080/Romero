import React from 'react'
import Logo from '../../components/logo/Logo'
import FaceIcon from '@mui/icons-material/Face';
import './create.scss'

const Create = () => {
  return (
    <div className='create'>
        <Logo/>
        <div className="buttons">
            <div className="logindiv">
                <a href="welcome/login" className='button logbutton'>Login</a>
                <a href="" className="face button"><FaceIcon/></a>
            </div>
            <a href="welcome/register" className='button regbutton'>Register</a>
        </div>
    </div>
  );
}
// npm install @mui/material @emotion/react @emotion/styled
export default Create