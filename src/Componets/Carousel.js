import React, { useState, useEffect } from 'react';
// import './Carousel.css'; // Include your styles

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Array of image URLs to use in the carousel
  const slides = [
    'Assets/img/main-baner.jpg',  // Replace with actual image paths
    'Assets/img/main-baner-1.jpg',
    'Assets/img/main-baner.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div id="carousel" className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={slide} alt={`Slide ${index + 1}`} className="carousel-img" />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        {/* <button className="prev" onClick={prevSlide}>
          {'<'}
        </button>
        <button className="next" onClick={nextSlide}>
          {'>'}
        </button> */}
      </div>
      <div className="carousel-indicators mx-auto d-none d-lg-block">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
