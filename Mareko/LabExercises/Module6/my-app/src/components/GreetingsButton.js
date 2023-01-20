import React from 'react';

class GreetingsButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'World' };
        this.nameChange = this.nameChange.bind(this);
    }
        
    nameChange() {
        this.setState({ name: 'Mareko' });
    }

    changeName = () => {
        let newName = this.state.name === 'World'? 'Mareko' : 'World';
        this.setState({name: newName})
    }


    names = ['Mareko', 'World', 'Donna', 'Waylan']

    changeNameArray = () => {
        const currentNameIndex = this.names.indexOf(this.state.name); //this variable looks at the current name in this.state and finds it's index within the names array.
        const nextNameIndex = currentNameIndex === this.names.length-1 ? 0 : currentNameIndex + 1; //this variable is a conditional statement that finds if the currentNameIndex has reached the end of the array by reading the array's length and taking away 1 (because when arrays are counted they start from 0). If it has reaced the end it will reset the count to 0, if not it will add 1 until the end is reached and the former is then executed. So the variable is basically scrolling through the array.

        this.setState({name: this.names[nextNameIndex]})//this will change the state and scroll through the names in the array whenever executed.

    }
    

    render() {
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
                <button onClick={this.nameChange}>Change</button>
                <button onClick={this.changeName}>Change Back and Forth</button>
                <button onClick={this.changeNameArray}>Change Name using Array</button>    
            </div>
        )
    }
};

export default GreetingsButton;