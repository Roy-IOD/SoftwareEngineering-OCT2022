import { useRef, useState } from 'react';

//https://beta.reactjs.org/learn/referencing-values-with-refs
//what triggers the re-rendering of this component?

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  //store the interval timer id in a re so it's maintained across re-renders
  let interval = useRef()

  function handleStart() {
    // Start counting.
    setStartTime(Date.now());
    setNow(Date.now());

    interval.current = setInterval(() => {
      // Update the current time every 10ms.
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(interval.current)
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>

      {/* how could we add a stop button? */}
      <button onClick={handleStop}>Stop</button>
    </>
  );
}