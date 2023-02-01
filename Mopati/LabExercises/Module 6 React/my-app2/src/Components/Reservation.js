//see https://reactjs.org/docs/forms.html for more info
import React from "react";

class Reservation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      isGoing: true,
      attire: "wakanda",
    };

    //this.handleInputChange = this.handleInputChange.bind(this);
  }

  //generic input handler update state for the changed value
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    alert(
      `${this.state.name} is ${this.state.isGoing ? "" : "not "}wearing ${
        this.state.attire
      } theme`
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Reservation componentBox">
        <h2>Reservation</h2>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        &nbsp;
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Attire:
          <select name="attire" onChange={this.handleInputChange}>
            <option>wakanda</option>
            <option>formal</option>
            <option>casual</option>
            <option>halloween</option>
          </select>
        </label>
        <div>
          <button>Register</button>
        </div>
      </form>
    );
  }

  //try modifying the above render method to create a form with different/extra inputs
}

export default Reservation;
