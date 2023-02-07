import React, { useState } from 'react'

function Reservation(props) {
    let today = new Date()

    const [name, setName] = useState('')
    const [isGoing, setIsGoing] = useState(true)
    const [numberOfGuests, setNumberOfGuests] = useState('')
    const [eventDate, setEventDate] = useState (today.getFullYear() + '-' + today.toLocaleString("default", { month: "2-digit" }) + '-' + today.getDate()) //default to today        
  
    //generic input handler update state for the changed value
    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log('setting input '+name+' value to '+value);

        // this.setState({
        //     [name]: value
        // });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, isGoing, numberOfGuests, eventDate)
        alert(`${name} is ${isGoing ? '' : 'not '}attending with ${numberOfGuests} guests on ${eventDate}`)
    }
  
    
    return (
        <form onSubmit={handleSubmit} className="Reservation componentBox">
            <h2>Reservation</h2>
            <label>
                Name:
                <input name="name" type="text" value={name} onChange={ (e) => setName(e.target.value) } />
            </label>&nbsp;                
            <label>
                Is going:
                <input name="isGoing" type="checkbox" checked={isGoing} onChange={(e) => setIsGoing(e.target.value)} />
            </label>
            <br />
            <label>
                Number of guests:
                <input name="numberOfGuests" type="number" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} />
            </label>
            <br/>
            <label>
                Date:
                <input name="eventDate" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
            </label>                
            <div><button>Register</button></div>
        </form>
    );
    

    //try modifying the above render method to create a form with different/extra inputs
}

export default Reservation;