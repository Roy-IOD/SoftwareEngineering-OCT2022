import React from 'react'

class Weather extends React.Component {
    constructor(props){
        super(props);

        this.state = {weather: 'sunny', temperature: 27, forecast: 'scattered showers'};

        this.windBlows = this.windBlows.bind(this);
    }

    windBlows() {
        this.setState({weather: 'windy'});
    }

    render() {
        return (
            <div className='Weather'>
                <div> Weather Today: {this.state.weather}. Temp is {this.state.temperature}&deg;C</div>
                <div> Weather Tomorrow: {this.state.forecast}</div>
                <button onClick={this.windBlows}> Wind Blows </button>

            </div>
        )
    }
}

export default Weather;