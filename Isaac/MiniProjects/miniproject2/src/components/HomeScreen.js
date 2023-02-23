import React from 'react';
import { useState } from 'react';
import { Videos } from './VideoArray';


function HomeScreen(props) {
      const [currentVideo, updateVideo] = useState(0);
      const videoHandler = () => {
            (currentVideo < 19) ?  updateVideo(currentVideo + 1) :  updateVideo(0)
      }
      let updatedVideo = Videos[currentVideo].src
      console.log(updatedVideo)

      return (  
            <video key={updatedVideo} onEnded={videoHandler} className='videoTag' autoPlay muted style={{  objectFit: 'cover', width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0}}>
                  <source src={updatedVideo} type='video/mp4' />
            </video>
      );
};
  
export default HomeScreen;

