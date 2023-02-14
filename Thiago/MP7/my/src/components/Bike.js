import React, { useState } from 'react'

function Bike(props) {

    const colours = ['blue', 'black', 'red', 'yellow', 'silver']

    //we are storing 3 different elements in state, for the make, model and colour of the bike, and we give them default values
    const [make, setMake] = useState(props.make ? props.make : "Yamaha") //these probably don't need to be state values since they don't change
    const [model, setModel] = useState('R15')  //these probably don't need to be state values since they don't change
    const [colour, setColour] = useState('blue')    

    //try and create a function which changes the bike colour to a random value
  
    const changeBikeColour = () => { //why would we use an arrow function here?

        const currentColourIndex = colours.indexOf(colour);

        //we have to use === in React to test for equality instead of equivalence
        //what is this conditional statement doing?
        const nextColourIndex = currentColourIndex === colours.length-1 ? 0 : currentColourIndex + 1;

        //this just changes the colour to the next one in the colours array
        setColour(colours[nextColourIndex])
    }

    return (
        <div className="Bike componentBox">
            <h2>My {make}</h2>

            <p>It is a <span style={{color:colour}}>{colour}</span> {model}.</p>

            <button type="button" onClick={changeBikeColour}>Change colour</button>
        </div>
    );
  
}

export default Bike;