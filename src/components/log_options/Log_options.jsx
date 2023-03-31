import React from 'react'
import './log_options.scss'

const Log_options = ({submit, have_account, sign_log, link}) => {
  return (
    <div>
      <input type="button" value={submit} id='submit' />
      <div id='lineor'>
        <div className='line'></div>
        <p id='or'>OR</p>
        <div className='line'></div>
      </div>
      {/* <div className="social"></div> */}
      <p className="have_account">{have_account} <a href={link} id='sign_log' >{sign_log}</a></p>
    </div>
  )
}

export default Log_options