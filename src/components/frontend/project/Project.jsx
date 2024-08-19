import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./project.css";

const Project = () => {
  return (
    <>
      <Container className="text-center">
        <h1 className="serviceMainTitle">RECENT PROJECTS</h1>
        <div className="bottom"></div>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
              <Card.Img style={{height: '200px'}} variant="top" src="https://www.robustel.com/wp-content/uploads/2019/01/shutterstock_113200270_1500px.jpg" />
              <Card.Body>
                <Card.Title className="serviceName">Building Management</Card.Title>
                <Card.Text className="serviceDescription">
                  It is a building management system. It was developed by laravel. It has total three panel renter, admin, flat owner. It has some functionalities like cash collection, service charge, inventory etc
                </Card.Text>
                <Button variant="primary">
                  <Link className="link-style text-white text-decoration-none"> View More </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
              <Card.Img style={{height:  '200px'}} variant="top" src="https://miro.medium.com/v2/resize:fit:1400/1*34GfkhLFydPjZWUde1EzRg.jpeg" />
              <Card.Body>
                <Card.Title className="serviceName">Ecommerce</Card.Title>
                <Card.Text className="serviceDescription">
                  This project is very interesting and It has been developed by Laravel. It has many features like payment gateway, cart, checkout, realtime notification, realtime chatting, vendor panel etc.
                </Card.Text>
                <Button variant="primary">
                  <Link className="link-style text-white text-decoration-none"> View More </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
              <Card.Img style={{height: '200px'}} variant="top" src="https://cdn.britannica.com/02/239402-050-ACC075DB/plates-of-vegan-foods-ready-serve-restaurant-London.jpg" />
              <Card.Body>
                <Card.Title className="serviceName">Restaurant</Card.Title>
                <Card.Text className="serviceDescription">
                  This is a restaurant management system. It has many features like wishlist, popular product, review and ratings, payment gateway. It was really an amazing project
                </Card.Text>
                <Button variant="primary">
                  <Link className="link-style text-white text-decoration-none"> View More </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Project;
