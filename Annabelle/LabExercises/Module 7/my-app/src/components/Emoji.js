import React, { useState, useEffect } from 'react';
import {EmojiContext} from '../context/EmojiContext'

function Emoji(props) {
    const {emoji, setEmoji} = React.useContext(EmojiContext);

    const changeEmoji = () => 
    {let newEmoji = emoji  === '😀' ? '😭' : '😀';
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