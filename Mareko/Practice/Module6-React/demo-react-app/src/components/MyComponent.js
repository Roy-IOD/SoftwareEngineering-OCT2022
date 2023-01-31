import React from 'react';

const userName = 'Mareko';

class MyComponent extends React.Component {

    render() {

        return (
            <div>

                <h1>Hello World, this is {userName}.</h1>
                <p> Welcome to my demo-react-app</p>
            
            </div>)

    }
};

export default MyComponent;