import React from 'react'

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date(), tickCount: 0};
        console.log('clock initialised')
    }
  
    componentDidMount() {
        console.log('clock did mount')
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
  
    componentWillUnmount() {
        console.log('clock will unmount')
        clearInterval(this.timerID);
    }
  
    tick() {
        console.log('clock tick')
        this.setState({
            date: new Date(),
            tickCount: this.state.tickCount + 1
        });
    }
  
    render() {

        console.log('clock render')
        return (
            <div className="Clock">
                <h3>Hello, world! {this.state.tickCount} seconds have elapsed</h3>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}


class ClockDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showClock: false }
    }

    hideClock = () => {
        this.setState({showClock: false})
    }

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