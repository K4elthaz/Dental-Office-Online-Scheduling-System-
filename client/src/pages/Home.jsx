import React, { useEffect, useState, useContext } from "react";
import { Container, Carousel, Button, Row, Col } from "react-bootstrap";
import img1 from "../assets/DALLE1.png";
import img2 from "../assets/DALLE2.png";
import img3 from "../assets/DALLE3.png";
import "../index.css";
import { UserContext } from "../../context/userContext";
import { useNavigate, Link } from "react-router-dom";


export default function Home() {
  const { user } = useContext(UserContext);
  const [headingIndex, setHeadingIndex] = useState(0);


  const carouselItems = [
    {
      src: img1,
      alt: "First slide",
      label: "Allow us to make your smile brighter.",
      text: (
        <>
          {user ? (
            <h1>
              Welcome <br />
              {user.name}
            </h1>
          ) : (
            <h1>You are not logged in</h1>
          )}
        </>
      ),
    },
    {
      src: img2,
      alt: "Second slide",
      label: "Allow us to make your smile brighter.",
      text: (
        <>
          {user ? (
            <h1>
              Welcome <br />
              {user.name}
            </h1>
          ) : (
            <h1>You are not logged in</h1>
          )}
        </>
      ),
    },
    {
      src: img3,
      alt: "Third slide",
      label: "Allow us to make your smile brighter.",
      text: (
        <>
          {user ? (
            <h1>
              Welcome <br />
              {user.name}
            </h1>
          ) : (
            <h1>You are not logged in</h1>
          )}
        </>
      ),
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
                <Link to="/appointments">
                <Button
                  variant="success"
                  className="mt-3 text-white responsive-btn"
                  style={{
                    padding: "8px 16px",
                    fontSize: "14px",
                  }}
                >
                  Make Appointment
                  
                </Button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}