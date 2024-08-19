import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './footer.css';


const Footer = () => {
  return (
    <>
      <Container fluid={true} className="footerSection">
        <Row>
          <Col lg="3" md={6} sm={12} className="p-5 text-center">
            <h2 className="footerName text-center">Follow Us </h2>

            <div className="social-container">
              <a className="facebook social" href="">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </Col>

          <Col lg="3" md={6} sm={12} className="p-5 text-justify">
            <h2 className="footerName">Address </h2>
            <p className="footerDescription">
              Dhaka, Bangladesh <br></br>
              <FontAwesomeIcon icon={faEnvelope} /> Email : mnaimdev@gmail.com
              <br></br>
              <FontAwesomeIcon icon={faPhone} /> Phone : 01794556889
              <br></br>
            </p>
          </Col>

          <Col lg="3" md={6} sm={12} className="p-5 text-justify">
            <h2 className="footerName">Information </h2>
            <Link className="footerLink" to="/about">
              About Me{" "}
            </Link>{" "}
            <br></br>
            <Link className="footerLink" to="/about">
              Company Profile{" "}
            </Link>{" "}
            <br></br>
            <Link className="footerLink" to="/contact">
              Contact Us{" "}
            </Link>{" "}
            <br></br>
          </Col>

          <Col lg="3" md={6} sm={12} className="p-5 text-justify">
            <h2 className="footerName">Policy </h2>
            <Link className="footerLink" to="/refund">
              Refund Policy{" "}
            </Link>{" "}
            <br></br>
            <Link className="footerLink" to="/trems">
              Trems And Condition{" "}
            </Link>{" "}
            <br></br>
            <Link className="footerLink" to="/privacy">
              Privacy And Policy{" "}
            </Link>{" "}
            <br></br>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="text-center copyrightSection">
        <a className="copyrightlink" href="#">
        ©copyright 2024. All rights reserved.
        </a>
      </Container>
    </>
  );
};

export default Footer;
