import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderImg from './UI/HeaderImg';
import Header from './UI/Header';

export default function Member() {
  return (
    <div>
      <Header />
      <Container>
        <HeaderImg />
      </Container>
      <hr />
      <hr />
      <br />
    </div>
  );
}
