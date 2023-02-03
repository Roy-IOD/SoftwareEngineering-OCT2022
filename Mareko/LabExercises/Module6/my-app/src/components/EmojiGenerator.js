import React from 'react';

class EmojiGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: '☀',
            weatherName: 'Sunny'
        }
    };

    weatherTypes = ['☀', '🌧', '💨', '☁', '⛈', '❄']
    weatherNames = ['Sunny', 'Rainy', 'Windy', 'Cloudy', 'Stormy', 'Snowy']
    

    changeWeather = () => {
        const currentWeatherIndex = this.weatherTypes.indexOf(this.state.weather); //this variable looks at the current name in this.state and finds it's index within the names array.
        const nextWeatherIndex = currentWeatherIndex === this.weatherTypes.length-1 ? 0 : currentWeatherIndex + 1; //this variable is a conditional statement that finds if the currentNameIndex has reached the end of the array by reading the array's length and taking away 1 (because when arrays are counted they start from 0). If it has reaced the end it will reset the count to 0, if not it will add 1 until the end is reached and the former is then executed. So the variable is basically scrolling through the array.

        this.setState({
            weather: this.weatherTypes[nextWeatherIndex],
            weatherName: this.weatherNames[nextWeatherIndex]
        })//this will change the state and scroll through the names in the array whenever executed.
    }

    

    render() {
        return(
            <div>
                <h2>Today's Weather: {this.state.weather} {this.state.weatherName}</h2>
                <p>{}</p>
                <button onClick={this.changeWeather}>Change</button>
            </div>
        )
    }
};

export default EmojiGenerator;