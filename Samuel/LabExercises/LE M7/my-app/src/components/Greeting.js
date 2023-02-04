import React from 'react'
import { useEffect, useState } from "react";

function Greeting(props){
    const [name, setName] = useState('World')

    const changeName = () => {

        let newName = name === 'World' ? 'Sam' : 'World';

        setName(newName);
    }


    return (
    <div>
        <div className="Hello">
        Hello {name}
        </div>
        <button onClick={changeName}> Your Name </button>
    </div>
    )
}

export default Greeting;