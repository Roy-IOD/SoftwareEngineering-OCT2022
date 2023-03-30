import React from 'react';

class Greetings extends React.Component {

    render() {

        if (this.props.name) {
            return (<h1>Hello {this.props.name}</h1>)
        }
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
        
    }
};

export default Greetings;