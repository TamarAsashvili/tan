import React from 'react';
import '../css/main.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Header from './UI/Header';

export default function Contact() {
  return (
    <div>
      <Header />
      Contact page
      <br />
      <hr />
      <Container>
        <Row>
          <Col sm>
            <Card bg='info' text='white' style={{ width: '20rem' }}>
              <Card.Header>Taninaaframi SPL</Card.Header>
              <Card.Body>
                <Card.Title>Address:</Card.Title>
                <Card.Text>
                  Rue de I'Etang 56, box 89, 1040 Etterbeek.
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
          <Col sm>
            <Card bg='info' text='white' style={{ width: '20rem' }}>
              <Card.Header>contact us</Card.Header>
              <Card.Body>
                <Card.Title>email: taninaaframi@gmail.com
                </Card.Title>
                <Card.Text>
                  Mobile: after coming soon
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
