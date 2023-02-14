import { useState, useRef } from 'react';

//see https://beta.reactjs.org/learn/manipulating-the-dom-with-refs
export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  let videoRef = useRef()

  function handleClick() {

    isPlaying ? videoRef.current.pause() : videoRef.current.pause();

    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
  }

  return (
    <div className="componentBox">
        <button onClick={handleClick}> {/* how do we make the button pause/play the video? a: see line 10 and 22 */}
            {isPlaying ? 'Pause' : 'Play'}
        </button>
        <br/>
        <video width="250" ref={videoRef}>
            <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        </video>
    </div>
  )
}
