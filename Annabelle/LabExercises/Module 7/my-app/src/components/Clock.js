import React, { useState, useEffect } from 'react';

function Clock() {
    const [date, setDate] = useState (new Date());

    function newClock() {
        setDate(new Date())
    }


useEffect(() => {
    const timerId = setInterval(newClock, 1000);
    
    return function cleanup() {
        clearInterval(timerId);
      };
    });

return (
    <div>{date.toLocaleTimeString()}</div>
)
}
export default Clock;