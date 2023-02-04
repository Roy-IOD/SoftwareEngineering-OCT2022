import React from 'react';
import { useEffect, useState } from "react";


function Clock(props) {
    const [date , setDate] = useState(new Date())
    const [tickCount, setTickCount] = useState(0)

    useEffect(() => {

        const tick = function() {
            setDate(new Date())
            setTickCount(tickCount + 1)
        }

        let timerID = setInterval(tick, 1000)

        return () => {
            clearInterval(timerID, Clock);
        };
    },  )

    return (
        <div className = "Clock">
            <h3> Hello, world! {tickCount} seconds have elapsed</h3>
            <FormattedDate date = {date} />
        </div>
    )
}

function ClockDisplay(props) {
    const [showClock, setShowClock] = useState(true)

    const toggleClock = () => {
        setShowClock(!showClock)
        console.log(showClock)
    }

    return (
        <div className="ClockDisplay componentBox">
            {showClock ? <Clock /> : null}
            <button id="button" onClick = {toggleClock}>{showClock ? "Hide" : "Show"}</button>
        </div>
    )
}

function FormattedDate(props) {
    return <h2 className="FormattedDate"> It is {props.date.toLocaleTimeString()}.</h2>;
}

export default ClockDisplay;