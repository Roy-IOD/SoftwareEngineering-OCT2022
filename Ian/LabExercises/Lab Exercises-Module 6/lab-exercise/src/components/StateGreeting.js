import React from 'react';

class StateGreeting extends React.Component {
    constructor(props) {

        //both props and state are stored as objects, with individual custom properties for storing different bits of data

        super(props); //props are passed in from parent components up the chain

        //The only place where you can assign this.state is the constructor.
        this.state = { name: 'world'}; //state 'belongs' to the component itself

        //this.windBlows = this.windBlows.bind(this); //what happens if we comment this line out? why?
    }

    changeName = () => {
        this.setState({ name: 'Charlie'});
    }

    render() {
        return (
            <div>
        <h1>Hello {this.state.name ? this.state.name : 'World'}!</h1>
        <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}


export default StateGreeting;