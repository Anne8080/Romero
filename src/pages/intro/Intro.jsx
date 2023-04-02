import React from 'react'
import Log_carousel from '../../components/log_carousel/Log_carousel'
import introone from '../../images/Intro-1.png'
import introtwo from '../../images/Intro-2.png'
import introthree from '../../images/Intro-3.png'

import './intro.scss'


const Intro = () => {
  const slides = [
    { url: <img src={introone} className='imgintro' />, title: "Providing a hassle-free savings account opening process for your child" },
    { url: <img src={introtwo} className='imgintro' />, title: "Providing financial literacy and investment opportunites tailored to your child's needs" },
    { url: <img src={introthree} className='imgintro' />, title: "Easily access money from anywhere in the world with Romero's ATM cards" },
  ];
  // const containerStyles = {
  //   width: "50%",
  //   height: "100vh",
  //   margin: "0 auto"
  // };
  return (
    <div >
      <div className='carousel'>
        <Log_carousel slides={slides} />
      </div>
    </div>
  );
}

export default Intro