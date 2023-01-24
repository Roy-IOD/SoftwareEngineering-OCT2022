import React from 'react';

class PropGreeting extends React.Component {
    render() {
        return (
        <h1>Hello {this.props.name ? this.props.name : 'World'} from  {this.props.location}!</h1>
        )
    }
}


export default PropGreeting;