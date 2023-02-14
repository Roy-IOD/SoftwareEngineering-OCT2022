import React, { useState, useEffect } from 'react';
import {EmojiContext} from '../context/EmojiContext'

function Clock() {
    const [date, setDate] = useState (new Date());

    function newClock() {
        setDate(new Date())
    }

const {emoji} = React.useContext(EmojiContext); 

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