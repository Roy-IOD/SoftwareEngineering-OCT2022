import React, { useState, useEffect } from "react";
import { EmojiContext } from "../context/EmojiContext";

function Clock() {
  const [date, setDate] = useState(new Date());
  const [tickCount, setTickCount] = useState(0);
  // console.log(date)

  const { emoji } = React.useContext(EmojiContext);

  const tick = () => {
    // console.log('clock tick')
    setTickCount(tickCount + 1);
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  return (
  <div className="componentBox">
    <p>It is: {date.toLocaleTimeString()}</p>
    <p>{emoji}</p>
  </div>
  );
}

export default Clock;
