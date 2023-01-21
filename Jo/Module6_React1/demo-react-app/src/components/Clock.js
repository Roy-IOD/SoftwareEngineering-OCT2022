import React from 'react'

class Clock extends React.Component {

    //set up the props and state
    constructor(props) {
        super(props);
        this.state = {date: new Date(), tickCount: 0};
        console.log('clock initialised')
    }
  
    //called when a component has mounted into the DOM - ie. rendered
    //usually used for setting up things like API calls that are performance or memory intensive, 
    //so they only run when the component needs them
    componentDidMount() {
        console.log('clock did mount')
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    //called just before the component is unmounted from the DOM - ie. unrendered
    //usually used to cleanup any intervals, timers, processes etc that are no longer needed
    componentWillUnmount() {
        console.log('clock will unmount')
        clearInterval(this.timerID);
    }
  
    //custom function, called from our custom interval inside componentDidMount
    //calls setState which triggers a re-render
    tick() {
        console.log('clock tick')
        this.setState({
            date: new Date(),
            tickCount: this.state.tickCount + 1
        });
    }
  
    //called just before componentDidMount, and every time the state changes
    render() {

        //can return null from render to hide the component, but this is NOT the same as unmounting
        //if (this.state.tickCount >= 20) return null;

        console.log('clock render')
        return (
            <div className="Clock">
                <h3>Hello, world! {this.state.tickCount} seconds have elapsed</h3>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

//this class handles displaying the Clock component above by providing a button to control the display
class ClockDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showClock: true }
    }

    hideClock = () => {
        this.setState({showClock: false})
    }

    //a generic toggleClock function that will hide or show based on the current state
    toggleClock = () => {
        this.setState({showClock: !this.state.showClock})
    }

    render() {
        let buttonText = this.state.showClock ? 'Hide' : 'Show'
        return (
            <div className="ClockDisplay componentBox">
                {this.state.showClock ? <Clock /> : null}
                <button onClick={this.toggleClock}>{buttonText} Clock</button>
            </div>
        )
    }
}

function FormattedDate(props) {
    return <h2 className="FormattedDate">It is {props.date.toLocaleTimeString()}.</h2>;
}

export default ClockDisplay;