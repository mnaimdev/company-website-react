import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import About from "../about/About";
import PageTop from "./PageTop";

const AboutPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <PageTop pagetitle="About Page" />
      <About />
      <Container className="mt-5">
        <Row>
          <Col sm={12} lg={12} md={12}>
            <p>About Us

Welcome to  where learning meets innovation. Our platform is designed to provide you with an enriching educational experience that caters to learners from all walks of life. Whether you're a student seeking to enhance your academic performance, a professional aiming to upskill, or simply someone with a passion for learning, is your ultimate destination. </p>

<p>
Our Mission

At  we are driven by the mission to make quality education accessible to everyone, regardless of geographical location, age, or background. We believe that knowledge is the key to personal and professional growth, and our goal is to create a learning environment that is both flexible and engaging, allowing you to learn at your own pace and in your own time.
</p>

<p>
What We Offer

Our platform hosts a vast array of courses spanning numerous subjects, including Each course is meticulously crafted by industry experts and seasoned educators who bring real-world experience into the virtual classroom. From foundational courses that cover the basics to advanced programs that dive deep into specialized topics, our curriculum is designed to meet the diverse needs of our learners.
</p>

<p>
Interactive and Engaging Learning

Learning on  is not just about absorbing information—it's about interaction and engagement. We offer a range of interactive features such as quizzes, discussion forums, and hands-on projects that help reinforce your understanding of the material. Our platform also supports multimedia content, including videos, podcasts, and infographics, making learning a dynamic and enjoyable experience.
</p>

<p>
Learn Anytime, Anywhere

We understand the demands of modern life, which is why our courses are designed to be accessible anytime, anywhere. Whether you prefer learning on your desktop, tablet, or smartphone, our mobile-friendly platform ensures that you can continue your education on the go. With lifetime access to your courses, you can revisit the material as often as you need, ensuring that your learning journey is continuous and evolving.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutPage;
