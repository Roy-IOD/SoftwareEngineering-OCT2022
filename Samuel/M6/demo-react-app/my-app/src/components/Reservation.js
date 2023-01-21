//see https://reactjs.org/docs/forms.html for more info
import React from 'react'

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            isGoing: true,
            numberOfGuests: 2,
            nameOfTeam: 'Nuggets',
        };
    
        //this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    //generic input handler update state for the changed value
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name)
        console.log(value)
        
    
        this.setState({
            [name]: value,
            
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        alert(`${this.state.name} is ${this.state.isGoing ? '' : 'not '}searching for ${this.state.nameOfTeam} tickets for ${this.state.numberOfGuests} people`)
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="Reservation componentBox">
                <h2>Tickets</h2>
                <label>
                    Full Name:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                </label>&nbsp;                
                <label>
                    Is going:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of Tickets:
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>Which team would you like to see?</label>
                <select name="nameOfTeam" type="select" onChange={this.handleInputChange}>
                    <option value="Nuggets" >Nuggets</option>
                    <option value="Rockets" >Rockets</option>
                    <option value="Clippers" >Clippers</option>
                    <option value="Magic" >Magic</option>
                </select>
                <div><button>Find Tickets</button></div>
            </form>
        );
    }

    //try modifying the above render method to create a form with different/extra inputs
}

export default Reservation;