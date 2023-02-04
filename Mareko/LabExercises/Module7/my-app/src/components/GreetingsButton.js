import React, { useState } from 'react'

function GreetingsButton(props) {
        
    const [name, setName] = useState('There');

    const namesList = ['Mareko', 'Donna', 'Waylan']

    const changeNameArray = () => {
        const currentNameIndex = namesList.indexOf(name); 
        const nextNameIndex = currentNameIndex === namesList.length-1 ? 0 : currentNameIndex + 1;

        setName(namesList[nextNameIndex])
        console.log('name has successfully been changed')

    }
    
    return(
        <div>
            <h1>Hello {name}</h1>
            <button onClick={changeNameArray}>Change Name</button>    
        </div>
    )
    
};

export default GreetingsButton;