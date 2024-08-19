import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Tooltip } from 'react-bootstrap';
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';

const Chart = () => {
      var blue = "#051b35";

      const [data, setData] = useState([]);

      useEffect(() => {
        setData([
            {
                Technology: 'PHP/Laravel',
                Projects: '300+',
              },
              {
                Technology: 'JS',
                Projects: '200+',
              },
              {
                Technology: 'React JS',
                Projects: '150+',
              },
              {
                Technology: 'HTML & CSS',
                Projects: '300+',
              },
      
              {
                Technology: 'Java',
                Projects: '100+',
              }
        ]);

      }, []);

  return (
    <>
     <Container>
     <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
     <div className="bottom"></div>
        <Row>
        <Col lg={6} md={6}>
                 <ResponsiveContainer>   
               <BarChart width={100} height={300} data={data}>

               <XAxis dataKey="Technology" /> 
               <Tooltip />
               <Bar dataKey="Projects" fill="red">

               </Bar>
               </BarChart>
               </ResponsiveContainer>
               
            </Col>

            <Col lg={6} md={6}>
               <p>Hello there, I am Mohammad Naim, a senior fullstack software engineer. With 5+ years of experience I have completed many projects and also I have learned many techonologies in my previous journey.</p>

               <p>Thoose projects were very challenging for me. But I was very dedicted about my work. Recently I try to solve many problems.</p>
            </Col>
        </Row>
     </Container>
    </>
  )
}

export default Chart;

