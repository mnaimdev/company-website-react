import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./course.css";

const Course = () => {
  return (
    <>
      <Container className="text-center">
        <h1 className="serviceMainTitle">MY COURSES</h1>
        <div className="bottom"></div>
        <Row>
          <Col lg={6} md={12} sm={12} style={{margin: '20px 0px'}}>
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={6} md={6} sm={12} className="p-2">
                    <img
                      className="courseImg"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lndEBx1JRfpGNQ3TC_ZXb7mNb3pxLk4gjw&s"
                    />
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceName">PHP & Laravel</h5>
                    <p className="text-justify serviceDescription">
                      Here we build a complete multivendor ecommerce website
                    </p>{" "}
                    <Link className="courseViewMore float-left" to="">
                      View Details
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={12} sm={12} style={{margin: '20px 0px'}}>
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={6} md={6} sm={12} className="p-2">
                    <img
                      className="courseImg"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrltazgA2PN1iVP6HgNR8G8WEs9hbrhp5QHA&s"
                    />
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceName">JavaScript</h5>
                    <p className="text-justify serviceDescription">
                      You can learn problem solving and DSA with JavaScript
                    </p>{" "}
                    <Link className="courseViewMore float-left" to="">
                      View Details
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={12} sm={12} style={{margin: '20px 0px'}}>
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={6} md={6} sm={12} className="p-2">
                    <img
                      className="courseImg"
                      src="https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/web-design-header.jpg?itok=4d7TmUMl"
                    />
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceName">Web Design</h5>
                    <p className="text-justify serviceDescription">
                      Here you can learn amazing website design
                    </p>{" "}
                    <Link className="courseViewMore float-left" to="">
                      View Details
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6} md={12} sm={12} style={{margin: '20px 0px'}}>
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={6} md={6} sm={12} className="p-2">
                    <img
                      className="courseImg"
                      src="https://api.reliasoftware.com/uploads/the_complete_guide_to_mobile_app_development_2021_ded2abd1b1.png"
                    />
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceName">Mobile Apps</h5>
                    <p className="text-justify serviceDescription">
                      You can learn mobile apps development
                    </p>{" "}
                    <Link className="courseViewMore float-left" to="">
                      View Details
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Course;
