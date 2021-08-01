import React from 'react';
import { Jumbotron, Nav, Image, Col, Row } from 'react-bootstrap';
import Cube from './UI/Cube';
import abood from '../images/abood.jpg';

export default function Home() {
  return (
    <React.Fragment>
      <Jumbotron style={{ backgroundColor: ' #fff' }}>
        <br />
        <Row>
          <Col sm={8}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              nemo et voluptatem nobis possimus nihil.
            </h3>


            <Cube />

            <br />
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quo repudiandae
              rerum libero ipsum asperiores omnis mollitia, nostrum commodi
              placeat ea itaque modi corrupti corporis nam voluptas aut
              reprehenderit eaque culpa.
            </p>
          </Col>

          <Col sm={4}>
            <Image src={abood} thumbnail />

            <Nav.Link href='member' className='btn1'>
              see moor
            </Nav.Link>
          </Col>
        </Row>
      </Jumbotron>

    </React.Fragment>
  );
}
