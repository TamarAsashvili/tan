import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo.png'


export default function Header() {
  return (
    <div>
      <Navbar expand='lg' bg='light' >
        <Navbar.Brand href='#home' >
          <img
            src={logo}
            widtth='60'
            height='60'
            className='d-inline-block align-top'
            alt='logo'
          />

        </Navbar.Brand>
        <h1 className='hefo'><strong style={{ color: '#001c44' }}>Tanina</strong><strong style={{ color: '#Ecbd02' }}>Aframi</strong></h1>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/' className='btn1'>
              Home
            </Nav.Link>
            <Nav.Link href='member' className='btn1'>
              Products
            </Nav.Link>
            <Nav.Link href='/product' className='btn1'>
              Gallery
            </Nav.Link>
            <Nav.Link href='contact' className='btn1'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
