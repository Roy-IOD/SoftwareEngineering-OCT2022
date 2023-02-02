import React from "react";

// State can be modified based on user action or network changes
// Every time the state of an object changes, React re-renders the component to the browser
// The state object is initialized in the constructor
// The state object can store multiple properties
// this.setState() is used to change the value of the state object
// setState() function performs a shallow merge between the new and the previous state
// State shouldn’t be modified directly – the setState( ) should be used
// State affects the performance of your app, and therefore it shouldn’t be used unnecessarily

class Emoji extends React.Component {
  constructor(props) {
    //both props and state are stored as objects, with individual custom properties for storing different bits of data

    super(props); //props are passed in from parent components up the chain

    //The only place where you can assign this.state is the constructor.
    this.state = {
      mood: "🙂",
      greeting: "happy days",
    }; //state 'belongs' to the component itself

    //this.windBlows = this.windBlows.bind(this); //what happens if we comment this line out? why?
  }

  sadFace() {
    //Always use the setState() method to change the state object,
    //since it will ensure that the component knows it’s been updated and triggers the render() method.
    this.setState({ mood: "😞", greeting: "no way" });
    //this just changes the 'weather' state and leaves the others unchanged

    //this.state.weather = 'windy' //this would change the state value as well but is doing it WRONG - always use the setState method instead.
  }

  sadFaceGoes() {
    //Always use the setState() method to change the state object,
    //since it will ensure that the component knows it’s been updated and triggers the render() method.
    this.setState({ mood: "🙂", greeting: "happy days" });
    //this just changes the 'weather' state and leaves the others unchanged

    //this.state.weather = 'windy' //this would change the state value as well but is doing it WRONG - always use the setState method instead.
  }

  //lets us toggle the weather between the two different states
  changeMood = () => {
    let newMood = this.state.mood === "🙂" ? "😞" : "🙂";
    let newGreeting = this.state.mood === "🙂" ? "no way" : "happy days";

    //this is the same as the above just fully written out using a complete if statement instead of a conditional
    // let newWeather2;

    // if (this.state.weather === 'sunny') {
    //     newWeather2 = 'windy';
    // }
    // else
    // {
    //     newWeather2 = 'sunny';
    // }

    this.setState({ mood: newMood, greeting: newGreeting });
  };

  //how could we switch between multiple possible weather states? HINT: see the Bike.js component

  render() {
    return (
      <div className="Mood componentBox">
        <div>
          Mood Today: {this.state.mood}. Cheers {this.state.greeting}
        </div>
        {/* <div>Weather Tomorrow: {this.state.forecast}</div> */}
        <button onClick={() => this.sadFace()}>R U OK</button>{" "}
        {/* we can use event listeners like onClick, onSubmit, onChange but they need to be camelcased */}
        <button onClick={() => this.sadFaceGoes()}>No more long face</button>
        <button onClick={this.changeMood}>Change Mood</button>
      </div>
    );
  }
}

//if a component doesn't use state, it can be a function instead of the extra class overhead
function Forecast(props) {
  return <div className="Forecast">Happiness Overload: {props.mood}</div>;
}

export default Emoji;
