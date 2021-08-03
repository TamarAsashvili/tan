import React from 'react';
import logo11 from '../../images/logo11.png'
import { Container, Row, Col } from 'react-bootstrap';


export default function Footer() {
  return (

    <div className='footer' >
      <Container className="d-flex justify-content-end">
        <Row >

          <Col>
            <img
              src={logo11}
              widtth='30'
              height='30'
              className='d-inline-block align-top'
              alt='logo'
            />
          </Col>
          <Col> <h5>TaninaAframy 2021</h5></Col>
        </Row>
      </Container>



    </div>

  );
}
