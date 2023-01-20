import React from 'react'

class Bike extends React.Component {

    colours = ['blue', 'black', 'red', 'yellow','silver']

    constructor(props) {

        //super is used to inherit all the constructor functionality for the parent React.Component class
        super(props);

        //we are storing 3 different elements in state, for the make, model and colour of the bike, and we give them default values
        this.state = {
            make: this.props.make ? this.props.make : "Yamaha",
            model: "R15",
            colour: "blue"
        };
    }

    //try and create a function which changes the bike colour to a random value
  
    changeBikeColour = () => { //why would we use an arrow function here?

        const currentColourIndex = this.colours.indexOf(this.state.colour);

        //we have to use === in React to test for equality instead of equivalence
        //what is this conditional statement doing?
        const nextColourIndex = currentColourIndex === this.colours.length-1 ? 0 : currentColourIndex + 1;

        //this just changes the colour to the next one in the colours array
        this.setState({colour: this.colours[nextColourIndex]});
    }
  
    render() {

        return (
            <div className="Bike componentBox">
                <h2>My {this.state.make}</h2>

                <p>It is a <span style={{color:this.state.colour}}>{this.state.colour}</span> {this.state.model}.</p>

                <button type="button" onClick={this.changeBikeColour}>Change colour</button>
            </div>
        );
    }
  
}

export default Bike;