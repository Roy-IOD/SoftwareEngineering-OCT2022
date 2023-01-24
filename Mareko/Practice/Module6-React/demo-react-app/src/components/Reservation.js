//see https://reactjs.org/docs/forms.html for more info
import React from 'react'

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            isGoing: true,
            numberOfGuests: 2,
            dietPreference: 'anything'
        };
    
        //this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    //generic input handler update state for the changed value
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value,

        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        alert(`${this.state.name} is ${this.state.isGoing ? '' : 'not '}attending with ${this.state.numberOfGuests} guests and this dietary preference is ${this.state.dietPreference}`)
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
                <br /><br/>

                <label>
                    Dietary Preference:<br />
                    <input id="carnaivore" type="radio" name="dietPreference" value='Carnaivore' onChange={this.handleInputChange} />
                    <label htmlFor="carnaivore">Carnaivore</label><br/>

                    <input id="vegetarian" type="radio" name="dietPreference" value='Vegetarian' onChange={this.handleInputChange} />
                    <label htmlFor="vegetarian">Vegetarian</label><br/>

                    <input id="vegan" type="radio" name="dietPreference" value='Vegan' onChange={this.handleInputChange} />
                    <label htmlFor="vegan">Vegan</label><br/>
                </label>

                <br />
                <div><button>Register</button></div>
            </form>
        );
    }

    //try modifying the above render method to create a form with different/extra inputs
}

export default Reservation;