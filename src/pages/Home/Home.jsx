import React from 'react';
import "./Home.css";
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

import Home1 from "../../img/Home1.jpg"
import Home2 from "../../img/Home2.jpg"


export const Home = () => {

    return (
        <div className='homeDesign'>
<div className="imagesDesign">

{/* <Container>
        <Row className="justify-content-center">
          <Col
            xs={10}
            md={6}
          > */}

    <Card>
        <Card.Img variant="top" src={Home1} />
        <Card.Body>
        <Card.Text>
    Welcome to LIBERTY Dental Centre, a private dental practice in central London.
           </Card.Text>

          <Card.Text> 
          We are proud to offer services to meet your all dental treatment needs in order to give you the smile you truly deserve.
          </Card.Text>
        </Card.Body>
      </Card>
     
      <br />
      <Card>
        <Card.Body>
          <Card.Text>
           
          </Card.Text>
        </Card.Body>
        <Card.Img variant="top" src={Home2} />
      </Card>

      {/* </Col>
        </Row>
      </Container> */}
      </div>
        </div>
    )
    
}