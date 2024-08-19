import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { BigPlayButton, Player } from "video-react";
import "video-react/dist/video-react.css";

const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className="text-center">
        <h1 className="serviceMainTitle">OUR VIDEOS</h1>
        <div className="bottom"></div>
        <Row>
          <Col lg={6} md={6} sm={12} className="videText">
            <p className="serviceDescription text-justify">
              Hello there, I am Mohammad Naim, a senior fullstack software
              engineer. With 5+ years of experience I have completed many
              projects and also I have learned many techonologies in my previous
              journey.
            </p>

            <p>Thoose projects were very challenging for me. But I was very dedicted about my work. Recently I try to solve many problems.</p>
          </Col>

          <Col
            lg={6}
            md={6}
            sm={12}
            style={{
              boxShadow: "0 13px 10px -5px",
              padding: "8rem 3rem 8rem 3rem",
              backgroundColor: "#051b35",
              margin: "auto",
              borderRadius: "5px",
            }}
          >
            <FontAwesomeIcon
              onClick={handleShow}
              className="iconProject"
              icon={faVideoSlash}
            />
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
            <BigPlayButton position="center" />
          </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Video;
