import React from 'react'

class Weather extends React.Component {
    constructor(props) {
      super(props); //props are passed in from parent components up the chain
      this.state = { weather: 'sunny' }; //state 'belongs' to the component itself
      this.windBlows = this.windBlows.bind(this); //what happens if we comment this line out? why?
    }

    windBlows() {
      this.setState({ weather: 'windy' });
    }

    //how could we change the weather back to sunny again?

    render() {
        return (
            <div>
                <div>Weather Today: {this.state.weather}</div>
                <button onClick={this.windBlows}>Wind Blows</button> {/* we can use event listeners like onClick, onSubmit, onChange but they need to be camelcased */}
            </div>
        )
    }
}

export default Weather;