import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './review.css';


const Review = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Container fluid={true} className="siderBack text-center">
        <h1 className="reviewMainTitle p-3">TESTIMOIAL</h1>
        <div className="reviewbottom"></div>

        <div>
          <Row className="text-center justify-content-center">
          <Slider {...settings}>

            <Col lg={12} md={12} sm={12}>
              <img className="circleImg" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" />
              <h2 className="reviewName">Mohammad Naim</h2>
              <p className="reviewDescription">I feel very happy to see this</p>
            </Col>

            <Col lg={12} md={12} sm={12}>
              <img className="circleImg" src="https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg" />
              <h2 className="reviewName">Mir Faisal</h2>
              <p className="reviewDescription">It is very well</p>
            </Col>

            <Col lg={12} md={12} sm={12}>
              <img className="circleImg" src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" />
              <h2 className="reviewName">Saiful Islam</h2>
              <p className="reviewDescription">This is really awesome</p>
            </Col>

            <Col lg={12} md={12} sm={12}>
              <img className="circleImg" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
              <h2 className="reviewName">Mezba Ahmed</h2>
              <p className="reviewDescription">I can't believe to see this amazing thing</p>
            </Col>

            </Slider>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Review;
