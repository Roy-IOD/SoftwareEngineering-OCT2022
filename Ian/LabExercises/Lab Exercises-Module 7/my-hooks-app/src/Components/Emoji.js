import React, { useContext } from 'react';
import { EmojiContext } from '../context/EmojiContext';

function Emoji() {
    const { emoji, setEmoji } = React.useContext(EmojiContext);

    const changeEmoji = () => {
        let newEmoji =emoji === "😭" ? "😂" : "😭";
        setEmoji(newEmoji);
    }

    return (
        <div className='Emoji componentBox'>
            {emoji}
            <button onClick={changeEmoji}>Switch Emoji</button>
        </div>
    );
}

export default Emoji;