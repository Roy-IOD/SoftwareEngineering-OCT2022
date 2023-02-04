import React, { useState, useEffect } from 'react'

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
        
    }, []);

    function tick() {
        console.log('clock tick');
        setDate(new Date());
        setTickCount(tickCount + 1);
    }
    
  
    //called when a component has mounted into the DOM - ie. rendered
    //usually used for setting up things like API calls that are performance or memory intensive, 
    //so they only run when the component needs them
    // componentDidMount() {
    //     console.log('clock did mount')
    //     this.timerID = setInterval(
    //         () => this.tick(),
    //         1000
    //     );
    // }
  
    //called just before the component is unmounted from the DOM - ie. unrendered
    //usually used to cleanup any intervals, timers, processes etc that are no longer needed
    // componentWillUnmount() {
    //     console.log('clock will unmount')
    //     clearInterval(this.timerID);
    // }
  
    //custom function, called from our custom interval inside componentDidMount
    //calls setState which triggers a re-render

    return (
        <div className="Clock">
            <h3>Hello, world! {tickCount} seconds have elapsed</h3>
            <FormattedDate date={date} />
        </div>
    );
    
}

//this class handles displaying the Clock component above by providing a button to control the display
function ClockDisplay() {
    
    const [showClock, setShowClock] = useState(true);

    // hideClock = () => {
    //     setShowClock(showClock: false);
    // }

    //a generic toggleClock function that will hide or show based on the current state
    const toggleClock = () => {
        setShowClock(!showClock)
    }
    
    let buttonText = showClock ? 'Hide' : 'Show'
    
    return (
        <div className="ClockDisplay componentBox">
            {showClock ? <Clock /> : null}
            <button onClick={toggleClock}>{buttonText} Clock</button>
        </div>
    )

}

function FormattedDate(props) {
    return <h2 className="FormattedDate">It is {props.date.toLocaleTimeString()}.</h2>;
}

export default ClockDisplay;