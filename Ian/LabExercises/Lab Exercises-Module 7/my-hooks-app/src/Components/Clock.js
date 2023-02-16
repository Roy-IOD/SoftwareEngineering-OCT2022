import React, { useState, useEffect, useContext } from 'react';
import { EmojiContext } from '../context/EmojiContext';

function Clock() {
    const [date, setDate] = useState(new Date());
    const [tickCount, setTickCount] = useState(0);
    const { emoji } = useContext(EmojiContext);
    console.log(date)

    const tick = () => {
        console.log('clock tick')
            setTickCount(tickCount + 1)
            setDate (new Date())

    }

    useEffect(() => {
        const timerID = setInterval(
            () => tick(),
            1000
        );

    return () => {
        clearInterval(timerID);
    }
    })

return (
        <div className='componentBox'>
            The current time is: {date.toLocaleTimeString()} {emoji}
        </div>
    )
}

function ClockDisplay() {
    const [showClock, setShowClock] = useState(true);
    const toggleClock = () => {
        let showHide = showClock === true ? false : true;
        setShowClock(showHide)
    }
    return (
        <div className="ClockDisplay componentBox">
            {showClock ? <Clock /> : null}
            <button onClick={toggleClock}>{showClock ? 'Hide' : 'Show'} Clock</button> {/* update this button to use the new toggleClock function and say 'Hide' or 'Show' depending */}
        </div>
    )
}

function ChangeMood( {Emoji} ) {
    const [emoji, setEmoji] = React.useState('');


    return (
        <EmojiContext.Provider value={emoji}>
            {emoji}
        </EmojiContext.Provider>
    )

}

export default ClockDisplay;