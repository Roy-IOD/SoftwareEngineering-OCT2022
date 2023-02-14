import React from "react";
// import {ThemeContext}

function Emoji { //change to function, chnge this.state to emoji, no render anymore
  constructor(props) {
    super(props);

    this.state = {
      mood: "🙂",
      greeting: "happy days",
    };
  }

  sadFace() {
    this.setState({ mood: "😞", greeting: "no way" });
  }

  sadFaceGoes() {
    this.setState({ mood: "🙂", greeting: "happy days" });
  }

  changeMood = () => {
    let newMood = this.state.mood === "🙂" ? "😞" : "🙂";
    let newGreeting = this.state.mood === "🙂" ? "no way" : "happy days";

    this.setState({ mood: newMood, greeting: newGreeting });
  };

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

function Forecast(props) {
  return <div className="Forecast">Happiness Overload: {props.mood}</div>;
}

export default Emoji;
