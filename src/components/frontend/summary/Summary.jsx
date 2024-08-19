import {
    faCheckSquare,
    faGraduationCap,
    faStar,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import "./summary.css";

const Summary = () => {
  return (
    <>
      <Container fluid={true} className="summaryBanner p-0">
        <div className="summaryBannerOverlay">
          <Container className="text-center">
            <Row>
              <Col lg={8} md={6} sm={12}>
                <Row className="countSection">
                  <Col>
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      style={{ color: "yellow" }}
                    />
                    <h1 className="countNumber">
                      <CountUp start={0} end={3000}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle">Students Worldwide</h4>
                    <hr className="bg-white w-25" />
                  </Col>

                  <Col>
                    <FontAwesomeIcon
                      icon={faVideo}
                      style={{ color: "yellow" }}
                    />

                    <h1 className="countNumber">
                      <CountUp start={0} end={50}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle">Course Published</h4>
                    <hr className="bg-white w-25" />
                  </Col>

                  <Col>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "yellow" }}
                    />

                    <h1 className="countNumber">
                      <CountUp start={0} end={2000}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start}>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle">Students Reviews</h4>
                    <hr className="bg-white w-25" />
                  </Col>
                </Row>
              </Col>

              <Col lg={4} md={6} sm={12}>
                <Card className="workCard">
                  <Card.Body>
                    <Card.Title className="cardTitle">
                      What I Have Achieved
                    </Card.Title>
                    <Card.Text>
                      <p className="cardSubTitle text-justify">
                        <FontAwesomeIcon
                          className="iconBullent"
                          icon={faCheckSquare}
                        />{" "}
                        Requirment Gathering{" "}
                      </p>
                      <p className="cardSubTitle text-justify">
                        <FontAwesomeIcon
                          className="iconBullent"
                          icon={faCheckSquare}
                        />{" "}
                        System Analysis{" "}
                      </p>
                      <p className="cardSubTitle text-justify">
                        <FontAwesomeIcon
                          className="iconBullent"
                          icon={faCheckSquare}
                        />{" "}
                        Coding Testing{" "}
                      </p>
                      <p className="cardSubTitle text-justify">
                        <FontAwesomeIcon
                          className="iconBullent"
                          icon={faCheckSquare}
                        />{" "}
                        Implementation{" "}
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Summary;
