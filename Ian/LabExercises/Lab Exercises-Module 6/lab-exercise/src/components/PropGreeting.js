import React from 'react';
import ReactDOM from 'react-dom';

let name = "Charlie";

class PropGreeting extends React.Component {
    render() {
        return <h1>Hello {this.props.name}!</h1>;
    }
};

export default PropGreeting;