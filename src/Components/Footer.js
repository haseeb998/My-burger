import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: "black", color: "white" }}>
      <Container>
        {/* Four Equal Columns */}
        <Row className="d-flex justify-content-center py-3">
          <Col md={3} className="text-center">
            <h5>About Us</h5>
            <p>
              Burger is a gourmet burger shop located in the heart of Anytown.
              We specialize in crafting the perfect burger using only the
              freshest ingredients.
            </p>
          </Col>
          <Col md={3} className="text-center">
            <h5>Contact</h5>
            <p>123 Main St, Anytown, USA</p>
            <p>Email: info@burger.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
          <Col md={3} className="text-center">
            <h5>Hours</h5>
            <p>Monday - Friday: 11:00 AM - 9:00 PM</p>
            <p>Saturday - Sunday: 12:00 PM - 8:00 PM</p>
          </Col>
          <Col md={3} className="text-center">
            <h5>Follow Us</h5>
            <p>Stay connected with us on social media:</p>
            <div className="bg-white">
              <a href="#" classname="text-light mx-2">
                <i className="bi bi-facebook " />
              </a>
              <a href="#" classname="text-light mx-2">
                <i className="bi bi-facebook " />
              </a>
              <a href="#" classname="text-light mx-2">
                <i classname="fab fa-twitter" />
              </a>
              <a href="#" classname="text-light mx-2">
                <i classname="fab fa-instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
