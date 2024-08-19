import React, { useEffect } from 'react';
import About from './about/About';
import Chart from './chart/Chart';
import Course from './course/Course';
import Project from './project/Project';
import Review from './review/Review';
import Service from './service/Service';
import Summary from './summary/Summary';
import Topbar from './topbar/Topbar';
import Video from './video/Video';

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
    <title>Home Page</title>
      <Topbar />
      <Service />
      <Chart />
      <Summary />
      <Project />
      <Course />
      <Video />
      <Review />
      <About />
    </>
  )
}

export default Home;