import { useState } from "react";
import React from "react";
import './log_carousel.scss'

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const leftArrowStyles ={
  position: 'absolute',
  top: "6%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "20px",
  color: "#e20f80",
  zIndex: 1,
  cursor: "pointer",
}

const rightArrowStyles = {
  position: "absolute",
  top: "90%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "20px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  backgroundColor: '#e20f80',
  padding: '15px 20px',
  borderRadius: '10px',
  textDecoration: 'none'
};

const skipArrowStyles = {
  position: "absolute",
  top: "90%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "20px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  backgroundColor: '#88265a',
  padding: '15px 20px',
  borderRadius: '10px',
  textDecoration: 'none'
};

const sliderStyles = {
  position: "relative",
  height: "100vh",
  margin: '0',
  padding: '0'
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  // position: 'absolute',
  // bottom: '50%',
  // transform: "translate(0, 50%)",
  // left: '40%'
};

const dotStyle = {
  margin: "0 10px",
  cursor: "pointer",
};


const Log_carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? isLastSlide : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    position: 'absolute',
    height: '70%',
  };

  return (
    <div style={sliderStyles}>
      <div>
        <a href='welcome' style={skipArrowStyles}>
          {/* ❰ */}
          Skip
        </a>
        <div onClick={goToPrevious} style={leftArrowStyles}>
            {/* ❱ */}
            ❰
        </div>
        {currentIndex === 2 ? 
          <a href="welcome" style={rightArrowStyles}>Next</a>
        :
          <div onClick={goToNext} style={rightArrowStyles}>
              {/* ❱ */}
              Next
          </div>
        }
      </div>
      <div style={slideStylesWidthBackground}>
        <p className="title">{slides[currentIndex].title}</p>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={currentIndex === slideIndex? "dot active" : "dot"}
            >
              {/* ●  */}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Log_carousel;