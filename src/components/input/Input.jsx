import React from 'react'

import './input.scss'

const Input = ({title, icon, type, value}) => {
  
  return (
    <div >
        <p className='logtitle'>{title}</p>
      <div className='input'>
        <span className='icon'>{icon}</span>
        <input type={type} placeholder={value} />
      </div>
    </div>
  );
}

export default Input