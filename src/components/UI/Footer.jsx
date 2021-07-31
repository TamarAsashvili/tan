import React from 'react';
import logo from '../../images/logo.png'


export default function Footer() {
  return (

    <div className='footer' style={{ color: '#fff' }}>

      <img
        src={logo}
        widtth='30'
        height='30'
        className='d-inline-block align-top'
        alt='logo'
      />
      <h5>TaninaAframy 2021</h5>
    </div>

  );
}
