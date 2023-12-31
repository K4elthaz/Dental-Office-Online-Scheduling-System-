import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Card,
} from "react-bootstrap";
import "./test.css";
import img1 from "../assets/img8.png";
import img2 from "../assets/3.png";
import img3 from "../assets/4.png";
import img4 from "../assets/5.png";
import img5 from "../assets/6.png";
import img6 from "../assets/logo2.png";
import svg1 from "../assets/icon-1.svg";
import svg2 from "../assets/icon-2.svg";
import svg3 from "../assets/icon-3.svg";

const test = () => {
  return (
    <div>
      <section
        className="home min-vh-100"
        id="home"
        style={{ fontSize: "5px" }}
      >
        <div className="container">
          <Row>
            <Col xs lg="1" className="d-flex align-items-center">
              <img src={img6} className="slogan" alt="" />
            </Col>
            <Col md="auto" className="d-flex align-items-center">
              <div className="mt-4 text-green">
                <h2>Genuine Family Dental Clinic</h2>
                <h3>You're Smile is My Happiness</h3>
              </div>
            </Col>
            <Col></Col>
          </Row>

          <div className="row mt-5 align-items-center">
            <div className="content text-center text-md-left">
              <h3 className="text-green">
                Where Your Smile Finds Its Sparkle!
              </h3>
              <p className="text-green">
                DentalClinic Can Help You Get the Smile You've Always Wanted. We
                offer cosmetic dentistry, root canal therapy, cavity
                inspections, and more.
              </p>
              <a
                href="#contact"
                className="btn btn-success"
                style={{ fontSize: "20px" }}
              >
                make appointment
              </a>
              <div className="image-container d-flex justify-content-center align-items-center">
                <div className="image-text-container">
                  <div className="image-wrapper box">
                    <img src={img2} className="image20" alt="" />
                  </div>
                  <p className="text-green">
                    Specialized <br /> Services
                  </p>
                </div>
                <div className="image-text-container">
                  <div className="image-wrapper box">
                    <img src={img3} className="image20" alt="" />
                  </div>
                  <p className="text-green">
                    Emergency <br /> Care
                  </p>
                </div>
                <div className="image-text-container">
                  <div className="image-wrapper box">
                    <img src={img4} className="image20" alt="" />
                  </div>
                  <p className="text-green">
                    Teeth <br /> Services
                  </p>
                </div>
                <div className="image-text-container">
                  <div className="image-wrapper box">
                    <img src={img5} className="image20" alt="" />
                  </div>
                  <p className="text-green">
                    Orthodontics <br /> Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="image">
              <img src={img1} className="w-100 mb-5 mb-md-0" alt="" />
            </Col>
            <Col md={6} className="content" style={{ padding: "50px" }}>
              <span className="text-green">about us</span>
              <h3 className="text-green">Genuine Family Dental Clinic</h3>
              <p className="text-green">
                DentalClinic helps you achieve the quintessentially oriented
                smile you have always craved. Our product gets the job done
                without making you go through any hassle or discomfort.
              </p>
              <Button
                href="#contact"
                className="btn btn-success"
                style={{ fontSize: "20px" }}
              >
                Make Appointment
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h1 className="heading">our services</h1>

        <div className="box-container container">
          <div className="box">
            <img src={svg1} alt="" />
            <h3 className="text-green">Alignment specialist</h3>
          </div>

          <div className="box">
            <img src={svg2} alt="" />
            <h3 className="text-green">Cosmetic dentistry</h3>
          </div>

          <div className="box">
            <img src={svg3} alt="" />
            <h3 className="text-green">Oral hygiene experts</h3>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <h1 className="heading">work process</h1>

        <div className="box-container container">
          <div className="box">
            <img src="images/process-1.png" alt="" />
            <h3>Cosmetic Dentistry</h3>
            <p>
              Cosmetic dentistry includes teeth whitening, dental implants,
              dental crowns, and teeth shaping.
            </p>
          </div>

          <div className="box">
            <img src="images/process-2.png" alt="" />
            <h3>Pediatric Dentistry</h3>
            <p>
              Padiatric dentistry include stainless steel crowns, tooth-colored
              fillings, dental cleanings, and cavities.
            </p>
          </div>

          <div className="box">
            <img src="images/process-3.png" alt="" />
            <h3>Dental Implants</h3>
            <p>
              Dental implants are artificial tooth roots that are surgically
              placed into the jawbone.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews" id="reviews">
        <h1 className="heading"> Our Clients </h1>

        <div className="box-container container">
          <div className="box">
            <img src="images/pic-1.png" alt="" />
            <p>
              {" "}
              I couldn’t believe that it was so afordable compared to the
              alternatives available in the market.
            </p>
          
            <h3>Alec John Gonzales</h3>
            <span>Manager</span>
          </div>

          <div className="box">
            <img src="images/pic-2.png" alt="" />
            <p>
              Earlier I used to hide my smile and now I can’t stop smiling.
              Flexalign aligners changed my life &amp; smile completely.
            </p>
          
            <h3>Arnold Celis</h3>
            <span>Assistant Manager</span>
          </div>

          <div className="box">
            <img src="images/pic-3.png" alt="" />
            <p>
              Great experience with DentalClinic aligners. I would recommend
              this place for they have the best quality service
            </p>
            <h3>James Lumawag</h3>
            <span>CEO of Kangkong Chips</span>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <section className="footer">
        <Container>
          <Row className="credit">
            <Col md={3} className="">
              <i className="fas fa-phone"></i>
              <h3>Phone Number</h3>
              <p>+123-456-7890</p>
            </Col>
            <Col md={3} className="">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Our Address</h3>
              <p>Philippines - 123456</p>
            </Col>
            <Col md={3} className="">
              <i className="fas fa-clock"></i>
              <h3>Opening Hours</h3>
              <p>10:00am to 07:00pm</p>
            </Col>
            <Col md={3} className="">
              <i className="fas fa-envelope"></i>
              <h3>Email Address</h3>
              <p>businessjeremy25@gmail.com</p>
            </Col>
          </Row>
        </Container>
        <div className="credit">
          &copy;2023 {new Date().getFullYear()} <span>DentalClinic</span> All
          Reserved Rights
        </div>
      </section>
    </div>
  );
};

export default test;
