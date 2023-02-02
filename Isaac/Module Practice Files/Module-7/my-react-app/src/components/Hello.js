import React from 'react';

function Hello(props) {
    return <div className="Hello componentBox">
        Hello {props.name ? props.name : 'World'}
    </div>
}

export default Hello;