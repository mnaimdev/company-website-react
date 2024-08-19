import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './pagetop.css';

const PageTop = ({pagetitle}) => {
  return (
    <>
      <Container fluid={true} className="topFixedPage p-0">
        <div className="topPageOverlay">
          <Container className="topContentPage">
            <Row>
              <Col className="text-center">
                <h4 className="topPageTitle">{pagetitle}</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default PageTop;
