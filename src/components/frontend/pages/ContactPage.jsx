import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import PageTop from "./PageTop";

const ContactPage = () => {
  return (
    <>
    <PageTop pagetitle="Contact Us" />
      <Container className="mt-5">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h1 className="serviceName">Quick Connect</h1>

            <Form>
              <Form.Group>
                <Form.Label>Your Name </Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="Enter Your Name"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Your Email </Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="Enter Your email"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Message </Form.Label>
                <Form.Control id="message" as="textarea" rows={3} />
              </Form.Group>

              <Button onClick="" variant="primary" className="my-3">
                Submit
              </Button>
            </Form>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <h1 className="serviceName">Discuss Now</h1>

            <p className="serviceDescription">
              Dhaka, Bangladesh
              <br></br>
              <FontAwesomeIcon icon={faEnvelope} /> Email : mnaimdev@gmail.com
              <br></br>
              <FontAwesomeIcon icon={faPhone} /> Phone : 01794556889
              <br></br>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
