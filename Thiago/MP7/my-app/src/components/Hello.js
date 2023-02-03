import React from 'react';


//this is a FUNCTIONAL component. The JSX is returned directly and the props object is the argument to the function
function Hello(props) {
    return <div className="Hello componentBox">
        Hello {props.name ? props.name : 'World'}
    </div>
}


export default Hello;