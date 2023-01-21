import React from 'react'

function Greeting(props){

    return (
        <div className="Hello">
            Hello {props.name}
        </div>
    )
}

export default Greeting;