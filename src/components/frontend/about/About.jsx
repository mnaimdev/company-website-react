import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from 'react-simple-typewriter';
import face from "../../../assets/images/face.png";
import "./about.css";


const About = () => {
   
//   const handleType = (count: number) => {
//     // access word count number
//     console.log(count)}
//   }

//   const handleDone = () => {
//     console.log(`Done after 5 loops!`)
//   }
  
  return (
    <>
      <Container className="text-center">
        <h1 className="serviceMainTitle">ABOUT ME</h1>
        <div className="bottom"></div>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="aboutMeImage">
              <img className="aboutImg" src={face} />
            </div>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="aboutMeBody">
              <h2 className="aboutMeDetails">HI There, I'm</h2>
              <h2 className="aboutMeTitle">Mohammad Naim</h2>
              <h3 className="aboutMeDetails">
                Work as 
                <span className="mx-2">
                <Typewriter
            words={['Programmer', 'Developer', 'Freelancer', 'Problem Solver!']}
            loop={5}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          
          />
                </span>
                
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
