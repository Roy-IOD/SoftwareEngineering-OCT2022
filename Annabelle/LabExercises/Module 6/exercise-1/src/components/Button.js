import React, { Component } from 'react';
export default class Button extends React.Component {
    state = {greet:'Hello, ', name:'World'};

    constructor(props) {
         super(props);
    }

changeState = () => {
    this.setState({name: 'Annabelle', });
  }

render() {
const state = this.state;
    return (
      <div>
        <h1>{state.greet }{state.name}</h1>
        <button onClick={this.changeState}>Change Name</button>
      </div>
    )
  }
}
