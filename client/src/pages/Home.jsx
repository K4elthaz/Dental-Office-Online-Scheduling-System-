import React, { useEffect, useState } from "react";
import { Container, Carousel, Button } from "react-bootstrap";
import img1 from "../assets/DALLE1.png";
import img2 from "../assets/DALLE2.png";
import img3 from "../assets/DALLE3.png";
import "../index.css";

export default function Home() {
  const [headingIndex, setHeadingIndex] = useState(0);

  const carouselItems = [
    {
      src: img1,
      alt: "First slide",
      label: "Allow us to make your smile brighter.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: img2,
      alt: "Second slide",
      label: "Allow us to make your smile brighter.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      src: img3,
      alt: "Third slide",
      label: "Allow us to make your smile brighter.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const handleSlideChange = (selectedIndex) => {
    setHeadingIndex(selectedIndex);
  };

  return (
    <Container fluid className="p-0">
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
            <div className="custom-carousel-caption">
              <img
                className="d-block w-100 carousel-img custom-carousel-img"
                src={item.src}
                alt={item.alt}
              />
              <div className="custom-caption-content">
                <p className="title-header">{item.label}</p>
                <p className="title-desc" style={{ textAlign: "justify" }}>
                  {item.text}
                </p>
                <Button
                  variant="success"
                  classname="mt-3 text-white responsive-btn"
                  style={{
                    padding: "8px 16px",
                    fontSize: "14px",
                  }}
                >
                  Make Appointment
                </Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
