import React, {useState } from 'react';

function MyGreeting() {
    const [name, setName] = useState('world');
    
    const changeName = () => {
        setName(name === 'world' ? 'Charlie' : 'world');
    };

    return (
        <div>
            <h1>Hello {name ? name : 'World'}!</h1>
            <button onClick={changeName}>Change Name</button>
        </div>
        );
    }
export default MyGreeting;

