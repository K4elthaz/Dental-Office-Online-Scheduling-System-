import React, { useEffect, useState } from "react";
import { Container, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import img1 from '../assets/DALLE1.png';
import img2 from '../assets/DALLE2.png';
import img3 from '../assets/DALLE3.png';


export default function Home() {
  // Define your state and variables here
  const [headingIndex, setHeadingIndex] = useState(0);

  // Define your Carousel content (image URLs) here
  const carouselItems = [
    { src: img1, alt: "First slide" },
    { src: img2, alt: "Second slide" },
    { src: img3, alt: "Third slide" },
  ];

  // Define your styles here (if needed)
  const headingStyle = {
    // Your heading style
  };

  const centeredHeadingStyle = {
    // Your centered heading style
  };

  // Function to handle slide change
  const handleSlideChange = (selectedIndex) => {
    setHeadingIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel
        fade
        controls={false}
        indicators={false}
        interval={4000}
        pause={false}
        activeIndex={headingIndex}
        onSelect={handleSlideChange}
      >
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel-img custom-carousel-img"
            src={item.src}
            alt={item.alt}
          />
        </Carousel.Item>
        ))}
      </Carousel>
      {/* <div className="backdrop" style={headingStyle}>
        <h1 className="centered-heading" style={centeredHeadingStyle}>
          {carouselItems[headingIndex].alt}
        </h1>
        <h4 className="centered-description">
          "Protecting Your Health, Securing Your Peace of Mind - Healthcare
          Security Solutions."
        </h4>
      </div> */}
      </div>
  );
}
