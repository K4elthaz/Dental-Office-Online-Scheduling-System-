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
const test = () => {
  return (
    <div>
      {/* Header Section */}
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            dental<span>Clinic.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">home</Nav.Link>
              <Nav.Link href="#about">about</Nav.Link>
              <Nav.Link href="#services">services</Nav.Link>
              <Nav.Link href="#reviews">reviews</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button href="#contact" className="link-btn">
            make appointment
          </Button>
        </Container>
      </Navbar>

      {/* Home Section */}
      <section className="home" id="home">
        <Container>
          <Row className="min-vh-100 align-items-center">
            <Col className="text-center text-md-left">
              <h3>Allow us to make your smile brighter.</h3>
              <p>
                DentalClinic Can Help You Get the Smile You've Always Wanted. We
                offer cosmetic dentistry, root canal therapy, cavity
                inspections, and more.
              </p>
              <Button href="#contact" className="link-btn">
                make appointment
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="image">
              <img
                src="images/about-img.jpg"
                className="w-100 mb-5 mb-md-0"
                alt=""
              />
            </Col>
            <Col md={6} className="content">
              <span>about us</span>
              <h3>Genuine Family Healthcare</h3>
              <p>
                DentalClinic helps you achieve the quintessentially oriented
                smile you have always craved. Our product gets the job done
                without making you go through any hassle or discomfort.
              </p>
              <Button href="#contact" className="link-btn">
                make appointment
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <Container>
          <h1 className="heading">our services</h1>
          <Row className="box-container">
            <Col md={4} className="box">
              <img src="images/icon-1.svg" alt="" />
              <h3>Alignment specialist</h3>
            </Col>
            <Col md={4} className="box">
              <img src="images/icon-2.svg" alt="" />
              <h3>Cosmetic dentistry</h3>
            </Col>
            <Col md={4} className="box">
              <img src="images/icon-3.svg" alt="" />
              <h3>Oral hygiene experts</h3>
            </Col>
            {/* Add more service boxes here */}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="process">
        <Container>
          <h1 className="heading">work process</h1>
          <Row className="box-container">
            <Col md={4} className="box">
              <img src="images/process-1.png" alt="" />
              <h3>Cosmetic Dentistry</h3>
              <p>
                Cosmetic dentistry includes teeth whitening, dental implants,
                dental crowns, and teeth shaping.
              </p>
            </Col>
            <Col md={4} className="box">
              <img src="images/process-2.png" alt="" />
              <h3>Pediatric Dentistry</h3>
              <p>
                Pediatric dentistry includes stainless steel crowns,
                tooth-colored fillings, dental cleanings, and cavities.
              </p>
            </Col>
            <Col md={4} className="box">
              <img src="images/process-3.png" alt="" />
              <h3>Dental Implants</h3>
              <p>
                Dental implants are artificial tooth roots that are surgically
                placed into the jawbone.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Reviews Section */}
      <section className="reviews" id="reviews">
        <Container>
          <h1 className="heading">Our Clients</h1>
          <Row className="box-container">
            <Col md={4} className="box">
              <img src="images/pic-1.png" alt="" />
              <p>
                I couldn’t believe that it was so affordable compared to the
                alternatives available in the market.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Alan Harris</h3>
              <span>Manager</span>
            </Col>
            <Col md={4} className="box">
              <img src="images/pic-2.png" alt="" />
              <p>
                Earlier I used to hide my smile and now I can’t stop smiling.
                Flexalign aligners changed my life &amp; smile completely.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Sophie Johnson</h3>
              <span>Assistant Manager</span>
            </Col>
            <Col md={4} className="box">
              <img src="images/pic-3.png" alt="" />
              <p>
                Great experience with DentalClinic aligners. I would recommend
                this place for they have the best quality service.
              </p>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>James Williams</h3>
              <span>CEO</span>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <Container>
          <h1 className="heading">Make Appointment</h1>
          <form action="" method="post">
            <span>Enter your name :</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="box"
              required
            />
            <span>Enter your email :</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="box"
              required
            />
            <span>Enter your number :</span>
            <input
              type="number"
              name="number"
              placeholder="Enter your number"
              className="box"
              required
            />
            <span>Enter appointment date :</span>
            <input type="datetime-local" name="date" className="box" required />
            <Button type="submit" className="link-btn">
              make appointment
            </Button>
          </form>
        </Container>
      </section>

      {/* Footer Section */}
      <section className="footer">
        <Container>
          <Row>
            <Col md={3} className="box">
              <i className="fas fa-phone"></i>
              <h3>Phone Number</h3>
              <p>+123-456-7890</p>
            </Col>
            <Col md={3} className="box">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Our Address</h3>
              <p>Mumbai, India - 400054</p>
            </Col>
            <Col md={3} className="box">
              <i className="fas fa-clock"></i>
              <h3>Opening Hours</h3>
              <p>10:00am to 07:00pm</p>
            </Col>
            <Col md={3} className="box">
              <i className="fas fa-envelope"></i>
              <h3>Email Address</h3>
              <p>valentine@gmail.com</p>
            </Col>
          </Row>
        </Container>
        <div className="credit">
          &copy;2022 {new Date().getFullYear()} <span>DentalClinic</span> All
          Reserved Rights
        </div>
      </section>
    </div>
  );
};

export default test;
