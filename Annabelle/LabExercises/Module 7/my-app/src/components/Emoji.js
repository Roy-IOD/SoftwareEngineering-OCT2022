import React, { useState, useEffect } from 'react';

function Emoji(props) {
    const [emoji, setEmoji] = useState('👽')
    const changeEmoji = () => 
    {let newEmoji = emoji  === '👽' ? '🐑' : '👽';
    setEmoji(newEmoji)
    }
    return (
    
    <div class = 'Button name change'>
    
    <h1>{emoji}</h1>
    <button onClick = {changeEmoji}> Change mood</button>

    </div>
    );
}

export default Emoji