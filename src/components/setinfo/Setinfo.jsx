import React from 'react'
import './setinfo.scss'

const Setinfo = ({icon, title, detail}) => {
  return (
    <div>
        <div className='setinfo'>
            <div className="infoset">
                {icon}
                <div style={{marginLeft: '4%'}} >
                    <p className='settitle'>{title}</p>
                    <p className='setdetail'>{detail}</p>
                </div>
            </div>
            <a href=''>❱</a>
        </div>
        <div className="pline"></div>
    </div>
  )
}

export default Setinfo