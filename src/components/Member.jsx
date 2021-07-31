import React from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import bag from '../images/bag.jpg';
import chanta from '../images/chanta.jpg';
import image3 from '../images/image3.jpg';
import pap from '../images/pap.jpg';
import comp from '../images/comp.jpg';
import kastel from '../images/kastel.jpg';
import HeaderImg from './UI/HeaderImg';

export default function Member() {
  return (
    <div>
      <Container>
        <HeaderImg />
      </Container>
      <Container>
        <Row>
          <Col sm>
            <Card border='info' text='dark'>
              <Card.Header>Address</Card.Header>
              <Card.Img variant='top' src={image3} className='shrink' />
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col sm>
            <Card border='info' text='dark'>
              <Card.Header>map</Card.Header>
              <Card.Img variant='top' src={chanta} className='shrink' />
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  magnam veritatis in nihil atque dolorum cumque, perferendis

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card border='info' text='dark'>
              <Card.Header>map</Card.Header>
              <Card.Img variant='top' src={bag} className='shrink' />
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <Card border='info' text='dark'>
              <Card.Header>Address</Card.Header>
              <Card.Img variant='top' src={pap} className='shrink' />
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col sm>
            <Card border='info' text='dark'>
              <Card.Header>map</Card.Header>
              <Card.Img variant='top' src={comp} className='shrink' />
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  magnam veritatis in nihil atque dolorum cumque, perferendis

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card border='info' text='dark'>
              <Card.Header>map</Card.Header>
              <Card.Img variant='top' src={kastel} className='shrink' />
              <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
      <hr />
      <hr />
      <br />
    </div>
  );
}
