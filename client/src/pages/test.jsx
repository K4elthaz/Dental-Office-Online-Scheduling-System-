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
import svg4 from "../assets/icon-4.svg";

const test = () => {
  
  return (
    <div className="special_page"  style={{ fontSize: "62.5%" }}>
      <section className="home min-vh-100" id="home" style={{ fontSize: "5px" }}>
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
              <a href="#contact" className="link-btn">
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
              <Button href="#contact" className="link-btn">
                make appointment
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

          <div className="box">
            <img src={svg4} alt="" />
            <h3 className="text-green">Root canal specialist</h3>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section class="process">
        <h1 class="heading">work process</h1>

        <div class="box-container container">
          <div class="box">
            <img src="images/process-1.png" alt="" />
            <h3>Cosmetic Dentistry</h3>
            <p>
              Cosmetic dentistry includes teeth whitening, dental implants,
              dental crowns, and teeth shaping.
            </p>
          </div>

          <div class="box">
            <img src="images/process-2.png" alt="" />
            <h3>Pediatric Dentistry</h3>
            <p>
              Padiatric dentistry include stainless steel crowns, tooth-colored
              fillings, dental cleanings, and cavities.
            </p>
          </div>

          <div class="box">
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
      <section class="reviews" id="reviews">

<h1 class="heading"> Our Clients </h1>

<div class="box-container container">

   <div class="box">
      <img src="images/pic-1.png" alt=""/>
      <p> I couldn’t believe that it was so afordable compared to the alternatives available in the market.</p>
      <div class="stars">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
      </div>
      <h3>Alan Harris</h3>
      <span>Manager</span>
   </div>

   <div class="box">
      <img src="images/pic-2.png" alt=""/>
      <p>Earlier I used to hide my smile and now I can’t stop smiling. Flexalign aligners changed my life &amp; smile completely.</p>
      <div class="stars">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
      </div>
      <h3>Sophie Johnson</h3>
      <span>Assistant Manager</span>
   </div>

   <div class="box">
      <img src="images/pic-3.png" alt=""/>
      <p>Great experience with DentalClinic aligners. I would recommend this place for they have the best quality service</p>
      <div class="stars">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
      </div>
      <h3>James Williams</h3>
      <span>CEO</span>
   </div>

</div>

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
            <Col md={3} className="">
              <i className="fas fa-phone"></i>
              <h3>Phone Number</h3>
              <p>+123-456-7890</p>
            </Col>
            <Col md={3} className="">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Our Address</h3>
              <p>Mumbai, India - 400054</p>
            </Col>
            <Col md={3} className="">
              <i className="fas fa-clock"></i>
              <h3>Opening Hours</h3>
              <p>10:00am to 07:00pm</p>
            </Col>
            <Col md={3} className="">
              <i className="fas fa-envelope"></i>
              <h3>Email Address</h3>
              <p>valentine@gmail.com</p>
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
