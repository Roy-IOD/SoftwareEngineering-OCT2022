import React from 'react'
import { useEffect, useState } from "react";

function Bike(props) {
    const colours = ['blue', 'black', 'red', 'yellow', 'silver']

    const [make, setMake] = useState(props.make ? props.make : 'Yamaha')
    const [model, setModel] = useState('R15')
    const [colour, setColour] = useState('blue')

    const changeBikeColour = () => {

        const currentColourIndex = colours.indexOf(colour);

        const nextColourIndex = currentColourIndex === colours.length-1 ? 0 : currentColourIndex + 1;

        setColour(colours[nextColourIndex])
    }

    return (
        <div className='Bike componentBox'>
            <h2> My {make}</h2>

            <p> It is a <span style={{color: colour}}>{colour}</span> {model}</p>

            <button type="button" onClick={changeBikeColour}> Change colour </button>
        </div>
    )
}

export default Bike;