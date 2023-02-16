import React, { useState, useEffect } from 'react';

function Greeting(props) {
    const [name, setName] = useState('no name')
    const changeName = () => 
    {let newName = name === 'no name' ? 'Annabelle' : 'no name';
    setName(newName)
    }
    return (
    
    <div className = 'Button name change'>
    
    <h1>Hello {name}</h1>
    <button onClick = {changeName}> Change name</button>

    </div>
    );
}

export default Greeting