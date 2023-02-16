import React from 'react'

// State can be modified based on user action or network changes
// Every time the state of an object changes, React re-renders the component to the browser
// The state object is initialized in the constructor
// The state object can store multiple properties
// this.setState() is used to change the value of the state object
// setState() function performs a shallow merge between the new and the previous state
// State shouldn’t be modified directly – the setState( ) should be used
// State affects the performance of your app, and therefore it shouldn’t be used unnecessarily

class Weather extends React.Component {

    constructor(props) {

        //both props and state are stored as objects, with individual custom properties for storing different bits of data

        super(props); //props are passed in from parent components up the chain

        //The only place where you can assign this.state is the constructor.
        this.state = { weather: 'sunny', temperature: 27, forecast: 'scattered showers' }; //state 'belongs' to the component itself

        //this.windBlows = this.windBlows.bind(this); //what happens if we comment this line out? why?
    }
  
    windBlows() {
        //Always use the setState() method to change the state object, 
        //since it will ensure that the component knows it’s been updated and triggers the render() method.        
        this.setState({ weather: 'windy' });
        //this just changes the 'weather' state and leaves the others unchanged

        //this.state.weather = 'windy' //this would change the state value as well but is doing it WRONG - always use the setState method instead.
    }

    sunShines() {
        //Always use the setState() method to change the state object, 
        //since it will ensure that the component knows it’s been updated and triggers the render() method.        
        this.setState({ weather: 'sunny' });
        //this just changes the 'weather' state and leaves the others unchanged

        //this.state.weather = 'windy' //this would change the state value as well but is doing it WRONG - always use the setState method instead.
    }    

    //lets us toggle the weather between the two different states
    changeWeather = () => {
        let newWeather = this.state.weather === 'sunny' ? 'windy' : 'sunny';

        //this is the same as the above just fully written out using a complete if statement instead of a conditional
        // let newWeather2;

        // if (this.state.weather === 'sunny') {
        //     newWeather2 = 'windy';
        // }
        // else
        // {
        //     newWeather2 = 'sunny';
        // }

        this.setState({ weather: newWeather });
    }

    //how could we switch between multiple possible weather states? HINT: see the Bike.js component

    render() {
        return (
            <div className="Weather componentBox">
                <div>Weather Today: {this.state.weather}. Temp is {this.state.temperature}&deg;C</div>
                {/* <div>Weather Tomorrow: {this.state.forecast}</div> */}
                <Forecast weather={this.state.forecast} />
                <button onClick={() => this.windBlows()}>Wind Blows</button> {/* we can use event listeners like onClick, onSubmit, onChange but they need to be camelcased */}
                <button onClick={() => this.sunShines()}>Sun Shines</button>
                <button onClick={this.changeWeather}>Change Weather</button>
            </div>
        )
    }
}

//if a component doesn't use state, it can be a function instead of the extra class overhead
function Forecast(props) {
    return (
        <div className="Forecast">Weather Tomorrow: {props.weather}</div>
    )
}

export default Weather;