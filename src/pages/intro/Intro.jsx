import React from 'react'
import Log_carousel from '../../components/log_carousel/Log_carousel'
import './intro.scss'

const Intro = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "Providing a hassle-free savings account opening process for your child" },
    { url: "http://localhost:3000/image-2.jpg", title: "Providing financial literacy and investment opportunites tailored to your child's needs" },
    { url: "http://localhost:3000/image-3.jpg", title: "Easily access money from anywhere in the world with Romero's ATM cards" },
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