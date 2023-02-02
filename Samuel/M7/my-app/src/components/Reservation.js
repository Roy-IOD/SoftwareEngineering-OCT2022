import React from 'react'
import { useEffect, useState } from "react";

function Reservation(props) {
    const [name, setName] = useState('')
    const [isGoing, setIsGoing] = useState(true)
    const [numberOfGuests, setNumberOfGuests] = useState(2)
    const [nameOfTeam, setNameOfTeam] = useState('Nuggets')

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, isGoing, numberOfGuests, nameOfTeam)
    alert(`${name} is ${isGoing ? '' : 'not'} searching for ${nameOfTeam} tickets for ${numberOfGuests} people`)
   }

   return (
    <form onSubmit={handleSubmit} className="Reservation componentBox">
        <h2>Tickets</h2>
        <label>
            Full Name:
            <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>&nbsp;                
        <label>
            Is going:
            <input name="isGoing" type="checkbox" checked={isGoing} onChange={(e) => setIsGoing(e.target.value)} />
        </label>
        <br />
        <label>
            Number of Tickets:
            <input name="numberOfGuests" type="number" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} />
        </label>
        <br />
        <label>Which team would you like to see?</label>
        <select name="nameOfTeam" type="select" onChange={(e) => setNameOfTeam(e.target.value)}>
            <option value="Nuggets" >Nuggets</option>
            <option value="Rockets" >Rockets</option>
            <option value="Clippers" >Clippers</option>
            <option value="Magic" >Magic</option>
        </select>
        <div><button>Find Tickets</button></div>
    </form>
);
}

export default Reservation;