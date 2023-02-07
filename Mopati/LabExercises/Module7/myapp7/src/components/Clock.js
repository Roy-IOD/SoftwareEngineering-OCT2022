import React, { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  const [tickCount, setTickCount] = useState(0);
  console.log(date);

  const tick = () => {
    console.log("clock tick");
    setTickCount(tickCount + 1);
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });
  return <div className="componentBox">It is: {date.toLocaleTimeString()}</div>;
}

function ClockDisplay() {
  const [showClock, setShowClock] = useState(true);
  const toggleClock = () => {
    let showHide = showClock === true ? false : true;
    setShowClock(showHide);
  };
  return (
    <div className="ClockDisplay componentBox">
      {showClock ? <Clock /> : null}
      <button onClick={toggleClock}>Play around with me</button>
    </div>
  );
}

export default ClockDisplay;
