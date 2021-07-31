import React from 'react';
import '../../css/cube.css';
import logo12 from '../../images/logo12.jpg'
import logo15 from '../../images/logo15.jpg'

export default function Cube() {
  return (
    <div>
      <div className='wrap'>
        <div className='cube'>
          <img
            src={logo12}

            style={{ width: '200px', height: '200px' }}
            alt='wine'
          />
          <img
            src={logo15}

            style={{ width: '200px', height: '200px' }}
            alt='wine'
          />
          <img
            src={logo12}
            style={{ width: '200px', height: '200px' }}
            alt='wine'
          />
          <img
            src={logo15}
            style={{ width: '200px', height: '200px' }}
            alt='wine'
          />
          <img
            src={logo12}

            style={{ width: '200px', height: '200px' }}
            alt='wine'
          />
          <img
            src={logo12}
            /*src='https://picsum.photos/id/102/200/200'*/

            style={{ width: '200px', height: '200px' }}
            alt='wine'
          />
        </div>
      </div>
    </div>
  );
}
