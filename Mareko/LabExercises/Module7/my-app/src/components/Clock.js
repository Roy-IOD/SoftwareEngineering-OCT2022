import React, { useState, useEffect } from 'react'
import { EmojiContext } from '../context/emojiContext';


function Clock() {

    const [date, setDate] = useState(new Date());
    const [tickCount, setTickCount] = useState(0);
  
    useEffect(() => {
        const timerID = setInterval(
            () => tick(),
            1000
        );
        return () => {
            clearInterval(timerID);
        }
        
    });

    function tick() {
        console.log('clock tick');
        setDate(new Date());
        setTickCount(tickCount + 1);
    }

    return (
        <div className="Clock">
            <FormattedDate date={date} />
        </div>
    );
    
}

function ClockDisplay() {
    const { weather, setWeather } = React.useContext(EmojiContext);
    const [showClock, setShowClock] = useState(true);

    const toggleClock = () => {
        setShowClock(!showClock)
    }
    
    let buttonText = showClock ? 'Hide' : 'Show'
    
    return (
        <div className="ClockDisplay componentBox">
            {showClock ? <Clock /> : null}
            {showClock ? <h2>Today's Weather: {weather} </h2> : null}
            <button onClick={toggleClock}>{buttonText} Clock</button>
        </div>
    )

}

function FormattedDate(props) {
    return <h2 className="FormattedDate">It is {props.date.toLocaleTimeString()}.</h2>;
}

export default ClockDisplay;