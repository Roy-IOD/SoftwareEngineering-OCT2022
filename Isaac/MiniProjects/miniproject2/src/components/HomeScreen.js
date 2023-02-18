import React from 'react';
import backgroundvideo from '../assets/Castle Hill.mp4';

function HomeScreen(props) {
      return (  
            <video className='videoTag' autoPlay loop muted style={{  objectFit: 'cover', width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0}}>
                  <source src={backgroundvideo} type='video/mp4' />
            </video>
      );
};
  
export default HomeScreen;

