import React from 'react'

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            isGoing: true,
            numberOfGuests: 2,
            dietaryRequirement: ''
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
        alert(`${this.state.name} is ${this.state.isGoing ? '' : 'not '}attending with ${this.state.numberOfGuests} guests and is ${this.state.dietaryRequirement}.`)
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
                <label>
                    Dietary Requirement:
                        <select name="dietaryRequirement" value={this.state.dietaryRequirement} onChange={this.handleInputChange} >
                              <option value='Gluten-Free' selected>Gluten-Free</option>
                              <option value='Lactose Intolerant'>Lactose Intolerant</option>
                              <option value='Vegan'>Vegan</option>
                              <option value='Carnivore'>Carnivore</option>
                        </select>
                </label>

                <div><button>Register</button></div>
            </form>
        );
    }
}

export default Reservation;