//see https://reactjs.org/docs/forms.html for more info
import React from 'react'

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        let today = new Date()
        this.state = {
            name: '',
            isGoing: true,
            numberOfGuests: 2,
            specialRequests: "None",
            bookingDate: today.getFullYear() + '-' + today.toLocaleString("default", { month: "2-digit" }) + '-' + today.getDate(),
            bookingTime: '00:00:00'
        };
    
        //this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    //generic input handler update state for the changed value
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        alert(`${this.state.name} is ${this.state.isGoing ? '' : 'not '}attending with ${this.state.numberOfGuests} guests on ${this.state.bookingDate} at ${this.state.bookingTime}. Special Requests: ${this.state.specialRequests}`)
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="Reservation componentBox">
                <h2>Reservation</h2>
                
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
                </label>&nbsp; 

                <label>
                    Is going:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
                </label>

                <br />
                
                <label>
                    Number of guests:
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </label>
                
                <br />

                <label>
                    Select a date:
                    <input name="bookingDate" type="date" value={this.state.bookingDate} onChange={this.handleInputChange} />
                
                </label>
                
                <br /> 

                <label>
                    Select a time:
                    <input name="bookingTime" type="time" value={this.state.bookingTime} onChange={this.handleInputChange} />
                
                </label>
                
                <br /> 
                
                <label>
                    Special requests:
                    <input name="specialRequests" type="text" value={this.state.specialRequests} onChange={this.handleInputChange} />
                </label>
                
                <div><button>Register</button></div>

            </form>
        );
    }

    //try modifying the above render method to create a form with different/extra inputs
}

export default Reservation;